import React, { useState } from 'react';
import { Language, QuoteFormData } from '../types';
import { translations } from '../data/translations';
import { products } from '../data/products';
import {
  X,
  UploadCloud,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

interface QuoteModalProps {
  initialConfig?: {
    productId?: string;
    formatId?: string;
    paperId?: string;
    finishes?: string[];
    quantity?: number;
    turnaround?: 'standard' | 'express';
  };
  currentLang: Language;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  initialConfig,
  currentLang,
  onClose,
}) => {
  const t = translations;

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    productId: initialConfig?.productId || 'chemises-rabat',
    formatId: initialConfig?.formatId || 'a4-simple',
    paperId: initialConfig?.paperId || 'couche-350',
    finishes: initialConfig?.finishes || [],
    quantity: initialConfig?.quantity || 250,
    turnaround: initialConfig?.turnaround || 'standard',
    companyName: '',
    iceNumber: '',
    contactName: '',
    email: '',
    phone: '',
    city: 'Casablanca',
    address: '',
    customNotes: '',
    fileName: '',
    fileSizeMb: 0,
    filePreflightStatus: 'idle',
  });

  const [isPreflighting, setIsPreflighting] = useState<boolean>(false);
  const [skipFile, setSkipFile] = useState<boolean>(false);
  const [generatedRef, setGeneratedRef] = useState<string>('');

  const currentProduct = products.find((p) => p.id === formData.productId) || products[0];

  const handleProductSelect = (prodId: string) => {
    const prod = products.find((p) => p.id === prodId) || products[0];
    setFormData((prev) => ({
      ...prev,
      productId: prodId,
      formatId: prod.formats[0].id,
      paperId: prod.papers[0].id,
      finishes: [],
      quantity: prod.minQuantity >= 250 ? prod.minQuantity : 250,
    }));
  };

  // Simulated File Upload & Prepress Preflight Check
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
        fileSizeMb: parseFloat((file.size / (1024 * 1024)).toFixed(1)),
        filePreflightStatus: 'analyzing',
      }));
      setSkipFile(false);
      setIsPreflighting(true);

      // Simulate preflight analysis
      setTimeout(() => {
        setIsPreflighting(false);
        setFormData((prev) => ({
          ...prev,
          filePreflightStatus: 'passed',
        }));
      }, 1200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `PIX-${new Date().getFullYear()}-CAS-${randomNum}`;
    setGeneratedRef(refCode);
    setStep(4);
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Bonjour PIXORA, je confirme ma demande de devis B2B (Dossier Ref: ${generatedRef}) pour ${formData.quantity} ex. de ${currentProduct.title.fr}. Société: ${formData.companyName || 'B2B'} (Ville: ${formData.city}).`
    );
    return `https://wa.me/212661111947?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700">
              Devis B2B Officiel · Casablanca & Maroc
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
              {t.quoteModal.title[currentLang]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Unboxed, no pills) */}
        {step < 4 && (
          <div className="px-6 py-3 border-b border-slate-100 bg-white flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className={step >= 1 ? 'text-slate-950 font-bold' : ''}>
              {t.quoteModal.steps.spec[currentLang]}
            </span>
            <span aria-hidden="true">→</span>
            <span className={step >= 2 ? 'text-slate-950 font-bold' : ''}>
              {t.quoteModal.steps.files[currentLang]}
            </span>
            <span aria-hidden="true">→</span>
            <span className={step >= 3 ? 'text-slate-950 font-bold' : ''}>
              {t.quoteModal.steps.company[currentLang]}
            </span>
          </div>
        )}

        {/* Form Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          
          {/* STEP 1: PROJECT SPECIFICATION */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100 shadow-2xs">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.title[currentLang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                    Sélectionnez le produit à chiffrer
                  </label>
                  <select
                    value={formData.productId}
                    onChange={(e) => handleProductSelect(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title[currentLang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Format
                  </label>
                  <select
                    value={formData.formatId}
                    onChange={(e) => setFormData({ ...formData, formatId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  >
                    {currentProduct.formats.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.label} ({f.dimensions})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Papier / Support
                  </label>
                  <select
                    value={formData.paperId}
                    onChange={(e) => setFormData({ ...formData, paperId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  >
                    {currentProduct.papers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.weight})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Quantité de tirage souhaitée
                  </label>
                  <input
                    type="number"
                    min={currentProduct.minQuantity}
                    step={50}
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: parseInt(e.target.value) || currentProduct.minQuantity })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono font-bold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 tabular-nums"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Tirage minimum recommandé : {currentProduct.minQuantity} ex.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Délai exigé
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, turnaround: 'standard' })}
                      className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                        formData.turnaround === 'standard'
                          ? 'border-slate-950 bg-slate-950 text-white'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      Standard (4-5j)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, turnaround: 'express' })}
                      className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                        formData.turnaround === 'express'
                          ? 'border-cyan-600 bg-cyan-600 text-white'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      Express Casa (24-48h)
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Remarques techniques ou finitions souhaitées
                </label>
                <textarea
                  rows={2}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  placeholder="Ex: Vernis 3D sur le logo recto, fente carte de visite verticale, livraison impérative avant jeudi 16h..."
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>Continuer : Fichier PAO & BAT</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ARTWORK UPLOAD & PREFLIGHT CHECK */}
          {step === 2 && (
            <div className="space-y-6">
              
              <div className="text-xs text-slate-600">
                {t.quoteModal.fileUploadSubtitle[currentLang]}
              </div>

              {/* Drag and Drop Zone */}
              <label className="relative border-2 border-dashed border-slate-300 hover:border-cyan-500 bg-slate-50 hover:bg-cyan-50/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all">
                <input
                  type="file"
                  accept=".pdf,.ai,.psd,.zip,.eps"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <UploadCloud className="w-12 h-12 text-cyan-600 mb-3" />
                
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {t.quoteModal.fileUploadTitle[currentLang]}
                </div>
                
                <div className="text-xs text-slate-500">
                  Fonds perdus +3mm requis · CMJN Fogra39 · Polices vectorisées
                </div>
              </label>

              {/* Preflight State Display */}
              {isPreflighting && (
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-3 text-xs text-slate-800 animate-pulse">
                  <Clock className="w-5 h-5 text-cyan-600 animate-spin" />
                  <span>{t.quoteModal.preflightChecking[currentLang]}</span>
                </div>
              )}

              {formData.filePreflightStatus === 'passed' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-950">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">{formData.fileName} ({formData.fileSizeMb} Mo)</div>
                    <div className="text-emerald-800 mt-0.5">{t.quoteModal.preflightSuccess[currentLang]}</div>
                  </div>
                </div>
              )}

              {/* Skip option for design help */}
              <div className="pt-2">
                <label className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={skipFile}
                    onChange={(e) => {
                      setSkipFile(e.target.checked);
                      if (e.target.checked) {
                        setFormData((prev) => ({ ...prev, fileName: 'Aide création PAO demandée' }));
                      }
                    }}
                    className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                  />
                  <span>{t.quoteModal.preflightSkip[currentLang]}</span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>Retour</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>Continuer : Coordonnées Entreprise</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: COMPANY & ICE INVOICING INFO */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.quoteModal.companyName[currentLang]} *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Ex: Atlas Media SARL"
                      className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.quoteModal.iceLabel[currentLang]}
                  </label>
                  <input
                    type="text"
                    value={formData.iceNumber}
                    onChange={(e) => setFormData({ ...formData, iceNumber: e.target.value })}
                    placeholder={t.quoteModal.icePlaceholder[currentLang]}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Nécessaire pour facture conforme et récupération de TVA
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.quoteModal.contactName[currentLang]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Ex: Mehdi Alami"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.quoteModal.email[currentLang]} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="m.alami@entreprise.ma"
                      className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.quoteModal.phone[currentLang]} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6 61 00 00 00"
                      className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.quoteModal.city[currentLang]}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 top-3" />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="Casablanca">Casablanca (Livraison express locale)</option>
                      <option value="Rabat">Rabat - Salé - Kénitra</option>
                      <option value="Tanger">Tanger - Zone Franche & Med</option>
                      <option value="Marrakech">Marrakech</option>
                      <option value="Fès">Fès - Meknès</option>
                      <option value="Agadir">Agadir</option>
                      <option value="Autre">Autre ville / International</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>Retour</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  <span>{t.quoteModal.submitBtn[currentLang]}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 4: INSTANT SUCCESS CONFIRMATION & WHATSAPP CONNECTION */}
          {step === 4 && (
            <div className="py-6 text-center space-y-6">
              
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  {t.quoteModal.successTitle[currentLang]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  {t.quoteModal.successMessage[currentLang]}
                </p>
              </div>

              {/* Dossier Reference Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs space-y-1">
                <div className="text-slate-500">{t.quoteModal.successRef[currentLang]}</div>
                <div className="text-lg font-mono font-extrabold text-cyan-700 tracking-wider">
                  {generatedRef}
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  {formData.quantity} ex. · {currentProduct.title[currentLang]}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.quoteModal.sendWhatsApp[currentLang]}</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
                >
                  Retour au site
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
