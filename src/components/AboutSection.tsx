import React from 'react';
import { Users, ArrowRight, Compass, Waves, Award, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onConheceStaffClick: () => void;
  showHeaderBanner?: boolean;
}

export default function AboutSection({ onConheceStaffClick, showHeaderBanner = true }: AboutSectionProps) {
  const fallbackImage = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80';
  const headerBannerImage = '/ofotografoluan_25.07.26_afternoon_fotos_luan8958_744683_296413.jpg';
  const aboutImage = '/about.jpg';

  return (
    <section id="sobre" className="relative bg-white text-slate-800">
      
      {/* 1. HEADER BANNER COM IMAGEM & TÍTULO "SOBRE NÓS" (Condicional) */}
      {showHeaderBanner && (
        <div className="relative h-[260px] sm:h-[320px] md:h-[360px] w-full overflow-hidden flex items-center justify-center bg-slate-950">
          <img 
            src={headerBannerImage} 
            alt="Sobre Nós - Kiber Surf School Matosinhos"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== fallbackImage) {
                target.src = fallbackImage;
              }
            }}
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 brightness-105 contrast-105 transition-transform duration-1000"
          />
          {/* Soft overlay for crisp legibility and bright image visibility */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* Content Over Image Banner */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-[#f18719] border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
              <Waves className="w-4 h-4 text-[#f18719]" />
              <span className="text-white">Kiber Surf School • Desde 1999</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white uppercase drop-shadow-md">
              Sobre Nós
            </h2>

            <div className="flex items-center justify-center gap-2 pt-1 pb-1">
              <div className="w-10 h-0.5 bg-white/40 rounded-full"></div>
              <div className="w-12 h-1 bg-[#f18719] rounded-full"></div>
              <div className="w-10 h-0.5 bg-white/40 rounded-full"></div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto font-manrope font-medium drop-shadow">
              Mais de 25 anos de paixão pelas ondas, formação de excelência e dedicação ao ensino do surf na Praia de Matosinhos.
            </p>
          </div>
        </div>
      )}

      {/* 2. CONTEÚDO PRINCIPAL (INFORMAÇÃO DETALHADA E FOTO DA ESCOLA) */}
      <div className={`py-14 md:py-20 ${!showHeaderBanner ? 'border-b border-slate-100' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Lado Esquerdo - Imagem da Escola na Praia de Matosinhos */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-0 group">
              <img 
                src={aboutImage} 
                alt="Aulas e Comunidade Kiber Surf School na Praia de Matosinhos" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== fallbackImage) {
                    target.src = fallbackImage;
                  }
                }}
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5 text-[#f18719]" />
                  <span>Praia de Matosinhos, Porto</span>
                </div>
                <span className="text-[11px] font-bold bg-[#f18719] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Escola Oficial FPS
                </span>
              </div>
            </div>

            {/* Lado Direito - Bloco de Informações da Kiber Surf School */}
            <div className="space-y-6 text-left">
              <div className="inline-block bg-[#ffe6cc] text-[#f18719] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                Matosinhos • Porto
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-slate-950 uppercase">
                Kiber Surf School
              </h3>
              
              <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed font-manrope">
                Escola de surf certificada pela Federação Portuguesa de Surf, com instrutores devidamente credenciados, apaixonados e com vasta experiência no mar.
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-manrope">
                Com mais de 25 anos dedicados ao surf, bodyboard e desportos de deslize, acumulámos uma enorme bagagem de experiência e formação para partilhar contigo todos os nossos conhecimentos. Disponibilizamos aulas de surf para todos os níveis, surfskate e campos de férias, sempre com metodologia focada na segurança, diversão e evolução consistente.
              </p>

              <div className="pt-2">
                <button
                  id="btn-conhece-staff"
                  onClick={onConheceStaffClick}
                  className="bg-[#f18719] hover:bg-[#db760f] text-white font-fredoka font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-3 group border border-[#f18719]"
                >
                  <Users className="w-4 h-4 text-white" />
                  <span>Conhece o nosso staff</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
