import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { products } from '../data/products';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onSelectProduct: (productId: string) => void;
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectProduct,
  onOpenQuoteModal,
  onOpenSampleModal,
}) => {
  const t = translations;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      
      {/* Upper SEO Pillars Strip */}
      <div className="border-b border-slate-900 py-8 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300 uppercase tracking-wider">
              Mots-clés SEO Haute Intention Casablanca :
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>Imprimerie Casablanca</span>
              <span>·</span>
              <span>Impression Offset Maroc</span>
              <span>·</span>
              <span>Chemise à Rabat Personnalisée</span>
              <span>·</span>
              <span>Packaging Boîte Carton Casablanca</span>
              <span>·</span>
              <span>Flyers Dépliants Express</span>
              <span>·</span>
              <span>Catalogue d'Entreprise B2B</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Identity (2 cols span) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-cyan-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                P
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                PIXORA
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              {t.footer.tagline[currentLang]}
            </p>

            <div className="space-y-2 pt-2 text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>G992+PP7, Bd Adarissa, Sidi Maarouf, Casablanca</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+212661111947" className="hover:text-white transition-colors">
                  +212 661-111947
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:contact.pixoraart@gmail.com" className="hover:text-white transition-colors">
                  contact.pixoraart@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lundi au Vendredi : 08h30 - 18h30 | Samedi : 09h00 - 13h00</span>
              </div>
            </div>
          </div>

          {/* Col 2: Products Pillars (Pillar links) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              {t.footer.quickLinks[currentLang]}
            </h4>
            <ul className="space-y-2">
              {products.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(p.id)}
                    className="hover:text-white transition-colors text-slate-400 text-left rtl:text-right"
                  >
                    {p.title[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Additional Products & Packaging */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Packaging & Grand Format
            </h4>
            <ul className="space-y-2">
              {products.slice(5).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(p.id)}
                    className="hover:text-white transition-colors text-slate-400 text-left rtl:text-right"
                  >
                    {p.title[currentLang]}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenSampleModal}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Kit Échantillons Papiers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Devis B2B Sur Mesure
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Standards */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              {t.footer.legalLinks[currentLang]}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Facture légale avec ICE</li>
              <li>Certifié Fogra39 & ISO 12647</li>
              <li>Papiers certifiés FSC écologiques</li>
              <li>Conditions Générales de Vente B2B</li>
              <li>Politique de Confidentialité PAO</li>
            </ul>
            <div className="pt-2 text-[10px] text-slate-500 font-mono">
              <div>RC Casablanca : 482910</div>
              <div>Patente : 3719024</div>
              <div>ICE : 002194832000084</div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>{t.footer.rights[currentLang]}</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Imprimerie et Façonnage 100% Made in Morocco</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
