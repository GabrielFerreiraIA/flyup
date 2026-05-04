"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import { User, Phone, Zap, GraduationCap, ArrowRight, X, CheckCircle2, ChevronDown } from "lucide-react";
import { FlyUpWebhook } from "@/lib/webhook-integration";

const countries = [
    { name: 'Brasil', code: 'br', ddi: '+55' },
    { name: 'Afeganistão', code: 'af', ddi: '+93' },
    { name: 'África do Sul', code: 'za', ddi: '+27' },
    { name: 'Albânia', code: 'al', ddi: '+355' },
    { name: 'Alemanha', code: 'de', ddi: '+49' },
    { name: 'Andorra', code: 'ad', ddi: '+376' },
    { name: 'Angola', code: 'ao', ddi: '+244' },
    { name: 'Arábia Saudita', code: 'sa', ddi: '+966' },
    { name: 'Argélia', code: 'dz', ddi: '+213' },
    { name: 'Argentina', code: 'ar', ddi: '+54' },
    { name: 'Armênia', code: 'am', ddi: '+374' },
    { name: 'Austrália', code: 'au', ddi: '+61' },
    { name: 'Áustria', code: 'at', ddi: '+43' },
    { name: 'Azerbaijão', code: 'az', ddi: '+994' },
    { name: 'Bahamas', code: 'bs', ddi: '+1' },
    { name: 'Bangladesh', code: 'bd', ddi: '+880' },
    { name: 'Barbados', code: 'bb', ddi: '+1' },
    { name: 'Barem', code: 'bh', ddi: '+973' },
    { name: 'Bélgica', code: 'be', ddi: '+32' },
    { name: 'Belize', code: 'bz', ddi: '+501' },
    { name: 'Benin', code: 'bj', ddi: '+229' },
    { name: 'Bielorrússia', code: 'by', ddi: '+375' },
    { name: 'Bolívia', code: 'bo', ddi: '+591' },
    { name: 'Bósnia e Herzegovina', code: 'ba', ddi: '+387' },
    { name: 'Botsuana', code: 'bw', ddi: '+267' },
    { name: 'Brunei', code: 'bn', ddi: '+673' },
    { name: 'Bulgária', code: 'bg', ddi: '+359' },
    { name: 'Burquina Faso', code: 'bf', ddi: '+226' },
    { name: 'Burundi', code: 'bi', ddi: '+257' },
    { name: 'Cabo Verde', code: 'cv', ddi: '+238' },
    { name: 'Camarões', code: 'cm', ddi: '+237' },
    { name: 'Camboja', code: 'kh', ddi: '+855' },
    { name: 'Canadá', code: 'ca', ddi: '+1' },
    { name: 'Catar', code: 'qa', ddi: '+974' },
    { name: 'Cazaquistão', code: 'kz', ddi: '+7' },
    { name: 'Chade', code: 'td', ddi: '+235' },
    { name: 'Chile', code: 'cl', ddi: '+56' },
    { name: 'China', code: 'cn', ddi: '+86' },
    { name: 'Chipre', code: 'cy', ddi: '+357' },
    { name: 'Colômbia', code: 'co', ddi: '+57' },
    { name: 'Comores', code: 'km', ddi: '+269' },
    { name: 'Congo-Brazzaville', code: 'cg', ddi: '+242' },
    { name: 'Congo-Kinshasa', code: 'cd', ddi: '+243' },
    { name: 'Coreia do Norte', code: 'kp', ddi: '+850' },
    { name: 'Coreia do Sul', code: 'kr', ddi: '+82' },
    { name: 'Costa do Marfim', code: 'ci', ddi: '+225' },
    { name: 'Costa Rica', code: 'cr', ddi: '+506' },
    { name: 'Croácia', code: 'hr', ddi: '+385' },
    { name: 'Cuba', code: 'cu', ddi: '+53' },
    { name: 'Dinamarca', code: 'dk', ddi: '+45' },
    { name: 'Djibuti', code: 'dj', ddi: '+253' },
    { name: 'Dominica', code: 'dm', ddi: '+1' },
    { name: 'Egito', code: 'eg', ddi: '+20' },
    { name: 'El Salvador', code: 'sv', ddi: '+503' },
    { name: 'Emirados Árabes Unidos', code: 'ae', ddi: '+971' },
    { name: 'Equador', code: 'ec', ddi: '+593' },
    { name: 'Eritreia', code: 'er', ddi: '+291' },
    { name: 'Eslováquia', code: 'sk', ddi: '+421' },
    { name: 'Eslovênia', code: 'si', ddi: '+386' },
    { name: 'Espanha', code: 'es', ddi: '+34' },
    { name: 'Estados Unidos', code: 'us', ddi: '+1' },
    { name: 'Estônia', code: 'ee', ddi: '+372' },
    { name: 'Etiópia', code: 'et', ddi: '+251' },
    { name: 'Fiji', code: 'fj', ddi: '+679' },
    { name: 'Filipinas', code: 'ph', ddi: '+63' },
    { name: 'Finlândia', code: 'fi', ddi: '+358' },
    { name: 'França', code: 'fr', ddi: '+33' },
    { name: 'Gabão', code: 'ga', ddi: '+241' },
    { name: 'Gâmbia', code: 'gm', ddi: '+220' },
    { name: 'Gana', code: 'gh', ddi: '+233' },
    { name: 'Geórgia', code: 'ge', ddi: '+995' },
    { name: 'Granada', code: 'gd', ddi: '+1' },
    { name: 'Grécia', code: 'gr', ddi: '+30' },
    { name: 'Guatemala', code: 'gt', ddi: '+502' },
    { name: 'Guiana', code: 'gy', ddi: '+592' },
    { name: 'Guiné', code: 'gn', ddi: '+224' },
    { name: 'Guiné Equatorial', code: 'gq', ddi: '+240' },
    { name: 'Guiné-Bissau', code: 'gw', ddi: '+245' },
    { name: 'Haiti', code: 'ht', ddi: '+509' },
    { name: 'Holanda', code: 'nl', ddi: '+31' },
    { name: 'Honduras', code: 'hn', ddi: '+504' },
    { name: 'Hungria', code: 'hu', ddi: '+36' },
    { name: 'Iêmen', code: 'ye', ddi: '+967' },
    { name: 'Ilhas Marshall', code: 'mh', ddi: '+692' },
    { name: 'Ilhas Salomão', code: 'sb', ddi: '+677' },
    { name: 'Índia', code: 'in', ddi: '+91' },
    { name: 'Indonésia', code: 'id', ddi: '+62' },
    { name: 'Irã', code: 'ir', ddi: '+98' },
    { name: 'Iraque', code: 'iq', ddi: '+964' },
    { name: 'Irlanda', code: 'ie', ddi: '+353' },
    { name: 'Islândia', code: 'is', ddi: '+354' },
    { name: 'Israel', code: 'il', ddi: '+972' },
    { name: 'Itália', code: 'it', ddi: '+39' },
    { name: 'Jamaica', code: 'jm', ddi: '+1' },
    { name: 'Japão', code: 'jp', ddi: '+81' },
    { name: 'Jordânia', code: 'jo', ddi: '+962' },
    { name: 'Kuwait', code: 'kw', ddi: '+965' },
    { name: 'Laos', code: 'la', ddi: '+856' },
    { name: 'Lesoto', code: 'ls', ddi: '+266' },
    { name: 'Letônia', code: 'lv', ddi: '+371' },
    { name: 'Líbano', code: 'lb', ddi: '+961' },
    { name: 'Libéria', code: 'lr', ddi: '+231' },
    { name: 'Líbia', code: 'ly', ddi: '+218' },
    { name: 'Liechtenstein', code: 'li', ddi: '+423' },
    { name: 'Lituânia', code: 'lt', ddi: '+370' },
    { name: 'Luxemburgo', code: 'lu', ddi: '+352' },
    { name: 'Macedônia do Norte', code: 'mk', ddi: '+389' },
    { name: 'Madagascar', code: 'mg', ddi: '+261' },
    { name: 'Malásia', code: 'my', ddi: '+60' },
    { name: 'Malawi', code: 'mw', ddi: '+265' },
    { name: 'Maldivas', code: 'mv', ddi: '+960' },
    { name: 'Mali', code: 'ml', ddi: '+223' },
    { name: 'Malta', code: 'mt', ddi: '+356' },
    { name: 'Marrocos', code: 'ma', ddi: '+212' },
    { name: 'Maurício', code: 'mu', ddi: '+230' },
    { name: 'Mauritânia', code: 'mr', ddi: '+222' },
    { name: 'México', code: 'mx', ddi: '+52' },
    { name: 'Micronésia', code: 'fm', ddi: '+691' },
    { name: 'Moçambique', code: 'mz', ddi: '+258' },
    { name: 'Moldávia', code: 'md', ddi: '+373' },
    { name: 'Mônaco', code: 'mc', ddi: '+377' },
    { name: 'Mongólia', code: 'mn', ddi: '+976' },
    { name: 'Montenegro', code: 'me', ddi: '+382' },
    { name: 'Namíbia', code: 'na', ddi: '+264' },
    { name: 'Nauru', code: 'nr', ddi: '+674' },
    { name: 'Nepal', code: 'np', ddi: '+977' },
    { name: 'Nicarágua', code: 'ni', ddi: '+505' },
    { name: 'Níger', code: 'ne', ddi: '+227' },
    { name: 'Nigéria', code: 'ng', ddi: '+234' },
    { name: 'Noruega', code: 'no', ddi: '+47' },
    { name: 'Nova Zelândia', code: 'nz', ddi: '+64' },
    { name: 'Omã', code: 'om', ddi: '+968' },
    { name: 'Palau', code: 'pw', ddi: '+680' },
    { name: 'Panamá', code: 'pa', ddi: '+507' },
    { name: 'Papua Nova Guiné', code: 'pg', ddi: '+675' },
    { name: 'Paquistão', code: 'pk', ddi: '+92' },
    { name: 'Paraguai', code: 'py', ddi: '+595' },
    { name: 'Peru', code: 'pe', ddi: '+51' },
    { name: 'Polônia', code: 'pl', ddi: '+48' },
    { name: 'Portugal', code: 'pt', ddi: '+351' },
    { name: 'Quênia', code: 'ke', ddi: '+254' },
    { name: 'Quirguistão', code: 'kg', ddi: '+996' },
    { name: 'Reino Unido', code: 'gb', ddi: '+44' },
    { name: 'República Centro-Africana', code: 'cf', ddi: '+236' },
    { name: 'República Checa', code: 'cz', ddi: '+420' },
    { name: 'República Dominicana', code: 'do', ddi: '+1' },
    { name: 'Romênia', code: 'ro', ddi: '+40' },
    { name: 'Ruanda', code: 'rw', ddi: '+250' },
    { name: 'Rússia', code: 'ru', ddi: '+7' },
    { name: 'Samoa', code: 'ws', ddi: '+685' },
    { name: 'San Marino', code: 'sm', ddi: '+378' },
    { name: 'Santa Lúcia', code: 'lc', ddi: '+1' },
    { name: 'São Cristóvão e Nevis', code: 'kn', ddi: '+1' },
    { name: 'São Tomé e Príncipe', code: 'st', ddi: '+239' },
    { name: 'São Vicente e Granadinas', code: 'vc', ddi: '+1' },
    { name: 'Seicheles', code: 'sc', ddi: '+248' },
    { name: 'Senegal', code: 'sn', ddi: '+221' },
    { name: 'Serra Leoa', code: 'sl', ddi: '+232' },
    { name: 'Sérvia', code: 'rs', ddi: '+381' },
    { name: 'Singapura', code: 'sg', ddi: '+65' },
    { name: 'Síria', code: 'sy', ddi: '+963' },
    { name: 'Somália', code: 'so', ddi: '+252' },
    { name: 'Sri Lanka', code: 'lk', ddi: '+94' },
    { name: 'Suazilândia', code: 'sz', ddi: '+268' },
    { name: 'Sudão', code: 'sd', ddi: '+249' },
    { name: 'Sudão do Sul', code: 'ss', ddi: '+211' },
    { name: 'Suécia', code: 'se', ddi: '+46' },
    { name: 'Suíça', code: 'ch', ddi: '+41' },
    { name: 'Suriname', code: 'sr', ddi: '+597' },
    { name: 'Tailândia', code: 'th', ddi: '+66' },
    { name: 'Taiwan', code: 'tw', ddi: '+886' },
    { name: 'Tajiquistão', code: 'tj', ddi: '+992' },
    { name: 'Tanzânia', code: 'tz', ddi: '+255' },
    { name: 'Timor-Leste', code: 'tl', ddi: '+670' },
    { name: 'Togo', code: 'tg', ddi: '+228' },
    { name: 'Tonga', code: 'to', ddi: '+676' },
    { name: 'Trinidad e Tobago', code: 'tt', ddi: '+1' },
    { name: 'Tunísia', code: 'tn', ddi: '+216' },
    { name: 'Turquemenistão', code: 'tm', ddi: '+993' },
    { name: 'Turquia', code: 'tr', ddi: '+90' },
    { name: 'Tuvalu', code: 'tv', ddi: '+688' },
    { name: 'Ucrânia', code: 'ua', ddi: '+380' },
    { name: 'Uganda', code: 'ug', ddi: '+256' },
    { name: 'Uruguai', code: 'uy', ddi: '+598' },
    { name: 'Uzbequistão', code: 'uz', ddi: '+998' },
    { name: 'Vanuatu', code: 'vu', ddi: '+678' },
    { name: 'Vaticano', code: 'va', ddi: '+39' },
    { name: 'Venezuela', code: 've', ddi: '+58' },
    { name: 'Vietnã', code: 'vn', ddi: '+84' },
    { name: 'Zâmbia', code: 'zm', ddi: '+260' },
    { name: 'Zimbábue', code: 'zw', ddi: '+263' },
];

export default function BookingBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<"duplo" | "curso">("duplo");
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'br') || countries[0]);
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const phoneNumber = `${selectedCountry.ddi}${formData.phone.replace(/\D/g, "")}`;
      await FlyUpWebhook.send({
        nome: formData.name,
        telefone: phoneNumber
      }, 'banner-oportunidade', selectedService === "duplo" ? "Salto Duplo" : "Curso de Paraquedismo");

      setIsSubmitted(true);
      setTimeout(() => {
        window.open('/agendamento-concluido', '_blank');
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", phone: "" });
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsSubmitted(true);
      setTimeout(() => {
        window.open('/agendamento-concluido', '_blank');
        setIsOpen(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (selectedCountry.code === 'br') {
        if (value.length > 11) value = value.slice(0, 11);
        let formatted = value;
        if (value.length > 0) {
            formatted = `(${value.slice(0, 2)}`;
            if (value.length > 2) formatted += `) ${value.slice(2, 7)}`;
            if (value.length > 7) formatted += `-${value.slice(7)}`;
        }
        setFormData((prev) => ({ ...prev, phone: formatted }));
    } else {
        if (value.length > 15) value = value.slice(0, 15);
        setFormData((prev) => ({ ...prev, phone: value }));
    }
  };

  return (
    <>
      <div className="absolute bottom-6 md:bottom-10 left-0 w-full z-30 px-4 md:px-6 pointer-events-none">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[32px] p-4 md:p-7 shadow-2xl overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon/5 via-transparent to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative z-10">
              
              <div className="flex items-center justify-between w-full md:w-auto md:flex-1 gap-4">
                {/* Text Content */}
                <div className="flex flex-col items-start">
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-neon mb-1 opacity-80">Oportunidade</span>
                  <h3 className="text-base md:text-2xl font-black italic uppercase text-white tracking-tighter leading-tight">
                    Reserve seu <br />
                    <span className="text-stroke-neon text-transparent">Salto Promocional</span>
                  </h3>
                </div>

                {/* Discount */}
                <div className="flex flex-col items-end md:items-center justify-center md:px-8 md:border-x md:border-white/5">
                  <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-3xl md:text-6xl font-black italic tracking-tighter text-stroke-neon text-transparent leading-none">
                      10%
                    </span>
                    <span className="text-sm md:text-2xl font-black italic uppercase text-neon tracking-tighter">
                      OFF
                    </span>
                  </div>
                  <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-zinc-500 mt-0.5">Vagas Limitadas</span>
                </div>
              </div>

              {/* Right Section: CTA */}
              <div className="w-full md:w-auto">
                <button 
                  onClick={() => setIsOpen(true)}
                  className="group relative h-12 md:h-14 w-full md:px-10 bg-white text-black font-black italic uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-neon translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 group-hover:text-black text-sm md:text-base">
                    Quero meu desconto
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal (Refined to Standard Booking Form) */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-4 outline-none">
            <Dialog.Title className="sr-only">Reserve seu Salto Promocional</Dialog.Title>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-12 relative shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-zinc-600 hover:text-white transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              {isSubmitted ? (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-neon rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                    <CheckCircle2 size={40} className="text-black" />
                  </div>
                  <h2 className="text-3xl font-black italic uppercase text-white tracking-tighter mb-2">Sucesso!</h2>
                  <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Abrindo confirmação em nova aba...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Header */}
                  <div className="mb-10 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter leading-none mb-2">
                      RESERVE SEU <br />
                      <span className="text-stroke-neon text-transparent">
                        SALTO PROMOCIONAL
                      </span>
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-neon" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Vagas Limitadas</span>
                    </div>
                  </div>

                  {/* Form Content */}
                  <div className="space-y-8 relative z-10">
                    
                    {/* Service Selection Toggle */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Selecione a Experiência</label>
                      <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-2xl border border-white/5">
                        <button 
                          type="button"
                          onClick={() => setSelectedService("duplo")}
                          className={`flex items-center justify-center gap-3 py-3 px-4 rounded-xl transition-all font-black italic uppercase text-xs tracking-wider ${selectedService === "duplo" ? "bg-neon text-black" : "text-white hover:bg-white/5"}`}
                        >
                          <Zap className="w-5 h-5 shrink-0" />
                          <span className="leading-tight text-center">Salto Duplo</span>
                        </button>
                        <button 
                          type="button"
                          onClick={() => setSelectedService("curso")}
                          className={`flex items-center justify-center gap-3 py-3 px-4 rounded-xl transition-all font-black italic uppercase text-xs tracking-wider ${selectedService === "curso" ? "bg-neon text-black" : "text-white hover:bg-white/5"}`}
                        >
                          <GraduationCap className="w-5 h-5 shrink-0" />
                          <span className="leading-tight text-center">Curso de Paraquedismo</span>
                        </button>
                      </div>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Nome de Elite</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-zinc-600 group-focus-within:text-neon transition-colors" />
                        </div>
                        <input 
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="COMO DEVEMOS TE CHAMAR?"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white text-xs font-bold placeholder:text-zinc-700 outline-none focus:border-neon/50 focus:bg-white/10 transition-all uppercase tracking-widest"
                        />
                      </div>
                    </div>

                    {/* WhatsApp Input */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">WhatsApp</label>
                      <div className="relative group">
                        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 focus-within:border-neon/50 focus-within:bg-white/10">
                          <div className="pl-5 flex items-center gap-3 relative">
                            {/* Country Selector Toggle */}
                            <button
                                type="button"
                                onClick={() => setIsCountrySelectorOpen(!isCountrySelectorOpen)}
                                className="flex items-center gap-2 hover:bg-white/5 py-1 px-1.5 rounded-lg transition-colors group/flag"
                            >
                                <div className="w-5 h-3.5 relative rounded-[2px] overflow-hidden opacity-80 shadow-sm ring-1 ring-white/10">
                                    <img
                                        src={`https://flagcdn.com/${selectedCountry.code}.svg`}
                                        alt={selectedCountry.code}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <ChevronDown size={12} className={`text-zinc-500 transition-transform duration-300 ${isCountrySelectorOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className="h-4 w-[1px] bg-white/10 rounded-full" />
                            <span className="text-zinc-400 font-bold text-sm tracking-tight w-10">{selectedCountry.ddi}</span>

                            {/* Flag Selection Dropdown */}
                            <AnimatePresence>
                                {isCountrySelectorOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 top-full mt-2 w-48 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 z-[60]"
                                    >
                                        <div className="max-h-[220px] overflow-y-auto custom-scrollbar">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setIsCountrySelectorOpen(false);
                                                        setFormData(prev => ({ ...prev, phone: "" }));
                                                    }}
                                                    className={`
                                                        w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                                                        ${selectedCountry.code === country.code ? 'bg-neon/10 text-neon' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}
                                                    `}
                                                >
                                                    <div className="w-5 h-3.5 relative rounded-[2px] overflow-hidden opacity-90 shadow-sm ring-1 ring-white/10 shrink-0">
                                                        <img
                                                            src={`https://flagcdn.com/${country.code}.svg`}
                                                            alt={country.code}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold leading-none">{country.name}</span>
                                                        <span className="text-[10px] opacity-60 mt-1">{country.ddi}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                          </div>
                          <input 
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="(DD) 99999-9999"
                            className="w-full bg-transparent border-none py-5 pl-3 pr-6 text-white text-xs font-bold placeholder:text-zinc-700 outline-none uppercase tracking-widest"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Confirm Button */}
                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative h-16 w-full bg-neon text-black font-black italic uppercase tracking-[0.1em] rounded-2xl overflow-hidden transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)] hover:shadow-[0_0_60px_rgba(57,255,20,0.5)] active:scale-95 disabled:opacity-50"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? "Enviando..." : "Confirmar Interesse"}
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                      </button>
                      <p className="text-center text-[8px] font-bold text-zinc-700 mt-6 uppercase tracking-[0.3em]">
                        Política de Privacidade e Termos
                      </p>
                    </div>

                  </div>
                </form>
              )}
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
