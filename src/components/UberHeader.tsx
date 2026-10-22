import React from 'react';
import { Phone, MessageSquare, Car } from 'lucide-react';
import { CONTACT_INFO, buildQuickWhatsAppUrl } from '../data/cabData';

interface UberHeaderProps {
  activeTab: 'city' | 'outstation' | 'airport';
  onTabChange: (tab: 'city' | 'outstation' | 'airport') => void;
  onOpenFleet: () => void;
}

export const UberHeader: React.FC<UberHeaderProps> = ({ activeTab, onTabChange, onOpenFleet }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Lockup */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a href="/" className="flex items-center gap-2 select-none group">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-black">
              Shidara
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase bg-black text-white px-2 py-0.5 rounded-sm">
              CAB
            </span>
          </a>

          {/* Desktop Tab Switcher */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl">
            <button
              type="button"
              onClick={() => onTabChange('city')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'city'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              City Ride
            </button>
            <button
              type="button"
              onClick={() => onTabChange('outstation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'outstation'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Outstation
            </button>
            <button
              type="button"
              onClick={() => onTabChange('airport')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'airport'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Airport Drop
            </button>
          </nav>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Fleet Button */}
          <button
            type="button"
            onClick={onOpenFleet}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full border border-neutral-300 hover:border-black text-black text-xs font-bold transition-colors cursor-pointer"
            title="View all cars and rates"
          >
            <Car className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Fleet & Rates</span>
            <span className="sm:hidden">Cars</span>
          </button>

          {/* Call Dispatch Button */}
          <a
            href={`tel:${CONTACT_INFO.phoneClean}`}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-neutral-300 hover:border-black text-black text-xs font-bold font-mono transition-colors"
            title={`Call dispatch: ${CONTACT_INFO.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">{CONTACT_INFO.phoneDisplay}</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={buildQuickWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all active:scale-95 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white text-black shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
