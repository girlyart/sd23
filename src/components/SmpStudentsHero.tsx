import React, { useState } from 'react';
import { BookOpen, Sparkles, Maximize2, Users } from 'lucide-react';
import { Language } from '../types';

interface SmpStudentsHeroProps {
  lang: Language;
}

export const SmpStudentsHero: React.FC<SmpStudentsHeroProps> = ({ lang }) => {
  const [zoomMode, setZoomMode] = useState<'focus' | 'panorama'>('focus');

  // Exact local file path as provided by user in workspace
  const userPhotoSrc = '/assets/aistudio/image_a3ab782a.png';

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center select-none overflow-visible">
      {/* View Mode Toggle: Focus on Students vs Full Panorama */}
      <div className="mb-3 z-30 inline-flex items-center gap-1.5 p-1 bg-black/30 backdrop-blur-md rounded-full border border-white/15 text-[11px] font-semibold text-white/90 shadow-lg">
        <button
          onClick={() => setZoomMode('focus')}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
            zoomMode === 'focus'
              ? 'bg-blue-600 text-white font-bold shadow-sm'
              : 'hover:text-white'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'Fokus Pelajar' : 'Student Focus'}</span>
        </button>
        <button
          onClick={() => setZoomMode('panorama')}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
            zoomMode === 'panorama'
              ? 'bg-blue-600 text-white font-bold shadow-sm'
              : 'hover:text-white'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'Panorama Lengkap' : 'Full Panorama'}</span>
        </button>
      </div>

      {/* Main Transparent Picture Stage (NO harsh borders, sitting directly on royal blue background) */}
      <div className="relative w-full overflow-visible flex items-center justify-center">
        {/* Soft atmospheric backlight directly behind students */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-64 sm:h-[320px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* The User-Provided Photo with Transparent Seamless Edge Mask */}
        <div
          className={`relative w-full transition-all duration-500 overflow-hidden ${
            zoomMode === 'focus'
              ? 'h-[340px] sm:h-[400px]'
              : 'h-[250px] sm:h-[320px]'
          }`}
          style={{
            // Smooth transparent feathering directly on royal blue canvas
            maskImage:
              'radial-gradient(ellipse 95% 85% at 55% 50%, black 70%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 95% 85% at 55% 50%, black 70%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        >
          <img
            src={userPhotoSrc}
            alt="Siswa dan Siswi Sekolah Sedang Belajar Bersama"
            className={`w-full h-full object-cover transition-all duration-500 drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] ${
              zoomMode === 'focus'
                ? 'object-right scale-110 sm:scale-115 origin-right'
                : 'object-center scale-100'
            }`}
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Subtle bottom fade matching #1b3a6b */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1b3a6b] via-[#1b3a6b]/50 to-transparent pointer-events-none" />
        </div>

        {/* Floating Verified Badge */}
        <div className="absolute top-2 left-0 sm:-left-3 bg-[#142952]/90 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-2 z-30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wide">
            {lang === 'id' ? 'Siswa & Siswi Berprestasi' : 'Outstanding Scholars'}
          </span>
        </div>
      </div>
    </div>
  );
};
