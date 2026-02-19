"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// ==========================================
// TYPES & DATA
// ==========================================

export interface TestimonialData {
    id: string;
    src: string;
    name: string;
    role: string;
    text: string;
    highlight: string;
}

const TESTIMONIALS_SOURCE: TestimonialData[] = [
    {
        id: "t1",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471459/Depoimento_1_1_xzeqnf.png",
        name: "Thiago Silva",
        role: "Aluno AFF",
        text: "A Escola de paraquedismo Fly UP é simplesmente incrível! Desde a recepção até cada etapa do atendimento, tudo é feito com profissionalismo e paixão. Meus instrutores — Edu Esteves, Vitinho e Silvestre — são excepcionais: atenciosos, técnicos e inspiradores.",
        highlight: "profissionalismo e paixão",
    },
    {
        id: "t2",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471456/Depoimento_2_1_elupzt.png",
        name: "Paloma Santos",
        role: "Salto Duplo",
        text: "Foi tudo incrível, desde o atendimento virtual até o presencial, Fly Up fez meu aniversário chegar a um limite literalmente alto! Amei de paixão e claro levei meu irmão e meu enteado na loucura também. Valeu cada segundo!",
        highlight: "limite literalmente alto",
    },
    {
        id: "t3",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471455/Depoimento_3_1_q0tco5.png",
        name: "Felipe Calhau",
        role: "Aluno AFFpro",
        text: "Muito bom poder fazer e concluir o curso AFFpro, sem dúvidas uma ótima escolha para iniciar no esporte e evoluir. Sou grato por ter iniciado e feito o meu primeiro salto no dia da inauguração da FlyUp.",
        highlight: "iniciar no esporte e evoluir",
    },
    {
        id: "t4",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471457/Depoimento_Danilo_Nielson_1_ooyte9.png",
        name: "Danilo Nielson",
        role: "Aluno AFF",
        text: "Fui muito bem treinado por esse mestre, que me ensinou tudo detalhadamente e me deu tranquilidade e confiança. Quando cheguei no momento do salto estava tão tranquilo e treinado que meu salto foi muito bom!",
        highlight: "tranquilidade e confiança",
    },
    {
        id: "t5",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471453/Depoimento_4_1_ut5h3i.png",
        name: "Ricardo Professor",
        role: "Salto Duplo",
        text: "Uma experiência incrível, curti tudo. Atendimento de primeira e uma vibe surreal. Recomendo muito!",
        highlight: "Atendimento de primeira",
    },
    {
        id: "t6",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471452/Depoimento_5_1_yvwmnc.png",
        name: "Leandro Soares",
        role: "Atleta",
        text: "Conheci a Fly Up e o Edu, e desde então minha vida mudou, hoje sou paraquedista e cada novo salto é uma experiência de prazer e aprendizado. Hoje me sinto realizado com o esporte que escolhi para viver!",
        highlight: "minha vida mudou",
    },
    {
        id: "t7",
        src: "https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771471452/Depoimento_6_1_jtfu27.png",
        name: "Just Paulinha",
        role: "Aluna",
        text: "O Edu é um excelente instrutor. Me senti acolhida e segura o tempo todo, nas aulas teóricas e práticas. Ele é muito experiente e competência incrível! Guardo todos os ensinamentos e toda a energia boa!",
        highlight: "acolhida e segura",
    },
];

// Generate a larger dataset for the bubble grid by repeating
const TESTIMONIALS = [
    ...TESTIMONIALS_SOURCE,
    ...TESTIMONIALS_SOURCE.map(t => ({ ...t, id: t.id + "_dup1" })),
    ...TESTIMONIALS_SOURCE.slice(0, 4).map(t => ({ ...t, id: t.id + "_dup2" }))
];

// ==========================================
// GRID LAYOUT - DENSE BUBBLE STYLE
// ==========================================

const GRID_POSITIONS = [
    // Row 1 - Top
    { x: 35, y: 8, size: 95 },
    { x: 50, y: 5, size: 110 },
    { x: 65, y: 8, size: 95 },

    // Row 2
    { x: 28, y: 20, size: 100 },
    { x: 42, y: 18, size: 115 },
    { x: 58, y: 18, size: 115 },
    { x: 72, y: 20, size: 100 },

    // Row 3
    { x: 22, y: 33, size: 95 },
    { x: 35, y: 31, size: 110 },
    { x: 50, y: 30, size: 130 }, // Center highlight
    { x: 65, y: 31, size: 110 },
    { x: 78, y: 33, size: 95 },

    // Row 4
    { x: 28, y: 46, size: 105 },
    { x: 42, y: 44, size: 120 },
    { x: 58, y: 44, size: 120 },
    { x: 72, y: 46, size: 105 },

    // Row 5
    { x: 65, y: 58, size: 115 },
    { x: 35, y: 58, size: 115 },
    { x: 50, y: 57, size: 135 }, // Center big
    { x: 65, y: 58, size: 115 },
    { x: 78, y: 60, size: 95 },

    // Row 6
    { x: 28, y: 73, size: 100 },
    { x: 42, y: 71, size: 110 },
    { x: 58, y: 71, size: 110 },
    { x: 72, y: 73, size: 100 },

    // Row 7 - Bottom
    { x: 35, y: 86, size: 95 },
    { x: 50, y: 84, size: 105 },
];

export default function Testimonials() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const activeTestimonials = TESTIMONIALS.slice(0, GRID_POSITIONS.length);

    return (
        <section className="relative py-32 bg-white overflow-hidden min-h-[1100px] flex flex-col items-center justify-center">

            {/* Smooth Curve Transitions - Organic Inverted */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 z-10 pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        fill="#09090b"
                        fillOpacity="1"
                        d="M0,0L1440,0L1440,100Q720,280 0,100Z"
                    />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-10 pointer-events-none rotate-180">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        fill="#09090b"
                        fillOpacity="1"
                        d="M0,0L1440,0L1440,100Q720,280 0,100Z"
                    />
                </svg>
            </div>

            {/* Background Pattern - Subtle Hexagonal Grid */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexpattern" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                            <path
                                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                                fill="none"
                                stroke="#39FF14"
                                strokeWidth="1"
                                opacity="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexpattern)" />
                </svg>
            </div>

            {/* Floating Accent Glows - Static, no animate-pulse */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-neon/[0.015] rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col items-center mb-12">
                {/* TOP BADGE */}
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-50 border border-neon/20 mb-10 group overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon/5 via-neon/10 to-neon/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon shadow-[0_0_8px_rgba(57,255,20,0.6)]"></span>
                    </span>
                    <span className="text-xs font-black text-zinc-700 uppercase tracking-[0.25em] relative z-10">
                        COMUNIDADE FLYUP
                    </span>
                </div>

                {/* MAIN HEADLINE */}
                <div className="text-center max-w-5xl mx-auto leading-[0.85] mb-4">
                    <h2 className="block text-6xl md:text-8xl font-black text-zinc-900 uppercase tracking-tighter font-display mb-3">
                        QUEM JÁ
                    </h2>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-transparent relative">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">
                            VOOU COM A GENTE.
                        </span>
                    </h2>
                </div>
            </div>

            {/* GRID SECTION - Dense Bubble Formation */}
            <div className="relative w-full max-w-[900px] h-[900px] mx-auto z-20">
                {activeTestimonials.map((item, index) => {
                    const pos = GRID_POSITIONS[index] || { x: 50, y: 50, size: 0 };
                    const isHovered = hoveredId === item.id;
                    const isOthersHovered = hoveredId !== null && !isHovered;

                    return (
                        <motion.div
                            key={item.id}
                            className="absolute transform-gpu"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                                zIndex: isHovered ? 100 : 10,
                                width: isHovered ? "360px" : `${pos.size}px`,
                                height: isHovered ? "auto" : `${pos.size}px`,
                                x: "-50%",
                                y: "-50%",
                            }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <motion.div
                                layout
                                className={`
                                    relative w-full overflow-hidden transition-all duration-300
                                    ${isHovered
                                        ? "rounded-xl p-6 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-[100]"
                                        : "rounded-full h-full bg-white shadow-xl border-2 border-zinc-50 hover:border-neon/50 hover:shadow-neon/20 group cursor-pointer"
                                    }
                                `}
                                animate={{
                                    scale: isOthersHovered ? 0.9 : 1,
                                    opacity: isOthersHovered ? 0.3 : 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    layout: { type: "spring", stiffness: 260, damping: 28, mass: 0.8 }
                                }}
                            >
                                {/* Active Card Gradient Border Effect */}
                                {isHovered && (
                                    <>
                                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                                    </>
                                )}

                                <div className={`flex items-center gap-4 ${isHovered ? "mb-5" : "w-full h-full justify-center"}`}>
                                    <div className={`relative overflow-hidden rounded-full border-2 border-white/10 shrink-0 shadow-inner ${isHovered ? "w-16 h-16 ring-4 ring-neon/10" : "w-full h-full"}`}>
                                        <motion.img
                                            animate={{ scale: isHovered ? 1.05 : 1 }}
                                            src={item.src}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-all duration-500"
                                        />
                                    </div>

                                    {isHovered && (
                                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
                                            <span className="font-black text-white leading-tight uppercase font-display text-sm tracking-wide">
                                                {item.name}
                                            </span>
                                            <span className="text-neon text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5">
                                                {item.role}
                                            </span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Testimonial Text with Highlight */}
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Quote className="w-6 h-6 text-neon mb-3 fill-neon/10 opacity-100" />
                                        <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                                            "
                                            {item.text.split(item.highlight).map((part, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && (
                                                        <span className="bg-neon text-black px-1.5 py-0.5 font-bold mx-0.5 rounded-sm">
                                                            {item.highlight}
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                            "
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
