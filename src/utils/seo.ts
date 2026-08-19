import { Language } from '../types';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
  author: string;
}

export const SEO_CONFIG: Record<Language, SEOMetadata> = {
  id: {
    title: 'Berkat Air Teknika - Solusi Air dan Teknologi | MBBR, Klorinasi, Scrubber',
    description:
      'PT Berkat Air Teknika - Penyedia solusi rekayasa pengolahan limbah & lingkungan, inovasi teknologi pengolahan garam, penerapan ekonomi sirkular kompos organik, dan sistem klorinasi & scrubber industri.',
    keywords:
      'Berkat Air Teknika, Pengolahan Air Limbah, IPAL, WTP, WWTP, MBBR, Tabung Klorin, Fan Blower, Pompa Sirkulasi, Sistem Klorinasi, Vacuum Regulator, Ejector, Sistem Scrubber, Pengolahan Garam, Kompos Organik, Circular Economy Indonesia, Kebayoran Lama, Jakarta Selatan',
    ogTitle: 'Berkat Air Teknika | Solusi Air dan Teknologi Terintegrasi',
    ogDescription:
      'Teknologi Pengolahan Air, Limbah Industri, Rekayasa Garam Berkualitas & Sistem Sirkular Terdepan di Indonesia.',
    ogLocale: 'id_ID',
    author: 'Berkat Air Teknika',
  },
  en: {
    title: 'Berkat Air Teknika - Water & Environmental Tech Solutions | MBBR, Chlorination, Scrubbers',
    description:
      'Berkat Air Teknika - Leading provider of industrial wastewater treatment engineering, high-purity salt refining innovation, organic sludge-to-compost circular economy, and gas chlorination & scrubber systems in Indonesia.',
    keywords:
      'Berkat Air Teknika, Industrial Wastewater Treatment, WWTP, WTP, MBBR Media, Gas Chlorination, Vacuum Regulator, Ejector, Wet Gas Scrubber, Air Blower, Salt Refinery, Organic Bio-Compost, Circular Economy Indonesia, Water Technology Jakarta',
    ogTitle: 'Berkat Air Teknika | Integrated Water & Technology Engineering Solutions',
    ogDescription:
      'Advanced Water & Wastewater Engineering, High-Purity Salt Refining, & Industrial Circular Systems in Indonesia.',
    ogLocale: 'en_US',
    author: 'Berkat Air Teknika',
  },
};

/**
 * Sets or updates a meta tag in document head
 */
function setMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  if (typeof document === 'undefined') return;
  const selector = `meta[${attributeName}="${attributeValue}"]`;
  let element = document.querySelector(selector) as HTMLMetaElement | null;

  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

/**
 * Synchronizes document title, language attribute, and meta tags based on the current language
 */
export function updateSEOMeta(lang: Language): SEOMetadata {
  const meta = SEO_CONFIG[lang] || SEO_CONFIG.id;

  if (typeof document !== 'undefined') {
    // 1. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 2. Update page title
    document.title = meta.title;

    // 3. Update standard meta tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', meta.keywords);
    setMetaTag('name', 'author', meta.author);

    // 4. Update Open Graph meta tags
    setMetaTag('property', 'og:title', meta.ogTitle);
    setMetaTag('property', 'og:description', meta.ogDescription);
    setMetaTag('property', 'og:locale', meta.ogLocale);
    setMetaTag('property', 'og:type', 'website');

    // 5. Update Twitter Card meta tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.ogTitle);
    setMetaTag('name', 'twitter:description', meta.ogDescription);
  }

  return meta;
}
