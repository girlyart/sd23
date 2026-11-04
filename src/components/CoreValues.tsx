import React from 'react';
import { Language } from '../types';

interface CoreValuesProps {
  lang: Language;
}

export const CoreValues: React.FC<CoreValuesProps> = ({ lang }) => {
  const pillars = [
    {
      id: 'empower',
      title: 'Empower',
      titleId: 'Pemberdayaan (Empower)',
      descEn: 'Nurturing intellectual curiosity, scientific reasoning, and technical ingenuity to prepare pioneering thinkers.',
      descId: 'Memupuk rasa ingin tahu intelektual, penalaran sains mendalam, dan kreativitas rekayasa guna mencetak generasi pelopor.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Atom Nucleus & Orbits matching reference */}
          <circle cx="24" cy="24" r="3.5" fill="currentColor" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(30 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-30 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(90 24 24)" />
        </svg>
      )
    },
    {
      id: 'engage',
      title: 'Engage',
      titleId: 'Keterlibatan (Engage)',
      descEn: 'Fostering global perspectives, bilingual mastery, Model UN diplomacy, and active community outreach.',
      descId: 'Membina wawasan global, kefasihan multibahasa, diplomasi Model UN, dan kepedulian nyata bagi masyarakat.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Globe with Latitude/Longitude matching reference */}
          <circle cx="24" cy="24" r="18" />
          <ellipse cx="24" cy="24" rx="8" ry="18" />
          <line x1="6" y1="24" x2="42" y2="24" />
          <line x1="9" y1="14" x2="39" y2="14" />
          <line x1="9" y1="34" x2="39" y2="34" />
        </svg>
      )
    },
    {
      id: 'graduation',
      title: 'Graduation',
      titleId: 'Kelulusan (Graduation)',
      descEn: 'Comprehensive higher-ed roadmap delivering 99.4% acceptance to premier national and Ivy League universities.',
      descId: 'Roadmap persiapan universitas komprehensif dengan tingkat penerimaan 99.4% di PTN favorit dan universitas top dunia.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Mortarboard Academic Cap matching reference */}
          <polygon points="24 8, 42 18, 24 28, 6 18" strokeLinejoin="round" />
          <path d="M12 21.5 V33 C12 36, 24 40, 24 40 C24 40, 36 36, 36 33 V21.5" strokeLinejoin="round" />
          <line x1="39" y1="20" x2="39" y2="35" />
          <circle cx="39" cy="36" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'awarding',
      title: 'Awarding',
      titleId: 'Prestasi (Awarding)',
      descEn: 'Celebrating national science olympiad medals, robotics trophies, sports championships, and arts exhibitions.',
      descId: 'Apresiasi medali olimpiade sains nasional, piala robotika dunia, kejuaraan olahraga, dan pameran seni rupa.',
      icon: (
        <svg className="w-12 h-12 text-blue-600 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Trophy Cup with Star matching reference */}
          <path d="M12 10 H36 V22 C36 28.6 30.6 34 24 34 C17.4 34 12 28.6 12 22 Z" strokeLinejoin="round" />
          <path d="M12 14 H6 C6 20 12 22 12 22" strokeLinejoin="round" />
          <path d="M36 14 H42 C42 20 36 22 36 22" strokeLinejoin="round" />
          <line x1="24" y1="34" x2="24" y2="40" />
          <line x1="16" y1="40" x2="32" y2="40" strokeLinecap="round" />
          {/* Star in Trophy */}
          <polygon points="24 16, 25.5 19.5, 29 20, 26.5 22.5, 27 26, 24 24, 21 26, 21.5 22.5, 19 20, 22.5 19.5" fill="currentColor" stroke="none" />
        </svg>
      )
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            WE HAVE FAITH IN OUR STUDENT FUTURE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'id'
              ? 'Siswa-siswi kami adalah generasi bertalenta, pekerja keras, dan penuh dengan ide-ide cemerlang. Kami mendorong serta memberdayakan mereka untuk merealisasikan gagasan mereka menjadi kenyataan. Pengalaman langsung adalah inti dari pembelajaran kami.'
              : 'Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we are all about.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#f8faff] hover:bg-white p-8 rounded-xl border border-blue-100 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-full bg-blue-50/80 hover:bg-blue-100/60 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                {lang === 'id' ? pillar.titleId : pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {lang === 'id' ? pillar.descId : pillar.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
