import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MessageSquareText } from 'lucide-react';

interface WhatsAppButtonProps {
  currentLang: Language;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ currentLang }) => {
  const t = translations;
  const message = encodeURIComponent(t.nav.whatsappText[currentLang]);
  const whatsappUrl = `https://wa.me/212661111947?text=${message}`;

  return (
    <aside aria-label="Support WhatsApp" className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group text-xs font-semibold"
        title="Contacter PIXORA sur WhatsApp"
        aria-label="Contacter l'atelier PIXORA directement sur WhatsApp"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <MessageSquareText className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </div>
        <span className="hidden sm:inline-block pr-1 rtl:pr-0 rtl:pl-1">
          WhatsApp Direct
        </span>
      </a>
    </aside>
  );
};
