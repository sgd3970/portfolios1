'use client';

import React, { useEffect, useRef } from 'react';

const AboutVisionSection: React.FC = () => {
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

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-100"
      id="about"
    >
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <div className="w-20 h-1 bg-primary-500 mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">TechFlow Solutions</strong>는 
                2019년 설립된 혁신적인 기술 기업으로, 
                최첨단 디지털 솔루션을 통해 클라이언트의 비즈니스 성장을 돕습니다.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                우리는 단순한 기술 구현을 넘어서, 
                사용자 경험과 비즈니스 가치를 동시에 극대화하는 솔루션을 제공합니다. 
                모든 프로젝트에 대한 깊은 이해와 창의적 접근을 통해 
                클라이언트의 기대를 뛰어넘는 결과를 만들어냅니다.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                지속적인 기술 연구와 개발을 통해 
                미래 지향적인 솔루션을 제공하며, 
                고객과 함께 성장하는 파트너가 되기 위해 노력합니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
                <div className="text-sm text-gray-700">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">5년</div>
                <div className="text-sm text-gray-700">업계 경험</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
                <div className="text-sm text-gray-700">고객 만족도</div>
              </div>
            </div>
          </div>

          {/* Right side - Team image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="TechFlow Solutions 팀"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-mint-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-primary-500">15+</div>
                <div className="text-xs text-gray-700">전문가</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Office image */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="TechFlow Solutions 사무실"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-mint-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating quote */}
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="text-sm text-gray-700 italic">
                &ldquo;혁신적인 기술로 더 나은 미래를 만들어갑니다&rdquo;
              </div>
              <div className="text-xs text-gray-500 mt-2">- CEO, TechFlow Solutions</div>
            </div>
          </div>

          {/* Right side - Vision content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <div className="w-20 h-1 bg-mint-500 mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                기술로 연결하는 무한한 가능성
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                우리는 기술이 단순한 도구가 아닌, 
                사람과 비즈니스를 연결하고 새로운 가치를 창출하는 
                강력한 매개체라고 믿습니다.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                끊임없는 혁신과 창의적 사고를 통해 
                고객의 비즈니스가 한 단계 더 성장할 수 있도록 돕고, 
                더 나은 디지털 생태계를 구축하는 것이 우리의 목표입니다.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">혁신</h4>
                  <p className="text-sm text-gray-700">끊임없는 기술 발전과 창의적 솔루션</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mint-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-mint-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">협력</h4>
                  <p className="text-sm text-gray-700">고객과 함께 성장하는 파트너십</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">품질</h4>
                  <p className="text-sm text-gray-700">최고 수준의 기술력과 서비스</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mint-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-mint-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">성장</h4>
                  <p className="text-sm text-gray-700">지속적인 학습과 발전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection; 