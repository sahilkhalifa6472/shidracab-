import React from 'react';
import { Plane, Compass, Building2, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabData';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Clock,
      title: 'City Cabs & Local Rental',
      price: 'Starting ₹399',
      desc: 'Quick 10-15 minute doorstep pickup for daily commutes, shopping trips, hospital visits, and local errands across the city.',
      features: ['Door-to-door pickup', 'Clean sanitized AC', 'Flexible hourly waiting'],
    },
    {
      icon: Plane,
      title: 'Airport Transfer (Pickup & Drop)',
      price: 'Fixed Fair Rates',
      desc: 'Punctual, guaranteed on-time terminal drop-offs and flight arrival pickups with flight delay tracking and luggage assistance.',
      features: ['Flight tracking included', 'Free 30-min wait time', 'Extra luggage space'],
    },
    {
      icon: Compass,
      title: 'Outstation & Intercity Tours',
      price: 'From ₹11 / km',
      desc: 'Specialized one-way drops and family round-trips. Spacious Toyota Rumion and Innova Crysta with verified highway chauffeurs.',
      features: ['One-way & round trip', 'Comfortable reclining seats', 'Zero hidden fees'],
    },
    {
      icon: Building2,
      title: 'VIP & Corporate Chauffeur',
      price: 'Custom Daily Packages',
      desc: 'Executive travel for business delegates, corporate meetings, wedding guests, and luxury private transfers.',
      features: ['Premium Innova Crysta', 'Professional uniformed driver', 'GST billing invoices'],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">
            Full Service Cab Agency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-3">
            Tailored Cab Services For Every Journey
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            From short city hops to 500+ km interstate road tours, Shidara Cab is at your service 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between hover:border-amber-400/50 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{srv.title}</h3>
                  <span className="text-xs font-bold text-amber-400 block mb-3">{srv.price}</span>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {srv.desc}
                  </p>

                  <ul className="space-y-1.5 border-t border-neutral-800 pt-3 mb-5">
                    {srv.features.map((f, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Shidara Cab, I need service for: ${srv.title}. Please provide pricing and booking details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Book This Service</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
