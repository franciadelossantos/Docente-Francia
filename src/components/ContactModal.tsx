import React, { useState } from 'react';
import { X, Mail, Phone, Video, Send, CheckCircle2 } from 'lucide-react';
import { TEACHER_DATA } from '../data/courseData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('traspaso');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-zinc-950 rounded-3xl border border-orange-500/40 shadow-2xl p-6 sm:p-8 overflow-hidden text-white">
        
        {/* Subtle orange accent glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSent ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
              <span>Orientación Directa · Atención Pedagógica</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Consulta con la Licda. Francia De Los Santos Díaz
            </h3>
            <p className="mt-1 text-xs text-zinc-300 font-sans leading-relaxed">
              Escríbenos para evaluar tu caso de traspaso de AFP a Reparto, aclarar dudas sobre la Ley 379-81 
              o reservar tu cupo para la próxima acción formativa de 60 horas.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Carmen Altagracia Pérez"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 809-555-0192"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Motivo de la consulta
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 cursor-pointer"
                >
                  <option value="traspaso">Solicitud de Traspaso de AFP a Reparto (Res. 289-03)</option>
                  <option value="antiguedad">Cálculo de Pensión por Antigüedad (Ley 379-81)</option>
                  <option value="curso">Inscripción al Curso Formativo de 60 Horas INFOTEP</option>
                  <option value="sobrevivencia">Pensión de Sobrevivencia para Familiares</option>
                  <option value="otra">Otra consulta previsional o patrimonial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Detalles de tu situación laboral (Años en el Estado, edad, institución)
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej. Tengo 62 años y 23 años laborando en el Ministerio de Educación..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-black text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black text-xs font-black transition-all shadow-lg shadow-orange-500/25 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>Enviar Consulta Directa</span>
                </button>
              </div>
            </form>

            {/* Quick channels strip */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-3">
              <span>O contáctala directamente:</span>
              <div className="flex items-center gap-4 font-bold text-zinc-200">
                <a href={`tel:${TEACHER_DATA.phone}`} className="hover:text-orange-400 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-emerald-400" /> {TEACHER_DATA.phoneFormatted}
                </a>
                <a href={`mailto:${TEACHER_DATA.email}`} className="hover:text-orange-400 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-orange-400" /> Correo
                </a>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              ¡Consulta Registrada!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Gracias, <strong className="text-white">{name}</strong>. Hemos recibido tu mensaje con el expediente de consulta. 
              La Licda. Francia De Los Santos Díaz se comunicará contigo vía WhatsApp o correo electrónico 
              para brindarte la debida orientación pedagógica y legal.
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black text-xs font-black transition-colors cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
