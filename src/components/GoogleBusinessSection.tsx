import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Star, ExternalLink, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';
import { CONTACT_INFO, SERVICE_AREAS } from '../data/cabData';

export const GoogleBusinessSection: React.FC = () => {
  return (
    <section id="google-business" className="py-16 sm:py-24 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-neutral-800/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </span>
            <span className="text-white font-extrabold ml-1">4.9 / 5.0</span>
            <span className="text-neutral-400 font-normal">({CONTACT_INFO.reviewsCount} Verified Google Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Google Maps & Local Business Profile
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Official dispatch headquarters for <span className="text-amber-400 font-semibold">{CONTACT_INFO.name}</span>. Fast 10-minute doorstep pickups, 24/7 airport transfers, and outstation trips.
          </p>
        </div>

        {/* 2-Column NAP & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Official NAP (Name, Address, Phone) & GMB Card (6 cols) */}
          <div className="lg:col-span-6 bg-neutral-950 rounded-3xl p-6 sm:p-8 border border-neutral-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              {/* Badge & Business Name */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={CONTACT_INFO.logoSrc}
                      alt={CONTACT_INFO.name}
                      className="h-9 w-auto object-contain bg-white/5 p-1 rounded-lg"
                    />
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Local Business
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400">Category: <strong className="text-white">Taxi & Cab Service</strong></span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {CONTACT_INFO.name}
                </h3>
                <p className="text-xs text-amber-400 font-medium mt-0.5">
                  Commercial Chauffeur & 24/7 Taxi Dispatch Hub
                </p>
              </div>

              {/* Exact NAP Details */}
              <div className="space-y-3.5 border-t border-b border-neutral-800 py-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Official Registered Address:</strong>
                    <span className="text-neutral-300 text-xs sm:text-sm">{CONTACT_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Direct Hotline & Dispatch:</strong>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-amber-400 font-bold hover:underline">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                      <span className="text-neutral-500">|</span>
                      <a href={CONTACT_INFO.whatsappUrlBase} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp: {CONTACT_INFO.phoneFormatted}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Operating Hours:</strong>
                    <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                      {CONTACT_INFO.operatingHours} (Open Monday through Sunday, 24 Hours)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Payment Methods Accepted:</strong>
                    <span className="text-neutral-400 text-xs">
                      Cash, UPI, Google Pay, PhonePe, Paytm, IMPS / Net Banking
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={CONTACT_INFO.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-[#FFCC00] hover:bg-[#e6b800] text-black text-sm transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4 fill-black" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-neutral-800 hover:bg-neutral-700 text-white text-sm transition-colors border border-neutral-700"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Chauffeur: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Note on Google Business Profile verification */}
            <div className="mt-5 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
              * Shidara Cab Service is compliant with all local taxi regulations, commercial transport permits, and GPS safety tracking across Gujarat and India.
            </div>
          </div>

          {/* Right: Embedded Interactive Map & Local Hub Pin (6 cols) */}
          <div className="lg:col-span-6 bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col shadow-xl">
            {/* Map Header Bar */}
            <div className="px-5 py-3.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Live Google Maps Service Coverage</span>
              </div>
              <a
                href={CONTACT_INFO.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="w-full flex-1 min-h-[300px] sm:min-h-[350px] relative bg-neutral-900">
              <iframe
                title="Shidara Cab Service Location & Hub Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117502.94613277085!2d72.48396752763294!3d23.02015808722889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] grayscale-[15%] contrast-105"
              />
            </div>

            {/* Bottom Service Area Badges */}
            <div className="p-4 bg-neutral-950 border-t border-neutral-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Primary Local Dispatch Points:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Ahmedabad Airport', 'Kalupur Station', 'Gandhinagar GIFT City', 'Vadodara', 'Surat', 'Rajkot', 'Statue of Unity', 'Udaipur / Mumbai Highway'].map((loc, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium"
                  >
                    📍 {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Local Service Area Coverage Breakdown (Crucial for Local SEO Ranking) */}
        <div id="service-areas" className="mt-14 pt-10 border-t border-neutral-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Complete Gujarat & Interstate Coverage
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Popular Routes & Service Hubs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Guaranteed cab availability for both one-way drops and return tour packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-base">{area.city}</h4>
                  <span className="text-[11px] font-semibold text-amber-400">{area.state}</span>
                </div>
                <div className="space-y-1">
                  {area.hubs.map((hub, hIdx) => (
                    <div key={hIdx} className="text-xs text-neutral-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-400/80" />
                      <span>{hub}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
