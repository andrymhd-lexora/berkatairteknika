import React from 'react';
import { BadgeCheck, Check, Sparkles, ArrowRight, ShieldAlert, FileText } from 'lucide-react';
import { PricingPlan, Language } from '../types';
import { PRICING_PLANS } from '../data/productsData';
import { TRANSLATIONS } from '../data/translations';

interface PricingConsultationProps {
  lang: Language;
  onSelectPlanForRFQ: (planName: string) => void;
}

export const PricingConsultation: React.FC<PricingConsultationProps> = ({
  lang,
  onSelectPlanForRFQ
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section 
      id="pricing" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
            <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.pricing.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`rounded-2xl p-6 lg:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-100 lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-[11px] font-bold shadow-md shadow-blue-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{lang === 'id' ? 'Paling Banyak Dipilih' : 'Most Selected Model'}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">
                      {lang === 'id' ? plan.name : plan.nameEn}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-1">
                      {lang === 'id' ? plan.tagline : plan.taglineEn}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-cyan-400 font-semibold">
                    {lang === 'id' ? plan.priceNote : plan.priceNoteEn}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold block">
                      {lang === 'id' ? 'Ruang Lingkup Pekerjaan:' : 'Included Scope of Work:'}
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-light">{lang === 'id' ? feat.text : feat.textEn}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onSelectPlanForRFQ(lang === 'id' ? plan.name : plan.nameEn)}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{lang === 'id' ? plan.ctaText : plan.ctaTextEn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
