import React, { useState } from 'react';
import { TEACHERS_DATA } from '../data/schoolData';
import { Teacher, Language } from '../types';
import { Mail, Clock, Award, BookOpen, MessageSquare } from 'lucide-react';

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
  ];

  const filteredTeachers = selectedDept === 'all'
    ? TEACHERS_DATA
    : TEACHERS_DATA.filter(t => t.department === selectedDept);

  return (
    <section id="teachers" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
            {lang === 'id' ? 'Dewan Pendidik & Pakar Akademik' : 'Faculty & Academic Advisors'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            {lang === 'id' ? 'PROFIL GURU & PENDIDIK' : 'TEACHERS PROFILE'}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {lang === 'id'
              ? 'Pendidik berdedikasi tinggi dengan latar belakang akademis dari universitas terkemuka dunia yang siap membimbing potensi siswa secara personal.'
              : 'Our faculty members hold master and doctoral degrees from renowned global universities, bringing real research passion to the classroom.'}
          </p>
        </div>

        {/* Department Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#edf4fd] border border-blue-100 rounded-lg max-w-2xl mx-auto">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedDept === dept.id
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {lang === 'id' ? dept.labelId : dept.labelEn}
            </button>
          ))}
        </div>

        {/* Teachers Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-600/90 text-white px-2 py-0.5 rounded">
                      {lang === 'id' ? teacher.departmentName : teacher.departmentNameEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                      {teacher.name}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 space-y-3">
                  <div className="text-xs font-semibold text-blue-800">
                    {lang === 'id' ? teacher.role : teacher.roleEn}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {lang === 'id' ? teacher.bio : teacher.bioEn}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{teacher.degrees}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{teacher.officeHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => onSelectTeacher(teacher)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Konsultasi Pengajar' : 'Book Consultation'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
