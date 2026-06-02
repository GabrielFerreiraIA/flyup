# FLYUP — Contexto e Arquitetura do Sistema de Rastreamento

Este documento explica **o que foi construído**, **por que foi construído assim** e **como tudo se conecta** — do clique do usuário no site até o lead aparecer no CRM.

---

## O problema que isso resolve

O site da FLYUP tem múltiplas páginas, cada uma com botões e cards de preços diferentes. Sem rastreamento, quando um lead chegava ao CRM, era impossível saber se ele veio do card VIP da página de Salto Duplo, do card do Hero, da bio do Instagram, da page de links do YouTube, ou de um artigo do blog.

O sistema de tracking resolve isso registrando **exatamente de onde cada lead veio**, com granularidade de página + seção + variante de produto.

---

## Arquitetura geral

```
Usuário clica em botão/CTA no site
            │
            ▼
    BookingModal abre
    (coleta: nome + WhatsApp)
            │
            ▼ ao submeter
   ┌────────┴────────────────────┐
   │  Promise.allSettled()       │
   │  (paralelo, independente)   │
   └────────┬────────────────────┘
            │
     ┌──────┴──────┐
     │             │
     ▼             ▼
 /api/lead       N8N Webhook
 (servidor)   (n8n.server.sermelhor.site)
     │             │
     ▼             ▼
 Supabase     WhatsApp API
 ├─ leads     (mensagem de
 └─ tracking   confirmação)
     │
     ▼
   CRM FLYUP
 (exibe lead em
  tempo real via
  realtime subscription)
```

### Por que `Promise.allSettled` e não `Promise.all`?

Com `Promise.allSettled`, se o N8N estiver fora do ar, o lead ainda é salvo no Supabase (e vice-versa). O usuário nunca fica preso numa tela de erro — os dois fluxos são independentes.

---

## Os dois fluxos

### Fluxo 1 — Lead para o CRM

**Site → `/api/lead` → Supabase**

O `BookingModal` faz um `fetch POST /api/lead` passando:
- Nome e telefone do usuário
- `fonte` — a chave de rastreamento do botão clicado
- `experience_nome` — qual experiência foi solicitada
- `page_path` — URL da página onde estava (`/salto-duplo`, `/links`, etc.)
- UTM params — capturados de `window.location.search` automaticamente
- `referrer` — URL de onde o usuário veio (`document.referrer`)
- `user_agent` — identificação do dispositivo/navegador

A API route em `src/app/api/lead/route.ts`:
1. Insere na tabela `leads` (o CRM já puxa isso via realtime subscription)
2. Insere na tabela `tracking` com contexto completo
3. Retorna `{ ok: true, lead_id }`

O CRM vê o lead aparecer em tempo real graças ao Supabase Realtime.

### Fluxo 2 — Confirmação por WhatsApp

**Site → N8N → WhatsApp**

Simultaneamente ao Fluxo 1, o `BookingModal` chama `FlyUpWebhook.send()`, que dispara o webhook do N8N. O N8N então envia a mensagem de confirmação para o WhatsApp do lead.

- URL de produção: `https://n8n.server.sermelhor.site/webhook/flyup-lead`
- URL de teste: `https://n8n.server.sermelhor.site/webhook-test/flyup-lead`

---

## O sistema de `fonte` (rastreamento de origem)

Cada botão/CTA do site tem uma prop `source` com uma chave única no formato `{página}-{seção}-{variante}`.

**Exemplos:**
- `salto-duplo-pricing-vip` → card de pricing VIP na página Salto Duplo
- `home-card-wingsuit` → card Wingsuit na home
- `links-card-agendar-salto-duplo` → card da página /links
- `blog-como-funciona-cta` → CTA no artigo "Como Funciona o Salto Duplo"
- `navbar-agendar` → botão na navbar (global)

Todas as chaves estão mapeadas em `src/lib/webhook-integration.ts` no objeto `FONTES`. O label legível (ex: `'Card Pricing VIP — Salto Duplo'`) aparece no CRM no campo **fonte** do lead.

---

## Tabelas no Supabase

### `leads` (já existia — estendida)

Campos relevantes preenchidos pelo site:

| Campo | Valor de exemplo |
|---|---|
| `nome` | João Silva |
| `telefone` | +5515999999999 |
| `fonte` | `salto-duplo-pricing-vip` |
| `source` | `salto-duplo-pricing-vip` (mesmo que fonte) |
| `status` | `novo` |
| `funil` | `Salto Duplo` |
| `tags` | `['salto-duplo', 'salto-duplo', 'pricing']` |
| `company_id` | `f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1` |

### `tracking` (nova — migration 20260518000001)

Registra cada envio de formulário com contexto completo. Um lead pode ter múltiplos registros de tracking se interagiu várias vezes.

| Campo | Valor de exemplo |
|---|---|
| `lead_id` | UUID do lead criado |
| `event_type` | `form_submit` |
| `fonte` | `salto-duplo-pricing-vip` |
| `fonte_label` | `Card Pricing VIP — Salto Duplo` |
| `experience_id` | `salto-duplo` |
| `experience_nome` | `Salto Duplo` |
| `experience_variant` | `vip` |
| `page` | `salto-duplo` |
| `page_path` | `/salto-duplo` |
| `section` | `pricing` |
| `utm_source` | `google` |
| `utm_campaign` | `salto-duplo-maio26` |
| `referrer` | `https://www.instagram.com/` |

---

## Arquivos criados/modificados

```
flyup/
├── src/
│   ├── app/
│   │   └── api/
│   │       └── lead/
│   │           └── route.ts          ← NOVO: API route (Supabase)
│   ├── components/
│   │   └── BookingModal.tsx          ← MODIFICADO: dispara os 2 fluxos
│   └── lib/
│       └── webhook-integration.ts    ← MODIFICADO: fontes expandidas
└── docs/
    └── CONTEXTO_TRACKING.md          ← ESTE arquivo

# No projeto CRM FLYUP:
CRM FLYUP MAIN/supabase/migrations/
└── 20260518000001_flyup_tracking.sql ← NOVO: tabela tracking

# Na raiz de FLYUP FINAL:
TRACKING_MANUAL.md                    ← NOVO: referência de todas as fontes
```

---

## Variáveis de ambiente necessárias

No arquivo `.env.local` do site (já configurado):

```bash
# Usada no cliente para leitura (anon key)
NEXT_PUBLIC_SUPABASE_URL=https://xdbtozwhagcobtjqgeeg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Usada APENAS no servidor (/api/lead) para escrita com permissão total
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

> **Importante:** `SUPABASE_SERVICE_ROLE_KEY` não tem o prefixo `NEXT_PUBLIC_` — isso garante que nunca seja exposta no bundle do cliente. Ela só é acessível dentro de API routes e Server Components.

---

## Como funciona a detecção automática de página e seção

A API route em `route.ts` recebe o `page_path` (ex: `/salto-duplo`) e a `fonte` (ex: `salto-duplo-pricing-vip`) e deriva automaticamente:

| Dado derivado | Como é resolvido |
|---|---|
| `page` | Mapeamento de `page_path` → slug curto |
| `section` | Busca por palavras-chave na `fonte` (`-hero-`, `-pricing-`, `navbar`, etc.) |
| `experience_variant` | Busca por sufixos conhecidos na `fonte` (`vip`, `fun`, `selfie`, etc.) |
| `experience_id` | Mapa `EXPERIENCE_IDS` em `webhook-integration.ts` |
| `fonte_label` | Mapa `FONTES` em `webhook-integration.ts` |

---

## Como adicionar um novo CTA rastreado

1. **Defina a chave** seguindo o padrão `{página}-{seção}-{variante}`:
   ```
   links-youtube-card-wingsuit
   ```

2. **Registre em `FONTES`** em `src/lib/webhook-integration.ts`:
   ```ts
   'links-youtube-card-wingsuit': 'Card Wingsuit — Link Tree YouTube',
   ```

3. **Passe a prop `source`** no `BookingModal` ou no componente que abre o modal:
   ```tsx
   <BookingModal
     isOpen={isOpen}
     onClose={close}
     experienceTitle="Wingsuit Experience"
     source="links-youtube-card-wingsuit"
   />
   ```

Só isso. O rastreamento acontece automaticamente no próximo submit.

---

## Página /links-youtube

Esta página ainda não existe no projeto. Para criá-la:

1. Duplique `src/app/links/` → `src/app/links-youtube/`
2. No `LinksClient.tsx` da cópia, altere as props `source` para:
   - `links-youtube-card-agendar-salto-duplo` (no card que abre o modal)
   - `links-youtube-whatsapp-flutuante` (no botão flutuante)

Isso diferencia no CRM leads vindos do YouTube vs. Instagram.

---

## Aplicar a migration no Supabase

### Via Supabase CLI
```bash
# Na raiz do projeto CRM FLYUP MAIN
supabase db push
```

### Via Supabase Dashboard
1. Acesse o projeto em [supabase.com/dashboard](https://supabase.com/dashboard)
2. **SQL Editor → New query**
3. Cole o conteúdo de `CRM FLYUP MAIN/supabase/migrations/20260518000001_flyup_tracking.sql`
4. Clique em **Run**
