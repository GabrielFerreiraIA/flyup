import ServicePageLayout from "@/components/ServicePageLayout";
import Footer from "@/components/sections/Footer";

export default function TunelDeVentoPage() {
    return (
        <>
            <ServicePageLayout
                title="Túnel de Vento"
                subtitle="Acelere sua evolução ou voe pela primeira vez sem sair do chão."
                heroImage="https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=3276&auto=format&fit=crop"
                overview="O Túnel de Vento é a melhor ferramenta para aprender a voar ou evoluir suas técnicas de paraquedismo. Em um ambiente controlado, com fluxo de ar laminar e instrutores campeões mundiais, você aprende 10x mais rápido do que no céu, com segurança total e feedback imediato."
                steps={[
                    {
                        title: "Briefing Técnico",
                        description: "Entenda a física do voo e as posições corporais antes de entrar no fluxo de ar. Treinamento mental para máxima performance.",
                        icon: "Trophy"
                    },
                    {
                        title: "Voo Indoor",
                        description: "Sessões de 2 a 15 minutos voando com instrutores que corrigem sua postura em tempo real. A evolução é exponencial.",
                        icon: "Wind"
                    },
                    {
                        title: "Debriefing em Vídeo",
                        description: "Após cada sessão, analisamos os vídeos frame a frame para correções precisas. A chave para a evolução técnica.",
                        icon: "Award"
                    },
                    {
                        title: "Diversão em Grupo",
                        description: "Além do treino sério, o túnel permite voos em grupo e brincadeiras, ideal para eventos e famílias.",
                        icon: "Users"
                    }
                ]}
                galleryImages={[
                    "https://images.unsplash.com/photo-1629737180425-6349c83664d4?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1628163901416-620251717282?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2669&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=2670&auto=format&fit=crop"
                ]}
                pricingOptions={[
                    {
                        title: "First Flight",
                        price: "R$ 350",
                        features: ["2 Minutos de Voo (Eqv. 3 saltos)", "Instrutor Dedicado", "Equipamento Completo", "Certificado de Voo", "Vídeo Simples"]
                    },
                    {
                        title: "Pro Flyer 15",
                        price: "R$ 1.200",
                        features: ["15 Minutos de Voo", "Coaching Técnico", "Análise de Vídeo", "Evolução Acelerada", "Acesso à Área de Atletas"],
                        highlight: true
                    },
                    {
                        title: "Camp Intensivo",
                        price: "R$ 4.500",
                        features: ["60 Minutos (1 Hora)", "Coach Campeão Mundial", "Hospedagem Inclusa", "Plano de Carreira no Esporte", "Mentoria Exclusiva"]
                    }
                ]}
                faqs={[
                    {
                        question: "Quem pode voar?",
                        answer: "Qualquer pessoa a partir de 4 anos de idade, sem restrições de peso significativas. É muito acessível e seguro."
                    },
                    {
                        question: "É igual a pular de paraquedas?",
                        answer: "A sensação do corpo no ar é idêntica à queda livre, mas sem o salto do avião e sem paraquedas. É a simulação perfeita."
                    },
                    {
                        question: "Preciso de experiência?",
                        answer: "Não! O pacote First Flight é feito para iniciantes absolutos. Você voa sempre acompanhado de um instrutor."
                    }
                ]}
            />
            <Footer />
        </>
    );
}
