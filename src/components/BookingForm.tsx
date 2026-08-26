import React, { useState, useEffect } from 'react';
import { LESSONS, TIME_SLOTS } from '../data';
import { Lesson, TimeSlot, PaymentMethod, Booking } from '../types';
import { Calendar, User2, Mail, Phone, Users, ShieldCheck, CreditCard, ChevronRight, MessageSquareCode } from 'lucide-react';

interface BookingFormProps {
  selectedLesson: Lesson | null;
  onBookingSuccess: (newBooking: Booking) => void;
}

export default function BookingForm({ selectedLesson, onBookingSuccess }: BookingFormProps) {
  // Preselected or default
  const [lesson, setLesson] = useState<Lesson>(LESSONS[0]);
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [participants, setParticipants] = useState<number>(1);
  const [includeWetsuit, setIncludeWetsuit] = useState<boolean>(true);
  const [includeBoard, setIncludeBoard] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mbway');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'unconfirmed-mb' | 'success'>('idle');
  const [mbwayPhone, setMbwayPhone] = useState<string>('');
  
  // Simulated references for Multibanco
  const [mbReference, setMbReference] = useState<{ entity: string; reference: string } | null>(null);

  // Sync if lesson changes from parent card selection
  useEffect(() => {
    if (selectedLesson) {
      setLesson(selectedLesson);
      // Auto scroll to Agendar
      const element = document.getElementById('agendar');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedLesson]);

  // Set default date as tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
    setTimeSlot(TIME_SLOTS[0].time);
  }, []);

  // Compute total dynamic price
  const basePrice = lesson.price;
  const gearAddon = (includeWetsuit ? 5 : 0) + (includeBoard ? 5 : 0);
  // Packs, rentals, monthly, and guides scale differently or have static equipment included
  const isExcludedFromAddons = lesson.category === 'rental' || lesson.category === 'pack' || lesson.category === 'monthly' || lesson.category === 'guide';
  const totalAmount = (basePrice + (!isExcludedFromAddons ? gearAddon : 0)) * participants;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Por favor, preencha todos os dados pessoais do aluno.');
      return;
    }

    setPaymentStatus('processing');

    // Simulate Payment Provider Response
    setTimeout(() => {
      const invoiceNum = 'FT-' + Math.floor(100000 + Math.random() * 900000);
      const generatedRef = paymentMethod === 'multibanco' ? {
        entity: '21054',
        reference: Math.floor(100000000 + Math.random() * 900000000).toString().replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
      } : null;

      if (paymentMethod === 'multibanco') {
        setMbReference(generatedRef);
        setPaymentStatus('unconfirmed-mb');
      } else {
        // Complete checkout booking object
        const finalBooking: Booking = {
          id: 'BK-' + Math.floor(10000 + Math.random() * 90000),
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          lessonPrice: lesson.price,
          category: lesson.category,
          date,
          timeSlot,
          name,
          email,
          phone,
          participants,
          includeWetsuit,
          includeBoard,
          totalAmount,
          paymentMethod,
          paymentStatus: 'success',
          invoiceNumber: invoiceNum,
          timestamp: new Date().toLocaleString('pt-PT')
        };
        
        onBookingSuccess(finalBooking);
        setPaymentStatus('success');
      }
    }, 2200);
  };

  const handleConfirmMultibancoSimulation = () => {
    const invoiceNum = 'FT-' + Math.floor(100000 + Math.random() * 900000);
    const finalBooking: Booking = {
      id: 'BK-' + Math.floor(10000 + Math.random() * 90000),
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonPrice: lesson.price,
      category: lesson.category,
      date,
      timeSlot,
      name,
      email,
      phone,
      participants,
      includeWetsuit,
      includeBoard,
      totalAmount,
      paymentMethod,
      paymentStatus: 'success',
      invoiceNumber: invoiceNum,
      timestamp: new Date().toLocaleString('pt-PT')
    };

    onBookingSuccess(finalBooking);
    setPaymentStatus('success');
  };

  const resetFormState = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMbwayPhone('');
    setParticipants(1);
    setPaymentStatus('idle');
    setMbReference(null);
  };

  return (
    <section id="agendar" className="py-20 bg-white text-slate-800 border-t border-slate-150 relative">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Step Headings */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-[#ffe6cc] px-4 py-1.5 rounded-full inline-block">
            Portal de Reserva & Pagamento Online
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-950 uppercase">
            Agende a Sua Aula no Mar
          </h2>
          <p className="text-sm text-slate-600">
            Configure abaixo os detalhes da sua sessão de surf e pague de forma segura usando MBWay, Cartão ou Multibanco. De imediato poderá descarregar a sua fatura-recibo.
          </p>
        </div>

        {/* Dynamic Display Widget on Success */}
        {paymentStatus === 'success' ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-md animate-scaleUp">
            <div className="w-16 h-16 bg-[#f18719] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <ShieldCheck className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#f18719] uppercase tracking-wider">Simulação Aprovada</span>
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-slate-950 uppercase">Pagamento Confirmado!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Parabéns {name}! O seu agendamento de surf para o dia <strong className="text-[#f18719] font-bold">{date}</strong> está registado. Um email detalhado com o mapa de Matosinhos e instruções de maré foi enviado.
              </p>
            </div>

            {/* Quick Invoice overview inside portal */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 max-w-sm mx-auto text-left space-y-2.5 text-xs font-mono text-slate-700 shadow-sm">
              <div className="flex justify-between">
                <span>Reserva ID:</span>
                <span className="text-[#f18719] font-bold">BK-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Serviço:</span>
                <span className="text-[#f18719] font-bold truncate max-w-[180px]">{lesson.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Data de Aula:</span>
                <span className="text-slate-900 font-bold">{date}</span>
              </div>
              <div className="flex justify-between">
                <span>Horário:</span>
                <span className="text-slate-600">{timeSlot}</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-2.5 text-sm text-[#f18719] font-black">
                <span>Total Pago:</span>
                <span>{totalAmount} €</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                id="view-portal-btn-booking"
                onClick={() => {
                  const el = document.getElementById('minhas-reservas');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#f18719] text-white hover:bg-[#db760f] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                Gerir Reservas no Painel
              </button>
              <button
                onClick={resetFormState}
                className="bg-transparent hover:bg-slate-100 text-slate-600 font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all border border-slate-200 cursor-pointer"
              >
                Fazer Nova Reserva
              </button>
            </div>
          </div>
        ) : paymentStatus === 'unconfirmed-mb' && mbReference ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-md animate-scaleUp text-left">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <span className="bg-blue-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded">
                SIMULADOR MULTIBANCO
              </span>
              <span className="text-xs text-slate-500 font-medium">Pagar em 24 Horas</span>
            </div>

            <p className="text-sm text-slate-600 font-sans">
              Geramos com sucesso os dados de pagamento Multibanco. No cenário real, o aluno pagaria na caixa de multibanco ATM ou no Homebanking. No nosso simulador, <strong>clique no botão abaixo</strong> para simular o recebimento do webhook do banco.
            </p>

            <div className="bg-white border border-slate-150 rounded-3xl p-6 max-w-sm mx-auto space-y-4 shadow-sm">
              <div className="flex justify-center">
                <div className="bg-orange-50 text-[#f18719] p-2.5 rounded-xl border border-[#ffe6cc]">
                  <CreditCard className="w-8 h-8 text-[#f18719]" />
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-700">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span>Entidade:</span>
                  <span className="text-[#f18719] font-black text-sm tracking-widest">{mbReference.entity}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span>Referência:</span>
                  <span className="text-[#f18719] font-black text-sm tracking-widest">{mbReference.reference}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Montante:</span>
                  <span className="text-[#f18719] font-black text-sm">{totalAmount} €</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                id="simulate-mb-payment"
                onClick={handleConfirmMultibancoSimulation}
                className="bg-[#f18719] text-white hover:bg-[#db760f] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
              >
                Simular Pagamento Efetuado (ATM)
              </button>
              <button
                onClick={() => setPaymentStatus('idle')}
                className="bg-transparent hover:bg-slate-100 text-slate-600 font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-slate-200 cursor-pointer"
              >
                Voltar e Mudar Método
              </button>
            </div>
          </div>
        ) : (
          /* Core Responsive Interactive Form Wizard */
          <form
            onSubmit={handleSubmitBooking}
            className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-10 shadow-lg text-left space-y-8 relative overflow-hidden"
          >
            {paymentStatus === 'processing' && (
              <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-center space-y-4">
                <div className="w-12 h-12 border-4 border-[#f18719] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-bold text-[#f18719] tracking-wider uppercase">A processar transação de pagamento segura...</p>
                <p className="text-xs text-slate-500 font-sans">A contactar o servidor nacional de pagamentos de forma cifrada...</p>
              </div>
            )}

            {/* Step 1: Configurar Aula & Horário */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="flex items-center justify-center bg-orange-50 text-[#f18719] text-xs font-mono font-bold w-6 h-6 rounded-full border border-[#ffe6cc]">1</span>
                <h3 className="font-sans font-black text-lg text-slate-900 uppercase">Configurar Serviço & Sessão</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Select Class Category */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="select-lesson-input" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Tipo de Serviço Escolhido
                  </label>
                  <select
                    id="select-lesson-input"
                    value={lesson.id}
                    onChange={(e) => {
                      const found = LESSONS.find(l => l.id === e.target.value);
                      if (found) setLesson(found);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:border-[#f18719] focus:outline-none focus:ring-1 focus:ring-[#f18719]/35 cursor-pointer font-medium"
                  >
                    {LESSONS.map((l) => (
                      <option key={l.id} value={l.id} className="bg-white text-slate-850">
                        {l.title} (Preço base: {l.price}€)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Picker Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="booking-date" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Escolher Dia da Aula
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="booking-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:border-[#f18719] focus:outline-none focus:ring-1 focus:ring-[#f18719]/35 cursor-pointer font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Tide Slot Selectors (High-Tech alignment) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                  Escolher Horário Ajustado às Marés (Praia de Matosinhos)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TIME_SLOTS.map((slot, idx) => {
                    const isSelected = timeSlot === slot.time;
                    return (
                      <button
                        key={idx}
                        type="button"
                        id={`timeslot-option-${idx}`}
                        disabled={!slot.isAvailable}
                        onClick={() => setTimeSlot(slot.time)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-orange-50/70 border-[#f18719] text-[#f18719] shadow-sm'
                            : 'bg-white border-slate-200 text-slate-650 hover:border-[#f18719]/40 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className={`${isSelected ? 'text-[#f18719] font-black' : 'text-slate-700'}`}>{slot.time}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                            slot.tideState === 'Maré Baixa' ? 'bg-orange-100 text-[#f18719]' : 'bg-blue-50 text-blue-600'
                          }`}>
                            {slot.tideState}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1.5 leading-tight font-sans">
                          {slot.suitability}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2: Dados Individuais do Aluno */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="flex items-center justify-center bg-orange-50 text-[#f18719] text-xs font-mono font-bold w-6 h-6 rounded-full border border-[#ffe6cc]">2</span>
                <h3 className="font-sans font-black text-lg text-slate-900 uppercase">Dados do Aluno Responsável</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="student-name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Nome do Aluno principal</label>
                  <div className="relative">
                    <User2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="student-name"
                      placeholder="Ex: João Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:border-[#f18719] focus:outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#f18719]/35"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="student-email" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Endereço de Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      id="student-email"
                      placeholder="Ex: joao@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:border-[#f18719] focus:outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#f18719]/35"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="student-phone" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Telemóvel (+351)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      id="student-phone"
                      placeholder="912345678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:border-[#f18719] focus:outline-none placeholder-slate-400 focus:ring-1 focus:ring-[#f18719]/35"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Participantes, Material & Pagamento */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="flex items-center justify-center bg-orange-50 text-[#f18719] text-xs font-mono font-bold w-6 h-6 rounded-full border border-[#ffe6cc]">3</span>
                <h3 className="font-sans font-black text-lg text-slate-900 uppercase">Configurar Adicionais & Método</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Participants & Materials */}
                <div className="space-y-4 bg-slate-50 rounded-2xl p-5 border border-slate-150 text-left">
                  {/* Number of Participants */}
                  <div className="space-y-1.5">
                    <label htmlFor="participants-input" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Número de Alunos</label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="number"
                        id="participants-input"
                        min="1"
                        max={lesson.category === 'private' ? '2' : '6'}
                        value={participants}
                        onChange={(e) => setParticipants(parseInt(e.target.value) || 1)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:border-[#f18719] focus:outline-none focus:ring-1 focus:ring-[#f18719]/35"
                      />
                    </div>
                    {lesson.category === 'private' && (
                      <p className="text-[10px] text-[#f18719] font-bold">Máximo de 2 participantes devido à supervisão dedicada do treinador.</p>
                    )}
                  </div>

                  {/* Material include Addons (only if not Rental, Pack, or Monthly which is loaded automatically) */}
                  {lesson.category !== 'rental' && lesson.category !== 'pack' && lesson.category !== 'monthly' && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">Equipamento Extra necessário?</span>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          id="addon-wetsuit-toggle"
                          onClick={() => setIncludeWetsuit(!includeWetsuit)}
                          className={`p-2.5 rounded-xl border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                            includeWetsuit
                              ? 'bg-orange-50 border-[#f18719] text-[#f18719] shadow-sm'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-[#f18719]/30'
                          }`}
                        >
                          Fato Térmico (+5€)
                        </button>

                        <button
                          type="button"
                          id="addon-board-toggle"
                          onClick={() => setIncludeBoard(!includeBoard)}
                          className={`p-2.5 rounded-xl border text-xs font-mono font-bold text-center transition-all cursor-pointer ${
                            includeBoard
                              ? 'bg-orange-50 border-[#f18719] text-[#f18719] shadow-sm'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-[#f18719]/30'
                          }`}
                        >
                          Prancha Kiber (+5€)
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Selection Box */}
                <div className="space-y-4 bg-slate-50 rounded-2xl p-5 border border-slate-150 text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">Forma de Pagamento Segura</span>
                  
                  <div className="space-y-2.5">
                    {/* MBWay button */}
                    <button
                      type="button"
                      id="pay-mbway"
                      onClick={() => setPaymentMethod('mbway')}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        paymentMethod === 'mbway'
                          ? 'bg-orange-50 border-[#f18719] text-[#f18719] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-500 hover:border-[#f18719]/30'
                      }`}
                    >
                      <span className="flex items-center gap-3 text-xs font-bold font-sans">
                        <span className="w-5 h-5 bg-pink-500 rounded-lg text-white font-black text-[9px] flex items-center justify-center">MBw</span>
                        MB Way (Nacional)
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>

                    {/* Credit card */}
                    <button
                      type="button"
                      id="pay-card"
                      onClick={() => setPaymentMethod('card')}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'bg-orange-50 border-[#f18719] text-[#f18719] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-500 hover:border-[#f18719]/30'
                      }`}
                    >
                      <span className="flex items-center gap-3 text-xs font-bold font-sans">
                        <CreditCard className="w-5 h-5 text-[#f18719]" />
                        Cartão de Crédito (Stripe Simulado)
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>

                    {/* Multibanco */}
                    <button
                      type="button"
                      id="pay-multibanco"
                      onClick={() => setPaymentMethod('multibanco')}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        paymentMethod === 'multibanco'
                          ? 'bg-orange-50 border-[#f18719] text-[#f18719] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-500 hover:border-[#f18719]/30'
                      }`}
                    >
                      <span className="flex items-center gap-3 text-xs font-bold font-sans">
                        <span className="w-5 h-5 bg-blue-600 rounded-lg text-white font-black text-[9px] flex items-center justify-center">ATM</span>
                        Referência Multibanco (Simulada)
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>

                  {paymentMethod === 'mbway' && (
                    <div className="space-y-1.5 animate-fadeIn">
                      <label htmlFor="mbway-phone-input" className="text-[10px] text-slate-500 uppercase tracking-wider block font-extrabold pb-0.5">Telemóvel registado no MBWay</label>
                      <input
                        type="tel"
                        id="mbway-phone-input"
                        placeholder="Ex: 912345678"
                        required
                        value={mbwayPhone}
                        onChange={(e) => setMbwayPhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:border-[#f18719] focus:outline-none"
                      />
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Price Calculations and checkout triggers */}
            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
              
              <div className="text-left space-y-1">
                <span className="text-[#f18719] text-xs font-mono uppercase font-black">Resumo de Cobrança:</span>
                <p className="text-xs text-slate-500 font-sans font-medium">
                  {participants}x {lesson.title} {lesson.category !== 'rental' && lesson.category !== 'pack' && `+ gear (${includeWetsuit ? 'Fato' : ''} ${includeBoard ? 'Prancha' : ''})`}
                </p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl font-black text-[#f18719]">{totalAmount}</span>
                  <span className="text-lg font-bold text-[#f18719]">€</span>
                  <span className="text-xs text-slate-400 font-sans ml-2">(IVA de 23% incluído no custo final)</span>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <button
                  type="submit"
                  id="checkout-trigger-btn"
                  className="w-full md:w-auto bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-extrabold text-xs uppercase tracking-widest px-8 py-4.5 rounded-xl shadow-md transition-all cursor-pointer text-center"
                >
                  Confirmar Reserva ({totalAmount}€)
                </button>
              </div>

            </div>

          </form>
        )}

      </div>
    </section>
  );
}
