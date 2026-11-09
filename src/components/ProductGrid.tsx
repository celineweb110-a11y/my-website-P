import React, { useState } from 'react';
import { Language, ProductPillar } from '../types';
import { translations } from '../data/translations';
import { products } from '../data/products';
import { ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  currentLang: Language;
  onSelectProduct: (productId: string) => void;
  onOpenQuoteModal: (productId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  currentLang,
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  const t = translations;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.categories.all[currentLang] },
    { id: 'corporate', label: t.categories.corporate[currentLang] },
    { id: 'marketing', label: t.categories.marketing[currentLang] },
    { id: 'packaging', label: t.categories.packaging[currentLang] },
    { id: 'services', label: t.categories.services[currentLang] },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produits" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
              {t.productsSection.badge[currentLang]}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              {t.productsSection.heading[currentLang]}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              {t.productsSection.subheading[currentLang]}
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Product Card Image Container */}
              <div
                className="relative h-52 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onSelectProduct(prod.id)}
              >
                <img
                  src={prod.image}
                  alt={prod.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle scrim overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                {/* Bottom image metadata */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-medium">
                  <span className="font-semibold">{prod.formats[0].dimensions}</span>
                  <span className="text-cyan-300 font-bold">
                    {t.productsSection.fromPrice[currentLang]} {prod.basePriceMAD.toFixed(2)} MAD
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed metadata with dot separator (Anti-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-medium capitalize text-cyan-800">
                      {prod.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Min. {prod.minQuantity} ex.</span>
                    <span aria-hidden="true">·</span>
                    <span>{prod.standardTurnaroundDays}j ouvrés</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProduct(prod.id)}
                    className="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors cursor-pointer leading-snug line-clamp-1"
                  >
                    {prod.title[currentLang]}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {prod.subtitle[currentLang]}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                  <div className="truncate">
                    <strong className="text-slate-700">Papiers : </strong>
                    {prod.papers.map((p) => p.name.split(' ')[0]).join(', ')}
                  </div>
                  <div className="truncate">
                    <strong className="text-slate-700">Finitions : </strong>
                    {prod.finishes.map((f) => f.name[currentLang].split(' ')[0]).join(', ')}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(prod.id)}
                    className="flex-1 py-2.5 px-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.productsSection.configureBtn[currentLang]}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(prod.id)}
                    className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors"
                    title="Demander un devis rapide"
                  >
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
