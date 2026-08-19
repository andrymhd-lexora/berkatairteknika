import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Waves, 
  Wind, 
  FileDown, 
  Gauge, 
  Recycle,
  Layers,
  ChevronRight,
  Activity
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenRFQ: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenRFQ, onOpenCalculator }) => {
  const t = TRANSLATIONS[lang];
  const [activeProcessPill, setActiveProcessPill] = useState<number>(0);
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);

  const processShowcase = [
    {
      id: 0,
      title: lang === 'id' ? 'Pengolahan Air Limbah (MBBR)' : 'Wastewater Treatment (MBBR)',
      badge: 'BOD/COD -94%',
      icon: Waves,
      desc: lang === 'id' 
        ? 'Media biofilm K1/K3/K5 dengan luas permukaan >1200 m²/m³ untuk degradasi polutan organik maksimal pada footprint minimal.' 
        : 'High-density K1/K3/K5 carriers providing >1200 m²/m³ protected surface area for ultra-compact biological digestion.',
      tag: 'Kemenperin & KLHK Compliant'
    },
    {
      id: 1,
      title: lang === 'id' ? 'Sistem Klorinasi All-Vacuum' : 'All-Vacuum Gas Chlorination',
      badge: 'Zero-Pressure Safety',
      icon: ShieldAlert,
      desc: lang === 'id' 
        ? 'Injeksi gas klorin otomatis dengan vacuum regulator terpasang langsung pada tabung, meniadakan risiko kebocoran pipa.' 
        : 'Cylinder-mounted vacuum regulators ensuring fail-safe, zero-positive-pressure gas feeding across plant piping.',
      tag: 'ASME & DOT-3AA480 Standard'
    },
    {
      id: 2,
      title: lang === 'id' ? 'Wet Packed Bed Scrubber' : 'Wet Packed Bed Scrubber',
      badge: 'Efisiensi >99.8%',
      icon: Wind,
      desc: lang === 'id' 
        ? 'Menara netralisasi gas asam, klorin beracun, dan bau busuk dengan sirkulasi kimia otomatis terintegrasi sensor pH/ORP.' 
        : 'Multi-stage acid, chlorine, and odor gas absorbers with automated chemical dosing & zero toxic stack release.',
      tag: 'Permen LHK No. 17/2019'
    },
    {
      id: 3,
      title: lang === 'id' ? 'Ekonomi Sirkular Kompos' : 'Circular Bio-Compost System',
      badge: 'Zero-Waste',
      icon: Recycle,
      desc: lang === 'id' 
        ? 'Mengonversi lumpur IPAL dan biomassa organik menjadi pupuk hayati terstandarisasi dalam 7-14 hari.' 
        : 'Rapid rotary thermophilic fermentation transforming WWTP biological sludge into certified organic bio-fertilizer.',
      tag: 'Kementan Certified Standard'
    }
  ];

  return (
    <section 
      id="home"
      className="relative min-h-[85vh] pt-6 pb-16 lg:pb-24 bg-slate-50 dark:bg-slate-950 overflow-hidden bg-tech-grid transition-colors duration-300"
    >
      {/* Glow background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-400/10 via-indigo-500/10 to-cyan-400/10 dark:from-blue-600/15 dark:via-indigo-600/10 dark:to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2 lg:pt-8">
          
          {/* Left Column: Heading, Value Prop, CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div 
              id="hero-top-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/50 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-main-title"
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.12]"
            >
              <span className="block">{t.hero.titleHighlight1}</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                {t.hero.titleHighlight2}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p 
              id="hero-subtitle"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {t.hero.subtitle}
            </p>

            {/* 4 Pillars Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{lang === 'id' ? 'EPC & O&M IPAL / WTP Industri' : 'Turnkey EPC & O&M for WWTP/WTP'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{lang === 'id' ? 'Inovasi Garam Kemurnian >99.4%' : 'High Purity Salt Refinery (>99.4%)'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{lang === 'id' ? 'Transformasi Lumpur ke Kompos Organik' : 'Biological Sludge to Bio-Compost'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{lang === 'id' ? 'Sistem Klorinasi & Scrubber Gas' : 'Gas Chlorination & Wet Scrubber'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                id="hero-btn-rfq"
                onClick={onOpenRFQ}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-500/40 flex items-center gap-2 cursor-pointer group"
              >
                <span>{t.hero.ctaQuote}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-calc"
                onClick={onOpenCalculator}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-blue-300 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-300 dark:border-blue-900/40 hover:border-blue-600 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Gauge className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'id' ? 'Kalkulator Rekayasa' : 'Engineering Sizing Tool'}</span>
              </button>

              <button
                id="hero-btn-profile"
                onClick={() => setDownloadModalOpen(true)}
                className="px-4 py-3.5 rounded-xl font-medium text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-950/80 hover:bg-slate-200 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>{t.hero.ctaProfile}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Tech Engineering Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div 
              id="hero-interactive-schematic"
              className="relative rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 p-6 shadow-xl dark:shadow-2xl backdrop-blur-xl tech-glow-blue"
            >
              {/* Header inside schematic card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-300">
                    {lang === 'id' ? 'Solusi Proses Terintegrasi' : 'Integrated Process Engineering'}
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60 font-medium">
                  v2026.8
                </span>
              </div>

              {/* Process Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 my-4">
                {processShowcase.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = activeProcessPill === idx;
                  return (
                    <button
                      key={item.id}
                      id={`hero-process-tab-${idx}`}
                      onClick={() => setActiveProcessPill(idx)}
                      className={`p-2.5 rounded-xl text-left transition-all border ${
                        isSelected 
                          ? 'bg-blue-50 dark:bg-blue-950/70 border-blue-600 dark:border-blue-700/60 text-slate-900 dark:text-white shadow-xs font-medium' 
                          : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                          isSelected ? 'bg-blue-600 text-white font-semibold' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                      <p className="font-heading font-semibold text-xs mt-1.5 truncate">
                        {item.title}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Active Process Details Display */}
              {(() => {
                const cur = processShowcase[activeProcessPill];
                const Icon = cur.icon;
                return (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                            {cur.title}
                          </h4>
                          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                            {cur.tag}
                          </span>
                        </div>
                      </div>
                      <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {cur.desc}
                    </p>

                    {/* Live System Parameters Mini Stats */}
                    <div className="pt-2 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                      <div className="bg-slate-900/60 p-1.5 rounded">
                        <span className="text-slate-500 block">Kapasitas</span>
                        <span className="text-blue-300 font-semibold">10-50,000 m³/d</span>
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded">
                        <span className="text-slate-500 block">Kepatuhan</span>
                        <span className="text-emerald-400 font-semibold">100% BML</span>
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded">
                        <span className="text-slate-500 block">Garansi</span>
                        <span className="text-cyan-300 font-semibold">24 Bulan</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Bottom Quick Trigger */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">
                  {lang === 'id' ? '✓ Siap integrasi SCADA & SPARING' : '✓ SCADA & SPARING Ready'}
                </span>
                <a 
                  href="#products" 
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 group"
                >
                  <span>{lang === 'id' ? 'Lihat Semua Alat' : 'View Products'}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Key Performance Stats Bar */}
        <div 
          id="hero-stats-bar"
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white flex items-baseline gap-1">
              <span>180</span>
              <span className="text-blue-500 text-2xl">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.projects}
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white flex items-baseline gap-1">
              <span>450</span>
              <span className="text-cyan-400 text-xl font-mono">MLD</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.waterTreated}
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400 flex items-baseline gap-1">
              <span>99.4</span>
              <span className="text-emerald-500 text-2xl">%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.compliance}
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-indigo-400 flex items-baseline gap-1">
              <span>18</span>
              <span className="text-indigo-500 text-2xl">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.experience}
            </p>
          </div>
        </div>

        {/* Industrial Certifications Trust Bar */}
        <div 
          id="hero-trust-bar"
          className="mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 bg-slate-900/40 rounded-xl p-4 border border-slate-800/60"
        >
          <span className="font-semibold text-slate-300">
            {t.hero.trustBanner}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-[11px] text-slate-300">
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-blue-400 font-bold">
              ISO 9001:2015
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-emerald-400 font-bold">
              ISO 14001:2015
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400 font-bold">
              SNI Standard
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-indigo-400 font-bold">
              KLHK Registered
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-amber-400 font-bold">
              The Chlorine Institute USA
            </span>
          </div>
        </div>

      </div>

      {/* Company Profile Download Modal Simulation */}
      {downloadModalOpen && (
        <div 
          id="download-profile-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <FileDown className="w-5 h-5 text-blue-400" />
                <h3 className="font-heading font-bold text-white text-base">
                  {lang === 'id' ? 'Unduh Company Profile 2026' : 'Download Company Profile 2026'}
                </h3>
              </div>
              <button 
                onClick={() => setDownloadModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'id'
                ? 'Dokumen komprehensif 36-halaman mencakup portofolio EPC, spesifikasi teknis MBBR, Tabung Klorin, Sistem Scrubber, fasilitas Salt Refinery, dan sertifikat legalitas PT Berkat Air Teknika.'
                : 'A comprehensive 36-page document covering turnkey EPC track records, technical datasheets for MBBR, Chlorine Cylinders, Scrubbers, Salt Refinery, and corporate accreditations.'}
            </p>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>File:</span>
                <span className="text-slate-200">BAT_Company_Profile_2026.pdf</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Ukuran:</span>
                <span className="text-slate-200">14.8 MB (High-Res)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Bahasa:</span>
                <span className="text-blue-400">Bilingual (ID & EN)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  alert(lang === 'id' ? 'Mengunduh Company Profile Berkat Air Teknika...' : 'Downloading Company Profile...');
                  setDownloadModalOpen(false);
                }}
                className="flex-1 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>{lang === 'id' ? 'Unduh Sekarang (PDF)' : 'Download Now (PDF)'}</span>
              </button>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                {lang === 'id' ? 'Batal' : 'Cancel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
