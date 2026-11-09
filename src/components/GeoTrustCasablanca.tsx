import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Clock, Truck, ShieldCheck, Navigation } from 'lucide-react';

interface GeoTrustCasablancaProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const GeoTrustCasablanca: React.FC<GeoTrustCasablancaProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = translations;
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const activeHub = t.geoTrust.hubs[activeHubIndex];

  return (
    <section id="atelier-casablanca" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            {t.geoTrust.badge[currentLang]}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {t.geoTrust.heading[currentLang]}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {t.geoTrust.subheading[currentLang]}
          </p>
        </div>

        {/* Hubs Selector Tabs & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Hub Details Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Interactive City Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 overflow-x-auto">
              {t.geoTrust.hubs.map((hub, index) => (
                <button
                  key={hub.city}
                  type="button"
                  onClick={() => setActiveHubIndex(index)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    activeHubIndex === index
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {hub.city}
                </button>
              ))}
            </div>

            {/* Hub Selected Specs */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">{activeHub.district}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{activeHub.address}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                  <a href={`tel:${activeHub.phone.replace(/\s+/g, '')}`} className="hover:text-cyan-600 font-semibold">
                    {activeHub.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>{activeHub.hours}</span>
                </div>
              </div>

              {/* Courier Coverage Detail */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Desserte logistique : </strong>
                  <span>{activeHub.coverage[currentLang]}</span>
                </div>
              </div>
            </div>

            {/* Legal B2B Transparency Box */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>Imprimerie enregistrée au Tribunal de Commerce de Casablanca</span>
              </div>
              <div className="font-mono">RC Casablanca : 482910 · Patente : 3719024</div>
            </div>

          </div>

          {/* Right Column: Visual Interactive Map Graphic (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
                Hub Logistique Central
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                33.5186° N, 7.6521° W (G992+PP7)
              </span>
            </div>

            {/* Schematic Network Map of Morocco */}
            <div className="relative h-64 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-5">
              
              {/* Subtle background nodes */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-70" 
                aria-hidden="true" 
              />

              {/* Tangier Node */}
              <div className="relative flex items-center gap-2 self-end text-[10px] text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span>Tanger Med (J+1)</span>
              </div>

              {/* Rabat Node */}
              <div className="relative flex items-center gap-2 ml-16 text-[10px] text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span>Rabat - Technopolis (J+1)</span>
              </div>

              {/* Casablanca Central Hub (Prominent) */}
              <div className="relative flex items-center gap-3 p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/80 shadow-lg">
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/30 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Casablanca (Atelier & Showroom)</div>
                  <div className="text-[10px] text-cyan-300">Sidi Maarouf · Retrait direct ou Express 24h</div>
                </div>
              </div>

              {/* Marrakech / South Node */}
              <div className="relative flex items-center gap-2 text-[10px] text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span>Marrakech & Agadir (J+1)</span>
              </div>

            </div>

            <div className="space-y-3">
              <div className="text-xs text-slate-300 leading-relaxed">
                Besoin d'examiner nos papiers et finitions de vos propres yeux ? Venez visiter notre showroom professionnel sur rendez-vous à Casablanca.
              </div>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md text-center"
              >
                Planifier un RDV ou Demander un Devis Direct
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
