import React from 'react';
import { Users, Briefcase, Snowflake, CheckCircle2, MessageCircle, Calculator, Eye, Sparkles } from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO } from '../data/cabData';
import { Vehicle } from '../types/cab';

interface FleetSectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onPreviewImage: (src: string, title: string) => void;
  onScrollToCalculator: () => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  onSelectVehicle,
  onPreviewImage,
  onScrollToCalculator,
}) => {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-neutral-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Verified Commercial Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our Vehicle Portfolio & Rates
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            Choose from well-maintained, sanitized hatchbacks, sedans, and luxury MPVs. Every car includes professional drivers, dual AC, and transparent per-km billing.
          </p>
        </div>

        {/* 4 Vehicle Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FLEET_DATA.map((vehicle) => {
            const whatsAppBookingUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Shidara Cab Service, I want to book ${vehicle.name} (${vehicle.category}). Base fare: ₹${vehicle.baseFare}, Per km: ₹${vehicle.perMileRate}. Please confirm driver availability.`
            )}`;

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Advertisement Poster Image */}
                <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                  <img
                    src={vehicle.imageSrc}
                    alt={`${vehicle.name} - ${vehicle.category}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-4 left-4 bg-amber-400 text-black text-xs font-extrabold px-3 py-1 rounded-lg shadow-md uppercase tracking-wide">
                      {vehicle.badge}
                    </div>
                  )}

                  {/* High-res poster preview button */}
                  <button
                    onClick={() => onPreviewImage(vehicle.imageSrc, `${vehicle.name} (${vehicle.category})`)}
                    className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 transition-all opacity-90 group-hover:opacity-100"
                    title="View Full Poster"
                  >
                    <Eye className="w-4 h-4 text-amber-400" />
                    <span className="hidden sm:inline">Preview Image</span>
                  </button>

                  {/* Pricing Pill Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="bg-neutral-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                      Base Fare: ₹{vehicle.baseFare}
                    </span>
                    <span className="bg-amber-400 text-black text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-sm">
                      ₹{vehicle.perMileRate} / km
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header info */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                          {vehicle.name}
                        </h3>
                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                          {vehicle.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {vehicle.tagline}
                    </p>

                    {/* Capacity Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-100 text-xs sm:text-sm text-neutral-700 font-medium mb-4">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{vehicle.passengers} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{vehicle.luggage} Bags</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Snowflake className="w-4 h-4 text-sky-500 shrink-0" />
                        <span>Chilled AC</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6">
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-2.5">
                    <a
                      href={whatsAppBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold bg-[#FFCC00] hover:bg-[#e6b800] text-black transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Book on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        onSelectVehicle(vehicle);
                        onScrollToCalculator();
                      }}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors flex items-center justify-center gap-1.5 text-sm"
                    >
                      <Calculator className="w-4 h-4 text-neutral-600" />
                      <span>Estimate Fare</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
