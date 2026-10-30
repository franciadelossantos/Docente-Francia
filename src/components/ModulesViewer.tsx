import React, { useState } from 'react';
import { BookOpen, Clock, FileCheck, CheckCircle2, ChevronRight, GraduationCap, Users } from 'lucide-react';
import { COURSE_MODULES, TEACHER_DATA } from '../data/courseData';

export const ModulesViewer: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState(COURSE_MODULES[0].id);

  const selectedModule = COURSE_MODULES.find((m) => m.id === activeModuleId) || COURSE_MODULES[0];

  return (
    <section id="modulos" className="py-20 bg-zinc-950 text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Estructura Curricular · 60 Horas Pedagógicas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              Los Módulos Formativos <span className="text-gradient-fire">del Curso</span>
            </h2>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
              Un recorrido didáctico estructurado paso a paso desde los antecedentes históricos hasta la defensa
              documental de las pensiones y el trámite de traspasos ante la DIDA y la DGJP.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl shrink-0 self-start md:self-auto">
            {COURSE_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeModuleId === mod.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg shadow-orange-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {mod.number} ({mod.hours}h)
              </button>
            ))}
          </div>
        </div>

        {/* Classroom Senior Students Visual Card */}
        <div className="mb-10 rounded-3xl overflow-hidden border border-orange-500/30 bg-black shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src={TEACHER_DATA.images.classroomSeniors}
                alt="Clase de formación previsional con adultos mayores y facilitadora"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Users className="w-4 h-4" /> Aula Participativa de Adultos Mayores
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Metodología Andragógica para Servidores y Pensionados
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                La enseñanza para adultos mayores se fundamenta en el respeto a su experiencia laboral acumulada,
                la resolución de casos reales, el diálogo reflexivo y el acompañamiento humano paso a paso.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-zinc-400">
                <span className="text-white font-bold">• Sábados 8:00 AM a 4:00 PM</span>
                <span className="text-white font-bold">• 60 Horas Totales</span>
                <span className="text-orange-400 font-bold">• INFOTEP & DGJP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Module Showcase */}
        <div className="bg-black rounded-3xl border border-orange-500/30 shadow-2xl overflow-hidden">
          
          {/* Top Banner of Module */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-orange-950/40 p-6 sm:p-8 border-b border-zinc-800">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-orange-500/20 text-orange-400 text-xs font-black tracking-wider uppercase rounded-xl border border-orange-500/40">
                  {selectedModule.number}
                </span>
                <span className="text-xs text-zinc-300 font-semibold">
                  Carga Horaria: {selectedModule.hours} Horas Académicas
                </span>
              </div>
              <span className="text-xs text-orange-400 font-mono font-bold">
                {selectedModule.slidesRef}
              </span>
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-black font-display text-white leading-snug">
              {selectedModule.title}
            </h3>
            <p className="mt-2 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
              {selectedModule.description}
            </p>
          </div>

          {/* Module Content Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Topics list */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-orange-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Temas Detallados y Contenidos de Clase</span>
                </h4>

                <div className="mt-4 space-y-3">
                  {selectedModule.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/40 transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-lg bg-orange-500 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Docent Note Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/40 via-zinc-900 to-black border border-orange-500/30 text-zinc-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>Voz de la Docente · Orientación Metodológica</span>
                </div>
                <p className="text-sm font-quote italic text-zinc-100 leading-relaxed">
                  {selectedModule.docentNote}
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Legal Basis & Quick Stats */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Leyes y Normas Vinculadas
                </h4>
                <div className="space-y-2">
                  {selectedModule.legalBasis.map((law, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-bold text-zinc-200 bg-zinc-950 p-3 rounded-xl border border-zinc-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{law}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pedagogy Method */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Técnica Pedagógica
                </h4>
                <div className="space-y-2 text-xs text-zinc-300">
                  <p>
                    <strong className="text-white">Juegos de Roles:</strong> Simulación de comparecencias ante la DIDA y ventanilla de la DGJP.
                  </p>
                  <p>
                    <strong className="text-white">Estudio de Casos:</strong> Expedientes reales de servidores docentes y de salud pública.
                  </p>
                  <p>
                    <strong className="text-white">Evaluación:</strong> Cuestionario y cotejo documental de elegibilidad.
                  </p>
                </div>
              </div>

              {/* CTA Link to simulator */}
              <a
                href="#simulador"
                className="block text-center p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black font-black text-xs tracking-wide shadow-lg shadow-orange-500/20 transition-all"
              >
                Simular Caso con este Módulo →
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
