import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCode, Clock, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Contact Credentials & Customized Map */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-[#ffe6cc] px-4 py-1.5 rounded-full inline-block">
                Localização & Contactos
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 uppercase">
                Vem Surfar Connosco!
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Estamos localizados na Praia de Matosinhos, Porto, mesmo em frente à melhor zona para desportos aquáticos e aprendizagem de surf. Passa pela escola para tomares um banho quente, veres as pranchas ou beberes um café!
              </p>
            </div>

            {/* Credential Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 bg-[#ffe6cc] text-[#f18719] rounded-xl font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm font-sans uppercase tracking-wider">A Nossa Sede Física</h4>
                  <p className="text-xs text-slate-600 mt-1 font-sans">
                    Rua Carlos de Carvalho, 28 R/C (Próximo à marginal da praia de Matosinhos)
                  </p>
                  <p className="text-xs text-[#f18719] font-bold mt-1 font-mono">4450-094 Matosinhos, Porto, Portugal</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm font-sans uppercase tracking-wider">Telemóvel & WhatsApp Directo</h4>
                  <a href="tel:00351932785146" className="text-xs text-slate-900 mt-1 font-mono font-bold hover:text-[#f18719] transition-colors block">
                    00351 932 785 146
                  </a>
                  <p className="text-[10px] text-emerald-600 font-bold mt-0.5 uppercase tracking-wider">Atendimento oficial da escola • Resposta rápida</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl font-bold">
                  <Mail className="w-5 h-5 text-[#f18719]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm font-sans uppercase tracking-wider">Email para Reservas</h4>
                  <a href="mailto:reservaskiber@gmail.com" className="text-xs text-slate-900 mt-1 font-mono font-bold hover:text-[#f18719] transition-colors block">
                    reservaskiber@gmail.com
                  </a>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Informações e confirmações de reservas</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold">
                  <Clock className="w-5 h-5 text-[#f18719]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#121214] text-sm font-sans uppercase tracking-wider">Horário de Atendimento</h4>
                  <p className="text-xs text-slate-600 mt-1 font-sans">Todos os dias: das 08h00 às 20h00 (Sábados e Domingos incluídos)</p>
                </div>
              </div>
            </div>

            {/* Custom Stylized Map Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 relative overflow-hidden block text-center space-y-4 shadow-sm">
              <div className="absolute inset-0 bg-[#f18719]/5 -z-10"></div>
              
              <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 text-left relative overflow-hidden">
                <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-[#ffe6cc] px-2 py-0.5 rounded border border-[#f18719]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f18719] animate-pulse"></span>
                  <span className="text-[8px] font-mono font-bold text-[#f18719] uppercase">COORD 41.1798° N, 8.6852° W</span>
                </div>

                <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider font-bold">Spot de Surf Central</span>
                <h4 className="font-black text-[#121214] text-sm font-sans mt-0.5 uppercase font-sans">Praia de Matosinhos - Porto</h4>
                
                {/* Simulated Wave-contours on map */}
                <div className="h-28 flex items-center justify-center border-t border-slate-200 mt-3 relative overflow-hidden bg-white rounded-xl">
                  <div className="absolute inset-x-0 bottom-4 h-1 bg-[#f18719]/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-x-8 bottom-8 h-1 bg-[#f18719]/10 rounded-full"></div>
                  <div className="absolute inset-x-12 bottom-12 h-1 bg-[#f18719]/5 rounded-full"></div>
                  
                  {/* Pin indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
                    <span className="bg-[#121214] text-white text-[10px] uppercase tracking-wider font-black px-2.5 py-0.5 rounded shadow-sm animate-bounce">Kiber S.S.</span>
                    <div className="w-2.5 h-2.5 bg-[#f18719] rounded-full ring-4 ring-[#f18719]/25"></div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono absolute left-4 top-4 font-bold">OCEANO ATLÂNTICO</span>
                  <span className="text-[10px] text-slate-400 font-mono absolute right-4 bottom-4 font-bold">MOLHE DE LEIXÕES</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Praia+de+Matosinhos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full transition-all cursor-pointer"
              >
                <span>Abrir no Google Maps do Telemóvel</span>
              </a>
            </div>

          </div>

          {/* Column 2: Message Sender Form */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative text-left">
            <div className="space-y-4 mb-8">
              <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-[#ffe6cc] px-4 py-1.5 rounded-full inline-block">
                Contacto Directo
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
                Envie-nos uma Mensagem
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tem dúvidas sobre marcas de pranchas, fatos, formação desportiva, ou quer orçamentos para um aniversário, team-building da empresa ou aulas regulares mensais? Preencha os dados e respondemos rapidamente.
              </p>
            </div>

            {isSent ? (
              <div className="bg-emerald-50 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4 animate-scaleUp">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-lg uppercase font-sans">Mensagem Entregue!</h4>
                  <p className="text-xs text-slate-600">
                    Obrigado pelo seu contacto. Um dos nossos Head Coaches irá responder para o seu email nas próximas horas.
                  </p>
                </div>
                <button
                  onClick={() => setIsSent(false)}
                  className="bg-[#f18719] hover:bg-[#db760f] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full cursor-pointer transition-all"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700">O seu Nome Completo</label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Ex: Pedro Fonseca"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:border-[#f18719] focus:outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#f18719]/35"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">O seu Endereço de Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="Ex: pedro@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:border-[#f18719] focus:outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#f18719]/35"
                    />
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700">Mensagem ou Questão</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Pedimos que descreva de forma sucinta qual a aula em mente, datas livres ou se quer apenas partilhar ideias de treino connosco..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:border-[#f18719] focus:outline-none placeholder-slate-400 resize-none focus:ring-1 focus:ring-[#f18719]/35"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-extrabold text-xs uppercase tracking-widest py-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submeter Mensagem</span>
                </button>
              </form>
            )}

            {/* Multi-language accessibility statement */}
            <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-sans italic">
              * Atendimento multilingue ativo. Falamos fluentemente Português, Inglês, Francês, Espanhol e Russo para maior comodidade dos nossos alunos estrangeiros.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
