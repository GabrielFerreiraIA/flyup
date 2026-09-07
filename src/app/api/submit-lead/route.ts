import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import {
    EXPERIENCE_IDS,
    EXPERIENCE_VALUES,
    VALID_EXPERIENCE_IDS,
    normalizeFonte,
    resolveFonteLabel,
    parseFonte,
    type StandardLeadPayload,
} from '@/lib/webhook-integration'

const COMPANY_ID = 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1'

// Nunca pré-renderiza no build (SUPABASE_SERVICE_ROLE_KEY pode não existir lá)
export const dynamic = 'force-dynamic'

function getServiceClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
}

// ─── Destinos do N8N (server-only) ───────────────────────────────────────────
// Existem DUAS instâncias de N8N no ar respondendo /webhook/flyup-lead, com
// workflows DIFERENTES — não são redundantes, o lead precisa chegar nas duas:
//
//   hostinger-n8n.ac8iku.easypanel.host → "AVISOS GRUPO": notifica a equipe
//   n8n.server.sermelhor.site           → confirmação por WhatsApp para o lead
//
// O motivo de "lead no CRM mas nenhuma execução no N8N" foi o site chamar
// apenas uma delas enquanto o workflow de aviso vivia na outra.
// Sobrescrevível por env (separado por vírgula), sempre com a URL de PRODUÇÃO
// (/webhook/...); a variante /webhook-test/ é derivada automaticamente:
//   N8N_WEBHOOK_URLS=https://a/webhook/flyup-lead,https://b/webhook/flyup-lead
const DEFAULT_N8N_HOSTS = [
    'https://hostinger-n8n.ac8iku.easypanel.host',
    'https://n8n.server.sermelhor.site',
]

function n8nTargets(): string[] {
    const fromEnv = (process.env.N8N_WEBHOOK_URLS || '')
        .split(',')
        .map(u => u.trim())
        .filter(Boolean)
    if (fromEnv.length) return fromEnv
    return DEFAULT_N8N_HOSTS.map(h => `${h}/webhook/flyup-lead`)
}

// URL de teste (/webhook-test/...) só responde enquanto o editor do N8N está
// com "Execute workflow" ligado. Fora disso é 404 — esperado, nunca é erro.
function n8nTestTargets(): string[] {
    return n8nTargets().map(u => u.replace('/webhook/', '/webhook-test/'))
}

/**
 * Dispara o webhook do N8N. Precisa ser AGUARDADO: em serverless (Netlify),
 * promise solta é morta junto com o processo assim que a resposta é devolvida
 * — era essa a causa de o aviso sumir sem deixar rastro.
 */
async function dispatchN8N(payload: StandardLeadPayload) {
    const targets = n8nTargets()

    const results = await Promise.allSettled(
        [...targets, ...n8nTestTargets()].map(url =>
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: AbortSignal.timeout(8000),
            }).then(r => ({ url, status: r.status }))
        )
    )

    // Só os destinos de produção contam para o resultado. Basta um responder
    // < 400 para o aviso ter saído.
    const prodResults = results.slice(0, targets.length)
    let ok = false

    prodResults.forEach((r, i) => {
        if (r.status === 'fulfilled' && r.value.status < 400) {
            ok = true
        } else {
            console.error(
                `[submit-lead] Webhook N8N falhou (${targets[i]}):`,
                r.status === 'fulfilled' ? `HTTP ${r.value.status}` : r.reason?.message
            )
        }
    })

    return ok
}

export async function POST(request: Request) {
    let body: Record<string, string>
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: 'Payload inválido' }, { status: 400 })
    }

    const {
        nome,
        telefone,
        email,
        fonte: rawFonte = 'geral',
        experience_title = '',
        page_path = '',
        referrer = '',
        utm_source = '',
        utm_medium = '',
        utm_campaign = '',
        utm_content = '',
        utm_term = '',
        device_type = 'desktop',
        pessoas = '',
    } = body

    if (!nome?.trim() || !telefone?.trim()) {
        return NextResponse.json({ error: 'nome e telefone são obrigatórios' }, { status: 400 })
    }

    const fonte = normalizeFonte(rawFonte)
    const fonte_label = resolveFonteLabel(rawFonte)

    // Remove sufixos parentéticos como " (V3)", " (AFF)" antes do lookup
    const cleanTitle = (experience_title || '').replace(/\s*\([^)]*\)\s*$/, '').trim()

    let experience_id = EXPERIENCE_IDS[experience_title] || EXPERIENCE_IDS[cleanTitle]

    if (!experience_id && cleanTitle) {
        const normalizedTitle = cleanTitle.toLowerCase()
        for (const [key, value] of Object.entries(EXPERIENCE_IDS)) {
            if (key.toLowerCase() === normalizedTitle) {
                experience_id = value
                break
            }
        }
    }

    const { page, section, variant } = parseFonte(fonte)

    // Fallback: deduz a experiência pela página da fonte (ex: 'card-aff-pro' → curso-aff)
    if (!experience_id && page !== 'geral') {
        experience_id = page
    }

    // `leads.experience_id` é FK para `experiences`. Um slug inventado
    // (ex: 'aff-pro', 'te-rico-n-vel-1') quebra o INSERT e derruba o lead inteiro.
    // Fora da lista canônica, grava null e preserva o texto em experience_nome.
    if (experience_id && !VALID_EXPERIENCE_IDS.has(experience_id)) {
        console.warn(
            `[submit-lead] experience_id "${experience_id}" não existe em experiences — gravando null`
        )
        experience_id = ''
    }

    const valor_estimado = EXPERIENCE_VALUES[experience_id] ?? 0

    // "6+" vira 6 pra efeito de valor (conservador); sem resposta, assume 1
    // pessoa e o valor de oportunidade fica igual ao valor_estimado de sempre.
    const pessoasNum = pessoas ? parseInt(pessoas.replace('+', ''), 10) || 1 : 1
    const valor_oportunidade = valor_estimado * pessoasNum

    // Payload canônico — mesmo contrato para Supabase e N8N
    const payload: StandardLeadPayload = {
        lead_id:            '',
        nome:               nome.trim(),
        telefone,
        telefone_br:        telefone.startsWith('+55') ? telefone.replace('+55', '') : telefone,
        email:              email?.trim() || '',
        experience_id:      experience_id || '',
        experience_nome:    experience_title || '',
        experience_variant: variant || '',
        fonte,
        fonte_label,
        page,
        page_path:          page_path || '',
        section:            section || '',
        device_type:        (device_type === 'mobile' ? 'mobile' : 'desktop'),
        utm_source:         utm_source || '',
        utm_medium:         utm_medium || '',
        utm_campaign:       utm_campaign || '',
        utm_content:        utm_content || '',
        utm_term:           utm_term || '',
        referrer:           referrer || '',
        company_id:         COMPANY_ID,
        data_hora:          new Date().toISOString(),
        pessoas:            pessoasNum,
    }

    const supabase = getServiceClient()

    // ── 1. Lead no Supabase (alimenta o CRM) ──────────────────────────────────
    let leadError: string | null = null
    const { data: lead, error: insertError } = await supabase
        .from('leads')
        .insert([{
            company_id:    COMPANY_ID,
            nome:          payload.nome,
            telefone:      payload.telefone,
            email:         payload.email || null,
            experience_id: experience_id || null,
            fonte,
            fonte_label,
            status:        'novo',
            temperatura:   'quente',
            valor_estimado,
            // O CRM (Kanban, tabela, ordenação) lê valor_oportunidade, não
            // valor_estimado — sem isso o valor do lead nunca aparecia lá.
            valor_oportunidade,
            description:   pessoas ? `Grupo de ${pessoas} pessoa${pessoas === '1' ? '' : 's'}` : null,
            device_type:   payload.device_type,
        }])
        .select('id')
        .single()

    if (insertError) {
        leadError = insertError.message
        console.error('[submit-lead] Erro ao inserir lead:', insertError)
    } else {
        payload.lead_id = lead.id
    }

    // ── 2. Tracking (não crítico) ─────────────────────────────────────────────
    if (payload.lead_id) {
        const { error: trackingError } = await supabase
            .from('tracking')
            .insert([{
                company_id:         payload.company_id,
                lead_id:            payload.lead_id,
                event_type:         'form_submit',
                fonte:              payload.fonte,
                fonte_label:        payload.fonte_label,
                experience_id:      payload.experience_id || null,
                experience_nome:    payload.experience_nome || null,
                experience_variant: payload.experience_variant || null,
                page:               payload.page,
                page_path:          payload.page_path || null,
                section:            payload.section || null,
                nome:               payload.nome,
                telefone:           payload.telefone,
                email:              payload.email || null,
                utm_source:         payload.utm_source || null,
                utm_medium:         payload.utm_medium || null,
                utm_campaign:       payload.utm_campaign || null,
                utm_content:        payload.utm_content || null,
                utm_term:           payload.utm_term || null,
                referrer:           payload.referrer || null,
                device_type:        payload.device_type,
            }])

        if (trackingError) {
            console.error('[submit-lead] Erro ao inserir tracking:', trackingError)
        }
    }

    // ── 3. Webhook N8N (gera o aviso) ─────────────────────────────────────────
    // Roda mesmo se o Supabase falhar: os dois fluxos são independentes e uma
    // falha de FK/coluna não pode custar o aviso do lead.
    const webhookOk = await dispatchN8N(payload)

    if (leadError && !webhookOk) {
        return NextResponse.json({ error: leadError, webhook: false }, { status: 500 })
    }

    return NextResponse.json({
        ok: true,
        lead_id: payload.lead_id || null,
        supabase: !leadError,
        webhook: webhookOk,
        ...(leadError ? { lead_error: leadError } : {}),
    })
}
