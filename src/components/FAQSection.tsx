import React, { useState } from 'react';
import { FAQS, REVIEWS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Quote, Star } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Testimonials & Reviews */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-[#ffe6cc] px-4 py-1.5 rounded-full inline-block">
                Opiniões de Alunos
              </span>
              <h2 className="text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
                Quem experimenta,<br />partilha a onda!
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Veja o que os nossos surfistas nacionais e internacionais dizem sobre a Kiber Surf School na Praia de Matosinhos. Focamo-nos 100% na experiência deles.
              </p>
            </div>

            {/* Testimonials List */}
            <div className="space-y-6">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4 text-left"
                >
                  <Quote className="w-8 h-8 text-[#ffe6cc] absolute top-4 right-4" />
                  
                  <div className="flex gap-1 py-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed font-sans relative z-10">
                    "{rev.comment}"
                  </p>

                  <div className="flex justify-between items-center pt-3 text-xs border-t border-slate-100">
                    <div>
                      <h4 className="font-extrabold text-slate-900 font-sans uppercase tracking-wider">{rev.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">{rev.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Accordion FAQ Questions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-[#ffe6cc] px-4 py-1.5 rounded-full inline-block">
                Centro de Suporte
              </span>
              <h3 className="text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
                Dúvidas Frequentes (FAQ)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tudo o que precisas de saber para preparares a tua entrada na água com a Kiber Surf School. Se tiveres outra pergunta, fala connosco!
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-250 overflow-hidden transition-all duration-200 shadow-xs"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-sans font-extrabold text-base text-slate-900 hover:text-[#f18719] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-[#f18719] shrink-0" />
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 animate-slideDown">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Need More Help Box */}
            <div className="bg-[#121214] border border-[#f18719]/25 rounded-2xl p-6 text-white text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1">
                <h4 className="font-sans font-black text-white text-base uppercase">Ficou com alguma questão por esclarecer?</h4>
                <p className="text-xs text-slate-400">Entre em contacto imediato com a nossa equipa por WhatsApp ou Email.</p>
              </div>
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noreferrer"
                className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
