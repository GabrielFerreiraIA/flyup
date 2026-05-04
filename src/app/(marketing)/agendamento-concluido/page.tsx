"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, MessageCircle, Loader2 } from "lucide-react";
import Script from "next/script";

function AgendamentoConcluidoContent() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(6);
  const redirectUrl = searchParams.get("redirectUrl") || "https://wa.me/5515998282280?text=Ol%C3%A1!%20Acabei%20de%20realizar%20um%20agendamento%20pelo%20site%20e%20gostaria%20de%20confirmar.";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = redirectUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirectUrl]);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18088052016" strategy="afterInteractive" />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-18088052016');
        `}
      </Script>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center">
        <div className="flex justify-center mb-8 relative">
          <div className="w-24 h-24 rounded-full bg-neon/10 flex items-center justify-center relative z-10">
            <CheckCircle2 size={48} className="text-neon" strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-neon/30 animate-ping"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4 leading-none">
          <span className="text-white block mb-2">AGENDAMENTO</span>
          <span 
            className="text-transparent block"
            style={{ WebkitTextStroke: '2px #39FF14' }}
          >
            CONCLUÍDO
          </span>
        </h1>

        <div className="mb-10 flex flex-col items-center">
          <p className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto mb-4 leading-relaxed font-medium">
            Recebemos a sua solicitação com sucesso!
          </p>
          
          <div className="bg-neon/10 border border-neon/20 px-6 py-3 rounded-full flex items-center gap-3 animate-pulse">
            <Loader2 className="text-neon animate-spin" size={18} />
            <p className="text-neon font-bold uppercase tracking-widest text-[10px] md:text-xs">
              Em {countdown} segundos você será redirecionado para nosso whatsapp oficial.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2 text-white font-bold uppercase tracking-[0.1em] text-xs">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Voltar ao Site Principal
            </span>
          </Link>

          <Link
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-neon rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2 text-black font-black italic uppercase tracking-[0.1em] text-xs">
              <MessageCircle size={16} />
              Ir para o WhatsApp Agora
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AgendamentoConcluidoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><Loader2 className="text-neon animate-spin" size={48} /></div>}>
      <AgendamentoConcluidoContent />
    </Suspense>
  );
}
