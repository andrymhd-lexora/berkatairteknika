import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'image' | 'hybrid';
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'hybrid',
}) => {
  // Dimension mappings
  const imgSizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const iconBoxMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textMap = {
    sm: { main: 'text-xs sm:text-sm', sub: 'text-[8px] sm:text-[9px]' },
    md: { main: 'text-sm sm:text-base font-extrabold', sub: 'text-[9px] sm:text-[10px]' },
    lg: { main: 'text-lg sm:text-xl font-black', sub: 'text-[11px] sm:text-xs' },
    xl: { main: 'text-2xl sm:text-3xl font-black', sub: 'text-xs sm:text-sm' },
  };

  // Pure Image Version (Direct 1:1 match with user's uploaded reference picture)
  if (variant === 'image') {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/logo.png"
          alt="Berkat Air Teknika - Solusi Air dan Teknologi"
          className={`${imgSizeMap[size]} w-auto object-contain rounded-md shadow-xs`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Hybrid Version with Logo Emblem Image + Styled Typography
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Emblem Icon / Logo Badge */}
      <div className={`${iconBoxMap[size]} shrink-0 rounded-xl bg-white dark:bg-slate-900 p-0.5 shadow-sm border border-slate-200/60 dark:border-slate-800 flex items-center justify-center overflow-hidden`}>
        <img
          src="/logo.png"
          alt="Berkat Air Teknika Emblem"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className={`font-heading ${textMap[size].main} tracking-tight leading-tight flex items-center gap-1`}>
            <span className="text-blue-950 dark:text-white">Berkat Air</span>
            <span className="text-emerald-600 dark:text-emerald-400">Teknika</span>
          </div>
          <span className={`font-mono font-bold uppercase tracking-wider ${textMap[size].sub} text-slate-500 dark:text-slate-400 leading-none mt-0.5`}>
            Solusi Air dan Teknologi
          </span>
        </div>
      )}
    </div>
  );
};
