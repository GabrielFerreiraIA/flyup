"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const VIDEOS = [
    { id: "XNotLwB8e0g", title: "Isso aconteceu durante o curso (PANE!)" },
    { id: "xtPI-w5GVgk", title: "Curso AFF - Nível 1 ao 7 Completo" },
    { id: "tjFRg35t2vM", title: "Eu tenho medo de altura! (E agora?)" },
    { id: "7rnH8ZstxMA", title: "Instrutor salva aluno no curso AFF" },
    { id: "SrP8eyp6so0", title: "A técnica perfeita do pouso suave" },
    { id: "LB5Ko7BzwLM", title: "Saltei aos 80 anos! (Inspiração)" },
];

function VideoCard({ id, title, index }: { id: string; title: string; index: number }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col gap-4 group ${index >= 3 ? "hidden md:flex" : ""}`}
        >
            <div 
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-black"
                onClick={() => !isPlaying && setIsPlaying(true)}
            >
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#39FF14]/30 transition-all duration-500 z-20 pointer-events-none" />

                {isPlaying ? (
                    <iframe
                        src={videoUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full relative z-10"
                    />
                ) : (
                    <>
                        <img
                            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                        
                        <div className="absolute inset-0 flex items-center justify-center z-30">
                            <div className="relative group/play">
                                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20 group-hover/play:opacity-40 transition-opacity duration-500 scale-150" />
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover/play:scale-110 transition-transform duration-500 ease-out shadow-2xl">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/play:bg-red-600 transition-colors duration-300">
                                        <Play className="w-3 h-3 md:w-4 md:h-4 fill-black text-black ml-0.5 group-hover/play:fill-white group-hover/play:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            
            {/* Video Title */}
            <h3 className="text-sm md:text-base font-black italic uppercase text-zinc-300 group-hover:text-[#39FF14] transition-colors tracking-tight leading-tight text-left pr-4">
                {title}
            </h3>
        </motion.div>
    );
}

export default function YoutubeChannel() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 bg-zinc-950 overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Dynamic Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(163,230,53,0.03),transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-30" />

            {/* Red Glow Behind Content - Cinematic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Header Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold uppercase tracking-[0.3em] text-[10px]">FLY UP TV</span>
                </motion.div>

                {/* Main Title - Premium Typography */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter font-display mb-12 leading-[0.85] max-w-6xl mx-auto drop-shadow-2xl"
                >
                    O MAIOR CANAL DE <br />
                    {/* Light Green Outline */}
                    <span className="text-transparent relative" style={{ WebkitTextStroke: '1px #39FF14' }}>
                        PARAQUEDISMO.
                        {/* Glow Layer */}
                        <span className="absolute inset-0 text-lime-400 opacity-20 blur-xl select-none mix-blend-screen" style={{ WebkitTextStroke: '0px' }}>PARAQUEDISMO.</span>
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-500 max-w-xl mx-auto mb-20 text-sm md:text-base font-light tracking-wide"
                >
                    Acompanhe as aventuras, aprenda com as dicas e sinta a <span className="text-white font-medium">vibe da nossa comunidade</span>.
                </motion.p>

                {/* VIDEO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {VIDEOS.map((video, index) => (
                        <VideoCard key={video.id} id={video.id} title={video.title} index={index} />
                    ))}
                </div>

                {/* Bottom CTA Button - Premium Glow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16"
                >
                    <a
                        href="https://www.youtube.com/@FlyUpParaquedismo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                        <div className="absolute inset-0 border border-zinc-700 rounded-full group-hover:border-white/50 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

                        <span className="relative z-10 flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.3em]">
                            Inscrever-se no Canal
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
