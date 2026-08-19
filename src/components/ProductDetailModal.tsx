import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Activity,
  FileDown,
  Gauge,
  Factory
} from 'lucide-react';
import { ProductItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ProductDetailModalProps {
  product: ProductItem | null;
  lang: Language;
  onClose: () => void;
  onSelectForRFQ: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  lang,
  onClose,
  onSelectForRFQ
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'specs' | 'schematic' | 'features' | 'applications'>('specs');
  const [activeSchematicStep, setActiveSchematicStep] = useState<number>(0);

  const specs = lang === 'id' ? product.specifications : product.specificationsEn;
  const features = lang === 'id' ? product.features : product.featuresEn;
  const applications = lang === 'id' ? product.applications : product.applicationsEn;
  const schematics = product.schematicSteps || [];

  return (
    <div 
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        id="product-detail-modal-container"
        className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-950/80 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800/60">
                {lang === 'id' ? product.badge : product.badgeEn}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                ID: BAT-{product.id.toUpperCase()}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1.5">
              {lang === 'id' ? product.name : product.nameEn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              {lang === 'id' ? product.tagline : product.taglineEn}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-slate-950/40 border-b border-slate-800 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'specs'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.products.specSheet}
          </button>

          {schematics.length > 0 && (
            <button
              onClick={() => setActiveTab('schematic')}
              className={`pb-3 px-3 border-b-2 transition-all shrink-0 cursor-pointer ${
                activeTab === 'schematic'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.products.schematicTitle}
            </button>
          )}

          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'features'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.products.featuresTitle}
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 cursor-pointer ${
              activeTab === 'applications'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.products.applicationsTitle}
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-300">
          
          {/* Overview text */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 leading-relaxed text-xs sm:text-sm">
            {lang === 'id' ? product.description : product.descriptionEn}
          </div>

          {/* TAB 1: Technical Specifications Table */}
          {activeTab === 'specs' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'id' ? 'Matriks Parameter Rekayasa' : 'Engineering Parameter Matrix'}</span>
              </h3>

              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3 w-2/5 font-semibold">Parameter / Item</th>
                      <th className="p-3 w-3/5 font-semibold">Spesifikasi Standar Berkat Air Teknika</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {Object.entries(specs).map(([key, val], idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-950/20'}>
                        <td className="p-3 font-medium text-slate-300">{key}</td>
                        <td className="p-3 text-cyan-300 font-semibold">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Compliance Badges */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">
                  {t.products.complianceTitle}:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {product.compliance.map((c, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{c}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Process Schematic Step-by-Step Viewer */}
          {activeTab === 'schematic' && schematics.length > 0 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>{lang === 'id' ? 'Simulasi Alur Proses Kerja' : 'Operational Flow Schematic'}</span>
              </h3>

              {/* Step Navigation Pill Indicator */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {schematics.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSchematicStep(idx)}
                    className={`p-2.5 rounded-lg text-left transition-all border text-xs cursor-pointer ${
                      activeSchematicStep === idx
                        ? 'bg-blue-950 border-blue-600 text-white font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-cyan-400 block">Tahap 0{idx + 1}</span>
                    <span className="truncate block mt-0.5">{lang === 'id' ? step.title : step.titleEn}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Details */}
              {(() => {
                const curStep = schematics[activeSchematicStep];
                if (!curStep) return null;
                return (
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-900/60">
                        {lang === 'id' ? `Fase 0${activeSchematicStep + 1}: ${curStep.title}` : `Phase 0${activeSchematicStep + 1}: ${curStep.titleEn}`}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {activeSchematicStep + 1} / {schematics.length}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed pt-1">
                      {lang === 'id' ? curStep.desc : curStep.descEn}
                    </p>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 3: Features & Advantages */}
          {activeTab === 'features' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <h3 className="font-heading font-bold text-sm text-white">
                {t.products.featuresTitle}
              </h3>
              <div className="space-y-2">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Industrial Applications */}
          {activeTab === 'applications' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <h3 className="font-heading font-bold text-sm text-white">
                {t.products.applicationsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.map((app, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <Factory className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <button
            onClick={() => {
              alert(lang === 'id' 
                ? `Mengunduh Technical Datasheet untuk ${product.name}...` 
                : `Downloading Technical Datasheet for ${product.nameEn}...`);
            }}
            className="px-4 py-2.5 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-blue-400" />
            <span>{t.products.downloadBrochure}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl font-medium text-xs text-slate-400 hover:text-white bg-transparent hover:bg-slate-900 transition-colors"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
            <button
              onClick={() => {
                onSelectForRFQ(lang === 'id' ? product.name : product.nameEn);
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
            >
              <span>{t.products.requestForProduct}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
