"use client";

import { motion } from "framer-motion";

const MarqueeItem = ({ text, speed = 40, reverse = false }: { text: string; speed?: number; reverse?: boolean }) => {
    const content = Array(10).fill(text).join(" • ");

    return (
        <motion.div
            animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
            transition={{ duration: speed, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap"
        >
            <span className="text-white text-lg md:text-2xl font-black italic uppercase tracking-tighter py-2">
                {content} • {content}
            </span>
        </motion.div>
    );
};

export default function PromoMarquee() {
    const promoText = "OPORTUNIDADE ÚNICA";

    return (
        <div className="relative w-full h-12 z-50 overflow-visible select-none pointer-events-none">
            {/* Container centralizador para as faixas */}
            <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Faixa de fundo embaçada (Rotacionada -1.5deg, Direita para Esquerda) */}
                <div 
                    className="absolute w-[120%] h-10 md:h-14 flex items-center shadow-[0_0_40px_rgba(221,128,194,0.15)] opacity-30 blur-[2px]"
                    style={{ 
                        transform: "rotate(-1.5deg) translateY(-4px)",
                        background: "linear-gradient(45deg, #DD80C2 0%, #FFD2F2 100%)"
                    }}
                >
                    <MarqueeItem text={promoText} speed={70} reverse={true} />
                </div>

                {/* Faixa da frente (Rotacionada 4.5deg, Esquerda para Direita) */}
                <div 
                    className="absolute w-[120%] h-10 md:h-14 flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10"
                    style={{ 
                        transform: "rotate(4.5deg) translateY(4px)",
                        background: "linear-gradient(45deg, #DD80C2 0%, #FFD2F2 100%)"
                    }}
                >
                    <MarqueeItem text={promoText} speed={60} reverse={false} />
                </div>

                {/* Ícone da Borboleta Brilhante */}
                <div className="absolute top-8 z-20 flex justify-center">
                    <img 
                        src="/borboleta-glow.png" 
                        alt="FlyUp Elite" 
                        className="w-16 md:w-20 h-auto drop-shadow-[0_0_25px_rgba(255,210,242,0.8)]"
                    />
                </div>
            </div>
        </div>
    );
}
