import React, { useState } from 'react';
import { TEACHERS_DATA } from '../data/schoolData';
import { Teacher, Language } from '../types';
import { MessageSquare } from 'lucide-react';

interface TeachersDirectoryProps {
  lang: Language;
  onSelectTeacher: (teacher: Teacher) => void;
}

export const TeachersDirectory: React.FC<TeachersDirectoryProps> = ({ lang, onSelectTeacher }) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const departments = [
    { id: 'all', labelId: 'Semua Guru', labelEn: 'All Faculty' },
    { id: 'science', labelId: 'Sains & Riset', labelEn: 'Science & Research' },
    { id: 'math', labelId: 'Matematika', labelEn: 'Mathematics' },
    { id: 'technology', labelId: 'Komputer & AI', labelEn: 'Computer Science & AI' },
    { id: 'language', labelId: 'Bahasa & Sastra', labelEn: 'Languages & Literature' },
    { id: 'humanities', labelId: 'Sosial & Karir', labelEn: 'Social & Career' },
    { id: 'arts', labelId: 'Seni Musik', labelEn: 'Music & Arts' },
  ];

  const filteredTeachers = selectedDept === 'all'
    ? TEACHERS_DATA
    : TEACHERS_DATA.filter(t => t.department === selectedDept);

  return (
    <section id="teachers" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
            {lang === 'id' ? 'Dewan Pendidik & Pakar Akademik' : 'Faculty & Academic Advisors'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            {lang === 'id' ? 'PROFIL GURU & PENDIDIK' : 'TEACHERS PROFILE'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {lang === 'id'
              ? 'Pendidik berdedikasi tinggi dengan latar belakang akademis dari universitas terkemuka dunia yang siap membimbing potensi siswa secara personal.'
              : 'Our faculty members hold master and doctoral degrees from renowned global universities, bringing real research passion to the classroom.'}
          </p>
        </div>

        {/* Department Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-[#edf4fd] border border-blue-100 rounded-lg max-w-3xl mx-auto">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedDept === dept.id
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {lang === 'id' ? dept.labelId : dept.labelEn}
            </button>
          ))}
        </div>

        {/* Teachers Cards Grid - Box Cards with Circular Profile Photos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => onSelectTeacher(teacher)}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-lg transition-all duration-300 p-3.5 sm:p-4.5 flex flex-col justify-between items-center text-center group cursor-pointer hover:-translate-y-1 relative"
            >
              {/* Top Department Tag */}
              <div className="w-full flex justify-center mb-3">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200/80 line-clamp-1">
                  {lang === 'id' ? teacher.departmentName : teacher.departmentNameEn}
                </span>
              </div>

              {/* Circular Photo (Foto Dalam Bentuk Lingkaran) */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2.5 border-blue-700 shadow-md ring-4 ring-blue-50 group-hover:ring-blue-200 group-hover:scale-105 transition-all duration-300 shrink-0 bg-slate-100 mx-auto">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Teacher Info */}
              <div className="mt-3 w-full space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1 leading-snug">
                  {teacher.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-semibold text-blue-800 line-clamp-1">
                  {lang === 'id' ? teacher.role : teacher.roleEn}
                </p>
                <p className="text-[10px] text-slate-500 line-clamp-1">
                  {teacher.degrees}
                </p>
              </div>

              {/* Blue CTA Button (Semua Call to Action Warna Biru) */}
              <div className="w-full mt-3.5 pt-2.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTeacher(teacher);
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Konsultasi' : 'Consultation'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
