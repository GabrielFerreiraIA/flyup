"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import {
    Check, ChevronDown, ChevronRight, MapPin, Phone,
    Shield, Star, Users, Zap, Award,
    Clock, ArrowRight, Play
} from "lucide-react";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns-1";

const BookingModal = dynamic(() => import("@/components/BookingModal"), { ssr: false });

const saltoDuploTestimonials: TestimonialItem[] = [
    { name: "Paloma Santos",    role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471456/Depoimento_2_1_elupzt.png",  text: "Foi tudo incrível, desde o atendimento virtual até o presencial, Fly Up fez meu aniversário chegar a um limite literalmente alto! Amei de paixão e claro levei meu irmão e meu enteado na loucura também. Valeu cada segundo!" },
    { name: "Ricardo Professor", role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471453/Depoimento_4_1_ut5h3i.png",  text: "Uma experiência incrível, curti tudo. Atendimento de primeira e uma vibe surreal. Recomendo muito!" },
    { name: "Beatriz Miranda",  role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435317/8_hucisr.webp",                text: "Confiei a melhor experiência da minha vida a escola Fly Up Paraquedismo. Foi surreal e eu indico a todos. Da medo? Claro! Mas eles super te tranquilizam, passam confiança e o instrutor foi super atencioso." },
    { name: "Bruno Henrique",   role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435323/12_iy9rg1.webp",               text: "Muito bom, a equipe completa e muito atenciosa do começo ao fim, te passam a maior segurança do mundo, experiência única pra quem é fã de adrenalina, super recomendo a escola." },
    { name: "Barbara R.",       role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435320/16_kvuf1f.webp",                text: "Desde o primeiro contato tive um ótimo atendimento, foi a empresa que mais me senti confortável pra realizar o salto. Atendimento top de toda equipe, local aconchegante. Meus parabéns a todos os instrutores." },
    { name: "Cristiane Mendes", role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435323/17_uj6ulj.webp",               text: "Minha experiência em saltar foi incrível, melhor do que eu imaginava, todo o atendimento foi tudo perfeito, me passaram bastante segurança." },
    { name: "Vera Lucia Escobar", role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435324/18_xunink.webp",             text: "Excelente Equipe desde o 1º contato. Super atenciosos. Os instrutores são animados e nos deixam tão envolvidos que confiamos plenamente. Foi sem dúvida A MELHOR EXPERIÊNCIA DA MINHA VIDA." },
    { name: "Kathiene Ibiapino", role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435324/19_lsgfy6.webp",              text: "Experiência incrível. Instrutores experientes lhe-dão muita segurança no salto. Atendimento com excelência e prontidão. Parabéns a toda equipe, recomendo a Fly Up Paraquedismo." },
    { name: "Luiza Avila",      role: "Salto Duplo", image: "https://res.cloudinary.com/dn50urzkv/image/upload/q_auto/f_auto/v1775435324/20-_1__ctnjjc.webp",           text: "Foi uma experiência incrível, profissionais com experiência e capacidade suficientes para trazer segurança. Com certeza escolheria outras vezes voar com a Fly Up Boituva!" },
];

const col1 = saltoDuploTestimonials.slice(0, 3);
const col2 = saltoDuploTestimonials.slice(3, 6);
const col3 = saltoDuploTestimonials.slice(6, 9);

function SaltoDuploTestimonials() {
    return (
        <section className="bg-zinc-950 py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[600px] bg-[#39FF14]/[0.12] blur-[120px] rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[500px] h-[600px] bg-[#39FF14]/[0.12] blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center max-w-xl mx-auto mb-14"
                >
                    <img
                        src="https://res.cloudinary.com/dn50urzkv/image/upload/v1779152123/ReviewsGoogleFlyup_tcnvxr.webp"
                        alt="Google Reviews Fly Up"
                        className="w-36 md:w-48 object-contain mb-4"
                    />
                    <p className="text-zinc-500 text-sm leading-relaxed">
                        Depoimentos reais de quem realizou o Salto Duplo com a Fly Up.
                    </p>
                </motion.div>

                {/* Colunas animadas */}
                <div className="flex justify-center gap-4 md:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
                    <TestimonialsColumn testimonials={col1} duration={18} />
                    <TestimonialsColumn testimonials={col2} duration={23} className="hidden md:block" />
                    <TestimonialsColumn testimonials={col3} duration={20} className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}

const HERO_VIDEO = "https://res.cloudinary.com/dn50urzkv/video/upload/f_auto,q_auto/v1771466144/VIDEO_HERO_OTIMIZADO_FLYUP_twgnje.mp4";
const PROMO_IMAGE = "https://res.cloudinary.com/dn50urzkv/image/upload/v1779472362/Imagem_Salto_DUplo_Desconto_zfaswq.webp";

const galleryImages = [
    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885605/Salto_Duplo_-_2_Final_net3xi.webp",
    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto_Duplo_-_4_Final_yvmkuw.webp",
    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto-Duplo-5_-_Final_rrkzlm.webp",
    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto_Duplo_-_3_Final_tgnapp.webp",
    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto-Duplo-1_Final_y2xwks.webp",
    "https://res.cloudinary.com/dn50urzkv/image/upload/v1777885605/Salto-Duplo-_6_gb9bnk.webp",
];

const faqs = [
    {
        q: "Tenho muito medo de altura. Consigo saltar?",
        a: "Sim — e você vai se surpreender. A sensação não é de cair num abismo como em montanhas-russas ou vidros de prédios. A altitude é tão grande que o cérebro não processa como vertigem. O que você vai sentir é puro vento e leveza. A maioria dos nossos alunos diz exatamente isso depois do salto.",
    },
    {
        q: "É seguro? E se o paraquedas não abrir?",
        a: "Extremamente seguro. Utilizamos equipamentos Sigma — os melhores do mundo. Todo sistema tem um dispositivo de abertura automática (AAD/Vigil) que ativa o paraquedas reserva sem nenhuma ação humana, caso necessário. Em mais de 30 anos de operação, nossa segurança jamais foi comprometida.",
    },
    {
        q: "Qual é o peso e a idade mínima?",
        a: "O peso máximo é 100kg e a idade mínima é 16 anos (com autorização dos pais para menores de 18). Não há restrição de altura. Se você tem alguma condição de saúde específica, entre em contato antes de agendar.",
    },
    {
        q: "Quanto tempo fico no local?",
        a: "Reserve de 3 a 4 horas para a experiência completa: check-in, treinamento de segurança (~15 min), aguardando embarque, voo até 12.000 pés (~15 min), o salto em si (~20 min do início ao pouso) e recebimento das fotos.",
    },
    {
        q: "Saltam em todos os dias da semana?",
        a: "Sim! Operamos de segunda a domingo, todos os dias do ano (exceto Natal e Ano Novo). Agendamentos são feitos via WhatsApp ou pelo botão desta página. Recomendamos agendar com antecedência para garantir sua vaga.",
    },
    {
        q: "Preciso ter experiência prévia?",
        a: "Nenhuma. O Salto Duplo (ou Tandem) foi criado exatamente para isso: você vai conectado a um instrutor certificado que controla tudo. Seu papel é relaxar e aproveitar. O treinamento antes do salto leva apenas 15 minutos.",
    },
    {
        q: "Como recebo o vídeo e as fotos?",
        a: "No pacote Handycam e acima, você recebe um link para download digital com o vídeo editado com trilha sonora e aproximadamente 200 fotos em alta resolução — tudo em até algumas horas após o salto, direto no seu WhatsApp.",
    },
    {
        q: "O que devo levar no dia?",
        a: "Roupas confortáveis (calça, tênis fechado), documento de identidade e disposição para voar. Temos estrutura completa no local: café, estacionamento gratuito e espaço pet. Não precisa levar equipamento nenhum.",
    },
];

const steps = [
    {
        num: "01",
        title: "O Voo Panorâmico",
        desc: "Subida de 15 minutos até 12.000 pés com vista de tirar o fôlego de toda a região de Boituva.",
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1779154463/Voo_panoramico_i8el49.webp",
    },
    {
        num: "02",
        title: "A Queda Livre",
        desc: "50 segundos de pura adrenalina a 200km/h. A sensação de liberdade que você vai lembrar para sempre.",
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1771951037/Salto_Duplo_Editado_16-9_qgdiqh.png",
    },
    {
        num: "03",
        title: "Navegação",
        desc: "Com o paraquedas aberto, você pilota junto ao instrutor por 5 a 7 minutos, apreciando a vista de 360° de Boituva.",
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1779154377/Controle_do_paraquedas_has6jj.webp",
    },
    {
        num: "04",
        title: "Pouso",
        desc: "Pouso suave no gramado. Você aterra de pé, com a adrenalina ainda correndo nas veias e um sorriso impossível de esconder.",
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1779154378/Pouso_bxfxsm.webp",
    },
];

const modalities = [
    {
        id: "fun",
        title: "Salto Fun",
        badge: null,
        oldPrice: "R$ 629",
        price: "R$ 599",
        installment: "12x de R$ 62,90",
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777882708/Salto_Fun_gvsb6v.png",
        features: [
            "Salto a 12.000 pés",
            "Equipamento Sigma (elite)",
            "Treinamento pré-salto",
            "Óculos de proteção premium",
            "Sem registro de imagens",
        ],
        highlight: false,
    },
    {
        id: "handycam",
        title: "Salto Handycam",
        badge: "MAIS POPULAR",
        oldPrice: "R$ 890",
        price: "R$ 745",
        installment: "12x de R$ 82,90",
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777882708/Salto_Handcan_vwouto.png",
        features: [
            "Todos os benefícios do Fun",
            "Câmera de punho do instrutor",
            "Vídeo editado com trilha sonora",
            "Aprox. 200 fotos em alta res.",
            "Link para download digital",
        ],
        highlight: true,
    },
    {
        id: "supervip",
        title: "Salto Super VIP",
        badge: null,
        oldPrice: null,
        price: "Consultar",
        installment: null,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777887040/Salto_Super_Vip_srkbfq.png",
        features: [
            "Upgrade total da experiência",
            "Cinegrafista externo exclusivo",
            "Vídeo com trilha cinematográfica",
            "Aprox. 350 fotos de múltiplos ângulos",
            "Perspectivas únicas de queda livre",
        ],
        highlight: false,
    },
    {
        id: "supervipplus",
        title: "Super VIP Plus",
        badge: null,
        oldPrice: null,
        price: "Consultar",
        installment: null,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/v1777882708/Salto_Super_VIP_PLUS_kmgoqi.png",
        features: [
            "O ápice da experiência Super VIP",
            "Vídeo exclusivo para Reels/TikTok",
            "Acesso a todos os vídeos brutos (Raw)",
            "KIT VIP Exclusivo Fly Up",
            "Prioridade no embarque",
        ],
        highlight: false,
    },
];

const objections = [
    {
        icon: Zap,
        title: "Não é a mesma sensação de vertigem",
        body: "A altura é tão grande que o cérebro não processa como borda. Não tem a sensação de \"estou prestes a cair\". Tem a sensação de que você está flutuando em cima de um travesseiro de ar.",
    },
    {
        icon: Shield,
        title: "Equipamento com falha dupla de segurança",
        body: "Dois paraquedas (principal e reserva) + dispositivo eletrônico Vigil que abre o reserva automaticamente se necessário. São décadas de engenharia de segurança no seu equipamento.",
    },
    {
        icon: Clock,
        title: "Em 4 horas você está de volta com uma história",
        body: "Não precisa marcar uma semana de férias. Venha em qualquer dia, passe a manhã ou a tarde aqui e volte com um vídeo que vai fazer seus amigos pedirem para ir junto.",
    },
];

const stats = [
    { value: "+5.000", label: "Saltos Realizados" },
    { value: "Since 1992", label: "+32 Anos de Experiência" },
    { value: "Boituva-SP", label: "Centro Nacional de Paraquedismo" },
    { value: "100%", label: "Instrutores Certificados CBPQ" },
];

/* ── Botão primário reutilizável ── */
function BtnNeon({ onClick, children, className = "" }: {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`group relative inline-flex items-center justify-center gap-2 cursor-pointer bg-[#39FF14] hover:bg-[#22cc0a] text-black font-black italic uppercase tracking-wider px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] overflow-hidden active:scale-95 ${className}`}
        >
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
}

/* ── Botão outline neon reutilizável ── */
function BtnOutline({ href, onClick, children, className = "" }: {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}) {
    const cls = `inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-[#39FF14] text-[#39FF14] font-black italic uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-[#39FF14] hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 ${className}`;
    if (href) return <a href={href} className={cls}>{children}</a>;
    return <button onClick={onClick} className={cls}>{children}</button>;
}

const BANNER_HEIGHT = 44;

const modalityConfig: Record<string, { source: string; title: string }> = {
    'fun':          { source: 'salto-duplo-v3-fun',          title: 'Salto Duplo Fun' },
    'handycam':     { source: 'salto-duplo-v3-handycam',     title: 'Salto Duplo Handycam' },
    'supervip':     { source: 'salto-duplo-v3-supervip',     title: 'Salto Duplo Super VIP' },
    'supervipplus': { source: 'salto-duplo-v3-supervipplus', title: 'Salto Duplo Super VIP Plus' },
};

export default function SaltoDuploV3Client() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSource, setModalSource] = useState('salto-duplo-v3-handycam');
    const [modalExperience, setModalExperience] = useState('Salto Duplo Handycam');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [bannerVisible, setBannerVisible] = useState(true);

    const openModal = (source = 'salto-duplo-v3-handycam', experience = 'Salto Duplo Handycam') => {
        setModalSource(source);
        setModalExperience(experience);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const header = document.querySelector("header");
        if (header) header.style.top = `${BANNER_HEIGHT}px`;

        const handleScroll = () => {
            const pastHero = window.scrollY > window.innerHeight * 0.8;
            setBannerVisible(!pastHero);
            if (header) header.style.top = pastHero ? "" : `${BANNER_HEIGHT}px`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (header) header.style.top = "";
        };
    }, []);


    return (
        <>
            {/* Keyframes do ticker */}
            <style>{`
                @keyframes ticker {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker-track { animation: ticker 22s linear infinite; }
                .ticker-track:hover { animation-play-state: paused; }

                @keyframes ticker-ltr {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .ticker-ltr { animation: ticker-ltr 12s linear infinite; }
                .stroke-neon-responsive { -webkit-text-stroke: 0.8px #39FF14; }
                @media (min-width: 768px) { .stroke-neon-responsive { -webkit-text-stroke: 1.5px #39FF14; } }
            `}</style>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                experienceTitle={modalExperience}
                source={modalSource}
                formId="form-agendamento-salto-duplo"
            />


            {/* =============================================
                LIGHTBOX
            ============================================= */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={lightboxImg}
                            alt="Galeria Fly Up"
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Banner Promocional — fixo, some ao sair do hero */}
            {bannerVisible && (
                <div
                    className="fixed top-0 left-0 right-0 z-[70] text-black py-3 px-4 text-center"
                    style={{ background: "linear-gradient(to right, #39FF14, #10b981)" }}
                >
                    <p className="text-xs md:text-sm font-black italic uppercase tracking-wider">
                        Agende agora seu salto duplo — Parcele em até 12x sem juros — Salte todos os dias
                    </p>
                </div>
            )}

            {/* =============================================
                1. HERO — DARK — video bg
            ============================================= */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black" style={{ paddingTop: `${BANNER_HEIGHT}px` }}>

                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10" />
                    <video
                        autoPlay loop muted playsInline
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-75"
                    >
                        <source src={HERO_VIDEO} type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-20 container mx-auto px-6 text-center pt-16 pb-48">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.88] text-white mb-6"
                    >
                        Salto Duplo
                        <br />
                        <span
                            className="text-transparent uppercase"
                            style={{ WebkitTextStroke: "2px #39FF14" }}
                        >
                            de Paraquedas
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-zinc-300 text-base md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    >
                        Conectado a um instrutor certificado, você salta de{" "}
                        <strong className="text-white font-bold">12.000 pés</strong> e experimenta{" "}
                        <strong className="text-white font-bold">50 segundos de queda livre</strong> a{" "}
                        <strong className="text-white font-bold">200km/h</strong>. Com segurança absoluta.
                    </motion.p>

                </div>

                {/* ── Banner de oportunidade — fundo do hero ── */}
                <div className="absolute bottom-6 md:bottom-10 left-0 w-full z-30 px-4 md:px-6 pointer-events-none">
                    <div className="max-w-5xl mx-auto pointer-events-auto">
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[32px] p-4 md:p-7 shadow-2xl overflow-hidden group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/5 via-transparent to-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative z-10">

                                {/* Texto */}
                                <div className="flex items-center justify-between w-full md:w-auto md:flex-1 gap-4">
                                    <div className="flex flex-col items-start">
                                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-[#39FF14] mb-1 opacity-80">
                                            Promoção exclusiva
                                        </span>
                                        <h3 className="text-base md:text-2xl font-black italic uppercase text-white tracking-tighter leading-tight">
                                            Reserve seu salto<br />
                                            <span className="text-transparent stroke-neon-responsive">
                                                com R$ 150 de desconto
                                            </span>
                                        </h3>
                                    </div>

                                    {/* Desconto */}
                                    <div className="flex flex-col items-end md:items-center justify-center md:px-8 md:border-x md:border-white/5">
                                        <div className="flex items-baseline gap-1 md:gap-2">
                                            <span className="text-3xl md:text-6xl font-black italic tracking-tighter text-transparent leading-none" style={{ WebkitTextStroke: "2px #39FF14" }}>
                                                R$150
                                            </span>
                                        </div>
                                        <span className="text-[9px] md:text-[10px] font-black italic uppercase text-[#39FF14] tracking-tighter">
                                            OFF
                                        </span>
                                        <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-zinc-500 mt-0.5">
                                            Salto VIP Plus · Vagas limitadas
                                        </span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="w-full md:w-auto">
                                    <button
                                        onClick={() => openModal()}
                                        className="group/cta relative h-12 md:h-14 w-full md:px-10 bg-white text-black font-black italic uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] cursor-pointer"
                                    >
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ background: "linear-gradient(to right, #39FF14, #10b981)" }} />
                                        <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                                            Garantir meu desconto
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/cta:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =============================================
                TICKER BANNER — DIVISÃO HERO / CONTEÚDO
            ============================================= */}
            <div
                className="w-full overflow-hidden py-4"
                style={{ background: "linear-gradient(to right, #39FF14, #10b981)" }}
            >
                <div className="ticker-ltr flex whitespace-nowrap">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="inline-flex items-center gap-6 px-10 text-black font-black italic uppercase tracking-widest text-sm md:text-base shrink-0">
                            Aproveite seu 10% OFF no salto hoje
                            <span className="text-black/40 font-black">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* =============================================
                2. ÂNCORA DE PREÇO — WHITE
            ============================================= */}
            <section className="bg-white py-16 md:py-24 relative overflow-hidden">
                {/* Hexagonal Honeycomb Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.18] pointer-events-none select-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='147' viewBox='0 0 28 49'%3E%3Cg fill='%234B5563' fill-opacity='0.55'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "84px 147px",
                        backgroundRepeat: "repeat",
                        maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black 10%, transparent 65%)",
                        WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black 10%, transparent 65%)",
                    }}
                />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                            {/* Imagem promoção */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <img
                                    src={PROMO_IMAGE}
                                    alt="Promoção Salto Duplo Fly Up Boituva"
                                    className="w-full rounded-[32px] object-cover shadow-2xl"
                                />
                            </motion.div>

                            {/* Texto de promoção */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div>
                                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#39FF14] border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-4">
                                        Promoção · Salto Handycam
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-tight">
                                        Salto Duplo com{" "}
                                        <span style={{ WebkitTextStroke: "1.5px #39FF14", color: "transparent" }}>
                                            Vídeo e Fotos
                                        </span>{" "}
                                        Inclusos
                                    </h2>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-black uppercase tracking-widest text-zinc-400">De:</span>
                                        <span className="text-2xl font-black italic line-through text-red-400">R$ 890,00</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs font-black uppercase tracking-widest text-zinc-900">Por:</span>
                                        <span className="text-5xl md:text-6xl font-black italic text-zinc-900 tracking-tighter leading-none">
                                            R$ 745
                                        </span>
                                        <span className="text-xl font-black italic text-zinc-900">,00</span>
                                    </div>
                                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                                        Ou 12x de <strong className="text-zinc-800">R$ 82,90</strong> sem juros
                                    </p>
                                </div>

                                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 space-y-2">
                                    {[
                                        "Vídeo editado com trilha sonora",
                                        "Aprox. 200 fotos em alta resolução",
                                        "Link para download digital",
                                        "Válido de segunda a sexta (exceto feriados)",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2.5">
                                            <div className="w-4 h-4 rounded-full bg-[#39FF14] flex items-center justify-center shrink-0">
                                                <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-zinc-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <BtnNeon onClick={() => openModal()} className="w-full justify-center h-14 text-sm">
                                    Garantir essa promoção
                                    <ArrowRight className="w-4 h-4" />
                                </BtnNeon>
                                <p className="text-center text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                    Promoção por tempo limitado · Vagas disponíveis
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                2b. GRUPOS E EVENTOS — WHITE
            ============================================= */}
            <section className="bg-white py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative order-2 md:order-1"
                            >
                                <img
                                    src="https://res.cloudinary.com/dn50urzkv/image/upload/v1777885606/Salto_Duplo_-_3_Final_tgnapp.webp"
                                    alt="Salto duplo em grupo — Fly Up Boituva"
                                    className="w-full rounded-[32px] object-cover aspect-[4/3] shadow-xl"
                                />
                                <div className="absolute -bottom-4 -left-4 bg-black text-white rounded-2xl px-6 py-4 shadow-2xl">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-[#39FF14]" />
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Grupos</p>
                                            <p className="text-sm font-black italic text-white">Condições especiais</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 md:order-2"
                            >
                                <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 border border-zinc-200 rounded-full px-4 py-1.5 mb-5">
                                    Venha com sua galera
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-tight mb-5">
                                    Bora saltar
                                    <br />
                                    com os amigos
                                </h2>
                                <p className="text-zinc-600 leading-relaxed mb-7">
                                    A Fly Up tem{" "}
                                    <strong className="text-zinc-900">valores especiais para grupos</strong>, festas
                                    comemorativas e aniversariantes do mês. Nossa estrutura completa tem
                                    espaço para picnic, café e estacionamento gratuito.
                                </p>

                                <div className="space-y-3 mb-8">
                                    {[
                                        "Grupos a partir de 5 pessoas — condições especiais",
                                        "Aniversariantes têm desconto no mês do aniversário",
                                        "Grupos corporativos e team building",
                                        "Espaço completo para receber sua equipe",
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#39FF14] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-black" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-zinc-600">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Botão visível apenas no desktop */}
                                <div className="hidden md:block">
                                    <BtnNeon onClick={() => openModal()}>
                                        Planejar um salto em grupo
                                        <Users className="w-4 h-4" />
                                    </BtnNeon>
                                </div>
                            </motion.div>

                            {/* Botão no mobile: aparece APÓS a imagem (order-3) */}
                            <div className="order-3 md:hidden w-full">
                                <BtnNeon onClick={() => openModal()} className="w-full justify-center">
                                    Planejar um salto em grupo
                                    <Users className="w-4 h-4" />
                                </BtnNeon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                3b. DEPOIMENTOS — DARK (colunas animadas)
            ============================================= */}
            <SaltoDuploTestimonials />

            {/* =============================================
                3. TRUST SIGNALS — DARK
            ============================================= */}
            <section className="bg-zinc-950 pt-6 pb-8 md:pt-8 md:pb-10 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-8">
                            Por que escolher a Fly Up
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <p className="text-2xl md:text-3xl font-black italic text-[#39FF14] tracking-tighter mb-1 group-hover:scale-110 transition-transform duration-300">
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                4. JORNADA DA EXPERIÊNCIA — WHITE
            ============================================= */}
            <section className="bg-white py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 border border-zinc-200 rounded-full px-4 py-1.5 mb-5">
                                Do check-in ao pouso
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-zinc-900 leading-tight">
                                Como será a sua
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                                    Experiência
                                </span>
                            </h2>
                            <p className="text-zinc-500 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
                                Em cerca de 20 minutos você vai sair do avião e pousar no gramado. Aqui está o que acontece.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-7">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative rounded-[28px] overflow-hidden cursor-default hover:-translate-y-2 transition-transform duration-500"
                                    style={{ aspectRatio: "4/5" }}
                                >
                                    {/* Imagem de fundo */}
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Gradiente sobre a imagem */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    {/* Número marcado no topo */}
                                    <div className="absolute top-5 left-6 leading-none select-none">
                                        <span
                                            className="text-7xl lg:text-8xl font-black italic text-transparent transition-all duration-500"
                                            style={{
                                                WebkitTextStroke: "1.5px rgba(57,255,20,0.35)",
                                                filter: "drop-shadow(0 0 12px rgba(57,255,20,0.25))",
                                            }}
                                        >
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Texto na base */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-base lg:text-lg font-black italic uppercase tracking-tight text-white leading-tight mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-zinc-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-24 overflow-hidden transition-all">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Borda neon no hover */}
                                    <div className="absolute inset-0 rounded-[28px] ring-0 group-hover:ring-2 group-hover:ring-[#39FF14]/50 transition-all duration-300 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-14">
                            <BtnNeon onClick={() => openModal()}>
                                Quero viver isso
                                <ChevronRight className="w-4 h-4" />
                            </BtnNeon>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                5. MODALIDADES / PRICING — DARK
            ============================================= */}
            <section id="modalidades" className="bg-black py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#39FF14] border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-5">
                                Escolha o seu pacote
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-white leading-tight">
                                Escolha a sua
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                                    Modalidade
                                </span>
                            </h2>
                            <p className="text-zinc-500 text-lg mt-4 max-w-xl mx-auto">
                                Do essencial ao cinematográfico. Todos os pacotes incluem equipamento de elite e instrutor certificado.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {modalities.map((mod, i) => (
                                <motion.div
                                    key={mod.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative rounded-[28px] overflow-hidden flex flex-col border transition-all duration-300 group ${
                                        mod.highlight
                                            ? "border-[#39FF14] bg-[#39FF14]/5 shadow-[0_0_50px_rgba(57,255,20,0.15)]"
                                            : "border-white/10 bg-zinc-900/60 hover:border-white/20"
                                    }`}
                                >
                                    {mod.badge && (
                                        <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
                                            <span className="bg-[#39FF14] text-black text-[9px] font-black uppercase tracking-widest px-5 py-1.5 rounded-b-xl">
                                                {mod.badge}
                                            </span>
                                        </div>
                                    )}

                                    <div className={`relative overflow-hidden ${mod.badge ? "mt-6" : ""}`}>
                                        <img
                                            src={mod.image}
                                            alt={mod.title}
                                            className="w-full object-contain group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-base font-black italic uppercase tracking-tight text-white mb-3">
                                            {mod.title}
                                        </h3>

                                        <div className="mb-4">
                                            {mod.oldPrice && (
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">De:</span>
                                                    <span className="text-sm font-black italic line-through text-red-500/70">
                                                        {mod.oldPrice}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex items-baseline gap-1">
                                                {mod.oldPrice && (
                                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#39FF14]">Por:</span>
                                                )}
                                                <span className={`font-black italic tracking-tighter leading-none ${
                                                    mod.oldPrice ? "text-3xl text-white" : "text-lg text-zinc-500"
                                                }`}>
                                                    {mod.price}
                                                </span>
                                            </div>
                                            {mod.installment && (
                                                <p className="text-[9px] font-black italic text-[#39FF14] uppercase tracking-widest mt-1">
                                                    {mod.installment}
                                                </p>
                                            )}
                                        </div>

                                        <ul className="space-y-2 flex-1 mb-5">
                                            {mod.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2">
                                                    <Check className="w-3.5 h-3.5 text-[#39FF14] shrink-0 mt-0.5" strokeWidth={3} />
                                                    <span className="text-xs text-zinc-400 leading-snug">{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Card CTA — estilo design system */}
                                        <button
                                            onClick={() => {
                                                const cfg = modalityConfig[mod.id] ?? { source: 'salto-duplo-v3-handycam', title: 'Salto Duplo Handycam' };
                                                openModal(cfg.source, cfg.title);
                                            }}
                                            className={`group/card relative w-full h-11 rounded-xl font-black italic uppercase tracking-wider text-xs transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5 overflow-hidden ${
                                                mod.highlight
                                                    ? "bg-[#39FF14] text-black hover:bg-[#22cc0a] shadow-lg shadow-[#39FF14]/30"
                                                    : "bg-transparent border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black"
                                            }`}
                                        >
                                            <div className="absolute inset-0 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                                            <span className="relative z-10 flex items-center gap-1.5">
                                                Reservar Vaga
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                6. GALERIA — DARK
            ============================================= */}
            <section className="bg-zinc-950 py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
                            <div>
                                <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#39FF14] mb-3">
                                    Visual Experience
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-tight">
                                    Galeria{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                                        Exclusiva
                                    </span>
                                </h2>
                            </div>
                            <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">
                                Clique para ampliar →
                            </p>
                        </div>

                        {/* Mobile: 2 colunas simples | Desktop: layout editorial com grid fixo */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 md:[grid-template-rows:280px_280px_280px]">
                            {galleryImages.map((img, i) => (
                                <motion.div
                                    key={img}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className={`group relative overflow-hidden cursor-zoom-in rounded-2xl ${
                                        i === 0 ? "md:col-span-2 md:row-span-2" : ""
                                    }`}
                                    style={{ aspectRatio: "4/3" }}
                                    onClick={() => setLightboxImg(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Salto Duplo Fly Up — foto ${i + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                                            <Play className="w-5 h-5 text-white fill-white" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                8. QUEBRA DE OBJEÇÃO / MEDO — WHITE  (trocado com grupos)
            ============================================= */}
            <section className="bg-white py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 border border-zinc-200 rounded-full px-4 py-1.5 mb-6">
                                    A pergunta mais comum
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-zinc-900 leading-tight mb-6">
                                    Você tem{" "}
                                    <span className="text-transparent" style={{ WebkitTextStroke: "2px #18181b" }}>
                                        medo
                                    </span>
                                    <br />
                                    de altura?
                                </h2>
                                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                                    <strong className="text-zinc-900">Perfeito. A maioria dos nossos alunos também tinha.</strong>{" "}
                                    E todos voltaram pedindo para fazer de novo. Aqui estão as três coisas que você
                                    precisa saber antes de decidir.
                                </p>

                                <BtnNeon onClick={() => openModal()}>
                                    Quero tentar mesmo assim
                                    <ArrowRight className="w-4 h-4" />
                                </BtnNeon>
                            </motion.div>

                            <div className="space-y-5">
                                {objections.map((obj, i) => {
                                    const ObjIcon = obj.icon;
                                    return (
                                    <motion.div
                                        key={obj.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 hover:border-[#39FF14]/40 transition-colors duration-200"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
                                                <ObjIcon className="w-5 h-5 text-[#39FF14]" strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <h4 className="font-black uppercase text-sm tracking-wide text-zinc-900 mb-2">
                                                    {obj.title}
                                                </h4>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{obj.body}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                9. FAQ — DARK
            ============================================= */}
            <section className="bg-black py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#39FF14] border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-5">
                                Respondemos tudo
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                                Dúvidas{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                                    Frequentes
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                        openFaq === i
                                            ? "border-[#39FF14]/40 bg-zinc-900/80"
                                            : "border-white/5 bg-zinc-900/30 hover:border-white/10"
                                    }`}
                                >
                                    <button
                                        className="w-full flex items-center justify-between p-6 text-left gap-4"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span className={`text-sm md:text-base font-black uppercase tracking-wide leading-snug transition-colors ${
                                            openFaq === i ? "text-[#39FF14]" : "text-white"
                                        }`}>
                                            {faq.q}
                                        </span>
                                        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            openFaq === i
                                                ? "bg-[#39FF14] text-black rotate-180"
                                                : "bg-white/5 text-zinc-400"
                                        }`}>
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-zinc-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-zinc-600 text-sm mb-4">
                                Ainda tem dúvida? Fale direto no WhatsApp.
                            </p>
                            <a
                                href="https://wa.me/5515998282280"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 h-12 px-8 bg-[#25D366] text-white font-black italic uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 text-sm shadow-lg"
                            >
                                <Phone className="w-4 h-4 fill-current" />
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================================
                10. CTA FINAL — DARK NEON
            ============================================= */}
            <section className="bg-zinc-950 py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#39FF14]/5 blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#39FF14] border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-6">
                                Promoção por tempo limitado
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-tight mb-5">
                                Pronto para
                                <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "2px #39FF14" }}>
                                    voar?
                                </span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                                Salto Handycam com vídeo e fotos inclusos.{" "}
                                <span className="text-white font-bold">De R$890 por R$745.</span>{" "}
                                Parcele em até 12x. Saltamos todos os dias em Boituva-SP.
                            </p>

                            <BtnNeon onClick={() => openModal()} className="h-16 px-12 text-base">
                                Agendar meu salto agora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </BtnNeon>

                            <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest mt-6">
                                Sem compromisso · Confirmação via WhatsApp · Vagas limitadas
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =============================================
                11. LOCALIZAÇÃO — WHITE
            ============================================= */}
            <section className="bg-white py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 border border-zinc-200 rounded-full px-4 py-1.5 mb-5">
                                Como chegar
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-zinc-900">
                                Onde ficamos
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-[#39FF14]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Endereço</p>
                                        <p className="font-bold text-zinc-900 leading-snug">
                                            Rod. Pres. Castelo Branco, KM 116
                                            <br />
                                            Boituva - SP · Aeroporto de Boituva
                                        </p>
                                        <p className="text-zinc-500 text-sm mt-1">Centro Nacional de Paraquedismo</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-[#39FF14]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Distância</p>
                                        <p className="font-bold text-zinc-900">~1h30 de São Paulo</p>
                                        <p className="text-zinc-500 text-sm mt-1">Via Castello Branco (SP-280)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-[#39FF14]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Contato</p>
                                        <p className="font-bold text-zinc-900">+55 (15) 99828-2280</p>
                                        <p className="text-zinc-500 text-sm mt-1">contato@flyup.com.br</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href="https://maps.google.com/?q=Centro+Nacional+de+Paraquedismo+Boituva+SP"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 h-11 flex items-center justify-center gap-2 bg-zinc-900 text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-black transition-colors"
                                    >
                                        <MapPin className="w-3.5 h-3.5" />
                                        Google Maps
                                    </a>
                                    <a
                                        href="https://waze.com/ul?q=Centro+Nacional+de+Paraquedismo+Boituva"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 h-11 flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 text-xs font-black uppercase tracking-wider rounded-xl hover:border-zinc-400 transition-colors"
                                    >
                                        Waze
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-[28px] overflow-hidden border border-zinc-200 shadow-lg h-80 md:h-full min-h-[320px]">
                                <iframe
                                    title="Fly Up Paraquedismo — Localização"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7!2d-47.7122!3d-23.2163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzU4LjciUyA0N8KwNDInNDMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "320px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
