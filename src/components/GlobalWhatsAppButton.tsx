"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Páginas que gerenciam seu próprio botão de WhatsApp (não renderizar o global aqui)
const CUSTOM_WA_PAGES = ["/curso-aff-pro"];

export default function GlobalWhatsAppButton() {
    const pathname = usePathname();

    if (CUSTOM_WA_PAGES.includes(pathname ?? "")) return null;

    return <WhatsAppButton />;
}
