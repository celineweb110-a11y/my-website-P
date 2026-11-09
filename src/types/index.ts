export type Language = 'fr' | 'ar' | 'en';

export interface ProductCategory {
  id: 'corporate' | 'marketing' | 'packaging' | 'services';
  name: Record<Language, string>;
}

export interface FinishOption {
  id: string;
  name: Record<Language, string>;
  extraCostPerUnit: number;
  description: Record<Language, string>;
}

export interface PaperOption {
  id: string;
  name: string;
  weight: string;
  description: Record<Language, string>;
  factor: number;
}

export interface ProductPillar {
  id: string;
  slug: string;
  category: 'corporate' | 'marketing' | 'packaging' | 'services';
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  badge: Record<Language, string>;
  image: string;
  basePriceMAD: number;
  minQuantity: number;
  standardTurnaroundDays: number;
  expressTurnaroundHours: number;
  formats: { id: string; label: string; dimensions: string }[];
  papers: PaperOption[];
  finishes: FinishOption[];
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  seoKeywords: string[];
  dieline: {
    bleedMm: number;
    safetyMm: number;
    recommendedDpi: number;
    colorSpace: string;
    fileFormats: string[];
  };
  faqs: {
    question: Record<Language, string>;
    answer: Record<Language, string>;
  }[];
}

export interface QuoteFormData {
  productId: string;
  formatId: string;
  paperId: string;
  finishes: string[];
  quantity: number;
  turnaround: 'standard' | 'express';
  customNotes?: string;
  fileName?: string;
  fileSizeMb?: number;
  filePreflightStatus?: 'idle' | 'analyzing' | 'passed' | 'warning';
  filePreflightIssues?: string[];
  companyName: string;
  iceNumber: string; // Moroccan B2B Identifiant Commun de l'Entreprise
  contactName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  city: string;
  quote: Record<Language, string>;
  metric: string;
  metricLabel: Record<Language, string>;
}
