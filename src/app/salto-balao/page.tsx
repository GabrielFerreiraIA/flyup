import ServicePageLayout from "@/components/ServicePageLayout";

export default function SaltoBalaoPage() {
    return (
        <ServicePageLayout
            title="Salto de Balão"
            subtitle="A experiência mais exclusiva e serena do paraquedismo."
            heroImage="https://images.unsplash.com/photo-1542408892-d965d1d61993?q=80&w=2670&auto=format&fit=crop"
            overview="O salto de balão é o ápice da exclusividade no paraquedismo. Ao contrário do avião, não há vento ou barulho de motor. Você experimenta o 'dead air' — uma saída em silêncio absoluto onde a gravidade te puxa suavemente até atingir a velocidade terminal. É uma experiência transformadora e altamente fotogênica."
            steps={[
                {
                    title: "Decolagem ao Amanhecer",
                    description: "Os voos de balão ocorrem na primeira hora do sol. Você verá o espetáculo do amanhecer enquanto sobe lentamente.",
                    icon: "Sunrise"
                },
                {
                    title: "Ascensão Silenciosa",
                    description: "A subida dura cerca de 45 minutos até atingir a altitude de lançamento (entre 6.000 e 10.000 pés).",
                    icon: "Cloud"
                },
                {
                    title: "A Saída (Dead Air)",
                    description: "Sem o vento relativo do avião, você simplesmente 'cai' no vazio. A sensação de aceleração é muito mais nítida e emocionante.",
                    icon: "Zap"
                },
                {
                    title: "Pouso e Brinde",
                    description: "Após o salto, nos reunimos para o tradicional brinde com espumante, celebrando a coragem e a beleza do voo.",
                    icon: "Trophy"
                }
            ]}
            galleryImages={[
                "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2672&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2670&auto=format&fit=crop"
            ]}
            pricingOptions={[
                {
                    title: "Salto Duplo de Balão",
                    price: "R$ 1.950",
                    features: ["Voo de Balão", "Salto Duplo com Instrutor Elite", "Fotos e Vídeos Inclusos", "Brinde com Espumante", "Translado de volta à DZ"]
                },
                {
                    title: "Atleta (Solo)",
                    price: "R$ 450",
                    features: ["Voo de Balão", "Vaga para Atleta Licenciado", "Acompanhamento de Segurança", "Brinde com Espumante", "Resgate Incluso"],
                    highlight: true
                }
            ]}
            faqs={[
                {
                    question: "Por que de madrugada?",
                    answer: "O balão precisa de ventos calmos e ar frio para voar com segurança, condições que só ocorrem logo ao amanhecer."
                },
                {
                    question: "É mais perigoso?",
                    answer: "Não. Seguimos protocolos rigorosos. O piloto do balão e os instrutores são profissionais altamente credenciados."
                },
                {
                    question: "A qualquer dia?",
                    answer: "Os saltos de balão são sazonais e dependem de formação de grupo e condições perfeitas de vento. Consulte nossa agenda."
                }
            ]}
        />
    );
}
