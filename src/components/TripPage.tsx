import React from 'react';
import { motion } from 'motion/react';
import { Compass, Waves, MapPin, Calendar, Users, Video, Car, Utensils, Home, Check, ArrowRight, ArrowLeft, Sparkles, Star } from 'lucide-react';
import { LESSONS } from '../data';
import { Lesson } from '../types';
import theWaveBristolImg from '../assets/images/the_wave_bristol_trip_1784800173484.jpg';

interface TripPageProps {
  onReservarClick?: () => void;
  onSelectLesson?: (lesson: Lesson) => void;
  onBackToServices?: () => void;
}

export default function TripPage({ onReservarClick, onSelectLesson, onBackToServices }: TripPageProps) {

  const handleBooking = (lessonId: string) => {
    const found = LESSONS.find(l => l.id === lessonId);
    if (found && onSelectLesson) {
      onSelectLesson(found);
    } else if (onReservarClick) {
      onReservarClick();
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 pb-20">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-slate-100 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBackToServices || onReservarClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#f18719] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#f18719]" />
            <span>Voltar aos Serviços</span>
          </button>
          
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest hidden sm:inline-block">
            Expedição Internacional • The Wave Bristol
          </span>
        </div>
      </div>

      {/* 1. HERO BANNER */}
      <div className="relative h-[400px] sm:h-[460px] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-100 scale-105" 
          style={{ backgroundImage: `url('${theWaveBristolImg}')` }}
        >
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8 space-y-3">
          <span className="text-[#f18719] font-black text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 inline-block">
            Express Evolution Weekend • Bristol, UK
          </span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wide uppercase font-sans drop-shadow-md"
          >
            The Wave Surf Trip
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Desenvolvido à medida para a tua evolução técnica. Um fim de semana intenso de ondas perfeitas e repetíveis na piscina de ondas de classe mundial em Bristol!
          </motion.p>
        </div>
      </div>

      {/* 2. MAIN SECTION (2 COLUMNS: IMAGE LEFT, DETAILED PRICING & SPECS RIGHT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: IMAGE CONTAINER */}
          <div className="relative h-[320px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg group border border-slate-200/80">
            <img 
              src={theWaveBristolImg} 
              alt="The Wave Bristol Surf Trip" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 text-left">
              <span className="bg-[#f18719] text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                The Wave • Bristol
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase font-sans pt-1">
                Piscina de Ondas de Alta Performance
              </h4>
              <p className="text-xs text-slate-200">
                Ondas mecânicas perfeitas com frequência garantida para repetição técnica rápida.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTENT PANEL */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#f18719] bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full inline-block">
              Expedição Internacional
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-slate-950 tracking-tight uppercase leading-tight">
              The Wave Surf Trip
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Tailored for your technical evolution, we've designed an intense weekend where you'll elevate your surfing skills and take your performance to the next level at The Wave, Bristol. A experiência definitiva para acelerar o teu surf.
            </p>

            {/* DURAÇÃO / NÍVEL / PREÇO SPECS ROW */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200/80 py-4">
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5">Duração</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">11 a 13 Set.</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5">Nível</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Intermédio / Avançado</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5">Preço</span>
                <span className="text-xs sm:text-sm font-black text-[#f18719]">Desde 490€</span>
              </div>
            </div>

            {/* DOTTED PRICING BOX */}
            <div className="bg-orange-50/40 border border-orange-100/80 rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-orange-200/60 pb-3">
                <h4 className="font-sans font-black text-xs sm:text-sm text-[#f18719] uppercase tracking-wider">
                  SURF TRIP BRISTOL / THE WAVE (2 DIAS)
                </h4>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  PREÇO POR PESSOA
                </span>
              </div>

              <div className="space-y-2.5">
                {[
                  { 
                    id: 'the-wave-bristol-trip', 
                    label: 'Membros Kiber / ', 
                    bold: 'KIBER MEMBERS', 
                    detail: '(desconto alunos)', 
                    price: '490€' 
                  },
                  { 
                    id: 'the-wave-bristol-trip', 
                    label: 'Preço Geral / ', 
                    bold: 'GENERAL PRICE', 
                    detail: '(público geral)', 
                    price: '625€' 
                  },
                ].map((plan, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleBooking(plan.id)}
                    className="w-full flex items-baseline justify-between gap-1.5 text-left py-2 px-2.5 rounded-xl hover:bg-[#f18719]/10 transition-all duration-150 group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
                      <span className="text-[#f18719] font-bold shrink-0 text-xs sm:text-sm">•</span>
                      <span className="text-slate-800 text-xs sm:text-sm font-medium truncate">
                        {plan.label}
                        <strong className="font-black text-slate-950 uppercase text-[11px] sm:text-[13px] ml-1">{plan.bold}</strong>{' '}
                        {plan.detail && <span className="text-slate-500 font-normal text-[11px] sm:text-xs">{plan.detail}</span>}
                      </span>
                      <div className="flex-1 border-b border-dotted border-slate-300 min-w-[8px] self-end mb-1" />
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-slate-950 font-extrabold text-sm sm:text-base">
                        {plan.price}
                      </span>
                      <span className="text-[10px] font-black text-white bg-[#f18719] hover:bg-[#db760f] px-3 py-1 rounded-lg shadow-sm transition-all uppercase tracking-wider shrink-0">
                        Reservar
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* INCLUSIONS LIST */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] uppercase font-black tracking-widest text-slate-400 block">
                O QUE ESTÁ INCLUÍDO NA SURF TRIP:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  'Alojamento on-site nas instalações do The Wave (Eco-Lodges)',
                  '3 Sessões intensivas de surf com coaching dedicado',
                  'Treino prático de Surfskate e biomecânica em terra',
                  'Transfers de e para o Aeroporto em Bristol',
                  'Pequeno-almoço e almoço incluídos todos os dias',
                  'Análise detalhada em vídeo (Video Analysis) de cada onda'
                ].map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-orange-50 text-[#f18719] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/60">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACTION CTA */}
            <div className="pt-4">
              <button
                onClick={() => handleBooking('the-wave-bristol-trip')}
                className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer active:scale-95"
              >
                Garantir Vaga na Surf Trip
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 3. LOGISTICS CARDS */}
      <div className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#f18719] font-black text-xs uppercase tracking-widest block">
              Logística & Conforto Total
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase font-sans">
              Tudo Planeado para o Teu Desempenho
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f18719] border border-orange-200/60 flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-black text-base text-slate-950 uppercase">Eco-Lodges no The Wave</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alojamento dentro do próprio complexo a 2 minutos a pé do deck da piscina. Máximo conforto e recuperação muscular.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f18719] border border-orange-200/60 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-black text-base text-slate-950 uppercase">Vídeo-Análise Profissional</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Todas as ondas são gravadas em alta definição com debriefings técnicos individuais após cada sessão de surf.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f18719] border border-orange-200/60 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-black text-base text-slate-950 uppercase">Refeições & Nutrição</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pequeno-almoço e almoço planeados para surfistas, com opções saudáveis e energéticas antes e depois de cada sessão.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
