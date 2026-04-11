import ServicePageLayout from "@/components/ServicePageLayout";

export default function SaltoBalaoPage() {
    return (
        <ServicePageLayout
            sourceId="botao-agendar-salto-balao"
            title="Saltos e Passeios de Balão"
            subtitle="Passeio de Balão | Salto Duplo de Balão | Salto para Atletas | Balão Exclusivo Família e Casal | Eventos Especiais e Pedidos de Casamento"
            heroImage="https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771951036/Salto_Bal%C3%A3o_Editado_16-9_misn8s.png"
            overview="O salto de balão é o ápice da exclusividade no paraquedismo. Ao contrário do avião, não há vento ou barulho de motor. Você experimenta o 'dead air' — uma saída em silêncio absoluto onde a gravidade te puxa suavemente até atingir a velocidade terminal. É uma experiência transformadora e altamente fotogênica."
            steps={[
                {
                    title: "Decolagem ao Amanhecer",
                    description: "Os voos de balão ocorrem na primeira hora do sol. Você verá o espetáculo do amanhecer enquanto sobe lentamente.",
                    icon: "Sunrise",
                    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=800&auto=format&fit=crop"
                },
                {
                    title: "Ascensão Silenciosa",
                    description: "A subida dura cerca de 45 minutos até atingir a altitude de lançamento (entre 6.000 e 10.000 pés).",
                    icon: "Cloud",
                    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
                },
                {
                    title: "A Saída (Dead Air)",
                    description: "Sem o vento relativo do avião, você simplesmente 'cai' no vazio. A sensação de aceleração é muito mais nítida e emocionante.",
                    icon: "Zap",
                    image: "https://images.unsplash.com/photo-1542408892-d965d1d61993?q=80&w=800&auto=format&fit=crop"
                },
                {
                    title: "Pouso e Brinde",
                    description: "Após o salto, nos reunimos para o tradicional brinde com espumante, celebrando a coragem e a beleza do voo.",
                    icon: "Trophy",
                    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop"
                }
            ]}
            galleryImages={[
                "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771958051/Imagem_Balao_6_Editada_4-5_be0out.png",
                "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771958050/Imagem_Balao_5_Editada_4-5_suomgt.png",
                "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771958050/Imagem_Balao_Editada_4-5_c2uipb.png",
                "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771958049/Imagem_Balao_2_Editada_4-5_ive7yc.png",
                "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771958049/Imagem_Balao_3_Editada_4-5_myjoxk.png",
                "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771958050/Imagem_Balao_4_Editada_4-5_jd43st.png"
            ]}
            pricingTitle="Preços e condições"
            pricingOptions={[
                {
                    title: "Salto Duplo de Balão",
                    price: "Consultar Condição",
                    priceClassName: "text-xl lg:text-lg xl:text-xl",
                    priceSubtext: null,
                    features: ["Voo de Balão", "Salto Duplo com Instrutor Elite", "Fotos e Vídeos Inclusos", "Brinde com Espumante", "Translado de volta à DZ"],
                    highlight: true
                },
                {
                    title: "Balão Coletivo",
                    price: "A partir de R$ 250",
                    priceClassName: "text-xl lg:text-lg xl:text-xl",
                    features: ["Voo de 45 a 60 min", "Até 8 pessoas no cesto", "Brinde com Espumante no pouso", "Café da manhã pós-voo", "Crianças até 40kg: R$ 250"]
                },
                {
                    title: "Balão Exclusivo Família",
                    price: "R$ 3.800",
                    priceClassName: "text-2xl lg:text-xl xl:text-2xl",
                    priceSubtext: "/ total",
                    features: ["Voo Exclusivo de 45 a 60 min", "Até 8 pessoas (ou max 550kg)", "Brinde com Espumante no pouso", "Café da manhã pós-voo"]
                },
                {
                    title: "Balão Exclusivo Casal",
                    price: "R$ 3.000",
                    priceClassName: "text-2xl lg:text-xl xl:text-2xl",
                    priceSubtext: "/ total",
                    features: ["Voo Exclusivo de 45 a 60 min", "Exclusivo para 2 pessoas", "Café da manhã a bordo", "Espumante a bordo", "Ideal para casamentos"]
                },
                {
                    title: "Atleta (Solo)",
                    price: "Consultar Condição",
                    priceClassName: "text-xl lg:text-lg xl:text-xl",
                    priceSubtext: null,
                    features: ["Voo de Balão", "Vaga para Atleta Licenciado", "Acompanhamento de Segurança", "Brinde com Espumante", "Resgate Incluso"]
                }
            ]}
            specialConditions={[
                {
                    title: "Pedidos de Casamento",
                    description: "Garanta uma dose extra de romance com nosso pacote exclusivo para casais, contendo café da manhã e espumante a bordo durante o voo.",
                    icon: "Star"
                },
                {
                    title: "Grupos e Famílias",
                    description: "Divida nossa experiência e um belíssimo café da manhã pós-voo em um passeio com cesto para até 8 pessoas, em voo reservado ou coletivo.",
                    icon: "Users"
                },
                {
                    title: "Para Atletas",
                    description: "Temos pacotes de jumps tickets destinados aos grupos de atletas já licenciados com condições especiais para organizer.",
                    icon: "Plane"
                }
            ]}
            faqs={[
                {
                    question: "Por que os saltos são de madrugada?",
                    answer: "Para a segurança do voo de balão. Precisamos das condições atmosféricas estáveis (ventos calmos e temperatura amena) que só ocorrem nas primeiras horas do dia."
                },
                {
                    question: "É mais perigoso que o avião?",
                    answer: "Não. A operação segue rigorosos padrões da ANAC. A diferença é a saída 'morta' (sem vento relativo inicial), que requer técnica específica dos instrutores, mas é extremamente controlada."
                },
                {
                    question: "E se o tempo virar?",
                    answer: "O piloto do balão tem autoridade final. Se as condições não forem 100% seguras, o voo é cancelado e reagendado sem custo. Segurança é inegociável."
                },
                {
                    question: "Preciso ter experiência para salto duplo de balão?",
                    answer: "Não! Qualquer pessoa apta fisicamente pode fazer. É uma experiência ainda mais exclusiva e suave que o salto de avião."
                }
            ]}
        />
    );
}
