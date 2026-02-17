"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import gsap from 'gsap';

const phrases = [
    {
        top: "VIVA A",
        bottom: "ADRENALINA"
    },
    {
        top: "LIFE IS",
        bottom: "ADVENTURE"
    }
];

export default function Hero() {
    const containerRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            // Animar linhas de texto
            tl.from(".hero-text-line", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
            }, "-=0.5");
            // Animar botões
            tl.from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            }, "-=0.5");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
                <iframe
                    src="https://player.vimeo.com/video/1162024697?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] object-cover opacity-60"
                    loading="lazy"
                    title="Flyup Background Video"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <h2 className="hero-text-line text-lg md:text-xl font-bold tracking-[0.5em] text-neon mb-4 uppercase">
                    Paraquedismo Profissional
                </h2>

                <div className="hero-text-line mb-8 min-h-[160px] md:min-h-[220px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ y: 20, opacity: 0, rotateX: -20 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ y: -20, opacity: 0, rotateX: 20 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] text-white block"
                        >
                            {phrases[index].top} <br />
                            <span className="text-stroke-neon text-transparent uppercase">
                                {phrases[index].bottom}
                            </span>
                        </motion.span>
                    </AnimatePresence>
                </div>

                <p className="hero-text-line text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light">
                    A maior autoridade em saltos duplos e cursos AFF.
                    <br className="hidden md:block" />
                    Sua experiência definitiva de liberdade começa aqui.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button className="hero-btn h-14 px-10 text-lg uppercase tracking-wide rounded-none font-bold italic" variant="default">
                        AGENDAR AGORA
                    </Button>
                    <Button className="hero-btn h-14 px-10 text-lg uppercase tracking-wide rounded-none font-bold italic" variant="neon">
                        NOSSAS EXPERIÊNCIAS
                    </Button>
                </div>
            </div>
        </section>
    );
}

