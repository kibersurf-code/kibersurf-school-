import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ServicesBentoProps {
  onEscolaClick: () => void;
  onAluguerClick: () => void;
  onCampClick: () => void;
  onTripClick: () => void;
}

export default function ServicesBento({
  onEscolaClick,
  onAluguerClick,
  onCampClick,
  onTripClick,
}: ServicesBentoProps) {
  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching screenshot */}
        <div className="text-left mb-10">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 font-sans">
            Missão
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Escola de Surf (Spans 2 Columns in desktop) */}
          <div 
            onClick={onEscolaClick}
            className="md:col-span-2 relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 select-none"
            id="service-card-escola"
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80')` 
              }}
            />
            {/* Solid Vignette + Rich Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
            
            {/* Text Overlay Bottom-Left */}
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-left flex flex-col justify-end h-full z-10 w-full">
              {/* Monospace Wavy Ornament */}
              <span className="font-mono text-white/75 tracking-widest text-lg block mb-1 drop-shadow-sm">
                ~~~
              </span>
              <h3 className="text-2xl md:text-3.5xl font-black text-white tracking-tight leading-tight group-hover:text-[#f18719] transition-colors duration-200">
                Escola de Surf
              </h3>
              <p className="text-xs sm:text-sm font-extrabold text-[#f18719] uppercase tracking-wider mt-1 flex items-center gap-1.5">
                <span>Vem surfar connosco</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </p>
            </div>
          </div>

          {/* Card 2: Aluguer Equipamento (1 Column) */}
          <div 
            onClick={onAluguerClick}
            className="md:col-span-1 relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 select-none"
            id="service-card-aluguer"
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-[center_70%] transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('/storebord.png')` 
              }}
            />
            {/* Solid Vignette + Rich Bottom Gradient with lower opacity for bright visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-85" />
            
            {/* Text Overlay Bottom-Left */}
            <div className="absolute bottom-0 left-0 p-8 text-left flex flex-col justify-end h-full z-10 w-full">
              {/* Monospace Wavy Ornament */}
              <span className="font-mono text-white/75 tracking-widest text-lg block mb-1 drop-shadow-sm">
                ~~~
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-[#f18719] transition-colors duration-200">
                Aluguer Equipamento
              </h3>
              <p className="text-xs sm:text-sm font-extrabold text-[#f18719] uppercase tracking-wider mt-1 flex items-center gap-1.5">
                <span>Pranchas e Fatos</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </p>
            </div>
          </div>

          {/* Card 3: Surf Camp (1 Column) */}
          <div 
            onClick={onCampClick}
            className="md:col-span-1 relative h-[340px] md:h-[380px] rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 select-none"
            id="service-card-surfcamp"
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80')` 
              }}
            />
            {/* Solid Vignette + Rich Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
            
            {/* Text Overlay Bottom-Left */}
            <div className="absolute bottom-0 left-0 p-8 text-left flex flex-col justify-end h-full z-10 w-full">
              {/* Monospace Wavy Ornament */}
              <span className="font-mono text-white/75 tracking-widest text-lg block mb-1 drop-shadow-sm">
                ~~~
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-[#f18719] transition-colors duration-200">
                Campo de Férias
              </h3>
              <p className="text-xs sm:text-sm font-extrabold text-[#f18719] uppercase tracking-wider mt-1 flex items-center gap-1.5">
                <span>Semana de surf</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </p>
            </div>
          </div>

          {/* Card 4: Surf Trip (Spans 2 Columns in desktop for symmetrical balance) */}
          <div 
            onClick={onTripClick}
            className="md:col-span-2 relative h-[340px] md:h-[380px] rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 select-none"
            id="service-card-surftrip"
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80')` 
              }}
            />
            {/* Solid Vignette + Rich Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
            
            {/* Text Overlay Bottom-Left */}
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-left flex flex-col justify-end h-full z-10 w-full">
              {/* Monospace Wavy Ornament */}
              <span className="font-mono text-white/75 tracking-widest text-lg block mb-1 drop-shadow-sm">
                ~~~
              </span>
              <h3 className="text-2xl md:text-3.5xl font-black text-white tracking-tight leading-tight group-hover:text-[#f18719] transition-colors duration-200">
                Surf Trip
              </h3>
              <p className="text-xs sm:text-sm font-extrabold text-[#f18719] uppercase tracking-wider mt-1 flex items-center gap-1.5">
                <span>Vamos de viagem</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
