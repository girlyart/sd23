import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface CallToActionBannerProps {
  lang: Language;
  onOpenAdmissions: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ lang, onOpenAdmissions }) => {
  return (
    <section className="bg-[#1b437e] text-white py-8 sm:py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Ribbon / Badge Icon & Text */}
          <div className="flex items-center gap-4 sm:gap-6 text-center md:text-left">
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 flex items-center justify-center bg-blue-600/50 shadow-md">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                {/* Circular Medal with Ribbon */}
                <circle cx="20" cy="17" r="11" />
                <text x="20" y="21" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle" stroke="none">1</text>
                {/* Ribbon Tails */}
                <path d="M14 26 L11 37 L17 33 L20 37 L20 28" fill="currentColor" opacity="0.8" />
                <path d="M26 26 L29 37 L23 33 L20 37 L20 28" fill="currentColor" opacity="0.8" />
              </svg>
            </div>

            <div>
              <p className="text-base sm:text-lg lg:text-xl font-bold tracking-wide uppercase leading-snug">
                {lang === 'id' ? (
                  <>
                    SISWA-SISWI KAMI BERTALENTA,{' '}
                    <span className="font-normal lowercase text-blue-100">
                      penuh semangat, pekerja keras, dan kaya akan gagasan inovatif.
                    </span>
                  </>
                ) : (
                  <>
                    OUR STUDENTS ARE TALENTED,{' '}
                    <span className="font-normal lowercase text-blue-100">
                      passionate, hard-working and full of good ideas.
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-500 rounded border-2 border-blue-400/60 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>{lang === 'id' ? 'Pelajari Selengkapnya' : 'Learn More'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
