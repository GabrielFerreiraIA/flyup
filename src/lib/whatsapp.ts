// Números e mensagens de WhatsApp usados nas landing pages.
// A mensagem muda conforme a origem da visita ("Vi o anúncio" x "Vi o site")
// para o atendimento identificar leads do Google Ads direto na conversa.

export const WA_COMERCIAL = "5515998282280";
export const WA_EDU = "5515996302280";

export type WaMessagePair = { anuncio: string; site: string };

export const WA_MESSAGES = {
    aff: {
        anuncio: "Olá Edu! Vi o anúncio do Curso AFF no Google e quero mais informações.",
        site: "Olá Edu! Vi o site da Fly Up e quero mais informações sobre o Curso AFF.",
    },
    saltoDuplo: {
        anuncio: "Olá! Vi o anúncio do Salto Duplo no Google e quero agendar meu salto.",
        site: "Olá! Vi o site da Fly Up e tenho dúvidas sobre o Salto Duplo de Paraquedas.",
    },
} satisfies Record<string, WaMessagePair>;

// Monta sempre uma URL https://wa.me/... para que o clique seja rastreável no GTM
// via {{Click URL}} contém "wa.me".
export function buildWaUrl(phoneNumber: string, message: string) {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
