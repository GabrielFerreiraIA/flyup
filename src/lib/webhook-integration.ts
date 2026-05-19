/**
 * FlyUp — Integração de Webhook e tracking de leads
 */

export const FONTES: Record<string, string> = {
    // ── Home ──────────────────────────────────────────────────────────
    'home-hero-agendar':       'Botão Agendar — Hero Principal',
    'home-card-salto-duplo':   'Card Salto Duplo — Home',
    'home-card-curso-aff':     'Card Curso AFF — Home',
    'home-card-salto-balao':   'Card Salto de Balão — Home',
    'home-card-tunel-vento':   'Card Túnel de Vento — Home',
    'home-card-wingsuit':      'Card Wingsuit — Home',
    'cta-sticky-home':         'Banner Sticky — Home',
    'banner-oportunidade':     'Banner Oportunidade — Hero',
    'links-tree':                'Link Tree Principal',
    'links-instagram':           'Link Tree — Instagram',
    'links-youtube':             'Link Tree — YouTube',
    'aff-pricing-new-confirmar': 'Botão Confirmar — AFF Pricing New',

    // Legado home
    'cta-hero-home':           'Hero — Página Principal',
    'link-home-salto-duplo':   'Link Salto Duplo — Home',
    'link-home-curso-aff':     'Link Curso AFF — Home',
    'link-home-salto-balao':   'Link Voos e Saltos de Balão — Home',
    'link-home-tunel-vento':   'Link Túnel de Vento — Home',
    'link-home-wingsuit':      'Link Wingsuit — Home',
    'link-home-aff':           'Link AFF — Home (legado)',
    'link-home-batismo':       'Link Batismo — Home (legado)',

    // ── Navbar ────────────────────────────────────────────────────────
    'navbar-agendar':          'Botão Agendar — Navbar',

    // ── Salto Duplo ───────────────────────────────────────────────────
    'salto-duplo-hero-agendar':       'Botão Agendar — Hero Salto Duplo',
    'salto-duplo-pricing-fun':        'Card Pricing FUN — Salto Duplo',
    'salto-duplo-pricing-selfie':     'Card Pricing Selfie — Salto Duplo',
    'salto-duplo-pricing-experience': 'Card Pricing Experience — Salto Duplo',
    'salto-duplo-pricing-vip':        'Card Pricing VIP — Salto Duplo',
    'salto-duplo-v3':                 'Página Salto Duplo V3',

    // Legado salto duplo
    'botao-agendar-salto-duplo':       'Botão Agendar — Página Salto Duplo',
    'botao-agendar-salto-duplo-meio':  'Botão Agendar Meio — Salto Duplo',
    'botao-agendar-salto-duplo-rodape':'Botão Agendar Rodapé — Salto Duplo',
    'salto-duplo-page':                'Página Salto Duplo',
    'form-duvidas-salto-duplo':        'Formulário Dúvidas — Salto Duplo',

    // ── Curso AFF ─────────────────────────────────────────────────────
    'aff-hero-iniciar':          'Botão Iniciar Formação — Hero AFF',
    'aff-comparison-cta':        'CTA Aprovação Garantida — Comparação AFF',
    'aff-pricing-confirmar':     'Botão Confirmar Interesse — Pricing AFF',
    'card-aff-online':           'Card Curso Online — Comece do Seu Jeito',
    'card-aff-teorico-n1':       'Card Teórico + N1 — Comece do Seu Jeito',
    'card-aff-convencional':     'Card AFF Convencional — Comece do Seu Jeito',
    'card-aff-pro':              'Card AFF PRO — Comece do Seu Jeito',

    // Legado AFF
    'botao-agendar-aff':    'Botão Agendar — Página Curso AFF',
    'botao-iniciar-aff':    'Botão Iniciar — Página AFF',
    'botao-cta-aff':        'CTA Principal — Página AFF',
    'form-interesse-aff':   'Formulário Interesse — AFF',
    'form-matricula-aff':   'Formulário Matrícula AFF',
    'botao-pacote-aff':     'Botão Pacote AFF Completo',

    // ── Salto de Balão ────────────────────────────────────────────────
    'salto-balao-hero-agendar':     'Botão Agendar — Hero Salto de Balão',
    'salto-balao-pricing-duplo':    'Card Pricing Salto Duplo de Balão',
    'salto-balao-pricing-coletivo': 'Card Pricing Balão Coletivo',
    'salto-balao-pricing-familia':  'Card Pricing Família — Balão',
    'salto-balao-pricing-casal':    'Card Pricing Casal — Balão',
    'salto-balao-pricing-atleta':   'Card Pricing Atleta — Balão',
    'botao-agendar-salto-balao':    'Botão Agendar — Página Salto de Balão',

    // ── Túnel de Vento ────────────────────────────────────────────────
    'tunel-hero-agendar':           'Botão Agendar — Hero Túnel de Vento',
    'tunel-pricing-first-flight':   'Card Pricing First Flight — Túnel',
    'tunel-pricing-pro-flyer':      'Card Pricing Pro Flyer 15 — Túnel',
    'tunel-pricing-camp-intensivo': 'Card Pricing Camp Intensivo — Túnel',
    'botao-agendar-tunel-vento':    'Botão Agendar — Página Túnel de Vento',

    // ── Wingsuit Experience ───────────────────────────────────────────
    'wingsuit-hero-agendar':          'Botão Agendar — Hero Wingsuit',
    'wingsuit-pricing-intro':         'Card Pricing Intro Wingsuit',
    'wingsuit-pricing-pack-performance': 'Card Pricing Pack Performance',
    'botao-agendar-wingsuit':         'Botão Agendar — Página Wingsuit Experience',
    'botao-agendar-curso-wingsuit':   'Botão Agendar — Página Curso Wingsuit',

    // ── Batismo Indoor ────────────────────────────────────────────────
    'botao-agendar-batismo':    'Botão Agendar — Página Batismo Indoor',
    'form-agendamento-batismo': 'Formulário Batismo Indoor',

    // ── Páginas de Links ──────────────────────────────────────────────
    'links-card-agendar-salto-duplo': 'Card Agendar Salto Duplo — Link Tree',
    'links-whatsapp-flutuante':       'WhatsApp Flutuante — Link Tree',
    'links_tree':                     'Link Tree',
    'links-youtube-card-agendar-salto-duplo': 'Card Agendar Salto Duplo — Link Tree YouTube',
    'links-youtube-whatsapp-flutuante':       'WhatsApp Flutuante — Link Tree YouTube',

    // ── Blog ──────────────────────────────────────────────────────────
    'blog-lista-cta':            'CTA — Listagem do Blog',
    'blog-como-funciona-cta':    'CTA — Artigo Como Funciona Salto Duplo',
    'blog-sensacao-cta':         'CTA — Artigo Sensação no Salto Duplo',
    'blog-quanto-tempo-cta':     'CTA — Artigo Quanto Tempo Dura o Salto',
    'blog-idade-minima-cta':     'CTA — Artigo Idade Mínima e Pré-requisitos',
    'blog-aff-apos-salto-cta':   'CTA — Artigo Curso AFF Após Salto Duplo',
    'blog-aff-fases-cta':        'CTA — Artigo Fases do Curso AFF',

    // ── Popups ────────────────────────────────────────────────────────
    'popup-desconto-salto-duplo': 'Pop-up Desconto 10% — Salto Duplo',
    'popup-exit-intent':          'Pop-up Saída — Site',

    // ── WhatsApp Flutuante Global ─────────────────────────────────────
    'whatsapp-flutuante': 'WhatsApp Flutuante — Global',

    // ── Tráfego Externo / Pago ────────────────────────────────────────
    'link-bio-instagram':   'Link Bio — Instagram',
    'story-instagram':      'Story — Instagram',
    'google-ads-salto-duplo': 'Google Ads — Salto Duplo',
    'google-ads-aff':       'Google Ads — AFF',
    'facebook-ads':         'Facebook Ads',
    'whatsapp-direto':      'WhatsApp Direto',
    'indicacao-cliente':    'Indicação de Cliente',
    'email-marketing':      'E-mail Marketing',
}

// Mapa fixo: título da experiência → ID da tabela `experiences`
export const EXPERIENCE_IDS: Record<string, string> = {
    'Salto Duplo':             'salto-duplo',
    'Curso AFF':               'curso-aff',
    'Salto de Balão':          'salto-balao',
    'Voos e Saltos de Balão':  'salto-balao',
    'Túnel de Vento':          'tunel-vento',
    'Wingsuit':                'wingsuit',
    'Wingsuit Experience':     'wingsuit',
    'Pacote AFF Completo':     'pacote-aff',
    'Curso de Brevê':          'curso-brevet',
    'Salto Solo AFF':          'salto-solo-aff',
    'Batismo Indoor':          'batismo-indoor',
    'Batismo de Voo Indoor':   'batismo-indoor',
}

/**
 * Extrai page, section e variant de uma chave de fonte.
 * Ex: "salto-duplo-pricing-vip" → { page: "salto-duplo", section: "pricing", variant: "vip" }
 */
export function parseFonte(fonte: string): { page: string; section: string; variant: string } {
    let page = 'geral'
    let section = ''
    let variant = ''

    if (fonte.startsWith('home-') || fonte === 'cta-hero-home' || fonte === 'cta-sticky-home')
        page = 'home'
    else if (fonte.startsWith('salto-duplo-') || fonte.startsWith('botao-agendar-salto-duplo') || fonte === 'salto-duplo-page')
        page = 'salto-duplo'
    else if (fonte.startsWith('aff-') || fonte.startsWith('card-aff') || fonte.includes('-aff'))
        page = 'curso-aff'
    else if (fonte.startsWith('salto-balao-') || fonte === 'botao-agendar-salto-balao')
        page = 'salto-balao'
    else if (fonte.startsWith('tunel-') || fonte === 'botao-agendar-tunel-vento')
        page = 'tunel-de-vento'
    else if (fonte.startsWith('wingsuit-') || fonte.startsWith('botao-agendar-wingsuit'))
        page = 'wingsuit'
    else if (fonte.startsWith('links-youtube-') || fonte === 'links-youtube' || fonte === 'links_youtube')
        page = 'links-youtube'
    else if (fonte.startsWith('links-instagram-') || fonte === 'links-instagram' || fonte === 'links_instagram')
        page = 'links-instagram'
    else if (fonte.startsWith('links-') || fonte === 'links_tree' || fonte === 'links-tree')
        page = 'links'
    else if (fonte.startsWith('blog-'))
        page = 'blog'
    else if (fonte.startsWith('navbar-'))
        page = 'all'
    else if (fonte.startsWith('popup-'))
        page = 'popup'
    else if (fonte.startsWith('batismo-') || fonte.startsWith('botao-agendar-batismo'))
        page = 'batismo'

    if (fonte.includes('-hero-') || fonte.includes('hero'))
        section = 'hero'
    else if (fonte.includes('-pricing-') || fonte.includes('pricing'))
        section = 'pricing'
    else if (fonte.startsWith('card-') || fonte.includes('-card-'))
        section = 'card'
    else if (fonte.includes('-comparison-'))
        section = 'comparison'
    else if (fonte.includes('sticky'))
        section = 'sticky'
    else if (fonte.includes('navbar'))
        section = 'navbar'
    else if (fonte.includes('popup'))
        section = 'popup'
    else if (fonte.includes('flutuante'))
        section = 'flutuante'

    // Variant: última parte de chaves de pricing (ex: fun, selfie, vip, experience, intro, coletivo...)
    if (section === 'pricing') {
        const last = fonte.split('-').pop() || ''
        const nonVariants = new Set(['agendar', 'confirmar', 'iniciar', 'cta', 'pricing', 'duplo'])
        if (last && !nonVariants.has(last)) variant = last
    }

    return { page, section, variant }
}

// ── Payload canônico — mesmo contrato para Supabase tracking e N8N ───────────

export interface StandardLeadPayload {
    // Identidade
    lead_id:            string
    nome:               string
    telefone:           string
    telefone_br:        string
    email:              string

    // Experiência
    experience_id:      string
    experience_nome:    string
    experience_variant: string

    // Atribuição
    fonte:              string
    fonte_label:        string

    // Página / Seção
    page:               string
    page_path:          string
    section:            string

    // Device
    device_type:        'mobile' | 'desktop'

    // UTMs
    utm_source:         string
    utm_medium:         string
    utm_campaign:       string
    utm_content:        string
    utm_term:           string
    referrer:           string

    // Metadados
    company_id:         string
    data_hora:          string
}

// ── Funções de compatibilidade com o fluxo legado ─────────────────────────────

interface FormData {
    nome: string
    telefone: string
    email?: string
}

export function buildPayload(formData: FormData, fonte = 'geral', experiencia = '') {
    const fonteLabel = FONTES[fonte] || fonte
    const telefoneNumerico = formData.telefone
    const experienceId = EXPERIENCE_IDS[experiencia]
        || experiencia.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

    return {
        nome: formData.nome?.trim() || '',
        telefone: telefoneNumerico,
        telefone_br: telefoneNumerico.startsWith('+55') ? telefoneNumerico.replace('+55', '') : '',
        email: formData.email?.trim() || '',
        experience_id: experienceId,
        experience_nome: experiencia,
        fonte,
        fonte_label: fonteLabel,
        data_hora: new Date().toISOString(),
        webhook_payload: JSON.stringify({ ...formData, fonte, experiencia }),
    }
}

/**
 * Envia lead para a API route /api/submit-lead.
 * Essa rota escreve no Supabase (leads + tracking) e dispara o webhook N8N.
 */
export async function sendLead(
    formData: FormData,
    fonte = 'geral',
    experiencia = '',
    extra: {
        page_path?: string
        referrer?: string
        utm_source?: string
        utm_medium?: string
        utm_campaign?: string
        utm_content?: string
        utm_term?: string
        device_type?: string
    } = {}
) {
    const payload = {
        nome: formData.nome?.trim() || '',
        telefone: formData.telefone,
        email: formData.email?.trim() || '',
        fonte,
        experience_title: experiencia,
        device_type: extra.device_type || 'desktop',
        ...extra,
    }

    const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })

    if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        return { ok: false, error: err.error || `HTTP ${res.status}` }
    }

    const data = await res.json()
    return { ok: true, lead_id: data.lead_id }
}

export const FlyUpWebhook = { send: sendLead, buildPayload, FONTES }
