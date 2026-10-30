import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { TEACHER_DATA } from '../data/courseData';

export const CoursePdfViewer: React.FC = () => {
  const [showEmbeddedPdf, setShowEmbeddedPdf] = useState(false);

  return (
    <section className="py-20 bg-black text-white border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-zinc-950 rounded-3xl border border-orange-500/30 p-6 sm:p-9 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                  Material Didáctico Original del Curso (52 Diapositivas)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                  Presentación de Clase · Prof. Francia De Los Santos Díaz
                </h3>
                <p className="text-xs text-zinc-400 font-sans mt-1">
                  Archivo oficial de diapositivas docentes de la acción formativa en formato PDF.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowEmbeddedPdf(!showEmbeddedPdf)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-200 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-orange-400" />
                <span>{showEmbeddedPdf ? 'Ocultar Visor Integrado' : 'Abrir Visor Integrado'}</span>
                {showEmbeddedPdf ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              <a
                href={TEACHER_DATA.originalPdfPath}
                download="Diapositivas_Curso_Sistema_de_Reparto.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black text-xs font-black transition-all shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                <Download className="w-4 h-4 text-black stroke-[2.5]" />
                <span>Descargar PDF Completo</span>
              </a>
            </div>
          </div>

          {/* Embedded viewer toggle */}
          {showEmbeddedPdf && (
            <div className="mt-6 pt-2">
              <div className="rounded-2xl border border-zinc-700 overflow-hidden bg-black shadow-inner">
                <div className="p-3 bg-zinc-900 text-white text-xs flex items-center justify-between border-b border-zinc-800">
                  <span className="font-mono text-orange-400">DIA-_INFO-_PROFESORA_RAFAELA_002__d7dbcaee.pdf</span>
                  <a
                    href={TEACHER_DATA.originalPdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 text-[11px] font-bold"
                  >
                    <span>Abrir en ventana nueva</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src={`${TEACHER_DATA.originalPdfPath}#view=FitH`}
                  title="Diapositivas del Curso Sistema de Reparto"
                  className="w-full h-[650px] border-0"
                />
              </div>
            </div>
          )}

          {/* Key Topics in PDF Slides */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-zinc-300 pt-2">
            <div className="p-4 rounded-xl bg-black border border-zinc-800">
              <strong className="block text-white font-bold mb-0.5">Diaps. 1-14:</strong>
              <span>Bienvenida, perfil docente y técnica de roles.</span>
            </div>
            <div className="p-4 rounded-xl bg-black border border-zinc-800">
              <strong className="block text-white font-bold mb-0.5">Diaps. 15-30:</strong>
              <span>Historia 1846/1948, leyes base y mapa del SDSS.</span>
            </div>
            <div className="p-4 rounded-xl bg-black border border-zinc-800">
              <strong className="block text-white font-bold mb-0.5">Diaps. 31-45:</strong>
              <span>Traspasos, clasificación de afiliados y 3 pasos DIDA/DGJP.</span>
            </div>
            <div className="p-4 rounded-xl bg-black border border-zinc-800">
              <strong className="block text-white font-bold mb-0.5">Diaps. 46-52:</strong>
              <span>Cierre formativo, síntesis y reflexiones de Voltaire y Benedetti.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
