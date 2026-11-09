import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQ_DATA, CONTACT_INFO } from '../data/cabData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white text-black border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Common Traveler Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base">
            Everything you need to know about booking, transparent INR rates, and luggage rules.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-all bg-neutral-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-amber-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100 pt-3 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-10 p-6 bg-neutral-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-lg">Have a specific route or group enquiry?</h4>
            <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
              Our 24/7 dispatch desk is ready to assist you right now.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrlBase}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FFCC00] text-black hover:bg-[#e6b800] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors flex items-center gap-1.5 border border-neutral-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
