import React, { useState } from 'react';
import { Calculator, CheckCircle, AlertTriangle, ArrowRight, Scale, Sparkles } from 'lucide-react';

export const PensionSimulator: React.FC = () => {
  const [age, setAge] = useState<number>(61);
  const [yearsService, setYearsService] = useState<number>(22);
  const [startedBefore2003, setStartedBefore2003] = useState<boolean>(true);
  const [currentSystem, setCurrentSystem] = useState<'dgjp' | 'afp'>('afp');
  const [averageSalary, setAverageSalary] = useState<number>(45000);

  // Calculate percentage according to Dominican Ley No. 379-81
  const calculatePensionRate = (years: number): number => {
    if (years >= 30) return 80;
    if (years >= 25) return 70;
    if (years >= 20) return 60;
    return 0; // Less than 20 years ordinary requirement
  };

  const pensionRate = calculatePensionRate(yearsService);
  const estimatedPension = (averageSalary * pensionRate) / 100;

  // Transfer eligibility under CNSS Resolution 289-03
  const isEligibleForTransfer = currentSystem === 'afp' && (startedBefore2003 || yearsService >= 20);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 bg-black text-white border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Herramienta Pedagógica del Aula · Ley 379-81 & Res. 289-03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Simulador de Elegibilidad y <span className="text-gradient-fire">Cálculo de Pensión</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Ingresa tus datos laborales para conocer si calificas para jubilación bajo la Ley 379-81 
            o si tienes derecho a solicitar tu traspaso de una AFP privada al Sistema de Reparto del Estado.
          </p>
        </div>

        {/* 2-Zone Sandbox: Left Parameters, Right Diagnostic Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Deck (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-orange-500/30 shadow-2xl space-y-6">
            <h3 className="text-xl font-black font-display text-white border-b border-zinc-800 pb-3 flex items-center justify-between">
              <span>1. Tus Datos Laborales</span>
              <span className="text-xs text-orange-400 font-mono font-bold">Paso A</span>
            </h3>

            {/* Edad Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-zinc-300">Edad actual</label>
                <span className="font-mono font-extrabold text-orange-400 text-sm bg-orange-950/60 border border-orange-500/30 px-3 py-0.5 rounded-lg">
                  {age} años
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={85}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <span className="text-[11px] text-zinc-400 block">
                Población enfocada del curso: mayores de 60 años.
              </span>
            </div>

            {/* Años de Servicio Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-zinc-300">Años cotizados en el Estado / Reparto</label>
                <span className="font-mono font-extrabold text-orange-400 text-sm bg-orange-950/60 border border-orange-500/30 px-3 py-0.5 rounded-lg">
                  {yearsService} años
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={45}
                value={yearsService}
                onChange={(e) => setYearsService(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Mínimo 20 años para pensión ordinaria</span>
                <span>30+ años = 80% máximo</span>
              </div>
            </div>

            {/* Started before 2003 toggle */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-bold text-zinc-300 block">
                ¿Inició a laborar o cotizar en el sector público antes del año 2003?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStartedBefore2003(true)}
                  className={`p-3.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    startedBefore2003
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black border-orange-400 shadow-lg shadow-orange-500/20'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                  }`}
                >
                  Sí, antes de 2003 (Clave Traspaso)
                </button>
                <button
                  type="button"
                  onClick={() => setStartedBefore2003(false)}
                  className={`p-3.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    !startedBefore2003
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black border-orange-400 shadow-lg shadow-orange-500/20'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                  }`}
                >
                  No, inicié después de 2003
                </button>
              </div>
            </div>

            {/* Current System */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-300 block">
                ¿Dónde se encuentra afiliado actualmente?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentSystem('afp')}
                  className={`p-3.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    currentSystem === 'afp'
                      ? 'bg-orange-600 text-white border-orange-500 shadow-lg'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                  }`}
                >
                  En una AFP Privada (CCI)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSystem('dgjp')}
                  className={`p-3.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    currentSystem === 'dgjp'
                      ? 'bg-orange-600 text-white border-orange-500 shadow-lg'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                  }`}
                >
                  En el Sistema de Reparto (DGJP)
                </button>
              </div>
            </div>

            {/* Average Salary */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-zinc-300">Salario mensual promedio (Últimos 3 años)</label>
                <span className="font-mono font-extrabold text-orange-400 text-base">
                  {formatCurrency(averageSalary)}
                </span>
              </div>
              <input
                type="range"
                min={15000}
                max={250000}
                step={2500}
                value={averageSalary}
                onChange={(e) => setAverageSalary(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <span className="text-[11px] text-zinc-400 block">
                Monto base para calcular el porcentaje garantizado bajo la Ley 379-81.
              </span>
            </div>

          </div>

          {/* Diagnostic Deck (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Result Card */}
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                  Dictamen Previsional Orientativo
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold">
                  Ley 379-81
                </span>
              </div>

              {/* Status Header */}
              <div className="mt-5">
                {yearsService >= 20 ? (
                  <div className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle className="w-7 h-7 shrink-0 text-emerald-400" />
                    <div>
                      <h4 className="font-black text-xl font-display text-white">
                        ¡Cumples con la Antigüedad Requerida!
                      </h4>
                      <p className="text-xs text-zinc-300 mt-0.5">
                        Has acumulado {yearsService} años de servicio público, consolidando tu derecho ordinario de retiro.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-orange-400">
                    <AlertTriangle className="w-7 h-7 shrink-0 text-orange-400" />
                    <div>
                      <h4 className="font-black text-xl font-display text-white">
                        En Proceso de Consolidación
                      </h4>
                      <p className="text-xs text-zinc-300 mt-0.5">
                        Tienes {yearsService} años de labor. La Ley 379-81 requiere un mínimo de 20 años (te faltan {20 - yearsService} años para el 60%).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Number Visualizer with Fire Gradient */}
              <div className="mt-6 p-6 rounded-2xl bg-black border border-zinc-800 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-zinc-400 font-medium block">Porcentaje Legal:</span>
                  <span className="text-4xl font-black text-gradient-fire font-display">
                    {pensionRate}%
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-1">
                    {yearsService >= 30 ? 'Tope ordinario (30+ años)' : yearsService >= 25 ? '70% por 25 años' : yearsService >= 20 ? '60% por 20 años' : 'Menos de 20 años'}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-zinc-400 font-medium block">Pensión Estimada:</span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">
                    {pensionRate > 0 ? formatCurrency(estimatedPension) : 'En acumulación'}
                  </span>
                  <span className="text-[11px] text-orange-400 font-semibold block mt-1">
                    Garantizada de por vida por el Estado
                  </span>
                </div>
              </div>

              {/* Transfer Eligibility Banner (Res. 289-03) */}
              {currentSystem === 'afp' && (
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-orange-950/60 via-zinc-900 to-black border border-orange-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-orange-400 font-extrabold text-xs uppercase tracking-wide">
                    <Scale className="w-4 h-4" />
                    <span>Diagnóstico de Traspaso (Res. CNSS 289-03)</span>
                  </div>
                  {isEligibleForTransfer ? (
                    <div>
                      <p className="text-xs text-zinc-200 leading-relaxed">
                        <strong className="text-orange-300">¡Tienes alta viabilidad de traspaso!</strong> Al haber cotizado antes del 2003 o contar con más de 20 años de servicio público, 
                        puedes solicitar tu restitución al Sistema de Reparto ante la <strong>Comisión Interinstitucional (SIPEN y DIDA)</strong>.
                      </p>
                      <p className="text-xs text-orange-400 font-bold mt-1.5">
                        Tu pensión en Reparto sería de aproximadamente {formatCurrency(estimatedPension)}, muy superior a la cuota variable proyectada por tu AFP.
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Al haber iniciado después de 2003 y tener menos de 20 años, tu expediente requerirá evaluación especial de excepciones o acumulación de cotizaciones.
                    </p>
                  )}
                </div>
              )}

              {/* Teacher's Voice Recommendation */}
              <div className="mt-6 pt-5 border-t border-zinc-800 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 block">
                  Consejo de la Profesora Francia
                </span>
                <p className="text-xs sm:text-sm font-quote italic text-zinc-200 leading-relaxed">
                  «Nunca renuncies a tu puesto ni aceptes un retiro programado sin haber solicitado primero tu historial consolidado en la DIDA. Un solo año de diferencia en la certificación de antigüedad puede representar cientos de miles de pesos en el monto de tu pensión.»
                </p>
              </div>

            </div>

            {/* Next Steps Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-orange-500/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-black text-sm text-white font-display">
                  ¿Deseas iniciar el trámite paso a paso?
                </h4>
                <p className="text-xs text-zinc-400">
                  Revisa los 3 pasos oficiales establecidos en la diapositiva 45 del curso.
                </p>
              </div>
              <a
                href="#traspaso"
                className="px-4 py-2.5 text-xs font-black text-black bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl transition-all shrink-0"
              >
                Ver los 3 Pasos →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
