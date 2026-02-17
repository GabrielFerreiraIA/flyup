import ServicePageLayout from "@/components/ServicePageLayout";
import Footer from "@/components/sections/Footer";

export default function WingsuitExperiencePage() {
    return (
        <>
            <ServicePageLayout
                title="Wingsuit Experience"
                subtitle="Transforme seu corpo em uma asa e realize o sonho humano de voar."
                heroImage="https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=3276&auto=format&fit=crop"
                overview="O Wingsuit não é apenas um salto, é voo horizontal de alta performance. Esta experiência avançada permite que paraquedistas experientes (mínimo 200 saltos) iniciem na disciplina com segurança, ou realizem saltos monitorados com instrutores de nível mundial."
                steps={[
                    {
                        title: "Pré-Requisitos",
                        description: "Avaliação rigorosa de habilidades de queda livre e controle de velame. Segurança em primeiro lugar.",
                        icon: "AlertTriangle"
                    },
                    {
                        title: "First Flight Course (FFC)",
                        description: "Curso teórico e prático completo para o primeiro salto de Wingsuit. Equipamento, navegação e emergências.",
                        icon: "PlayCircle"
                    },
                    {
                        title: "O Voo Horizontal",
                        description: "Sinta a transformação da queda vertical em deslocamento horizontal. Acelere e planeje sua rota no céu.",
                        icon: "Zap"
                    },
                    {
                        title: "Debriefing Avançado",
                        description: "Análise de GPS e vídeo para otimizar sua performance, glide ratio e velocidade.",
                        icon: "Mountain"
                    }
                ]}
                galleryImages={[
                    "https://images.unsplash.com/photo-1543360406-8dce28267252?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1498144846853-60ca2d43853b?q=80&w=2669&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1628163901416-620251717282?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1543360406-8dce28267252?q=80&w=2670&auto=format&fit=crop"
                ]}
                pricingOptions={[
                    {
                        title: "Intro Wingsuit",
                        price: "R$ 1.500",
                        features: ["Curso Teórico FFC", "1 Salto Acompanhado", "Aluguel de Wingsuit Iniciante", "Debriefing com GPS"]
                    },
                    {
                        title: "Pack Performance",
                        price: "R$ 3.800",
                        features: ["5 Saltos Guiados", "Coaching de Performance", "Análise de Trajetória 3D", "Certificação USPA/CBPq"],
                        highlight: true
                    }
                ]}
                faqs={[
                    {
                        question: "Preciso ter experiência?",
                        answer: "Sim! Mínimo de 200 saltos de paraquedas comprovados em caderneta para iniciar no Wingsuit."
                    },
                    {
                        question: "O traje é perigoso?",
                        answer: "O Wingsuit exige disciplina e respeito aos limites. Com treinamento adequado e progressão correta, os riscos são gerenciados."
                    },
                    {
                        question: "Qual a velocidade?",
                        answer: "Podemos atingir velocidades horizontais acima de 200km/h com taxas de planeio incríveis de 3:1 ou mais."
                    }
                ]}
            />
            <Footer />
        </>
    );
}
