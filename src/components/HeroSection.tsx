'use client';

import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-background-with-flowing-particles-31565-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/90 to-white/95"></div>
      </div>

      {/* Abstract geometric patterns */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-mint-100 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gray-100 rounded-full opacity-25 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">혁신적인</span>
            <span className="block text-primary-500">기술 솔루션</span>
            <span className="block">제공합니다</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            TechFlow Solutions는 최첨단 기술과 창의적 아이디어로
            <br />
            비즈니스의 새로운 가능성을 열어갑니다.
          </p>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              프로젝트 시작하기
            </button>
            <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              포트폴리오 보기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 