/**
 * FlyUp — Integração de Webhook para o Site
 *
 * Configure a URL do N8N em FLYUP_WEBHOOK_URL.
 */

const FLYUP_WEBHOOK_URL_TEST = 'https://n8n.server.sermelhor.site/webhook-test/flyup-lead';
const FLYUP_WEBHOOK_URL_PROD = 'https://n8n.server.sermelhor.site/webhook/flyup-lead';

export const FONTES: Record<string, string> = {
    // ─── HOME ────────────────────────────────────────────────────────────────
    'home-hero-agendar':          'Botão Agendar — Hero Principal',
    'home-card-salto-duplo':      'Card Salto Duplo — Home',
    'home-card-curso-aff':        'Card Curso AFF — Home',
    'home-card-salto-balao':      'Card Salto de Balão — Home',
    'home-card-tunel-vento':      'Card Túnel de Vento — Home',
    'home-card-wingsuit':         'Card Wingsuit — Home',
    'cta-sticky-home':            'Banner Sticky — Home',

    // ─── NAVBAR (global em todas as páginas) ─────────────────────────────────
    'navbar-agendar':             'Botão Agendar — Navbar',

    // ─── SALTO DUPLO ─────────────────────────────────────────────────────────
    'salto-duplo-hero-agendar':        'Botão Agendar — Hero Salto Duplo',
    'salto-duplo-pricing-fun':         'Card Pricing FUN — Salto Duplo',
    'salto-duplo-pricing-selfie':      'Card Pricing Selfie — Salto Duplo',
    'salto-duplo-pricing-experience':  'Card Pricing Experience — Salto Duplo',
    'salto-duplo-pricing-vip':         'Card Pricing VIP — Salto Duplo',

    // ─── CURSO AFF PRO ───────────────────────────────────────────────────────
    'aff-hero-iniciar':           'Botão Iniciar Formação — Hero AFF',
    'aff-comparison-cta':         'CTA Aprovação Garantida — Comparação AFF',
    'aff-pricing-confirmar':      'Botão Confirmar Interesse — Pricing AFF',
    'card-aff-online':            'Card Curso Online — Comece do Seu Jeito',
    'card-aff-teorico-n1':        'Card Teórico + N1 — Comece do Seu Jeito',
    'card-aff-convencional':      'Card AFF Convencional — Comece do Seu Jeito',
    'card-aff-pro':               'Card AFF PRO — Comece do Seu Jeito',

    // ─── SALTO DE BALÃO ──────────────────────────────────────────────────────
    'salto-balao-hero-agendar':       'Botão Agendar — Hero Salto de Balão',
    'salto-balao-pricing-duplo':      'Card Pricing Salto Duplo de Balão — Balão',
    'salto-balao-pricing-coletivo':   'Card Pricing Balão Coletivo — Balão',
    'salto-balao-pricing-familia':    'Card Pricing Família — Balão',
    'salto-balao-pricing-casal':      'Card Pricing Casal — Balão',
    'salto-balao-pricing-atleta':     'Card Pricing Atleta — Balão',

    // ─── TÚNEL DE VENTO ──────────────────────────────────────────────────────
    'tunel-hero-agendar':             'Botão Agendar — Hero Túnel de Vento',
    'tunel-pricing-first-flight':     'Card Pricing First Flight — Túnel',
    'tunel-pricing-pro-flyer':        'Card Pricing Pro Flyer 15 — Túnel',
    'tunel-pricing-camp-intensivo':   'Card Pricing Camp Intensivo — Túnel',

    // ─── WINGSUIT EXPERIENCE ─────────────────────────────────────────────────
    'wingsuit-hero-agendar':              'Botão Agendar — Hero Wingsuit',
    'wingsuit-pricing-intro':             'Card Pricing Intro Wingsuit — Wingsuit',
    'wingsuit-pricing-pack-performance':  'Card Pricing Pack Performance — Wingsuit',

    // ─── CURSO WINGSUIT ──────────────────────────────────────────────────────
    'botao-agendar-curso-wingsuit':   'Botão Agendar — Página Curso Wingsuit',

    // ─── PÁGINA /links ───────────────────────────────────────────────────────
    'links-card-agendar-salto-duplo': 'Card Agendar Salto Duplo — Link Tree',
    'links-whatsapp-flutuante':       'WhatsApp Flutuante — Link Tree',

    // ─── PÁGINA /links-youtube ───────────────────────────────────────────────
    'links-youtube-card-agendar-salto-duplo': 'Card Agendar Salto Duplo — Link Tree YouTube',
    'links-youtube-whatsapp-flutuante':       'WhatsApp Flutuante — Link Tree YouTube',

    // ─── BLOG ────────────────────────────────────────────────────────────────
    'blog-lista-cta':             'CTA — Listagem do Blog',
    'blog-como-funciona-cta':     'CTA — Artigo Como Funciona Salto Duplo',
    'blog-sensacao-cta':          'CTA — Artigo Sensação no Salto Duplo',
    'blog-quanto-tempo-cta':      'CTA — Artigo Quanto Tempo Dura o Salto',
    'blog-idade-minima-cta':      'CTA — Artigo Idade Mínima e Pré-requisitos',
    'blog-aff-apos-salto-cta':    'CTA — Artigo Curso AFF Após Salto Duplo',
    'blog-aff-fases-cta':         'CTA — Artigo Fases do Curso AFF',

    // ─── POPUPS ──────────────────────────────────────────────────────────────
    'popup-desconto-salto-duplo': 'Pop-up Desconto 10% — Salto Duplo',
    'popup-exit-intent':          'Pop-up Saída — Site',

    // ─── WHATSAPP FLUTUANTE (global) ─────────────────────────────────────────
    'whatsapp-flutuante':         'WhatsApp Flutuante — Global',

    // ─── TRÁFEGO EXTERNO / PAGO ──────────────────────────────────────────────
    'link-bio-instagram':         'Link Bio — Instagram',
    'story-instagram':            'Story — Instagram',
    'google-ads-salto-duplo':     'Google Ads — Salto Duplo',
    'google-ads-aff':             'Google Ads — AFF',
    'facebook-ads':               'Facebook Ads',
    'whatsapp-direto':            'WhatsApp Direto',
    'indicacao-cliente':          'Indicação de Cliente',
    'email-marketing':            'E-mail Marketing',

    // ─── LEGADO (mantidos para não quebrar dados históricos) ─────────────────
    'cta-hero-home':                    'Hero — Página Principal (legado)',
    'link-home-salto-duplo':            'Link Salto Duplo — Home (legado)',
    'link-home-curso-aff':              'Link Curso AFF — Home (legado)',
    'link-home-salto-balao':            'Link Voos e Saltos de Balão — Home (legado)',
    'link-home-tunel-vento':            'Link Túnel de Vento — Home (legado)',
    'link-home-wingsuit':               'Link Wingsuit — Home (legado)',
    'link-home-aff':                    'Link AFF — Home (legado)',
    'link-home-batismo':                'Link Batismo — Home (legado)',
    'botao-agendar-salto-duplo':        'Botão Agendar — Página Salto Duplo (legado)',
    'botao-agendar-salto-duplo-meio':   'Botão Agendar Meio — Salto Duplo (legado)',
    'botao-agendar-salto-duplo-rodape': 'Botão Agendar Rodapé — Salto Duplo (legado)',
    'salto-duplo-page':                 'Página Salto Duplo (legado)',
    'botao-agendar-salto-balao':        'Botão Agendar — Página Salto de Balão (legado)',
    'botao-agendar-aff':                'Botão Agendar — Página Curso AFF (legado)',
    'botao-iniciar-aff':                'Botão Iniciar — Página AFF (legado)',
    'botao-cta-aff':                    'CTA Principal — Página AFF (legado)',
    'botao-agendar-tunel-vento':        'Botão Agendar — Página Túnel de Vento (legado)',
    'botao-agendar-wingsuit':           'Botão Agendar — Página Wingsuit Experience (legado)',
    'botao-agendar-batismo':            'Botão Agendar — Página Batismo Indoor (legado)',
    'botao-pacote-aff':                 'Botão Pacote AFF Completo (legado)',
    'links_tree':                       'Link Tree (legado)',
};

interface FormData {
    nome: string;
    telefone: string;
    email?: string;
}

// Mapa fixo: título da experiência no site → ID da tabela `experiences` no Supabase
// Garante a FK correta sem depender de slug automático
export const EXPERIENCE_IDS: Record<string, string> = {
    'Salto Duplo':          'salto-duplo',
    'Curso AFF':            'curso-aff',
    'Salto de Balão':       'salto-balao',
    'Voos e Saltos de Balão': 'salto-balao',
    'Túnel de Vento':       'tunel-vento',
    'Wingsuit':             'wingsuit',
    'Wingsuit Experience':  'wingsuit',
    'Pacote AFF Completo':  'pacote-aff',
    'Curso de Brevê':       'curso-brevet',
    'Salto Solo AFF':       'salto-solo-aff',
    'Batismo Indoor':       'batismo-indoor',
    'Batismo de Voo Indoor':'batismo-indoor',
};

export function buildPayload(formData: FormData, fonte: string = 'geral', experiencia: string = '') {
    const fonteLabel = FONTES[fonte] || fonte;

    // Resolve o ID da experiência usando o mapa fixo (fallback para slug automático)
    const telefoneNumerico = formData.telefone;
    const experienceId = EXPERIENCE_IDS[experiencia]
        || experiencia.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    return {
        nome: formData.nome?.trim() || '',
        telefone: telefoneNumerico,
        telefone_br: telefoneNumerico.startsWith('+55') ? telefoneNumerico.replace('+55', '') : '',
        email: formData.email?.trim() || '',
        experience_id: experienceId,
        experience_nome: experiencia,
        fonte: fonte,
        fonte_label: fonteLabel,
        data_hora: new Date().toISOString(),
        webhook_payload: JSON.stringify({ ...formData, fonte, experiencia })
    };
}

export async function sendWebhook(
    formData: FormData,
    fonte: string = 'geral',
    experiencia: string = '',
    _options?: {
        device_type?: string;
        page_path?: string;
        referrer?: string;
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        utm_content?: string;
        utm_term?: string;
    }
) {
    const payload = buildPayload(formData, fonte, experiencia);

    try {
        // Envia para ambas as URLs de forma assíncrona para que capte no painel de Teste e no fluxo Ativo.
        const reqs = [FLYUP_WEBHOOK_URL_PROD, FLYUP_WEBHOOK_URL_TEST].map(url =>
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }).catch(e => ({ ok: false, error: e.message })) // Isola erros caso o de teste não esteja escutando
        );

        const responses = await Promise.all(reqs);

        // Consideramos sucesso se a chamada de produção funcionar (primeiro elemento)
        const prodResponse: any = responses[0];

        if (!prodResponse || prodResponse.ok === false) {
            return { ok: false, error: prodResponse?.error || `HTTP Invalido Prod` };
        }

        const data = await prodResponse.json?.();
        return { ok: true, leadId: data?.lead_id };
    } catch (err: any) {
        return { ok: false, error: err.message };
    }
}

export const FlyUpWebhook = { send: sendWebhook, buildPayload, FONTES };

// ─── Valor estimado por experiência (R$) ─────────────────────────────────────
export const EXPERIENCE_VALUES: Record<string, number> = {
    'salto-duplo':    745,
    'curso-aff':     7750,
    'salto-balao':    450,
    'tunel-vento':    350,
    'wingsuit':       890,
    'pacote-aff':    7750,
    'curso-brevet':   500,
    'salto-solo-aff': 890,
    'batismo-indoor': 350,
};

// ─── Tipo canônico de payload de lead ────────────────────────────────────────
export interface StandardLeadPayload {
    lead_id: string;
    nome: string;
    telefone: string;
    telefone_br: string;
    email: string;
    experience_id: string;
    experience_nome: string;
    experience_variant: string;
    fonte: string;
    fonte_label: string;
    page: string;
    page_path: string;
    section: string;
    device_type: 'mobile' | 'desktop';
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    referrer: string;
    company_id: string;
    data_hora: string;
}

// ─── Extrai page, section e variant de uma chave fonte ───────────────────────
export function parseFonte(fonte: string): { page: string; section: string; variant?: string } {
    const pricingVariants = ['fun', 'selfie', 'experience', 'vip', 'online', 'convencional', 'pro',
        'first-flight', 'pro-flyer', 'camp-intensivo', 'intro', 'pack-performance',
        'duplo', 'coletivo', 'familia', 'casal', 'atleta', 'teorico-n1', 'confirmar',
        'handycam', 'supervip', 'supervipplus'];

    // Detecta página
    let page = 'geral';
    if (fonte.startsWith('salto-duplo') || fonte.includes('-salto-duplo')) page = 'salto-duplo';
    else if (fonte.startsWith('aff-') || fonte.includes('-aff') || fonte.startsWith('botao-agendar-aff') || fonte.startsWith('botao-iniciar-aff') || fonte.startsWith('card-aff')) page = 'curso-aff';
    else if (fonte.startsWith('salto-balao') || fonte.includes('-salto-balao')) page = 'salto-balao';
    else if (fonte.startsWith('tunel') || fonte.includes('-tunel')) page = 'tunel-vento';
    else if (fonte.startsWith('wingsuit') || fonte.includes('-wingsuit')) page = 'wingsuit';
    else if (fonte.startsWith('home') || fonte.includes('home-')) page = 'home';
    else if (fonte.startsWith('blog')) page = 'blog';
    else if (fonte.startsWith('links')) page = 'links';

    // Detecta seção
    let section = 'geral';
    if (fonte.includes('-hero-') || fonte.endsWith('-hero')) section = 'hero';
    else if (fonte.includes('-pricing-') || fonte.includes('-card-')) section = 'pricing';
    else if (fonte.includes('navbar')) section = 'navbar';
    else if (fonte.includes('popup')) section = 'popup';
    else if (fonte.includes('whatsapp')) section = 'whatsapp';

    // Detecta variant de pricing
    let variant: string | undefined;
    for (const v of pricingVariants) {
        if (fonte.endsWith(`-${v}`) || fonte.includes(`-${v}-`)) {
            variant = v;
            break;
        }
    }

    return { page, section, variant };
}
