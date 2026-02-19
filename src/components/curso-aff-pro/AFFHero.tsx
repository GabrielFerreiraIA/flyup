"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const BookingModal = dynamic(() => import("@/components/BookingModal"), { ssr: false });

export default function AFFHero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image/Video placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771462569/Curso_AFF_Editada_16-9_lg5vuc"
                    alt="AFF Skydiving"
                    className="w-full h-full object-cover opacity-60"
                />

                {/* Dark overlay with pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                {/* Extra bottom vignette */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
                <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center transform translate-y-[-5%]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Top Badge */}
                    <div className="inline-block mb-8">
                        <div className="bg-black/80 backdrop-blur-md border border-[#39FF14]/30 rounded-full px-6 py-2 shadow-[0_0_20px_rgba(57,255,20,0.15)] flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                            <span className="text-[#39FF14] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                                Vagas Abertas: Turma Alpha
                            </span>
                        </div>
                    </div>

                    {/* Main Headline - PRO Course Focus */}
                    <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-8 text-white drop-shadow-2xl">
                        <div className="block mb-2 md:mb-4">
                            <span className="text-zinc-400 text-3xl md:text-5xl tracking-normal font-bold block mb-4 not-italic">
                                A Formação Definitiva
                            </span>
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #39FF14' }}>
                                Curso de
                            </span>
                        </div>
                        <div className="flex flex-col md:block items-center justify-center">
                            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                Paraquedismo
                            </span>
                        </div>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-md">
                        Método AFF: A tecnologia mais segura e rápida para você conquistar sua licença internacional e dominar os céus.
                    </p>

                    <div className="flex justify-center">
                        <Button
                            onClick={() => setIsBookingOpen(true)}
                            className="bg-[#39FF14] hover:bg-[#2ecc11] text-black font-black italic uppercase text-lg px-10 py-8 rounded-xl shadow-[0_0_40px_rgba(57,255,20,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(57,255,20,0.5)] transition-all duration-300 group"
                        >
                            Quero Me Tornar Um Paraquedista <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Footer Bar - Floating Style */}
            <div className="absolute bottom-8 left-0 w-full px-6 z-20">
                <div className="container mx-auto">
                    <div className="bg-black/40 backdrop-blur-md border-t border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                        {/* Left: Location */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Localização</span>
                            <div className="flex items-center gap-2 text-white text-lg font-black italic uppercase">
                                <MapPin className="w-5 h-5 text-[#39FF14]" />
                                Boituva, SP
                            </div>
                        </div>

                        {/* Center: Rating & Students */}
                        <div className="flex items-center gap-8 md:gap-16 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 px-8 w-full md:w-auto justify-center">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black italic text-white leading-none mb-1">4.9/5</div>
                                <div className="flex items-center justify-center gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-3 h-3 text-[#39FF14] fill-[#39FF14]" />
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black italic text-white leading-none mb-1">+1.5k</div>
                                <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Alunos Formados</div>
                            </div>
                        </div>

                        {/* Right: Next Class Status (Matching screenshot style) */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right min-w-[200px]">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Próxima Turma</span>
                            <div className="flex items-center gap-2 text-[#39FF14] text-lg font-black italic uppercase animate-pulse">
                                Inscrições Abertas
                                <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                experienceTitle="Vaga: Turma Alpha AFF"
            />
        </section >
    );
}
