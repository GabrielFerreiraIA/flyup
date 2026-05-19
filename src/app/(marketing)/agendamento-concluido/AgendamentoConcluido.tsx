"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";

const WA_NUMBER = "5515998282280";

function buildWaUrl(exp: string, wamsg?: string) {
    const msg = wamsg
        || `Olá! Acabei de preencher o formulário de interesse${exp ? ` para ${exp}` : ""} na Fly Up Paraquedismo. Gostaria de confirmar meu agendamento e saber mais detalhes!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function AgendamentoConcluido() {
    const params = useSearchParams();
    const exp = params.get("exp") || "";
    const wamsg = params.get("wamsg") || undefined;
    const waUrl = buildWaUrl(exp, wamsg);

    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Glow de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#39FF14]/8 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-60" />

            <div className="relative z-10 max-w-md w-full text-center">

                {/* Ícone de sucesso */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#39FF14] flex items-center justify-center shadow-[0_0_60px_rgba(57,255,20,0.4)]"
                >
                    <CheckCircle2 size={48} strokeWidth={3} className="text-black" />
                </motion.div>

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#39FF14] mb-3 opacity-80">
                        Solicitação Recebida
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none mb-3">
                        {exp ? (
                            <>
                                Pronto para<br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #39FF14" }}>
                                    {exp}!
                                </span>
                            </>
                        ) : (
                            <>
                                Agendamento<br />
                                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #39FF14" }}>
                                    Confirmado!
                                </span>
                            </>
                        )}
                    </h1>
                </motion.div>

                {/* Mensagem */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-zinc-400 text-sm leading-relaxed mt-4 mb-10 max-w-sm mx-auto"
                >
                    Nossa equipe já recebeu seu interesse e entrará em contato em breve.
                    Para agilizar, fale diretamente no WhatsApp agora mesmo.
                </motion.p>

                {/* CTA WhatsApp */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="space-y-3"
                >
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 w-full h-16 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-black italic uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] text-base overflow-hidden"
                    >
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                        <MessageCircle size={22} strokeWidth={2.5} className="relative z-10" />
                        <span className="relative z-10">Falar no WhatsApp agora</span>
                    </a>

                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                        Tempo médio de resposta: menos de 5 minutos
                    </p>
                </motion.div>

                {/* Número de telefone */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 flex items-center justify-center gap-2 text-zinc-600 text-xs"
                >
                    <Phone size={12} />
                    <span className="font-bold tracking-wider">+55 (15) 99828-2280</span>
                </motion.div>

                {/* Voltar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={14} />
                        Voltar ao site
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
