import React, { useState, useEffect } from 'react';
import { SchoolCrest } from './SchoolCrest';
import { Search, Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenSearch: () => void;
  onOpenAdmissions: () => void;
  onOpenTour: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenSearch,
  onOpenAdmissions,
  onOpenTour,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: lang === 'id' ? 'TENTANG KAMI' : 'ABOUT', href: '#about' },
    { id: 'academics', label: lang === 'id' ? 'AKADEMIK' : 'ACADEMICS', href: '#academics' },
    { id: 'events', label: lang === 'id' ? 'KEGIATAN' : 'EVENTS', href: '#events' },
    { id: 'gallery', label: lang === 'id' ? 'GALERI' : 'GALLERY', href: '#gallery' },
    { id: 'teachers', label: lang === 'id' ? 'GURU' : 'TEACHERS', href: '#teachers' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#142952]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-[#1b3a6b] border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Zone: Crest & School Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-white shrink-0"
          >
            <div className="p-1 rounded-sm text-amber-400 group-hover:scale-105 transition-transform duration-200">
              <SchoolCrest size={42} className="text-white drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase font-serif-title leading-tight">
                SMP 6 JEMBER
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-blue-200/90 uppercase -mt-0.5">
                SENIOR HIGH SCHOOL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-[13px] font-bold tracking-wider transition-colors duration-200 whitespace-nowrap uppercase py-1 relative ${
                  activeSection === link.id
                    ? 'text-amber-400'
                    : 'text-slate-100/90 hover:text-amber-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Icon Trigger matching reference */}
            <button
              onClick={onOpenSearch}
              aria-label="Search portal"
              className="p-2 text-white/90 hover:text-amber-300 hover:bg-white/10 rounded-md transition-colors"
              title={lang === 'id' ? 'Cari di portal...' : 'Search portal...'}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-md transition-colors"
              title="Ganti Bahasa / Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* PPDB / Admissions CTA */}
            <button
              onClick={onOpenAdmissions}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded shadow-md border border-blue-400/40 transition-colors"
            >
              <span>{lang === 'id' ? 'DAFTAR PPDB' : 'ADMISSIONS'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-3 py-2 rounded-md text-sm font-bold tracking-wider uppercase ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-white/10'
                    : 'text-slate-100 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="w-full text-center px-4 py-2 text-xs font-bold uppercase tracking-wider border border-white/30 text-white rounded hover:bg-white/10"
              >
                {lang === 'id' ? 'IKUTI TUR SEKOLAH' : 'TAKE A TOUR'}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full text-center px-4 py-2 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white font-bold rounded hover:bg-blue-500 shadow-md"
              >
                {lang === 'id' ? 'PENDAFTARAN PPDB 2026/2027' : 'ENROLL / ADMISSIONS'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
