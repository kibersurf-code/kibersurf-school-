import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight, ArrowRight, Sparkles, Waves, Users, Sun, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Imported local visual assets
import theWaveTripImg from '../assets/images/the_wave_bristol_trip_1784800173484.jpg';

export interface HeroSlideData {
  id: string;
  serviceId?: string;
  type: 'main' | 'service';
  tagline: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText?: string;
  bgImage?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const HERO_SLIDES: HeroSlideData[] = [
  // 1. Vive o surf. Sente o mar.
  {
    id: 'main-hero',
    type: 'main',
    tagline: 'Matosinhos • Porto • Portugal',
    title: 'Vive o surf.',
    titleHighlight: 'Sente o mar.',
    description: 'Aulas de surf, aluguer de equipamento e experiências na Praia de Matosinhos.',
    primaryBtnText: 'Reservar agora',
    secondaryBtnText: 'Ver aulas',
  },
  // 2. Aula Avulso
  {
    id: 'aula-avulso',
    serviceId: 'aula-avulso',
    type: 'service',
    tagline: 'AULAS DE SURF • SESSÃO INDIVIDUAL',
    title: 'Aula Avulsa de',
    titleHighlight: 'Surf',
    description: 'Aula avulsa de surf em grupo na Praia de Matosinhos. Perfeita para uma primeira experiência ou prática ocasional, com todo o equipamento e seguro incluídos.',
    primaryBtnText: 'Reservar Aula Avulsa',
    secondaryBtnText: 'Ver Todas as Aulas',
    bgImage: '/avulso.jpg',
    icon: Waves,
  },
  // 3. Aluguer
  {
    id: 'aluguer',
    serviceId: 'aluguer',
    type: 'service',
    tagline: 'PRANCHAS & FATOS · MATOSINHOS',
    title: 'Aluguer de',
    titleHighlight: 'Equipamento',
    description: 'Material de alta qualidade para desfrutares do mar ao teu ritmo. Softboards, pranchas duras de fibra e fatos 4/3mm.',
    primaryBtnText: 'Catálogo de Aluguer',
    secondaryBtnText: 'Ver Aulas',
    bgImage: '/loja.jpg',
    icon: Waves,
  },
  // 4. Mensalidades
  {
    id: 'mensalidades',
    serviceId: 'mensalidades',
    type: 'service',
    tagline: 'EVOLUÇÃO CONTÍNUA · 1 A 3 VEZES POR SEMANA',
    title: 'Mensalidades de',
    titleHighlight: 'Surf',
    description: 'Planos mensais com acompanhamento dedicado dos nossos treinadores certificados para uma evolução técnica consistente.',
    primaryBtnText: 'Ver Planos Mensais',
    secondaryBtnText: 'Agendar Aula',
    bgImage: '/mensalidade.jpg',
    icon: Waves,
  },
  // 5. Packs
  {
    id: 'packs',
    serviceId: 'packs',
    type: 'service',
    tagline: 'FLEXIBILIDADE TOTAL · PACKS 5 & 10 AULAS',
    title: 'Packs de',
    titleHighlight: 'Aulas de Surf',
    description: 'Packs de aulas de surf para evoluíres ao teu ritmo com horários flexíveis, acompanhamento técnico e todo o equipamento incluído.',
    primaryBtnText: 'Ver Packs de Aulas',
    secondaryBtnText: 'Saber Mais',
    bgImage: '/packs.jpg',
    icon: Sparkles,
  },
  // 6. Surf Trips
  {
    id: 'surf-trips',
    serviceId: 'surf-trip',
    type: 'service',
    tagline: 'EXPERIÊNCIAS INTERNACIONAIS & THE WAVE',
    title: 'Kiber',
    titleHighlight: 'Surf Trips',
    description: 'Viagens organizadas pela equipa Kiber para os melhores picos de surf e as melhores ondas artificiais do mundo.',
    primaryBtnText: 'Explorar Surf Trips',
    secondaryBtnText: 'Ver Outros Serviços',
    bgImage: theWaveTripImg,
    icon: Compass,
  },
  // 7. Erasmus e Crianças
  {
    id: 'erasmus-criancas',
    serviceId: 'erasmus',
    type: 'service',
    tagline: 'ERASMUS, ADULTOS & CRIANÇAS',
    title: 'Erasmus &',
    titleHighlight: 'Crianças',
    description: 'Junta-te à nossa comunidade com aulas dedicadas a estudantes universitários internacionais e turmas para os mais novos.',
    primaryBtnText: 'Ver Aulas Erasmus & Grupos',
    secondaryBtnText: 'Contactar Escola',
    bgImage: '/eramus.jpg',
    icon: Users,
  },
  // 8. Campos de Férias
  {
    id: 'campos-ferias',
    serviceId: 'campo-ferias',
    type: 'service',
    tagline: 'KIDS & TEENS · FÉRIAS ESCOLARES',
    title: 'Campos de',
    titleHighlight: 'Férias',
    description: 'Uma semana inesquecível de surf, segurança no mar, novas amizades e diversão na Praia de Matosinhos.',
    primaryBtnText: 'Saber Mais & Inscrições',
    secondaryBtnText: 'Ver Todas as Aulas',
    bgImage: '/criancas.jpg',
    icon: Sun,
  },
];

interface HeroProps {
  onAgendarClick: () => void;
  onExplorarClick: () => void;
  onServiceSelect?: (serviceId: string) => void;
  resetSlideTrigger?: number;
}

export default function Hero({ onAgendarClick, onExplorarClick, onServiceSelect, resetSlideTrigger }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  // When resetSlideTrigger updates (e.g. user clicked logo), reset to slide 0 ("Vive o surf. Sente o mar.")
  useEffect(() => {
    if (resetSlideTrigger !== undefined && resetSlideTrigger > 0) {
      setDirection(-1);
      setCurrentSlideIndex(0);
    }
  }, [resetSlideTrigger]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (currentSlideIndex === 0 && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [currentSlideIndex]);

  // Touch swipe support variables
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // -------------------------------------------------------------
  // Slide 1 Exclusive: Interactive Water Wave Ripple State & Animation
  // -------------------------------------------------------------
  const [isWaterInteracting, setIsWaterInteracting] = useState(false);
  const [waterRippleScale, setWaterRippleScale] = useState(0);
  const [waterFreqX, setWaterFreqX] = useState(0.012);
  const [waterFreqY, setWaterFreqY] = useState(0.022);
  const [waterMousePos, setWaterMousePos] = useState({ x: 0.5, y: 0.5 });

  const targetWaterScaleRef = useRef(0);
  const currentWaterScaleRef = useRef(0);
  const waterMousePosRef = useRef({ x: 0.5, y: 0.5 });
  const waterAnimFrameRef = useRef<number | null>(null);

  const handlePointerWaterMove = (clientX: number, clientY: number, currentTarget: HTMLElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    waterMousePosRef.current = { x, y };
    setWaterMousePos({ x, y });
    targetWaterScaleRef.current = 7.0; // Soft liquid distortion wave amplitude
    if (!isWaterInteracting) setIsWaterInteracting(true);
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (currentSlideIndex === 0) {
      handlePointerWaterMove(e.clientX, e.clientY, e.currentTarget);
    }
  };

  const handleHeroMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsAutoPlayPaused(true);
    if (currentSlideIndex === 0) {
      handlePointerWaterMove(e.clientX, e.clientY, e.currentTarget);
    }
  };

  const handleHeroMouseLeave = () => {
    setIsAutoPlayPaused(false);
    targetWaterScaleRef.current = 0;
    setIsWaterInteracting(false);
  };

  useEffect(() => {
    let startTime = performance.now();

    const animateWaterRipples = (now: number) => {
      const elapsed = (now - startTime) * 0.0022;

      // Smoothly lerp scale towards target
      currentWaterScaleRef.current += (targetWaterScaleRef.current - currentWaterScaleRef.current) * 0.1;

      // Calculate dynamic turbulence frequency based on touch/mouse coordinates & time
      const { x, y } = waterMousePosRef.current;
      const fx = 0.012 + Math.sin(elapsed * 1.4 + x * 6.28) * 0.005;
      const fy = 0.022 + Math.cos(elapsed * 1.6 + y * 6.28) * 0.007;

      setWaterRippleScale(Number(currentWaterScaleRef.current.toFixed(2)));
      setWaterFreqX(Number(fx.toFixed(4)));
      setWaterFreqY(Number(fy.toFixed(4)));

      waterAnimFrameRef.current = requestAnimationFrame(animateWaterRipples);
    };

    waterAnimFrameRef.current = requestAnimationFrame(animateWaterRipples);

    return () => {
      if (waterAnimFrameRef.current) cancelAnimationFrame(waterAnimFrameRef.current);
    };
  }, []);

  // -------------------------------------------------------------
  // Carousel Navigation Logic & Autoplay
  // -------------------------------------------------------------
  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  // Autoplay effect (cycles every 7 seconds, pauses when user interacts)
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const timer = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [isAutoPlayPaused, goToNextSlide]);

  // Touch Gestures for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
    setIsAutoPlayPaused(true);
    if (currentSlideIndex === 0 && e.touches.length > 0) {
      handlePointerWaterMove(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndXRef.current = e.touches[0].clientX;
    if (currentSlideIndex === 0 && e.touches.length > 0) {
      handlePointerWaterMove(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleTouchEnd = () => {
    setIsAutoPlayPaused(false);
    targetWaterScaleRef.current = 0;
    setIsWaterInteracting(false);

    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diffX = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (diffX > minSwipeDistance) {
      // Swiped Left -> Next slide
      goToNextSlide();
    } else if (diffX < -minSwipeDistance) {
      // Swiped Right -> Prev slide
      goToPrevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Slide Animation Variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  // Framer Motion variants for staggered text entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handlePrimaryBtnClick = () => {
    if (currentSlide.type === 'main') {
      onAgendarClick();
    } else if (currentSlide.serviceId && onServiceSelect) {
      onServiceSelect(currentSlide.serviceId);
    } else {
      onExplorarClick();
    }
  };

  const handleSecondaryBtnClick = () => {
    onExplorarClick();
  };

  return (
    <div id="inicio" className="relative w-full bg-slate-950 text-slate-800 overflow-hidden">
      
      {/* SVG Filter Definition for Slide 1 Water Wave Ripple Effect */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <defs>
          <filter id="water-wave-ripple-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${waterFreqX} ${waterFreqY}`}
              numOctaves="2"
              result="waterNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="waterNoise"
              scale={waterRippleScale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedGraphic"
            />
          </filter>
        </defs>
      </svg>

      {/* Main Full-Hero Carousel Container */}
      <section 
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={handleHeroMouseEnter}
        onMouseLeave={handleHeroMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[calc(100vh-80px)] min-h-[540px] max-h-[920px] overflow-hidden flex items-center justify-center select-none"
      >
        {/* Animated Carousel Slide Frame */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            {/* -------------------------------------------------------------
                SLIDE 1 (TYPE: MAIN) - EXACT VIDEO & WATER RIPPLE BACKGROUND
               ------------------------------------------------------------- */}
            {currentSlide.type === 'main' ? (
              <>
                {/* Dynamic Water Spotlight Ripple Follower */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-700"
                  style={{
                    opacity: isWaterInteracting ? 0.7 : 0,
                    background: `radial-gradient(450px circle at ${waterMousePos.x * 100}% ${waterMousePos.y * 100}%, rgba(241, 135, 25, 0.12), rgba(0, 180, 216, 0.08) 40%, transparent 80%)`
                  }}
                />

                {/* Background Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-100"
                  style={{ objectPosition: 'center center' }}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  <source src="/IMG_2047.mp4" type="video/mp4" />
                  <source src="/IMG_2047.MOV" type="video/quicktime" />
                  <source 
                    src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b161c6b16955a6d2b6eb5051e&profile_id=139&oauth2_token_id=57447761" 
                    type="video/mp4" 
                  />
                </video>

                {/* Light & Balanced Overlays */}
                <div className="absolute inset-0 bg-black/10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 z-10" />
              </>
            ) : (
              /* -------------------------------------------------------------
                 SERVICE SLIDES (TYPE: SERVICE) - HIGH RESOLUTION PHOTOGRAPHY
                 ------------------------------------------------------------- */
              <>
                <img
                  src={currentSlide.bgImage}
                  alt={currentSlide.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105 scale-105 transition-transform duration-[8000ms]"
                  style={{ 
                    objectPosition: (currentSlide.id === 'aluguer' || currentSlide.id === 'packs') ? 'center 65%' : 'center center' 
                  }}
                />

                {/* Soft, luminous & light overlay (Photos fully visible with perfect legibility) */}
                <div className="absolute inset-0 bg-slate-950/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/50 z-10" />
              </>
            )}

            {/* Slide Content (Typography + Action Buttons) */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center flex flex-col items-center justify-center space-y-8 h-full">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {/* Location / Category Badge */}
                <motion.div 
                  variants={itemVariants} 
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 shadow-md"
                >
                  {currentSlide.type === 'main' ? (
                    <MapPin className="w-3.5 h-3.5 animate-pulse text-[#f18719]" />
                  ) : currentSlide.icon ? (
                    <currentSlide.icon className="w-3.5 h-3.5 text-[#f18719]" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-[#f18719]" />
                  )}
                  <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#f18719] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {currentSlide.tagline}
                  </span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  variants={itemVariants}
                  style={currentSlide.type === 'main' ? {
                    filter: waterRippleScale > 0.05 ? 'url(#water-wave-ripple-filter)' : 'none',
                    transition: 'filter 0.15s ease-out',
                    willChange: 'filter'
                  } : undefined}
                  className="text-4xl sm:text-6xl md:text-7xl font-sans font-black text-white leading-[1.1] uppercase tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] cursor-pointer"
                >
                  {currentSlide.title}{' '}
                  {currentSlide.titleHighlight && (
                    <>
                      <br className="hidden sm:inline" />
                      <span className="text-[#f18719] relative inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                        {currentSlide.titleHighlight}
                      </span>
                    </>
                  )}
                </motion.h1>

                {/* Supportive Subtitle */}
                <motion.p 
                  variants={itemVariants} 
                  className="text-sm sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-sans leading-relaxed pt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium"
                >
                  {currentSlide.description}
                </motion.p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePrimaryBtnClick}
                  className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-all cursor-pointer text-center flex items-center justify-center gap-2 group border border-[#f18719] w-full sm:w-auto"
                >
                  {currentSlide.type === 'main' ? (
                    <Calendar className="w-4 h-4 text-white" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  )}
                  <span>{currentSlide.primaryBtnText}</span>
                </motion.button>

                {currentSlide.secondaryBtnText && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSecondaryBtnClick}
                    className="bg-black/20 hover:bg-white hover:text-slate-950 backdrop-blur-md border-2 border-white text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl transition-all text-center cursor-pointer w-full sm:w-auto"
                  >
                    {currentSlide.secondaryBtnText}
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* -------------------------------------------------------------
            CAROUSEL CONTROLS: PREVIOUS & NEXT ARROWS
           ------------------------------------------------------------- */}
        <button
          onClick={goToPrevSlide}
          aria-label="Slide Anterior"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/30 hover:bg-[#f18719] text-white/80 hover:text-white border border-white/20 hover:border-[#f18719] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={goToNextSlide}
          aria-label="Próximo Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/30 hover:bg-[#f18719] text-white/80 hover:text-white border border-white/20 hover:border-[#f18719] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* -------------------------------------------------------------
            BOTTOM NAVIGATION HINT & INDICATORS (CENTERED)
           ------------------------------------------------------------- */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 sm:gap-2.5">
          
          {/* Discreet exploration hint with subtle animated arrow */}
          <button
            onClick={goToNextSlide}
            aria-label="Deslizar para o próximo serviço"
            className="group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:py-1.5 rounded-full bg-black/25 hover:bg-black/45 backdrop-blur-md border border-white/10 hover:border-white/20 text-white/75 hover:text-white transition-all cursor-pointer shadow-sm text-[11px] sm:text-xs font-medium tracking-wide select-none"
          >
            <span>Deslize para explorar os nossos serviços</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="inline-flex items-center text-[#f18719] group-hover:text-white transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.span>
          </button>

          {/* Dots / Slide Indicators */}
          <div className="flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/10 shadow-xl max-w-[90vw] overflow-x-auto">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para ${slide.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer flex items-center gap-1.5 ${
                    isActive 
                      ? 'w-7 sm:w-9 h-2 bg-[#f18719] shadow-sm' 
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                  title={slide.title}
                />
              );
            })}
          </div>
        </div>

        {/* Floating Slide Counter Badge (Right side indicator) */}
        <div className="hidden sm:flex absolute bottom-6 sm:bottom-7 right-6 sm:right-8 z-30 items-center gap-1.5 text-white/75 font-mono text-xs font-bold bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <span className="text-[#f18719]">0{currentSlideIndex + 1}</span>
          <span className="text-white/40">/</span>
          <span>0{HERO_SLIDES.length}</span>
        </div>
      </section>
    </div>
  );
}
