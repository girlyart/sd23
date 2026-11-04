import React, { useState, useMemo } from 'react';
import { EVENTS_DATA, TEACHERS_DATA, STORIES_DATA, CAMPUS_LOCATIONS } from '../data/schoolData';
import { Language } from '../types';
import { Search, X, Calendar, User, BookOpen, MapPin, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  lang,
  isOpen,
  onClose,
  onNavigateSection
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return { events: [], teachers: [], stories: [], locations: [] };
    const q = query.toLowerCase();

    return {
      events: EVENTS_DATA.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.titleEn.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
      ),
      teachers: TEACHERS_DATA.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.departmentName.toLowerCase().includes(q) ||
        t.bio.toLowerCase().includes(q) ||
        t.degrees.toLowerCase().includes(q)
      ),
      stories: STORIES_DATA.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.titleEn.toLowerCase().includes(q) ||
        s.snippet.toLowerCase().includes(q)
      ),
      locations: CAMPUS_LOCATIONS.filter(l =>
        l.name.toLowerCase().includes(q) ||
        l.nameEn.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q)
      )
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults = results.events.length + results.teachers.length + results.stories.length + results.locations.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-blue-700 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'id'
                ? 'Cari guru, mata pelajaran, kegiatan, atau fasilitas...'
                : 'Search faculty, subjects, events, or campus facilities...'
            }
            className="w-full text-sm bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-500 hover:text-slate-700 text-xs font-bold uppercase tracking-wider pl-2 border-l border-slate-200"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="p-5 overflow-y-auto space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center text-slate-400 text-xs space-y-3">
              <p>{lang === 'id' ? 'Ketik kata kunci untuk mencari di seluruh portal Sekolah' : 'Type to search across events, faculty, stories, and campus facilities'}</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['Fisika', 'Olimpiade', 'Robotika', 'Beasiswa', 'Perpustakaan', 'Prestasi'].map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setQuery(keyword)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-[11px] transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-slate-500 text-xs">
              <p>{lang === 'id' ? 'Tidak ada hasil ditemukan untuk' : 'No results found for'} "{query}".</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Events Results */}
              {results.events.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{lang === 'id' ? 'Kegiatan & Kalender' : 'Events & Calendar'} ({results.events.length})</span>
                  </h4>
                  <div className="divide-y divide-slate-100">
                    {results.events.map((evt) => (
                      <button
                        key={evt.id}
                        onClick={() => {
                          onClose();
                          onNavigateSection('events');
                        }}
                        className="w-full text-left py-2.5 px-3 rounded hover:bg-slate-50 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900 group-hover:text-blue-800">
                            {lang === 'id' ? evt.title : evt.titleEn}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {evt.date} · {evt.location}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Teachers Results */}
              {results.teachers.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{lang === 'id' ? 'Profil Guru' : 'Faculty'} ({results.teachers.length})</span>
                  </h4>
                  <div className="divide-y divide-slate-100">
                    {results.teachers.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          onClose();
                          onNavigateSection('teachers');
                        }}
                        className="w-full text-left py-2.5 px-3 rounded hover:bg-slate-50 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900 group-hover:text-blue-800">
                            {t.name}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {lang === 'id' ? t.role : t.roleEn} · {t.degrees}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stories Results */}
              {results.stories.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                    <span>{lang === 'id' ? 'Cerita Kelas & Prestasi' : 'Stories'} ({results.stories.length})</span>
                  </h4>
                  <div className="divide-y divide-slate-100">
                    {results.stories.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onClose();
                          onNavigateSection('stories');
                        }}
                        className="w-full text-left py-2.5 px-3 rounded hover:bg-slate-50 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900 group-hover:text-blue-800">
                            {lang === 'id' ? s.title : s.titleEn}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {s.date} · {s.author}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
