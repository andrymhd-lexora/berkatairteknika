import React from 'react';
import { MessageSquareQuote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TestimonialItem, Language } from '../types';
import { TESTIMONIALS_DATA } from '../data/productsData';
import { TRANSLATIONS } from '../data/translations';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden bg-tech-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
            <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.testimonials.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="p-6 lg:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-all shadow-xl backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-900/60">
                    {item.projectType}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-light">
                  "{lang === 'id' ? item.quote : item.quoteEn}"
                </p>
              </div>

              {/* Author & Profile info */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/40"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      {item.author}
                    </h4>
                    <p className="text-xs text-blue-400 font-medium">
                      {lang === 'id' ? item.role : item.roleEn}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {item.company} • {item.location}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
