import React, { useState, useMemo } from 'react';
import { Language, ProductPillar } from '../types';
import { translations } from '../data/translations';
import { products } from '../data/products';
import { Calculator, Clock, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface InstantEstimatorProps {
  currentLang: Language;
  onOpenQuoteWithConfig: (config: {
    productId: string;
    formatId: string;
    paperId: string;
    finishes: string[];
    quantity: number;
    turnaround: 'standard' | 'express';
  }) => void;
  onOpenConfigurator: (productId: string) => void;
}

export const InstantEstimator: React.FC<InstantEstimatorProps> = ({
  currentLang,
  onOpenQuoteWithConfig,
  onOpenConfigurator,
}) => {
  const t = translations;

  // Selected state
  const [selectedProductId, setSelectedProductId] = useState<string>('chemises-rabat');
  
  const currentProduct: ProductPillar = useMemo(() => {
    return products.find((p) => p.id === selectedProductId) || products[0];
  }, [selectedProductId]);

  const [selectedFormatId, setSelectedFormatId] = useState<string>(currentProduct.formats[0].id);
  const [selectedPaperId, setSelectedPaperId] = useState<string>(currentProduct.papers[0].id);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(250);
  const [turnaround, setTurnaround] = useState<'standard' | 'express'>('standard');

  // When product changes, reset format & paper to product defaults
  const handleProductChange = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = products.find((p) => p.id === prodId) || products[0];
    setSelectedFormatId(prod.formats[0].id);
    setSelectedPaperId(prod.papers[0].id);
    setSelectedFinishes([]);
    setQuantity(prod.minQuantity >= 250 ? prod.minQuantity : 250);
  };

  const toggleFinish = (finishId: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(finishId) ? prev.filter((id) => id !== finishId) : [...prev, finishId]
    );
  };

  // Pricing formula with realistic volume economies of scale
  const pricing = useMemo(() => {
    const base = currentProduct.basePriceMAD;
    const paperObj = currentProduct.papers.find((p) => p.id === selectedPaperId);
    const paperFactor = paperObj ? paperObj.factor : 1.0;

    // Additional finishes per unit
    const finishesCostPerUnit = selectedFinishes.reduce((sum, fId) => {
      const fObj = currentProduct.finishes.find((f) => f.id === fId);
      return sum + (fObj ? fObj.extraCostPerUnit : 0);
    }, 0);

    // Quantity scale factor (higher volume = lower cost per unit)
    let volumeDiscount = 1.0;
    if (quantity >= 5000) volumeDiscount = 0.55;
    else if (quantity >= 2500) volumeDiscount = 0.65;
    else if (quantity >= 1000) volumeDiscount = 0.75;
    else if (quantity >= 500) volumeDiscount = 0.85;
    else if (quantity <= 100) volumeDiscount = 1.25;

    // Plate setup flat fee spread across quantity
    const setupFeeMAD = currentProduct.category === 'packaging' ? 350 : 180;
    const unitPriceHT = (base * paperFactor * volumeDiscount) + finishesCostPerUnit + (setupFeeMAD / quantity);

    // Turnaround surcharge
    const turnaroundMultiplier = turnaround === 'express' ? 1.15 : 1.0;
    const finalUnitPriceHT = unitPriceHT * turnaroundMultiplier;
    const totalHT = finalUnitPriceHT * quantity;
    const tva20 = totalHT * 0.20;
    const totalTTC = totalHT + tva20;

    return {
      unitPriceHT: Math.max(0.08, finalUnitPriceHT),
      totalHT: Math.round(totalHT),
      tva20: Math.round(tva20),
      totalTTC: Math.round(totalTTC),
    };
  }, [currentProduct, selectedPaperId, selectedFinishes, quantity, turnaround]);

  const quantityPresets = [100, 250, 500, 1000, 2500, 5000];

  return (
    <section id="calculateur" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            {t.estimator.badge[currentLang]}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {t.estimator.heading[currentLang]}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {t.estimator.subheading[currentLang]}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-7">
            
            {/* Step 1: Product Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                {t.estimator.selectProduct[currentLang]}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {products.slice(0, 6).map((prod) => {
                  const isSelected = prod.id === selectedProductId;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => handleProductChange(prod.id)}
                      className={`text-left rtl:text-right p-3 rounded-xl border text-xs transition-all ${
                        isSelected
                          ? 'border-slate-950 bg-slate-950 text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-semibold truncate">{prod.title[currentLang]}</div>
                      <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                        Dès {prod.basePriceMAD.toFixed(2)} MAD
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Format & Paper Substrate (2 cols inside) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Formats */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  {t.estimator.selectFormat[currentLang]}
                </label>
                <div className="space-y-1.5">
                  {currentProduct.formats.map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormatId(fmt.id)}
                      className={`w-full text-left rtl:text-right px-3.5 py-2.5 rounded-lg border text-xs font-medium transition-all ${
                        selectedFormatId === fmt.id
                          ? 'border-cyan-600 bg-cyan-50/50 text-cyan-950 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="truncate">{fmt.label}</div>
                      <div className="text-[10px] text-slate-500">{fmt.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Papers */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  {t.estimator.selectPaper[currentLang]}
                </label>
                <div className="space-y-1.5">
                  {currentProduct.papers.map((paper) => (
                    <button
                      key={paper.id}
                      type="button"
                      onClick={() => setSelectedPaperId(paper.id)}
                      className={`w-full text-left rtl:text-right px-3.5 py-2.5 rounded-lg border text-xs font-medium transition-all ${
                        selectedPaperId === paper.id
                          ? 'border-cyan-600 bg-cyan-50/50 text-cyan-950 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{paper.name}</span>
                        <span className="text-[10px] text-slate-500">{paper.weight}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                        {paper.description[currentLang]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Finishes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                {t.estimator.selectFinishes[currentLang]}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentProduct.finishes.map((finish) => {
                  const isChecked = selectedFinishes.includes(finish.id);
                  return (
                    <div
                      key={finish.id}
                      onClick={() => toggleFinish(finish.id)}
                      className={`cursor-pointer p-3 rounded-xl border text-xs transition-all flex flex-col justify-between ${
                        isChecked
                          ? 'border-cyan-600 bg-cyan-50/40 text-slate-900 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-slate-900">{finish.name[currentLang]}</span>
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                              isChecked ? 'bg-cyan-600 text-white' : 'border border-slate-300'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2">
                          {finish.description[currentLang]}
                        </p>
                      </div>
                      <div className="mt-2 text-[10px] font-bold text-cyan-700">
                        +{finish.extraCostPerUnit.toFixed(2)} MAD/unité
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Quantity & Turnaround */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    {t.estimator.selectQuantity[currentLang]}
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                    {quantity.toLocaleString()} unités
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {quantityPresets.map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        quantity === qty
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {qty.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Turnaround Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  {t.estimator.turnaround.label[currentLang]}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTurnaround('standard')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-left rtl:text-right transition-colors ${
                      turnaround === 'standard'
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-semibold">Standard</div>
                    <div className="text-[10px] opacity-80">4-5 jours ouvrés</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTurnaround('express')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-left rtl:text-right transition-colors ${
                      turnaround === 'express'
                        ? 'border-cyan-600 bg-cyan-600 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-semibold">Express Casa</div>
                    <div className="text-[10px] opacity-90">24-48h (+15%)</div>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Price Breakdown Card (4 cols) */}
          <div className="lg:col-span-4 bg-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl sticky top-28 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Estimation en direct
              </span>
              <span className="text-[11px] text-cyan-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {turnaround === 'express' ? '24-48h Casablanca' : '4-5 jours'}
              </span>
            </div>

            {/* Product summary recap */}
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-800 bg-slate-900">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs space-y-0.5 text-slate-300 min-w-0 flex-1">
                <div className="font-bold text-white text-sm truncate">
                  {currentProduct.title[currentLang]}
                </div>
                <div className="text-slate-400 text-[11px] truncate">
                  {currentProduct.formats.find((f) => f.id === selectedFormatId)?.label}
                </div>
                <div className="text-slate-400 text-[10px] truncate">
                  {currentProduct.papers.find((p) => p.id === selectedPaperId)?.name}
                </div>
              </div>
              {selectedFinishes.length > 0 && (
                <div className="text-cyan-400 text-[11px] pt-1">
                  + {selectedFinishes.length} finition(s) de prestige
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              
              <div className="flex items-center justify-between text-slate-400">
                <span>{t.estimator.unitPrice[currentLang]}</span>
                <span className="font-mono text-white font-semibold text-sm tabular-nums">
                  {pricing.unitPriceHT.toFixed(2)} MAD HT
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <span>Quantité sélectionnée</span>
                <span className="font-mono text-white tabular-nums">
                  {quantity.toLocaleString()} ex.
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <span>{t.estimator.totalHT[currentLang]}</span>
                <span className="font-mono text-lg font-bold text-white tabular-nums">
                  {pricing.totalHT.toLocaleString()} MAD
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>TVA 20% (Récupérable)</span>
                <span className="font-mono tabular-nums">
                  {pricing.tva20.toLocaleString()} MAD
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="font-bold text-slate-200">Total TTC</span>
                <span className="font-mono text-xl font-extrabold text-cyan-400 tabular-nums">
                  {pricing.totalTTC.toLocaleString()} MAD
                </span>
              </div>

            </div>

            {/* Guarantee Note */}
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {t.estimator.vatNotice[currentLang]}
            </p>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() =>
                  onOpenQuoteWithConfig({
                    productId: selectedProductId,
                    formatId: selectedFormatId,
                    paperId: selectedPaperId,
                    finishes: selectedFinishes,
                    quantity,
                    turnaround,
                  })
                }
                className="w-full py-3.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{t.estimator.ctaOrderNow[currentLang]}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={() => onOpenConfigurator(selectedProductId)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs rounded-xl border border-slate-800 transition-colors"
              >
                {t.estimator.ctaCustomize[currentLang]}
              </button>
            </div>

            <div className="pt-3 border-t border-slate-900 flex items-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Contrôle prépresse PAO & BAT certifié inclus sans frais</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
