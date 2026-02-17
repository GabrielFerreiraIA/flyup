import ServicePageLayout from "@/components/ServicePageLayout";

export default function CursoAffProPage() {
    return (
        <ServicePageLayout
            title="Curso AFF Pro"
            subtitle="O melhor caminho para se tornar um atleta de elite no paraquedismo."
            heroImage="https://images.unsplash.com/photo-1596700816960-94d35eb843c9?q=80&w=2670&auto=format&fit=crop"
            overview="O Curso AFF Pro é a evolução do nosso programa de treinamento. Ele combina todos os benefícios do AFF tradicional com sessões de Túnel de Vento, coaching intensivo e um programa acelerado para a obtenção da Licença A e B. É o 'fast track' para a competição ou instrução."
            steps={[
                {
                    title: "Treinamento Indoor (Túnel)",
                    description: "Antes mesmo de saltar do avião, você dominará o controle do corpo no túnel de vento. Isso reduz drasticamente a chance de reprovação nos níveis aéreos.",
                    icon: "Zap"
                },
                {
                    title: "AFF Supervised (Níveis 1-7)",
                    description: "Progressão ultra-rápida. Com a base sólida do túnel, você passará pelos níveis de salto com confiança e excelência técnica.",
                    icon: "Plane"
                },
                {
                    title: "Coaching Pós-Formatura",
                    description: "Após formado, você não fica 'abandonado'. Incluso: 5 saltos de coaching BBF (Basic Body Flight) para aperfeiçoamento.",
                    icon: "Star"
                },
                {
                    title: "Exame Licença A",
                    description: "Preparação completa teórica e prática para o exame oficial da CBPq. Você sai pronto para saltar em qualquer DZ do globo.",
                    icon: "Activity"
                }
            ]}
            galleryImages={[
                "https://images.unsplash.com/photo-1534149626607-4221d6fb86b5?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=3276&auto=format&fit=crop"
            ]}
            pricingOptions={[
                {
                    title: "Pacote AFF Pro",
                    price: "R$ 9.800",
                    features: ["Curso Teórico Avançado", "30min Túnel de Vento", "7 Saltos AFF + Repetições (até 2)", "5 Saltos Coaching BBF", "Logbook Premium e Equipamento Completo"],
                    highlight: true
                }
            ]}
            faqs={[
                {
                    question: "Vale a pena fazer o Pro?",
                    answer: "Sim! A economia com repetições evitadas e a qualidade técnica adquirida no túnel pagam o investimento com sobras."
                },
                {
                    question: "Qual a diferença pro AFF normal?",
                    answer: "A inclusão do treinamento em túnel de vento (que acelera o aprendizado em 10x) e o coaching pós-formatura para garantir evolução contínua."
                }
            ]}
        />
    );
}
