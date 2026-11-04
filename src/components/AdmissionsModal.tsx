import React, { useState } from 'react';
import { Language } from '../types';
import { X, CheckCircle2, ShieldCheck, Download, FileText, Send } from 'lucide-react';

interface AdmissionsModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({ lang, isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [regCode, setRegCode] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 10',
    track: 'Science, Tech & Pre-Med (MIPA Lanjut)',
    previousSchool: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'SKH-' + Math.floor(100000 + Math.random() * 900000);
    setRegCode(randomCode);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1b3a6b] text-white border-b border-blue-900">
          <div>
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide">
              {lang === 'id' ? 'PENDAFTARAN SISWA BARU (PPDB) 2026/2027' : 'ONLINE ADMISSIONS 2026/2027'}
            </h3>
            <p className="text-xs text-blue-200">
              {lang === 'id' ? 'Sekolah Senior High School · Gelombang Utama' : 'Sekolah Senior High School · Priority Intake'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close admissions modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {lang === 'id' ? 'Pendaftaran Berhasil Diterima' : 'Application Received'}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">
                  {formData.studentName}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'id' ? 'Nomor Registrasi Resmi Anda:' : 'Official Registration Code:'}
                </p>
                <div className="inline-block px-4 py-2 bg-slate-100 border border-slate-300 rounded font-mono text-lg font-bold text-blue-900 select-all">
                  {regCode}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800">
                  {lang === 'id' ? 'Langkah Selanjutnya:' : 'Next Steps:'}
                </p>
                <p>
                  1. {lang === 'id'
                    ? 'Petunjuk tes potensi akademik dan jadwal wawancara telah dikirimkan ke email:'
                    : 'Aptitude assessment link and interview schedule sent to:'}{' '}
                  <span className="font-semibold text-slate-800">{formData.email}</span>
                </p>
                <p>
                  2. {lang === 'id'
                    ? 'Petugas Admissions akan mengonfirmasi via WhatsApp ke no:'
                    : 'Counselor will contact your phone at:'}{' '}
                  <span className="font-semibold text-slate-800">{formData.phone}</span>
                </p>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-blue-800 hover:bg-blue-900 text-white rounded transition-colors"
                >
                  {lang === 'id' ? 'Selesai' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900">
                <p className="font-semibold">
                  {lang === 'id' ? 'Informasi Penerimaan Gelombang 1:' : 'Intake Phase 1 Information:'}
                </p>
                <p className="mt-0.5 text-blue-800">
                  {lang === 'id'
                    ? 'Tersedia potongan uang pangkal 20% dan beasiswa prestasi akademik untuk 50 pendaftar pertama.'
                    : 'Early bird academic merit tuition grant available for early cohort applicants.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Nama Lengkap Calon Siswa *' : 'Student Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Raditya Pratama"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Nama Orang Tua / Wali *' : 'Parent / Guardian Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Ir. Bambang Pratama"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Email Aktif *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@gmail.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'No. WhatsApp *' : 'WhatsApp Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 812-xxxx-xxxx"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Jenjang Masuk' : 'Applying Grade'}
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  >
                    <option value="Grade 10">Kelas 10 (SMA X Baru)</option>
                    <option value="Grade 11">Kelas 11 (Pindahan / Transfer)</option>
                    <option value="Grade 12">Kelas 12 (Pindahan Khusus)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Peminatan / Jurusan' : 'Academic Stream'}
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  >
                    <option value="Science, Tech & Pre-Med">Sains & Rekayasa Teknologi (MIPA)</option>
                    <option value="Humanities & International Law">Sosial, Ekonomi & Diplomasi (IPS)</option>
                    <option value="IB Diploma Programme">International Baccalaureate (IB DP)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'id' ? 'Asal Sekolah SMP / MTs' : 'Previous Junior High School'}
                </label>
                <input
                  type="text"
                  value={formData.previousSchool}
                  onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                  placeholder="e.g. SMP Negeri 1 Jakarta / SMP Labschool"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'id' ? 'Kirim Formulir Pendaftaran PPDB' : 'Submit Application Form'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
