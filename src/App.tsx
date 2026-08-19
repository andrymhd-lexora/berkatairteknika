import React, { useState, useEffect } from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Language, Theme } from './types';
import { updateSEOMeta } from './utils/seo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ProductCatalog } from './components/ProductCatalog';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Testimonials } from './components/Testimonials';
import { PricingConsultation } from './components/PricingConsultation';
import { BlogKnowledgeBase } from './components/BlogKnowledgeBase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LiveChatWidget } from './components/LiveChatWidget';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [theme, setTheme] = useState<Theme>('light');
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'pricing' | 'calculator'>('home');
  const [prefilledProduct, setPrefilledProduct] = useState<string>('');
  const [prefilledCalcSummary, setPrefilledCalcSummary] = useState<string>('');

  // Handle dynamic meta tags & SEO updates based on language
  useEffect(() => {
    updateSEOMeta(lang);
  }, [lang]);

  // Page and section navigation handler
  const handleNavigate = (target: string) => {
    if (target === 'products') {
      setCurrentPage('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'pricing') {
      setCurrentPage('pricing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'calculator') {
      setCurrentPage('calculator');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Return to home page view
      setCurrentPage('home');
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 80);
    }
  };

  // Scroll to calculator section
  const handleOpenCalculator = () => {
    handleNavigate('calculator');
  };

  // Scroll to RFQ section with prefilled product
  const handleOpenRFQWithProduct = (productName: string) => {
    setPrefilledProduct(productName);
    if (currentPage !== 'home') {
      handleNavigate('contact');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll to RFQ section with prefilled calculation
  const handleOpenRFQWithCalcData = (calcSummary: string) => {
    setPrefilledCalcSummary(calcSummary);
    if (currentPage !== 'home') {
      handleNavigate('contact');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll to RFQ general
  const handleOpenRFQ = () => {
    if (currentPage !== 'home') {
      handleNavigate('contact');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 ${theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Main Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onOpenRFQ={handleOpenRFQ}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* 1. DEDICATED PRODUCTS PAGE VIEW */}
        {currentPage === 'products' && (
          <div>
            {/* Page Header / Breadcrumb Banner */}
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-blue-600/20 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                  <button onClick={() => handleNavigate('home')} className="hover:underline flex items-center gap-1 cursor-pointer">
                    <Home className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Beranda' : 'Home'}</span>
                  </button>
                  <span>/</span>
                  <span className="text-slate-300 font-semibold">{lang === 'id' ? 'Katalog Produk & Sistem Rekayasa' : 'Products & Systems Catalog'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight text-white mb-2">
                      {lang === 'id' ? 'Katalog Produk & Sistem Rekayasa Air & Limbah' : 'Products & Water Engineering Systems Catalog'}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                      {lang === 'id' 
                        ? 'Solusi lengkap MBBR Media, Tabung Klorinasi, Fan Blower, Pompa Sirkulasi, Gas Chlorinator All-Vacuum, dan Wet Scrubber Industri.'
                        : 'Comprehensive solutions for MBBR Media, Chlorination Cylinders, Air Blowers, Pumps, All-Vacuum Chlorinators, and Wet Gas Scrubbers.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer shrink-0 self-start md:self-center"
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-400" />
                    <span>{lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Standalone Product Catalog Component */}
            <ProductCatalog 
              lang={lang} 
              onOpenRFQWithProduct={handleOpenRFQWithProduct} 
            />

            {/* RFQ Contact Section */}
            <ContactSection 
              lang={lang} 
              prefilledProduct={prefilledProduct}
              prefilledCalcSummary={prefilledCalcSummary}
            />
          </div>
        )}

        {/* 2. DEDICATED PRICING & SERVICES PAGE VIEW */}
        {currentPage === 'pricing' && (
          <div>
            {/* Page Header / Breadcrumb Banner */}
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-indigo-600/20 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                  <button onClick={() => handleNavigate('home')} className="hover:underline flex items-center gap-1 cursor-pointer">
                    <Home className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Beranda' : 'Home'}</span>
                  </button>
                  <span>/</span>
                  <span className="text-slate-300 font-semibold">{lang === 'id' ? 'Skema Kerjasama & Layanan' : 'Engagement Models & Services'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight text-white mb-2">
                      {lang === 'id' ? 'Skema Kerjasama, EPC, O&M, & Konsultasi' : 'Engagement Models, EPC, O&M & Consultation'}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                      {lang === 'id' 
                        ? 'Model kontrak pengadaan, konstruksi, dan pengoperasian sarana IPAL / WTP yang fleksibel, transparan, dan terjamin kepatuhan regulasi KLHK.'
                        : 'Flexible, transparent procurement, construction, and operation contracts compliant with environmental standards.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer shrink-0 self-start md:self-center"
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-400" />
                    <span>{lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Standalone Pricing & Consultation Component */}
            <PricingConsultation 
              lang={lang} 
              onSelectPlanForRFQ={handleOpenRFQWithProduct} 
            />

            {/* RFQ Contact Section */}
            <ContactSection 
              lang={lang} 
              prefilledProduct={prefilledProduct}
              prefilledCalcSummary={prefilledCalcSummary}
            />
          </div>
        )}

        {/* 3. DEDICATED ENGINEERING CALCULATOR PAGE VIEW */}
        {currentPage === 'calculator' && (
          <div>
            {/* Page Header / Breadcrumb Banner */}
            <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-cyan-600/20 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                  <button onClick={() => handleNavigate('home')} className="hover:underline flex items-center gap-1 cursor-pointer">
                    <Home className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Beranda' : 'Home'}</span>
                  </button>
                  <span>/</span>
                  <span className="text-slate-300 font-semibold">{lang === 'id' ? 'Kalkulator Rekayasa Air & Limbah' : 'Engineering Calculator & Sizing Tool'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight text-white mb-2">
                      {lang === 'id' ? 'Alat Simulasi Teknik Terpadu & Kalkulator Sizing' : 'Integrated Water Engineering Calculator & Sizing Tool'}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                      {lang === 'id' 
                        ? 'Simulasi cepat kebutuhan MBBR media, dosis injeksi gas klorin, kapasitas wet scrubber gas emisi, serta estimasi nilai circular economy olahan limbah.'
                        : 'Simulate MBBR media volume, gas chlorination dosing rates, wet scrubber capacity, and circular economy sludge value.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer shrink-0 self-start md:self-center"
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-400" />
                    <span>{lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Standalone Interactive Engineering Calculator Component */}
            <InteractiveCalculator 
              lang={lang} 
              onOpenRFQWithCalcData={handleOpenRFQWithCalcData} 
            />

            {/* RFQ Contact Section */}
            <ContactSection 
              lang={lang} 
              prefilledProduct={prefilledProduct}
              prefilledCalcSummary={prefilledCalcSummary}
            />
          </div>
        )}

        {/* 4. HOME PAGE VIEW */}
        {currentPage === 'home' && (
          <div>
            {/* 1. Hero Section */}
            <Hero 
              lang={lang} 
              onOpenRFQ={handleOpenRFQ} 
              onOpenCalculator={handleOpenCalculator}
            />

            {/* 2. About Us & 4 Core Business Pillars + Circular Economy */}
            <AboutUs lang={lang} onOpenRFQ={handleOpenRFQ} />

            {/* 3. Project Portfolio & Field Verification Metrics */}
            <PortfolioShowcase 
              lang={lang} 
              onOpenRFQ={handleOpenRFQ} 
            />

            {/* 4. Client Testimonials & Trust Validation */}
            <Testimonials lang={lang} />

            {/* 5. Engineering Knowledge Base & Blog */}
            <BlogKnowledgeBase lang={lang} />

            {/* 6. Contact Section & Comprehensive RFQ Form */}
            <ContactSection 
              lang={lang} 
              prefilledProduct={prefilledProduct}
              prefilledCalcSummary={prefilledCalcSummary}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} onOpenRFQ={handleOpenRFQ} />

      {/* Live Engineering AI Chat Widget */}
      <LiveChatWidget lang={lang} onOpenRFQ={handleOpenRFQ} />
    </div>
  );
}
