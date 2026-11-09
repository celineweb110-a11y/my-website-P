import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { X, Sparkles, CheckCircle2, Building, Mail, Phone, MapPin, PackageCheck } from 'lucide-react';

interface SampleKitModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const SampleKitModal: React.FC<SampleKitModalProps> = ({ currentLang, onClose }) => {
  const t = translations;
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Casablanca');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-600" />
            <h3 className="text-base sm:text-lg font-extrabold text-slate-950">
              {t.sampleModal.title[currentLang]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {!submitted ? (
            <>
              <div className="relative h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                <img
                  src="/images/hero-print-packaging-casablanca.jpg"
                  alt="Coffret échantillons PIXORA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3.5 text-white text-xs font-semibold">
                  Coffret d'échantillons réels · Expédié gratuitement à votre bureau
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.sampleModal.subtitle[currentLang]}
              </p>

              {/* Kit items list */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-900">
                  {t.sampleModal.kitIncludes[currentLang]}
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {t.sampleModal.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item[currentLang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Request Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Société / Organisme *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Agence Média Casablanca"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Nom du destinataire *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Salma Benjelloun"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="s.benjelloun@agence.ma"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Téléphone portable *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+212 6 00 00 00 00"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Adresse de livraison du bureau *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ex: Étage 4, Tour CFC, Boulevard Main Street"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Ville
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
                    >
                      <option value="Casablanca">Casablanca (24h)</option>
                      <option value="Rabat">Rabat (48h)</option>
                      <option value="Tanger">Tanger (48h)</option>
                      <option value="Marrakech">Marrakech (48h)</option>
                      <option value="Autre">Autre ville</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                  >
                    {t.sampleModal.sendToOffice[currentLang]}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto">
                <PackageCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Votre kit échantillons est en route !
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Nous expédions votre coffret à <strong>{company}</strong> ({city}) sous 24-48h ouvrées. Un coursier vous contactera avant la remise.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl"
              >
                Fermer
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
