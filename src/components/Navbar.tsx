import React, { useState, useEffect, useRef } from 'react';
import { 
  Droplets, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  Sun, 
  Moon, 
  FileText,
  ChevronDown,
  ChevronRight,
  Package,
  CreditCard,
  Calculator,
  Building2,
  Briefcase,
  BookOpen,
  Mail,
  Home
} from 'lucide-react';
import { Language, ThemeMode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  onOpenRFQ: () => void;
  currentPage: 'home' | 'products' | 'pricing' | 'calculator';
  onNavigate: (target: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  setTheme,
  onOpenRFQ,
  currentPage,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'about' | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<'products' | 'about' | null>('products');

  const navRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section spy when on home page
      if (currentPage === 'home') {
        const sections = ['home', 'about', 'calculator', 'portfolio', 'blog', 'contact'];
        const scrollPos = window.scrollY + 200;
        
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Check active states
  const isProductsActive = currentPage === 'products' || currentPage === 'pricing' || currentPage === 'calculator';
  const isAboutActive = currentPage === 'home' && ['about', 'portfolio', 'blog', 'contact'].includes(activeSection);

  const productDropdownItems = [
    {
      id: 'products',
      label: lang === 'id' ? 'Layanan' : 'Products & Services',
      subLabel: lang === 'id' ? 'Katalog Teknologi IPAL, Klorinasi & Scrubber' : 'Wastewater, Chlorination & Scrubber Catalog',
      icon: Package
    },
    {
      id: 'pricing',
      label: lang === 'id' ? 'Layanan & Biaya' : 'Services & Pricing',
      subLabel: lang === 'id' ? 'Skema Kontrak EPC, O&M, & Konsultasi' : 'EPC, O&M & Consultation Contract Plans',
      icon: CreditCard
    },
    {
      id: 'calculator',
      label: lang === 'id' ? 'Kalkulator Rekayasa' : 'Engineering Calculator',
      subLabel: lang === 'id' ? 'Simulasi Sizing IPAL & Klorinasi' : 'WWTP Sizing & Chlorine Dosing Tool',
      icon: Calculator
    }
  ];

  const aboutDropdownItems = [
    {
      id: 'about',
      label: lang === 'id' ? 'Tentang Kami' : 'About Us',
      subLabel: lang === 'id' ? 'Profil Perusahaan & 4 Pilar Bisnis' : 'Company Profile & 4 Business Pillars',
      icon: Building2
    },
    {
      id: 'portfolio',
      label: lang === 'id' ? 'Portofolio' : 'Portfolio',
      subLabel: lang === 'id' ? 'Studi Kasus & Rekam Jejak Lapangan' : 'Project Case Studies & Field Metrics',
      icon: Briefcase
    },
    {
      id: 'blog',
      label: lang === 'id' ? 'Artikel & Wawasan' : 'Articles & Insights',
      subLabel: lang === 'id' ? 'Panduan Teknis & Regulasi KLHK' : 'Technical Engineering & Compliance Guides',
      icon: BookOpen
    },
    {
      id: 'contact',
      label: lang === 'id' ? 'Kontak & RFQ' : 'Contact & RFQ',
      subLabel: lang === 'id' ? 'Formulir Penawaran & Layanan Hotline' : 'Quotation Form & Hotline Helpdesk',
      icon: Mail
    }
  ];

  const handleNavClick = (targetId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(targetId);
  };

  return (
    <>
      {/* Top emergency announcement bar */}
      <div 
        id="top-emergency-bar" 
        className="w-full bg-slate-900 border-b border-slate-800 text-xs py-1.5 px-4 text-slate-300 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              ISO 9001:2015 & ISO 14001:2015 Certified
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              {lang === 'id' 
                ? 'Solusi IPAL MBBR, Klorinasi All-Vacuum & Scrubber Gas Emisi KLHK'
                : 'MBBR WWTP, All-Vacuum Chlorination & Emission Scrubber Engineering'}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/6289627209809?text=Halo%20Berkat%20Air%20Teknika,%20saya%20ingin%20konsultasi" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>CS 24/7: +62 896-2720-9809</span>
            </a>
            <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>SNI & KLHK Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        id="main-navbar"
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md dark:shadow-xl border-b border-slate-200/90 dark:border-blue-900/30 py-3' 
            : 'bg-white/90 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/60 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            id="brand-logo-link"
            className="flex items-center group shrink-0 text-left cursor-pointer hover:opacity-95 transition-opacity"
          >
            <Logo size="md" variant="hybrid" />
          </button>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            
            {/* 1. Beranda (Home) */}
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'home' && activeSection === 'home'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-900/60'
              }`}
            >
              <Home className="w-4 h-4 opacity-70" />
              <span>{t.nav.home}</span>
            </button>

            {/* 2. Produk Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-dropdown-products-trigger"
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isProductsActive || activeDropdown === 'products'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-900/60'
                }`}
              >
                <span>{lang === 'id' ? 'Produk' : 'Products'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} />
              </button>

              {/* Products Dropdown Panel with zero-gap hover bridge */}
              {activeDropdown === 'products' && (
                <div className="absolute left-0 top-full pt-1.5 w-80 z-50">
                  <div 
                    id="nav-dropdown-products-menu"
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1">
                      {lang === 'id' ? 'Kategori Produk & Rekayasa' : 'Products & Sizing Category'}
                    </div>
                    {productDropdownItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPage === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`dropdown-item-${item.id}`}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left cursor-pointer ${
                            isActive 
                              ? 'bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/60' 
                              : 'hover:bg-slate-100 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                            isActive 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isActive ? 'text-blue-600 dark:text-blue-300' : 'text-slate-900 dark:text-slate-100'}`}>
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 font-normal mt-0.5">
                              {item.subLabel}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Tentang Kami Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-dropdown-about-trigger"
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isAboutActive || activeDropdown === 'about'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-900/60'
                }`}
              >
                <span>{lang === 'id' ? 'Tentang Kami' : 'About Us'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} />
              </button>

              {/* About Dropdown Panel with zero-gap hover bridge */}
              {activeDropdown === 'about' && (
                <div className="absolute left-0 top-full pt-1.5 w-80 z-50">
                  <div 
                    id="nav-dropdown-about-menu"
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1">
                      {lang === 'id' ? 'Profil & Informasi Perusahaan' : 'Company Profile & Info'}
                    </div>
                    {aboutDropdownItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPage === 'home' && activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`dropdown-item-${item.id}`}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left cursor-pointer ${
                            isActive 
                              ? 'bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/60' 
                              : 'hover:bg-slate-100 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                            isActive 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isActive ? 'text-blue-600 dark:text-blue-300' : 'text-slate-900 dark:text-slate-100'}`}>
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 font-normal mt-0.5">
                              {item.subLabel}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Action Tools & RFQ Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Language Switcher */}
            <div 
              id="lang-switcher-container"
              className="flex items-center bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-lg p-0.5 text-xs"
            >
              <button
                id="btn-lang-id"
                onClick={() => setLang('id')}
                className={`px-2 py-1 rounded font-medium transition-all ${
                  lang === 'id' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Bahasa Indonesia"
              >
                🇮🇩 ID
              </button>
              <button
                id="btn-lang-en"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded font-medium transition-all ${
                  lang === 'en' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="English"
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              id="btn-theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              title={theme === 'dark' ? t.nav.light : t.nav.dark}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {/* Request Quote Button */}
            <button
              id="btn-nav-rfq"
              onClick={onOpenRFQ}
              className="relative group overflow-hidden rounded-xl px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm shadow-blue-600/30 hover:shadow-md hover:shadow-blue-500/40 cursor-pointer"
            >
              <span className="flex items-center gap-1.5 relative z-10">
                <FileText className="w-4 h-4" />
                <span>{t.nav.requestQuote}</span>
              </span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>

            {/* Mobile Lang */}
            <button
              id="btn-mobile-lang-switch"
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400"
            >
              {lang.toUpperCase()}
            </button>
            
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer"
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-2">
              
              {/* Mobile Beranda */}
              <button
                id="mobile-nav-link-home"
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left cursor-pointer ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40'
                    : 'text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{t.nav.home}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>

              {/* Mobile Produk Accordion */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 overflow-hidden">
                <button
                  onClick={() => setMobileExpandedGroup(mobileExpandedGroup === 'products' ? null : 'products')}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-900 dark:text-white text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{lang === 'id' ? 'Produk' : 'Products'}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileExpandedGroup === 'products' ? 'rotate-180' : ''}`} />
                </button>

                {mobileExpandedGroup === 'products' && (
                  <div className="px-3 pb-3 pt-1 space-y-1 bg-white dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800">
                    {productDropdownItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPage === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold text-left cursor-pointer ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Tentang Kami Accordion */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 overflow-hidden">
                <button
                  onClick={() => setMobileExpandedGroup(mobileExpandedGroup === 'about' ? null : 'about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-900 dark:text-white text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{lang === 'id' ? 'Tentang Kami' : 'About Us'}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileExpandedGroup === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {mobileExpandedGroup === 'about' && (
                  <div className="px-3 pb-3 pt-1 space-y-1 bg-white dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800">
                    {aboutDropdownItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentPage === 'home' && activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold text-left cursor-pointer ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                id="btn-mobile-drawer-rfq"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.requestQuote}</span>
              </button>

              <a
                href="https://wa.me/6289627209809?text=Halo%20Berkat%20Air%20Teknika,%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>CS 24/7: +62 896-2720-9809</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};


