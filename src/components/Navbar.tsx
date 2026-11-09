import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/cabData';

interface NavbarProps {
  onSelectBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Fare Calculator', href: '#calculator' },
    { label: 'Services', href: '#services' },
    { label: 'Rate Card', href: '#rates' },
    { label: 'Google Maps Hub', href: '#google-business' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={CONTACT_INFO.logoSrc}
              alt="Shidara CAB"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-black transition-colors py-2 border-b-2 border-transparent hover:border-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-800" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrlBase}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#FFCC00] hover:bg-[#e6b800] transition-transform active:scale-95 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="p-2 rounded-lg bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
              aria-label="Call Cab Service"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-black hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={CONTACT_INFO.whatsappUrlBase}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-[#FFCC00] text-black shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-black text-black" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-neutral-900 text-white"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
