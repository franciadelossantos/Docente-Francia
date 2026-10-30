import React, { useState } from 'react';
import { Network, Shield, HeartPulse, HardHat, Building2, UserCheck, Eye, Info } from 'lucide-react';
import { SDSS_ENTITIES } from '../data/courseData';

export const SystemDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pensiones' | 'salud' | 'riesgos'>('pensiones');
  const [selectedEntity, setSelectedEntity] = useState<string | null>('CNSS');

  const getEntityData = (sigla: string) => {
    return SDSS_ENTITIES.find((e) => e.sigla === sigla) || SDSS_ENTITIES[0];
  };

  const activeEntityData = getEntityData(selectedEntity || 'CNSS');

  return (
    <section className="py-20 bg-black text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Mapa del Sistema · Diapositiva 30</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            El Sistema Dominicano de <span className="text-gradient-fire">Seguridad Social (SDSS)</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Comprende cómo se articulan las instituciones reguladoras, las prestadoras de fondos de pensión 
            y los órganos de defensa del afiliado. Haz clic en cada pilar para ver su función.
          </p>
        </div>

        {/* Top Tier: CNSS (Rector) & Core Pillars in Black/Orange */}
        <div className="bg-zinc-950 border border-orange-500/30 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-8">
          
          {/* CNSS Crown Card */}
          <div className="text-center max-w-xl mx-auto">
            <button
              onClick={() => setSelectedEntity('CNSS')}
              className={`w-full p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedEntity === 'CNSS'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black border-orange-400 shadow-xl shadow-orange-500/20'
                  : 'bg-black text-white border-zinc-800 hover:border-orange-500/40'
              }`}
            >
              <div className={`text-xs font-black uppercase tracking-wider ${selectedEntity === 'CNSS' ? 'text-black' : 'text-orange-400'}`}>
                Órgano Superior Rector
              </div>
              <h3 className={`text-xl font-black font-display mt-0.5 ${selectedEntity === 'CNSS' ? 'text-black' : 'text-white'}`}>
                Consejo Nacional de Seguridad Social (CNSS)
              </h3>
              <p className={`text-xs mt-1 ${selectedEntity === 'CNSS' ? 'text-black/90 font-semibold' : 'text-zinc-400'}`}>
                Define la política previsional y emitió la histórica Resolución No. 289-03 para traspasos.
              </p>
            </button>
          </div>

          {/* Connective Line to 3 Sub-entities (TSS, DIDA, SIPEN) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedEntity('TSS')}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedEntity === 'TSS'
                  ? 'bg-orange-500 text-black border-orange-400 shadow-lg'
                  : 'bg-zinc-900 text-white border-zinc-800 hover:border-orange-500/40'
              }`}
            >
              <span className={`text-[11px] font-black uppercase tracking-wider block ${selectedEntity === 'TSS' ? 'text-black' : 'text-orange-400'}`}>
                Recaudación & Dispersión
              </span>
              <h4 className="font-black text-base font-display">TSS (Tesorería)</h4>
              <p className={`text-xs mt-1 line-clamp-2 ${selectedEntity === 'TSS' ? 'text-black/80 font-medium' : 'text-zinc-400'}`}>
                Historial de cotizaciones y registro único de la seguridad social.
              </p>
            </button>

            <button
              onClick={() => setSelectedEntity('DIDA')}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedEntity === 'DIDA'
                  ? 'bg-orange-500 text-black border-orange-400 shadow-lg'
                  : 'bg-zinc-900 text-white border-zinc-800 hover:border-orange-500/40'
              }`}
            >
              <span className={`text-[11px] font-black uppercase tracking-wider block ${selectedEntity === 'DIDA' ? 'text-black' : 'text-orange-400'}`}>
                Voz y Voto en Traspasos
              </span>
              <h4 className="font-black text-base font-display">DIDA (Defensoría)</h4>
              <p className={`text-xs mt-1 line-clamp-2 ${selectedEntity === 'DIDA' ? 'text-black/80 font-medium' : 'text-zinc-400'}`}>
                Dirección de Información y Defensa de los Afiliados. Primer paso legal.
              </p>
            </button>

            <button
              onClick={() => setSelectedEntity('SIPEN')}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedEntity === 'SIPEN'
                  ? 'bg-orange-500 text-black border-orange-400 shadow-lg'
                  : 'bg-zinc-900 text-white border-zinc-800 hover:border-orange-500/40'
              }`}
            >
              <span className={`text-[11px] font-black uppercase tracking-wider block ${selectedEntity === 'SIPEN' ? 'text-black' : 'text-orange-400'}`}>
                Voz y Voto en Traspasos
              </span>
              <h4 className="font-black text-base font-display">SIPEN (Superintendencia)</h4>
              <p className={`text-xs mt-1 line-clamp-2 ${selectedEntity === 'SIPEN' ? 'text-black/80 font-medium' : 'text-zinc-400'}`}>
                Supervisa los fondos de pensiones y preside la Comisión Evaluadora.
              </p>
            </button>
          </div>

          {/* Three Insurance Streams Selector: Pensiones vs Salud vs Riesgos */}
          <div className="pt-6 border-t border-zinc-800">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                Los Tres Regímenes del SDSS (Diapositiva 30)
              </span>

              <div className="flex items-center gap-2 p-1.5 bg-zinc-900 rounded-xl border border-zinc-800">
                <button
                  onClick={() => setActiveTab('pensiones')}
                  className={`px-3.5 py-1.5 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'pensiones'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Vejez & Pensiones (Reparto vs AFP)
                </button>
                <button
                  onClick={() => setActiveTab('salud')}
                  className={`px-3.5 py-1.5 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'salud'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Salud Familiar (ARS/SISALRIL)
                </button>
                <button
                  onClick={() => setActiveTab('riesgos')}
                  className={`px-3.5 py-1.5 text-xs font-black rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'riesgos'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Riesgos Laborales (IDOPPRIL)
                </button>
              </div>
            </div>

            {/* Dynamic Comparison Box based on Active Tab */}
            {activeTab === 'pensiones' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reparto Box (Ley 379-81 & DGJP) */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-950/40 via-zinc-900 to-black border border-orange-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                      Régimen de Reparto Estatal (Ley 379-81)
                    </span>
                    <span className="text-xs font-bold text-orange-300 bg-orange-950 border border-orange-500/40 px-2 py-0.5 rounded-md">
                      Fondo Común Solidario
                    </span>
                  </div>
                  <h4 className="text-xl font-black font-display text-white">
                    Dirección General de Jubilaciones y Pensiones (DGJP)
                  </h4>
                  <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
                    <li>• <strong className="text-white">Beneficio Definido:</strong> 60% (20 años), 70% (25 años), 80% (30 años) del sueldo promedio.</li>
                    <li>• <strong className="text-white">Protección de Vejez:</strong> Financiado con cargo al presupuesto nacional del Estado Dominicano.</li>
                    <li>• <strong className="text-white">Sobrevivencia:</strong> Cónyuge e hijos conservan derecho a sustitución pensional.</li>
                  </ul>
                </div>

                {/* AFP Box (Ley 87-01) */}
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-zinc-400">
                      Capitalización Individual (CCI)
                    </span>
                    <span className="text-xs font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md">
                      Cuentas Privadas AFP
                    </span>
                  </div>
                  <h4 className="text-xl font-black font-display text-white">
                    Administradoras de Fondos de Pensiones (AFP)
                  </h4>
                  <ul className="text-xs text-zinc-300 space-y-2 leading-relaxed">
                    <li>• <strong className="text-white">Aporte Definido:</strong> La pensión depende exclusivamente del saldo acumulado en la cuenta personal.</li>
                    <li>• <strong className="text-white">Retiro Programado:</strong> Se recalcula anualmente y puede fluctuar según la expectativa de vida.</li>
                    <li>• <strong className="text-white">Opción de Traspaso:</strong> Si cotizabas al Estado antes de 2003, puedes solicitar tu retorno a Reparto.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'salud' && (
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Seguro Familiar de Salud (SFS)
                </span>
                <h4 className="text-xl font-black font-display text-white">
                  Supervisado por SISALRIL · Operado por ARS
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Cubre las contingencias de enfermedad común y maternidad para el afiliado titular y sus familiares dependientes. 
                  Los pensionados del Sistema de Reparto tienen derecho a conservar su cobertura médica a través del seguro especial de pensionados.
                </p>
              </div>
            )}

            {activeTab === 'riesgos' && (
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Seguro de Riesgos Laborales (SRL)
                </span>
                <h4 className="text-xl font-black font-display text-white">
                  Instituto Dominicano de Prevención y Protección de Riesgos Laborales (IDOPPRIL)
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Cubre los accidentes de trabajo y enfermedades profesionales sufridos con ocasión de las funciones públicas o privadas, 
                  incluyendo indemnizaciones, prótesis y pensiones por discapacidad laboral.
                </p>
              </div>
            )}

          </div>

          {/* Active Entity Drawer */}
          <div className="p-5 rounded-2xl bg-black border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-black font-mono text-sm shrink-0">
                {activeEntityData.sigla.split(' ')[0]}
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-orange-400">
                  {activeEntityData.status}
                </span>
                <h4 className="font-black text-white font-display text-base">
                  {activeEntityData.nombre}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {activeEntityData.descripcion}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedEntity('DIDA')}
              className="text-xs font-black text-orange-400 hover:text-orange-300 underline underline-offset-4 shrink-0 cursor-pointer"
            >
              Consultar Rol en Traspasos →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
