'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'tech-partners', label: 'Tech Stack', href: '#tech-partners' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                TechFlow
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mt-1 rounded-b-lg shadow-lg">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 