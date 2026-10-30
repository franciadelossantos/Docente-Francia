import React from 'react';
import { GraduationCap, Mail, Phone, Video, Heart, Shield, Scale } from 'lucide-react';
import { TEACHER_DATA } from '../data/courseData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-black text-zinc-300 pt-16 pb-12 border-t border-orange-500/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black font-black shadow-lg shadow-orange-500/20">
                <GraduationCap className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-black text-xl font-display text-white tracking-tight">
                Aula Previsional <span className="text-orange-500">Dominicana</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-sm">
              Programa de formación especializada sobre procedimientos, leyes y beneficios de los afiliados al 
              Sistema de Reparto en la República Dominicana.
            </p>

            <blockquote className="text-xs font-quote italic text-orange-300 border-l-2 border-orange-500 pl-3.5 py-1">
              «No te rindas, por favor no cedas, aunque el frío queme, aunque el miedo muerda... aún hay vida en tus sueños.»
              <span className="block text-[11px] not-italic text-zinc-400 mt-1 font-sans">— Mario Benedetti</span>
            </blockquote>
          </div>

          {/* Col 2: Legal Pillars */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Marco Jurídico de Referencia
            </h4>
            <ul className="text-xs text-zinc-400 space-y-2 font-sans">
              <li>• Artículo 60 de la Constitución de la República Dominicana</li>
              <li>• Ley No. 379-81 sobre Jubilaciones y Pensiones Civiles del Estado</li>
              <li>• Ley No. 87-01 que crea el Sistema Dominicano de Seguridad Social</li>
              <li>• Ley No. 1896-48 sobre el Instituto Dominicano de Seguros Sociales</li>
              <li>• Resolución CNSS No. 289-03 (Comisión Evaluadora de Traspasos)</li>
            </ul>
          </div>

          {/* Col 3: Teacher & Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-orange-400">
              Contacto con la Docente
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="text-white font-bold">{TEACHER_DATA.name}</p>
              <p className="text-orange-400 font-medium">{TEACHER_DATA.academicTitle} · UCE</p>
              <p>Servidora de la DGJP · Facilitadora INFOTEP</p>
              <div className="pt-2 space-y-1.5 font-semibold">
                <a
                  href={`mailto:${TEACHER_DATA.email}`}
                  className="hover:text-orange-400 block transition-colors truncate"
                >
                  {TEACHER_DATA.email}
                </a>
                <a
                  href={`tel:${TEACHER_DATA.phone}`}
                  className="hover:text-orange-400 block transition-colors"
                >
                  Tel: {TEACHER_DATA.phoneFormatted}
                </a>
                <a
                  href={TEACHER_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 block transition-colors"
                >
                  YouTube: @{TEACHER_DATA.youtube}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>
            © {new Date().getFullYear()} Aula Previsional Dominicana. Conducido por la Licda. Francia De Los Santos Díaz.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenContact}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Consultar Caso
            </button>
            <a
              href="#modulos"
              className="hover:text-orange-400 transition-colors"
            >
              Módulos 60h
            </a>
            <a
              href={TEACHER_DATA.originalPdfPath}
              download
              className="hover:text-orange-400 transition-colors"
            >
              Descargar Diapositivas
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
