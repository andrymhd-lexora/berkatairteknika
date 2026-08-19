import React, { useState } from 'react';
import { 
  Droplets, 
  Sparkles, 
  Recycle, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Compass, 
  TrendingUp,
  Layers,
  Award,
  Users,
  Factory
} from 'lucide-react';
import { Language, PillarItem } from '../types';
import { PILLARS_DATA } from '../data/productsData';
import { TRANSLATIONS } from '../data/translations';

interface AboutUsProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ lang, onOpenRFQ }) => {
  const t = TRANSLATIONS[lang];
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS_DATA[0].id);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Droplets': return Droplets;
      case 'Sparkles': return Sparkles;
      case 'Recycle': return Recycle;
      case 'Cpu': return Cpu;
      default: return Layers;
    }
  };

  const selectedPillar = PILLARS_DATA.find(p => p.id === selectedPillarId) || PILLARS_DATA[0];
  const SelectedIcon = getPillarIcon(selectedPillar.iconName);

  const milestones = [
    {
      year: '2008',
      title: lang === 'id' ? 'Pendirian PT Berkat Air Teknika' : 'Inception of Berkat Air Teknika',
      desc: lang === 'id' 
        ? 'Memulai fokus pada pengadaan tabung klorin dan peralatan WTP PDAM regional di Jawa Timur.' 
        : 'Started providing chlorine ton containers and waterworks equipment for municipal WTPs in East Java.'
    },
    {
      year: '2014',
      title: lang === 'id' ? 'Ekspansi Bioteknologi MBBR & Scrubber' : 'MBBR Bio-Carrier & Scrubber Expansion',
      desc: lang === 'id' 
        ? 'Mengembangkan manufaktur media MBBR virgin HDPE dan menara wet packed bed scrubber industri.' 
        : 'Developed custom virgin HDPE MBBR bio-carriers and industrial wet packed bed scrubber towers.'
    },
    {
      year: '2020',
      title: lang === 'id' ? 'Pabrik Salt Refinery & Pemurnian' : 'Salt Refinery & Crystallizer Division',
      desc: lang === 'id' 
        ? 'Membangun instalasi pemurnian garam berteknologi hydro-cyclone pertama di Jawa Timur dengan NaCl > 99.4%.' 
        : 'Commissioned first advanced hydro-cyclone salt refinery yielding industrial NaCl > 99.4%.'
    },
    {
      year: '2026',
      title: lang === 'id' ? 'Ekonomi Sirkular & SPARING Terintegrasi' : 'Circular Economy & IoT Telemetry Hub',
      desc: lang === 'id' 
        ? 'Pelopor pengolahan lumpur IPAL ke kompos organik bersertifikat dan sistem integrasi telemetri SPARING KLHK.' 
        : 'Pioneered closed-loop biological sludge composting and real-time cloud SPARING environmental telemetry.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.about.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* 4 Pillars Interactive Tab Selector Grid */}
        <div className="mt-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
            <span>{lang === 'id' ? '4 PILAR UTAMA BISNIS KAMI:' : 'OUR 4 CORE BUSINESS PILLARS:'}</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          {/* Pillar Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PILLARS_DATA.map((pillar, index) => {
              const Icon = getPillarIcon(pillar.iconName);
              const isSelected = selectedPillarId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  id={`pillar-tab-${pillar.id}`}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-4 rounded-xl text-left transition-all border relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Top indicator bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm text-white mt-3 leading-snug line-clamp-2">
                    {lang === 'id' ? pillar.title : pillar.titleEn}
                  </h3>

                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    {lang === 'id' ? pillar.subtitle : pillar.subtitleEn}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detailed Showcase Card */}
          <div 
            id="active-pillar-detail-card"
            className="mt-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 lg:p-8 backdrop-blur-xl tech-glow-indigo shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details (8 Cols) */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                    <SelectedIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                      {lang === 'id' ? selectedPillar.subtitle : selectedPillar.subtitleEn}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      {lang === 'id' ? selectedPillar.title : selectedPillar.titleEn}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {lang === 'id' ? selectedPillar.description : selectedPillar.descriptionEn}
                </p>

                {/* 3 Key Sub-points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {selectedPillar.keyPoints.map((point, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>0{idx + 1}</span>
                      </div>
                      <h4 className="font-heading font-bold text-xs text-white">
                        {lang === 'id' ? point.title : point.titleEn}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {lang === 'id' ? point.text : point.textEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Metric & Quick CTA (4 Cols) */}
              <div className="lg:col-span-4 bg-slate-950/90 rounded-xl p-6 border border-slate-800 flex flex-col justify-between space-y-6 text-center">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    {lang === 'id' ? selectedPillar.stats.label : selectedPillar.stats.labelEn}
                  </span>
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                    {selectedPillar.stats.value}
                  </div>
                  <p className="text-xs text-slate-500">
                    {lang === 'id' ? 'Berdasarkan audit kepatuhan & hasil pengujian lab' : 'Audited & validated via accredited lab testing'}
                  </p>
                </div>

                <button
                  onClick={onOpenRFQ}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  <span>{lang === 'id' ? 'Konsultasikan Pilar Ini' : 'Inquire About This Pillar'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Circular Economy Closed-Loop Diagram Section */}
        <div 
          id="circular-economy-diagram"
          className="mt-16 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-6 lg:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Recycle className="w-4 h-4" />
                <span>{t.about.circularDiagramTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.about.circularDiagramSubtitle}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 font-semibold w-fit">
              Zero Waste to Landfill Model
            </span>
          </div>

          {/* 4 Connected Flow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 relative space-y-2 group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 font-mono font-bold text-xs flex items-center justify-center border border-blue-800/60">
                1
              </div>
              <h4 className="font-heading font-bold text-sm text-white">
                {t.about.steps.step1}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.steps.step1Desc}
              </p>
              <div className="text-[10px] font-mono text-cyan-400 pt-1">
                {lang === 'id' ? 'Input: COD Beban Tinggi & Sludge Non-B3' : 'Input: High COD & Organic Sludge'}
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 relative space-y-2 group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center border border-indigo-800/60">
                2
              </div>
              <h4 className="font-heading font-bold text-sm text-white">
                {t.about.steps.step2}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.steps.step2Desc}
              </p>
              <div className="text-[10px] font-mono text-cyan-400 pt-1">
                {lang === 'id' ? 'Proses: Media MBBR + Blower Aerasi' : 'Process: Fluidized MBBR + Blower'}
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 relative space-y-2 group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center border border-emerald-800/60">
                3
              </div>
              <h4 className="font-heading font-bold text-sm text-white">
                {t.about.steps.step3}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.steps.step3Desc}
              </p>
              <div className="text-[10px] font-mono text-cyan-400 pt-1">
                {lang === 'id' ? 'Inovasi: Bioreaktor Kompos 7-14 Hari' : 'Innovation: 7-14 Day In-Vessel Fermenter'}
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 relative space-y-2 group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-teal-950 text-teal-400 font-mono font-bold text-xs flex items-center justify-center border border-teal-800/60">
                4
              </div>
              <h4 className="font-heading font-bold text-sm text-white">
                {t.about.steps.step4}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.steps.step4Desc}
              </p>
              <div className="text-[10px] font-mono text-emerald-400 pt-1">
                {lang === 'id' ? 'Hasil: Pupuk Hayati + Air Daur Ulang' : 'Output: Organic Fertilizer + Recycled Water'}
              </div>
            </div>

          </div>
        </div>

        {/* Vision, Mission & Milestones Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-start">
          
          {/* Vision & Mission Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Vision */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-blue-400">
                <Target className="w-6 h-6" />
                <h3 className="font-heading font-bold text-lg text-white">
                  {t.about.visionTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.about.visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-indigo-400">
                <Compass className="w-6 h-6" />
                <h3 className="font-heading font-bold text-lg text-white">
                  {t.about.missionTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.about.missionText}
              </p>
            </div>

            {/* Certified Engineers Badge */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">
                  {lang === 'id' ? 'Tim Insinyur Ahli Tersertifikasi' : 'Certified Process & Safety Engineers'}
                </h4>
                <p className="text-xs text-slate-400">
                  {lang === 'id' ? 'Sertifikasi Ahli K3 Kimia, PPA, & POP/POM KLHK' : 'Certified Chemical Safety, WWTP & Environmental Operators'}
                </p>
              </div>
            </div>

          </div>

          {/* Milestones History Timeline (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <h3 className="font-heading font-bold text-lg text-white">
                  {lang === 'id' ? 'Jejak Rekayasa & Inovasi' : 'Milestones of Engineering Innovation'}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">2008 — 2026</span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-2">
                  <div className="w-7 h-7 rounded-full bg-slate-950 border-2 border-blue-500 text-blue-400 flex items-center justify-center shrink-0 z-10 text-[10px] font-mono font-bold shadow-md shadow-blue-500/20">
                    ●
                  </div>
                  <div className="space-y-1 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-sm text-white">
                        {m.title}
                      </h4>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-900/60 font-semibold">
                        {m.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
