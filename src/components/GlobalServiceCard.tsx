import React from 'react';
import { Check, ArrowRight, Sparkles, Clock, Compass, Calendar, ChevronRight } from 'lucide-react';
import { GlobalService } from '../types';

interface GlobalServiceCardProps {
  key?: React.Key;
  service: GlobalService;
  index?: number;
  onAction: () => void;
  onReserve?: () => void;
}

export default function GlobalServiceCard({
  service,
  index,
  onAction,
  onReserve
}: GlobalServiceCardProps) {
  const isTrip = service.id === 'surf-trips' || service.filterKey === 'trip';
  const isCtaCalendar = service.cta.toLowerCase().includes('calend');

  return (
    <div
      id={`global-service-card-${service.id}`}
      className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#f18719]/40 transition-all duration-300 flex flex-col justify-between text-left group h-full"
    >
      {/* 1. Panoramic Top Media Banner */}
      <div 
        onClick={onAction}
        className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 cursor-pointer"
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

        {/* Top Left Orange Badge */}
        {(service.badge || service.priceLabel) && (
          <span className="absolute top-3.5 left-3.5 bg-[#f18719] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-sm z-10">
            {service.badge || service.priceLabel}
          </span>
        )}

        {/* Bottom Level & Duration Chips Overlay */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
          <span className="bg-[#18181b]/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/10 shrink-0">
            <Compass className="w-3.5 h-3.5 text-[#f18719]" />
            <span className="truncate max-w-[130px]">{service.level || 'Todos os Níveis'}</span>
          </span>
          <span className="bg-white text-slate-900 text-xs font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-slate-600" />
            <span className="truncate max-w-[130px]">{service.duration || '2 Horas'}</span>
          </span>
        </div>
      </div>

      {/* 2. Card Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
        
        {/* Title & Description */}
        <div className="space-y-3">
          <div>
            <h3 
              onClick={onAction}
              className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight leading-snug text-slate-950 group-hover:text-[#f18719] transition-colors cursor-pointer"
            >
              {service.name}
            </h3>
            
            {service.tagline && (
              <p className="text-xs font-bold text-[#f18719] uppercase tracking-wide mt-1">
                {service.tagline}
              </p>
            )}

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
              {service.description}
            </p>
          </div>
        </div>

        {/* 3. Bottom Block: Kiber Tech Box + Price & Actions */}
        <div className="space-y-4 pt-2">
          
          {/* Kiber Tech Banner */}
          {service.techTouch && (
            <div className="bg-[#fff9f2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#f18719] shrink-0" />
              <p className="text-xs text-slate-700 font-medium truncate leading-tight">
                <strong className="text-[#f18719] font-black uppercase text-[11px] tracking-wide mr-1.5">
                  KIBER:
                </strong>
                {service.techTouch}
              </p>
            </div>
          )}

          {/* Price & Action Row */}
          {service.priceLabel ? (
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block leading-none">
                  Preço Oficial
                </span>
                <div className="mt-1">
                  <span className="text-lg sm:text-xl font-black text-slate-950 tracking-tight font-sans">
                    {service.priceLabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id={`btn-action-card-${service.id}`}
                  onClick={onAction}
                  className="bg-[#f18719] hover:bg-[#d9730c] text-white font-sans font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95 text-center flex items-center gap-1.5 shrink-0"
                >
                  {isCtaCalendar && <Calendar className="w-3.5 h-3.5 text-white" />}
                  <span>{service.cta}</span>
                  {!isCtaCalendar && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-3 border-t border-slate-100 flex items-center">
              <button
                id={`btn-action-card-${service.id}`}
                onClick={onAction}
                className="w-full bg-[#f18719] hover:bg-[#d9730c] text-white font-sans font-black text-xs uppercase tracking-wider py-3 px-5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95 text-center flex items-center justify-center gap-2"
              >
                {isCtaCalendar && <Calendar className="w-4 h-4 text-white" />}
                <span>{service.cta}</span>
                {!isCtaCalendar && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
