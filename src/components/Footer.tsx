import React, { useState } from 'react';
import { SchoolCrest } from './SchoolCrest';
import { SCHOOL_INFO } from '../data/schoolData';
import { Language } from '../types';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenAdmissions: () => void;
  onOpenTour: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenAdmissions,
  onOpenTour,
  onNavigateSection
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-[#0f1f3d] text-slate-300 border-t border-blue-950">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: About & Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolCrest size={40} className="text-amber-400 shrink-0" />
              <div>
                <div className="text-base font-bold tracking-wider text-white uppercase font-serif-title">
                  {SCHOOL_INFO.fullName}
                </div>
                <p className="text-xs text-blue-300 font-medium tracking-wide">
                  {SCHOOL_INFO.accreditation}
                </p>
              </div>
            </div>
            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Senin - Jumat: 07:00 - 16:30 WIB</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-title">
              {lang === 'id' ? 'Navigasi' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {['about', 'academics', 'events', 'gallery', 'teachers'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigateSection(id)}
                    className="hover:text-amber-400 transition-colors uppercase tracking-wide cursor-pointer"
                  >
                    {id}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenTour}
                  className="hover:text-amber-400 transition-colors uppercase tracking-wide cursor-pointer text-left"
                >
                  {lang === 'id' ? 'Tur Sekolah' : 'Virtual Tour'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmissions}
                  className="hover:text-blue-300 text-blue-400 font-semibold transition-colors uppercase tracking-wide cursor-pointer text-left"
                >
                  {lang === 'id' ? 'Daftar PPDB' : 'Admissions'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-title">
              {lang === 'id' ? 'Program Unggulan' : 'Core Programs'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>MIPA Lanjut & Robotika Otonom</li>
              <li>IPS Diplomasi & Model United Nations</li>
              <li>International Baccalaureate (IB) Diploma</li>
              <li>Persiapan Beasiswa & Olimpiade Sains</li>
              <li>Akademi Orkestra Musik & Seni Teater</li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Academic Bulletin */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-title">
              {lang === 'id' ? 'Warta Akademik' : 'Academic Bulletin'}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'id'
                ? 'Dapatkan informasi jadwal ujian, agenda olimpiade, dan pembukaan beasiswa langsung di kotak masuk Anda.'
                : 'Subscribe for latest academic olympiad dates, exam reminders, and scholarship briefings.'}
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 p-2.5 bg-emerald-950/60 border border-emerald-800 text-emerald-300 rounded text-xs">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'id' ? 'Terima kasih telah berlangganan!' : 'Subscribed successfully!'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 text-white rounded focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 rounded transition-colors shrink-0 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} SEKOLAH SENIOR HIGH SCHOOL. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Privasi</span>
            <span>·</span>
            <span>Syarat & Ketentuan</span>
            <span>·</span>
            <span>Standar Kurikulum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
