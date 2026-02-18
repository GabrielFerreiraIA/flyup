"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        quote: '"Achei minha segunda família"',
        name: "Mariana Costa",
        role: "Designer, 28 anos",
        description:
            "Mariana conta como o medo de altura se transformou na melhor experiência da vida dela e como a comunidade Flyup a acolheu.",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCiwqWw6H0lPT-jJu3_MOSpqS1orzylMxsPvHaqg8C09pXHssguXNTPoujexqdzkfAaXv3BlwXqQOSuKOmXeddLRfeMId-CxiiquS6p4RS1PcdyP63vuNsYNA_C63B-1B2yxgvfWFYQ5UP1a35-gTQ33pKISFnzKZn5XOZPBLR1eRy6m2-s54KaYHMSakad_rx2eD5kKwhfzJkBgr7G6u1OKISCtWBzGuiBfoVGvMHpwrxc3DqeV7WTPvXSRt4lJmigVj8YpvaXV3k",
        videoUrl: "#",
        tag: "Superação",
        tagColor: "bg-[#39FF14] text-black",
    },
    {
        id: 2,
        quote: '"Do escritório para o céu"',
        name: "Pedro Alves",
        role: "Analista de Sistemas, 34 anos",
        description:
            "Pedro explica como o paraquedismo se tornou sua válvula de escape e terapia semanal, transformando sua rotina completamente.",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAfbOgxPAw3-g4_r8t4V-QjOwMnCabWoAs5mE0SZCfSs1Oq_x8W76uuzjrqLsKuL0owAurlfijlofJT4eHhUuwWC5tG2AIg5JR8o8dxMwAC3OeF_urldRzoeBPGXTZGaEdvW9S2Dja-58a5llBxuSPEB96PMonODbRtDCcD7AWhWOI70H8INAK9pGyHWFlNYtrST-I-dYUwRARfso0CJLnFqxRAgRyuWku_Y4M_C7Y0VLhLaeNE3tR84N0czC2mjE1O8bsHepNMOkc",
        videoUrl: "#",
        tag: "Transformação",
        tagColor: "bg-black text-white",
    },
];

export default function AFFTestimonialVideos() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="historias">
            {/* Subtle green blob */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#39FF14] font-black uppercase tracking-[0.3em] text-sm mb-3 block">
                        Depoimentos Reais
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black italic uppercase text-black leading-none">
                        Histórias de quem{" "}
                        <span className="text-[#39FF14]" style={{ WebkitTextStroke: "1px #39FF14", color: "#39FF14" }}>
                            já saltou
                        </span>
                    </h2>
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredId(t.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Video Thumbnail */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl mb-5 border border-zinc-200 group-hover:border-[#39FF14]/50 transition-all duration-300">
                                <img
                                    src={t.thumbnail}
                                    alt={t.quote}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${t.tagColor}`}>
                                        {t.tag}
                                    </span>
                                </div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: hoveredId === t.id ? 1.15 : 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-20 h-20 bg-[#39FF14] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(57,255,20,0.6)]"
                                    >
                                        <Play className="w-8 h-8 text-black fill-black ml-1" />
                                    </motion.div>
                                </div>

                                {/* Quote at bottom */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-black italic uppercase text-lg leading-tight drop-shadow-lg">
                                        {t.quote}
                                    </p>
                                </div>
                            </div>

                            {/* Card Info */}
                            <div className="px-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-[#39FF14] font-black text-sm">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-black font-black text-sm uppercase tracking-wide">{t.name}</p>
                                        <p className="text-zinc-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-zinc-600 text-sm leading-relaxed">{t.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA nudge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <p className="text-zinc-400 text-sm uppercase tracking-widest font-bold">
                        +1.500 histórias como essas esperando por você
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
