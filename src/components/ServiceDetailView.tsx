import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowLeft, Shield, Award, Sparkles, Clock, Compass, Waves, ArrowRight } from 'lucide-react';
import { ServiceDetailItem, Lesson } from '../types';
import { LESSONS } from '../data';

interface ServiceDetailViewProps {
  detail: ServiceDetailItem;
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

export default function ServiceDetailView({ detail, onBack, onSelectLesson }: ServiceDetailViewProps) {
  
  const handleBookingOption = (planId: string) => {
    const found = LESSONS.find(l => l.id === planId) || {
      id: planId,
      category: 'group',
      title: `${detail.title} - ${planId}`,
      description: detail.description,
      price: detail.plans.find(p => p.id === planId)?.priceNum || 30,
      duration: detail.duration,
      includes: detail.includes,
      level: detail.level as any,
      image: detail.image
    };
    onSelectLesson(found as Lesson);
  };

  const handleMainBooking = () => {
    if (detail.plans && detail.plans.length > 0) {
      handleBookingOption(detail.plans[0].id);
    } else {
      const found = LESSONS.find(l => l.id === detail.id || l.serviceKey === detail.serviceKey);
      if (found) {
        onSelectLesson(found);
      } else {
        onSelectLesson({
          id: detail.id,
          category: 'group',
          title: detail.title,
          description: detail.description,
          price: 30,
          duration: detail.duration,
          includes: detail.includes,
          level: detail.level as any,
          image: detail.image
        });
      }
    }
  };

  return (
    <div className="bg-white text-slate-800 pb-20 animate-in fade-in duration-300">
      
      {/* Top Header Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#f18719] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#f18719]" />
            <span>Voltar a todos os serviços</span>
          </button>
          
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline-block">
            {detail.categoryBadge}
          </span>
        </div>
      </div>

      {/* Main Split Section (Editorial Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: High Quality Visual Showcase */}
          <div className="space-y-6">
            <div className="relative h-[320px] sm:h-[440px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group">
              <img
                src={detail.image}
                alt={detail.title}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  detail.id === 'aluguer' || detail.serviceKey === 'aluguer'
                    ? 'object-[center_65%] brightness-105'
                    : 'object-center'
                }`}
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${
                detail.id === 'aluguer' || detail.serviceKey === 'aluguer'
                  ? 'bg-gradient-to-t from-black/45 via-transparent to-transparent'
                  : 'bg-gradient-to-t from-black/60 via-black/10 to-transparent'
              }`} />

              {/* Bottom Image Tag */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1">
                <span className="bg-[#f18719] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block">
                  Praia de Matosinhos • Porto
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase font-sans drop-shadow-sm">
                  {detail.title}
                </h4>
                <p className="text-xs text-slate-200 font-medium">
                  {detail.tagline}
                </p>
              </div>
            </div>

            {/* Quality & Security Micro-Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 flex items-start gap-3 text-left">
                <Award className="w-5 h-5 text-[#f18719] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-slate-950 uppercase">Treinadores FPS</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Certificados pela Federação Portuguesa de Surf</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 flex items-start gap-3 text-left">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-slate-950 uppercase">Seguro Total</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Cobertura de acidentes pessoais incluída</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Service Information & Pricing */}
          <div className="space-y-8 text-left">
            
            {/* Header Area */}
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#f18719] bg-orange-50 border border-orange-200/60 px-3.5 py-1.5 rounded-full inline-block">
                {detail.categoryBadge}
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-slate-950 tracking-tight uppercase leading-tight">
                {detail.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                {detail.description}
              </p>
            </div>

            {/* Essential Specs Grid (Duration, Level, Price) */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200/80 py-4">
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#f18719]" />
                  Duração
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{detail.duration}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#f18719]" />
                  Nível
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{detail.level}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5 flex items-center gap-1">
                  <Waves className="w-3 h-3 text-[#f18719]" />
                  Preço
                </span>
                <span className="text-xs sm:text-sm font-black text-[#f18719]">{detail.priceDisplay}</span>
              </div>
            </div>

            {/* Plans / Options Table with Dotted Lines and Quick Reserve buttons */}
            {detail.plans && detail.plans.length > 0 && (
              <div className="bg-orange-50/40 border border-orange-100/80 rounded-2xl p-5 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-orange-200/60 pb-3">
                  <h4 className="font-sans font-black text-xs sm:text-sm text-[#f18719] uppercase tracking-wider">
                    Opções & Planos Disponíveis
                  </h4>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                    Preço por pessoa
                  </span>
                </div>

                <div className="space-y-2">
                  {detail.plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => handleBookingOption(plan.id)}
                      className="w-full flex items-baseline justify-between gap-2 text-left py-2 px-3 rounded-xl hover:bg-[#f18719]/10 transition-all duration-150 group cursor-pointer"
                    >
                      <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
                        <span className="text-[#f18719] font-bold shrink-0 text-xs sm:text-sm">•</span>
                        <span className="text-slate-800 text-xs sm:text-sm font-medium truncate">
                          {plan.label}
                          <strong className="font-black text-slate-950 uppercase text-[11px] sm:text-[13px] ml-1">
                            {plan.boldLabel}
                          </strong>{' '}
                          {plan.detail && (
                            <span className="text-slate-500 font-normal text-[11px] sm:text-xs">
                              {plan.detail}
                            </span>
                          )}
                        </span>
                        <div className="flex-1 border-b border-dotted border-slate-300 min-w-[12px] self-end mb-1" />
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-slate-950 font-black text-xs sm:text-sm">
                          {plan.price}
                        </span>
                        <span className="text-[10px] font-black text-white bg-[#f18719] hover:bg-[#db760f] px-3 py-1 rounded-lg shadow-sm uppercase tracking-wider transition-all duration-150 shrink-0">
                          Reservar
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions Panel */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase font-black tracking-widest text-slate-400 block">
                O que está incluído:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {detail.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-orange-50 text-[#f18719] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/60">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kiber Tech Advantage (when available) */}
            {detail.techTouch && (
              <div className="bg-orange-50/70 border border-orange-200/60 rounded-2xl p-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#f18719] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#f18719] block">
                    Vantagem Kiber Tech
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
                    {detail.techTouch}
                  </p>
                </div>
              </div>
            )}

            {/* Main Booking Call to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="btn-reservar-detail-main"
                onClick={handleMainBooking}
                className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center flex-1 active:scale-95"
              >
                Reservar Agora
              </button>

              <button
                onClick={onBack}
                className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-colors cursor-pointer text-center"
              >
                Ver Outros Serviços
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
