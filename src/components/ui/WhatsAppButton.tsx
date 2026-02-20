"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber = "5511999999999", // Placeholder
    message = "Olá! Gostaria de saber mais sobre o curso AFF PRO.",
}) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] group"
                aria-label="Fale conosco no WhatsApp"
            >
                {/* Pulse Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
                />

                <MessageCircle size={32} fill="currentColor" strokeWidth={1.5} />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-xl">
                    Fale com um instrutor
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 border-r border-t border-white/10 rotate-45" />
                </div>
            </motion.a>
        </AnimatePresence>
    );
};

export default WhatsAppButton;
