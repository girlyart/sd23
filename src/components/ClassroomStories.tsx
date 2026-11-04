import React, { useState } from 'react';
import { STORIES_DATA } from '../data/schoolData';
import { Story, Language } from '../types';
import { Calendar, User, ArrowRight, X, Clock } from 'lucide-react';

interface ClassroomStoriesProps {
  lang: Language;
}

export const ClassroomStories: React.FC<ClassroomStoriesProps> = ({ lang }) => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <section id="stories" className="py-20 bg-[#edf4fd] text-slate-900 border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
            {lang === 'id' ? 'Inspirasi & Karya Nyata Siswa' : 'Student Voice & Research'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            {lang === 'id' ? 'CERITA KELAS & PRESTASI' : 'CLASSROOM STORIES'}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {lang === 'id'
              ? 'Menengok dinamika belajar aplikatif, inovasi teknologi, kepedulian lingkungan, dan karya sastra yang lahir dari ruang-ruang kelas Sekolah.'
              : 'Discover how our students transform academic theories into international robotics gold medals, ecological expeditions, and published literature.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES_DATA.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded shadow">
                    {story.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{story.date}</span>
                    <span>·</span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors leading-snug line-clamp-2">
                    {lang === 'id' ? story.title : story.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {lang === 'id' ? story.snippet : story.snippetEn}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setActiveStory(story)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded shadow-sm transition-colors cursor-pointer"
                >
                  <span>{lang === 'id' ? 'Baca Selengkapnya' : 'Read Full Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Reader Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto">
            <div className="relative h-60 sm:h-72 bg-slate-900">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                  {activeStory.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold mt-2 text-white">
                  {lang === 'id' ? activeStory.title : activeStory.titleEn}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <span className="font-semibold text-slate-700">{activeStory.author} ({activeStory.role})</span>
                <span>·</span>
                <span>{activeStory.date}</span>
                <span>·</span>
                <span>{activeStory.readTime}</span>
              </div>

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-medium text-slate-900">
                  {lang === 'id' ? activeStory.snippet : activeStory.snippetEn}
                </p>
                <p>
                  {lang === 'id' ? activeStory.content : activeStory.contentEn}
                </p>
                <p>
                  {lang === 'id'
                    ? 'Proyek ini menjadi bukti nyata komitmen Sekolah dalam melahirkan lulusan yang tanggap terhadap persoalan sains modern dan siap menjadi pemimpin masa depan di era kecerdasan komputasi.'
                    : 'This hallmark milestone underscores Sekolah dedication to fostering graduates capable of tackling 21st-century complexities with deep academic rigor and empathy.'}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-800 hover:bg-blue-900 text-white rounded transition-colors"
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
