# FLYUP — Manual de Rastreamento de Origem de Leads v2.0

Este documento explica como o sistema de tracking funciona, quais fontes existem, como o device type é rastreado e como configurar novos botões de conversão.

---

## Visão geral da arquitetura

```
Usuário clica em botão/CTA (mobile ou desktop)
        │
        ▼
Modal de captura abre (nome + WhatsApp)
        │
        ▼ (ao submeter)
  Detecta device type (mobile | desktop)
  Adiciona sufixo ao source: {source}-{device}
        │
    ┌───┴──────────────────────────────────────┐
    │                                          │
    ▼                                          ▼
Supabase                                     N8N
tabela `leads`                       webhook flyup-lead
tabela `tracking`                            │
    │                                        ▼
    │                              WhatsApp confirmação
    └──────────────┬──────────────────────────┘
                   ▼
              CRM exibe lead
              + device_type
              + fonte completa
```

Cada lead criado gera **dois registros**:
- Um em `leads` — para o CRM gerenciar o relacionamento
- Um em `tracking` — para rastrear exatamente de onde veio, em qual device e com quais parâmetros

---

## O campo `device_type`

### O que é?

`device_type` é um campo que registra se o lead veio de um **smartphone** ou **desktop/tablet**.

**Valores possíveis:**
- `mobile` — smartphone (iPhone, Android, etc.)
- `desktop` — computador ou tablet

### Como é detectado?

No navegador, usamos uma combinação de:
1. **User Agent** — verifica strings como "Mobi", "Android", "iPhone", "iPad", "iPod"
2. **Viewport Width** — detecta se `window.innerWidth < 768px`

Código em `src/lib/utils/device.ts`:
```typescript
export function getDeviceType(): 'mobile' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768
    ? 'mobile'
    : 'desktop'
}
```

### Exemplos no CRM

Uma mesma fonte agora gera dois registros diferentes:

| Fonte Enviada | Device | Como aparece no CRM |
|---|---|---|
| `navbar-agendar` + `mobile` | Mobile | `navbar-agendar-mobile` |
| `navbar-agendar` + `desktop` | Desktop | `navbar-agendar-desktop` |
| `salto-duplo-pricing-vip` + `mobile` | Mobile | `salto-duplo-pricing-vip-mobile` |
| `salto-duplo-pricing-vip` + `desktop` | Desktop | `salto-duplo-pricing-vip-desktop` |

**Benefício:** Você pode segmentar leads por canal de origem *e* device, permitindo análises como "qual taxa de conversão mobile vs desktop para o card VIP?"

---

## Tabela completa de fontes com device type

### HOME (`/`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `home-hero-agendar` | `-mobile`/`-desktop` | Botão Agendar — Hero Principal | Seção hero, topo da página |
| `home-card-salto-duplo` | `-mobile`/`-desktop` | Card Salto Duplo — Home | Grid de experiências |
| `home-card-curso-aff` | `-mobile`/`-desktop` | Card Curso AFF — Home | Grid de experiências |
| `home-card-salto-balao` | `-mobile`/`-desktop` | Card Salto de Balão — Home | Grid de experiências |
| `home-card-tunel-vento` | `-mobile`/`-desktop` | Card Túnel de Vento — Home | Grid de experiências |
| `home-card-wingsuit` | `-mobile`/`-desktop` | Card Wingsuit — Home | Grid de experiências |
| `cta-sticky-home` | `-mobile`/`-desktop` | Banner Sticky — Home | Banner fixo na página |
| `banner-oportunidade` | `-mobile`/`-desktop` | Banner Oportunidade — Hero | Banner promocional hero |

---

### NAVBAR (aparece em todas as páginas)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `navbar-agendar` | `-mobile`/`-desktop` | Botão Agendar — Navbar | Botão superior direito fixo |

---

### SALTO DUPLO V3 (`/salto-duplo-v3`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `salto-duplo-v3` | `-mobile`/`-desktop` | Página Salto Duplo V3 | Todos os CTAs da página |
| `salto-duplo-pricing-fun` | `-mobile`/`-desktop` | Card Pricing FUN — Salto Duplo | Card R$ 599 |
| `salto-duplo-pricing-handycam` | `-mobile`/`-desktop` | Card Pricing Handycam — Salto Duplo | Card R$ 745 (destacado) |
| `salto-duplo-pricing-supervip` | `-mobile`/`-desktop` | Card Pricing Super VIP — Salto Duplo | Card Consultar |
| `salto-duplo-pricing-supervipplus` | `-mobile`/`-desktop` | Card Pricing Super VIP Plus — Salto Duplo | Card Consultar |

---

### CURSO AFF PRO (`/curso-aff-pro`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `aff-hero-iniciar` | `-mobile`/`-desktop` | Botão Iniciar Formação — Hero AFF | Seção hero |
| `aff-comparison-cta` | `-mobile`/`-desktop` | CTA Aprovação Garantida — Comparação AFF | Seção de comparação |
| `aff-pricing-confirmar` | `-mobile`/`-desktop` | Botão Confirmar — AFF Pricing | Seção de pricing principal |
| `card-aff-online` | `-mobile`/`-desktop` | Card Curso Online — Comece do Seu Jeito | Card de pricing alternativo |
| `card-aff-teorico-n1` | `-mobile`/`-desktop` | Card Teórico + N1 — Comece do Seu Jeito | Card de pricing alternativo |
| `card-aff-convencional` | `-mobile`/`-desktop` | Card AFF Convencional — Comece do Seu Jeito | Card de pricing alternativo |
| `card-aff-pro` | `-mobile`/`-desktop` | Card AFF PRO — Comece do Seu Jeito | Card de pricing alternativo (destacado) |

---

### SALTOS E PASSEIOS DE BALÃO (`/salto-balao`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `salto-balao-hero-agendar` | `-mobile`/`-desktop` | Botão Agendar — Hero Salto de Balão | Seção hero |
| `salto-balao-pricing-duplo` | `-mobile`/`-desktop` | Card Pricing Salto Duplo de Balão | Card "Consultar Condição" |
| `salto-balao-pricing-coletivo` | `-mobile`/`-desktop` | Card Pricing Balão Coletivo | Card a partir de R$ 250 |
| `salto-balao-pricing-familia` | `-mobile`/`-desktop` | Card Pricing Família — Balão | Card R$ 3.800 |
| `salto-balao-pricing-casal` | `-mobile`/`-desktop` | Card Pricing Casal — Balão | Card R$ 3.000 |
| `salto-balao-pricing-atleta` | `-mobile`/`-desktop` | Card Pricing Atleta — Balão | Card "Consultar Condição" |

---

### TÚNEL DE VENTO (`/tunel-de-vento`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `tunel-hero-agendar` | `-mobile`/`-desktop` | Botão Agendar — Hero Túnel de Vento | Seção hero |
| `tunel-pricing-first-flight` | `-mobile`/`-desktop` | Card Pricing First Flight — Túnel | Card R$ 350 |
| `tunel-pricing-pro-flyer` | `-mobile`/`-desktop` | Card Pricing Pro Flyer 15 — Túnel | Card R$ 1.200 (destacado) |
| `tunel-pricing-camp-intensivo` | `-mobile`/`-desktop` | Card Pricing Camp Intensivo — Túnel | Card R$ 4.500 |

---

### WINGSUIT EXPERIENCE (`/wingsuit-experience`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `wingsuit-hero-agendar` | `-mobile`/`-desktop` | Botão Agendar — Hero Wingsuit | Seção hero |
| `wingsuit-pricing-intro` | `-mobile`/`-desktop` | Card Pricing Intro Wingsuit | Card R$ 1.500 |
| `wingsuit-pricing-pack-performance` | `-mobile`/`-desktop` | Card Pricing Pack Performance | Card R$ 3.800 (destacado) |

---

### PÁGINA DE LINKS (`/links`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `links-tree` | `-mobile`/`-desktop` | Link Tree Principal | Página /links (padrão) |
| `links-card-agendar-salto-duplo` | `-mobile`/`-desktop` | Card Agendar Salto Duplo — Link Tree | Card principal na página |
| `whatsapp-flutuante` | `-mobile`/`-desktop` | WhatsApp Flutuante — Global | Botão flutuante inferior direito |

---

### PÁGINA DE LINKS INSTAGRAM (`/links-instagram`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `links-instagram` | `-mobile`/`-desktop` | Link Tree — Instagram | Página /links-instagram |
| `links-card-agendar-salto-duplo` | `-mobile`/`-desktop` | Card Agendar Salto Duplo — Link Tree | Card principal na página |
| `whatsapp-flutuante` | `-mobile`/`-desktop` | WhatsApp Flutuante — Global | Botão flutuante inferior direito |

---

### PÁGINA DE LINKS YOUTUBE (`/links-youtube`)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `links-youtube` | `-mobile`/`-desktop` | Link Tree — YouTube | Página /links-youtube |
| `links-card-agendar-salto-duplo` | `-mobile`/`-desktop` | Card Agendar Salto Duplo — Link Tree | Card principal na página |
| `whatsapp-flutuante` | `-mobile`/`-desktop` | WhatsApp Flutuante — Global | Botão flutuante inferior direito |

---

### BLOG (`/blog` e artigos)

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `blog-lista-cta` | `-mobile`/`-desktop` | CTA — Listagem do Blog | Página `/blog` (index) |
| `blog-como-funciona-cta` | `-mobile`/`-desktop` | CTA — Artigo Como Funciona | `/blog/como-funciona-...` |
| `blog-sensacao-cta` | `-mobile`/`-desktop` | CTA — Artigo Sensação | `/blog/sensacao-de-saltar...` |
| `blog-quanto-tempo-cta` | `-mobile`/`-desktop` | CTA — Artigo Quanto Tempo | `/blog/quanto-tempo-dura...` |
| `blog-idade-minima-cta` | `-mobile`/`-desktop` | CTA — Artigo Idade Mínima | `/blog/idade-minima...` |
| `blog-aff-apos-salto-cta` | `-mobile`/`-desktop` | CTA — Artigo Curso AFF | `/blog/curso-de-paraquedismo-apos...` |
| `blog-aff-fases-cta` | `-mobile`/`-desktop` | CTA — Artigo Fases AFF | `/blog/fases-etapas-curso...` |

---

### POPUPS

| Fonte Base | + Device | Label no CRM | Onde está |
|---|---|---|---|
| `popup-desconto-salto-duplo` | `-mobile`/`-desktop` | Pop-up Desconto 10% — Salto Duplo | Pop-up que aparece 3s após carregar `/salto-duplo` |
| `popup-exit-intent` | `-mobile`/`-desktop` | Pop-up Saída — Site | Pop-up de exit intent (se implementado) |

---

### TRÁFEGO EXTERNO E PAGO

| Fonte | Label no CRM | Uso |
|---|---|---|
| `link-bio-instagram` | Link Bio — Instagram | Visitante vindo pelo link da bio do Instagram |
| `story-instagram` | Story — Instagram | Visitante vindo de Story |
| `google-ads-salto-duplo` | Google Ads — Salto Duplo | Campanha Google Ads para Salto Duplo |
| `google-ads-aff` | Google Ads — AFF | Campanha Google Ads para AFF |
| `facebook-ads` | Facebook Ads | Campanha Meta/Facebook |
| `whatsapp-direto` | WhatsApp Direto | Contato direto pelo WhatsApp |
| `indicacao-cliente` | Indicação de Cliente | Lead por indicação (boca a boca) |
| `email-marketing` | E-mail Marketing | Campanha de e-mail |

> **Nota:** Fontes de tráfego externo não recebem sufixo de device (são tratadas genericamente no fluxo).

---

## Exemplos práticos de rastreamento

### Exemplo 1: Lead de Desktop via Pricing Card

**Usuário:** Entra em `/salto-duplo-v3` no desktop, clica em "Reservar Vaga" do card R$ 745
**Fluxo:**
1. `getDeviceType()` detecta: `desktop`
2. Fonte original: `salto-duplo-pricing-handycam`
3. Fonte enviada ao Supabase: **`salto-duplo-pricing-handycam-desktop`**

**Registro na tabela `leads`:**
```
{
  id: uuid,
  nome: "João Silva",
  telefone: "+5515999999999",
  fonte: "salto-duplo-pricing-handycam-desktop",
  fonte_label: "Card Pricing Handycam — Salto Duplo",
  experience_id: "salto-duplo",
  experience_nome: "Salto Duplo",
  device_type: "desktop",
  status: "novo"
}
```

**Registro na tabela `tracking`:**
```
{
  id: uuid,
  lead_id: (ref acima),
  event_type: "form_submit",
  fonte: "salto-duplo-pricing-handycam-desktop",
  experience_id: "salto-duplo",
  page: "salto-duplo",
  section: "pricing",
  device_type: "desktop",
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  created_at: 2026-05-18T14:30:00Z
}
```

### Exemplo 2: Lead Mobile via Link Tree

**Usuário:** Acessa `/links-youtube` pelo Instagram (clicou no link da bio) via iPhone, clica no card "Agendar Salto Duplo"
**Fluxo:**
1. `getDeviceType()` detecta: `mobile`
2. Fonte original: `links-youtube`
3. Fonte enviada ao Supabase: **`links-youtube-mobile`**

**Registro no CRM:**
```
{
  fonte: "links-youtube-mobile",
  fonte_label: "Link Tree — YouTube",
  device_type: "mobile",
  ...
}
```

---

## Campos rastreados na tabela `tracking`

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | uuid | Primary key gerada automaticamente |
| `company_id` | uuid | ID da empresa (Flyup) |
| `lead_id` | uuid (FK) | Referência ao lead criado |
| `event_type` | text | `form_submit` (quando o formulário é enviado) |
| `fonte` | text | Chave de rastreamento com device suffix |
| `fonte_label` | text | Versão legível da fonte |
| `experience_id` | text | Slug da experiência: `salto-duplo`, `curso-aff`, etc. |
| `experience_nome` | text | Nome exibido da experiência |
| `experience_variant` | text | Variante de preço: `handycam`, `vip`, `fun`, `pro`, etc. |
| `page` | text | Página curta: `home`, `salto-duplo`, `links-youtube` |
| `page_path` | text | Caminho real: `/salto-duplo-v3`, `/links-youtube` |
| `section` | text | Seção: `hero`, `pricing`, `navbar`, `popup`, `card`, `sticky` |
| `device_type` | text | **NOVO** — `mobile` ou `desktop` |
| `nome` | text | Nome capturado no formulário |
| `telefone` | text | Telefone capturado (normalizado +55) |
| `email` | text | Email (quando disponível) |
| `utm_source` | text | UTM source para tráfego pago |
| `utm_medium` | text | UTM medium (organic, cpc, email, etc.) |
| `utm_campaign` | text | UTM campaign |
| `utm_content` | text | UTM content (teste A/B) |
| `utm_term` | text | UTM term (keywords) |
| `referrer` | text | URL da página anterior |
| `created_at` | timestamptz | Data/hora do evento |

---

## Como adicionar um novo botão de rastreamento

### Passo 1 — Defina a chave da fonte

Escolha uma chave seguindo o padrão: `{página}-{seção}-{variante}` ou `{página}-{tipo}`.

Exemplos:
- ✅ `salto-duplo-pricing-handycam`
- ✅ `home-card-salto-duplo`
- ✅ `navbar-agendar`
- ❌ `botaoAgendarHome` (não segue o padrão)

**Importante:** Não inclua o sufixo `-mobile` ou `-desktop` — ele é adicionado automaticamente!

### Passo 2 — Registre no FONTES

Abra `src/lib/webhook-integration.ts` e adicione a entrada no grupo correto:

```ts
export const FONTES: Record<string, string> = {
    // ── Sua página ────────────────────────────────────────────
    'minha-nova-fonte':       'Descrição Legível — Contexto',
};
```

### Passo 3 — Importe e use no componente

```tsx
import { BookingModal } from "@/components/BookingModal";
import { getDeviceType } from "@/lib/utils/device";
import { FlyUpWebhook } from "@/lib/webhook-integration";

// No seu componente:
const handleClick = async () => {
  const deviceType = getDeviceType();
  const source = `minha-nova-fonte-${deviceType}`;
  
  // Se usar BookingModal:
  <BookingModal
    isOpen={isOpen}
    onClose={() => setOpen(false)}
    experienceTitle="Nome da Experiência"
    source="minha-nova-fonte"  // Sem device suffix aqui
  />
  
  // Se enviar diretamente:
  await FlyUpWebhook.send(
    { nome: "João", telefone: "+5515999999999" },
    source,
    "Nome da Experiência",
    { device_type: deviceType }
  );
};
```

**Nota:** O `BookingModal` já detecta device automaticamente. Você passa apenas a fonte base e ele adiciona o sufixo.

### Passo 4 — Opcional: Adicione EXPERIENCE_IDS

Se for a primeira vez que essa experiência é rastreada, adicione em `src/lib/webhook-integration.ts`:

```ts
export const EXPERIENCE_IDS: Record<string, string> = {
    'Minha Experiência': 'minha-experiencia',
    // ...
};
```

---

## Aplicar a migration no Supabase

### Opção A — Via Supabase CLI

```bash
supabase db push
```

### Opção B — Via Supabase Dashboard

1. Abra [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecione o projeto FLYUP
3. Vá em **SQL Editor → New query**
4. Cole o conteúdo de `supabase/migrations/20260518000002_device_type.sql`
5. Clique em **Run**

---

## Queries úteis no CRM

### Leads por fonte com device breakdown (últimos 30 dias)

```sql
SELECT
    fonte,
    device_type,
    COUNT(DISTINCT lead_id) AS total_leads
FROM tracking
WHERE
    company_id = 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1'
    AND created_at >= NOW() - INTERVAL '30 days'
    AND event_type = 'form_submit'
GROUP BY fonte, device_type
ORDER BY total_leads DESC;
```

### Taxa de conversão mobile vs desktop

```sql
SELECT
    device_type,
    COUNT(DISTINCT lead_id) AS total_leads,
    COUNT(*) FILTER (WHERE event_type = 'form_submit') AS conversoes
FROM tracking
WHERE
    company_id = 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1'
    AND created_at >= NOW() - INTERVAL '30 days'
GROUP BY device_type;
```

### Experiências mais populares por device

```sql
SELECT
    experience_nome,
    device_type,
    COUNT(*) AS total
FROM tracking
WHERE
    company_id = 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1'
    AND event_type = 'form_submit'
GROUP BY experience_nome, device_type
ORDER BY device_type, total DESC;
```

---

## Troubleshooting

### "Fonte não aparece no CRM"

**Causa:** Fonte não foi registrada no `FONTES` ou tem typo.
**Solução:** Verifique em `webhook-integration.ts` se existe entrada exata para a chave.

### "Device type sempre mostra 'desktop'"

**Causa:** Código não está usando `getDeviceType()` ou está sendo executado no servidor.
**Solução:** Certifique-se que:
1. Componente tem `"use client"` no topo
2. Função é chamada apenas no handler (não no render)
3. Não há SSR bloqueando a detecção

### "Experience_id não está sendo preenchida"

**Causa:** O título da experiência não está mapeado em `EXPERIENCE_IDS` ou está com case diferente.
**Solução:** O sistema tenta matching case-insensitive e gera slug como fallback, mas adicione à tabela para garantir.

---

## Histórico de versões

| Versão | Data | Mudança |
|---|---|---|
| 1.0 | 2026-05-01 | Versão inicial (sem device type) |
| 2.0 | 2026-05-18 | **Novo:** Device type tracking, sufixo `-mobile`/`-desktop`, expanded source mapping |

---

**Última atualização:** 18 de maio de 2026
