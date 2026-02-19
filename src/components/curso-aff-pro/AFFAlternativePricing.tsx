"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const options = [
    {
        title: "Curso Teórico",
        subtitle: "Ground School",
        priceInstallment: "230,00",
        installments: 3,
        priceCash: "600,00",
        description: "Imersão completa em aerodinâmica, equipamentos e segurança. O primeiro passo da sua jornada.",
        features: [
            "10h de aula teórica",
            "Material didático digital",
            "Exercícios de emergência",
            "Certificado de conclusão"
        ],
        highlight: false
    },
    {
        title: "Saltos Nível 1 ao 7",
        subtitle: "Por Salto Realizado",
        priceInstallment: "330,00",
        installments: 3,
        priceCash: "710,00",
        description: "Pague cada nível individualmente à medida que evolui. Liberdade total para gerenciar seu investimento.",
        features: [
            "Instrutores dedicados",
            "Todo equipamento incluso",
            "Macacão e capacete",
            "Debriefing com vídeo"
        ],
        highlight: true
    }
];

export default function AFFAlternativePricing() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                        Flexibilidade Total
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none mb-6">
                        Comece do{" "}
                        <span className="text-transparent" style={{ WebkitTextStroke: "1px #39FF14" }}>
                            Seu Jeito
                        </span>
                    </h2>
                    <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
                        Aqui você escolhe como fazer o curso. Se preferir, pode pagar por etapas: primeiro a teoria,
                        depois cada salto individualmente. Sem amarras.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {options.map((opt, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-3xl border ${opt.highlight ? 'border-[#39FF14]/30 bg-zinc-900/80 shadow-[0_0_40px_rgba(57,255,20,0.05)]' : 'border-zinc-800 bg-zinc-900/40'} group hover:border-[#39FF14]/50 transition-all duration-300`}
                        >
                            {/* Header */}
                            <div className="mb-6 pb-6 border-b border-zinc-800/80">
                                <h3 className="text-white font-black uppercase italic text-2xl tracking-wide mb-1">
                                    {opt.title}
                                </h3>
                                <p className="text-[#39FF14] text-xs font-bold uppercase tracking-widest opacity-80">
                                    {opt.subtitle}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-zinc-500 text-lg font-bold">{opt.installments}x</span>
                                    <span className="text-white font-black text-5xl tracking-tighter">
                                        R$ {opt.priceInstallment}
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-1.5 border border-zinc-700/50">
                                    <span className="text-zinc-400 text-xs uppercase font-bold tracking-wider">
                                        Ou R$ {opt.priceCash} à vista
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 min-h-[40px]">
                                {opt.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {opt.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <div className={`p-1 rounded-full ${opt.highlight ? 'bg-[#39FF14]/20 text-[#39FF14]' : 'bg-zinc-800 text-zinc-500 group-hover:text-[#39FF14] group-hover:bg-[#39FF14]/10'} transition-all`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            {/* Info note */}
                            {opt.highlight && (
                                <div className="flex gap-2 items-start mt-4 pt-4 border-t border-zinc-800/50">
                                    <Info className="w-4 h-4 text-zinc-500 mt-0.5" />
                                    <p className="text-[10px] text-zinc-500 leading-tight">
                                        Valores referentes a cada salto. O pagamento pode ser feito no dia do agendamento
                                        (Débito, Crédito ou Dinheiro).
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
