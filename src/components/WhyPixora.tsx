import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Printer, CheckCircle, Award, Truck, Sparkles } from 'lucide-react';

interface WhyPixoraProps {
  currentLang: Language;
  onOpenSampleModal: () => void;
}

export const WhyPixora: React.FC<WhyPixoraProps> = ({ currentLang, onOpenSampleModal }) => {
  const t = translations;

  const featureIcons = [Printer, CheckCircle, Award, Truck];

  return (
    <section id="pourquoi-pixora" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            {t.whyPixora.badge[currentLang]}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {t.whyPixora.heading[currentLang]}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {t.whyPixora.subheading[currentLang]}
          </p>
        </div>

        {/* Feature Split Layout: Left editorial list, Right factory photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Numbered Editorial Capabilities (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {t.whyPixora.features.map((feature, idx) => {
              const Icon = featureIcons[idx % featureIcons.length];
              const editorialNumber = `0${idx + 1}.`;

              return (
                <div key={feature.id} className="flex items-start gap-4 group">
                  <div className="font-mono text-cyan-600 font-bold text-sm pt-0.5 shrink-0">
                    {editorialNumber}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {feature.title[currentLang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feature.desc[currentLang]}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenSampleModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Tester la qualité : Demander notre coffret échantillons gratuit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Factory Machinery Visual & Proof Strip (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
              <img
                src="/images/offset-printing-press-casablanca.jpg"
                alt="Presse offset industrielle Heidelberg à Casablanca - PIXORA"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <div className="font-bold">Ligne Offset Heidelberg & Komori 5-Couleurs</div>
                <div className="text-[11px] text-slate-300">
                  Capacité de 15 000 feuilles/heure · Séchage UV instantané
                </div>
              </div>
            </div>

            {/* Proof Stats 4-box Strip */}
            <div className="grid grid-cols-2 gap-3">
              {t.whyPixora.proofStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900">
                  <div className="text-2xl font-extrabold text-slate-950 font-mono tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1 leading-tight">
                    {stat.label[currentLang]}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
