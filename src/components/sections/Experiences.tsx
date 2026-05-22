"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Zap, GraduationCap, Cloud, Wind, Bird, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("@/components/BookingModal"), { ssr: false });

const experiences = [
    {
        id: "salto-duplo",
        title: "Salto Duplo",
        badge: "Adrenalina",
        icon: Zap,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771470425/Salto_Duplo_1_hprebk.png",
        col: 1,
        link: "/salto-duplo",
        tags: ["12.000FT", "50S QUEDA"],
        description: "A porta de entrada. Conectado a um instrutor, 200km/h de pura liberdade.",
        oldPrice: "890,00",
        price: "745,00"
    },
    {
        id: "curso-aff",
        title: "Curso AFF",
        badge: "Escola",
        icon: GraduationCap,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771470433/Curso_AFF_Foto_1_jwmjre.png",
        col: 2,
        link: "/curso-aff-pro",
        tags: ["7 NÍVEIS", "CERTIFICADO", "TEÓRICO INCLUSO"],
        description: "Aprenda a voar sozinho. O método de formação de atletas mais rápido e seguro do mundo.",
        oldPrice: "1.990,00",
        price: "1.700,00",
        promoText: "Aproveite a promoção de inverno",
        promoBadge: "CONDIÇÃO ÚNICA"
    },
    {
        id: "salto-balao",
        title: "Voos e Saltos de Balão",
        badge: "Visual",
        icon: Cloud,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771470430/Salto_Bal%C3%A3o_1_u1amjp.png",
        col: 1,
        link: "/salto-balao",
        tags: ["AMANHECER", "EXCLUSIVO"],
        description: "Uma experiência mística. Saltando do balão com o visual incrível do nascer do sol."
    },
    {
        id: "tunel-vento",
        title: "Túnel de Vento",
        badge: "Técnica",
        icon: Wind,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771470429/Foto_Tunel_de_Vento_1_gn2b40.png",
        col: 2,
        link: "/tunel-de-vento",
        tags: ["INDOOR", "COACHING"],
        description: "Aperfeiçoe suas habilidades de voo no simulador de queda livre mais avançado do país."
    },
    {
        id: "wingsuit",
        title: "Wingsuit",
        badge: "Alta Performance",
        icon: Bird,
        image: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771470434/Wing_Suit_imagem_1_mhspao.png",
        col: 1,
        link: "/wingsuit-experience",
        tags: ["A partir da categoria B", "PRO", "MAX SPEED"],
        description: "A elite do voo humano. Sinta a incrível sustentação e controle do traje planador em alta velocidade."
    }
];

export default function Experiences() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [bookingExp, setBookingExp] = useState<string | null>(null);

    return (
        <section className="py-16 relative overflow-hidden bg-white" ref={ref}>
            {/* Background Effect - Lightweight */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                {/* Corner Gradients (Neon Accents) - Reduced blur */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_0%_0%,rgba(57,255,20,0.1)_0%,transparent_60%)] blur-[40px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_100%_100%,rgba(57,255,20,0.1)_0%,transparent_60%)] blur-[40px]" />

                {/* Static Flow Lines - No animation, pure SVG decoration */}
                <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="windGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(57,255,20,0)" />
                            <stop offset="50%" stopColor="rgba(57,255,20,0.3)" />
                            <stop offset="100%" stopColor="rgba(57,255,20,0)" />
                        </linearGradient>
                    </defs>
                    <path d="M-100,200 C400,100 800,800 1600,600" stroke="url(#windGradient)" fill="none" strokeWidth="2" />
                    <path d="M0,800 C300,700 600,200 1400,100" stroke="#101010" fill="none" strokeWidth="1" strokeDasharray="10 20" opacity="0.1" />
                </svg>

                {/* Hexagonal Honeycomb Pattern — textura sutil, não rouba atenção */}
                <div
                    className="absolute inset-0 opacity-[0.32]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='147' viewBox='0 0 28 49'%3E%3Cg fill='%234B5563' fill-opacity='0.55'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "84px 147px",
                        backgroundRepeat: "repeat",
                        maskImage:
                            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-[3px] w-12 bg-neon" />
                        <span className="text-zinc-900 font-black tracking-[0.25em] uppercase text-base drop-shadow-sm">EXPERIÊNCIAS</span>
                        <div className="h-[3px] w-12 bg-neon" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter transform -skew-x-6 leading-none text-black mb-6 relative z-10"
                    >
                        ESCOLHA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400 block mt-2">
                            SUA AVENTURA
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-zinc-500 font-bold max-w-xl mx-auto uppercase tracking-wider text-sm relative z-10"
                    >
                        Desde o primeiro salto até a alta performance profissional
                    </motion.p>
                </div>

                {/* Mobile: ordem personalizada (Salto Duplo → Curso AFF → restantes) */}
                <div className="md:hidden flex flex-col gap-24 max-w-6xl mx-auto">
                    {['salto-duplo', 'curso-aff', 'salto-balao', 'tunel-vento', 'wingsuit'].map((id, i) => {
                        const exp = experiences.find(e => e.id === id)!;
                        return (
                            <ExperienceCard key={exp.id} data={exp} index={i} isInView={isInView} onBooking={() => setBookingExp(exp.title)} />
                        );
                    })}
                </div>

                {/* Desktop: staggered grid de 2 colunas */}
                <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">

                    {/* Column 1 (Left) */}
                    <div className="flex flex-col gap-24 lg:gap-32">
                        {experiences.filter(e => e.col === 1).map((exp, i) => (
                            <ExperienceCard key={exp.id} data={exp} index={i} isInView={isInView} onBooking={() => setBookingExp(exp.title)} />
                        ))}
                    </div>

                    {/* Column 2 (Right) */}
                    <div className="flex flex-col gap-24 lg:gap-32 md:mt-[300px]">
                        {experiences.filter(e => e.col === 2).map((exp, i) => (
                            <ExperienceCard key={exp.id} data={exp} index={i + 2} isInView={isInView} onBooking={() => setBookingExp(exp.title)} />
                        ))}
                    </div>

                </div>
            </div>

            <BookingModal
                isOpen={!!bookingExp}
                onClose={() => setBookingExp(null)}
                experienceTitle={bookingExp || ""}
                source={`link-home-${experiences.find(e => e.title === bookingExp)?.id}`}
                formId={bookingExp ? `form-agendamento-home-${experiences.find(e => e.title === bookingExp)?.id}` : undefined}
            />
        </section>
    );
}

function ExperienceCard({ data, index, isInView, onBooking }: { data: any, index: number, isInView: boolean, onBooking: () => void }) {
    const { title, badge, icon: Icon, image, link, tags, description, oldPrice, price } = data;
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const isCentered = useInView(cardRef, { margin: "-30% 0px -30% 0px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-[600px] md:h-[750px] w-full rounded-[40px] overflow-hidden cursor-pointer bg-zinc-900 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3),0_15px_25px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.5),0_0_50px_rgba(57,255,20,0.15)] flex flex-col perspective-1000 transition-all duration-500 border border-white/5"
        >
            {/* Main Content Area */}
            <div className="relative w-full h-full overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                />

                {/* Badge (always on top) */}
                <div className="absolute top-8 right-8 z-40">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2"
                    >
                        <Icon size={14} className="text-neon" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                            {badge}
                        </span>
                    </motion.div>
                </div>

                {/* Initial Title Layer */}
                <motion.div
                    animate={{
                        opacity: (isHovered || isCentered) ? 0 : 1,
                        y: (isHovered || isCentered) ? -20 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="absolute bottom-12 left-10 z-20 pointer-events-none"
                >
                    <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] font-display">
                        {title}
                    </h3>
                </motion.div>

                {/* Dark Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-700 ${(isHovered || isCentered) ? 'opacity-0' : 'opacity-100'}`} />

                {/* Chumbo Info Panel (Slides up on hover or scroll) */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: (isHovered || isCentered) ? "0%" : "100%" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 bottom-0 bg-[#121212] z-30 px-5 py-4 md:px-10 md:py-10 flex flex-col gap-2.5 md:gap-6 h-1/2 md:h-auto shadow-[0_-20px_40px_rgba(0,0,0,0.4)] border-t border-white/5 overflow-hidden"
                >
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />

                    {/* ============ MOBILE LAYOUT (< md) — diagramação refinada ============ */}
                    <div className="md:hidden relative z-10 flex flex-col h-full gap-3.5">
                        {/* Title + Promo badge inline */}
                        <div className="flex items-start justify-between gap-2.5">
                            <h3 className="text-[26px] font-black italic uppercase tracking-tighter text-white font-display leading-[0.92] flex-1 min-w-0">
                                {title}
                            </h3>
                            {data.promoText && (
                                <span className="bg-gradient-to-br from-neon to-emerald-500 text-black text-[9px] font-black uppercase tracking-tight px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 leading-tight shadow-md shadow-neon/30 mt-1">
                                    {data.promoBadge}
                                </span>
                            )}
                        </div>

                        {/* Preço — De/Por agrupados como UM elemento contínuo */}
                        {price && (
                            <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black rounded-2xl px-4 py-3 border border-white/10 border-b-neon/40 overflow-hidden">
                                {/* glow accent */}
                                <div className="absolute -right-4 -top-4 w-20 h-20 bg-neon/10 rounded-full blur-2xl pointer-events-none" />

                                <div className="relative flex items-center gap-3">
                                    {/* DE - lado esquerdo */}
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.25em]">DE</span>
                                        <span className="text-[17px] font-black italic text-red-500/70 line-through tracking-tight whitespace-nowrap">
                                            R$ {oldPrice}
                                        </span>
                                    </div>

                                    {/* Conector visual */}
                                    <div className="flex items-center gap-1 shrink-0">
                                        <div className="w-3 h-px bg-neon/40" />
                                        <ArrowUpRight className="w-3 h-3 text-neon rotate-45" />
                                        <div className="w-3 h-px bg-neon/40" />
                                    </div>

                                    {/* POR - lado direito */}
                                    <div className="flex flex-col leading-tight items-end flex-1 min-w-0">
                                        <span className="text-[9px] font-black text-neon uppercase tracking-[0.25em]">POR APENAS</span>
                                        <span className="text-[26px] font-black italic text-neon leading-none tracking-tight whitespace-nowrap drop-shadow-[0_0_12px_rgba(57,255,20,0.35)]">
                                            R$ {price.split(',')[0]}<span className="text-[15px]">,{price.split(',')[1]}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Disclaimer da promoção - apenas Curso AFF */}
                                {data.id === "curso-aff" && (
                                    <p className="relative mt-1.5 pt-1.5 border-t border-white/5 text-[9px] font-bold text-zinc-500 tracking-tight leading-tight whitespace-nowrap">
                                        <span className="text-neon/70">*</span> Válido para Teórico + Nível 1
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tight ${
                                        tag === "A partir da categoria B"
                                            ? "bg-yellow-400 text-black border border-black/10"
                                            : "text-zinc-400 bg-white/5 border border-white/5"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Descrição — preenche espaço disponível */}
                        <p className={`text-zinc-400 text-[13px] leading-snug font-medium ${price ? "line-clamp-2" : "line-clamp-4"}`}>
                            {description}
                        </p>

                        {/* Botões — fixos no fundo */}
                        <div className="flex gap-2.5 mt-auto pt-1">
                            {data.id !== "curso-aff" && (
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onBooking();
                                    }}
                                    className="flex-1 bg-neon text-black font-black italic rounded-xl h-11 text-xs tracking-wider border-none hover:bg-neon-hover shadow-md shadow-neon/30 transition-all active:scale-95"
                                >
                                    AGENDAR <ArrowUpRight className="ml-1 size-3.5" />
                                </Button>
                            )}
                            {data.id !== "tunel-vento" && data.id !== "wingsuit" && (
                                <Link
                                    href={link}
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-1"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full h-11 border-2 border-neon text-neon font-black italic rounded-xl text-xs tracking-widest hover:bg-neon hover:text-black transition-all active:scale-95 bg-black"
                                    >
                                        SAIBA MAIS
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* ============ DESKTOP LAYOUT (md+) — layout rico original ============ */}
                    <div className="hidden md:flex md:flex-col md:gap-6 relative z-10 w-full">
                        {/* Header Row */}
                        <div className="flex items-start justify-between min-h-[70px] gap-4">
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white font-display leading-[1] mt-2">
                                        {title}
                                    </h3>

                                    {/* Pro Max Striking Tag */}
                                    {data.promoText && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0, rotate: -5 }}
                                            animate={isHovered ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                                delay: 0.3
                                            }}
                                            className="relative mt-2 group/promo flex flex-col items-center gap-2"
                                        >
                                            <div className="absolute -inset-2 bg-neon/15 blur-xl rounded-full opacity-0 group-hover/promo:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                            <div className="relative flex items-center gap-2 bg-gradient-to-br from-neon via-[#4dff2b] to-emerald-500 px-4 py-2 rounded-xl border border-white/30 shadow-[0_10px_30px_-5px_rgba(57,255,20,0.4)] transform -skew-x-6 hover:skew-x-0 transition-all duration-500 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/promo:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                                                <Zap size={14} className="text-black fill-black animate-pulse" />

                                                <div className="flex flex-col leading-tight">
                                                    <span className="text-[11px] font-black text-black uppercase tracking-tighter">
                                                        {data.promoBadge}
                                                    </span>
                                                    <span className="text-[7px] font-black text-black/60 uppercase tracking-[0.2em]">
                                                        TEMPORADA 2026
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <motion.span
                                                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 3 }}
                                                    className="text-[7px] font-black text-neon uppercase tracking-[0.4em] whitespace-nowrap drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
                                                >
                                                    TEMPO LIMITADO
                                                </motion.span>

                                                {data.id === "curso-aff" && (
                                                    <motion.span
                                                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
                                                        className="text-[6px] font-black text-white/50 uppercase tracking-[0.2em] whitespace-nowrap mt-1"
                                                    >
                                                        *PROMOÇÃO VÁLIDA PARA O NÍVEL 1 + TEÓRICO
                                                    </motion.span>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            {price && (
                                <div className="relative flex flex-col items-end justify-center transform group-hover:scale-[1.03] transition-all duration-700 origin-right mt-1">
                                    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-black pr-7 pl-8 py-5 rounded-[28px] transform -skew-x-6 border border-white/10 border-b-neon/30 border-r-neon/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_20px_rgba(57,255,20,0.1)] relative overflow-hidden group/price">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />

                                        <motion.div
                                            animate={{
                                                x: ["-150%", "250%"],
                                                rotate: [25, 25]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 3.5,
                                                ease: "easeInOut",
                                                repeatDelay: 1
                                            }}
                                            className="absolute top-[-50%] left-0 w-16 h-[200%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent flex-shrink-0 z-0"
                                        />

                                        <div className="flex flex-col items-end relative z-10 transform skew-x-6 gap-1.5">
                                            <div className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity">
                                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">
                                                    DE:
                                                </span>
                                                <span className="text-2xl md:text-3xl font-black italic text-red-500 line-through tracking-tighter flex items-baseline gap-0.5 drop-shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                                                    <span className="text-xs mr-0.5 font-bold">R$</span> {oldPrice}
                                                </span>
                                            </div>

                                            <div className="flex flex-col items-end leading-none">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="h-[1px] w-4 bg-neon/30" />
                                                    <span className="text-[9px] font-black text-neon tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">
                                                        POR APENAS
                                                    </span>
                                                </div>

                                                <span className="text-4xl font-black italic tracking-tighter text-white flex items-baseline gap-1.5 font-display">
                                                    <span className="text-[14px] text-zinc-400 font-bold opacity-80">R$</span>
                                                    <span className="text-[38px] md:text-[42px] leading-[0.8] text-neon drop-shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                                                        {price.split(',')[0]}
                                                    </span>
                                                    <span className="text-[20px] leading-[0.8] text-neon/80">
                                                        ,{price.split(',')[1]}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 right-0 w-12 h-12 bg-neon/5 rounded-bl-full border-b border-l border-white/5" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="h-[1px] w-full bg-white/5" />

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className={`text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tight ${
                                        tag === "A partir da categoria B"
                                            ? "bg-yellow-400 text-black border border-black/10 shadow-[0_0_15px_rgba(250,204,21,0.3)] animate-pulse"
                                            : "text-zinc-400 bg-white/5 border border-white/5 text-nowrap"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-zinc-400 text-[15px] leading-relaxed font-semibold">
                            {description}
                        </p>

                        <div className="flex gap-4 mt-auto pt-2">
                            {data.id !== "curso-aff" && (
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onBooking();
                                    }}
                                    className="flex-1 bg-neon text-black font-black italic rounded-xl h-14 text-sm tracking-wider border-none hover:bg-neon-hover shadow-lg shadow-neon/30 group/btn transition-all duration-300 active:scale-95 px-2"
                                >
                                    AGENDAR <ArrowUpRight className="ml-1 size-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </Button>
                            )}
                            {data.id !== "tunel-vento" && data.id !== "wingsuit" && (
                                <Link
                                    href={link}
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-1"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full h-14 border-2 border-neon text-neon font-black italic rounded-xl text-sm tracking-widest hover:bg-neon hover:text-black transition-all duration-300 active:scale-95 px-2 bg-black"
                                    >
                                        SAIBA MAIS
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

