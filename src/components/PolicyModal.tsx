import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabData';

export type PolicyType = 'terms' | 'privacy' | 'refund' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 max-h-[85vh] flex flex-col text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-lg text-neutral-900">
              {type === 'terms' && 'Terms of Service & Passenger Safety'}
              {type === 'privacy' && 'Privacy Policy & Data Security'}
              {type === 'refund' && 'Cancellation, Refund & Pricing Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-black transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-neutral-700 leading-relaxed custom-scrollbar">
          {type === 'terms' && (
            <>
              <p>
                <strong>Welcome to {CONTACT_INFO.name}.</strong> By booking our cab service via phone, WhatsApp, or website, you agree to our standard transport terms.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">1. Booking & Driver Dispatch</h4>
              <p>
                Bookings are confirmed upon mutual agreement of route, vehicle type, and estimated fare. Our verified commercial chauffeur details (name, vehicle number, phone number) are dispatched prior to pickup.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">2. Passenger Safety & Vehicle Care</h4>
              <p>
                All our vehicles (Toyota Rumion, Innova Crysta, Maruti Dzire, WagonR) are commercial registered, fully insured, sanitized, and GPS monitored. Smoking or carrying prohibited hazardous substances inside the cab is strictly prohibited.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">3. Outstation & Night Travel</h4>
              <p>
                For outstation trips exceeding 250 km per day or late-night travel, driver allowance is included in standard quotes. Tolls, state permits, and municipal parking are paid as per actual receipts.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong>{CONTACT_INFO.name}</strong> values your privacy. This policy describes how we collect, use, and safeguard personal information provided during cab booking.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">1. Information We Collect</h4>
              <p>
                We only collect essential details necessary to fulfill your ride: your name, phone number, pickup/drop location, travel date, time, and flight number (for airport transfers).
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">2. Use of Information</h4>
              <p>
                Your phone number and coordinates are strictly used to coordinate driver dispatch and share ride tracking. We do not sell, rent, or share personal data with third-party advertisers.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">3. Contact Us</h4>
              <p>
                For privacy inquiries or data removal, please reach out to our administration desk at <a href={`mailto:${CONTACT_INFO.email}`} className="text-amber-600 font-semibold underline">{CONTACT_INFO.email}</a> or call {CONTACT_INFO.phoneDisplay}.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                <strong>Transparent Pricing & Flexible Cancellation Guarantee.</strong>
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">1. Free Cancellation Before Chauffeur Arrival</h4>
              <p>
                You may cancel your booking free of charge up to 1 hour before scheduled pickup time. No cancellation penalty is levied.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">2. Transparent INR Pricing</h4>
              <p>
                Our billing is based on transparent base fare and per-kilometer rates. There are zero surge pricing multipliers during peak hours or rainy weather.
              </p>
              <h4 className="font-bold text-neutral-900 pt-2">3. Refund Processing</h4>
              <p>
                In the rare event of advance payment cancellation, 100% of the advance amount is refunded via original UPI or bank transfer within 24 hours.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500">
            Registered Service Hub: {CONTACT_INFO.fullAddress} · 24/7 Hotline: {CONTACT_INFO.phoneDisplay}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-neutral-900 text-white hover:bg-black transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
