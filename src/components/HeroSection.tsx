import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, Award, ChevronRight, Eye } from 'lucide-react';
import { CONTACT_INFO, FLEET_DATA, buildQuickWhatsAppUrl } from '../data/cabData';
import { Vehicle } from '../types/cab';

interface HeroSectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onPreviewImage: (src: string, title: string) => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectVehicle,
  onPreviewImage,
  onScrollToCalculator,
}) => {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);
  const activeCar = FLEET_DATA[selectedHeroIndex];

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-neutral-800/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Trust & Direct CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              24/7 Verified Chauffeur & Taxi Service
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Shidara Cab Service <br />
              <span className="text-amber-400">Reliable Rides, Any Time.</span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Book spotless AC cabs for city pickups, terminal airport transfers, and long-distance outstation travel across India. Transparent per-km rates with zero surge pricing.
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sanitized Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast 10-Min Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={buildQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-[#FFCC00] text-black hover:bg-[#e6b800] transition-all transform active:scale-95 shadow-lg shadow-amber-400/20 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-black text-black" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white transition-colors text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Car Selector pills */}
            <div className="pt-4 border-t border-neutral-800">
              <div className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-2">
                Quick View Our Fleet:
              </div>
              <div className="flex flex-wrap gap-2">
                {FLEET_DATA.map((car, index) => (
                  <button
                    key={car.id}
                    onClick={() => setSelectedHeroIndex(index)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedHeroIndex === index
                        ? 'bg-amber-400 text-black shadow-sm font-bold'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    {car.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured Car Graphic Card */}
          <div className="lg:col-span-6">
            <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl relative group">
              {/* Image with zoom overlay button */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img
                  src={activeCar.imageSrc}
                  alt={activeCar.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Click to expand badge */}
                <button
                  onClick={() => onPreviewImage(activeCar.imageSrc, activeCar.name)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm transition-all"
                  title="View full poster"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">View Poster</span>
                </button>

                {/* Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-amber-400 text-black text-xs font-extrabold uppercase tracking-wide">
                  {activeCar.badge || 'Available Now'}
                </div>
              </div>

              {/* Specs & Booking footer */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeCar.name}</h3>
                    <p className="text-xs text-amber-400 font-medium">{activeCar.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 block">Starting From</span>
                    <span className="text-lg font-extrabold text-white">₹{activeCar.perMileRate}</span>
                    <span className="text-xs text-neutral-400"> / km</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-300 py-2 border-y border-neutral-800">
                  <span>👥 {activeCar.passengers} Seats</span>
                  <span>🧳 {activeCar.luggage} Bags</span>
                  <span>❄️ Chilled AC</span>
                  <span>🛡️ Sanitized</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectVehicle(activeCar);
                      onScrollToCalculator();
                    }}
                    className="flex-1 py-2.5 rounded-xl font-bold bg-[#FFCC00] text-black hover:bg-[#e6b800] transition-colors text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Calculate Fare & Book</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Shidara Cab, I want to book ${activeCar.name} (${activeCar.category}). Please share availability and best price.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                    title="Direct WhatsApp for this car"
                  >
                    <MessageCircle className="w-5 h-5 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
