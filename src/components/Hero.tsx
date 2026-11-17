import React from 'react';
import { Calendar, BookOpen, Users, Compass, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenTour: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenTour, onNavigateSection }) => {
  // Exact path of the user-provided photo in workspace
  const userPhotoSrc = '/assets/aistudio/image_a3ab782a.png';

  return (
    <section id="hero" className="relative pt-20 bg-[#142952] overflow-hidden text-white min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
      {/* ============================================================
          UNIFIED BACKGROUND: Photo seamlessly merged with the hero canvas
          ============================================================ */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {/* The User-Provided Photo as the Panoramic Foundation */}
        <img
          src={userPhotoSrc}
          alt="Siswa dan Siswi Sekolah Sedang Belajar Bersama"
          className="w-full h-full object-cover object-right sm:object-[75%_center] transition-transform duration-700 hover:scale-[1.01]"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Seamless Blend Layer 1: Left-to-right royal blue gradient
            (Creates a flawless transition from the deep blue text zone on the left to the outdoor students zone on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#142952] via-[#1b3a6b]/95 via-45% md:via-42% to-transparent pointer-events-none" />

        {/* Seamless Blend Layer 2: Subtle blue atmospheric tint
            (Harmonizes the natural daylight of the photo with the school's royal blue theme) */}
        <div className="absolute inset-0 bg-[#142952]/20 mix-blend-multiply pointer-events-none" />

        {/* Seamless Blend Layer 3: Top & Bottom vignettes to blend into the navbar and cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142952] via-transparent via-60% to-[#142952]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b3a6b]/90 via-transparent via-30% to-transparent pointer-events-none" />
      </div>

      {/* ============================================================
          MAIN HERO CONTENT OVERLAY (Legible on Left, Open View on Right)
          ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Welcome Heading, Kennedy Quote, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-wider self-center lg:self-start shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lang === 'id' ? 'Tahun Ajaran Baru 2026 / 2027' : 'Academic Year 2026 / 2027'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight uppercase font-serif-title drop-shadow-md">
              WELCOME TO <span className="text-amber-400">SMP NEGERI JEMBER</span>
            </h1>

            <div className="max-w-2xl mx-auto lg:mx-0">
              <blockquote className="text-sm sm:text-base lg:text-lg text-blue-100 font-light leading-relaxed italic border-l-0 drop-shadow">
                "{lang === 'id'
                  ? 'Marilah kita memaknai pendidikan sebagai wahana pengembangan potensi terbaik kita, karena dalam diri setiap insan terpatri harapan dan cita-cita luhur yang bila diwujudkan akan membawa kemaslahatan bersama dan kejayaan bagi bangsa. (John F. Kennedy)'
                  : 'Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength for our nation. (John F. Kennedy)'
                }"
              </blockquote>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenTour}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 border-2 border-blue-400/60 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl cursor-pointer rounded-sm"
              >
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 text-white" />
                <span>{lang === 'id' ? 'IKUTI TUR SEKOLAH' : 'TAKE A TOUR'}</span>
              </button>

              <button
                onClick={() => onNavigateSection('about')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-blue-100 hover:text-white bg-black/20 backdrop-blur-sm rounded hover:bg-black/30 transition-colors shadow-sm"
              >
                <span>{lang === 'id' ? 'Pelajari Visi Kami' : 'Explore Our Vision'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Left completely open so students are clear and unobstructed */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
        </div>
      </div>

      {/* ============================================================
          3 COLOR-CODED FEATURE BANNER CARDS ANCHORED AT THE BOTTOM
          ============================================================ */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-px w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl">
          {/* Card 1: Student Events (Crimson / Pink-Red) */}
          <button
            onClick={() => onNavigateSection('events')}
            className="group relative overflow-hidden bg-rose-600 hover:bg-rose-700 text-left p-6 sm:p-8 text-white transition-all duration-300 cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 mix-blend-screen"
              style={{
                backgroundImage: `url('/assets/aistudio/image_919aeb47.png')`,
                backgroundPosition: 'center 15%'
              }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
              <div className="flex items-center justify-between">
                <Calendar className="w-7 h-7 text-white/90" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-rose-200 bg-black/20 px-2 py-0.5 rounded">
                  {lang === 'id' ? 'Agenda & Kegiatan' : 'Calendar & Events'}
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider leading-tight">
                  {lang === 'id' ? 'KEGIATAN SISWA' : 'STUDENT EVENTS'}
                </h3>
                <p className="text-xs text-rose-100/90 mt-1 line-clamp-2">
                  {lang === 'id'
                    ? 'Olimpiade, konser orkestra, kompetisi riset, dan ekstrakurikuler dinamis.'
                    : 'Olympiads, orchestra galas, robotics battles, and vibrant clubs.'}
                </p>
              </div>
            </div>
          </button>

          {/* Card 2: Classroom Stories (Warm Orange / Amber) */}
          <button
            onClick={() => onNavigateSection('stories')}
            className="group relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-left p-6 sm:p-8 text-white transition-all duration-300 cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 mix-blend-multiply"
              style={{
                backgroundImage: `url('/assets/aistudio/image_081c038a.png')`,
                backgroundPosition: 'center 30%'
              }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
              <div className="flex items-center justify-between">
                <BookOpen className="w-7 h-7 text-white/90" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-100 bg-black/20 px-2 py-0.5 rounded">
                  {lang === 'id' ? 'Cerita & Jurnal' : 'Stories'}
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider leading-tight">
                  {lang === 'id' ? 'CERITA KELAS' : 'CLASSROOM STORIES'}
                </h3>
                <p className="text-xs text-amber-100/90 mt-1 line-clamp-2">
                  {lang === 'id'
                    ? 'Inspirasi penelitian, jurnal karya ilmiah, dan prestasi membanggakan siswa.'
                    : 'Inspiring project breakthroughs, field journeys, and student triumphs.'}
                </p>
              </div>
            </div>
          </button>

          {/* Card 3: Teachers Profile (Cyan / Turquoise) */}
          <button
            onClick={() => onNavigateSection('teachers')}
            className="group relative overflow-hidden bg-cyan-600 hover:bg-cyan-700 text-left p-6 sm:p-8 text-white transition-all duration-300 cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 mix-blend-multiply"
              style={{
                backgroundImage: `url('/assets/aistudio/image_0d14cc93.png')`,
                backgroundPosition: 'center 20%'
              }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
              <div className="flex items-center justify-between">
                <Users className="w-7 h-7 text-white/90" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-100 bg-black/20 px-2 py-0.5 rounded">
                  {lang === 'id' ? 'Fakultas' : 'Faculty'}
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider leading-tight">
                  {lang === 'id' ? 'PROFIL GURU' : 'TEACHERS PROFILE'}
                </h3>
                <p className="text-xs text-cyan-100/90 mt-1 line-clamp-2">
                  {lang === 'id'
                    ? 'Pendidik berkualifikasi tinggi lulusan universitas terkemuka dunia.'
                    : 'Meet our master educators, mentors, and academic guidance advisors.'}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
