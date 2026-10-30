import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, ShieldCheck, Clock, Award, BookOpen, Sparkles, Scale, Users } from 'lucide-react';
import { TEACHER_DATA, INSPIRING_QUOTES } from '../data/courseData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSynthesisAvailable, setSpeechSynthesisAvailable] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const teacherMessage = `¡Sean cordialmente bienvenidos al curso Procedimientos y Beneficios de los Afiliados al Sistema de Reparto! Les saluda la licenciada Francia De Los Santos Díaz, abogada de la Universidad Central del Este y servidora de la Dirección General de Jubilaciones y Pensiones. Recuerden siempre esta premisa: la pensión es un derecho constitucional forjado con el sudor de su frente. En esta acción formativa aprenderemos a defender sus derechos con la Ley 87-01, la Ley 379-81 y la jurisprudencia dominicana.`;

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesisAvailable(true);
    }

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % INSPIRING_QUOTES.length);
    }, 8000);

    return () => {
      clearInterval(interval);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleVoice = () => {
    if (!speechSynthesisAvailable) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(teacherMessage);
      utterance.lang = 'es-DO';
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find((v) => v.lang.startsWith('es'));
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const activeQuote = INSPIRING_QUOTES[currentQuoteIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-neutral-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-orange-500/20">
      
      {/* Background radial orange glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Column: Text & Pedagogical Voice */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Metadata strip with orange glow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold tracking-wider text-orange-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Acción Formativa Oficial · 60 Horas INFOTEP</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Ley 379-81 & Ley 87-01</span>
            </div>

            {/* Main Headline with attractive fonts & black-orange gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display leading-[1.08]">
              Procedimientos y Beneficios de los Afiliados al{' '}
              <span className="text-gradient-fire block sm:inline">
                Sistema de Reparto
              </span>
            </h1>

            {/* Educator's Voice Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-2xl">
              Diseñado con especial dedicación para <strong className="text-white">adultos mayores, pensionados y servidores públicos con 20+ años de labor</strong>. 
              Aprende a defender tu pensión con fundamento jurídico, tramitar tu traspaso desde las AFP privadas 
              y asegurar el retiro digno que te ganaste con el trabajo de toda una vida.
            </p>

            {/* Voice of Teacher Synthesizer Card in Black/Orange */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-orange-500/30 shadow-xl shadow-orange-950/20 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <button
                  onClick={handleToggleVoice}
                  className={`mt-0.5 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all active:scale-95 cursor-pointer shadow-lg ${
                    isPlayingAudio
                      ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white animate-pulse shadow-orange-500/40'
                      : 'bg-gradient-to-br from-orange-500 to-amber-600 text-black font-bold hover:from-orange-400 hover:to-amber-500 shadow-orange-500/20'
                  }`}
                  title={isPlayingAudio ? 'Pausar locución de la docente' : 'Escuchar mensaje de bienvenida de la docente'}
                >
                  {isPlayingAudio ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-black stroke-[2.5]" />}
                </button>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Voz de la Docente · Licda. Francia De Los Santos
                    </span>
                    {isPlayingAudio && (
                      <span className="text-[11px] font-bold text-orange-400 animate-pulse">
                        Reproduciendo voz...
                      </span>
                    )}
                  </div>
                  <p className="text-sm italic text-zinc-200 font-quote leading-relaxed">
                    «La seguridad social no es una dádiva ni un favor del gobierno: es un derecho fundamental forjado con el sudor de tu frente.»
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Pulsa el botón naranja para escuchar el audio explicativo de bienvenida en español dominicano.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-black text-black bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <span>Calcular mi Pensión y Traspaso</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
              </a>

              <a
                href="#modulos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 rounded-2xl transition-all whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Explorar Programa (60h)</span>
              </a>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-zinc-800/80">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">
                  60 Horas
                </span>
                <span className="text-xs text-orange-400/90 font-medium">Sábados 8:00 AM - 4:00 PM</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">
                  20+ Años
                </span>
                <span className="text-xs text-orange-400/90 font-medium">60% al 80% legal garantizado</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">
                  Res. 289-03
                </span>
                <span className="text-xs text-orange-400/90 font-medium">Comisión DIDA & SIPEN</span>
              </div>
            </div>

          </div>

          {/* Right Column: Senior Citizens Image & Quotes Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Senior Citizens Visual Showcase */}
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-950/40 group">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={TEACHER_DATA.images.heroSeniors}
                  alt="Adultos mayores y pensionados dominicanos en centro cívico"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Contrast gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-orange-500/40 text-orange-400 text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Users className="w-3.5 h-3.5" />
                  <span>Nuestros Afiliados y Docentes</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-0.5">
                    Dignidad en la Vejez · Art. 60 Constitución
                  </p>
                  <p className="text-sm font-semibold text-zinc-100 font-sans leading-snug">
                    Afiliados mayores de 60 años protegidos por el Sistema de Reparto y la Ley 379-81.
                  </p>
                </div>
              </div>
            </div>

            {/* Teacher Feature Box */}
            <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-6 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 pb-4 border-b border-zinc-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-black flex items-center justify-center font-display font-black text-xl shadow-lg shrink-0">
                  FDS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display leading-tight">
                    {TEACHER_DATA.name}
                  </h3>
                  <p className="text-xs text-orange-400 font-semibold font-sans">
                    {TEACHER_DATA.academicTitle}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {TEACHER_DATA.university} · Servidora DGJP
                  </p>
                </div>
              </div>

              {/* Quotation Carousel */}
              <div className="mt-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1.5">
                  <span className="text-orange-400 font-semibold">Reflexión Docente</span>
                  <span>{currentQuoteIndex + 1} de {INSPIRING_QUOTES.length}</span>
                </div>
                <blockquote className="text-sm font-quote italic text-zinc-200 leading-snug">
                  {activeQuote.quote}
                </blockquote>
                <div className="mt-2 text-right">
                  <cite className="text-xs font-bold text-orange-400 not-italic">
                    — {activeQuote.author}
                  </cite>
                </div>
              </div>

              {/* Consultation trigger */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400">¿Deseas orientación directa?</span>
                <button
                  onClick={onOpenContact}
                  className="text-xs font-black text-orange-400 hover:text-orange-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Hablar con la Docente</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
