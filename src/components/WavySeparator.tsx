import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface WavySeparatorProps {
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
  bgImage?: string;
  // Tailwind color classes for seamless integration with adjacent sections
  topColorClass?: string;    // e.g., "text-white"
  bottomColorClass?: string; // e.g., "text-[#08080a]"
  id?: string;
}

export default function WavySeparator({
  title,
  buttonText = 'VER MAIS',
  onButtonClick,
  bgImage = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=80',
  topColorClass = 'text-white',
  bottomColorClass = 'text-[#08080a]',
  id
}: WavySeparatorProps) {
  return (
    <div id={id} className="relative w-full overflow-hidden select-none">
      
      {/* 1. TOP WAVYS (Blending the section above into the ocean bg) */}
      <div className={`absolute top-0 left-0 w-full z-20 pointer-events-none ${topColorClass}`}>
        <svg 
          viewBox="0 0 1440 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto translate-y-[-1px]"
          preserveAspectRatio="none"
          style={{ maxHeight: '120px' }}
        >
          {/* Wave Layer 1 (Light Opacity) */}
          <path 
            d="M0 0 L1440 0 L1440 120 C1300 160, 1100 70, 900 110 C700 150, 500 150, 300 90 C150 50, 50 90, 0 110 Z" 
            fill="currentColor" 
            className="opacity-25"
          />
          {/* Wave Layer 2 (Medium Opacity) */}
          <path 
            d="M0 0 L1440 0 L1440 85 C1250 125, 1050 50, 850 85 C650 120, 450 135, 250 70 C120 35, 40 70, 0 80 Z" 
            fill="currentColor" 
            className="opacity-50"
          />
          {/* Wave Layer 3 (Solid/Foreground) */}
          <path 
            d="M0 0 L1440 0 L1440 45 C1200 85, 1000 30, 800 55 C600 80, 400 95, 200 40 C100 15, 30 40, 0 40 Z" 
            fill="currentColor" 
            className="opacity-100"
          />
        </svg>
      </div>

      {/* 2. THE MAIN OCEAN BACKGROUND PORTAL */}
      <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center bg-brand-navy-950">
        {/* Parallax-like Zoom Wave Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.75] contrast-[1.1]"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/35 via-transparent to-blue-900/40 mix-blend-overlay"></div>

        {/* Floating elements inside matching user photograph */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left py-12">
          
          {/* Left Action Button: SEE MORE */}
          <div className="flex md:justify-start justify-center order-2 md:order-1">
            {onButtonClick && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onButtonClick}
                className="bg-white hover:bg-slate-100 text-slate-950 font-sans font-black text-xs md:text-sm uppercase tracking-[0.25em] px-10 py-5 rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all cursor-pointer border-none flex items-center gap-3"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </motion.button>
            )}
          </div>

          {/* Right Heading: OUR SCHOOL */}
          <div className="text-center md:text-right order-1 md:order-2 space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
            >
              {title}
            </motion.h2>
            <div className="h-1.5 w-32 md:w-48 bg-white/40 ml-auto mr-auto md:mr-0 rounded-full" />
          </div>

        </div>
      </div>

      {/* 3. BOTTOM WAVYS (Blending the ocean bg into the section below) */}
      <div className={`absolute bottom-0 left-0 w-full z-20 pointer-events-none ${bottomColorClass}`}>
        <svg 
          viewBox="0 0 1440 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto translate-y-[1px]"
          preserveAspectRatio="none"
          style={{ maxHeight: '120px' }}
        >
          {/* Wave Layer 1 (Light Opacity) */}
          <path 
            d="M0 120 C150 80, 300 130, 500 95 C700 60, 900 120, 1100 80 C1250 50, 1350 90, 1440 105 L1440 160 L0 160 Z" 
            fill="currentColor" 
            className="opacity-25"
          />
          {/* Wave Layer 2 (Medium Opacity) */}
          <path 
            d="M0 85 C120 50, 250 100, 450 70 C650 40, 850 95, 1050 55 C1200 25, 1320 65, 1440 80 L1440 160 L0 160 Z" 
            fill="currentColor" 
            className="opacity-50"
          />
          {/* Wave Layer 3 (Solid/Foreground) */}
          <path 
            d="M0 45 C100 25, 200 65, 400 35 C600 5, 800 60, 1000 20 C1150 -5, 1280 30, 1440 30 L1440 160 L0 160 Z" 
            fill="currentColor" 
            className="opacity-100"
          />
        </svg>
      </div>

    </div>
  );
}
