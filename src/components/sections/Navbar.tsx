"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "@/components/BookingModal";
const experiences = [
    { name: "Salto Duplo", href: "/salto-duplo" },
];

const cursosParaquedismo = [
    { name: "Curso de Paraquedismo AFF Pro", href: "/curso-aff-pro" },
];

const outrasExperiencias = [
    { name: "Saltos e passeios de balão", href: "/salto-balao" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const isHoveredRef = useRef(false);

    // Sync ref with state for event handlers
    useEffect(() => {
        isHoveredRef.current = isHovered;
    }, [isHovered]);

    // Handle scroll and visibility logic
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show background when scrolled
            setIsScrolled(currentScrollY > 20);

            setShowNavbar(true);
            clearTimeout(timeoutId);

            // Only auto-hide if scrolled down significantly and NOT hovering
            timeoutId = setTimeout(() => {
                if (window.scrollY > 50 && !isHoveredRef.current) {
                    setShowNavbar(false);
                }
            }, 3000);

            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = () => {
            // Only show if we are actually scrolled down (logic consistency)
            // or just always show on mouse move? "Always show" is safer UX.
            setShowNavbar(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (window.scrollY > 50 && !isHoveredRef.current) {
                    setShowNavbar(false);
                }
            }, 3000);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []); // Empty dependency array = stable listeners

    return (
        <>
            <header
                ref={navRef}
                onMouseEnter={() => { setIsHovered(true); setShowNavbar(true); }}
                onMouseLeave={() => { setIsHovered(false); }}
                className={cn(
                    "fixed left-0 right-0 z-[60] transition-all duration-500 ease-in-out",
                    "top-0",
                    // Base spacing
                    isScrolled ? "py-2" : "py-4",
                    // Background logic: Always dark/glass when scrolled, transparent at top
                    isScrolled ? "bg-black/90 backdrop-blur-md shadow-2xl" : "bg-transparent",
                    // Hiding logic: Slide up if scrolled and inactive
                    isScrolled && !showNavbar ? "-translate-y-full" : "translate-y-0"
                )}
            >

            <div className={cn("container mx-auto px-6 transition-all duration-500", isScrolled ? "h-16" : "h-20")}>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-10 h-full">

                    {/* LEFT MENU: Experiences & Courses (Dropdowns) */}
                    <nav className="hidden lg:flex items-center gap-10 justify-start pl-4">
                        <Link
                            href="/salto-duplo"
                            className="flex items-center gap-1.5 text-xs font-black text-white hover:text-neon transition-colors uppercase tracking-widest py-4 relative group"
                        >
                            SALTO DUPLO
                            <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* Cursos Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown("cursos")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1.5 text-xs font-black text-white hover:text-neon transition-colors uppercase tracking-widest py-4 relative group-hover:text-neon">
                                CURSOS
                                <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === "cursos" ? "rotate-180 text-neon" : "text-zinc-500 group-hover:text-neon")} />
                                <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "cursos" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute top-full left-0 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden py-3 z-50 ring-1 ring-white/10"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                                        {cursosParaquedismo.map((item, idx) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="block px-8 py-3.5 text-sm font-bold text-zinc-400 hover:text-neon hover:bg-white/5 transition-all uppercase tracking-wide border-l-2 border-transparent hover:border-neon relative overflow-hidden"
                                                >
                                                    <span className="relative z-10">{item.name}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Experiências Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown("outras")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1.5 text-xs font-black text-white hover:text-neon transition-colors uppercase tracking-widest py-4 relative group-hover:text-neon">
                                EXPERIÊNCIAS
                                <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === "outras" ? "rotate-180 text-neon" : "text-zinc-500 group-hover:text-neon")} />
                                <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "outras" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute top-full left-0 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden py-3 z-50 ring-1 ring-white/10"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                                        {outrasExperiencias.map((item, idx) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="block px-8 py-3.5 text-sm font-bold text-zinc-400 hover:text-neon hover:bg-white/5 transition-all uppercase tracking-wide border-l-2 border-transparent hover:border-neon relative overflow-hidden"
                                                >
                                                    <span className="relative z-10">{item.name}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* CENTER: LOGO */}
                    <div className={cn(
                        "flex-shrink-0 transition-opacity duration-300",
                        isScrolled && !showNavbar ? "opacity-0 invisible" : "opacity-100 visible"
                    )}>
                        <Link href="/" className="block relative group">
                            <div className="absolute inset-0 bg-neon/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src="https://i.imgur.com/UlfCRZF.png"
                                alt="Fly Up Logo"
                                className={cn(
                                    "w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]",
                                    isScrolled ? "h-16 md:h-20" : "h-20 md:h-[100px]"
                                )}
                            />
                        </Link>
                    </div>

                    {/* RIGHT MENU: Info & Action */}
                    <div className="hidden lg:flex items-center gap-10 justify-end pr-4">
                        <Link href="/faq" className="flex items-center gap-2 text-xs font-black text-white hover:text-neon transition-colors uppercase tracking-widest group py-4 relative">
                            <HelpCircle size={14} className="text-zinc-500 group-hover:text-neon transition-colors" />
                            <span>FAQ</span>
                            <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="/blog" className="flex items-center gap-2 text-xs font-black text-white hover:text-neon transition-colors uppercase tracking-widest group py-4 relative">
                            <BookOpen size={14} className="text-zinc-500 group-hover:text-neon transition-colors" />
                            <span>Blog</span>
                            <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Button 
                            className="bg-neon hover:bg-neon-hover text-black font-black italic uppercase tracking-wider px-8 py-6 rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] relative overflow-hidden group/btn"
                            onClick={() => {
                                if (pathname === "/curso-aff-pro") {
                                    const element = document.getElementById("preco");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                } else {
                                    setIsBookingModalOpen(true);
                                }
                            }}
                        >
                            <span className="relative z-10">{pathname === "/curso-aff-pro" ? "Começar o curso agora" : "Contato / Agendar"}</span>
                            <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                        </Button>
                    </div>
                </div>

                {/* Booking Modal */}
                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    experienceTitle=""
                    source="navbar-agendar"
                />

                {/* MOBILE TOGGLE */}
                <button
                    className="lg:hidden text-white hover:text-neon transition-colors absolute right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isMobileMenuOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <X size={28} />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <Menu size={28} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>
        </header>

        {/* MOBILE MENU — fora do header para evitar conflito de stacking context */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 bg-[#050505]/98 backdrop-blur-sm z-[65] flex flex-col overflow-hidden"
                >
                    {/* Cabeçalho do menu */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <img
                                src="https://i.imgur.com/UlfCRZF.png"
                                alt="Fly Up"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/8 text-zinc-300 hover:bg-white/12 hover:text-white transition-colors"
                            aria-label="Fechar menu"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Links de navegação */}
                    <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                        {/* Experiências */}
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#39FF14] mb-2 px-1">
                                Experiências
                            </p>
                            {experiences.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between py-4 border-b border-white/5 text-xl font-black italic uppercase tracking-tighter text-white hover:text-[#39FF14] transition-colors group"
                                >
                                    {item.name}
                                    <ChevronRight size={18} className="text-zinc-700 group-hover:text-[#39FF14] transition-colors shrink-0" />
                                </Link>
                            ))}
                        </div>

                        {/* Cursos */}
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#39FF14] mb-2 px-1">
                                Cursos
                            </p>
                            {cursosParaquedismo.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between py-4 border-b border-white/5 text-xl font-black italic uppercase tracking-tighter text-white hover:text-[#39FF14] transition-colors group"
                                >
                                    {item.name}
                                    <ChevronRight size={18} className="text-zinc-700 group-hover:text-[#39FF14] transition-colors shrink-0" />
                                </Link>
                            ))}
                        </div>

                        {/* Outras Experiências */}
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#39FF14] mb-2 px-1">
                                Outras Experiências
                            </p>
                            {outrasExperiencias.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between py-4 border-b border-white/5 text-xl font-black italic uppercase tracking-tighter text-white hover:text-[#39FF14] transition-colors group"
                                >
                                    {item.name}
                                    <ChevronRight size={18} className="text-zinc-700 group-hover:text-[#39FF14] transition-colors shrink-0" />
                                </Link>
                            ))}
                        </div>

                        {/* Links secundários */}
                        <div className="pt-2 flex flex-col gap-1">
                            <Link
                                href="/faq"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-3.5 text-sm font-bold text-zinc-500 hover:text-zinc-200 transition-colors"
                            >
                                <HelpCircle size={16} className="text-[#39FF14]/70" />
                                FAQ
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-3.5 text-sm font-bold text-zinc-500 hover:text-zinc-200 transition-colors"
                            >
                                <BookOpen size={16} className="text-[#39FF14]/70" />
                                Blog
                            </Link>
                        </div>
                    </nav>

                    {/* CTA fixo na zona do polegar */}
                    <div className="shrink-0 px-6 pb-10 pt-4 border-t border-white/8">
                        <Button
                            className="w-full h-14 bg-[#39FF14] hover:bg-[#22cc0a] text-black font-black italic uppercase tracking-wider rounded-xl text-base shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                if (pathname === "/curso-aff-pro") {
                                    const element = document.getElementById("preco");
                                    if (element) element.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    setIsBookingModalOpen(true);
                                }
                            }}
                        >
                            {pathname === "/curso-aff-pro" ? "Começar o curso agora" : "Agendar Agora"}
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}
