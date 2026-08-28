import React from 'react';
import { Mail, Phone, MapPin, Clock, Navigation } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-[#ffe6cc] px-4 py-1.5 rounded-full inline-block">
            Localização & Contactos
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 uppercase">
            Vem Surfar Connosco!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Estamos localizados na Praia de Matosinhos, Porto, mesmo em frente à melhor zona para desportos aquáticos e aprendizagem de surf. Passa pela escola para tomares um banho quente, veres as pranchas ou falar diretamente com a nossa equipa!
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Top: Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Sede Física */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="p-3 bg-[#ffe6cc] text-[#f18719] rounded-xl font-bold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm font-sans uppercase tracking-wider">A Nossa Sede</h4>
                  <p className="text-xs text-slate-600 mt-1 font-sans leading-relaxed">
                    Rua Carlos de Carvalho, 28 R/C (Junto à marginal da praia de Matosinhos)
                  </p>
                  <p className="text-xs text-[#f18719] font-bold mt-1 font-mono">4450-094 Matosinhos, Porto</p>
                </div>
              </div>

              {/* Telemóvel & WhatsApp */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl font-bold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm font-sans uppercase tracking-wider">Telemóvel / WhatsApp</h4>
                  <a href="tel:00351932785146" className="text-xs sm:text-sm text-slate-900 mt-1 font-mono font-bold hover:text-[#f18719] transition-colors block">
                    00351 932 785 146
                  </a>
                  <p className="text-[11px] text-emerald-600 font-bold mt-1 uppercase tracking-wider">Resposta rápida</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="p-3 bg-amber-100 text-amber-800 rounded-xl font-bold shrink-0">
                  <Mail className="w-5 h-5 text-[#f18719]" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm font-sans uppercase tracking-wider">Email Oficial</h4>
                  <a href="mailto:reservaskiber@gmail.com" className="text-xs sm:text-sm text-slate-900 mt-1 font-mono font-bold hover:text-[#f18719] transition-colors block break-all">
                    reservaskiber@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Informações gerais e marcações</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="p-3 bg-slate-100 text-slate-700 rounded-xl font-bold shrink-0">
                  <Clock className="w-5 h-5 text-[#f18719]" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm font-sans uppercase tracking-wider">Horário de Atendimento</h4>
                  <p className="text-xs text-slate-700 font-bold mt-1 font-sans">Todos os dias: 08h00 – 20h00</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Aberto aos fins de semana e feriados</p>
                </div>
              </div>

            </div>

            {/* Language Note Banner */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 font-sans shadow-xs flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
              <span>
                <strong>Atendimento Multilingue:</strong> Falamos fluentemente Português, Inglês, Francês, Espanhol e Russo para maior comodidade dos nossos alunos.
              </span>
            </div>
          </div>

          {/* Right: Interactive Stylized Map Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xs text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Spot de Surf Central</span>
                <div className="flex items-center gap-1.5 bg-[#ffe6cc] px-2.5 py-1 rounded-full border border-[#f18719]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f18719] animate-pulse"></span>
                  <span className="text-[9px] font-mono font-bold text-[#f18719] uppercase">41.1798° N, 8.6852° W</span>
                </div>
              </div>

              <h4 className="font-black text-slate-900 text-lg font-sans uppercase">Praia de Matosinhos • Porto</h4>
              <p className="text-xs text-slate-500">
                Ponto de encontro em frente à escola, a 30 metros da areia e com balneários próprios.
              </p>
            </div>

            {/* Stylized Ocean Graphic Area */}
            <div className="h-44 flex items-center justify-center border border-slate-200 my-4 relative overflow-hidden bg-gradient-to-b from-sky-50 to-slate-100 rounded-2xl">
              <div className="absolute inset-x-0 bottom-4 h-1 bg-[#f18719]/25 rounded-full animate-pulse"></div>
              <div className="absolute inset-x-8 bottom-10 h-1 bg-[#f18719]/15 rounded-full"></div>
              <div className="absolute inset-x-12 bottom-16 h-1 bg-[#f18719]/10 rounded-full"></div>
              
              {/* Pin indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
                <span className="bg-slate-900 text-white text-[10px] uppercase tracking-wider font-black px-3 py-1 rounded-md shadow-md animate-bounce">
                  Kiber Surf School
                </span>
                <div className="w-3.5 h-3.5 bg-[#f18719] rounded-full ring-4 ring-[#f18719]/30"></div>
              </div>

              <span className="text-[10px] text-slate-400 font-mono absolute left-4 top-4 font-bold tracking-wider">OCEANO ATLÂNTICO</span>
              <span className="text-[10px] text-slate-400 font-mono absolute right-4 bottom-4 font-bold tracking-wider">MOLHE DE LEIXÕES</span>
            </div>

            <a
              href="https://maps.google.com/?q=Praia+de+Matosinhos"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full justify-center items-center gap-2 bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir Localização no Google Maps</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
