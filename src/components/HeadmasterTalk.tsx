import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Language } from '../types';
import { CheckCircle2, Award, Sparkles } from 'lucide-react';

interface HeadmasterTalkProps {
  lang: Language;
  onOpenAdmissions: () => void;
}

export const HeadmasterTalk: React.FC<HeadmasterTalkProps> = ({ lang, onOpenAdmissions }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#edf4fd] text-slate-900 border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Grandmaster Talk Text & Signature */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
                {lang === 'id' ? 'Sambutan Kepala Sekolah' : 'Grandmaster Talk'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase font-serif-title leading-tight">
                EDUCATION IS THE MOST POWERFUL WEAPON
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                {lang === 'id'
                  ? 'Siswa-siswi kami adalah generasi bertalenta, pekerja keras, dan penuh dengan ide-ide cemerlang. Kami mendorong serta memberdayakan mereka untuk merealisasikan gagasan mereka menjadi kenyataan. Pengalaman langsung dan keterlibatan aktif adalah jati diri kami.'
                  : "Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about."}
              </p>
              <p>
                {lang === 'id'
                  ? 'Para siswa kami selalu aktif berkarya dalam hal-hal yang berdampak nyata. Buktikan sendiri beragam peluang emas yang akan Anda raih dalam mempersiapkan diri menuju universitas impian di tingkat dunia. Tugas pendidik modern bukanlah menebang rimba belantara, melainkan mengairi padang keilmuan.'
                  : "Our students are busy doing things that matter. Take a look at the opportunities you'll have at the University. The task of the modern educator is not to cut down jungles, but to irrigate deserts."}
              </p>
            </div>

            {/* Key Academic Pillars Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{lang === 'id' ? 'Kurikulum Merdeka & IB Diploma' : 'Merdeka & IB World Curriculum'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{lang === 'id' ? 'Bimbingan Beasiswa Universitas' : 'Higher Ed Counseling 1-on-1'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{lang === 'id' ? 'Riset Sains & Inkubator Inovasi' : 'STEM Research Incubator'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{lang === 'id' ? 'Pendidikan Karakter & Moral Luhur' : 'Leadership & Ethics Heritage'}</span>
              </div>
            </div>

            {/* Signature & Name Block */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                {/* Handwritten Authentic Script */}
                <div className="font-signature text-3xl sm:text-4xl text-slate-800 tracking-wide select-none py-1">
                  Katherine Gonzalez
                </div>
                <div className="mt-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    {SCHOOL_INFO.principal.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'id' ? SCHOOL_INFO.principal.roleId : SCHOOL_INFO.principal.role}
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenAdmissions}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
              >
                <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Office'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Image Collage Matching Reference */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
              {/* Left Photo: Ibu Guru Mentoring Siswa di Kelas */}
              <div className="col-span-6 relative overflow-hidden rounded-lg shadow-lg group bg-slate-100">
                <img
                  src="/assets/aistudio/image_0d14cc93.png"
                  alt="Ibu Guru Membimbing dan Mentoring Siswa di Kelas"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold tracking-wider uppercase bg-blue-700/90 px-2.5 py-1 rounded shadow">
                    {lang === 'id' ? 'Bimbingan & Mentorship' : 'Mentorship'}
                  </span>
                </div>
              </div>

              {/* Right Stacked 2 Photos */}
              <div className="col-span-6 space-y-3 sm:space-y-4">
                {/* Top: Indonesian students collaborating in activity */}
                <div className="relative overflow-hidden rounded-lg shadow-md group bg-white">
                  <img
                    src="/assets/aistudio/image_919aeb47.png"
                    alt="Kegiatan Belajar & Kolaborasi Siswa"
                    className="w-full h-38 sm:h-46 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-700/90 px-1.5 py-0.5 rounded shadow">
                      {lang === 'id' ? 'Kegiatan Siswa' : 'Student Activity'}
                    </span>
                  </div>
                </div>

                {/* Bottom: Classroom collaborative study with laptop & library books */}
                <div className="relative overflow-hidden rounded-lg shadow-md group bg-white">
                  <img
                    src="/assets/aistudio/image_081c038a.png"
                    alt="Cerita Kelas & Diskusi Laptop Siswa"
                    className="w-full h-38 sm:h-46 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-600/90 px-1.5 py-0.5 rounded shadow">
                      {lang === 'id' ? 'Cerita Kelas' : 'Classroom Story'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* School Stats Strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white border border-blue-200/70 rounded-xl shadow-xs">
              {SCHOOL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-blue-900 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                    {lang === 'id' ? stat.labelId : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
