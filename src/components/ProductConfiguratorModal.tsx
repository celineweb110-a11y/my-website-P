import React, { useState, useMemo } from 'react';
import { Language, ProductPillar } from '../types';
import { translations } from '../data/translations';
import { X, Download, Check, ShieldAlert, Sparkles, HelpCircle, Layers, FileCode } from 'lucide-react';

interface ProductConfiguratorModalProps {
  product: ProductPillar | null;
  currentLang: Language;
  onClose: () => void;
  onProceedToQuote: (config: {
    productId: string;
    formatId: string;
    paperId: string;
    finishes: string[];
    quantity: number;
    turnaround: 'standard' | 'express';
  }) => void;
}

export const ProductConfiguratorModal: React.FC<ProductConfiguratorModalProps> = ({
  product,
  currentLang,
  onClose,
  onProceedToQuote,
}) => {
  if (!product) return null;
  const t = translations;

  const [activeTab, setActiveTab] = useState<'blueprint' | 'specs' | 'faq'>('blueprint');
  const [selectedFormatId, setSelectedFormatId] = useState<string>(product.formats[0].id);
  const [selectedPaperId, setSelectedPaperId] = useState<string>(product.papers[0].id);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(product.minQuantity >= 250 ? 250 : product.minQuantity);
  const [turnaround, setTurnaround] = useState<'standard' | 'express'>('standard');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const toggleFinish = (id: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Real-time calculation in MAD
  const pricing = useMemo(() => {
    const base = product.basePriceMAD;
    const paperObj = product.papers.find((p) => p.id === selectedPaperId);
    const paperFactor = paperObj ? paperObj.factor : 1.0;

    const finishesCost = selectedFinishes.reduce((sum, fId) => {
      const fObj = product.finishes.find((f) => f.id === fId);
      return sum + (fObj ? fObj.extraCostPerUnit : 0);
    }, 0);

    let volumeDiscount = 1.0;
    if (quantity >= 5000) volumeDiscount = 0.55;
    else if (quantity >= 2500) volumeDiscount = 0.65;
    else if (quantity >= 1000) volumeDiscount = 0.75;
    else if (quantity >= 500) volumeDiscount = 0.85;

    const setupFee = product.category === 'packaging' ? 350 : 180;
    const unitPriceHT = (base * paperFactor * volumeDiscount) + finishesCost + (setupFee / quantity);
    const multiplier = turnaround === 'express' ? 1.15 : 1.0;
    const finalUnit = unitPriceHT * multiplier;
    const totalHT = finalUnit * quantity;

    return {
      unitPriceHT: Math.max(0.1, finalUnit),
      totalHT: Math.round(totalHT),
      totalTTC: Math.round(totalHT * 1.2),
    };
  }, [product, selectedPaperId, selectedFinishes, quantity, turnaround]);

  // Simulated Gabarit / Dieline download
  const handleDownloadDieline = () => {
    const dielineText = `PIXORA CASABLANCA - GABARIT TECHNIQUE & DIELINE SPECIFICATIONS
-----------------------------------------------------------
Produit: ${product.title.fr} (${product.title.en})
Format: ${product.formats.find((f) => f.id === selectedFormatId)?.label}
Dimensions: ${product.formats.find((f) => f.id === selectedFormatId)?.dimensions}

CONSIGNES DE PRÉPRESSE OBLIGATOIRES:
1. Fond perdu (Bleed): +${product.dieline.bleedMm}mm sur tous les bords
2. Zone tranquille (Safety): ${product.dieline.safetyMm}mm à l'intérieur de la ligne de coupe
3. Espace colorimétrique: ${product.dieline.colorSpace}
4. Résolution minimale: ${product.dieline.recommendedDpi} DPI à 100%
5. Typographies: Converties en courbes (vectorisées)
6. Format fichier: PDF/X-1a ou PDF/X-4 HD vectoriel

Atelier de fabrication: PIXORA Casablanca - G992+PP7, Bd Adarissa, Sidi Maarouf
Assistance PAO: contact.pixoraart@gmail.com | Tél / WhatsApp: +212 661-111947
-----------------------------------------------------------`;

    const blob = new Blob([dielineText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `PIXORA_Gabarit_${product.slug}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const selectedFormatObj = product.formats.find((f) => f.id === selectedFormatId) || product.formats[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100 shadow-2xs">
              <img
                src={product.image}
                alt={product.title[currentLang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                {product.category} · {product.badge[currentLang]}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
                {product.title[currentLang]}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 bg-white gap-6 shrink-0 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('blueprint')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'blueprint'
                ? 'border-cyan-600 text-cyan-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t.configurator.dielineTab[currentLang]}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'specs'
                ? 'border-cyan-600 text-cyan-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.configurator.optionsTab[currentLang]}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('faq')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'faq'
                ? 'border-cyan-600 text-cyan-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{t.configurator.faqTab[currentLang]}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          
          {/* TAB 1: BLUEPRINT & DIELINE VISUALIZER */}
          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              
              {/* Technical Dieline Visual Canvas */}
              <div className="relative bg-slate-900 rounded-xl p-6 sm:p-10 border border-slate-800 flex flex-col items-center justify-center min-h-[320px] overflow-hidden">
                
                {/* Millimeter grid backdrop */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Simulated Dieline Diagram */}
                <div className="relative w-full max-w-lg aspect-[4/3] bg-slate-800/80 rounded-lg border-2 border-dashed border-cyan-400 p-5 flex flex-col justify-between shadow-2xl">
                  
                  {/* Bleed outline label (+3mm) */}
                  <div className="absolute -top-3 left-4 bg-cyan-500 text-slate-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                    Ligne de fond perdu (+{product.dieline.bleedMm}mm)
                  </div>

                  {/* Cut line inner box */}
                  <div className="relative w-full h-full border border-red-400/80 rounded p-4 flex flex-col justify-between bg-slate-950/40">
                    
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Format fini: {selectedFormatObj.dimensions}</span>
                      <span className="text-emerald-400">Zone de sécurité ({product.dieline.safetyMm}mm)</span>
                    </div>

                    {/* Folding & slit indicator for folders/boxes */}
                    {product.id === 'chemises-rabat' && (
                      <div className="space-y-2 py-4">
                        <div className="border-t border-dashed border-cyan-400/60 pt-1 flex justify-between text-[10px] text-cyan-300 font-mono">
                          <span>Plat recto</span>
                          <span>Rainage central (dos 5mm)</span>
                          <span>Plat verso</span>
                        </div>
                        <div className="w-24 h-6 border border-amber-400/80 rounded mx-auto flex items-center justify-center text-[9px] text-amber-300 font-mono">
                          Fente Carte Visite (85x55mm)
                        </div>
                      </div>
                    )}

                    {product.id === 'boites-carton' && (
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-cyan-300 font-mono border-t border-dashed border-cyan-400/40 pt-4">
                        <div className="border border-slate-700 p-2 rounded">Rabat gauche</div>
                        <div className="border border-cyan-500/60 bg-cyan-950/30 p-2 rounded">Face dessus (Logo)</div>
                        <div className="border border-slate-700 p-2 rounded">Rabat droit</div>
                      </div>
                    )}

                    {/* Technical preflight tags */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                      <span>Résolution: {product.dieline.recommendedDpi} DPI</span>
                      <span>Espace: {product.dieline.colorSpace}</span>
                    </div>

                  </div>
                </div>

                {/* Blueprint actions bar */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 w-full max-w-lg">
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-cyan-400" />
                    <span>Gabarit certifié conforme pour PAO & Découpe</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadDieline}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloadSuccess ? 'Gabarit téléchargé !' : t.configurator.downloadDieline[currentLang]}</span>
                  </button>
                </div>

              </div>

              {/* Technical Specifications List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900">Normes PAO & Prépresse</div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Bords perdus (Bleed) : {product.dieline.bleedMm} mm requis de chaque côté</li>
                    <li>• Marge de sécurité intérieure : {product.dieline.safetyMm} mm des bords de coupe</li>
                    <li>• Profil colorimétrique recommandé : {product.dieline.colorSpace}</li>
                    <li>• Formats acceptés : {product.dieline.fileFormats.join(', ')}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900">Contrôle de production PIXORA</div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Bon à Tirer (BAT) numérique haute définition certifié avant impression</li>
                    <li>• Vérification automatisée des polices vectorisées et résolutions d'images</li>
                    <li>• Impression sur parcs Komori & Heidelberg à Casablanca</li>
                    <li>• Option d'épreuve physique contractuelle sur demande</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PRINT OPTIONS & FINISHES */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              
              {/* Formats Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Format d'impression
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {product.formats.map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormatId(fmt.id)}
                      className={`p-3 rounded-xl border text-xs text-left rtl:text-right transition-all ${
                        selectedFormatId === fmt.id
                          ? 'border-slate-950 bg-slate-950 text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold">{fmt.label}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedFormatId === fmt.id ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {fmt.dimensions}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Papers Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Type de Papier / Support
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {product.papers.map((paper) => (
                    <button
                      key={paper.id}
                      type="button"
                      onClick={() => setSelectedPaperId(paper.id)}
                      className={`p-3 rounded-xl border text-xs text-left rtl:text-right transition-all ${
                        selectedPaperId === paper.id
                          ? 'border-slate-950 bg-slate-950 text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold">{paper.name}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedPaperId === paper.id ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {paper.weight}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                        {paper.description[currentLang]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finishes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Embellissements & Finitions de Luxe
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.finishes.map((f) => {
                    const isChecked = selectedFinishes.includes(f.id);
                    return (
                      <div
                        key={f.id}
                        onClick={() => toggleFinish(f.id)}
                        className={`cursor-pointer p-3.5 rounded-xl border text-xs transition-all flex flex-col justify-between ${
                          isChecked
                            ? 'border-cyan-600 bg-cyan-50/50 shadow-2xs'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-slate-900">{f.name[currentLang]}</span>
                            <div className={`w-4 h-4 rounded flex items-center justify-center ${isChecked ? 'bg-cyan-600 text-white' : 'border border-slate-300'}`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-500">{f.description[currentLang]}</p>
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-cyan-700">
                          +{f.extraCostPerUnit.toFixed(2)} MAD/ex
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-slate-800">
                  Quantité de tirage :
                </label>
                <div className="flex items-center gap-1.5">
                  {[100, 250, 500, 1000, 2500].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuantity(q)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        quantity === q
                          ? 'bg-slate-950 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {q.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: TECHNICAL FAQS */}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-xs sm:text-sm text-slate-900">
                    {faq.question[currentLang]}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {faq.answer[currentLang]}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 flex items-start gap-3 text-xs text-cyan-950">
                <ShieldAlert className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Vous avez une demande sur mesure ou un tirage hors norme ?</div>
                  <p className="text-cyan-800 mt-0.5">
                    Notre bureau technique à Casablanca étudie vos dossiers d'appels d'offres et projets d'emballages complexes sous 2 heures.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Action Strip */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 text-xs">
            <div>
              <span className="text-slate-500">Prix unitaire estimé : </span>
              <strong className="font-mono text-slate-950 text-sm tabular-nums">
                {pricing.unitPriceHT.toFixed(2)} MAD HT
              </strong>
            </div>
            <div className="border-l border-slate-300 pl-4">
              <span className="text-slate-500">Total ({quantity} ex.) : </span>
              <strong className="font-mono text-cyan-700 text-base font-bold tabular-nums">
                {pricing.totalHT.toLocaleString()} MAD HT
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Fermer
            </button>

            <button
              type="button"
              onClick={() => {
                onProceedToQuote({
                  productId: product.id,
                  formatId: selectedFormatId,
                  paperId: selectedPaperId,
                  finishes: selectedFinishes,
                  quantity,
                  turnaround,
                });
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm transition-all flex items-center gap-2"
            >
              <span>{t.configurator.requestWithSpecs[currentLang]}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
