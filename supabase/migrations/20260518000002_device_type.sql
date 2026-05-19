-- FlyUp: Adicionar field device_type para rastreamento de mobile vs desktop

ALTER TABLE public.tracking
    ADD COLUMN IF NOT EXISTS device_type text DEFAULT 'desktop';

ALTER TABLE public.leads
    ADD COLUMN IF NOT EXISTS device_type text DEFAULT 'desktop';

-- Índice para queries rápidas por device type
CREATE INDEX IF NOT EXISTS tracking_device_type_idx ON public.tracking(device_type);
CREATE INDEX IF NOT EXISTS leads_device_type_idx ON public.leads(device_type);
