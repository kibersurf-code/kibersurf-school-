import React from 'react';
import { INSTRUCTORS } from '../data';
import { Star, Navigation, Volume2, Calendar, Award, Users } from 'lucide-react';

interface InstructorsSectionProps {
  onAgendarClick?: () => void;
}

export default function InstructorsSection({ onAgendarClick }: InstructorsSectionProps) {
  return (
    <section id="staff-section" className="bg-slate-50 text-slate-800 py-16 md:py-24 border-t border-slate-200 relative overflow-hidden">
      
      {/* Decorative ambient background accents */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffe6cc] text-[#f18719] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Users className="w-4 h-4" />
            <span>Kiber Surf School • Equipa Técnica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-950 uppercase">
            Conhece o Nosso Staff
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Treinadores credenciados pela Federação Portuguesa de Surf, com formação universitária em desporto e mais de 25 anos de experiência nas ondas de Matosinhos.
          </p>
        </div>

        {/* Coaches Grid (6 Staff Members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUCTORS.map((coach) => (
            <div
              key={coach.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#f18719]/40 hover:shadow-xl transition-all duration-300 flex flex-col group shadow-sm"
            >
              
              {/* Profile Image */}
              <div className="relative h-80 bg-slate-100 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: coach.imagePosition || 'center' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                {/* Float Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 text-[#f18719] fill-[#f18719]" />
                  <span className="text-xs font-mono font-bold text-slate-800">{coach.rating.toFixed(1)}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-xs font-mono font-bold text-[#f18719] tracking-wider uppercase block">
                    {coach.role}
                  </span>
                  <h3 className="text-2xl font-sans font-black text-white mt-1 uppercase tracking-tight">
                    {coach.name}
                  </h3>
                </div>
              </div>

              {/* Coach Bio & Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Especialidade Principal:
                    </span>
                    <span className="text-xs font-sans font-semibold text-[#f18719] block mt-1 bg-orange-50/70 px-3.5 py-2.5 rounded-xl border border-[#ffe6cc]">
                      {coach.specialty}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans mt-2">
                    {coach.bio}
                  </p>
                </div>

                {/* Footer specs - languages */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-[#f18719]" />
                    <span className="text-slate-500 font-bold">Idiomas:</span>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {coach.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 text-[10px] font-bold"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Spot Insight Callout */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-left shadow-sm">
          <div className="p-4 bg-orange-50 text-[#f18719] rounded-2xl shrink-0">
            <Navigation className="w-8 h-8 rotate-45" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-sans font-bold text-base text-slate-950">
              Sabias que a praia de Matosinhos é o melhor local de aprendizagem do surf em Portugal?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              O lendário molhe do Porto de Leixões atua como um quebra-mar gigante contra os ventos de norte e swells violentos do Atlântico. Isso cria uma baía protegida com ondas de espuma muito calmas e de alta consistência — tornando Matosinhos o cenário de eleição para qualquer pessoa se pôr de pé logo na primeira sessão com total segurança!
            </p>
          </div>
          {onAgendarClick && (
            <button
              onClick={onAgendarClick}
              className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 shrink-0 border border-[#f18719]"
            >
              <Calendar className="w-4 h-4" />
              <span>Marcar Aula</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
