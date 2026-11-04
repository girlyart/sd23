import React, { useState } from 'react';
import { SchoolEvent, Language } from '../types';
import { X, Calendar, Clock, MapPin, CheckCircle2, Ticket } from 'lucide-react';

interface EventRsvpModalProps {
  lang: Language;
  event: SchoolEvent | null;
  onClose: () => void;
}

export const EventRsvpModal: React.FC<EventRsvpModalProps> = ({ lang, event, onClose }) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1b3a6b] text-white">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider">
              {lang === 'id' ? 'KONFIRMASI KEHADIRAN (RSVP)' : 'EVENT REGISTRATION & RSVP'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-blue-200 hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'id' ? 'E-Pass Berhasil Diterbitkan!' : 'RSVP Confirmed!'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                {lang === 'id'
                  ? `Terima kasih, ${attendeeName}. Tiket masuk digital dan tautan panduan acara telah dikirim ke ${email}.`
                  : `Thank you, ${attendeeName}. Your digital pass and admission instructions have been sent to ${email}.`}
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors"
                >
                  {lang === 'id' ? 'Selesai' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                {event.image && (
                  <div className="relative h-28 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={lang === 'id' ? event.title : event.titleEn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded shadow-sm">
                      {event.category}
                    </span>
                  </div>
                )}
                <div className="p-3.5 space-y-2">
                  {!event.image && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      {event.category}
                    </span>
                  )}
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {lang === 'id' ? event.title : event.titleEn}
                  </h4>
                  <div className="space-y-1 text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{event.date} ({event.day} {event.month})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'id' ? 'Nama Peserta / Orang Tua *' : 'Attendee Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder="e.g. Amanda Putri"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Alamat Email *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'No. WhatsApp *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 812-xxxx"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded transition-colors shadow-sm cursor-pointer"
                >
                  {lang === 'id' ? 'Dapatkan E-Pass Masuk' : 'Claim RSVP Ticket'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
