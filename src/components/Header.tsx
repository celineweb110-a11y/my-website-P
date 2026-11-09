import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { products } from '../data/products';
import { Menu, X, ChevronDown, Phone, FileText, Package, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: (productId?: string) => void;
  onOpenSampleModal: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuoteModal,
  onOpenSampleModal,
  onSelectProduct,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const t = translations;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Strict Top Bar Contract: 3 zones separated by gap-8 (Brand, Nav links, 1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
            title="PIXORA – Imprimerie en Ligne Casablanca"
          >
            <div className="w-8 h-8 rounded bg-slate-950 flex items-center justify-center text-cyan-400 font-bold text-lg tracking-tighter shadow-sm group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              P
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-950 font-sans">
              PIXORA
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            {/* Products with Hover Mega-Menu */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors py-2 whitespace-nowrap shrink-0"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                <span>{t.nav.products[currentLang]}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Dropdown panel */}
              {productsDropdownOpen && (
                <div className="absolute top-full -left-20 w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
                  {products.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      className="text-left rtl:text-right p-3 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-slate-100"
                      onClick={() => {
                        onSelectProduct(prod.id);
                        setProductsDropdownOpen(false);
                      }}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                        <img
                          src={prod.image}
                          alt={prod.title[currentLang]}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-slate-900 group-hover/item:text-cyan-600 truncate">
                          {prod.title[currentLang]}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {prod.subtitle[currentLang]}
                        </div>
                        <div className="text-[10px] text-cyan-600 font-semibold mt-1">
                          {t.productsSection.fromPrice[currentLang]} {prod.basePriceMAD.toFixed(2)} MAD
                        </div>
                      </div>
                    </button>
                  ))}
                  <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Casablanca · Expédition nationale J+1</span>
                    <button
                      type="button"
                      onClick={() => {
                        onOpenSampleModal();
                        setProductsDropdownOpen(false);
                      }}
                      className="text-cyan-600 font-medium hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {t.nav.sampleKit[currentLang]}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#calculateur"
              className="hover:text-cyan-600 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.estimator[currentLang]}
            </a>

            <a
              href="#pourquoi-pixora"
              className="hover:text-cyan-600 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.whyUs[currentLang]}
            </a>

            <a
              href="#atelier-casablanca"
              className="hover:text-cyan-600 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.factory[currentLang]}
            </a>

            <button
              type="button"
              onClick={onOpenSampleModal}
              className="hover:text-cyan-600 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.sampleKit[currentLang]}
            </button>
          </nav>

          {/* Zone 3: 1 primary action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg bg-slate-100 p-1 border border-slate-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    currentLang === lang.code
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.ctaQuote[currentLang]}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="space-y-1">
            <a
              href="#produits"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              {t.nav.products[currentLang]}
            </a>
            <a
              href="#calculateur"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              {t.nav.estimator[currentLang]}
            </a>
            <a
              href="#pourquoi-pixora"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              {t.nav.whyUs[currentLang]}
            </a>
            <a
              href="#atelier-casablanca"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              {t.nav.factory[currentLang]}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full text-left rtl:text-right px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              {t.nav.sampleKit[currentLang]}
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-slate-950 rounded-lg"
            >
              {t.nav.ctaQuote[currentLang]}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
