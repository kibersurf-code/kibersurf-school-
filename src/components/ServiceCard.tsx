import React from 'react';
import { Check, ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';
import { Lesson } from '../types';

interface ServiceCardProps {
  key?: React.Key;
  lesson: Lesson;
  onReserve: (lesson: Lesson) => void;
  onViewDetails?: (lesson: Lesson) => void;
}

export default function ServiceCard({ lesson, onReserve, onViewDetails }: ServiceCardProps) {
  // Determine badge text
  const badgeLabel = lesson.category === 'monthly'
    ? `MENSALIDADE ${lesson.price}€`
    : lesson.badge || `${lesson.price}€`;

  // Determine category label
  const categoryLabel = lesson.category === 'monthly' 
    ? 'MENSALIDADE' 
    : lesson.category === 'rental' 
    ? 'ALUGUER' 
    : lesson.category === 'pack' 
    ? 'PACK' 
    : 'VALOR';

  // Highlight specific cards (like Funcional or featured)
  const isHighlightedTitle = lesson.id === 'monthly-1x-funcional';

  return (
    <div
      id={`service-card-${lesson.id}`}
      className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#f18719]/40 transition-all duration-300 flex flex-col justify-between text-left group h-full"
    >
      {/* 1. Panoramic Top Media Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={lesson.image}
          alt={lesson.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Left Orange Badge */}
        <span className="absolute top-3.5 left-3.5 bg-[#f18719] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-sm z-10">
          {badgeLabel}
        </span>

        {/* Bottom Level & Duration Chips Overlay */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
          <span className="bg-[#18181b]/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/10 shrink-0">
            <Compass className="w-3.5 h-3.5 text-[#f18719]" />
            <span className="truncate max-w-[130px]">{lesson.level || 'Todos os Níveis'}</span>
          </span>
          <span className="bg-white text-slate-900 text-xs font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-slate-600" />
            <span className="truncate max-w-[130px]">{lesson.duration}</span>
          </span>
        </div>
      </div>

      {/* 2. Card Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
        
        {/* Title, Description & Inclusions */}
        <div className="space-y-3">
          <div>
            <h3 className={`text-lg sm:text-xl font-black font-sans uppercase tracking-tight leading-snug line-clamp-1 ${
              isHighlightedTitle ? 'text-[#f18719]' : 'text-slate-950 group-hover:text-[#f18719]'
            } transition-colors`}>
              {lesson.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mt-1.5 min-h-[38px]">
              {lesson.description}
            </p>
          </div>

          {/* Inclusions List */}
          {lesson.includes && lesson.includes.length > 0 && (
            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block mb-2.5">
                O que está incluído:
              </span>
              <ul className="space-y-2">
                {lesson.includes.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <div className="w-4 h-4 rounded-full border border-orange-400/90 text-[#f18719] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-snug line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 3. Bottom Block: Kiber Tech Box + Price & Actions */}
        <div className="space-y-4 pt-1">
          
          {/* Kiber Tech Banner */}
          <div className="bg-[#fff9f2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#f18719] shrink-0" />
            <p className="text-xs text-slate-700 font-medium truncate leading-tight">
              <strong className="text-[#f18719] font-black uppercase text-[11px] tracking-wide mr-1.5">
                KIBER TECH:
              </strong>
              {lesson.techTouch || 'Plano de evolução individualizado e acompanhamento'}
            </p>
          </div>

          {/* Price & Action Row */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block leading-none">
                {categoryLabel}
              </span>
              <div className="flex items-baseline gap-0.5 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-sans">
                  {lesson.price}€
                </span>
                {lesson.category === 'monthly' ? (
                  <span className="text-xs font-medium text-slate-500 ml-1">/mês</span>
                ) : lesson.category === 'pack' ? (
                  <span className="text-xs font-medium text-slate-500 ml-1">/pack</span>
                ) : (
                  <span className="text-xs font-medium text-slate-500 ml-1">/sessão</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {onViewDetails && (
                <button
                  id={`btn-details-card-${lesson.id}`}
                  onClick={() => onViewDetails(lesson)}
                  className="text-xs font-bold text-slate-700 hover:text-[#f18719] flex items-center gap-1 transition-colors cursor-pointer px-2 py-2 rounded-lg hover:bg-slate-50"
                  title="Ver detalhes completos"
                >
                  <span>Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                id={`btn-reservar-card-${lesson.id}`}
                onClick={() => onReserve(lesson)}
                className="bg-[#f18719] hover:bg-[#d9730c] text-white font-sans font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95 text-center shrink-0"
              >
                RESERVAR
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

