"use client";

import { motion } from "framer-motion";
import {
    ArrowRight, CheckCircle2, ChevronDown, Clock, MapPin, Shield, Zap,
    Cloud, Sunrise, Bird, Camera, Wind, Trophy, Users, Award,
    AlertTriangle, PlayCircle, Mountain, BookOpen, Skull, BadgeCheck,
    GraduationCap, Star, Plane, Activity, Gauge, type LucideIcon
} from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const BookingModal = dynamic(() => import("@/components/BookingModal"), { ssr: false });

const iconMap: Record<string, LucideIcon> = {
    CheckCircle2, Clock, MapPin, Shield, Zap, Cloud, Sunrise, Bird, Camera,
    Wind, Trophy, Users, Award, AlertTriangle, PlayCircle, Mountain,
    BookOpen, Skull, BadgeCheck, GraduationCap, Star, Plane, Activity, Gauge,
};

interface FAQItem {
    question: string;
    answer: string;
}

interface PricingItem {
    title: string;
    titleClassName?: string;
    price: string | React.ReactNode;
    priceSubtext?: string | null;
    priceClassName?: string;
    features: string[];
    highlight?: boolean;
    image?: string;
}

interface SpecialConditionItem {
    title: string;
    description: string;
    icon?: string;
}

interface StepItem {
    title: string;
    description: string;
    icon?: string;
    image?: string;
}

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    steps: StepItem[];
    galleryImages: string[];
    pricingOptions: PricingItem[];
    faqs: FAQItem[];
    specialConditions?: SpecialConditionItem[];
    ctaText?: string;
    sourceId?: string; // ID for webhook tracking
    pricingTitle?: string;
    renderBelowSteps?: React.ReactNode;
    webhookTitle?: string;
}

export default function ServicePageLayout({
    title,
    subtitle,
    heroImage,
    overview,
    steps,
    galleryImages,
    pricingOptions,
    faqs,
    specialConditions,
    ctaText = "Agendar Agora",
    sourceId = "geral", // Previne undefined
    pricingTitle = "Investimento",
    renderBelowSteps,
    webhookTitle
}: ServicePageLayoutProps) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

    return (
        <div className="bg-black min-h-screen font-sans selection:bg-neon selection:text-black" suppressHydrationWarning>
            {/* HERO SECTION (DARK) */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-4 text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-zinc-300 max-w-2xl mx-auto mb-10 tracking-wide">
                            {subtitle}
                        </p>
                        <Button
                            onClick={() => setIsBookingOpen(true)}
                            className="bg-neon hover:bg-neon-hover text-black font-black italic uppercase text-lg px-10 py-8 rounded-2xl shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105 transition-all"
                        >
                            {ctaText} <ArrowRight className="ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* OVERVIEW & STEPS SECTION (LIGHT branded) */}
            <section className="py-24 bg-zinc-50 relative overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[#39FF14]/10 rounded-full blur-[120px] mix-blend-multiply" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-[100px] mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6 text-black relative inline-block">
                            A Experiência
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#00cc00]/40 -skew-x-12" />
                        </h2>
                        <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                            {overview}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white border border-zinc-300 rounded-3xl p-8 hover:border-[#00cc00] hover:shadow-[0_10px_40px_-10px_rgba(0,180,0,0.2)] transition-all duration-300 group flex flex-col h-full relative"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center group-hover:bg-black transition-all duration-300 shadow-md shadow-zinc-300 border border-zinc-800">
                                        {(() => {
                                            const IconComponent = step.icon ? iconMap[step.icon] : null;
                                            return IconComponent
                                                ? <IconComponent className="text-[#39FF14] w-8 h-8 transition-colors" />
                                                : <div className="w-2 h-2 bg-[#39FF14] rounded-full" />;
                                        })()}
                                    </div>
                                    <span className="text-4xl font-black italic text-zinc-200 group-hover:text-[#39FF14]/20 transition-colors">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black italic uppercase mb-3 text-black group-hover:text-[#008800] transition-colors">{step.title}</h3>
                                <p className="text-zinc-700 font-medium text-sm leading-relaxed flex-grow">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {renderBelowSteps && (
                        <div className="mt-20">
                            {renderBelowSteps}
                        </div>
                    )}
                </div>
            </section>
            {/* PRICING SECTION (DARK) */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center">
                        {pricingTitle}
                    </h2>
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${pricingOptions.length === 5 ? 'lg:grid-cols-5' : pricingOptions.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
                        {pricingOptions.map((option, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className={`w-full rounded-3xl flex flex-col relative group ${option.highlight ? 'bg-zinc-900 border-2 border-[#39FF14] shadow-[0_0_50px_rgba(57,255,20,0.15)]' : 'bg-zinc-900/40 border border-white/10'}`}
                            >
                                {option.image && (
                                    <div className="w-full h-72 relative flex items-center justify-center p-4 overflow-hidden rounded-t-3xl bg-gradient-to-b from-white/5 to-transparent">
                                        <img 
                                            src={option.image} 
                                            alt={option.title}
                                            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(57,255,20,0.3)] group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        {/* Subtle glow behind image */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </div>
                                )}
                                {option.highlight && (
                                    <div className="absolute top-4 right-4 bg-[#39FF14] text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-lg shadow-[#39FF14]/20 z-20">
                                        Mais Popular
                                    </div>
                                )}
                                <div className="px-8 pb-8 pt-2">
                                    <h3 className={`font-black italic uppercase mb-2 ${option.titleClassName || (pricingOptions.length === 5 ? 'text-lg lg:text-base xl:text-lg' : 'text-2xl')}`}>{option.title}</h3>
                                    <div className={`font-black text-white mb-6 tracking-tight ${option.priceClassName || (pricingOptions.length === 5 ? 'text-2xl lg:text-xl xl:text-2xl' : 'text-4xl')}`}>
                                        {option.price}
                                        {option.priceSubtext !== null && (
                                            <span className={`font-bold text-zinc-500 ml-2 tracking-normal align-middle ${pricingOptions.length === 5 ? 'text-xs' : 'text-sm'}`}>
                                                {option.priceSubtext || '/ pessoa'}
                                            </span>
                                        )}
                                    </div>
                                    <ul className="flex-1 space-y-4 mb-8">
                                        {option.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#39FF14] shrink-0" />
                                                <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={() => setIsBookingOpen(true)}
                                        className={`w-full py-6 font-black italic uppercase rounded-xl ${option.highlight ? 'bg-[#39FF14] text-black hover:bg-[#32e010] shadow-lg shadow-[#39FF14]/20' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                    >
                                        Reservar Vaga
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPECIAL CONDITIONS SECTION (LIGHT branded) */}
            {specialConditions && specialConditions.length > 0 && (
                <section className="py-24 bg-white border-y border-zinc-300 relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]"
                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#00cc00]/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-[#008800] font-black tracking-widest uppercase text-sm mb-2 block bg-[#39FF14]/20 inline-block px-3 py-1 rounded-full">Exclusividade Fly Up</span>
                            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-black">
                                Condições Especiais
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {specialConditions.map((condition, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-zinc-50 border border-zinc-300 p-8 rounded-3xl hover:bg-white hover:border-[#00cc00]/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00cc00]/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:scale-150 group-hover:bg-[#00cc00]/20" />

                                    <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center mb-6 px-3 shadow-md group-hover:scale-110 transition-transform relative z-10">
                                        {(() => {
                                            const IconComponent = condition.icon ? iconMap[condition.icon] : null;
                                            return IconComponent
                                                ? <IconComponent className="w-7 h-7 text-[#39FF14] transition-colors" />
                                                : <div className="w-2 h-2 bg-neon rounded-full" />;
                                        })()}
                                    </div>
                                    <h3 className="text-xl font-black italic uppercase mb-3 text-black relative z-10 group-hover:text-[#008800] transition-colors">{condition.title}</h3>
                                    <p className="text-zinc-700 text-sm leading-relaxed relative z-10">
                                        {condition.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* GALLERY SECTION (DARK - CAROUSEL PRO MAX) */}
            <section className="py-16 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50" />
                {/* Background Decor */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-end justify-between mb-10">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-2"
                            >
                                <div className="h-[2px] w-6 bg-neon" />
                                <span className="text-neon font-black tracking-[0.3em] uppercase text-[10px]">VISUAL EXPERIENCE</span>
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
                                Galeria <span className="text-transparent" style={{ WebkitTextStroke: '1px #39FF14' }}>Exclusiva</span>
                            </h2>
                        </div>
                        
                        {/* Custom Navigation indicators (purely visual/feedback) */}
                        <div className="hidden md:flex gap-2 mb-2">
                             <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mr-2 flex items-center">Arraste para explorar</div>
                             <div className="w-10 h-0.5 bg-neon/20 rounded-full relative overflow-hidden">
                                 <motion.div 
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    className="absolute inset-0 bg-neon w-1/3" 
                                 />
                             </div>
                        </div>
                    </div>

                    {/* Infinite Marquee Container */}
                    <div className="relative overflow-hidden -mx-6 px-6">
                        <div className="flex w-max">
                            <motion.div 
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ 
                                    duration: 30, // Ajuste a velocidade aqui
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                                whileHover={{ animationPlayState: "paused" }}
                                className="flex gap-6 pr-6"
                            >
                                {[...galleryImages, ...galleryImages].map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        onClick={() => setSelectedGalleryImage(img)}
                                        className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[4/5] h-[350px] md:h-[420px] rounded-[32px] overflow-hidden bg-zinc-900 border border-white/5 group shadow-2xl cursor-pointer"
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx}`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />

                                        {/* Glassmorphism Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        {/* Interactive Border (Premium Neon) */}
                                        <div className="absolute inset-0 border-[1px] border-transparent group-hover:border-neon/30 rounded-[32px] transition-all duration-500 z-20 pointer-events-none" />

                                        {/* Bottom Info */}
                                        <div className="absolute bottom-6 left-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                                            <div className="h-[1px] w-8 bg-neon mb-3" />
                                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90">Fly Up Experience</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ SECTION (LIGHT branded) */}
            <section className="py-24 bg-zinc-50 border-t border-zinc-300 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00cc00]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 text-center text-black">
                        Dúvidas Frequentes
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-zinc-300 rounded-2xl bg-white overflow-hidden hover:border-[#00cc00] transition-colors group">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-lg transition-colors ${openFaqIndex === idx ? 'text-[#008800]' : 'text-black group-hover:text-black/80'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaqIndex === idx ? 'bg-[#00cc00] rotate-180' : 'bg-zinc-200 group-hover:bg-[#00cc00]/20'}`}>
                                        <ChevronDown className={`w-5 h-5 transition-colors ${openFaqIndex === idx ? 'text-white' : 'text-zinc-600 group-hover:text-black'}`} />
                                    </div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaqIndex === idx ? "auto" : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0">
                                        <div className="w-full h-px bg-zinc-100 mb-4" />
                                        <p className="text-zinc-700 leading-relaxed bg-zinc-50/50 p-4 rounded-xl">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                experienceTitle={title}
                webhookTitle={webhookTitle || title}
                source={sourceId}
            />

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedGalleryImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                        onClick={() => setSelectedGalleryImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-50 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedGalleryImage(null);
                            }}
                        >
                            <ChevronDown className="w-6 h-6 rotate-180" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedGalleryImage}
                                alt="Gallery Lightbox"
                                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(57,255,20,0.2)] border border-white/10"
                            />
                            <div className="absolute -bottom-10 left-0 right-0 text-center">
                                <span className="text-zinc-500 font-black italic uppercase tracking-[0.3em] text-[10px]">Pressione para fechar</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
