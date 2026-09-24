"use client";

import { motion } from "framer-motion";
import { ArrowDown, Star, MapPin } from "lucide-react";
import { useCameFromAd } from "@/hooks/use-came-from-ad";
import { WA_EDU, WA_MESSAGES, buildWaUrl } from "@/lib/whatsapp";

export default function AFFHero() {
    const cameFromAd = useCameFromAd();
    const waUrl = buildWaUrl(WA_EDU, cameFromAd ? WA_MESSAGES.aff.anuncio : WA_MESSAGES.aff.site);

    return (
        <section data-hero className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-black pt-28 pb-10 md:pt-32 md:pb-16">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/dn50urzkv/image/upload/f_auto,q_auto/v1771462569/Curso_AFF_Editada_16-9_lg5vuc"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 container mx-auto px-6 text-center"
            >
                <p className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-[#39FF14] mb-5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    Boituva · SP — alunos de todo o Brasil
                </p>

                <h1 className="font-black italic uppercase tracking-tighter leading-[0.92] text-white text-[clamp(2.1rem,10.5vw,2.6rem)] md:text-7xl lg:text-8xl mb-6">
                    <span className="block">Curso de</span>
                    <span className="block">
                        Paraquedismo <span className="text-[#39FF14]">AFF</span>
                    </span>
                </h1>

                <p className="text-base md:text-lg text-zinc-200 max-w-xl mx-auto mb-8 leading-relaxed">
                    Deixe de sonhar com o céu e aprenda a voar sozinho. Do primeiro salto à sua licença de
                    paraquedista, lado a lado com Edu Esteves, que já saltou mais de 13 mil vezes.
                </p>

                <div className="flex flex-col items-center gap-4 max-w-sm mx-auto">
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 flex items-center justify-center gap-2 bg-[#39FF14] hover:bg-[#32D911] text-black font-black italic uppercase tracking-wider text-sm rounded-xl shadow-[0_0_25px_rgba(57,255,20,0.35)] active:scale-[0.98] transition-all"
                    >
                        Falar com o instrutor no WhatsApp
                    </a>
                    <a
                        href="#o-que-e"
                        className="inline-flex items-center gap-1.5 min-h-11 px-4 text-sm font-bold text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600"
                    >
                        Conheça o curso
                        <ArrowDown className="w-4 h-4" />
                    </a>
                </div>

                <div data-clarity-unmask="true" className="mt-8 flex items-center justify-center gap-x-3 gap-y-1 flex-wrap text-xs font-bold uppercase tracking-wider text-zinc-400">
                    <span className="flex items-center gap-1 text-white">
                        <Star className="w-3.5 h-3.5 text-[#39FF14] fill-[#39FF14]" />
                        4.9
                    </span>
                    <span aria-hidden className="text-zinc-700">·</span>
                    <span>+1.850 alunos</span>
                    <span aria-hidden className="text-zinc-700">·</span>
                    <span>Desde 1992</span>
                </div>
            </motion.div>
        </section>
    );
}
