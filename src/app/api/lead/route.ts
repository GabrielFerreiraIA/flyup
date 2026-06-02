import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { FONTES, EXPERIENCE_IDS } from '@/lib/webhook-integration';

const FLYUP_COMPANY_ID = 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1';

// Rota sempre dinâmica — não pré-renderiza no build
export const dynamic = 'force-dynamic';

// Cliente criado sob demanda (lazy) para não ser avaliado durante o build,
// quando SUPABASE_SERVICE_ROLE_KEY pode não estar disponível.
function getServiceClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
}

// Mapeia page_path → identificador curto de página para a tabela tracking
function resolvePageSlug(pagePath: string): string {
    if (pagePath === '/' || pagePath === '') return 'home';
    if (pagePath.startsWith('/salto-duplo')) return 'salto-duplo';
    if (pagePath.startsWith('/curso-aff-pro') || pagePath.startsWith('/curso-aff')) return 'curso-aff';
    if (pagePath.startsWith('/salto-balao')) return 'salto-balao';
    if (pagePath.startsWith('/tunel-de-vento')) return 'tunel-de-vento';
    if (pagePath.startsWith('/wingsuit-experience')) return 'wingsuit';
    if (pagePath.startsWith('/curso-wingsuit')) return 'curso-wingsuit';
    if (pagePath === '/links-youtube') return 'links-youtube';
    if (pagePath.startsWith('/links')) return 'links';
    if (pagePath.startsWith('/blog')) return 'blog';
    return pagePath.replace(/^\//, '') || 'desconhecido';
}

// Extrai a seção a partir da chave fonte (ex: 'salto-duplo-pricing-vip' → 'pricing')
function resolveSection(fonte: string): string {
    if (fonte.includes('-hero-')) return 'hero';
    if (fonte.includes('-pricing-')) return 'pricing';
    if (fonte.includes('-card-')) return 'card';
    if (fonte.includes('navbar')) return 'navbar';
    if (fonte.includes('popup')) return 'popup';
    if (fonte.includes('whatsapp')) return 'whatsapp';
    if (fonte.includes('blog')) return 'blog';
    return 'geral';
}

// Extrai variante de pricing da chave fonte (ex: 'salto-duplo-pricing-vip' → 'vip')
function resolveVariant(fonte: string): string | undefined {
    const pricingVariants = ['fun', 'selfie', 'experience', 'vip', 'online', 'convencional', 'pro',
        'first-flight', 'pro-flyer', 'camp-intensivo', 'intro', 'pack-performance',
        'duplo', 'coletivo', 'familia', 'casal', 'atleta', 'teorico-n1', 'confirmar'];
    for (const v of pricingVariants) {
        if (fonte.endsWith(`-${v}`) || fonte.includes(`-${v}-`)) return v;
    }
    return undefined;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            nome, telefone, email = '',
            fonte = 'geral',
            experience_nome = '',
            page_path = '',
            utm_source, utm_medium, utm_campaign, utm_content, utm_term,
            referrer = '', user_agent = '',
        } = body;

        if (!nome || !telefone) {
            return NextResponse.json(
                { ok: false, error: 'nome e telefone são obrigatórios' },
                { status: 400 }
            );
        }

        const fonte_label = FONTES[fonte] || fonte;
        const experience_id = EXPERIENCE_IDS[experience_nome]
            || experience_nome.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const page = resolvePageSlug(page_path);
        const section = resolveSection(fonte);
        const experience_variant = resolveVariant(fonte);

        const supabase = getServiceClient();

        // ── 1. Inserir lead ────────────────────────────────────────────────────
        const { data: lead, error: leadError } = await supabase
            .from('leads')
            .insert({
                company_id: FLYUP_COMPANY_ID,
                nome: nome.trim(),
                telefone: telefone.trim(),
                email: email.trim() || null,
                fonte,
                source: fonte,
                status: 'novo',
                funil: experience_nome || null,
                tags: [experience_id, page, section].filter(v => v && v !== 'desconhecido' && v !== 'geral'),
            })
            .select('id')
            .single();

        if (leadError) {
            console.error('[/api/lead] Erro ao inserir lead:', leadError);
            return NextResponse.json({ ok: false, error: leadError.message }, { status: 500 });
        }

        // ── 2. Inserir registro de tracking ───────────────────────────────────
        const { error: trackingError } = await supabase
            .from('tracking')
            .insert({
                company_id: FLYUP_COMPANY_ID,
                lead_id: lead.id,
                event_type: 'form_submit',
                fonte,
                fonte_label,
                experience_id: experience_id || null,
                experience_nome: experience_nome || null,
                experience_variant: experience_variant || null,
                page,
                page_path: page_path || null,
                section,
                nome: nome.trim(),
                telefone: telefone.trim(),
                email: email.trim() || null,
                utm_source: utm_source || null,
                utm_medium: utm_medium || null,
                utm_campaign: utm_campaign || null,
                utm_content: utm_content || null,
                utm_term: utm_term || null,
                referrer: referrer || null,
                user_agent: user_agent || null,
            });

        if (trackingError) {
            // Tracking é não-crítico — loga mas não falha a resposta
            console.error('[/api/lead] Erro ao inserir tracking:', trackingError);
        }

        return NextResponse.json({ ok: true, lead_id: lead.id });

    } catch (err: any) {
        console.error('[/api/lead] Erro inesperado:', err);
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}
