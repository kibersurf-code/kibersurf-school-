import React, { useState, useMemo, useRef } from 'react';
import { 
  Waves, 
  Users, 
  ArrowRight, 
  Compass, 
  Sun, 
  ShieldCheck, 
  Layers,
  ShoppingBag,
  Calendar,
  Package,
  GraduationCap,
  UserCheck,
  Plane,
  Baby,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Lesson } from '../types';
import { LESSONS } from '../data';
import ServiceCard from './ServiceCard';

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
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const scrollFilters = (direction: 'left' | 'right') => {
    if (filterScrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      filterScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Find lessons helper
  const getLessonById = (id: string): Lesson | undefined => {
    return LESSONS.find(l => l.id === id);
  };

  // Grouped definitions
  const aulaAvulsoList = [
    getLessonById('single-lesson'),
  ].filter(Boolean) as Lesson[];

  const aluguerList = [
    getLessonById('rental-board-wetsuit-1h'),
    getLessonById('rental-board-wetsuit-2h'),
    getLessonById('rental-board-wetsuit-4h'),
    getLessonById('rental-board-wetsuit-1day'),
    getLessonById('rental-board-wetsuit-transport-2h'),
    getLessonById('rental-board-1h'),
    getLessonById('rental-wetsuit-1h'),
    getLessonById('rental-board-wetsuit-2h-erasmus'),
  ].filter(Boolean) as Lesson[];

  const mensalidadesList = [
    getLessonById('monthly-1x-surf'),
    getLessonById('monthly-2x-surf'),
    getLessonById('monthly-1x-funcional'),
    getLessonById('monthly-1x-surf-1x-funcional'),
    getLessonById('monthly-2x-surf-1x-funcional'),
  ].filter(Boolean) as Lesson[];

  const packsList = [
    getLessonById('pack-3-lessons'),
    getLessonById('pack-5-lessons'),
    getLessonById('pack-10-lessons'),
  ].filter(Boolean) as Lesson[];

  const gruposAdultosList = [
    getLessonById('single-lesson'),
    getLessonById('pack-3-lessons'),
    getLessonById('pack-5-lessons'),
    getLessonById('pack-10-lessons'),
    getLessonById('surf-guide'),
  ].filter(Boolean) as Lesson[];

  const gruposCriancasList = [
    getLessonById('kids-surf'),
    getLessonById('camp-week-lunch'),
    getLessonById('camp-week-no-lunch'),
    getLessonById('camp-day-lunch'),
  ].filter(Boolean) as Lesson[];

  const surfTripsList = [
    getLessonById('surftrip-bristol-member'),
    getLessonById('surftrip-bristol-general'),
  ].filter(Boolean) as Lesson[];

  const erasmusList = [
    getLessonById('erasmus-lesson-2h'),
    getLessonById('erasmus-pack-3'),
    getLessonById('rental-board-wetsuit-2h-erasmus'),
  ].filter(Boolean) as Lesson[];

  const aulasPrivadasList = [
    getLessonById('private-1-person'),
    getLessonById('private-2-people'),
  ].filter(Boolean) as Lesson[];

  const camposFeriasList = [
    getLessonById('camp-week-lunch'),
    getLessonById('camp-week-no-lunch'),
    getLessonById('camp-day-lunch'),
    getLessonById('camp-day-no-lunch'),
  ].filter(Boolean) as Lesson[];

  // 11 filter tabs requested by the user
  const categoryTabs = [
    { id: 'all', label: 'Todos os Serviços', icon: Layers },
    { id: 'aula-avulso', label: 'Aula Avulso', icon: Waves },
    { id: 'aluguer', label: 'Aluguer', icon: ShoppingBag },
    { id: 'mensalidades', label: 'Mensalidades', icon: Calendar },
    { id: 'packs', label: 'Packs', icon: Package },
    { id: 'grupos-adultos', label: 'Grupos Adultos', icon: Users },
    { id: 'grupos-criancas', label: 'Grupos Crianças', icon: Baby },
    { id: 'surf-trips', label: 'Surf Trips', icon: Plane },
    { id: 'erasmus', label: 'Erasmus', icon: GraduationCap },
    { id: 'aulas-privadas', label: 'Aulas Privadas', icon: UserCheck },
    { id: 'campos-ferias', label: 'Campos de Férias', icon: Sun },
  ];

  // Filtered view when a specific filter is clicked
  const filteredView = useMemo(() => {
    switch (activeCategoryFilter) {
      case 'aula-avulso':
        return {
          title: 'AULA AVULSO',
          subtitle: 'Sessão individual com prancha, fato de neoprene e seguro desportivo incluídos.',
          badge: 'Iniciação & Aperfeiçoamento',
          categoryKey: 'single',
          items: aulaAvulsoList,
        };
      case 'aluguer':
        return {
          title: 'ALUGUER',
          subtitle: 'Pranchas soft e epoxy, fatos térmicos e transporte direto até à praia.',
          badge: 'Material Oficial FPS',
          categoryKey: 'rental',
          items: aluguerList,
        };
      case 'mensalidades':
        return {
          title: 'MENSALIDADES',
          subtitle: 'Planos mensais de surf e preparação física funcional com acompanhamento contínuo.',
          badge: 'Evolução Contínua',
          categoryKey: 'monthly',
          items: mensalidadesList,
        };
      case 'packs':
        return {
          title: 'PACKS',
          subtitle: 'Packs de 3, 5 e 10 sessões flexíveis válidos durante toda a temporada.',
          badge: 'Melhor Valor',
          categoryKey: 'packs',
          items: packsList,
        };
      case 'grupos-adultos':
        return {
          title: 'GRUPOS ADULTOS',
          subtitle: 'Aulas em grupo com turmas niveladas e rácio reduzido de alunos por treinador.',
          badge: 'Espírito de Equipa',
          categoryKey: 'group',
          items: gruposAdultosList,
        };
      case 'grupos-criancas':
        return {
          title: 'GRUPOS CRIANÇAS',
          subtitle: 'Aulas desenhadas para os 6 aos 14 anos com foco absoluto em diversão e segurança no mar.',
          badge: 'Kids & Teens • 6 aos 14 Anos',
          categoryKey: 'kids',
          items: gruposCriancasList,
        };
      case 'surf-trips':
        return {
          title: 'SURF TRIPS',
          subtitle: 'Viagens guiadas de surf coaching para piscinas de ondas e destinos icónicos.',
          badge: 'The Wave Bristol & Expedições',
          categoryKey: 'trip',
          items: surfTripsList,
        };
      case 'erasmus':
        return {
          title: 'ERASMUS',
          subtitle: 'Tarifas e condições especiais para a comunidade universitária internacional no Porto.',
          badge: 'Comunidade Internacional',
          categoryKey: 'erasmus',
          items: erasmusList,
        };
      case 'aulas-privadas':
        return {
          title: 'AULAS PRIVADAS',
          subtitle: 'Treino exclusivo 1-a-1 ou 2 pessoas com análise detalhada e evolução rápida.',
          badge: 'Acompanhamento Exclusivo',
          categoryKey: 'private',
          items: aulasPrivadasList,
        };
      case 'campos-ferias':
        return {
          title: 'CAMPOS DE FÉRIAS',
          subtitle: 'Programas diários e semanais de Verão com 2 sessões de surf, almoço e atividades na praia.',
          badge: 'Campos de Férias • 6 aos 16 Anos',
          categoryKey: 'camp',
          items: camposFeriasList,
        };
      default:
        return null;
    }
  }, [activeCategoryFilter]);

  return (
    <section id="servicos-home" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-sans uppercase">
            Os Nossos Serviços de Surf
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Descobre todas as nossas modalidades na Praia de Matosinhos. Aulas para todas as idades, coaching personalizado, packs flexíveis, aluguer de equipamento de topo e experiências exclusivas.
          </p>

          {/* Quick Filter Pill Buttons with all 11 options + Left/Right Navigation Arrows */}
          <div className="relative flex items-center gap-2 pt-4 pb-2">
            <button
              onClick={() => scrollFilters('left')}
              aria-label="Deslocar filtros para a esquerda"
              className="flex w-9 h-9 rounded-xl bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/90 shadow-sm items-center justify-center shrink-0 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div 
              ref={filterScrollRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none scroll-smooth flex-1 py-1"
            >
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategoryFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategoryFilter(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#f18719] text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollFilters('right')}
              aria-label="Deslocar filtros para a direita"
              className="flex w-9 h-9 rounded-xl bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/90 shadow-sm items-center justify-center shrink-0 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Selected Filter View or All Services Overview */}
        {filteredView ? (
          <div className="space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-sans text-slate-950 uppercase tracking-tight">
                  {filteredView.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">
                  {filteredView.items.length} {filteredView.items.length === 1 ? 'opção disponível' : 'opções disponíveis'}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 self-start sm:self-auto">
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#f18719]" />
                  <span>Preços com IVA e seguro incluídos</span>
                </div>

                <button
                  onClick={() => onNavigateToCategory(filteredView.categoryKey)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f18719] hover:text-[#db760f] transition-colors cursor-pointer group"
                >
                  <span>Ver todos os detalhes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredView.items.map((lesson) => (
                <ServiceCard
                  key={lesson.id}
                  lesson={lesson}
                  onReserve={onSelectLesson}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-20">

            {/* AULAS DE SURF & PACKS */}
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-[#f18719] text-xs font-black uppercase tracking-wider">
                    <Waves className="w-4 h-4" />
                    <span>Iniciação • Aperfeiçoamento • Performance</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-sans text-slate-950 uppercase tracking-tight mt-1">
                    Aulas de Surf &amp; Packs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Aulas avulsas, packs de sessões flexíveis, mensalidades de treino e coaching privado 1-a-1.
                  </p>
                </div>

                <button
                  onClick={() => onNavigateToCategory('aulas')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f18719] hover:text-[#db760f] transition-colors cursor-pointer shrink-0 self-start sm:self-auto group"
                >
                  <span>Ver todas as aulas de surf</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                {[
                  ...aulaAvulsoList,
                  ...packsList,
                  ...aulasPrivadasList,
                  ...mensalidadesList
                ].map((lesson) => (
                  <ServiceCard
                    key={lesson.id}
                    lesson={lesson}
                    onReserve={onSelectLesson}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </div>

            {/* GRUPOS & CRIANÇAS */}
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-[#f18719] text-xs font-black uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>Espírito de Equipa • Grupos &amp; Crianças</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-sans text-slate-950 uppercase tracking-tight mt-1">
                    Grupos &amp; Kiber Kids
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Turmas dinâmicas divididas por faixa etária e nível de experiência para diversão e segurança máxima.
                  </p>
                </div>

                <button
                  onClick={() => onNavigateToCategory('group')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f18719] hover:text-[#db760f] transition-colors cursor-pointer shrink-0 self-start sm:self-auto group"
                >
                  <span>Ver modalidades de grupo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                {[...gruposCriancasList, ...gruposAdultosList.slice(0, 3)].map((lesson) => (
                  <ServiceCard
                    key={lesson.id}
                    lesson={lesson}
                    onReserve={onSelectLesson}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </div>

            {/* ALUGUER DE EQUIPAMENTO */}
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-[#f18719] text-xs font-black uppercase tracking-wider">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Material Premium • Pranchas &amp; Fatos de Neoprene</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-sans text-slate-950 uppercase tracking-tight mt-1">
                    Aluguer de Equipamento
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Equipamento de alta qualidade para desfrutares do mar de Matosinhos ao teu ritmo. Pranchas soft-foam, fibra/epoxy e fatos térmicos.
                  </p>
                </div>

                <button
                  onClick={() => onNavigateToCategory('rental')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f18719] hover:text-[#db760f] transition-colors cursor-pointer shrink-0 self-start sm:self-auto group"
                >
                  <span>Ver catálogo de aluguer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                {aluguerList.map((lesson) => (
                  <ServiceCard
                    key={lesson.id}
                    lesson={lesson}
                    onReserve={onSelectLesson}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </div>

            {/* PROGRAMAS & EXPERIÊNCIAS */}
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-[#f18719] text-xs font-black uppercase tracking-wider">
                    <Sun className="w-4 h-4" />
                    <span>Férias Escolares • Surf Trips • Erasmus</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-sans text-slate-950 uppercase tracking-tight mt-1">
                    Campos de Férias, Surf Trips &amp; Erasmus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Campos de férias de Verão, expedições a piscinas de ondas mundiais (The Wave) e programas universitários.
                  </p>
                </div>

                <button
                  onClick={() => onNavigateToCategory('camps')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f18719] hover:text-[#db760f] transition-colors cursor-pointer shrink-0 self-start sm:self-auto group"
                >
                  <span>Ver programas e expedições</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                {[
                  ...camposFeriasList,
                  ...surfTripsList,
                  ...erasmusList
                ].map((lesson) => (
                  <ServiceCard
                    key={lesson.id}
                    lesson={lesson}
                    onReserve={onSelectLesson}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Bottom Banner with Credentials */}
        <div className="mt-16 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#f18719] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black font-sans uppercase text-slate-950">
                Garantia Kiber Surf School
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Seguro desportivo total incluído, balneários com duches de água quente e instrutores credenciados pela Federação Portuguesa de Surf.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToCategory('all')}
            className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95 text-center shrink-0 w-full sm:w-auto"
          >
            Ver Tabela Completa de Preços
          </button>
        </div>

      </div>
    </section>
  );
}
