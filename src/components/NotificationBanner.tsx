import React, { useState } from 'react';
import { BellRing, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface NotificationBannerProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({ lang, onOpenRFQ }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside 
      id="top-push-notification-banner"
      aria-label="Pengumuman Penting"
      className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs py-2 px-4 relative z-40 shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="p-1 rounded-md bg-white/20 text-white shrink-0">
            <BellRing className="w-3.5 h-3.5" />
          </span>
          <span className="font-medium text-slate-100">
            {lang === 'id'
              ? 'Pemberitahuan Audit Kepatuhan: Regulasi Baku Mutu Air Limbah KLHK 2026. Konsultasikan kesiapan IPAL & SPARING Anda bersama tim kami.'
              : 'Regulatory Compliance Bulletin: 2026 Environmental Effluent Standards. Schedule an MBBR & SPARING readiness audit today.'}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRFQ}
            className="text-[11px] font-bold text-sky-200 hover:text-white underline underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{lang === 'id' ? 'Konsultasi Sekarang' : 'Consult With Us'}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/80 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
