import React, { useState } from 'react';
import { CAMPUS_LOCATIONS } from '../data/schoolData';
import { CampusLocation, Language } from '../types';
import { X, MapPin, Users, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface VirtualTourModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  lang,
  isOpen,
  onClose,
  onOpenAdmissions
}) => {
  const [selectedLocation, setSelectedLocation] = useState<CampusLocation>(CAMPUS_LOCATIONS[0]);
  const [visitBooked, setVisitBooked] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorDate, setVisitorDate] = useState('2026-11-15');

  if (!isOpen) return null;

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName) return;
    setVisitBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-blue-900 text-white border-b border-blue-800">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded bg-blue-800 text-amber-400">
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                {lang === 'id' ? 'TUR VIRTUAL SEKOLAH' : 'VIRTUAL CAMPUS TOUR'}
              </h3>
              <p className="text-xs text-blue-200">
                {lang === 'id' ? 'Jelajahi fasilitas unggulan berstandar internasional' : 'Explore our world-class learning facilities'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800 transition-colors"
            aria-label="Close virtual tour modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Location Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {CAMPUS_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setSelectedLocation(loc);
                  setVisitBooked(false);
                }}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedLocation.id === loc.id
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'id' ? loc.name.split('&')[0] : loc.nameEn.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Location Spotlight Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden shadow-md bg-slate-900 min-h-[260px] sm:min-h-[320px]">
              <img
                src={selectedLocation.imageUrl}
                alt={selectedLocation.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                <span>{selectedLocation.floor}</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-amber-400 text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded shadow">
                <span>Kapasitas: {selectedLocation.capacity}</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800">
                  {selectedLocation.floor}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {lang === 'id' ? selectedLocation.name : selectedLocation.nameEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'id' ? selectedLocation.description : selectedLocation.descriptionEn}
                </p>

                <div className="pt-2 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    {lang === 'id' ? 'Fasilitas Utama:' : 'Key Highlights:'}
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-600">
                    {(lang === 'id' ? selectedLocation.features : selectedLocation.featuresEn).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book a Campus Visit Form Strip */}
          <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
            {visitBooked ? (
              <div className="flex items-center gap-3 text-emerald-800">
                <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                <div>
                  <h5 className="text-sm font-bold">
                    {lang === 'id' ? 'Jadwal Kunjungan Sekolah Berhasil Dikonfirmasi!' : 'Campus Visit Confirmed!'}
                  </h5>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    {lang === 'id'
                      ? `Terima kasih, Bpk/Ibu ${visitorName}. Tim Admissions kami akan menyambut Anda pada tanggal ${visitorDate}. Undangan resmi telah dikirim ke WhatsApp/Email Anda.`
                      : `Thank you, ${visitorName}. Our Admissions Counselors will welcome you on ${visitorDate}. An e-pass has been sent.`}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookVisit} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wide">
                    {lang === 'id' ? 'Ingin Melihat Sekolah Secara Langsung?' : 'Schedule An In-Person School Tour'}
                  </h5>
                  <span className="text-[11px] text-blue-700 font-semibold">Gratis & Didampingi Guru</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder={lang === 'id' ? 'Nama Orang Tua / Siswa' : 'Parent / Student Name'}
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="date"
                    required
                    value={visitorDate}
                    onChange={(e) => setVisitorDate(e.target.value)}
                    className="px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-blue-800 hover:bg-blue-900 rounded transition-colors cursor-pointer"
                  >
                    {lang === 'id' ? 'Jadwalkan Kunjungan' : 'Confirm Visit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenAdmissions();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded shadow-sm transition-colors cursor-pointer"
          >
            <span>{lang === 'id' ? 'Lanjut ke Pendaftaran Siswa Baru (PPDB)' : 'Proceed to Online Admissions'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold bg-slate-200 text-slate-800 hover:bg-slate-300 rounded transition-colors"
          >
            {lang === 'id' ? 'Tutup' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
