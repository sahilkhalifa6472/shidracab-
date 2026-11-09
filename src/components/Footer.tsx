import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabData';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onOpenPolicy?: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer id="contact" className="bg-black text-white border-t border-neutral-800">
      {/* Top Banner CTA */}
      <div className="bg-amber-400 text-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Book Your Ride?
            </h3>
            <p className="text-neutral-900 text-sm sm:text-base font-medium mt-1">
              Contact us on WhatsApp or Call directly for instant driver allocation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrlBase}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-extrabold bg-black text-white hover:bg-neutral-800 transition-colors flex items-center gap-2 text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-amber-400" />
              <span>WhatsApp Booking</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="px-6 py-3.5 rounded-xl font-extrabold bg-white text-black hover:bg-neutral-100 transition-colors flex items-center gap-2 text-sm shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & About */}
          <div className="md:col-span-1 space-y-4">
            <img
              src={CONTACT_INFO.logoSrc}
              alt="Shidara CAB"
              className="h-10 w-auto object-contain bg-white/5 p-1 rounded-lg"
            />
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Shidara Cab Service is a verified 24/7 taxi and chauffeur agency providing local city rides, airport transfers, and outstation family tours across Gujarat and India at transparent INR rates.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <Clock className="w-4 h-4" />
              <span>{CONTACT_INFO.operatingHours}</span>
            </div>
            
            {/* Google Rating Snippet */}
            <a
              href={CONTACT_INFO.googleMapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs hover:border-amber-400/50 transition-colors"
            >
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </span>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-neutral-400">Google Reviews</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Our Fleet
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">Toyota Rumion (7-Seater)</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">Toyota Innova Crysta</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">Maruti Dzire Sedan</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">WagonR / Swift Hatchback</a></li>
              <li><a href="#rates" className="hover:text-amber-400 transition-colors">Complete Rate Card</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Instant Fare Estimator</a></li>
            </ul>
          </div>

          {/* Services & Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Services & Hubs
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Local City Cabs</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Airport Transfers (AMD/STV)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Outstation Round Trips</a></li>
              <li><a href="#service-areas" className="hover:text-amber-400 transition-colors">Service Areas in Gujarat</a></li>
              <li><a href="#google-business" className="hover:text-amber-400 transition-colors">Google Maps Headquarters</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact Details & Official NAP */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Official NAP & Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Dispatch Hub:</span>
                  <span className="text-xs text-neutral-300">{CONTACT_INFO.fullAddress}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phoneClean}`} className="hover:text-white font-bold text-white block">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-neutral-400">24/7 Instant Chauffeur Line</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={CONTACT_INFO.whatsappUrlBase} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  WhatsApp: {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white text-xs">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Trust Policies - Critical for Google Business Profile Instant Approval */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenPolicy?.('terms')}
              className="hover:text-neutral-200 transition-colors underline-offset-2 hover:underline"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenPolicy?.('privacy')}
              className="hover:text-neutral-200 transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy?.('refund')}
              className="hover:text-neutral-200 transition-colors underline-offset-2 hover:underline"
            >
              Cancellation & Refund Policy
            </button>
            <a
              href={CONTACT_INFO.googleMapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 text-amber-500 font-semibold flex items-center gap-1"
            >
              <span>Google Maps Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

