import React from 'react';
import { ShieldCheck, Clock, Award, ThumbsUp, DollarSign, UserCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: DollarSign,
      title: 'Zero Surge Pricing',
      desc: 'Transparent per-kilometer rates calculated in INR. No peak hour surge penalties or rain surges.',
    },
    {
      icon: Clock,
      title: '24/7 Round-the-Clock Service',
      desc: 'Late-night airport drops, emergency hospital rides, or early dawn trips—drivers available at any hour.',
    },
    {
      icon: UserCheck,
      title: 'Polite & Verified Chauffeurs',
      desc: 'Experienced highway professionals with complete background verification and polite etiquette.',
    },
    {
      icon: ShieldCheck,
      title: 'Sanitized & Chilled AC Cabs',
      desc: 'Spotlessly cleaned interior, fresh fragrance, working seat belts, and ice-cold air conditioning.',
    },
    {
      icon: Award,
      title: 'Toyota Rumion & Innova Specialists',
      desc: 'Specialized 7-seater MPVs for long-distance family tours and airport luggage comfort.',
    },
    {
      icon: ThumbsUp,
      title: 'Direct WhatsApp Confirmation',
      desc: 'No confusing app delays or cancellations. Connect directly with our dispatch desk on 07575800775.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">
            Why Choose Shidara Cab
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-3">
            Your Trusted Ride Partner
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            We prioritize passenger comfort, punctuality, and straightforward transparent rates on every single trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pt.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
