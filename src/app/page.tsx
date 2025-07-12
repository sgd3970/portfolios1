import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechPartnersSection from '@/components/TechPartnersSection';
import AboutVisionSection from '@/components/AboutVisionSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Tech Stack & Partners Section */}
      <TechPartnersSection />
      
      {/* About & Vision Section */}
      <AboutVisionSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
