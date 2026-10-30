import React from 'react';
import { Mail, Phone, Video, Download, Award, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { TEACHER_DATA, CLASSROOM_RULES } from '../data/courseData';

interface TeacherProfileProps {
  onOpenContact: () => void;
}

export const TeacherProfile: React.FC<TeacherProfileProps> = ({ onOpenContact }) => {
  return (
    <section id="docente" className="py-20 bg-zinc-950 text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Facilitadora y Trayectoria · Diapositiva 2 & 14</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Conoce a la Facilitadora <span className="text-gradient-fire">del Curso</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Una trayectoria intachable combinando la ciencia jurídica, la experiencia operativa dentro 
            de la Dirección General de Jubilaciones y Pensiones, y la vocación pedagógica en las aulas de INFOTEP.
          </p>
        </div>

        {/* Profile Card & Classroom Pact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Teacher Card */}
          <div className="lg:col-span-6 bg-black rounded-3xl border border-orange-500/30 p-7 sm:p-9 shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-display font-black text-3xl flex items-center justify-center shadow-lg shadow-orange-500/20 shrink-0">
                FD
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  {TEACHER_DATA.academicTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-0.5">
                  {TEACHER_DATA.name}
                </h3>
                <p className="text-xs text-zinc-400 font-medium">
                  {TEACHER_DATA.university} · Egresada de Derecho
                </p>
              </div>
            </div>

            {/* Teacher Self-Description from Slide 2 */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 font-quote italic text-zinc-200 text-sm leading-relaxed">
              «Soy Abogada, egresada de la Universidad Central del Este (UCE). Laboro en la Dirección General de Jubilaciones y Pensiones (DGJP) y a las ventas de inmobiliarios. Me apasiona orientar a los trabajadores y adultos mayores dominicanos para que gocen de un retiro digno y protegido por la ley.»
            </div>

            {/* Badges */}
            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-center gap-3 p-3.5 bg-zinc-900 rounded-xl border border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                <span><strong className="text-white">Dirección General de Jubilaciones y Pensiones (DGJP):</strong> Conocimiento directo de los trámites y resoluciones del Sistema de Reparto.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-zinc-900 rounded-xl border border-zinc-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span><strong className="text-white">Facilitadora INFOTEP:</strong> Formadora en competencias laborales y técnicas participativas de aula.</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-zinc-900 rounded-xl border border-zinc-800">
                <Scale className="w-5 h-5 text-orange-400 shrink-0" />
                <span><strong className="text-white">Ventas de Inmobiliarios & Asesoría Patrimonial:</strong> Acompañamiento a jubilados y familias en la inversión segura de sus ahorros.</span>
              </div>
            </div>

            {/* Official Contact Badges */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-orange-400 block">
                Canales de Contacto Directo (Diapositiva 14)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${TEACHER_DATA.email}`}
                  className="flex items-center gap-2 p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-500/40 text-xs text-zinc-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="truncate">{TEACHER_DATA.email}</span>
                </a>

                <a
                  href={`tel:${TEACHER_DATA.phone}`}
                  className="flex items-center gap-2 p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-500/40 text-xs text-zinc-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tel: {TEACHER_DATA.phoneFormatted}</span>
                </a>

                <a
                  href={TEACHER_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-rose-500/40 text-xs text-zinc-200 transition-colors"
                >
                  <Video className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>YouTube: @{TEACHER_DATA.youtube}</span>
                </a>

                <a
                  href={TEACHER_DATA.originalPdfPath}
                  download="Presentacion_Sistema_de_Reparto_Prof_Francia.pdf"
                  className="flex items-center gap-2 p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-500/40 text-xs text-zinc-200 transition-colors"
                >
                  <Download className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Descargar Diapositivas</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Classroom Pact & Ethics (Slide 20 & 11) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-black rounded-3xl border border-orange-500/30 p-7 sm:p-9 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Pacto de Convivencia Docente · Diapositiva 20 & 49
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-1">
                  Las Reglas de Oro en Nuestras Sesiones
                </h3>
                <p className="mt-2 text-xs text-zinc-300 leading-relaxed font-sans">
                  En cada cohorte formativa asumimos un compromiso ético mutuo. La excelencia en la defensa previsional empieza con la disciplina en el aula.
                </p>
              </div>

              {/* 4 Rules */}
              <div className="space-y-3.5">
                {CLASSROOM_RULES.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-orange-500 text-black font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-black font-display text-white">
                        {rule.title}
                      </h4>
                      <p className="text-xs text-zinc-300 font-sans mt-0.5 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide 51 INFOTEP continuous training recommendation */}
              <div className="p-5 rounded-2xl bg-zinc-950 border border-orange-500/20 text-xs text-zinc-200 space-y-1.5">
                <span className="font-black text-orange-400 block uppercase tracking-wide">
                  Recomendación Pedagógica (Diapositiva 51):
                </span>
                <p className="font-quote italic leading-relaxed text-zinc-300">
                  «Recomendamos a todos los participantes continuar sus capacitaciones técnicas en INFOTEP. El saber constante es la mejor garantía de crecimiento profesional y bienestar para nuestras familias.»
                </p>
              </div>

              {/* Consultation trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black font-black text-xs tracking-wide shadow-xl shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Inscribirse al Próximo Curso o Solicitar Orientación</span>
                  <ExternalLink className="w-4 h-4 text-black stroke-[3]" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
