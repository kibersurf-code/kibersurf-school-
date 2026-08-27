import React from 'react';
import { 
  Waves, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Lesson } from '../types';
import { SERVICES, LESSONS } from '../data';
import GlobalServiceCard from './GlobalServiceCard';

interface AulasSurfHomeProps {
  onSelectLesson: (lesson: Lesson) => void;
  onNavigateToCategory: (categoryId: string) => void;
  onViewDetails?: (lesson: Lesson) => void;
}

export default function AulasSurfHome({
  onSelectLesson,
  onNavigateToCategory,
  onViewDetails,
}: AulasSurfHomeProps) {
  return (
    <section id="servicos-home" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-14 space-y-3">
          <div className="flex items-center gap-2 text-[#f18719] text-xs font-black uppercase tracking-wider">
            <Waves className="w-4 h-4" />
            <span>Kiber Surf School</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-sans uppercase">
            Os Nossos Serviços de Surf
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Descobre todas as nossas modalidades na Praia de Matosinhos. Aulas para todas as idades, coaching personalizado, packs flexíveis, aluguer de equipamento de topo e experiências exclusivas.
          </p>
        </div>

        {/* Global Ordered Grid of All 10 Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <GlobalServiceCard
              key={service.id}
              service={service}
              index={index + 1}
              onAction={() => {
                onNavigateToCategory(service.filterKey);
              }}
              onReserve={() => {
                const primary = LESSONS.find(l => l.id === service.primaryLessonId) || LESSONS[0];
                onSelectLesson(primary);
              }}
            />
          ))}
        </div>

        {/* Bottom Trust Assurance */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#f18719] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase">Segurança Total</h4>
              <p className="text-xs text-slate-500 mt-0.5">Treinadores certificados pela FPS e seguro desportivo incluído em todas as atividades.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#f18719] flex items-center justify-center shrink-0">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase">Equipamento Premium</h4>
              <p className="text-xs text-slate-500 mt-0.5">Pranchas soft e rígidas de alta qualidade e fatos de neoprene devidamente higienizados.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#f18719] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase">Evolução Garantida</h4>
              <p className="text-xs text-slate-500 mt-0.5">Metodologia progressiva com acompanhamento técnico contínuo dentro e fora de água.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
