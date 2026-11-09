import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, buildQuickWhatsAppUrl } from '../data/cabData';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${CONTACT_INFO.phoneClean}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold bg-neutral-900 text-white text-xs active:scale-95 transition-transform shadow-sm"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call: {CONTACT_INFO.phoneDisplay}</span>
        </a>

        <a
          href={buildQuickWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold bg-[#FFCC00] text-black text-xs active:scale-95 transition-transform shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-black text-black" />
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </div>
  );
};
