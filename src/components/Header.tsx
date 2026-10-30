import React from 'react';
import { GraduationCap, MessageSquare, Type, Sparkles } from 'lucide-react';
import { TEACHER_DATA } from '../data/courseData';

interface HeaderProps {
  onOpenContact: () => void;
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, fontSize, onToggleFontSize }) => {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/20 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title, one line wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3.5 whitespace-nowrap shrink-0 text-white transition-transform active:scale-[0.98]"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black font-black shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all">
              <GraduationCap className="w-6 h-6 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold tracking-tight font-display text-white">
                Aula Previsional <span className="text-orange-500">Dominicana</span>
              </span>
              <span className="block text-[11px] text-zinc-400 font-sans tracking-wide">
                Prof. Francia De Los Santos Díaz · DGJP & INFOTEP
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise nav links (single line, no wrap) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-300">
            <a
              href="#leyes"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
            >
              Marco Legal
            </a>
            <a
              href="#modulos"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
            >
              Módulos 60h
            </a>
            <a
              href="#simulador"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
            >
              Simulador de Pensión
            </a>
            <a
              href="#traspaso"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
            >
              Ruta de Traspaso
            </a>
            <a
              href="#casos"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
            >
              Casos Reales
            </a>
            <a
              href="#evaluacion"
              className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
            >
              Evaluación & Cotejo
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Font Accessibility */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleFontSize}
              title={fontSize === 'normal' ? 'Aumentar tamaño de letra para lectura cómoda' : 'Restablecer tamaño de letra'}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Type className="w-3.5 h-3.5 text-orange-400" />
              <span>{fontSize === 'normal' ? 'Texto A+' : 'Texto Normal'}</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-black bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black stroke-[2.5]" />
              <span>Consultar a la Docente</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
