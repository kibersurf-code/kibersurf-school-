import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Waves, Sparkles, Check, ArrowRight, ArrowLeft, Clock, Compass } from 'lucide-react';
import { LESSONS } from '../data';
import { Lesson } from '../types';
import kidsSurfingCampImg from '../assets/images/kids_surfing_camp_1784797523248.jpg';
import kidSurferActionImg from '../assets/images/kid_surfer_action_1784797541296.jpg';

interface CampPageProps {
  onReservarClick?: () => void;
  onSelectLesson?: (lesson: Lesson) => void;
  onBackToServices?: () => void;
}

export default function CampPage({ onReservarClick, onSelectLesson, onBackToServices }: CampPageProps) {

  const handleBooking = (lessonId: string) => {
    const found = LESSONS.find(l => l.id === lessonId);
    if (found && onSelectLesson) {
      onSelectLesson(found);
    } else if (onReservarClick) {
      onReservarClick();
    }
  };

  const campPlans = [
    {
      id: 'camp-week-lunch',
      title: 'Semana Completa (com almoço)',
      subtitle: 'Segunda a Sexta • 09h00 às 18h00',
      description: 'A experiência definitiva de Verão. Inclui 2 aulas de surf diárias, almoço saudável, lanches, surfskate e supervisão contínua.',
      price: '220€',
      duration: '5 Dias',
      level: '6 aos 16 Anos',
      badge: 'Mais Popular',
      includes: [
        '2 sessões diárias de surf orientadas por treinadores FPS',
        'Almoço completo diário em restaurante parceiro + lanches',
        'Todo o equipamento técnico (pranchas soft e fatos)',
        'Seguro desportivo de acidentes pessoais completo',
        'Atividades de surfskate, jogos e educação do mar'
      ]
    },
    {
      id: 'camp-week-no-lunch',
      title: 'Semana Completa (sem almoço)',
      subtitle: 'Segunda a Sexta • 09h00 às 18h00',
      description: 'Programa semanal intensivo de 5 dias com 2 aulas diárias de surf e atividades para jovens. Os alunos trazem o seu almoço de casa.',
      price: '180€',
      duration: '5 Dias',
      level: '6 aos 16 Anos',
      badge: 'Económico',
      includes: [
        '2 sessões diárias de surf orientadas por treinadores FPS',
        'Lanches da manhã e tarde incluídos (traz almoço)',
        'Todo o equipamento técnico (pranchas e fatos)',
        'Seguro desportivo integral e supervisão contínua',
        'Acesso a vestiários com duche de água quente'
      ]
    },
    {
      id: 'camp-day-lunch',
      title: 'Diária Avulsa (com almoço)',
      subtitle: '1 Dia de Campo • 09h00 às 18h00',
      description: 'Perfeito para experimentar o ambiente do campo de férias ou para dias pontuais de férias com almoço incluído.',
      price: '55€',
      duration: '1 Dia',
      level: '6 aos 16 Anos',
      badge: 'Flexível',
      includes: [
        '2 sessões de surf no dia (manhã e tarde)',
        'Almoço saudável completo e lanches incluídos',
        'Prancha soft-foam e fato de neoprene higienizado',
        'Seguro desportivo para o dia de atividade'
      ]
    },
    {
      id: 'camp-day-no-lunch',
      title: 'Diária Avulsa (sem almoço)',
      subtitle: '1 Dia de Campo • 09h00 às 18h00',
      description: 'Um dia repleto de surf e animação na Praia de Matosinhos. O aluno traz a sua própria refeição de almoço.',
      price: '45€',
      duration: '1 Dia',
      level: '6 aos 16 Anos',
      badge: 'Diário',
      includes: [
        '2 sessões completas de surf no dia',
        'Lanches da manhã e tarde incluídos',
        'Equipamento técnico completo incluído',
        'Seguro desportivo integral'
      ]
    }
  ];

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
            Campos de Férias • 6 aos 16 Anos
          </span>
        </div>
      </div>

      {/* 1. HERO BANNER */}
      <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden flex items-center justify-center bg-slate-950">
        <img 
          src="/campodeferias.jpg" 
          alt="Campo de Férias de Surf - Kiber Surf School"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-105 scale-105"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8 space-y-4">
          <span className="text-[#f18719] font-black text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 inline-block">
            Praia de Matosinhos • Porto
          </span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase font-sans drop-shadow-md"
          >
            Campo de Férias de Surf
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-base text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A melhor aventura de Verão para crianças e jovens dos 6 aos 16 anos. Desporto, segurança, novas amizades e muita diversão no mar!
          </motion.p>
        </div>
      </div>

      {/* 2. SPLIT SECTION (IMAGE LEFT, SPECS & PRICING TABLE RIGHT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Photo & Quality Cards */}
          <div className="space-y-6">
            <div className="relative h-[320px] sm:h-[440px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group">
              <img 
                src={kidSurferActionImg} 
                alt="Crianças a surfar no Campo de Férias Kiber" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1">
                <span className="bg-[#f18719] text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Verão 2026
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase font-sans">
                  Segurança & Alegria no Mar
                </h4>
                <p className="text-xs text-slate-200">
                  Rácio reduzido de 1 treinador por 5 alunos para máxima segurança.
                </p>
              </div>
            </div>

            {/* Micro specs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3 text-left shadow-sm">
                <Award className="w-5 h-5 text-[#f18719] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-slate-950 uppercase">Treinadores FPS</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Credenciados pela Federação Portuguesa de Surf</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3 text-left shadow-sm">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-slate-950 uppercase">Seguro Integral</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Acidentes pessoais e responsabilidade civil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Dotted Table */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#f18719] bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full inline-block">
              Férias Escolares • Matosinhos
            </span>

            <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-950 tracking-tight uppercase leading-tight">
              A Opção de Campo Ideal na Praia de Matosinhos
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Localizada estrategicamente em frente à Praia de Matosinhos, a Kiber Surf School oferece instalações modernas e seguras preparadas para receber crianças e jovens com total conforto e comodidade.
            </p>

            {/* Technical Specs Row */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-200/80 py-4">
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#f18719]" />
                  Horário
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">09h às 18h</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#f18719]" />
                  Idades
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">6 aos 16 anos</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black text-slate-400 block tracking-wider mb-0.5 flex items-center gap-1">
                  <Waves className="w-3 h-3 text-[#f18719]" />
                  Preço
                </span>
                <span className="text-xs sm:text-sm font-black text-[#f18719]">Desde 45€ / dia</span>
              </div>
            </div>

            {/* Dotted pricing table matching the unified design */}
            <div className="bg-orange-50/40 border border-orange-100/80 rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-orange-200/60 pb-3">
                <h4 className="font-sans font-black text-xs sm:text-sm text-[#f18719] uppercase tracking-wider">
                  Planos & Modalidades de Inscrição
                </h4>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  Reserva Direta
                </span>
              </div>

              <div className="space-y-2">
                {[
                  { id: 'camp-week-lunch', label: 'Semana completa ', bold: 'com Almoço', detail: '(Seg a Sex)', price: '220€' },
                  { id: 'camp-week-no-lunch', label: 'Semana completa ', bold: 'sem Almoço', detail: '(traz almoço)', price: '180€' },
                  { id: 'camp-day-lunch', label: 'Dia inteiro ', bold: 'com Almoço', detail: '(09h às 18h)', price: '55€' },
                  { id: 'camp-day-no-lunch', label: 'Dia inteiro ', bold: 'sem Almoço', detail: '(09h às 18h)', price: '45€' },
                ].map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handleBooking(plan.id)}
                    className="w-full flex items-baseline justify-between gap-2 text-left py-2 px-3 rounded-xl hover:bg-[#f18719]/10 transition-all duration-150 group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
                      <span className="text-[#f18719] font-bold shrink-0 text-xs sm:text-sm">•</span>
                      <span className="text-slate-800 text-xs sm:text-sm font-medium truncate">
                        {plan.label}
                        <strong className="font-black text-slate-950 uppercase text-[11px] sm:text-[13px] ml-1">{plan.bold}</strong>{' '}
                        {plan.detail && <span className="text-slate-500 font-normal text-[11px] sm:text-xs">{plan.detail}</span>}
                      </span>
                      <div className="flex-1 border-b border-dotted border-slate-300 min-w-[12px] self-end mb-1" />
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-950 font-black text-xs sm:text-sm">
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

            {/* Inclusions */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] uppercase font-black tracking-widest text-slate-400 block">
                O que está incluído no Campo de Férias:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  '2 aulas de surf diárias com treinadores certificados FPS',
                  'Todo o equipamento técnico (pranchas e fatos)',
                  'Seguro de acidentes pessoais desportivo completo',
                  'Acompanhamento e supervisão permanente 100%',
                  'Atividades de surfskate, praia e jogos didáticos',
                  'Acesso a balneários com duches de água quente'
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

            {/* Primary Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => handleBooking('camp-week-lunch')}
                className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer active:scale-95"
              >
                Inscrever no Campo de Férias
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 3. COMPARISON CARDS (FORMAT 1 - CLEAN UNIFIED SYSTEM) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200/80">
        <div className="text-left mb-10">
          <span className="text-[#f18719] font-black text-xs uppercase tracking-widest block mb-1">
            Comparação de Modalidades
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-sans uppercase">
            Escolha o Plano Ideal
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#f18719]/40 transition-all duration-300 flex flex-col justify-between text-left space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-[#f18719] bg-orange-50 border border-orange-200/60 px-2.5 py-1 rounded-lg">
                    {plan.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">
                    {plan.duration}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-black text-slate-950 uppercase font-sans group-hover:text-[#f18719] transition-colors leading-snug">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {plan.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {plan.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                    Inclui:
                  </span>
                  <ul className="space-y-1.5">
                    {plan.includes.slice(0, 3).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-3.5 h-3.5 rounded-full bg-orange-50 text-[#f18719] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/60">
                          <Check className="w-2 h-2 stroke-[3]" />
                        </span>
                        <span className="line-clamp-2 leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Preço</span>
                  <span className="text-2xl font-black text-slate-950">{plan.price}</span>
                </div>

                <button
                  onClick={() => handleBooking(plan.id)}
                  className="w-full bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-sm transition-all duration-200 cursor-pointer text-center"
                >
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
