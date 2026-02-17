import ServicePageLayout from "@/components/ServicePageLayout";

export default function SaltoDuploPage() {
    return (
        <ServicePageLayout
            title="Salto Duplo"
            subtitle="Sinta a liberdade absoluta a 200km/h com total segurança."
            heroImage="https://images.unsplash.com/photo-1521673461240-991eb9c9c71e?q=80&w=2670&auto=format&fit=crop"
            overview="O Salto Duplo é a maneira mais fácil e segura de realizar o sonho de voar. Conectado a um instrutor experiente e certificado, você saltará de 12.000 pés, experimentando cerca de 45 segundos de queda livre seguidos por 5 a 7 minutos de navegação com o paraquedas aberto, apreciando uma vista inigualável."
            steps={[
                {
                    title: "Chegada e Preparação",
                    description: "Ao chegar na Flyup, você fará seu check-in e receberá um treinamento de 15 minutos sobre a posição do corpo e procedimentos de segurança.",
                    icon: "CheckCircle2"
                },
                {
                    title: "O Voo Panorâmico",
                    description: "Um voo de 15 minutos até a altitude de salto (12.000 pés) sobrevoando a região de Boituva. A vista é espetacular!",
                    icon: "Cloud"
                },
                {
                    title: "A Queda Livre",
                    description: "A porta se abre e a magia acontece. 45 segundos de pura adrenalina a 200km/h. A sensação de liberdade é indescritível.",
                    icon: "Zap"
                },
                {
                    title: "Navegação e Pouso",
                    description: "O instrutor abre o paraquedas e tudo fica calmo. Você pode até pilotar o velame antes de um pouso suave e preciso.",
                    icon: "Shield"
                }
            ]}
            galleryImages={[
                "https://images.unsplash.com/photo-1534149626607-4221d6fb86b5?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1596700816960-94d35eb843c9?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1582218412852-c0733d70669c?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1514890656687-9ce7c9b09ad3?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1521673461240-991eb9c9c71e?q=80&w=2670&auto=format&fit=crop"
            ]}
            pricingOptions={[
                {
                    title: "Handycam",
                    price: "R$ 890",
                    features: ["Salto a 12.000 pés", "Instrutor Elite", "Vídeo e Fotos da câmera de mão (GoPro)", "Certificado de Salto", "Camiseta Flyup"]
                },
                {
                    title: "Cameraman VIP",
                    price: "R$ 1.290",
                    features: ["Salto a 12.000 pés", "Instrutor Elite", "Vídeo e Fotos Externas (Cameraman)", "Vídeo Editado Profissional", "Certificado de Salto", "Boné e Camiseta Flyup"],
                    highlight: true
                },
                {
                    title: "Pacote Experience",
                    price: "R$ 1.590",
                    features: ["Salto a 12.000 pés", "Handycam + Cameraman VIP", "Vídeo e Fotos Completos", "Edição Premium para Reels", "Kit Completo Flyup", "Acesso à Área VIP"]
                }
            ]}
            faqs={[
                {
                    question: "Qual a idade mínima?",
                    answer: "A idade mínima é 14 anos. Menores de 18 anos precisam de autorização dos pais assinada em cartório e presença de um responsável no dia."
                },
                {
                    question: "Existe limite de peso?",
                    answer: "Sim, por segurança o limite é 95kg. Acima deste peso (até 110kg) é cobrada uma taxa extra e depende de avaliação do instrutor no dia."
                },
                {
                    question: "O que devo vestir?",
                    answer: "Roupas esportivas confortáveis e tênis de amarrar. Evite botas, saltos ou sandálias. Fornecemos o macacão de salto para usar por cima."
                },
                {
                    question: "E se o tempo estiver ruim?",
                    answer: "Paraquedismo depende 100% de condições meteorológicas. Se não houver teto ou estiver ventando muito, reagendaremos seu salto sem custo."
                }
            ]}
        />
    );
}
