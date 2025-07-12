'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  detailedDescription: string;
  features: string[];
  image: string;
}

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 'web-development',
      title: '웹 개발',
      shortDescription: '모던한 웹 애플리케이션 개발과 최적화된 사용자 경험을 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      detailedDescription: '최신 웹 기술과 프레임워크를 활용하여 반응형, 성능 최적화된 웹 애플리케이션을 개발합니다.',
      features: [
        'React, Next.js 기반 프론트엔드 개발',
        'Node.js, Express 백엔드 API 개발',
        'MongoDB, PostgreSQL 데이터베이스 설계',
        '반응형 디자인 및 모바일 최적화',
        'SEO 최적화 및 성능 튜닝'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    },
    {
      id: 'mobile-app',
      title: '모바일 앱',
      shortDescription: '네이티브와 크로스 플랫폼 모바일 애플리케이션을 개발합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      detailedDescription: 'iOS와 Android 플랫폼을 위한 고성능 모바일 애플리케이션을 개발하고 앱스토어 출시까지 지원합니다.',
      features: [
        'React Native 크로스 플랫폼 개발',
        'Swift/Kotlin 네이티브 개발',
        'UI/UX 디자인 및 프로토타이핑',
        'Push 알림 및 백그라운드 처리',
        '앱스토어 출시 및 유지보수'
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 'cloud-infrastructure',
      title: '클라우드 인프라',
      shortDescription: '확장 가능한 클라우드 인프라 설계와 DevOps 솔루션을 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
        </svg>
      ),
      detailedDescription: 'AWS, Azure, GCP 등 주요 클라우드 플랫폼에서 안정적이고 확장 가능한 인프라를 구축합니다.',
      features: [
        'AWS/Azure/GCP 클라우드 아키텍처 설계',
        'Docker/Kubernetes 컨테이너 오케스트레이션',
        'CI/CD 파이프라인 구축',
        '모니터링 및 로깅 시스템',
        '보안 및 백업 전략 수립'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
    },
    {
      id: 'ai-ml',
      title: 'AI/ML 솔루션',
      shortDescription: '인공지능과 머신러닝을 활용한 맞춤형 비즈니스 솔루션을 개발합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      detailedDescription: '최신 AI/ML 기술을 활용하여 데이터 분석, 예측 모델링, 자동화 솔루션을 제공합니다.',
      features: [
        'Python/TensorFlow/PyTorch 기반 개발',
        '데이터 분석 및 시각화',
        '예측 모델링 및 추천 시스템',
        'NLP 및 컴퓨터 비전 솔루션',
        'MLOps 파이프라인 구축'
      ],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 bg-gray-100"
        id="services"
      >
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              최첨단 기술과 풍부한 경험을 바탕으로 비즈니스 성공을 위한 
              맞춤형 솔루션을 제공합니다.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                onClick={() => openModal(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="mt-6 flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                    <span>자세히 보기</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                  />
                  <div className="absolute inset-0 bg-primary-500/20 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-primary-500 mr-4">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedService.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      주요 기능
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={closeModal}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    문의하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection; 