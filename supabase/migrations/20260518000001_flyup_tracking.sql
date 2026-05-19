-- FlyUp: Tabela de rastreamento de eventos de leads
-- Registra cada evento (abertura de modal, envio de formulário, clique) com contexto completo

CREATE TABLE IF NOT EXISTS public.tracking (
    id                 uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id         uuid        NOT NULL DEFAULT 'f1f1f1f1-f1f1-f1f1-f1f1-f1f1f1f1f1f1'::uuid,
    lead_id            uuid        REFERENCES public.leads(id) ON DELETE SET NULL,
    event_type         text        NOT NULL DEFAULT 'form_submit',
    -- form_submit | modal_open | click | page_view

    -- Rastreamento de origem
    fonte              text,
    fonte_label        text,

    -- Contexto da experiência
    experience_id      text,
    experience_nome    text,
    experience_variant text,

    -- Contexto de página
    page               text,
    page_path          text,
    section            text,

    -- Dados do lead capturados no evento
    nome               text,
    telefone           text,
    email              text,

    -- UTM params
    utm_source         text,
    utm_medium         text,
    utm_campaign       text,
    utm_content        text,
    utm_term           text,

    referrer           text,
    created_at         timestamptz NOT NULL DEFAULT now()
);

-- Índices para queries do CRM
CREATE INDEX IF NOT EXISTS tracking_company_id_idx      ON public.tracking(company_id);
CREATE INDEX IF NOT EXISTS tracking_lead_id_idx         ON public.tracking(lead_id);
CREATE INDEX IF NOT EXISTS tracking_fonte_idx           ON public.tracking(fonte);
CREATE INDEX IF NOT EXISTS tracking_event_type_idx      ON public.tracking(event_type);
CREATE INDEX IF NOT EXISTS tracking_created_at_idx      ON public.tracking(created_at DESC);
CREATE INDEX IF NOT EXISTS tracking_experience_id_idx   ON public.tracking(experience_id);

-- RLS
ALTER TABLE public.tracking ENABLE ROW LEVEL SECURITY;

-- Leitura autenticada (CRM usa service_role ou usuário logado)
CREATE POLICY "Autenticado lê tracking da empresa"
    ON public.tracking FOR SELECT
    USING (auth.role() IN ('service_role', 'authenticated'));

-- Inserção pública permitida (site anônimo insere via API route com service_role no servidor)
-- A API route usa service_role, então essa policy é redundante mas fica documentada
CREATE POLICY "Service role inserção tracking"
    ON public.tracking FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
