import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Activity, 
  ArrowUpRight, 
  TrendingDown, 
  CheckCircle2,
  Filter,
  Sparkles
} from 'lucide-react';
import { PortfolioProject, Language } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/productsData';
import { TRANSLATIONS } from '../data/translations';

interface PortfolioShowcaseProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ lang, onOpenRFQ }) => {
  const t = TRANSLATIONS[lang];
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: t.portfolio.all },
    { id: 'wwtp', label: 'IPAL / MBBR' },
    { id: 'chlorination', label: lang === 'id' ? 'Klorinasi & PDAM' : 'Chlorination & WTP' },
    { id: 'scrubber', label: lang === 'id' ? 'Scrubber Gas' : 'Gas Scrubber' },
    { id: 'salt', label: lang === 'id' ? 'Pabrik Garam' : 'Salt Refinery' },
    { id: 'circular', label: lang === 'id' ? 'Ekonomi Sirkular' : 'Circular Compost' }
  ];

  const filtered = PORTFOLIO_PROJECTS.filter((p) => {
    return selectedCat === 'all' || p.category === selectedCat;
  });

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.portfolio.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {t.portfolio.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCat === c.id
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              id={`portfolio-card-${proj.id}`}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 lg:p-8 flex flex-col justify-between space-y-6 hover:border-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 backdrop-blur-sm group"
            >
              <div className="space-y-4">
                {/* Meta info header */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-400 border border-blue-900 font-bold">
                    {lang === 'id' ? proj.clientSector : proj.clientSectorEn}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{proj.year}</span>
                    </span>
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors">
                  {lang === 'id' ? proj.title : proj.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {lang === 'id' ? proj.summary : proj.summaryEn}
                </p>

                {/* Capacity badge */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
                  <span className="text-slate-400 font-medium">{t.portfolio.capacityLabel}</span>
                  <span className="text-cyan-300 font-bold">{proj.capacity}</span>
                </div>

                {/* Measured Performance Results Grid */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">
                    {t.portfolio.beforeAfterLabel}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {proj.results.map((res, idx) => (
                      <div 
                        key={idx} 
                        className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1 text-center"
                      >
                        <span className="text-[10px] text-slate-400 block font-mono truncate">
                          {lang === 'id' ? res.metric : res.metricEn}
                        </span>
                        <div className="flex items-center justify-center gap-1.5 font-mono text-xs">
                          <span className="text-rose-400 line-through text-[11px]">{res.before}</span>
                          <span className="text-slate-600">→</span>
                          <span className="text-emerald-400 font-bold text-sm">{res.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Commissioned & Handed Over</span>
                </span>
                <button
                  onClick={onOpenRFQ}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group/btn"
                >
                  <span>{lang === 'id' ? 'Minta Solusi Serupa' : 'Inquire Similar Project'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
