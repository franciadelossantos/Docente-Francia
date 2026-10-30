import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, Sparkles, RefreshCw } from 'lucide-react';
import { TRUTH_LIE_ROUNDS } from '../data/courseData';

export const TwoTruthsOneLie: React.FC = () => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [selectedStatementId, setSelectedStatementId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const round = TRUTH_LIE_ROUNDS[currentRoundIndex];

  const handleSelect = (id: string, isTrue: boolean) => {
    if (selectedStatementId !== null) return;
    setSelectedStatementId(id);
    if (!isTrue) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextRound = () => {
    if (currentRoundIndex + 1 < TRUTH_LIE_ROUNDS.length) {
      setCurrentRoundIndex((prev) => prev + 1);
      setSelectedStatementId(null);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentRoundIndex(0);
    setSelectedStatementId(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section className="py-20 bg-black text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dinámica Pedagógica · Diapositiva 9</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Dinámica de Aula: <span className="text-gradient-fire">«2 Verdades y 1 Mentira»</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Una de las actividades lúdicas favoritas de la Profesora Francia en el aula INFOTEP. 
            Entre las 3 afirmaciones presentadas, <strong>dos son realidades jurídicas</strong> y 
            <strong>una es un mito común</strong>. ¿Puedes identificar la mentira?
          </p>
        </div>

        {/* Dynamic Sandbox in Black/Orange */}
        <div className="max-w-4xl mx-auto bg-zinc-950 rounded-3xl border border-orange-500/30 p-6 sm:p-9 shadow-2xl">
          
          {!completed ? (
            <div className="space-y-6">
              
              {/* Progress strip */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs text-zinc-400">
                <span className="font-extrabold text-orange-400 uppercase tracking-wider">
                  Ronda {currentRoundIndex + 1} de {TRUTH_LIE_ROUNDS.length}
                </span>
                <span className="font-mono text-zinc-300 font-bold">
                  Aciertos: {score}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Consigna de la Docente:
                </span>
                <h3 className="text-xl font-black font-display text-white">
                  «Lee atentamente cada afirmación y haz clic sobre la que consideres que es la MENTIRA:»
                </h3>
              </div>

              {/* Statements 3-row grid */}
              <div className="space-y-3.5">
                {round.statements.map((stmt) => {
                  const isSelected = selectedStatementId === stmt.id;
                  const isAnswered = selectedStatementId !== null;
                  const isTheLie = !stmt.isTrue;

                  let cardStyle = 'bg-black border-zinc-800 hover:border-orange-500/50';
                  if (isAnswered) {
                    if (isTheLie) {
                      cardStyle = 'bg-emerald-950/40 border-emerald-500 ring-1 ring-emerald-500';
                    } else if (isSelected && !isTheLie) {
                      cardStyle = 'bg-rose-950/40 border-rose-500 ring-1 ring-rose-500';
                    } else {
                      cardStyle = 'bg-zinc-900/50 border-zinc-800 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={stmt.id}
                      disabled={isAnswered}
                      onClick={() => handleSelect(stmt.id, stmt.isTrue)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all text-xs sm:text-sm font-sans cursor-pointer ${cardStyle}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="leading-relaxed text-zinc-100 font-semibold">
                          {stmt.text}
                        </p>
                        {isAnswered && (
                          <div className="shrink-0 mt-0.5">
                            {isTheLie ? (
                              <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-400 bg-emerald-950 border border-emerald-500/40 px-2.5 py-1 rounded-md">
                                <CheckCircle className="w-3.5 h-3.5" /> ¡Esta era la Mentira!
                              </span>
                            ) : isSelected ? (
                              <span className="inline-flex items-center gap-1 text-xs font-black text-rose-400 bg-rose-950 border border-rose-500/40 px-2.5 py-1 rounded-md">
                                <XCircle className="w-3.5 h-3.5" /> Esto sí es Verdad
                              </span>
                            ) : (
                              <span className="text-[11px] text-zinc-500 font-mono">Verdad legal</span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Explanation box when revealed */}
                      {isAnswered && (
                        <div className="mt-3.5 pt-3 border-t border-zinc-800 text-xs text-zinc-300 font-quote italic leading-relaxed">
                          {stmt.explanation}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Round Button */}
              {selectedStatementId !== null && (
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNextRound}
                    className="px-7 py-3 text-xs font-black text-black bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/20"
                  >
                    {currentRoundIndex + 1 < TRUTH_LIE_ROUNDS.length ? 'Siguiente Ronda →' : 'Ver Conclusión Docente →'}
                  </button>
                </div>
              )}

            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                ¡Dinámica Concluida con Éxito!
              </h3>
              <p className="text-sm text-zinc-300 max-w-lg mx-auto font-sans leading-relaxed">
                Lograste <strong className="text-orange-400">{score} de {TRUTH_LIE_ROUNDS.length}</strong> aciertos desenmascarando mitos. 
                Como enseña la Profesora Francia, conocer la diferencia entre los mitos callejeros y la ley escrita 
                es lo que te da autoridad para exigir tu pensión.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-orange-400" />
                  <span>Jugar de Nuevo</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
