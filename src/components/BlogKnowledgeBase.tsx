import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  User, 
  Calendar, 
  ArrowRight, 
  X, 
  Share2, 
  Check, 
  Tag
} from 'lucide-react';
import { BlogPost, Language } from '../types';
import { BLOG_POSTS } from '../data/productsData';
import { TRANSLATIONS } from '../data/translations';

interface BlogKnowledgeBaseProps {
  lang: Language;
}

export const BlogKnowledgeBase: React.FC<BlogKnowledgeBaseProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="blog" 
      className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.blog.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.blog.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 lg:p-8 flex flex-col justify-between space-y-6 hover:border-blue-500/60 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-900 font-bold">
                    {lang === 'id' ? post.category : post.categoryEn}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{lang === 'id' ? post.readTime : post.readTimeEn}</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {lang === 'id' ? post.title : post.titleEn}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                  {lang === 'id' ? post.excerpt : post.excerptEn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>{post.author.name}</span>
                </div>

                <span className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                  <span>{t.blog.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full Blog Article Modal */}
      {selectedPost && (
        <div 
          id="blog-reading-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
            {/* Modal Header */}
            <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-900 font-bold">
                    {lang === 'id' ? selectedPost.category : selectedPost.categoryEn}
                  </span>
                  <span className="text-slate-400">{selectedPost.date}</span>
                </div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight">
                  {lang === 'id' ? selectedPost.title : selectedPost.titleEn}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>Oleh: {selectedPost.author.name} ({selectedPost.author.title})</span>
                  <span>•</span>
                  <span>{lang === 'id' ? selectedPost.readTime : selectedPost.readTimeEn}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              <p className="text-blue-300 font-medium text-base sm:text-lg border-l-2 border-blue-500 pl-4 italic">
                {lang === 'id' ? selectedPost.excerpt : selectedPost.excerptEn}
              </p>

              <div className="pt-3 space-y-4">
                <p>{lang === 'id' ? selectedPost.content : selectedPost.contentEn}</p>
                <p>
                  {lang === 'id'
                    ? 'Penerapan standar rekayasa yang tepat pada instalasi pengolahan air bersih dan air limbah tidak hanya menghindarkan sanksi administratif dan hukum dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK), namun secara simultan mengamankan keandalan operasional pabrik dalam jangka panjang serta meminimalkan OPEX bahan kimia dan energi listrik.'
                    : 'Adhering to strict engineering protocols for industrial wastewater and waterworks systems guarantees full statutory environmental compliance while unlocking substantial OPEX savings in power and chemical dosing.'}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
              <button
                onClick={handleShare}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 border border-slate-800 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? (lang === 'id' ? 'Tautan Disalin!' : 'Link Copied!') : t.blog.share}</span>
              </button>

              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                {lang === 'id' ? 'Selesai Membaca' : 'Close Article'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
