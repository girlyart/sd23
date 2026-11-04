import React, { useState } from 'react';
import { Teacher, Language } from '../types';
import { X, Send, CheckCircle2, MessageSquare, Clock, Mail } from 'lucide-react';

interface TeacherContactModalProps {
  lang: Language;
  teacher: Teacher | null;
  onClose: () => void;
}

export const TeacherContactModal: React.FC<TeacherContactModalProps> = ({
  lang,
  teacher,
  onClose
}) => {
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState('Konsultasi Akademik & Bimbingan Belajar');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!teacher) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-blue-900 text-white">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider">
              {lang === 'id' ? 'KONSULTASI AKADEMIK GURU' : 'TEACHER CONSULTATION'}
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
          {isSent ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'id' ? 'Permohonan Konsultasi Terkirim!' : 'Consultation Request Sent!'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                {lang === 'id'
                  ? `Pesan Anda telah diteruskan ke ${teacher.name}. Guru pengajar akan membalas via email resmi sekolah dalam 1 hari kerja.`
                  : `Your inquiry has been relayed to ${teacher.name}. You will receive a response within 1 business day.`}
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors"
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Teacher Info Card */}
              <div className="flex items-center gap-3.5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-12 h-12 rounded-full object-cover border border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{teacher.name}</h4>
                  <p className="text-[11px] text-blue-700 font-medium">
                    {lang === 'id' ? teacher.role : teacher.roleEn}
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{teacher.officeHours}</span>
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'id' ? 'Nama Orang Tua / Siswa *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Bpk. Hendra Gunawan"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'id' ? 'Topik Diskusi' : 'Topic of Discussion'}
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                >
                  <option value="Konsultasi Akademik">Konsultasi Nilai & Kemajuan Belajar</option>
                  <option value="Persiapan Olimpiade">Bimbingan Riset / Persiapan Olimpiade Sains</option>
                  <option value="Konseling Universitas">Rekomendasi Jurusan Perguruan Tinggi</option>
                  <option value="Pertanyaan Kurikulum">Pertanyaan Silabus & Kurikulum IB / Merdeka</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'id' ? 'Isi Pesan / Pertanyaan *' : 'Message / Details *'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'id'
                      ? 'Tuliskan pertanyaan atau rencana waktu konsultasi tatap muka...'
                      : 'Please outline your question or preferred meeting slot...'
                  }
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-800 hover:bg-blue-900 text-white rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Kirim Permohonan Konsultasi' : 'Submit Consultation Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
