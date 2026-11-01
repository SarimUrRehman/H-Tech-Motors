/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleClearSelectedService = () => {
    setSelectedService('');
  };

  const handleBookServiceFromHero = () => {
    setSelectedService('');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101214] text-[#A7AEB8] flex flex-col font-sans selection:bg-[#FF6B1A] selection:text-[#101214]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area - Exactly 5 Sections */}
      <main className="flex-1 w-full" id="main-content">
        {/* Section 1: Hero */}
        <HeroSection onBookServiceClick={handleBookServiceFromHero} />

        {/* Section 2: Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 3: Why Choose Us + Our Shop */}
        <WhyUsSection />

        {/* Section 4: Reviews */}
        <ReviewsSection />

        {/* Section 5: Contact & Booking */}
        <ContactSection
          selectedService={selectedService}
          onClearSelectedService={handleClearSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call Button & Back to Top */}
      <FloatingControls />
    </div>
  );
}
