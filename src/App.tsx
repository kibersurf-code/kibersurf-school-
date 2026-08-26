import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LessonsList from './components/LessonsList';
import InstructorsSection from './components/InstructorsSection';
import FAQSection from './components/FAQSection';
import BookingForm from './components/BookingForm';
import ClientDashboard from './components/ClientDashboard';
import ContactSection from './components/ContactSection';
import CampPage from './components/CampPage';
import TripPage from './components/TripPage';
import AulasSurfHome from './components/AulasSurfHome';
import { KiberLogoIcon } from './components/KiberLogoIcon';
import { Lesson, Booking, LessonCategory } from './types';
import { LESSONS } from './data';
import { Compass, Waves, MessageCircle, Instagram, Facebook, Phone, Mail } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'lessons' | LessonCategory>('all');
  const [heroResetTrigger, setHeroResetTrigger] = useState<number>(0);
  
  // Real LocalStorage state management
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('kiber_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const handleLogoClick = () => {
    setActiveSection('inicio');
    setSelectedFilter('all');
    setHeroResetTrigger((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingSuccess = (newBooking: Booking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('kiber_bookings', JSON.stringify(updated));
    
    // Auto-navigate to dashboard page cleanly
    setTimeout(() => {
      setActiveSection('minhas-reservas');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('kiber_bookings', JSON.stringify(updated));
  };

  const navigateToSection = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBookSingleLesson = () => {
    const singleLesson = LESSONS.find(l => l.id === 'single-lesson') || LESSONS[0];
    setSelectedLesson(singleLesson);
    setActiveSection('agendar');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleServiceNavigation = (serviceId: string) => {
    if (serviceId === 'campo-ferias' || serviceId === 'campos-ferias') {
      setSelectedFilter('camp');
      navigateToSection('aulas');
    } else if (serviceId === 'surf-trip' || serviceId === 'surf-trips') {
      setSelectedFilter('trip');
      navigateToSection('aulas');
    } else if (serviceId === 'aluguer') {
      setSelectedFilter('rental');
      navigateToSection('aulas');
    } else if (serviceId === 'aula-avulso') {
      setSelectedFilter('aula-avulso');
      navigateToSection('aulas');
    } else if (serviceId === 'mensalidades') {
      setSelectedFilter('monthly');
      navigateToSection('aulas');
    } else if (serviceId === 'packs') {
      setSelectedFilter('pack');
      navigateToSection('aulas');
    } else if (serviceId === 'aulas-privadas') {
      setSelectedFilter('private');
      navigateToSection('aulas');
    } else if (serviceId === 'grupos-adultos') {
      setSelectedFilter('group');
      navigateToSection('aulas');
    } else if (serviceId === 'grupos-criancas') {
      setSelectedFilter('kids');
      navigateToSection('aulas');
    } else if (serviceId === 'erasmus') {
      setSelectedFilter('erasmus');
      navigateToSection('aulas');
    } else {
      setSelectedFilter('all');
      navigateToSection('aulas');
    }
  };

  const handleConheceStaff = () => {
    if (activeSection !== 'sobre') {
      setActiveSection('sobre');
      setTimeout(() => {
        const el = document.getElementById('staff-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById('staff-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy-950 text-slate-100 flex flex-col justify-between selection:bg-brand-yellow-400 selection:text-brand-navy-950 font-sans leading-normal">
      
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/351912345678"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-[0_4px_24px_rgba(16,185,129,0.35)] transform hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
        title="Falar no WhatsApp Kiber"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950" />
      </a>

      {/* Navigation Header */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={navigateToSection} 
        bookingCount={bookings.length}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        onBookNow={handleBookSingleLesson}
        onLogoClick={handleLogoClick}
      />

      <main className="flex-1 bg-white">
        
        {/* Render page views conditionally based on user choice */}
        {activeSection === 'inicio' && (
          <>
            <Hero 
              onAgendarClick={() => navigateToSection('agendar')} 
              onExplorarClick={() => {
                setSelectedFilter('all');
                navigateToSection('aulas');
              }}
              onServiceSelect={handleServiceNavigation}
              resetSlideTrigger={heroResetTrigger}
            />

            {/* Secção Sobre Nós colocada logo a seguir ao Carrossel Hero */}
            <AboutSection 
              showHeaderBanner={false}
              onConheceStaffClick={handleConheceStaff}
            />

            <AulasSurfHome 
              onSelectLesson={(lesson) => {
                setSelectedLesson(lesson);
                navigateToSection('agendar');
              }}
              onNavigateToCategory={(categoryId) => {
                setSelectedFilter(categoryId);
                navigateToSection('aulas');
              }}
              onViewDetails={(lesson) => {
                setSelectedFilter(lesson.category || 'all');
                navigateToSection('aulas');
              }}
            />
            
            <FAQSection />
          </>
        )}

        {(activeSection === 'sobre' || activeSection === 'staff' || activeSection === 'instrutores') && (
          <>
            <AboutSection 
              onConheceStaffClick={handleConheceStaff}
            />
            <InstructorsSection 
              onAgendarClick={() => navigateToSection('agendar')}
            />
            <FAQSection />
          </>
        )}

        {activeSection === 'faq' && (
          <FAQSection />
        )}

        {activeSection === 'aulas' && (
          <LessonsList 
            onSelectLesson={(lesson) => {
              setSelectedLesson(lesson);
              navigateToSection('agendar');
            }}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        )}

        {activeSection === 'agendar' && (
          <BookingForm 
            selectedLesson={selectedLesson}
            onBookingSuccess={handleBookingSuccess}
          />
        )}

        {activeSection === 'minhas-reservas' && (
          <ClientDashboard 
            bookings={bookings}
            onCancelBooking={handleCancelBooking}
            onNavigateToBooking={() => {
              setSelectedFilter('all');
              navigateToSection('aulas');
            }}
          />
        )}

        {activeSection === 'contacto' && (
          <ContactSection />
        )}

        {activeSection === 'campo-ferias' && (
          <CampPage 
            onSelectLesson={(lesson) => {
              setSelectedLesson(lesson);
              navigateToSection('agendar');
            }}
            onReservarClick={() => {
              setSelectedFilter('all');
              navigateToSection('aulas');
            }} 
            onBackToServices={() => {
              setSelectedFilter('all');
              navigateToSection('aulas');
            }}
          />
        )}

        {activeSection === 'surf-trip' && (
          <TripPage 
            onSelectLesson={(lesson) => {
              setSelectedLesson(lesson);
              navigateToSection('agendar');
            }}
            onReservarClick={() => {
              setSelectedFilter('all');
              navigateToSection('aulas');
            }} 
            onBackToServices={() => {
              setSelectedFilter('all');
              navigateToSection('aulas');
            }}
          />
        )}

      </main>

      {/* Styled Brand Footer */}
      <footer className="bg-[#08080a] border-t border-slate-900 py-16 text-slate-400 font-sans text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-b border-white/5 pb-10 mb-8">
            
            {/* Column 1: Contactos */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-[#f18719] text-sm uppercase tracking-wider font-sans">
                Contactos
              </h4>
              <div className="space-y-2.5 text-slate-300 font-medium">
                <a 
                  href="tel:00351932785146" 
                  className="flex items-center gap-2.5 hover:text-[#f18719] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#f18719] shrink-0" />
                  <span>00351 932 785 146</span>
                </a>
                <a 
                  href="mailto:reservaskiber@gmail.com" 
                  className="flex items-center gap-2.5 hover:text-[#f18719] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#f18719] shrink-0" />
                  <span>reservaskiber@gmail.com</span>
                </a>
              </div>
              
              {/* Redes Sociais com Ícones */}
              <div className="flex items-center gap-2.5 pt-2">
                <a 
                  href="https://www.instagram.com/kibersurfschool" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Instagram @kibersurfschool"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 hover:border-transparent transition-all shadow-sm group"
                >
                  <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
                <a 
                  href="https://www.facebook.com/kibersurfschool" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Facebook Kiber Surf School"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all shadow-sm group"
                >
                  <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
                <a 
                  href="https://wa.me/351932785146" 
                  target="_blank" 
                  rel="noreferrer"
                  title="WhatsApp Kiber Surf School"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-transparent transition-all shadow-sm group"
                >
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Column 2: Morada */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-[#f18719] text-sm uppercase tracking-wider font-sans">
                Morada
              </h4>
              <div className="space-y-1 text-slate-300 leading-relaxed">
                <p className="font-medium text-white">Kiber Surf School</p>
                <p>Rua Carlos de Carvalho, 28 R/C</p>
                <p>4450-094 Matosinhos</p>
                <p>Porto, Portugal</p>
              </div>
            </div>

            {/* Column 3: Links */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-[#f18719] text-sm uppercase tracking-wider font-sans">
                Links Úteis
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button onClick={() => navigateToSection('sobre')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Sobre Nós &amp; Equipa
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('aulas')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Aulas &amp; Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('contacto')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Contactos &amp; Localização
                  </button>
                </li>
                <li>
                  <a href="#_" className="hover:text-white transition-colors">Termos e Condições</a>
                </li>
                <li>
                  <a href="#_" className="hover:text-white transition-colors">Livro de Reclamações</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Certificações */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-[#f18719] text-sm uppercase tracking-wider font-sans">
                Certificações
              </h4>
              
              {/* Badges oficiais das entidades certificadoras: FPS, IPDJ, ASI */}
              <div className="flex flex-col gap-2.5 pt-1">
                {/* FPS - Federação Portuguesa de Surf */}
                <div 
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/10 hover:border-[#f18719]/40 px-3.5 py-2 rounded-xl text-slate-200 transition-colors" 
                  title="FPS - Federação Portuguesa de Surf"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f18719]/15 border border-[#f18719]/30 flex items-center justify-center text-[#f18719] font-black text-xs shrink-0">
                    FPS
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-bold text-white tracking-wide">FPS</span>
                    <span className="text-[10px] text-slate-400 font-medium">Federação Portuguesa de Surf</span>
                  </div>
                </div>

                {/* IPDJ - Instituto Português do Desporto e Juventude */}
                <div 
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 px-3.5 py-2 rounded-xl text-slate-200 transition-colors" 
                  title="IPDJ - Instituto Português do Desporto e Juventude"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-xs shrink-0">
                    IPDJ
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-bold text-white tracking-wide">IPDJ</span>
                    <span className="text-[10px] text-slate-400 font-medium">Instituto Português do Desporto e Juventude</span>
                  </div>
                </div>

                {/* ASI - Academy of Surfing Instructors */}
                <div 
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 px-3.5 py-2 rounded-xl text-slate-200 transition-colors" 
                  title="ASI - Academy of Surfing Instructors"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-xs shrink-0">
                    ASI
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-bold text-white tracking-wide">ASI</span>
                    <span className="text-[10px] text-slate-400 font-medium">Academy of Surfing Instructors</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-slate-600 font-mono text-[10px]">
            <p>
              © 2026 Kiber Surf School • Matosinhos, Porto, Portugal. Todos os direitos reservados.
            </p>
            <p className="uppercase tracking-widest text-[#f18719]">
              Escola Certificada FPS • IPDJ • ASI
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

