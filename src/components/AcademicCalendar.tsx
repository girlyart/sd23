import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/schoolData';
import { SchoolEvent, Language } from '../types';
import { Calendar as CalendarIcon, Clock, MapPin, User, ChevronRight, Check } from 'lucide-react';

interface AcademicCalendarProps {
  lang: Language;
  onSelectEvent: (event: SchoolEvent) => void;
}

export const AcademicCalendar: React.FC<AcademicCalendarProps> = ({ lang, onSelectEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelId: 'Semua Agenda', labelEn: 'All Events' },
    { id: 'competition', labelId: 'Kompetisi & Sains', labelEn: 'Competitions' },
    { id: 'extracurricular', labelId: 'Seni & Ekskul', labelEn: 'Arts & Culture' },
    { id: 'academic', labelId: 'Akademik & Univ Fair', labelEn: 'Academic & Expo' },
    { id: 'parent', labelId: 'Forum Orang Tua', labelEn: 'Parent Forums' },
    { id: 'exam', labelId: 'Jadwal Ujian (PAS)', labelEn: 'Examinations' },
  ];

  const filteredEvents = selectedCategory === 'all'
    ? EVENTS_DATA
    : EVENTS_DATA.filter(evt => evt.category === selectedCategory);

  return (
    <section id="events" className="py-20 bg-[#edf4fd] text-slate-900 border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            ACADEMIC CALENDAR
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {lang === 'id'
              ? 'Agenda kegiatan akademik, pameran riset, pagelaran seni orkestra, dan forum evaluasi pembelajaran semester ganjil tahun ajaran 2026/2027.'
              : 'Our students are talented, hard-working and full of good ideas. We encourage and empower them to participate in high-impact school activities.'}
          </p>
        </div>

        {/* Featured Student Activity Highlight Card */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-850 to-indigo-900 text-white shadow-md border border-blue-800/50 flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-5/12 h-52 sm:h-auto self-stretch relative bg-white overflow-hidden">
            <img
              src="/assets/aistudio/image_919aeb47.png"
              alt="Kegiatan Belajar Siswa"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="w-full sm:w-7/12 p-6 sm:p-7 space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded">
              <span>{lang === 'id' ? 'Dokumentasi Kegiatan Siswa' : 'Student Activities'}</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-snug">
              {lang === 'id' ? 'Budaya Belajar Aktif & Diskusi Kelompok Mandiri' : 'Collaborative Group Study & Scientific Inquiry'}
            </h3>
            <p className="text-xs text-blue-100/90 leading-relaxed">
              {lang === 'id'
                ? 'Siswa dan siswi dibina dalam kelompok belajar mandiri untuk memperdalam literasi, membedah modul pembelajaran, dan mempersiapkan olimpiade sains.'
                : 'Empowering students through peer study groups, critical inquiry, and national olympiad preparation.'}
            </p>
          </div>
        </div>

        {/* Filter Bar with Segmented Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/95 border border-blue-100 shadow-xs rounded-lg max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'id' ? cat.labelId : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Events Grid - 6 Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl border border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Event Image Banner with Overlay & Badges */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={event.image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'}
                  alt={lang === 'id' ? event.title : event.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Date Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-lg shadow-md border border-white/60 px-2.5 py-1.5 flex flex-col items-center">
                  <span className="text-xl font-black text-blue-900 leading-none">{event.day}</span>
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-blue-700 mt-0.5">{event.month}</span>
                </div>

                {/* Floating Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-blue-900/90 backdrop-blur-md px-2.5 py-1 rounded shadow-sm border border-white/20">
                    {event.category}
                  </span>
                </div>

                {/* Bottom Photo Overlay Info */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs drop-shadow">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-100">
                    <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                    {lang === 'id' ? event.title : event.titleEn}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    {event.speakerOrHost && (
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{event.speakerOrHost}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                    {lang === 'id' ? event.description : event.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Card Footer with Blue CTA */}
              <div className="px-5 sm:px-6 py-3.5 bg-blue-50/40 border-t border-blue-100/70 flex items-center justify-between mt-auto">
                <div className="text-xs font-semibold text-slate-500">
                  {event.seatsAvailable ? (
                    <span className="text-emerald-700 font-bold">{event.seatsAvailable} {lang === 'id' ? 'kursi tersedia' : 'seats open'}</span>
                  ) : (
                    <span className="text-slate-600 font-medium">{lang === 'id' ? 'Seluruh Siswa' : 'All Students'}</span>
                  )}
                </div>

                <button
                  onClick={() => onSelectEvent(event)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded text-xs font-bold shadow-sm transition-colors cursor-pointer group-hover:bg-blue-700"
                >
                  <span>{lang === 'id' ? 'Detail & RSVP' : 'RSVP Details'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
