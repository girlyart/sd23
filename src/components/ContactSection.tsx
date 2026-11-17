import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Language } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Building2
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    category: 'ppdb',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        contactInfo: '',
        category: 'ppdb',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
            {lang === 'id' ? 'Layanan Informasi Terpadu' : 'Get in Touch'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            {lang === 'id' ? 'KONTAK & INFORMASI SEKOLAH' : 'CONTACT & LOCATION'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'id'
              ? `Silakan hubungi tim administrasi dan kehumasan ${SCHOOL_INFO.name} untuk informasi PPDB, jadwal kunjungan, kemitraan, atau pertanyaan akademik.`
              : `Reach out to the ${SCHOOL_INFO.name} administrative and admissions office for inquiries, campus visits, or general assistance.`}
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-5">
            {/* Main School Card */}
            <div className="bg-[#edf4fd]/70 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 pb-4 border-b border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100/80 text-blue-800 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{SCHOOL_INFO.fullName}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{SCHOOL_INFO.accreditation.split('·')[0]}</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wide">
                      {lang === 'id' ? 'Alamat Kampus' : 'Campus Address'}
                    </span>
                    <span className="text-xs leading-relaxed text-slate-600 mt-0.5 block">
                      {SCHOOL_INFO.address}
                    </span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        SCHOOL_INFO.name + ' ' + SCHOOL_INFO.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 hover:underline"
                    >
                      <span>{lang === 'id' ? 'Buka di Google Maps' : 'View on Google Maps'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wide">
                      {lang === 'id' ? 'Telepon Kantor & WhatsApp' : 'Phone & WhatsApp'}
                    </span>
                    <div className="flex flex-col gap-1 mt-0.5 text-xs">
                      <a
                        href={`tel:${SCHOOL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-slate-700 hover:text-blue-600 font-medium"
                      >
                        {SCHOOL_INFO.phone} (Kantor Pusat)
                      </a>
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20SMP%20Negeri%20Jember,%20saya%20ingin%20bertanya%20informasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
                      >
                        <span>WhatsApp Layanan Humas: +62 812-3456-7890</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wide">
                      {lang === 'id' ? 'Email Resmi' : 'Official Email'}
                    </span>
                    <a
                      href={`mailto:${SCHOOL_INFO.email}`}
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline block mt-0.5 font-medium"
                    >
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wide">
                      {lang === 'id' ? 'Jam Pelayanan Tata Usaha' : 'Office Working Hours'}
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      Senin – Jumat: 07:00 – 16:30 WIB
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Sabtu, Minggu & Libur Nasional: Tutup
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-gradient-to-br from-blue-900 to-[#142952] text-white p-5 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-white">
                  {lang === 'id' ? 'Respon Cepat via WhatsApp' : 'Quick WhatsApp Support'}
                </h4>
                <p className="text-xs text-blue-200 mt-0.5">
                  {lang === 'id' ? 'Hubungi staf informasi kami langsung.' : 'Chat with admissions team directly.'}
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20SMP%20Negeri%20Jember,%20mohon%20info%20terbaru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Card: Interactive Inquiry Form (Blue Container with White Text) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#183668] to-[#102447] text-white p-6 sm:p-8 rounded-xl border border-blue-400/30 shadow-lg">
            <div className="flex items-center gap-2.5 mb-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif-title uppercase tracking-wide">
                {lang === 'id' ? 'Formulir Kirim Pesan' : 'Send an Inquiry'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-blue-100/90 mb-6">
              {lang === 'id'
                ? 'Tuliskan pesan atau pertanyaan Anda di bawah ini. Tim kami akan merespons secepat mungkin.'
                : 'Fill out this form and our support desk will respond to your inquiry shortly.'}
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-white/10 border border-emerald-400/40 rounded-xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-base text-white">
                  {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto">
                  {lang === 'id'
                    ? 'Terima kasih atas pesan Anda. Tim administrasi kami akan segera menghubungi Anda kembali.'
                    : 'Thank you for contacting us. Our staff will respond via your provided contact details.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-900 rounded-lg text-xs font-bold transition-colors shadow"
                >
                  {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wide mb-1.5">
                      {lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'id' ? 'Contoh: Budi Pratama' : 'e.g. John Doe'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white/10 text-white placeholder:text-blue-200/60 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wide mb-1.5">
                      {lang === 'id' ? 'No. WhatsApp / Email *' : 'WhatsApp / Email *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'id' ? '0812xxxx atau email@anda.com' : 'Phone or email address'}
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white/10 text-white placeholder:text-blue-200/60 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wide mb-1.5">
                    {lang === 'id' ? 'Kategori Pertanyaan' : 'Inquiry Category'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#122b56] text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                  >
                    <option value="ppdb" className="bg-[#102447] text-white">
                      {lang === 'id' ? 'Pendaftaran Siswa Baru (PPDB 2026/2027)' : 'Admissions & Enrollment'}
                    </option>
                    <option value="tour" className="bg-[#102447] text-white">
                      {lang === 'id' ? 'Jadwal Kunjungan & Tur Kampus' : 'Campus Tour & Visit'}
                    </option>
                    <option value="academic" className="bg-[#102447] text-white">
                      {lang === 'id' ? 'Kurikulum & Program Unggulan' : 'Curriculum & Programs'}
                    </option>
                    <option value="admin" className="bg-[#102447] text-white">
                      {lang === 'id' ? 'Administrasi, Nilai & Surat Keterangan' : 'Administrative Documents'}
                    </option>
                    <option value="other" className="bg-[#102447] text-white">
                      {lang === 'id' ? 'Lain-lain / Kemitraan' : 'General / Partnership'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wide mb-1.5">
                    {lang === 'id' ? 'Isi Pesan / Pertanyaan *' : 'Message / Details *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      lang === 'id'
                        ? 'Tuliskan rincian pertanyaan Anda dengan jelas...'
                        : 'Describe your inquiry in detail...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white/10 text-white placeholder:text-blue-200/60 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-blue-50 text-[#142952] font-black text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-blue-700" />
                  <span>
                    {isSubmitting
                      ? lang === 'id'
                        ? 'MENGIRIM PESAN...'
                        : 'SENDING...'
                      : lang === 'id'
                      ? 'KIRIM PESAN'
                      : 'SUBMIT INQUIRY'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
