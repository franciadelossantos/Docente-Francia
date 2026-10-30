import React, { useState } from 'react';
import { Users, CheckCircle2, XCircle, Sparkles, Scale, GraduationCap, HeartHandshake } from 'lucide-react';
import { ROLEPLAY_CASES, TEACHER_DATA } from '../data/courseData';

export const RoleplayCases: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(ROLEPLAY_CASES[0].id);
  const [userDecisions, setUserDecisions] = useState<{ [caseId: string]: string }>({});

  const activeCase = ROLEPLAY_CASES.find((c) => c.id === selectedCaseId) || ROLEPLAY_CASES[0];
  const selectedOptionId = userDecisions[activeCase.id];

  const handleSelectOption = (optionId: string) => {
    setUserDecisions((prev) => ({
      ...prev,
      [activeCase.id]: optionId,
    }));
  };

  return (
    <section id="casos" className="py-20 bg-zinc-950 text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Metodología Práctica · Diapositiva 5</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Estudio de Casos y <span className="text-gradient-fire">Juego de Roles</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            La mejor forma de dominar la Ley 379-81 y la Ley 87-01 es poniéndonos en los zapatos de los afiliados 
            y funcionarios que defienden los expedientes ante las comisiones del SDSS.
          </p>
        </div>

        {/* Dignified Retirement Senior Couple Visual Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-orange-500/30 bg-black shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src={TEACHER_DATA.images.retiredCouple}
                alt="Pareja dominicana de adultos mayores sonriendo en su retiro digno"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4" /> La Promesa del Retiro Digno
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                «Detrás de Cada Expediente Hay una Vida Entera de Trabajo»
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                Cuando una maestra, enfermera o empleado administrativo logra su traspaso a Reparto y recibe el 70% u 80% 
                garantizado por el Estado, asegura la tranquilidad de su hogar y la estabilidad médica de su familia.
              </p>
              <div className="pt-1 text-xs text-orange-400 font-bold font-mono">
                Casos analizados con las Resoluciones 289-03 y Ley 379-81.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Case Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ROLEPLAY_CASES.map((cs, idx) => {
            const isSelected = selectedCaseId === cs.id;
            const hasAnswered = !!userDecisions[cs.id];
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseId(cs.id)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold border-orange-400 shadow-xl shadow-orange-500/20 translate-y-[-2px]'
                    : 'bg-zinc-900/80 text-zinc-200 border-zinc-800 hover:bg-zinc-800 hover:border-orange-500/30'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className={`font-mono font-black ${isSelected ? 'text-black' : 'text-orange-400'}`}>
                    CASO 0{idx + 1}
                  </span>
                  {hasAnswered && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${isSelected ? 'bg-black text-orange-400' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                      Resuelto
                    </span>
                  )}
                </div>
                <h3 className={`font-black font-display text-base leading-snug ${isSelected ? 'text-black' : 'text-white'}`}>
                  {cs.title.replace('Caso ' + (idx + 1) + ': ', '')}
                </h3>
                <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-black/80 font-semibold' : 'text-zinc-400'}`}>
                  {cs.claimant.name} · {cs.claimant.yearsOfService} años de servicio
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Case Workspace */}
        <div className="bg-black border border-orange-500/30 rounded-3xl p-6 sm:p-9 shadow-2xl">
          
          {/* Claimant Profile & Situation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Cols: File / Claimant Dossier */}
            <div className="lg:col-span-5 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Expediente de Clase
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold">
                  {activeCase.claimant.currentSystem}
                </span>
              </div>

              <div>
                <h4 className="text-xl font-black font-display text-white">
                  {activeCase.claimant.name}
                </h4>
                <p className="text-xs text-orange-400 font-semibold">
                  {activeCase.subtitle}
                </p>
              </div>

              <div className="space-y-2 text-xs text-zinc-300 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Edad del afiliado:</span>
                  <span className="font-bold text-white">{activeCase.claimant.age} años</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Años de servicio público:</span>
                  <span className="font-bold text-white">{activeCase.claimant.yearsOfService} años</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Entidad empleadora:</span>
                  <span className="font-bold text-white">{activeCase.claimant.institution}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-400">Régimen actual:</span>
                  <span className="font-extrabold text-orange-400">{activeCase.claimant.currentSystem}</span>
                </div>
              </div>

              <div className="text-xs text-zinc-300 leading-relaxed pt-1">
                <strong className="text-white">Hechos del caso:</strong> {activeCase.situation}
              </div>
            </div>

            {/* Right 7 Cols: Roleplay Decision Deck */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 block">
                  Tu rol en la simulación de clase:
                </span>
                <h3 className="text-xl font-black font-display text-white mt-1">
                  ¿Cuál es la orientación jurídica y procesal correcta para este expediente?
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3.5">
                {activeCase.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isAnswered = !!selectedOptionId;

                  let borderClass = 'border-zinc-800 bg-zinc-950 hover:border-orange-500/40';
                  if (isAnswered) {
                    if (opt.isCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-950/40 ring-1 ring-emerald-500';
                    } else if (isSelected && !opt.isCorrect) {
                      borderClass = 'border-rose-500 bg-rose-950/40 ring-1 ring-rose-500';
                    } else {
                      borderClass = 'border-zinc-800 bg-zinc-950 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all text-xs sm:text-sm font-sans cursor-pointer ${borderClass}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />}
                        </div>
                        <p className="leading-relaxed text-zinc-100 font-semibold">
                          {opt.label}
                        </p>
                      </div>

                      {/* Immediate feedback explanation */}
                      {isAnswered && (
                        <div className="mt-3.5 pt-3 border-t border-zinc-800 text-xs">
                          <div className="flex items-center gap-1.5 font-bold mb-1">
                            {opt.isCorrect ? (
                              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Dictamen Legal Correcto
                              </span>
                            ) : (
                              <span className="text-rose-400 flex items-center gap-1 font-bold">
                                <XCircle className="w-3.5 h-3.5" /> Fundamento Erróneo
                              </span>
                            )}
                          </div>
                          <p className="text-zinc-300 font-quote italic leading-relaxed">
                            {opt.explanation}
                          </p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Docent Voice Wrap */}
              {selectedOptionId && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-950/50 via-zinc-900 to-black border border-orange-500/30 text-xs text-zinc-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-orange-400 font-extrabold uppercase tracking-wide">
                    <GraduationCap className="w-4 h-4" />
                    <span>Conclusión de la Profesora Francia</span>
                  </div>
                  <p className="leading-relaxed font-quote italic text-zinc-200">
                    «En el ejercicio del derecho de la seguridad social nunca debemos desanimar al afiliado. La ley dominicana ampara los derechos adquiridos y la Comisión Evaluadora de Traspasos tiene la obligación legal de ponderar cada caso con estricta justicia social.»
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
