import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

interface CaseStudiesProps {
  currentLang: Language;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ currentLang }) => {
  const t = translations;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
            {t.caseStudies.badge[currentLang]}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {t.caseStudies.heading[currentLang]}
          </h2>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-cyan-600/30" />
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote[currentLang]}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-950">{item.name}</div>
                  <div className="text-[11px] text-cyan-700 font-medium">{item.role}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.company}</div>
                </div>

                <div className="text-right rtl:text-left shrink-0">
                  <div className="text-xl font-extrabold text-slate-950 font-mono tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {item.metricLabel[currentLang]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
