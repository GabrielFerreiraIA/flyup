import type { Metadata } from "next";
import "./globals.css";
import GlobalWhatsAppButton from "@/components/GlobalWhatsAppButton";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleConversionScripts from "@/components/GoogleConversionScripts";

export const metadata: Metadata = {
  title: "Fly Up Elite Skydiving",
  description: "Viva a experiência mais intensa da sua vida com segurança absoluta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GoogleTagManager gtmId="GTM-M5CNQXTQ" />
        <GoogleConversionScripts />
        {children}
        <GlobalWhatsAppButton />
      </body>
    </html>
  );
}
