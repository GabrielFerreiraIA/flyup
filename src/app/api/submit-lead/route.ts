import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { FONTES, EXPERIENCE_IDS, EXPERIENCE_VALUES, parseFonte, type StandardLeadPayload } from '@/lib/webhook-integration'

const FLYUP_WEBHOOK_URL_PROD = 'https://hostinger-n8n.ac8iku.easypanel.host/webhook/flyup-lead'
const FLYUP_WEBHOOK_URL_TEST = 'https://hostinger-n8n.ac8iku.easypanel.host/webhook-test/flyup-lead'
const COMPANY_ID = 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1'

function getServiceClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
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
        fonte = 'geral',
        experience_title = '',
        page_path = '',
        referrer = '',
        utm_source = '',
        utm_medium = '',
        utm_campaign = '',
        utm_content = '',
        utm_term = '',
        device_type = 'desktop',
    } = body

    if (!nome?.trim() || !telefone?.trim()) {
        return NextResponse.json({ error: 'nome e telefone são obrigatórios' }, { status: 400 })
    }

    const fonte_label = FONTES[fonte] || fonte

    // Remove sufixos parentéticos como " (V3)", " (AFF)" etc. antes do lookup
    const cleanTitle = (experience_title || '').replace(/\s*\([^)]*\)\s*$/, '').trim()

    // Tenta match exato, depois sem sufixo, depois case-insensitive
    let experience_id = EXPERIENCE_IDS[experience_title] || EXPERIENCE_IDS[cleanTitle]

    if (!experience_id && (experience_title || cleanTitle)) {
        const normalizedTitle = cleanTitle.toLowerCase()
        for (const [key, value] of Object.entries(EXPERIENCE_IDS)) {
            if (key.toLowerCase() === normalizedTitle) {
                experience_id = value
                break
            }
        }
    }

    // Fallback: extrair experience_id da fonte se disponível
    if (!experience_id && fonte) {
        const parsed = parseFonte(fonte)
        // Se encontrou algo na página, tenta usar como experience_id
        if (parsed.page && parsed.page !== 'geral') {
            experience_id = parsed.page
        }
    }

    // Último fallback: slug automático
    if (!experience_id && experience_title) {
        experience_id = experience_title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    }

    const { page, section, variant } = parseFonte(fonte)
    const valor_estimado = EXPERIENCE_VALUES[experience_id || ''] ?? 0

    const supabase = getServiceClient()

    // 1. Inserir lead
    const { data: lead, error: leadError } = await supabase
        .from('leads')
        .insert([{
            company_id: COMPANY_ID,
            nome: nome.trim(),
            telefone,
            email: email?.trim() || null,
            experience_id: experience_id || null,
            fonte,
            fonte_label,
            source: fonte,
            status: 'novo',
            temperatura: 'quente',
            valor_estimado,
            device_type,
        }])
        .select('id')
        .single()

    if (leadError) {
        console.error('[submit-lead] Erro ao inserir lead:', leadError)
        return NextResponse.json({ error: leadError.message }, { status: 500 })
    }

    const lead_id = lead.id

    // Payload canônico — mesmo contrato para tracking e N8N
    const payload: StandardLeadPayload = {
        lead_id,
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
    }

    // 2. Inserir tracking (usa o payload canônico diretamente)
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
        // Tracking falhou mas lead foi criado — não bloquear o fluxo
        console.error('[submit-lead] Erro ao inserir tracking:', trackingError)
    }

    // 3. Disparar webhook N8N com o mesmo payload canônico
    Promise.all(
        [FLYUP_WEBHOOK_URL_PROD, FLYUP_WEBHOOK_URL_TEST].map(url =>
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }).catch(e => console.error(`[submit-lead] Webhook ${url} falhou:`, e.message))
        )
    )

    return NextResponse.json({ ok: true, lead_id })
}
