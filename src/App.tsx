import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FleetSection } from './components/FleetSection';
import { FareCalculatorSection } from './components/FareCalculatorSection';
import { ServicesSection } from './components/ServicesSection';
import { RateCardTable } from './components/RateCardTable';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleBusinessSection } from './components/GoogleBusinessSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ImageModal } from './components/ImageModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { FLEET_DATA, CONTACT_INFO } from './data/cabData';
import { Vehicle } from './types/cab';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(FLEET_DATA[0]);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviewImage = (imageSrc: string, title: string) => {
    setModalState({
      isOpen: true,
      imageSrc,
      title,
    });
  };

  const handleModalBook = () => {
    const vehicle = FLEET_DATA.find((v) => v.imageSrc === modalState.imageSrc) || selectedVehicle;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Hello Shidara Cab, I want to book ${vehicle.name} (${vehicle.category}). Please share availability.`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-amber-400 selection:text-black flex flex-col pb-16 md:pb-0">
      {/* 1. Header Navigation */}
      <Navbar onSelectBooking={scrollToCalculator} />

      {/* 2. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Headline & Featured Poster Showcase */}
        <HeroSection
          onSelectVehicle={(v) => setSelectedVehicle(v)}
          onPreviewImage={handlePreviewImage}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Fleet Portfolio Grid with User's 4 Advertisement Posters */}
        <FleetSection
          onSelectVehicle={(v) => setSelectedVehicle(v)}
          onPreviewImage={handlePreviewImage}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Instant Fare Calculator & Direct WhatsApp Booking Form */}
        <FareCalculatorSection
          selectedVehicle={selectedVehicle}
          onSelectVehicle={(v) => setSelectedVehicle(v)}
        />

        {/* Services Showcase */}
        <ServicesSection />

        {/* Rate Card & Comparison Table */}
        <RateCardTable />

        {/* Google Business Profile & Local Google Maps Hub (Essential for GMB Verification) */}
        <GoogleBusinessSection />

        {/* Why Choose Shidara Cab (Safety & Reliability) */}
        <WhyChooseUs />

        {/* Frequently Asked Questions (FAQ) Section */}
        <FaqSection />
      </main>

      {/* Professional Footer with NAP, Google Maps Link, and Legal Policy Triggers */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Mobile Sticky Action Bar */}
      <FloatingMobileBar />

      {/* High-Res Image Lightbox Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        onBookNow={handleModalBook}
      />

      {/* Legal & Compliance Policy Modal (Terms, Privacy, Refund) */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
