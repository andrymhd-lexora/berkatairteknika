import React, { useState } from 'react';
import { 
  Layers, 
  Droplets, 
  ShieldAlert, 
  Wind, 
  Activity, 
  FileText, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Filter, 
  Search,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ProductItem, Language } from '../types';
import { PRODUCTS_DATA } from '../data/productsData';
import { TRANSLATIONS } from '../data/translations';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCatalogProps {
  lang: Language;
  onOpenRFQWithProduct: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  lang,
  onOpenRFQWithProduct
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: t.products.allTab },
    { id: 'wwtp', label: t.products.wwtpTab },
    { id: 'chlorination', label: t.products.chlorineTab },
    { id: 'air_treatment', label: t.products.airTab },
    { id: 'pumps', label: t.products.pumpsTab }
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const name = lang === 'id' ? p.name : p.nameEn;
    const desc = lang === 'id' ? p.description : p.descriptionEn;
    const matchesSearch = searchQuery === '' || 
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.compliance.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  return (
    <section 
      id="products" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden bg-tech-dots"
    >
      {/* Glow lights */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.products.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {t.products.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari produk / standar...' : 'Search equipment / specs...'}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProducts.map((prod) => {
            const specs = lang === 'id' ? prod.specifications : prod.specificationsEn;
            const topSpecs = Object.entries(specs).slice(0, 3);

            return (
              <div
                key={prod.id}
                id={`product-card-${prod.id}`}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-600/50 transition-all duration-300 p-6 flex flex-col justify-between space-y-6 group hover:shadow-2xl hover:shadow-blue-900/20 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800/60">
                      {lang === 'id' ? prod.badge : prod.badgeEn}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      {prod.category}
                    </span>
                  </div>

                  {/* Product Title & Tagline */}
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors">
                      {lang === 'id' ? prod.name : prod.nameEn}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2">
                      {lang === 'id' ? prod.tagline : prod.taglineEn}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-light">
                    {lang === 'id' ? prod.description : prod.descriptionEn}
                  </p>

                  {/* Key Specifications Mini Table */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 font-mono text-[11px]">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold pb-1 border-b border-slate-800/80">
                      {lang === 'id' ? 'Spesifikasi Utama:' : 'Key Engineering Highlights:'}
                    </div>
                    {topSpecs.map(([k, v], idx) => (
                      <div key={idx} className="flex justify-between items-start gap-2">
                        <span className="text-slate-400 truncate w-2/5">{k}:</span>
                        <span className="text-cyan-300 font-semibold text-right w-3/5 truncate">{v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compliance Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prod.compliance.slice(0, 2).map((comp, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3 h-3" />
                        <span>{comp}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProduct(prod)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.products.viewDetails}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </button>

                  <button
                    onClick={() => onOpenRFQWithProduct(lang === 'id' ? prod.name : prod.nameEn)}
                    className="py-2.5 px-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center shadow-md shadow-blue-600/30 cursor-pointer"
                    title={t.products.requestForProduct}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 mt-6">
            <p className="text-sm text-slate-400">
              {lang === 'id' ? 'Tidak ada produk yang cocok dengan kata kunci pencarian.' : 'No equipment matched your search criteria.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              {lang === 'id' ? 'Reset Filter' : 'Reset Filters'}
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductDetailModal
          product={activeModalProduct}
          lang={lang}
          onClose={() => setActiveModalProduct(null)}
          onSelectForRFQ={onOpenRFQWithProduct}
        />
      )}
    </section>
  );
};
