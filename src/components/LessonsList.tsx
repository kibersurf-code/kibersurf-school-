import React, { useState, useEffect, useRef } from 'react';
import { LESSONS, SERVICE_DETAILS, SERVICES } from '../data';
import { Lesson, LessonCategory } from '../types';
import { ShieldCheck, Star, SlidersHorizontal, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceDetailView from './ServiceDetailView';

interface LessonsListProps {
  onSelectLesson: (lesson: Lesson) => void;
  selectedFilter: 'all' | 'lessons' | LessonCategory | string;
  setSelectedFilter: (filter: any) => void;
  initialDetailKey?: string | null;
}

interface CategoryInfo {
  title: string;
  badge: string;
  description: string;
  countLabel: string;
  bgImage?: string;
}

const CATEGORY_INFO_MAP: Record<string, CategoryInfo> = {
  'aula-avulso': {
    title: 'AULA AVULSO',
    badge: 'Aulas de Surf • Sessão Individual',
    description: 'Aula avulsa de surf em grupo na Praia de Matosinhos. Perfeita para uma primeira experiência ou prática ocasional, com todo o equipamento e seguro incluídos.',
    countLabel: 'Aula Avulsa',
    bgImage: '/avulso.jpg',
  },
  'private': {
    title: 'PRIVADAS',
    badge: 'Coaching Exclusivo • 100% Personalizado',
    description: 'Treino 1-para-1 ou em dupla com instrutor dedicado em exclusivo. O caminho mais rápido para evolução técnica com correções em tempo real dentro e fora de água.',
    countLabel: 'Aulas Privadas',
    bgImage: 'https://images.unsplash.com/photo-1543096222-72de739f7917?auto=format&fit=crop&w=2000&q=80',
  },
  'pack': {
    title: 'PACKS DE AULAS',
    badge: 'Aulas de Surf • Packs Económicos',
    description: 'Packs flexíveis de 3, 5 e 10 aulas com validade alargada para consolidar a técnica e evoluir de forma consistente com os nossos treinadores credenciados FPS.',
    countLabel: 'Packs de Aulas',
    bgImage: '/packs.jpg',
  },
  'monthly': {
    title: 'MENSALIDADES',
    badge: 'Treino Regular • Planos Mensais',
    description: 'Planos mensais de Surf e Treino Funcional semanal para fazer do surf a tua rotina com acompanhamento contínuo na Praia de Matosinhos.',
    countLabel: 'Mensalidades',
    bgImage: '/mensalidade.jpg',
  },
  'rental': {
    title: 'ALUGUER',
    badge: 'Material Técnico • Praia de Matosinhos',
    description: 'Aluguer de pranchas de surf de alta flutuação ou fibra/epoxy e fatos térmicos de neoprene de última geração. Balneários com duches quentes incluídos.',
    countLabel: 'Opções de Aluguer',
    bgImage: '/loja.jpg',
  },
  'group': {
    title: 'GRUPOS ADULTOS',
    badge: 'Método Coletivo • Praia de Matosinhos',
    description: 'Aprende e evolui na companhia de outros surfistas. Turmas dinâmicas divididas rigorosamente por nível de experiência e rácio reduzido (máximo 6 alunos por treinador).',
    countLabel: 'Aulas de Grupo',
    bgImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2000&q=80',
  },
  'kids': {
    title: 'GRUPOS CRIANÇAS',
    badge: 'Kids & Teens • 6 aos 14 Anos',
    description: 'Aulas desenhadas para os mais novos com foco total na segurança, diversão e aprendizagem do respeito pelo oceano com rácio reduzido (1 treinador para 4 alunos).',
    countLabel: 'Opções Kids',
    bgImage: '/criancas.jpg',
  },
  'trip': {
    title: 'SURF TRIPS',
    badge: 'Expedição Técnica • The Wave Bristol',
    description: 'Fins de semana intensivos de evolução em piscina de ondas artificiais de classe mundial com vídeo-análise frame-a-frame e coaching de alto rendimento.',
    countLabel: 'Surf Trips',
    bgImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2000&q=80',
  },
  'erasmus': {
    title: 'ERASMUS E RESIDENTES',
    badge: 'Comunidade Internacional • Descontos Erasmus',
    description: 'Condições e tarifas exclusivas para estudantes universitários e internacionais no Porto. Treinadores multilingues e integração na comunidade Kiber.',
    countLabel: 'Opções Erasmus',
    bgImage: '/eramus.jpg',
  },
  'camp': {
    title: 'CAMPOS DE FÉRIAS',
    badge: 'Campos de Férias • 6 aos 16 Anos',
    description: 'Programas semanais e diários de Verão na Praia de Matosinhos com 2 sessões diárias de surf, almoço, surfskate, atividades didáticas e supervisão contínua.',
    countLabel: 'Campos de Férias',
    bgImage: '/criancas.jpg',
  },
  'all': {
    title: 'AULAS DE SURF & SERVIÇOS',
    badge: 'Kiber Surf School • Praia de Matosinhos',
    description: 'Descobre todas as nossas modalidades na Praia de Matosinhos. Aulas para todas as idades, packs flexíveis, aluguer de equipamento e experiências de surf completas.',
    countLabel: 'Todos os Serviços',
    bgImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=2000&q=80',
  },
};

export default function LessonsList({ 
  onSelectLesson, 
  selectedFilter, 
  setSelectedFilter,
  initialDetailKey = null
}: LessonsListProps) {
  const [activeDetailKey, setActiveDetailKey] = useState<string | null>(initialDetailKey);

  // Drag-to-scroll & horizontal navigation state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sync with prop changes
  useEffect(() => {
    setActiveDetailKey(initialDetailKey);
  }, [selectedFilter, initialDetailKey]);

  // Check scroll bounds to display/hide arrows
  const updateScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    updateScrollBounds();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollBounds, { passive: true });
      window.addEventListener('resize', updateScrollBounds);
      return () => {
        container.removeEventListener('scroll', updateScrollBounds);
        window.removeEventListener('resize', updateScrollBounds);
      };
    }
  }, [selectedFilter]);

  // Normalized filter mapping
  const getNormalizedFilter = (filter: string): string => {
    if (filter === 'aula-avulso' || filter === 'single-lesson' || filter === 'single') return 'aula-avulso';
    if (filter === 'packs' || filter === 'pack') return 'pack';
    if (filter === 'mensalidades' || filter === 'monthly') return 'monthly';
    if (filter === 'aulas-privadas' || filter === 'private') return 'private';
    if (filter === 'grupos-adultos' || filter === 'group') return 'group';
    if (filter === 'grupos-criancas' || filter === 'kids') return 'kids';
    if (filter === 'erasmus') return 'erasmus';
    if (filter === 'aluguer' || filter === 'rental') return 'rental';
    if (filter === 'sup') return 'sup';
    if (filter === 'campos-ferias' || filter === 'camp') return 'camp';
    if (filter === 'surf-trips' || filter === 'trip') return 'trip';
    return 'all';
  };

  const normalizedFilter = getNormalizedFilter(selectedFilter || 'all');
  const categoryInfo = CATEGORY_INFO_MAP[normalizedFilter] || CATEGORY_INFO_MAP['all'];

  // Center active filter button in view when changed
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector('[data-active="true"]') as HTMLElement;
      if (activeBtn) {
        const container = scrollContainerRef.current;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const containerWidth = container.clientWidth;
        const targetScroll = btnLeft - (containerWidth / 2) + (btnWidth / 2);
        container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
      setTimeout(updateScrollBounds, 350);
    }
  }, [selectedFilter, normalizedFilter]);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag scroll speed
    if (Math.abs(walk) > 6) {
      setIsDragging(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
    updateScrollBounds();
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsDragging(false);
  };

  const scrollByAmount = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(updateScrollBounds, 350);
    }
  };

  // Filter definitions for category tabs strictly derived from global SERVICES
  const FILTER_TABS: { id: string; label: string }[] = [
    { id: 'all', label: 'Todos os Serviços' },
    ...SERVICES.map(s => ({ id: s.filterKey, label: s.name }))
  ];

  // Map lesson to its corresponding detail key
  const getDetailKeyForLesson = (lesson: Lesson): string => {
    if (lesson.serviceKey && SERVICE_DETAILS[lesson.serviceKey]) {
      return lesson.serviceKey;
    }
    if (lesson.id === 'single-lesson' || lesson.category === 'group' || lesson.category === 'pack') {
      return 'aulas-grupo';
    }
    if (lesson.category === 'private' || lesson.id.includes('private')) {
      return 'aulas-privadas';
    }
    if (lesson.category === 'monthly' || lesson.id.includes('monthly')) {
      return 'mensalidades';
    }
    if (lesson.category === 'kids' || lesson.id.includes('kids')) {
      return 'kids';
    }
    if (lesson.category === 'erasmus' || lesson.id.includes('erasmus')) {
      return 'erasmus';
    }
    if (lesson.category === 'camp' || lesson.id.includes('camp')) {
      return 'campo-ferias';
    }
    if (lesson.category === 'trip' || lesson.id.includes('trip') || lesson.id.includes('wave')) {
      return 'surf-trip';
    }
    if (lesson.category === 'rental' || lesson.id.includes('rental')) {
      return 'aluguer';
    }
    return 'aulas-grupo';
  };

  const handleCardViewDetails = (lesson: Lesson) => {
    const detailKey = getDetailKeyForLesson(lesson);
    setActiveDetailKey(detailKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tabId: string) => {
    setActiveDetailKey(null);
    setSelectedFilter(tabId);
  };

  // Strictly filter and sort lessons based on the active selection
  const getFilteredLessons = (): Lesson[] => {
    switch (normalizedFilter) {
      case 'aula-avulso':
        return LESSONS.filter(l => l.id === 'single-lesson');
      case 'private':
        return LESSONS.filter(l => l.category === 'private');
      case 'pack':
        return LESSONS.filter(l => l.category === 'pack');
      case 'monthly':
        return LESSONS.filter(l => l.category === 'monthly');
      case 'rental':
        return LESSONS.filter(l => l.category === 'rental');
      case 'group':
        return LESSONS.filter(l => l.id === 'single-lesson' || (l.category === 'group' && l.id !== 'kids-surf'));
      case 'kids':
        return LESSONS.filter(l => l.category === 'kids' || l.id === 'kids-surf');
      case 'trip':
        return LESSONS.filter(l => l.category === 'trip');
      case 'erasmus':
        return LESSONS.filter(l => l.category === 'erasmus');
      case 'camp':
        return LESSONS.filter(l => l.category === 'camp');
      default: {
        // When 'all', list all lessons ordered by the official SERVICES order
        const orderedLessons: Lesson[] = [];
        const seenIds = new Set<string>();
        for (const service of SERVICES) {
          const matchingLessons = LESSONS.filter(l => {
            if (service.lessonIds && service.lessonIds.includes(l.id)) return true;
            if (service.filterKey === 'aula-avulso' && l.id === 'single-lesson') return true;
            if (service.filterKey === l.category) return true;
            return false;
          });
          for (const lesson of matchingLessons) {
            if (!seenIds.has(lesson.id)) {
              seenIds.add(lesson.id);
              orderedLessons.push(lesson);
            }
          }
        }
        for (const lesson of LESSONS) {
          if (!seenIds.has(lesson.id)) {
            seenIds.add(lesson.id);
            orderedLessons.push(lesson);
          }
        }
        return orderedLessons;
      }
    }
  };

  const filteredLessons = getFilteredLessons();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Header Banner & Dynamic Title */}
      <section className="relative text-white pt-24 pb-14 border-b border-white/10 overflow-hidden bg-slate-950">
        {/* Dynamic Background Image with Smooth Cinematic Overlays */}
        {categoryInfo.bgImage ? (
          <>
            <img 
              src={categoryInfo.bgImage} 
              alt={categoryInfo.title}
              className={`absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-700 brightness-105 contrast-105 ${
                normalizedFilter === 'rental' || normalizedFilter === 'pack' 
                  ? 'object-[center_68%]' 
                  : 'object-center'
              }`}
            />
            {/* Reduced opacity overlay so all category images are vibrant and clearly visible */}
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-[#101014] to-[#16161c]" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          <span className="text-[#f18719] font-extrabold text-xs tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md border border-orange-500/30 px-4 py-1.5 rounded-full inline-block shadow-md">
            {categoryInfo.badge}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {categoryInfo.title}
          </h1>

          <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            {categoryInfo.description}
          </p>

          {/* Category Filter Chips Bar with Smooth Horizontal Drag, Scroll & Navigation Arrows */}
          <div className="pt-8 relative max-w-5xl mx-auto px-2 sm:px-6">
            
            {/* Left Scroll Navigation Button */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollByAmount(-240)}
                aria-label="Rolar filtros para a esquerda"
                className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-black/80 hover:bg-[#f18719] text-white border border-white/20 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Left Fade Gradient Mask */}
            {canScrollLeft && (
              <div className="absolute left-2 sm:left-6 top-0 bottom-0 w-8 bg-gradient-to-r from-[#101014] to-transparent z-10 pointer-events-none" />
            )}

            {/* Scrollable & Draggable Filter Container */}
            <div 
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar select-none touch-pan-x scroll-smooth px-2 ${
                isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FILTER_TABS.map((tab) => {
                const isActive = !activeDetailKey && normalizedFilter === getNormalizedFilter(tab.id);
                return (
                  <button
                    key={tab.id}
                    data-active={isActive ? 'true' : 'false'}
                    onClick={(e) => {
                      if (isDragging) {
                        e.preventDefault();
                        return;
                      }
                      handleTabChange(tab.id);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 select-none cursor-pointer ${
                      isActive
                        ? 'bg-[#f18719] text-white shadow-md scale-105'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Right Fade Gradient Mask */}
            {canScrollRight && (
              <div className="absolute right-2 sm:right-6 top-0 bottom-0 w-8 bg-gradient-to-l from-[#101014] to-transparent z-10 pointer-events-none" />
            )}

            {/* Right Scroll Navigation Button */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollByAmount(240)}
                aria-label="Rolar filtros para a direita"
                className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-black/80 hover:bg-[#f18719] text-white border border-white/20 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

          </div>

        </div>
      </section>

      {/* 2. Main Content: Detail View OR Comparison Card Grid */}
      {activeDetailKey && SERVICE_DETAILS[activeDetailKey] ? (
        <ServiceDetailView
          detail={SERVICE_DETAILS[activeDetailKey]}
          onBack={() => setActiveDetailKey(null)}
          onSelectLesson={onSelectLesson}
        />
      ) : (
        <section className="py-14 sm:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Grid Header Counter */}
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-200/80 text-left">
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-sans text-slate-950 uppercase tracking-tight">
                  {categoryInfo.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {filteredLessons.length} {filteredLessons.length === 1 ? 'opção disponível' : 'opções disponíveis'}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-500">
                <Sparkles className="w-4 h-4 text-[#f18719]" />
                <span>Preços com IVA e seguro incluídos</span>
              </div>
            </div>

            {/* UNIFIED CARDS GRID (FORMAT 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredLessons.map((lesson) => (
                <ServiceCard
                  key={lesson.id}
                  lesson={lesson}
                  onReserve={onSelectLesson}
                  onViewDetails={handleCardViewDetails}
                />
              ))}
            </div>

            {/* If no lessons found */}
            {filteredLessons.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
                <p className="text-slate-600 font-medium">Nenhum serviço encontrado nesta categoria.</p>
                <button
                  onClick={() => setSelectedFilter('all')}
                  className="bg-[#f18719] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl cursor-pointer"
                >
                  Ver Todos os Serviços
                </button>
              </div>
            )}

            {/* Quality, Security & Cancellation Credentials */}
            <div className="mt-16 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 shadow-sm">
              <div className="flex gap-4 items-start text-left">
                <div className="p-3 bg-orange-50 text-[#f18719] rounded-xl border border-orange-200/60 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 font-sans text-xs sm:text-sm uppercase tracking-wide">Escola Registada FPS</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Reconhecida oficialmente pela Federação Portuguesa de Surf e Turismo de Portugal. Instrutores certificados.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start text-left">
                <div className="p-3 bg-orange-50 text-[#f18719] rounded-xl border border-orange-200/60 shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 font-sans text-xs sm:text-sm uppercase tracking-wide">Seguro Desportivo Total</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Todas as reservas incluem seguro de responsabilidade civil e acidentes pessoais durante a permanência no mar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start text-left">
                <div className="p-3 bg-orange-50 text-[#f18719] rounded-xl border border-orange-200/60 shrink-0">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 font-sans text-xs sm:text-sm uppercase tracking-wide">Cancelamento Flexível</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Cancela ou altera o horário das tuas aulas até 24 horas antes sem qualquer taxa ou perguntas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
