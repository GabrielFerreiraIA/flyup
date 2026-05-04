"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import DiscountPopup from "@/components/DiscountPopup";
import { motion } from "framer-motion";
import { Camera, Video, Zap, Sparkles } from "lucide-react";

export default function SaltoDuplo2Page() {
    const jumpTypes = [
        {
            id: "fun",
            title: "FUN (O Clássico)",
            description: "Sinta o vento e a adrenalina pura em queda livre, focando 100% na sua emoção pessoal. Perfeito para quem quer viver o momento sem distrações.",
            icon: Zap,
            color: "from-blue-500/10 to-blue-500/5",
            accent: "blue-500",
            image: "https://images.unsplash.com/photo-1521673461240-991eb9c9c71e?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "selfie",
            title: "Selfie (Handycam)",
            description: "Neste salto, você estará conectado a um instrutor que fará as fotos e o vídeo utilizando câmeras fixas na mão (handycam). Registro íntimo do voo.",
            icon: Camera,
            color: "from-neon/10 to-neon/5",
            accent: "neon",
            image: "https://images.unsplash.com/photo-1534149626607-4221d6fb86b5?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "experience",
            title: "Experience (Autonomia)",
            description: "A experiência definitiva: além da produção cinematográfica, você assume o controle do altímetro e pilota o paraquedas, sentindo a real autonomia de um aluno.",
            icon: Sparkles,
            color: "from-amber-500/10 to-amber-500/5",
            accent: "amber-500",
            image: "https://images.unsplash.com/photo-1596700816960-94d35eb843c9?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "vip",
            title: "VIP (Cinematográfico)",
            description: "Conectado a um instrutor, com um segundo paraquedista realizando fotos e vídeos de vários ângulos diferentes e cinematográficos.",
            icon: Video,
            color: "from-purple-500/10 to-purple-500/5",
            accent: "purple-500",
            image: "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const JumpTypesSection = (
        <div className="space-y-12">
            <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-black mb-4">
                    Modalidades de Salto
                </h3>
                <p className="text-zinc-600 font-medium max-w-2xl mx-auto">
                    Escolha como você quer eternizar sua queda livre. Temos o pacote ideal para o seu estilo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jumpTypes.map((type, idx) => (
                    <motion.div
                        key={type.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border border-zinc-200 rounded-[32px] overflow-hidden hover:border-neon transition-all duration-300 group shadow-sm hover:shadow-xl"
                    >
                        <div className="h-48 relative overflow-hidden">
                            <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute bottom-4 left-4 bg-zinc-950 p-3 rounded-xl border border-white/20">
                                <type.icon className="text-neon w-6 h-6" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-black italic uppercase text-black mb-3 group-hover:text-[#008800] transition-colors font-sans">
                                {type.title}
                            </h4>
                            <p className="text-zinc-700 text-sm leading-relaxed font-medium">
                                {type.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <DiscountPopup />
            <ServicePageLayout
                sourceId="salto-duplo-2-page"
                title="Salto Duplo"
                webhookTitle="Salto Duplo (V2)"
                subtitle="Sinta a liberdade absoluta a 200km/h com total segurança."
                heroImage="https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771951037/Salto_Duplo_Editado_16-9_qgdiqh.png"
                overview="O Salto Duplo é a maneira mais fácil e segura de realizar o sonho de voar. Conectado a um instrutor experiente e certificado, você saltará de 12.000 pés, experimentando cerca de 50 segundos de queda livre seguidos por 5 a 7 minutos de navegação com o paraquedas aberto."
                pricingTitle="Escolha a sua modalidade"
                // renderBelowSteps={JumpTypesSection}
                steps={[
                    {
                        title: "Chegada e Preparação",
                        description: "Check-in e treinamento de 15 minutos sobre posição do corpo e segurança.",
                        icon: "CheckCircle2"
                    },
                    {
                        title: "O Voo Panorâmico",
                        description: "Subida de 15 minutos até 12.000 pés with vista espetacular de Boituva.",
                        icon: "Cloud"
                    },
                    {
                        title: "A Queda Livre",
                        description: "50 segundos de pura adrenalina a 200km/h. A sensação de liberdade definitiva.",
                        icon: "Zap"
                    },
                    {
                        title: "Navegação e Pouso",
                        description: "Voo de paraquedas aberto e pouso suave realizado pelo instrutor.",
                        icon: "Shield"
                    }
                ]}
                galleryImages={[
                    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885605/Salto_Duplo_-_2_Final_net3xi.webp",
                    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto_Duplo_-_4_Final_yvmkuw.webp",
                    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto-Duplo-5_-_Final_rrkzlm.webp",
                    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto_Duplo_-_3_Final_tgnapp.webp",
                    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto-Duplo-1_Final_y2xwks.webp",
                    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885605/Salto-Duplo-_6_gb9bnk.webp"
                ]}
                pricingOptions={[
                    {
                        title: "Salto Fun",
                        price: (
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 opacity-60">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">De:</span>
                                        <span className="text-lg font-black italic line-through text-red-500/80">R$ 629</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon">Por:</span>
                                        <span className="text-4xl font-black italic text-white tracking-tighter">R$ 599</span>
                                    </div>
                                </div>
                                <div className="text-[10px] font-black italic text-neon uppercase tracking-widest">
                                    Ou 12x de R$ 62,90
                                </div>
                            </div>
                        ),
                        priceClassName: "block",
                        priceSubtext: null,
                        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777882708/Salto_Fun_gvsb6v.png",
                        features: [
                            "Salto a 12.000 pés",
                            "Equipamento de Ponta (Sigma)",
                            "Treinamento pré-salto de elite",
                            "Óculos de proteção premium",
                            "Sem registro de imagens"
                        ],
                        highlight: false
                    },
                    {
                        title: "Salto Handycam",
                        price: (
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 opacity-60">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">De:</span>
                                        <span className="text-lg font-black italic line-through text-red-500/80">R$ 890</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon">Por:</span>
                                        <span className="text-4xl font-black italic text-white tracking-tighter">R$ 745</span>
                                    </div>
                                </div>
                                <div className="text-[10px] font-black italic text-neon uppercase tracking-widest">
                                    Ou 12x de R$ 82,90
                                </div>
                            </div>
                        ),
                        priceClassName: "block",
                        priceSubtext: null,
                        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777882708/Salto_Handcan_vwouto.png",
                        features: [
                            "Todos os benefícios do Salto Fun",
                            "Registro por câmera de punho (Instrutor)",
                            "Vídeo editado com trilha sonora",
                            "Aprox. 200 fotos de alta resolução",
                            "Link para download digital"
                        ],
                        highlight: true
                    },
                    {
                        title: "Salto Super VIP",
                        price: <span className="text-zinc-500 text-lg lg:text-base xl:text-lg">Consultar Promoções</span>,
                        priceSubtext: null,
                        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777887040/Salto_Super_Vip_srkbfq.png",
                        features: [
                            "Upgrade total da experiência Handycam",
                            "Cameraman Cinegrafista externo exclusivo",
                            "Vídeo editado com trilha cinematográfica",
                            "Aprox. 350 fotos de ângulos externos",
                            "Múltiplas perspectivas de queda livre"
                        ]
                    },
                    {
                        title: "Super VIP Plus",
                        price: <span className="text-zinc-500 text-lg lg:text-base xl:text-lg">Consultar Promoções</span>,
                        priceSubtext: null,
                        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777882708/Salto_Super_VIP_PLUS_kmgoqi.png",
                        features: [
                            "O ápice da experiência Super VIP",
                            "Vídeo editado exclusivo para Reels/TikTok",
                            "Acesso a todos os vídeos brutos (Raw)",
                            "KIT VIP Exclusivo Fly Up",
                            "Prioridade no embarque"
                        ]
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
                    }
                ]}
            />
        </>
    );
}
