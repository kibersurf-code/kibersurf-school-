import React from 'react';
import { 
  Users, 
  ArrowRight, 
  Compass, 
  Waves, 
  Sparkles, 
  Droplets, 
  Dumbbell, 
  Lock, 
  Building2, 
  Check, 
  Flame,
  ShieldCheck,
  Coffee,
  Info
} from 'lucide-react';

interface AboutSectionProps {
  onConheceStaffClick: () => void;
  showHeaderBanner?: boolean;
  showStaffButton?: boolean;
  showFacilities?: boolean;
}

interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  image: string;
  features: string[];
  icon: React.ElementType;
}

const FACILITIES: FacilityItem[] = [
  {
    id: 'chuveiros',
    title: 'Chuveiros de Água Quente',
    category: 'Conforto & Bem-Estar',
    description: 'Chuveiros modernos com água quente garantida para tomares um banho revigorante e relaxante logo após a tua sessão de surf, em qualquer altura do ano.',
    badge: 'Água Quente 100% Garantida',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    features: ['Água quente constante', 'Pressão regulada', 'Cabines individuais', 'Espaço higienizado'],
    icon: Flame,
  },
  {
    id: 'casas-de-banho',
    title: 'Casas de Banho Separadas',
    category: 'Higiene & Privacidade',
    description: 'Casas de banho masculinas e femininas independentes, higienizadas com elevada frequência para assegurar total privacidade e conforto a todos os alunos e visitantes.',
    badge: 'Masculinas & Femininas',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
    features: ['Acessos separados', 'Limpeza diária reforçada', 'Espelhos e lavatórios', 'Acessibilidade'],
    icon: Users,
  },
  {
    id: 'ginasio-treino',
    title: 'Ginásio e Zona de Treino',
    category: 'Performance & Treino Funcional',
    description: 'Zona de treino equipada para aquecimento articular, reforço muscular específico de surf, mobilidade, equilíbrio e sessões didáticas de surfskate.',
    badge: 'Preparação Física & Funcional',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    features: ['Material de treino funcional', 'Área de mobilidade', 'Zona de surfskate', 'Acompanhamento físico'],
    icon: Dumbbell,
  },
  {
    id: 'balnearios-vestiarios',
    title: 'Balneários e Vestiários',
    category: 'Comodidade & Segurança',
    description: 'Vestiários amplos com bancos, cabides e cacifos seguros onde podes guardar a tua roupa e pertences pessoais com tranquilidade enquanto estás no mar.',
    badge: 'Cacifos & Espaço Amplo',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&q=80',
    features: ['Cacifos para pertences', 'Bancos e cabides', 'Troca de roupa segura', 'Ambiente arejado'],
    icon: Lock,
  },
];

export default function AboutSection({ 
  onConheceStaffClick, 
  showHeaderBanner = true,
  showStaffButton,
  showFacilities
}: AboutSectionProps) {
  const isStaffButtonVisible = showStaffButton !== undefined ? showStaffButton : !showHeaderBanner;
  const isFacilitiesVisible = showFacilities !== undefined ? showFacilities : showHeaderBanner;
  const fallbackImage = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80';
  const headerBannerImage = '/matosinhos.png';
  const aboutImage = '/about.jpg';

  return (
    <section id="sobre" className="relative bg-white text-slate-800">
      
      {/* 1. HEADER BANNER COM IMAGEM & TÍTULO "SOBRE NÓS" (Condicional) */}
      {showHeaderBanner && (
        <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full overflow-hidden flex items-center justify-center bg-slate-950">
          <img 
            src={headerBannerImage} 
            alt="Sobre Nós - Kiber Surf School Matosinhos"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== fallbackImage) {
                target.src = fallbackImage;
              }
            }}
            className="absolute inset-0 w-full h-full object-cover object-[center_75%] scale-105 brightness-105 contrast-105 transition-transform duration-1000"
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

      {/* 2. CONTEÚDO PRINCIPAL (HISTÓRIA, DESCRIÇÃO E BLOCO "SABIAS QUE...") */}
      <div className="py-14 md:py-20 border-b border-slate-100">
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
                className="w-full h-[440px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
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
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-slate-950 uppercase">
                KIBER SURF SCHOOL
              </h3>
              
              <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed font-manrope">
                Escola de surf certificada pela Federação Portuguesa de Surf, com instrutores devidamente credenciados, apaixonados e com vasta experiência no mar.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-manrope">
                Com mais de 25 anos dedicados ao surf, bodyboard e desportos de deslize, acumulámos uma enorme bagagem de experiência e formação para partilhar contigo todos os nossos conhecimentos. Disponibilizamos aulas de surf para todos os níveis, surfskate e campos de férias, sempre com metodologia focada na segurança, diversão e evolução consistente.
              </p>

              {/* BLOCO DESTAQUE: SABIAS QUE... (DESIGN ELEGANTE SEM ÍCONES) */}
              <div className="border-l-2 border-[#f18719] bg-stone-50/80 rounded-r-2xl p-4 sm:p-5 text-left space-y-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#f18719] uppercase block font-sans">
                  Sabias que...
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed font-manrope">
                  A Praia de Matosinhos é considerada um dos melhores locais da Europa para aprender a fazer surf, além de ser reconhecida oficialmente como uma <strong className="font-bold text-slate-950">World Surf City</strong>.
                </p>
              </div>

              {isStaffButtonVisible && (
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
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 3. NOVA SECÇÃO — AS NOSSAS INSTALAÇÕES (Apenas visível na Página Sobre Nós) */}
      {isFacilitiesVisible && (
        <div id="instalacoes" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header da Secção Instalações */}
            <div className="text-left max-w-3xl mb-12 sm:mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-[#f18719] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Infraestrutura & Comodidade</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-950 uppercase">
                As Nossas Instalações
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-manrope">
                Desfruta de instalações completas, modernas e seguras na Praia de Matosinhos. Todo o conforto e apoio que precisas antes e depois de entrares na água.
              </p>
            </div>

            {/* Grid de Instalações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FACILITIES.map((facility) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={facility.id}
                    id={`facility-${facility.id}`}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#f18719]/40 transition-all duration-300 flex flex-col justify-between group text-left"
                  >
                    {/* Media Banner / Placeholder de Imagem da Instalação */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Badge da Categoria */}
                      <span className="absolute top-3.5 left-3.5 bg-[#f18719] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm">
                        {facility.badge}
                      </span>

                      {/* Ícone no canto inferior */}
                      <div className="absolute bottom-3 left-3.5 flex items-center gap-2 bg-black/50 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                        <IconComponent className="w-3.5 h-3.5 text-[#f18719]" />
                        <span>{facility.category}</span>
                      </div>
                    </div>

                    {/* Conteúdo do Card da Instalação */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <h4 className="text-xl font-black text-slate-950 uppercase tracking-tight group-hover:text-[#f18719] transition-colors">
                          {facility.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {facility.description}
                        </p>
                      </div>

                      {/* Lista de Comodidades / Destaques da Instalação */}
                      <div className="pt-3 border-t border-slate-100">
                        <ul className="grid grid-cols-2 gap-2">
                          {facility.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                              <Check className="w-3.5 h-3.5 text-[#f18719] shrink-0" />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Destaque de Conveniência no Rodapé das Instalações */}
            <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#f18719] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 uppercase">
                  Acesso Total e Incluído
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Todas as nossas instalações (chuveiros quentes, vestiários e cacifos) estão incluídas em todas as aulas, alugueres e mensalidades.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

