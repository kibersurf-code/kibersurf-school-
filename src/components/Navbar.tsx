import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, CalendarDays, Globe, ChevronDown } from 'lucide-react';
import { LessonCategory, GlobalService } from '../types';
import { SERVICES } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  bookingCount: number;
  selectedFilter?: 'all' | 'lessons' | LessonCategory | string;
  setSelectedFilter?: (filter: any) => void;
  onSelectService?: (serviceId: string) => void;
  onBookNow?: () => void;
  onLogoClick?: () => void;
}

export type NavServiceItem = GlobalService;
export const SERVICES_LIST: GlobalService[] = SERVICES;

export default function Navbar({ 
  activeSection, 
  setActiveSection, 
  selectedFilter,
  setSelectedFilter,
  onSelectService,
  onBookNow,
  onLogoClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    if (onLogoClick) {
      onLogoClick();
    } else {
      setActiveSection('inicio');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleServiceClick = (serviceId: string) => {
    setIsOpen(false);
    setIsServicesOpen(false);

    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      const foundService = SERVICES.find(s => s.id === serviceId || s.slug === serviceId || s.filterKey === serviceId);

      if (foundService) {
        if (setSelectedFilter) setSelectedFilter(foundService.filterKey);
        setActiveSection('aulas');
      } else if (serviceId === 'todas-aulas' || serviceId === 'aulas-surf' || serviceId === 'all') {
        if (setSelectedFilter) setSelectedFilter('all');
        setActiveSection('aulas');
      } else {
        if (setSelectedFilter) setSelectedFilter(serviceId);
        setActiveSection('aulas');
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBookNowClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    if (onBookNow) {
      onBookNow();
    } else {
      setActiveSection('agendar');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Active section states
  const isSobreActive = activeSection === 'sobre' || activeSection === 'staff' || activeSection === 'instrutores';
  const isServicosActive = activeSection === 'aulas' || activeSection === 'surf-trip' || activeSection === 'campo-ferias';
  const isContactoActive = activeSection === 'contacto';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand (Clickable -> Homepage & Reset Hero to "Vive o surf. Sente o mar.") */}
          <div 
            onClick={handleLogoClick} 
            className="flex items-center gap-2 cursor-pointer group select-none py-1"
            id="navbar-logo"
            title="Kiber Surf School - Vive o Surf. Sente Matosinhos."
          >
            <img
              src="/logokiber.png"
              alt="Kiber"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            {/* Texto 'surf school' à frente do logótipo */}
            <div className="flex flex-col text-[11px] sm:text-xs font-semibold leading-[1.05] text-slate-900 lowercase tracking-tight text-left self-center group-hover:text-[#f18719] transition-colors">
              <span>surf</span>
              <span>school</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9 font-bold text-[13px] uppercase tracking-wider relative h-full">
            
            {/* Sobre Nós */}
            <button
              id="nav-link-sobre"
              onClick={() => handleNavClick('sobre')}
              className={`transition-all duration-200 cursor-pointer border-b-2 h-full flex items-center ${
                isSobreActive
                  ? 'text-[#f18719] border-[#f18719]'
                  : 'text-slate-600 border-transparent hover:text-[#f18719]'
              }`}
            >
              Sobre Nós
            </button>

            {/* Serviços Simple 1-Column Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative h-full flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-link-servicos"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`transition-all duration-200 cursor-pointer border-b-2 h-full flex items-center gap-1.5 ${
                  isServicosActive || isServicesOpen
                    ? 'text-[#f18719] border-[#f18719]'
                    : 'text-slate-600 border-transparent hover:text-[#f18719]'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180 text-[#f18719]' : ''}`} />
              </button>

              {/* Single Vertical Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  id="dropdown-servicos"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 mt-1 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-left w-64 min-w-[250px]"
                >
                  <div className="space-y-0.5">
                    {SERVICES_LIST.map((service) => (
                      <button
                        key={service.id}
                        id={`nav-service-${service.id}`}
                        onClick={() => handleServiceClick(service.id)}
                        className="w-full flex items-center px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-[#f18719] hover:bg-orange-50/80 transition-all duration-150 text-left cursor-pointer"
                      >
                        <span className="tracking-normal">
                          {service.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contactos */}
            <button
              id="nav-link-contactos"
              onClick={() => handleNavClick('contacto')}
              className={`transition-all duration-200 cursor-pointer border-b-2 h-full flex items-center ${
                isContactoActive
                  ? 'text-[#f18719] border-[#f18719]'
                  : 'text-slate-600 border-transparent hover:text-[#f18719]'
              }`}
            >
              Contactos
            </button>

          </nav>

          {/* Right Controls: Book Now & Language */}
          <div className="hidden md:flex items-center gap-3.5">
            
            {/* Highlighted Book Now Button (exclusively for Aula Avulso) */}
            <button
              id="cta-book-now-header"
              onClick={handleBookNowClick}
              className="bg-[#f18719] text-white hover:bg-[#db760f] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 border border-[#f18719]"
              title="Reservar Aula Avulso"
            >
              <CalendarDays className="w-4 h-4 text-white" />
              <span>Book Now</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 text-slate-600 hover:text-[#f18719] transition-colors border border-slate-200 rounded-xl px-3 py-2.5 bg-white cursor-pointer select-none" title="Idioma">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] font-bold uppercase">PT</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400 text-[10px]">EN</span>
            </div>

          </div>

          {/* Mobile Menu Action Trigger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Book Now button */}
            <button
              onClick={handleBookNowClick}
              className="bg-[#f18719] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider shadow-sm"
            >
              Book Now
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-50 rounded-lg cursor-pointer"
              aria-label="Alternar Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 text-left animate-in fade-in duration-150">
          
          {/* Sobre Nós */}
          <button
            id="mobile-nav-sobre"
            onClick={() => handleNavClick('sobre')}
            className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider ${
              isSobreActive ? 'bg-orange-50 text-[#f18719]' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Sobre Nós
          </button>

          {/* Serviços Accordion */}
          <div className="border-b border-slate-100 pb-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider ${
                isServicosActive ? 'text-[#f18719] bg-orange-50/60' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Serviços</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'transform rotate-180 text-[#f18719]' : ''}`} />
            </button>
            
            {mobileServicesOpen && (
              <div className="pl-2 pr-1 py-1 space-y-0.5">
                {SERVICES_LIST.map((service) => (
                  <button
                    key={service.id}
                    id={`mobile-nav-service-${service.id}`}
                    onClick={() => handleServiceClick(service.id)}
                    className="flex items-center w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#f18719] hover:bg-orange-50/80 transition-colors"
                  >
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contactos */}
          <button
            id="mobile-nav-contactos"
            onClick={() => handleNavClick('contacto')}
            className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider ${
              isContactoActive ? 'bg-orange-50 text-[#f18719]' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Contactos
          </button>
          
          {/* Highlighted Full Width Book Now Button */}
          <div className="pt-3 border-t border-slate-100">
            <button
              id="mobile-cta-book-now"
              onClick={handleBookNowClick}
              className="flex items-center justify-center gap-2 w-full bg-[#f18719] hover:bg-[#db760f] text-white font-black py-3.5 rounded-xl text-xs uppercase shadow-md transition-colors"
            >
              <CalendarDays className="w-4 h-4 text-white" />
              <span>Book Now (Aula Avulso)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
