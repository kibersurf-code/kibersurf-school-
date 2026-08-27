import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, User, Mail, Phone, MapPin, Calendar, Award, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { ServicePlanOption } from '../types';

interface MensalidadesEnrollmentFormProps {
  plans: ServicePlanOption[];
  selectedPlanId?: string | null;
  onPlanChange?: (planId: string) => void;
}

export default function MensalidadesEnrollmentForm({
  plans,
  selectedPlanId,
  onPlanChange,
}: MensalidadesEnrollmentFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    residenciaPorto: 'sim_mais_3_meses',
    planoId: selectedPlanId || (plans.length > 0 ? plans[0].id : 'monthly-1x-surf'),
    nivelSurf: 'iniciacao',
    horarioPreferencia: 'fim_de_tarde',
    material: 'preciso_tudo',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync if prop changes externally
  React.useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, planoId: selectedPlanId }));
    }
  }, [selectedPlanId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'planoId' && onPlanChange) {
      onPlanChange(value);
    }
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim()) {
      setErrorMessage('Por favor, indica o teu nome completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, introduz um endereço de email válido.');
      return;
    }
    if (!formData.telefone.trim()) {
      setErrorMessage('Por favor, indica o teu contacto telefónico / WhatsApp.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Save registration locally
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('kiber_mensalidades_inscricoes') || '[]');
        const newEntry = {
          id: 'mensalidade-' + Date.now(),
          ...formData,
          submittedAt: new Date().toISOString(),
        };
        localStorage.setItem('kiber_mensalidades_inscricoes', JSON.stringify([newEntry, ...existing]));
      } catch (err) {
        console.error('Error saving enrollment:', err);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const selectedPlanObj = plans.find((p) => p.id === formData.planoId);

  return (
    <div
      id="formulario-mensalidades"
      className="scroll-mt-24 mt-12 bg-white rounded-3xl border-2 border-orange-200/90 shadow-xl overflow-hidden text-left"
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f18719]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#f18719] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Inscrição Oficial • Mensalidades
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white uppercase">
            Formulário de Inscrição
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
            Programa exclusivo para residentes no Porto com treinos em dias e horários fixos. Preenche os teus dados abaixo para garantires a tua vaga e seres contactado pela equipa técnica da KIBER.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-10 px-4 space-y-6 max-w-xl mx-auto"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border-2 border-green-200 shadow-sm">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#f18719]">
                  Inscrição Submetida com Sucesso
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                  Bem-vindo à Comunidade Kiber!
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  Obrigado, <strong className="text-slate-900">{formData.nome}</strong>. Recebemos o teu pedido de inscrição para a mensalidade{' '}
                  <strong className="text-[#f18719]">
                    {selectedPlanObj ? `${selectedPlanObj.label} ${selectedPlanObj.boldLabel}` : formData.planoId}
                  </strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  A nossa equipa técnica entrará em contacto contigo através do número{' '}
                  <strong className="text-slate-800">{formData.telefone}</strong> ou pelo email{' '}
                  <strong className="text-slate-800">{formData.email}</strong> no prazo de 24 horas para validar a tua turma e agendar a primeira sessão.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData((prev) => ({ ...prev, nome: '', email: '', telefone: '', mensagem: '' }));
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Nova Inscrição
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-xs sm:text-sm font-bold">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Dados Pessoais */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#f18719]" />
                    Dados do Atleta / Aluno
                  </h4>
                  {selectedPlanObj && (
                    <span className="text-xs font-bold text-slate-600 bg-orange-50 border border-orange-200/60 px-2.5 py-1 rounded-lg">
                      Plano pretendido: <strong className="text-[#f18719]">{selectedPlanObj.label} {selectedPlanObj.boldLabel}</strong> ({selectedPlanObj.price})
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="mensalidade-nome"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <input
                        id="mensalidade-nome"
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: Pedro Silva"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] focus:bg-white transition-all font-medium"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensalidade-email"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Email de Contacto *
                    </label>
                    <div className="relative">
                      <input
                        id="mensalidade-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: pedro@exemplo.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] focus:bg-white transition-all font-medium"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensalidade-telefone"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Telemóvel / WhatsApp *
                    </label>
                    <div className="relative">
                      <input
                        id="mensalidade-telefone"
                        type="tel"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Ex: +351 912 345 678"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] focus:bg-white transition-all font-medium"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensalidade-residencia"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Residência no Porto *
                    </label>
                    <div className="relative">
                      <select
                        id="mensalidade-residencia"
                        name="residenciaPorto"
                        value={formData.residenciaPorto}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] focus:bg-white transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option value="sim_mais_3_meses">
                          Sim, resido no Porto há 3 meses ou mais
                        </option>
                        <option value="em_mudanca">
                          A residir recentemente / Em processo de mudança
                        </option>
                        <option value="estudante_erasmus">
                          Estudante / Residente temporário
                        </option>
                      </select>
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Nível e Preferência de Horários */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#f18719]" />
                  3. Experiência e Disponibilidade
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="mensalidade-nivel"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Nível de Surf Atual
                    </label>
                    <select
                      id="mensalidade-nivel"
                      name="nivelSurf"
                      value={formData.nivelSurf}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] font-medium cursor-pointer"
                    >
                      <option value="iniciacao">Iniciação (Primeiras ondas / Nunca surfei)</option>
                      <option value="espumas">Básico (Já apanho espumas e fico em pé)</option>
                      <option value="intermedio">Intermédio (Line-up / Fazer a parede)</option>
                      <option value="avancado">Avançado / Manobras</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensalidade-horario"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Horário Preferencial
                    </label>
                    <select
                      id="mensalidade-horario"
                      name="horarioPreferencia"
                      value={formData.horarioPreferencia}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] font-medium cursor-pointer"
                    >
                      <option value="fim_de_tarde">Finais de Tarde (Pós-laboral / Pós-aulas)</option>
                      <option value="manha_semana">Manhãs durante a semana</option>
                      <option value="fim_de_semana">Fins de semana (Sábado / Domingo)</option>
                      <option value="flexivel">Horários flexíveis conforme marés</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensalidade-material"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Equipamento
                    </label>
                    <select
                      id="mensalidade-material"
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] font-medium cursor-pointer"
                    >
                      <option value="preciso_tudo">Preciso de Prancha e Fato (Incluído)</option>
                      <option value="tenho_tudo">Tenho Prancha e Fato próprios</option>
                      <option value="apenas_fato">Tenho Prancha, preciso de Fato</option>
                      <option value="apenas_prancha">Tenho Fato, preciso de Prancha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensalidade-mensagem"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Objetivos ou Observações (Opcional)
                  </label>
                  <textarea
                    id="mensalidade-mensagem"
                    name="mensagem"
                    rows={2}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conta-nos um pouco sobre a tua experiência, objetivos específicos ou restrições de horário..."
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f18719] font-medium resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-700 block">Sem fidelização obrigatória.</span>
                  Os treinos são agendados diretamente com os treinadores de alto rendimento.
                </div>

                <button
                  type="submit"
                  id="btn-submit-mensalidade"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#f18719] hover:bg-[#db760f] text-white font-sans font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>A registar inscrição...</span>
                  ) : (
                    <>
                      <span>QUERO INSCREVER-ME</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
