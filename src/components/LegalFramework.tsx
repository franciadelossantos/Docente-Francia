import React, { useState } from 'react';
import { Scale, BookOpen, ChevronRight, FileText, Info, ShieldCheck } from 'lucide-react';
import { LEGAL_LAWS, TEACHER_DATA } from '../data/courseData';

export const LegalFramework: React.FC = () => {
  const [selectedLawIndex, setSelectedLawIndex] = useState(0);
  const activeLaw = LEGAL_LAWS[selectedLawIndex];

  return (
    <section id="leyes" className="py-20 bg-black text-white border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Marco Jurídico Vigente · República Dominicana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            La Base Legal que Ampara tus <span className="text-gradient-fire">Derechos Previsionales</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Para defender una pensión ante la burocracia institucional se necesita conocer la ley al dedillo. 
            Este es el arsenal normativo que estudiamos y aplicamos en cada sesión del curso.
          </p>
        </div>

        {/* Legal Desk Hero Image & Overview Strip */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-orange-500/30 bg-zinc-950 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src={TEACHER_DATA.images.legalJustice}
                alt="Constitución Dominicana y mallete judicial de justicia previsional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Garantía Jurídica y Social
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                «La Pensión de Vejez es un Derecho Constitucional Imprescriptible»
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                El Tribunal Constitucional dominicano ha reiterado mediante jurisprudencia vinculante 
                que las instituciones administradoras (DGJP, SIPEN, DIDA y AFP) no pueden anteponer 
                trabas burocráticas sobre los derechos consolidados por los trabajadores durante décadas de servicio.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-orange-300">
                <span className="flex items-center gap-1.5 bg-orange-950/60 border border-orange-500/30 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-orange-400" /> Art. 60 Constitución
                </span>
                <span className="flex items-center gap-1.5 bg-orange-950/60 border border-orange-500/30 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-orange-400" /> Ley No. 379-81 (Reparto)
                </span>
                <span className="flex items-center gap-1.5 bg-orange-950/60 border border-orange-500/30 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-orange-400" /> Res. CNSS 289-03
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Law Selector & Deep-Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Law Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {LEGAL_LAWS.map((law, index) => {
              const isSelected = selectedLawIndex === index;
              return (
                <button
                  key={law.code}
                  onClick={() => setSelectedLawIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-black font-bold border-orange-400 shadow-xl shadow-orange-600/20 translate-x-1.5'
                      : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border-zinc-800 hover:border-orange-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-extrabold uppercase tracking-wide ${isSelected ? 'text-black' : 'text-orange-400'}`}>
                      {law.code} · Año {law.year}
                    </span>
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-black/80' : 'text-zinc-500'}`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={`mt-1 font-black text-base sm:text-lg leading-snug font-display ${isSelected ? 'text-black' : 'text-white'}`}>
                    {law.title}
                  </h3>
                  <p className={`mt-1.5 text-xs line-clamp-2 ${isSelected ? 'text-black/90 font-medium' : 'text-zinc-400'}`}>
                    {law.importance}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Legal Analysis Card */}
          <div className="lg:col-span-7 bg-zinc-950 border border-orange-500/30 rounded-3xl p-6 sm:p-9 shadow-2xl">
            <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                  {activeLaw.scope}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                  {activeLaw.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 stroke-[2]" />
              </div>
            </div>

            {/* Impact / Core Article */}
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Artículo y Principio Rector
                </h4>
                <div className="mt-2.5 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 font-quote italic text-zinc-100 text-sm sm:text-base leading-relaxed">
                  «{activeLaw.coreArticle}»
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Por qué es vital para el Afiliado
                </h4>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-sans">
                  {activeLaw.importance}
                </p>
              </div>

              {/* Docent Insight Box in Orange/Black Gradient */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/40 via-zinc-900 to-black border border-orange-500/30 text-zinc-200 space-y-2">
                <div className="flex items-center gap-2 text-orange-400 font-extrabold text-xs uppercase tracking-wide">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Criterio Docente de la Profesora Francia</span>
                </div>
                <p className="leading-relaxed text-xs sm:text-sm text-zinc-300 font-sans">
                  {activeLaw.code === 'Ley No. 379-81' &&
                    'Bajo esta ley, el monto no depende del rendimiento volátil de una bolsa de valores ni de cuentas individuales, sino de tus años de servicio fiel al Estado Dominicano: 20 años te otorgan el 60% de tu sueldo promedio, 25 años el 70% y 30 años el 80% garantizado por el Tesoro Nacional.'}
                  {activeLaw.code === 'Resolución CNSS 289-03' &&
                    'Muchos afiliados fueron transferidos en 2003 mediante promesas de promotores privados. La Res. 289-03 creó la Comisión Especial (con voz y voto de SIPEN y DIDA) para restituirlos a Reparto si tenían derechos consolidados o cotizaban al Estado antes de la reforma.'}
                  {activeLaw.code === 'Constitución Dominicana' &&
                    'El Tribunal Constitucional ha reiterado mediante sentencias vinculantes que el derecho a la pensión de vejez e invalidez forma parte del núcleo inviolable de la dignidad humana y no puede ser conculcado por trabas administrativas.'}
                  {activeLaw.code === 'Ley No. 87-01' &&
                    'La reforma de 2001 mantuvo la coexistencia de ambos regímenes. El afiliado que ya tenía derechos adquiridos en Reparto o en el IDSS no estaba obligado a perder su antigüedad, y la DIDA tiene la potestad de defender esta condición.'}
                  {activeLaw.code === 'Ley No. 1896-48' &&
                    'El histórico IDSS (nacido de la Caja de Seguros de 1948) amparó a obreros y servidores. Aunque el IDSS fue transformado, su legado de cotizaciones debe ser reconocido y validado por la TSS y la DGJP.'}
                </p>
              </div>

              {/* Practical Link */}
              <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
                <span>¿Deseas calcular tu porcentaje según esta escala?</span>
                <a
                  href="#simulador"
                  className="font-extrabold text-orange-400 hover:text-orange-300 underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>Probar en el Simulador</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
