import React, { useState } from 'react';
import { Booking } from '../types';
import { Landmark, Calendar, Download, Trash2, ShieldCheck, Clock, FileText, Printer, CheckCircle } from 'lucide-react';

interface ClientDashboardProps {
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
  onNavigateToBooking: () => void;
}

export default function ClientDashboard({ bookings, onCancelBooking, onNavigateToBooking }: ClientDashboardProps) {
  const [selectedInvoice, setSelectedInvoice] = useState<Booking | null>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="minhas-reservas" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#f18719] uppercase bg-brand-yellow-100 px-4 py-1.5 rounded-full inline-block">
            Painel do Aluno - Kiber Surf Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#121214] uppercase">
            As Minhas Reservas
          </h2>
          <p className="text-sm text-slate-600">
            Acompanhe o estado de aprovação das suas aulas de surf, reveja o seu histórico de pagamentos e aceda a faturas digitais completas (em PDF/Impressão) prontas para apresentação.
          </p>
        </div>

        {bookings.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-500">
              <Calendar className="w-8 h-8 text-[#f18719]" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-sans font-extrabold text-[#121214] uppercase">Nenhum agendamento ativo</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Ainda não agendou nenhuma aula de surf para esta época. Escolha um dos pacotes de grupo ou aulas privadas da Kiber na praia de Matosinhos e prepare a prancha!
              </p>
            </div>

            <div>
              <button
                id="search-lessons-dashboard-link"
                onClick={onNavigateToBooking}
                className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                Buscar Aulas de Surf
              </button>
            </div>
          </div>
        ) : (
          /* List of Bookings */
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-600 font-bold">Total de Reservas: {bookings.length}</span>
                <span className="text-xs text-emerald-600 flex items-center gap-1 font-bold">
                  <CheckCircle className="w-4 h-4" /> 
                  Sincronizado com o Sistema Local
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    id={`booking-row-${booking.id}`}
                    className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left"
                  >
                    {/* Booking Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs text-slate-500 font-mono font-bold tracking-wider">{booking.id}</span>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded border border-emerald-200 uppercase">
                          {booking.paymentStatus === 'success' ? 'Pago' : 'Pendente'}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">({booking.paymentMethod.toUpperCase()})</span>
                      </div>

                      <h4 className="text-xl font-sans font-black text-[#121214] uppercase">{booking.lessonTitle}</h4>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600 font-sans">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#f18719]" />
                          <span>Dia: <strong className="text-slate-800 font-bold">{booking.date}</strong></span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#f18719]" />
                          <span>Hora: <strong className="text-slate-800 font-bold">{booking.timeSlot}</strong></span>
                        </div>
                        <div>
                          <span>Alunos: <strong className="text-slate-800 font-bold">{booking.participants}x</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing, Invoicing actions & Cancellation */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-2 md:pt-0">
                      <div className="text-left md:text-right">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Cobrado</span>
                        <span className="text-2xl font-black text-[#f18719] font-sans">{booking.totalAmount} €</span>
                      </div>

                      <div className="flex gap-2">
                        {/* Invoice toggle */}
                        <button
                          id={`view-invoice-btn-${booking.id}`}
                          onClick={() => setSelectedInvoice(booking)}
                          className="bg-[#f18719] hover:bg-[#db760f] text-white p-2.5 px-4 rounded-full cursor-pointer flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Ver Fatura</span>
                        </button>

                        {/* Cancellation button */}
                        <button
                          id={`cancel-booking-btn-${booking.id}`}
                          onClick={() => {
                            if (confirm('Tem certeza que pretende desmarcar ou remover este agendamento de surf?')) {
                              onCancelBooking(booking.id);
                            }
                          }}
                          className="bg-transparent hover:bg-red-50 text-slate-500 hover:text-red-650 p-2.5 px-3 rounded-full border border-slate-300 hover:border-red-300 cursor-pointer transition-all"
                          title="Remover Agendamento"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Tax Invoice/Receipt modal pop-up block */}
            {selectedInvoice && (
              <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-center items-center p-4 animate-fadeIn">
                <div className="bg-white text-slate-900 rounded-3xl w-full max-w-lg overflow-hidden border border-slate-200 shadow-2xl animate-scaleUp pt-6">
                  
                  {/* Digital Invoice Header */}
                  <div className="px-6 pb-4 border-b border-slate-100 flex justify-between items-start text-left">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-sans font-black tracking-wider text-lg text-[#121214]">KIBER SURF</span>
                        <span className="px-1 text-[8px] font-mono font-bold bg-[#f18719] text-white rounded">
                          SISTEMA CERTIFICADO
                        </span>
                      </div>
                      <p className="text-[9px] font-mono text-slate-400 tracking-wider">KIBER SURF SCHOOL LDA • NIF 514289320</p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full inline-block">
                        DOCUMENTO QUITADO
                      </span>
                      <p className="text-xs font-mono text-slate-500 mt-1">{selectedInvoice.invoiceNumber}</p>
                    </div>
                  </div>

                  {/* Invoice Body content inside modal */}
                  <div className="p-6 space-y-6 text-left max-h-[420px] overflow-y-auto">
                    
                    {/* Customer billing address */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="font-bold text-slate-400 uppercase text-[9px] font-mono">Prestador:</p>
                        <p className="font-bold text-slate-800 font-sans text-sm">Kiber Surf School Lda</p>
                        <p className="text-slate-500 font-sans leading-tight mt-0.5">Rua Carlos de Carvalho, 28 R/C<br />4450-094 Matosinhos, Porto</p>
                      </div>
                      <div>
                        <p className="font-bold text-slate-400 uppercase text-[9px] font-mono">Adquirente (Aluno):</p>
                        <p className="font-bold text-slate-[#121214] font-sans text-sm">{selectedInvoice.name}</p>
                        <p className="text-slate-600 mt-0.5">✉ {selectedInvoice.email}</p>
                        <p className="text-slate-600 mt-0.5">☎ {selectedInvoice.phone}</p>
                      </div>
                    </div>

                    {/* Scheduled Item breakdown table */}
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-400 font-mono">
                          <th className="py-2 text-left font-normal uppercase text-[9px]">Artigo / Serviço</th>
                          <th className="py-2 text-right font-normal uppercase text-[9px]">Qtd.</th>
                          <th className="py-2 text-right font-normal uppercase text-[9px]">P.Unit</th>
                          <th className="py-2 text-right font-normal uppercase text-[9px]">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans text-slate-700">
                        <tr>
                          <td className="py-3">
                            <p className="font-bold text-slate-800">{selectedInvoice.lessonTitle}</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Sessão {selectedInvoice.date} às {selectedInvoice.timeSlot}</p>
                          </td>
                          <td className="py-3 text-right">{selectedInvoice.participants}</td>
                          <td className="py-3 text-right">{selectedInvoice.lessonPrice} €</td>
                          <td className="py-3 text-right font-bold text-slate-800">{(selectedInvoice.lessonPrice * selectedInvoice.participants)} €</td>
                        </tr>
                        {selectedInvoice.category !== 'rental' && selectedInvoice.category !== 'pack' && (selectedInvoice.includeBoard || selectedInvoice.includeWetsuit) && (
                          <tr>
                            <td className="py-3">
                              <p className="font-bold text-slate-800 font-sans">Aluguer de Prancha/Fato Complementar</p>
                              <p className="text-[10px] text-slate-400 font-mono mt-0.5">Equipamento técnico fornecido no mar</p>
                            </td>
                            <td className="py-3 text-right">{selectedInvoice.participants}</td>
                            <td className="py-3 text-right">
                              {((selectedInvoice.includeWetsuit ? 5 : 0) + (selectedInvoice.includeBoard ? 5 : 0))} €
                            </td>
                            <td className="py-3 text-right font-semibold">
                              {((selectedInvoice.includeWetsuit ? 5 : 0) + (selectedInvoice.includeBoard ? 5 : 0)) * selectedInvoice.participants} €
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    {/* Tax Breakdown and summary totals */}
                    <div className="border-t border-slate-200 pt-4 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="font-bold text-slate-400 uppercase text-[9px] font-mono">Método de Liquidação:</p>
                        <p className="text-[#f18719] font-sans mt-0.5 font-bold uppercase">{selectedInvoice.paymentMethod} Gateway</p>
                        <p className="text-[10px] text-slate-400 font-mono leading-tight mt-1">
                          Emitido eletronicamente via Kiber CRM sitema certificado de faturação número 1202/A.
                        </p>
                      </div>

                      <div className="space-y-1.5 text-right font-mono text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Base Tributável (23%):</span>
                          <span>{(selectedInvoice.totalAmount * 0.813).toFixed(2)} €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Valor IVA (23%):</span>
                          <span>{(selectedInvoice.totalAmount * 0.187).toFixed(2)} €</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200 pt-1.5 text-sm font-sans font-black text-slate-900">
                          <span>Total Pago:</span>
                          <span>{selectedInvoice.totalAmount} €</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Print and Download Actions footer */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between gap-3">
                    <button
                      onClick={handlePrint}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <Printer className="w-4 h-4 text-[#f18719]" />
                      <span>Imprimir Fatura</span>
                    </button>

                    <button
                      onClick={() => setSelectedInvoice(null)}
                      className="bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all cursor-pointer"
                    >
                      Fechar Fatura
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
