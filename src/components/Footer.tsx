import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  ExternalLink,
  Layers,
  Sparkles,
  Recycle,
  Heart
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './Logo';

interface FooterProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenRFQ }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Top emergency hotline bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping inline-block" />
            <span className="font-mono text-slate-300">
              {t.footer.emergencyNote}
            </span>
          </div>
          <a
            href="https://wa.me/6289627209809?text=Halo%20Berkat%20Air%20Teknika,%20saya%20memerlukan%20bantuan%20darurat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            +62 896-2720-9809 (CS Siaga 24/7)
          </a>
        </div>
      </div>

      {/* Main Footer Links Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="hybrid" />

            <p className="text-slate-300 leading-relaxed font-light pr-4">
              {t.footer.tagline}
            </p>

            <div className="space-y-2 pt-2 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Bungur Office Jl. Bungur 1, Kebayoran Lama, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:sales@berkatairteknika.my.id" className="font-mono hover:text-cyan-300 transition-colors">
                  sales@berkatairteknika.my.id
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/6289627209809" target="_blank" rel="noopener noreferrer" className="font-mono hover:text-emerald-300 transition-colors">
                  CS 24/7: +62 896-2720-9809
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: 4 Core Pillars */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {lang === 'id' ? '4 Pilar Bisnis' : '4 Core Pillars'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {lang === 'id' ? 'Solusi Pengolahan Limbah & Lingkungan' : 'Wastewater & Environmental Engineering'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {lang === 'id' ? 'Inovasi Pengolahan Garam' : 'High-Purity Salt Refinery'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {lang === 'id' ? 'Penerapan Ekonomi Sirkular' : 'Circular Bio-Composting'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {lang === 'id' ? 'Teknologi Berkelanjutan & SPARING' : 'Green Tech & IoT Telemetry'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Equipments & Systems */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.solutions}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  MBBR (Moving Bed Biofilm Reactor)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Tabung Klorin (Ton Container 1000kg)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Industrial Roots & Turbo Blower
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Pompa Sirkulasi & Chemical Sludge
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Sistem Klorinasi (Vacuum Regulator, Ejector)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Sistem Wet Packed Bed Scrubber
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Quick Navigation & Tools */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#calculator" className="hover:text-blue-400 transition-colors">
                  {lang === 'id' ? 'Kalkulator Rekayasa Air' : 'Engineering Sizing Tool'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors">
                  {t.nav.blog}
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenRFQ} 
                  className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                >
                  {t.nav.requestQuote}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Accreditations Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>{t.footer.complianceTitle}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-300">ISO 9001:2015</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-300">ISO 14001:2015</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">ASME Sec. VIII</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-300">The Chlorine Institute</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">KLHK SPARING Certified</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2008 - 2026 PT Berkat Air Teknika. {t.footer.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
