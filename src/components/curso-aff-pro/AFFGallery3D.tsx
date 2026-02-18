"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Skydiving images from Unsplash
const IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1529528994781-42095f9d1461?q=80&w=800&auto=format&fit=crop",
        label: "Queda Livre",
    },
    {
        src: "https://images.unsplash.com/photo-1625034676137-b4db46d97c75?q=80&w=800&auto=format&fit=crop",
        label: "Abertura do Paraquedas",
    },
    {
        src: "https://images.unsplash.com/photo-1475506631979-7271290aa6dd?q=80&w=800&auto=format&fit=crop",
        label: "Vista do Céu",
    },
    {
        src: "https://images.unsplash.com/photo-1510257366362-e6e22f300c1d?q=80&w=800&auto=format&fit=crop",
        label: "Pôr do Sol",
    },
    {
        src: "https://images.unsplash.com/photo-1594770879685-618498c0b296?q=80&w=800&auto=format&fit=crop",
        label: "Formação em Grupo",
    },
    {
        src: "https://images.unsplash.com/photo-1534976721665-381c62f2cc30?q=80&w=800&auto=format&fit=crop",
        label: "Túnel de Vento",
    },
    {
        src: "https://images.unsplash.com/photo-1521673461240-991eb9c9c71e?q=80&w=800&auto=format&fit=crop",
        label: "Instrução AFF",
    },
];

// Layout config — how many cards to show and their offsets
const VISIBLE = 5; // must be odd
const CENTER = Math.floor(VISIBLE / 2);

function getCardStyle(offset: number) {
    // offset: -2, -1, 0, 1, 2
    const absOff = Math.abs(offset);
    const sign = offset < 0 ? -1 : offset > 0 ? 1 : 0;

    const translateX = sign * (absOff === 1 ? 220 : 400);
    const translateZ = absOff === 0 ? 0 : absOff === 1 ? -80 : -200;
    const rotateY = sign * (absOff === 1 ? 28 : 45);
    const scale = absOff === 0 ? 1 : absOff === 1 ? 0.82 : 0.65;
    const opacity = absOff === 0 ? 1 : absOff === 1 ? 0.75 : 0.45;
    const zIndex = VISIBLE - absOff;

    return { translateX, translateZ, rotateY, scale, opacity, zIndex };
}

export default function AFFGallery3D() {
    const [center, setCenter] = useState(0);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const n = IMAGES.length;

    const mod = (x: number) => ((x % n) + n) % n;

    const next = () => setCenter((c) => mod(c + 1));
    const prev = () => setCenter((c) => mod(c - 1));

    // Auto-rotate
    useEffect(() => {
        autoRef.current = setInterval(next, 3200);
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, []);

    const pause = () => { if (autoRef.current) clearInterval(autoRef.current); };
    const resume = () => { autoRef.current = setInterval(next, 3200); };

    // Build visible indices
    const indices = Array.from({ length: VISIBLE }, (_, i) =>
        mod(center + i - CENTER)
    );

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ background: "#ffffff" }}
            id="galeria"
        >
            {/* Green grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(57,255,20,0.07) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(57,255,20,0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />
            {/* Radial vignette to fade grid at edges */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(255,255,255,0.95) 100%)",
                }}
            />

            {/* Header */}
            <div className="relative z-10 text-center mb-16 px-6">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400 mb-4 border border-zinc-200 rounded-full px-4 py-1.5">
                    Lifestyle
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase text-zinc-900 leading-none">
                    Veja na{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-500">
                        Prática
                    </span>
                </h2>
                <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
                    Arraste ou clique nas setas para explorar o universo do paraquedismo.
                </p>
            </div>

            {/* Carousel */}
            <div
                className="relative z-10 flex items-center justify-center"
                style={{ height: 420, perspective: "1200px" }}
                onMouseEnter={pause}
                onMouseLeave={resume}
            >
                <div
                    className="relative w-full flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d", height: "100%" }}
                >
                    {indices.map((imgIdx, slotIdx) => {
                        const offset = slotIdx - CENTER;
                        const style = getCardStyle(offset);
                        const img = IMAGES[imgIdx];
                        const isCenter = offset === 0;

                        return (
                            <motion.div
                                key={imgIdx}
                                animate={{
                                    x: style.translateX,
                                    z: style.translateZ,
                                    rotateY: style.rotateY,
                                    scale: style.scale,
                                    opacity: style.opacity,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 28,
                                    mass: 0.8,
                                }}
                                style={{
                                    position: "absolute",
                                    zIndex: style.zIndex,
                                    transformStyle: "preserve-3d",
                                    cursor: isCenter ? "zoom-in" : "pointer",
                                }}
                                onClick={() => {
                                    if (isCenter) {
                                        setLightboxImg(img.src);
                                    } else {
                                        setCenter(imgIdx);
                                    }
                                }}
                            >
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                                    style={{
                                        width: 260,
                                        height: 340,
                                        boxShadow: isCenter
                                            ? "0 30px 80px rgba(0,0,0,0.25), 0 0 0 2px rgba(57,255,20,0.4)"
                                            : "0 15px 40px rgba(0,0,0,0.15)",
                                    }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.label}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                    {/* Label on center card */}
                                    {isCenter && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <p className="text-white font-black uppercase text-sm tracking-wide">
                                                {img.label}
                                            </p>
                                        </div>
                                    )}
                                    {/* Hover overlay for side cards */}
                                    {!isCenter && (
                                        <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation dots */}
            <div className="relative z-10 flex items-center justify-center gap-2 mt-10">
                <button
                    onClick={() => { pause(); prev(); resume(); }}
                    className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors text-sm font-bold"
                >
                    ←
                </button>
                {IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { pause(); setCenter(i); resume(); }}
                        className="transition-all duration-300"
                        style={{
                            width: center === i ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            background: center === i ? "#39FF14" : "#d4d4d8",
                        }}
                    />
                ))}
                <button
                    onClick={() => { pause(); next(); resume(); }}
                    className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors text-sm font-bold"
                >
                    →
                </button>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.img
                            src={lightboxImg}
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="max-w-3xl max-h-[85vh] w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
