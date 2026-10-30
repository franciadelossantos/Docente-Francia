import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building, Scale, FileText, ChevronRight } from 'lucide-react';

export const TransferStepsGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      institution: 'DIDA',
      institutionFull: 'Dirección de Información y Defensa de los Afiliados',
      title: 'Comparecencia ante la DIDA y Formulario de Entendimiento',
      quoteSlide: '1- Comparecer ante la DIDA y suscribir el Formulario de Recepción y Entendimiento de información.',
      role: 'Voz y Voto en la Comisión Evaluadora',
      description: 'El afiliado asiste a la oficina de la DIDA más cercana. Un orientador previsional le explica las consecuencias jurídicas y económicas del traspaso, verificando que la decisión sea libre, consciente y fundada en la ley.',
      requirements: [
        'Cédula de Identidad y Electoral vigente (original y copia).',
        'Historial preliminar de cotizaciones o nombres de las instituciones del Estado donde laboró.',
        'Firma y huella dactilar en el Formulario Oficial de Recepción y Entendimiento.',
      ],
      docentAdvice: '«No permita que nadie firme por usted. En la DIDA deben entregarle el original sellado y con número de radicación; ese documento es su llave maestra para el paso siguiente.»',
    },
    {
      step: 2,
      institution: 'DGJP',
      institutionFull: 'Dirección General de Jubilaciones y Pensiones',
      title: 'Radicación de Expediente y Solicitud Formal en la DGJP',
      quoteSlide: '2- Comparecer ante la DGJP con el original del Formulario de Recepción y Entendimiento de información y copia de su cédula de identidad para llenar la solicitud de traspaso.',
      role: 'Administradora del Reparto con Voz Consultiva',
      description: 'Con el formulario original de la DIDA, el afiliado acude a la ventanilla única de la DGJP (Ministerio de Hacienda). Se abre el expediente formal y se inicia la validación del tiempo de servicio ante la Contraloría y el MAP.',
      requirements: [
        'Original del Formulario emitido por la DIDA en el Paso 1.',
        'Copia legible de la Cédula de Identidad y Electoral.',
        'Llenado in situ del Formulario de Solicitud de Traspaso de la DGJP.',
        'Certificaciones laborales de los ministerios o entidades estatales (si ya las posee).',
      ],
      docentAdvice: '«Como servidora de la DGJP siempre les aconsejo: guarde una copia con el sello de acuse de recibo y la fecha exacta. Ese comprobante acredita la fecha de inicio del cómputo legal de su trámite.»',
    },
    {
      step: 3,
      institution: 'AFP',
      institutionFull: 'Administradora de Fondos de Pensiones de Origen',
      title: 'Depósito ante la AFP y Contrato de Afiliación / Desafiliación',
      quoteSlide: '3- Acudir a la AFP de su elección a depositar el formulario de solicitud de traspaso y el llenado del contrato de afiliación correspondiente.',
      role: 'Entidad Gestora de la Cuenta Individual',
      description: 'El afiliado se traslada a su AFP para notificar formalmente el proceso en curso. Una vez la Comisión Interinstitucional (SIPEN y DIDA) emite la resolución favorable, se transfieren los fondos correspondientes al Fondo de Reparto Estatal.',
      requirements: [
        'Copia de la solicitud sellada por la DGJP y formulario DIDA.',
        'Llenado del formulario interno de requerimiento de traspaso de la AFP.',
        'Estado de cuenta consolidado emitido por la AFP.',
      ],
      docentAdvice: '«Las AFP a veces intentan persuadir al afiliado para que se quede con un retiro programado. Mantenga su posición firme con la ley: el beneficio definido de la Ley 379-81 es vitalicio y seguro.»',
    },
  ];

  const currentStepData = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <section id="traspaso" className="py-20 bg-zinc-950 text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Procedimiento Oficial · Diapositiva 45</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            La Ruta de los <span className="text-gradient-fire">3 Pasos para el Traspaso</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Para que tu solicitud sea admitida sin objeciones por la Comisión Interinstitucional Evaluadora, 
            debes seguir con exactitud la secuencia legal fijada en la Resolución CNSS 289-03.
          </p>
        </div>

        {/* Evaluators banner from slide 29 in black/orange */}
        <div className="mb-10 p-6 rounded-3xl bg-black border border-orange-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-black flex items-center justify-center shrink-0 font-bold">
              <Scale className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                Comisión Interinstitucional Evaluadora (Res. 289-03)
              </span>
              <p className="text-xs text-zinc-300 font-sans mt-0.5">
                Decide formalmente las solicitudes de traspaso de CCI al Sistema de Reparto Estatal.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/40 font-extrabold">
              Con Voz y Voto: SIPEN y DIDA
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 font-bold">
              Con Voz: DGJP y ADAF
            </span>
          </div>
        </div>

        {/* 3 Step Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((st) => (
            <button
              key={st.step}
              onClick={() => setActiveStep(st.step)}
              className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                activeStep === st.step
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold border-orange-400 shadow-xl shadow-orange-500/20 translate-y-[-2px]'
                  : 'bg-zinc-900/80 text-zinc-200 border-zinc-800 hover:bg-zinc-800 hover:border-orange-500/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-black ${activeStep === st.step ? 'text-black' : 'text-orange-400'}`}>
                  PASO 0{st.step}
                </span>
                <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-lg ${activeStep === st.step ? 'bg-black text-orange-400' : 'bg-zinc-800 text-zinc-300'}`}>
                  {st.institution}
                </span>
              </div>
              <h3 className={`mt-2 font-black font-display text-base leading-tight ${activeStep === st.step ? 'text-black' : 'text-white'}`}>
                {st.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Step Details Panel */}
        <div className="bg-black border border-orange-500/30 rounded-3xl p-6 sm:p-9 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                Paso 0{currentStepData.step} de 3 · Sede Institucional: {currentStepData.institution}
              </span>
              <h3 className="text-2xl font-black font-display text-white mt-1">
                {currentStepData.title}
              </h3>
              <p className="text-xs text-zinc-400 font-medium mt-0.5">
                {currentStepData.institutionFull} · {currentStepData.role}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-quote italic text-orange-300 self-start md:self-auto max-w-sm">
              «{currentStepData.quoteSlide}»
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 cols: Description & Requirements */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  ¿En qué consiste esta comparecencia?
                </h4>
                <p className="mt-2 text-sm text-zinc-200 leading-relaxed font-sans">
                  {currentStepData.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                  Documentos y Requisitos Obligatorios
                </h4>
                <div className="mt-3 space-y-2.5">
                  {currentStepData.requirements.map((req, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Docent Advice Box */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/40 via-zinc-900 to-black border border-orange-500/30 text-zinc-200 space-y-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 block">
                  Criterio de la Docente · Licda. Francia De Los Santos
                </span>
                <p className="text-sm font-quote italic leading-relaxed text-zinc-200">
                  {currentStepData.docentAdvice}
                </p>
              </div>

              {/* Navigation between steps */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Paso Anterior
                </button>

                <button
                  disabled={activeStep === 3}
                  onClick={() => setActiveStep((prev) => Math.min(3, prev + 1))}
                  className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Siguiente Paso →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
