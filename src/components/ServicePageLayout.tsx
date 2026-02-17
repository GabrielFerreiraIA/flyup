"use client";

import { motion } from "framer-motion";
import {
    ArrowRight, CheckCircle2, ChevronDown, Clock, MapPin, Shield, Zap,
    Cloud, Sunrise, Bird, Camera, Wind, Trophy, Users, Award,
    AlertTriangle, PlayCircle, Mountain, BookOpen, Skull, BadgeCheck,
    GraduationCap, Star, Plane, Activity, Gauge, type LucideIcon
} from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";

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
    price: string;
    features: string[];
    highlight?: boolean;
}

interface StepItem {
    title: string;
    description: string;
    icon?: string;
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
    ctaText?: string;
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
    ctaText = "Agendar Agora"
}: ServicePageLayoutProps) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    return (
        <main className="bg-black text-white min-h-screen font-sans selection:bg-neon selection:text-black">
            {/* HERO SECTION */}
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

            {/* OVERVIEW & STEPS SECTION */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
                            A Experiência
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                            {overview}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-neon/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon transition-colors duration-300">
                                    {step.icon && iconMap[step.icon] ? (() => { const Icon = iconMap[step.icon]; return <Icon className="text-neon group-hover:text-black w-7 h-7 transition-colors" />; })() : <div className="w-3 h-3 bg-neon rounded-full" />}
                                </div>
                                <h3 className="text-xl font-black italic uppercase mb-3 text-white">{step.title}</h3>
                                <p className="text-zinc-500 font-medium text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 text-center">
                        Galeria <span className="text-transparent" style={{ WebkitTextStroke: '1px #39FF14' }}>Exclusiva</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`rounded-2xl overflow-hidden relative group cursor-pointer ${idx === 0 || idx === 6 ? 'md:col-span-2' : ''}`}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${idx}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-24 bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center">
                        Investimento
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {pricingOptions.map((option, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className={`w-full max-w-md rounded-3xl p-8 flex flex-col relative ${option.highlight ? 'bg-zinc-900 border-2 border-neon shadow-[0_0_40px_rgba(57,255,20,0.15)]' : 'bg-zinc-900/50 border border-white/10'}`}
                            >
                                {option.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest">
                                        Mais Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-black italic uppercase mb-2">{option.title}</h3>
                                <div className="text-4xl font-black text-white mb-6 tracking-tight">
                                    {option.price}
                                    <span className="text-sm font-bold text-zinc-500 ml-2 tracking-normal align-middle">/ pessoa</span>
                                </div>
                                <ul className="flex-1 space-y-4 mb-8">
                                    {option.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                            <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    onClick={() => setIsBookingOpen(true)}
                                    className={`w-full py-6 font-black italic uppercase rounded-xl ${option.highlight ? 'bg-neon text-black hover:bg-neon-hover' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                >
                                    Reservar Vaga
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 text-center">
                        Dúvidas Frequentes
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-lg text-white">{faq.question}</span>
                                    <ChevronDown
                                        className={`text-zinc-500 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-neon' : ''}`}
                                    />
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaqIndex === idx ? "auto" : 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-6 pt-0 text-zinc-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
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
            />
        </main>
    );
}
