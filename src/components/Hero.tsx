import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Layers, Sparkles } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenQuoteModal,
  onOpenSampleModal,
}) => {
  const t = translations;

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background subtle architectural grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Kicker metadata (No pills!) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-cyan-700">
              <span>Casablanca B2B Print & Packaging</span>
              <span aria-hidden="true">·</span>
              <span>Maroc</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] text-balance">
              {t.hero.title[currentLang]}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.hero.subtitle[currentLang]}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#calculateur"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>{t.hero.ctaEstimate[currentLang]}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>{t.hero.ctaSamples[currentLang]}</span>
              </button>
            </div>

            {/* Unboxed 4 Trust Points row */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>{t.hero.trustPoints.pressSpeed[currentLang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.hero.trustPoints.preflightCheck[currentLang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>{t.hero.trustPoints.deliveryPromise[currentLang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
                <span>{t.hero.trustPoints.iceInvoicing[currentLang]}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Impact Image Focal Carrier (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src="/images/hero-print-packaging-casablanca.jpg"
                alt="Impression et packaging personnalisé Casablanca - PIXORA"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Atelier Offset & Packaging Casablanca
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Chemises à rabat · Boîtes e-commerce · Dorure & Vernis 3D
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-3 py-1.5 text-xs font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  Devis express
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
