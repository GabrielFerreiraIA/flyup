import type { Metadata } from "next";
import "./globals.css";
import GlobalWhatsAppButton from "@/components/GlobalWhatsAppButton";
import GoogleTagManager from "@/components/GoogleTagManager";
import MicrosoftClarity from "@/components/MicrosoftClarity";

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
        <MicrosoftClarity projectId="yerb112q2f" />
        {children}
        <GlobalWhatsAppButton />
      </body>
    </html>
  );
}
