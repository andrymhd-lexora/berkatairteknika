import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Upload, 
  Building, 
  Clock, 
  ShieldAlert, 
  FileText,
  Sparkles,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
  prefilledProduct?: string;
  prefilledCalcSummary?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledProduct,
  prefilledCalcSummary
}) => {
  const t = TRANSLATIONS[lang];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [sector, setSector] = useState('fnb');
  const [serviceType, setServiceType] = useState(prefilledProduct || 'mbbr');
  const [budget, setBudget] = useState('100m-500m');
  const [message, setMessage] = useState(prefilledCalcSummary || '');
  const [fileName, setFileName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLocationTab, setActiveLocationTab] = useState<'jakarta' | 'surabaya' | 'regional'>('jakarta');

  // Update when props change
  React.useEffect(() => {
    if (prefilledProduct) {
      setServiceType(prefilledProduct);
    }
  }, [prefilledProduct]);

  React.useEffect(() => {
    if (prefilledCalcSummary) {
      setMessage((prev) => prev ? `${prev}\n\n${prefilledCalcSummary}` : prefilledCalcSummary);
    }
  }, [prefilledCalcSummary]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore
      }
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden bg-tech-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Grid: Form (Left 7 Cols) & Office Info / Emergency (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-start">
          
          {/* RFQ Form Box (7 Cols) */}
          <div 
            id="rfq-form-container"
            className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl tech-glow-blue"
          >
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.form.successDesc}
                  </p>
                </div>

                {/* Submitted parameters summary */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-400">
                    <span>Nama:</span>
                    <span className="text-white font-semibold">{name || 'Customer'}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Perusahaan:</span>
                    <span className="text-white font-semibold">{company || '-'}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Layanan:</span>
                    <span className="text-cyan-400 font-semibold">{serviceType}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                    setFileName('');
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                >
                  {lang === 'id' ? 'Kirim Permintaan Baru' : 'Submit Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    {lang === 'id' ? 'Formulir Permintaan Penawaran (RFQ)' : 'Request for Quotation Form'}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {lang === 'id' ? 'Respon 1x24 Jam' : '24h Response SLA'}
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      {t.contact.form.name} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ir. Hendro Wicaksono"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      {t.contact.form.email} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. hendro@company.co.id"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      {t.contact.form.phone} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +62 812-3456-7890"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      {t.contact.form.company} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. PT Indofood Manufacturing"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Sector & Service Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      {t.contact.form.sector}
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="fnb">Makanan & Minuman (F&B)</option>
                      <option value="pdam">PDAM / Utilitas Air Minum</option>
                      <option value="chemical">Petrokimia & Kimia</option>
                      <option value="pks">Pabrik Kelapa Sawit (PKS)</option>
                      <option value="textile">Tekstil & Pencelupan</option>
                      <option value="salt">Garam & Industri Agro</option>
                      <option value="other">Kawasan Industri / Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      {t.contact.form.serviceType}
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="MBBR System">MBBR (Moving Bed Biofilm Reactor)</option>
                      <option value="Tabung Klorin">Tabung Klorin & Chlorine Ton Container</option>
                      <option value="Fan Blower">Industrial Roots & Turbo Aeration Blower</option>
                      <option value="Pompa Sirkulasi">Pompa Sirkulasi & Chemical Sludge Pump</option>
                      <option value="Sistem Klorinasi">Sistem Klorinasi (Vacuum Regulator, Ejector)</option>
                      <option value="Sistem Scrubber">Sistem Wet Packed Bed Scrubber</option>
                      <option value="Salt Refinery">Inovasi Pengolahan Pabrik Garam</option>
                      <option value="Circular Compost">Ekonomi Sirkular Konversi Lumpur ke Kompos</option>
                      <option value="EPC Turnkey">Rancang Bangun EPC IPAL Lengkap</option>
                    </select>
                  </div>
                </div>

                {/* Message / Parameters */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'id' 
                      ? 'Jelaskan parameter air limbah (Debit m³/hari, COD/BOD), kondisi eksisting, atau target penyelesaian proyek...' 
                      : 'Describe effluent parameters (Flow rate m³/day, COD/BOD), existing conditions, or target timeline...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Attachment Upload Simulator */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.contact.form.attachment}
                  </label>
                  <div className="relative border border-dashed border-slate-800 hover:border-blue-500 rounded-xl p-3 bg-slate-950/60 text-center transition-colors">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                      <Upload className="w-4 h-4 text-blue-400" />
                      <span>{fileName || (lang === 'id' ? 'Klik atau drag file PDF, DWG, XLSX (Maks. 25MB)' : 'Click or drag PDF, DWG, XLSX files (Max 25MB)')}</span>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.contact.form.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.form.submit}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Office Information & Emergency Hubs (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Emergency Hotline Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 border border-blue-800/60 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping inline-block" />
                <span>{lang === 'id' ? 'TANGGAP DARURAT 24 JAM' : '24/7 EMERGENCY RESPONSE'}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {lang === 'id' ? 'Kebocoran Gas Klorin atau Kerusakan IPAL Akut?' : 'Chlorine Gas Incident or WWTP Failure?'}
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {lang === 'id'
                  ? 'Tim teknis tanggap darurat dan suku cadang vacuum regulator / scrubber standby siaga diberangkatkan segera.'
                  : 'Emergency technicians and standby vacuum regulator / scrubber spare parts mobilized immediately.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="tel:+6289627209809"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+62 896-2720-9809</span>
                </a>
                <a
                  href="https://wa.me/6289627209809?text=Halo%20Berkat%20Air%20Teknika,%20saya%20memerlukan%20bantuan%20teknis%20segera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp CS 24/7 (6289627209809)</span>
                </a>
              </div>
            </div>

            {/* Office Locations Interactive Selector */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'id' ? 'Jaringan Fasilitas & Lokasi' : 'Offices & Fabrication Hubs'}</span>
                </h3>
              </div>

              {/* Location tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveLocationTab('jakarta')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    activeLocationTab === 'jakarta'
                      ? 'bg-blue-950 border-blue-600 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Jakarta HQ
                </button>
                <button
                  onClick={() => setActiveLocationTab('surabaya')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    activeLocationTab === 'surabaya'
                      ? 'bg-blue-950 border-blue-600 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Surabaya Workshop
                </button>
                <button
                  onClick={() => setActiveLocationTab('regional')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    activeLocationTab === 'regional'
                      ? 'bg-blue-950 border-blue-600 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Regional Hubs
                </button>
              </div>

              {/* Active location details */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2 font-mono">
                {activeLocationTab === 'jakarta' && (
                  <div className="space-y-1.5">
                    <span className="text-blue-400 font-bold block">{t.contact.info.hqTitle}</span>
                    <p className="text-slate-300 font-sans">{t.contact.info.hqAddress}</p>
                    <div className="text-slate-400 pt-1">CS 24/7: 6289627209809 • Email: sales@berkatairteknika.my.id</div>
                  </div>
                )}

                {activeLocationTab === 'surabaya' && (
                  <div className="space-y-1.5">
                    <span className="text-cyan-400 font-bold block">{t.contact.info.workshopTitle}</span>
                    <p className="text-slate-300 font-sans">{t.contact.info.workshopAddress}</p>
                    <div className="text-slate-400 pt-1">Tel: (031) 8765-4321 • Fabrikasi & Uji Hidrotest</div>
                  </div>
                )}

                {activeLocationTab === 'regional' && (
                  <div className="space-y-1.5">
                    <span className="text-emerald-400 font-bold block">{t.contact.info.regionalTitle}</span>
                    <p className="text-slate-300 font-sans">{t.contact.info.regionalList}</p>
                    <div className="text-slate-400 pt-1">Layanan Teknis Lapangan & Logistik Tabung Klorin Cepat</div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{t.contact.info.hours}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
