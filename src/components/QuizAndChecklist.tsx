import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ListChecks, Award, RefreshCw, Printer, CheckCircle, HelpCircle, FileText } from 'lucide-react';
import { QUIZ_QUESTIONS, CHECKLIST_ITEMS } from '../data/courseData';

export const QuizAndChecklist: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'checklist'>('quiz');

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<{ [itemId: string]: boolean }>({
    'chk-1': true,
    'chk-2': true,
  });

  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const calculateScore = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  };

  const handleSelectAnswer = (qId: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx,
    }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    const score = calculateScore();
    if (score >= 4) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#f97316', '#f59e0b', '#ffffff'],
      });
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleToggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalChecklistItems = CHECKLIST_ITEMS.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const readinessPercent = Math.round((checkedCount / totalChecklistItems) * 100);

  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <section id="evaluacion" className="py-20 bg-zinc-950 text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Evaluación Final · Diapositiva 5</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              Cuestionario Jurídico y <span className="text-gradient-fire">Lista de Cotejo</span>
            </h2>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
              Los dos instrumentos pedagógicos formales del curso: valida tu comprensión de la legislación 
              previsional y arma la lista de cotejo documental antes de visitar la DIDA y la DGJP.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Cuestionario (5 Preguntas)</span>
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'checklist'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ListChecks className="w-4 h-4" />
              <span>Lista de Cotejo ({checkedCount}/{totalChecklistItems})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Quiz in Black/Orange */}
        {activeTab === 'quiz' && (
          <div className="bg-black rounded-3xl border border-orange-500/30 p-6 sm:p-9 shadow-2xl space-y-8">
            
            {/* Header of quiz */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Evaluación de Aprendizajes Clave
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-1">
                  Instrumento de Evaluación Normativa
                </h3>
              </div>

              {!quizSubmitted ? (
                <div className="text-xs text-zinc-400 font-medium">
                  Respondidas: <strong className="text-white font-mono">{answeredCount}</strong> de {totalQuestions}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-orange-950/80 border border-orange-500/40 text-xs font-black text-orange-300">
                    Puntuación: {calculateScore()} / {totalQuestions} ({Math.round((calculateScore() / totalQuestions) * 100)}%)
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-orange-400" />
                    <span>Reiniciar</span>
                  </button>
                </div>
              )}
            </div>

            {/* Questions list */}
            <div className="space-y-7">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAnswer = selectedAnswers[q.id];
                const isAnswered = userAnswer !== undefined;
                const isCorrect = isAnswered && userAnswer === q.correctIndex;

                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono shadow-md">
                        {idx + 1}
                      </div>
                      <h4 className="text-base sm:text-lg font-black font-display text-white leading-snug">
                        {q.question}
                      </h4>
                    </div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userAnswer === optIdx;
                        let optionStyle = 'bg-black border-zinc-800 hover:border-orange-500/50 text-zinc-200';

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = 'bg-emerald-950/50 border-emerald-500 text-white font-bold ring-1 ring-emerald-500';
                          } else if (isThisSelected && optIdx !== q.correctIndex) {
                            optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-200 ring-1 ring-rose-500';
                          } else {
                            optionStyle = 'bg-zinc-950 border-zinc-800 opacity-50';
                          }
                        } else if (isThisSelected) {
                          optionStyle = 'bg-orange-600 text-white border-orange-500 shadow-md font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectAnswer(q.id, optIdx)}
                            className={`p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
                          >
                            <span className="font-mono font-black mr-2 text-orange-400">
                              {String.fromCharCode(65 + optIdx)})
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback if submitted */}
                    {quizSubmitted && (
                      <div className="mt-3.5 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 space-y-1.5">
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center gap-1 font-bold">
                              <CheckCircle className="w-3.5 h-3.5" /> ¡Correcto!
                            </span>
                          ) : (
                            <span className="text-rose-400 font-bold">
                              Respuesta correcta: {q.options[q.correctIndex]}
                            </span>
                          )}
                        </div>
                        <p className="font-quote italic text-zinc-300">
                          {q.feedback}
                        </p>
                        <p className="text-[11px] text-orange-400 font-mono font-bold">
                          Base legal: {q.legalArticle}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Submit Bar */}
            {!quizSubmitted && (
              <div className="pt-4 flex justify-end">
                <button
                  disabled={answeredCount < totalQuestions}
                  onClick={handleSubmitQuiz}
                  className="px-7 py-3.5 text-xs font-black text-black bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 hover:from-orange-400 hover:to-amber-400 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                >
                  {answeredCount < totalQuestions
                    ? `Faltan ${totalQuestions - answeredCount} preguntas por responder`
                    : 'Calificar Cuestionario y Ver Resultados →'}
                </button>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Checklist in Black/Orange */}
        {activeTab === 'checklist' && (
          <div className="bg-black rounded-3xl border border-orange-500/30 p-6 sm:p-9 shadow-2xl space-y-8">
            
            {/* Header & Progress */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Instrumento de Cotejo Documental
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-1">
                  Lista de Documentos Requeridos para Pensión y Traspaso
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrintChecklist}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-colors cursor-pointer"
                  title="Imprimir esta lista para llevar a la DIDA y DGJP"
                >
                  <Printer className="w-3.5 h-3.5 text-orange-400" />
                  <span>Imprimir Lista</span>
                </button>
              </div>
            </div>

            {/* Readiness Progress Bar with Orange Glow */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-zinc-300">Nivel de preparación de tu expediente:</span>
                <span className="font-mono font-extrabold text-orange-400 text-sm">
                  {readinessPercent}% ({checkedCount} de {totalChecklistItems} recaudos)
                </span>
              </div>
              <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800">
                <div
                  className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-500 shadow-md shadow-orange-500/50"
                  style={{ width: `${readinessPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-zinc-400 font-sans">
                {readinessPercent === 100
                  ? '¡Expediente completo! Estás listo para presentarte ante la DIDA y la DGJP sin riesgo de devoluciones.'
                  : 'Marca los documentos que ya tienes a mano para saber cuáles certificaciones debes tramitar.'}
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-3.5">
              {CHECKLIST_ITEMS.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleChecklist(item.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? 'bg-zinc-950 border-orange-500/50 ring-1 ring-orange-500/30'
                        : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleChecklist(item.id)}
                      className="w-5 h-5 mt-0.5 accent-orange-500 rounded cursor-pointer"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-sm text-white font-display">
                          {item.label}
                        </h4>
                        {item.required && (
                          <span className="text-[10px] uppercase font-black text-orange-400 bg-orange-950/80 border border-orange-500/30 px-2 py-0.5 rounded">
                            Obligatorio
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Teacher tip box */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-orange-500/20 text-xs text-zinc-300 font-quote italic">
              «Consejo de aula: Saque fotocopias de todo antes de entregar los originales en la DGJP y exija siempre su sello de recibido con firma y hora legibles. Ese expediente es el pasaporte de su retiro.» — Prof. Francia De Los Santos Díaz.
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
