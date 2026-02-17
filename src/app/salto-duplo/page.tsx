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
                    icon: "CheckCircle2",
                    image: "https://images.unsplash.com/photo-1595246140625-573b715e56d8?q=80&w=800&auto=format&fit=crop"
                },
                {
                    title: "O Voo Panorâmico",
                    description: "Um voo de 15 minutos até a altitude de salto (12.000 pés) sobrevoando a região de Boituva. A vista é espetacular!",
                    icon: "Cloud",
                    image: "https://images.unsplash.com/photo-1464037866556-56549919f42b?q=80&w=800&auto=format&fit=crop"
                },
                {
                    title: "A Queda Livre",
                    description: "A porta se abre e a magia acontece. 45 segundos de pura adrenalina a 200km/h. A sensação de liberdade é indescritível.",
                    icon: "Zap",
                    image: "https://images.unsplash.com/photo-1521673461240-991eb9c9c71e?q=80&w=800&auto=format&fit=crop"
                },
                {
                    title: "Navegação e Pouso",
                    description: "O instrutor abre o paraquedas e tudo fica calmo. Você pode até pilotar o velame antes de um pouso suave e preciso.",
                    icon: "Shield",
                    image: "https://images.unsplash.com/photo-1545642412-fbee4850fa78?q=80&w=800&auto=format&fit=crop"
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
            specialConditions={[
                {
                    title: "Aniversariantes",
                    description: "Celebre seu dia nas alturas! Aniversariantes do mês ganham um upgrade no pacote de vídeo ou um desconto especial.",
                    icon: "Trophy"
                },
                {
                    title: "Grupos e Galera",
                    description: "Traga sua tribo. Grupos acima de 4 pessoas têm condições exclusivas e podem saltar na mesma decolagem.",
                    icon: "Users"
                },
                {
                    title: "Pedidos de Casamento",
                    description: "O 'Sim' mais emocionante do mundo. Organizamos toda a surpresa com faixa de aterrissagem e champanhe.",
                    icon: "Award"
                }
            ]}
            faqs={[
                {
                    question: "Tenho muito medo de altura, consigo saltar?",
                    answer: "Sim! A sensação não é de cair em um abismo, mas de flutuar em um colchão de ar. A altura é tão grande que o cérebro não processa como medo de borda (vertigem). É libertador."
                },
                {
                    question: "É seguro? E se o paraquedas não abrir?",
                    answer: "Extremamente seguro. Utilizamos os melhores equipamentos do mundo (Sigma/Vigil). Todos os paraquedas possuem um dispositivo de abertura automática (AAD) que ativa o reserva caso necessário, sem ação humana."
                },
                {
                    question: "Quanto tempo demora tudo?",
                    answer: "Reserve cerca de 3 a 4 horas para toda a experiência, desde a chegada, treinamento, voo e aterrissagem. O salto em si leva cerca de 20 minutos (subida + queda + navegação)."
                },
                {
                    question: "Posso usar óculos ou lentes?",
                    answer: "Sim! Fornecemos óculos de proteção especiais que se encaixam confortavelmente sobre seus óculos de grau. Lentes de contato são ainda melhores."
                },
                {
                    question: "Como recebo minhas fotos e vídeos?",
                    answer: "Nossa equipe de edição trabalha enquanto você descansa. Você receberá um link para download em alta resolução (4K) em até 24h após o salto, ou na hora dependendo do pacote."
                }
            ]}
        />
    );
}
