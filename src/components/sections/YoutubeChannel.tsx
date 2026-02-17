"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

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
            className="relative py-24 bg-zinc-950 overflow-hidden flex flex-col items-center justify-center min-h-[900px]"
        >
            {/* Dynamic Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(163,230,53,0.03),transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-30" />

            {/* Red Glow Behind Video - Cinematic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10 text-center">

                {/* Header Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold uppercase tracking-[0.3em] text-[10px]">FLYUP TV</span>
                </motion.div>

                {/* Main Title - Premium Typography */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter font-display mb-12 leading-[0.85] max-w-6xl mx-auto drop-shadow-2xl"
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
                    className="text-zinc-500 max-w-xl mx-auto mb-16 text-sm md:text-base font-light tracking-wide"
                >
                    Acompanhe as aventuras, aprenda com as dicas e sinta a <span className="text-white font-medium">vibe da nossa comunidade</span>.
                </motion.p>

                {/* VIDEO PLAYER CONTAINER - 10x Better UI */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative w-full max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black border border-white/10 group cursor-pointer"
                >
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500 z-20 pointer-events-none" />

                    {/* Thumbnail Image */}
                    <img
                        src="https://imgur.com/9qvTweh.png"
                        alt="Salto de Avião a 15k Pés - Flyup TV"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    />

                    {/* Cinematic Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Play Button (Center) - Magnetic & Glass */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="relative group/play">
                            <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20 group-hover/play:opacity-40 transition-opacity duration-500 scale-150" />
                            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover/play:scale-110 transition-transform duration-500 ease-out shadow-2xl">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/play:bg-red-600 transition-colors duration-300">
                                    <Play className="w-6 h-6 fill-black text-black ml-1 group-hover/play:fill-white group-hover/play:text-white transition-colors duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Info Overlay (Bottom Left) - Glassmorph */}
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg text-left z-30">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col gap-4"
                        >
                            <span className="inline-flex self-start px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg shadow-red-900/50">
                                Estreia
                            </span>
                            <div>
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic font-display mb-2 drop-shadow-lg leading-none">
                                    SALTO DE AVIÃO <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">A 15K PÉS</span> ✈️
                                </h3>
                                <div className="h-1 w-20 bg-red-600 mt-4 rounded-full" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech details (Top Right) */}
                    <div className="absolute top-8 right-8 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono text-white rounded border border-white/10">4K ULTRA HD</span>
                        <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono text-white rounded border border-white/10">60 FPS</span>
                    </div>
                </motion.div>

                {/* Bottom CTA Button - Premium Glow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16"
                >
                    <button className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 border border-zinc-700 rounded-full group-hover:border-white/50 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

                        <span className="relative z-10 flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.3em]">
                            Inscrever-se no Canal
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </span>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
