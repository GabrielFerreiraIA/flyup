"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ArrowRight, ShieldCheck } from "lucide-react";

interface ExitIntentPopupProps {
    onClaim: () => void;
}

const MIN_DWELL_MS = 8000;

function todayKey() {
    const d = new Date();
    return `flyup-exit-popup-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function msUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
}

function formatCountdown(ms: number) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const pad = (n: number) => String(n).padStart(2, "0");
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function ExitIntentPopup({ onClaim }: ExitIntentPopupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(() => msUntilMidnight());
    const armedRef = useRef(false);
    const triggeredRef = useRef(false);

    const trigger = () => {
        if (triggeredRef.current) return;
        triggeredRef.current = true;
        try {
            localStorage.setItem(todayKey(), "1");
        } catch {}
        setIsOpen(true);
    };

    // Recalcula o relógio de "expira à meia-noite" a cada segundo
    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(msUntilMidnight()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Arma os listeners de intenção de saída — só se ainda não visto hoje
    useEffect(() => {
        let alreadySeen = false;
        try {
            alreadySeen = !!localStorage.getItem(todayKey());
        } catch {}
        if (alreadySeen) return;

        const armTimer = setTimeout(() => {
            armedRef.current = true;
        }, MIN_DWELL_MS);

        // Desktop: mouse saindo pelo topo da janela (rumo à barra de endereço/aba)
        const handleMouseOut = (e: MouseEvent) => {
            if (!armedRef.current || triggeredRef.current) return;
            if (e.clientY <= 0 && !e.relatedTarget) trigger();
        };
        document.addEventListener("mouseout", handleMouseOut);

        // Mobile: intercepta o gesto/botão de voltar uma única vez
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        let handlePopState: (() => void) | null = null;
        if (isTouch) {
            window.history.pushState({ flyupExitGuard: true }, "");
            handlePopState = () => {
                if (armedRef.current && !triggeredRef.current) trigger();
            };
            window.addEventListener("popstate", handlePopState);
        }

        return () => {
            clearTimeout(armTimer);
            document.removeEventListener("mouseout", handleMouseOut);
            if (handlePopState) window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    const closePopup = () => setIsOpen(false);

    const handleClaim = () => {
        setIsOpen(false);
        onClaim();
    };

    const todayLabel = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 22, stiffness: 260 }}
                        className="relative w-full max-w-lg bg-zinc-950 border border-[#39FF14]/30 rounded-[40px] overflow-hidden shadow-[0_0_60px_rgba(57,255,20,0.25)]"
                    >
                        {/* Fundo decorativo */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14]/10 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#39FF14]/5 rounded-full blur-[60px]" />
                            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                        </div>

                        <div className="relative z-10 p-8 md:p-10 text-center">
                            <button
                                onClick={closePopup}
                                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={22} />
                            </button>

                            <motion.div
                                initial={{ rotate: -10, scale: 0.8 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", damping: 10 }}
                                className="w-16 h-16 bg-[#39FF14]/20 rounded-3xl flex items-center justify-center mx-auto mb-5 border border-[#39FF14]/20 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                            >
                                <Clock className="w-8 h-8 text-[#39FF14]" />
                            </motion.div>

                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                Válido somente hoje · {todayLabel}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-2 leading-[0.95]">
                                Espera! Não perca
                                <br />
                                <span className="text-[#39FF14]">esse preço</span>
                            </h3>

                            <p className="text-zinc-400 text-base md:text-lg font-medium mb-6 leading-snug">
                                O Salto Handycam por <span className="text-white font-bold">R$745</span> só fica
                                garantido se você agendar até a meia-noite de hoje. A partir de amanhã, o valor
                                volta para R$890.
                            </p>

                            <div className="flex items-center justify-center gap-6 mb-7 flex-wrap">
                                <div className="flex flex-col items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
                                        De / Por
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-lg font-black italic line-through text-red-500/70">
                                            R$890
                                        </span>
                                        <span className="text-4xl font-black italic text-white tracking-tighter">
                                            R$745
                                        </span>
                                    </div>
                                </div>
                                <div className="h-10 w-px bg-white/10 hidden md:block" />
                                <div className="flex flex-col items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">
                                        Expira em
                                    </span>
                                    <span className="text-3xl font-black italic tabular-nums text-[#39FF14] tracking-tighter">
                                        {formatCountdown(timeLeft)}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleClaim}
                                    className="group w-full inline-flex items-center justify-center gap-2 bg-[#39FF14] hover:bg-[#22cc0a] text-black font-black italic uppercase text-base md:text-lg py-4 md:py-5 rounded-2xl shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all"
                                >
                                    Garantir meu preço de hoje
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={closePopup}
                                    className="text-zinc-500 hover:text-zinc-300 text-xs font-bold uppercase tracking-widest transition-colors"
                                >
                                    Não, prefiro pagar R$890 depois
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 mt-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#39FF14]" />
                                Sem compromisso · Confirmação via WhatsApp
                            </div>
                        </div>

                        {/* Barra inferior animada */}
                        <div className="h-2 w-full bg-gradient-to-r from-[#39FF14] via-emerald-400 to-[#39FF14] relative">
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-1/4 h-full bg-white/40 blur-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
