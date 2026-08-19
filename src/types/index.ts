export type Language = 'id' | 'en';
export type Theme = 'dark' | 'light';
export type ThemeMode = 'dark' | 'light';

export interface ProductItem {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  category: 'wwtp' | 'chlorination' | 'air_treatment' | 'pumps' | 'salt_compost';
  badge: string;
  badgeEn: string;
  description: string;
  descriptionEn: string;
  specifications: { [key: string]: string };
  specificationsEn: { [key: string]: string };
  features: string[];
  featuresEn: string[];
  applications: string[];
  applicationsEn: string[];
  schematicSteps?: { title: string; titleEn: string; desc: string; descEn: string }[];
  modelVariants?: { model: string; capacity: string; power: string; material: string }[];
  compliance: string[];
}

export interface PillarItem {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  iconName: string;
  stats: { value: string; label: string; labelEn: string };
  keyPoints: { title: string; titleEn: string; text: string; textEn: string }[];
  color: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  titleEn: string;
  clientSector: string;
  clientSectorEn: string;
  location: string;
  year: string;
  category: 'wwtp' | 'chlorination' | 'scrubber' | 'salt' | 'circular';
  summary: string;
  summaryEn: string;
  capacity: string;
  results: { metric: string; metricEn: string; before: string; after: string; unit: string }[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  roleEn: string;
  company: string;
  location: string;
  avatar: string;
  quote: string;
  quoteEn: string;
  rating: number;
  projectType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  date: string;
  readTime: string;
  readTimeEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  author: { name: string; title: string };
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  priceNote: string;
  priceNoteEn: string;
  popular?: boolean;
  features: { text: string; textEn: string; included: boolean }[];
  ctaText: string;
  ctaTextEn: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'agent';
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
}
