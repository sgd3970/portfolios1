'use client';

import React, { useEffect, useRef } from 'react';

interface TechItem {
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools';
}

const TechPartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const techStack: TechItem[] = [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'frontend'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      category: 'frontend'
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      category: 'frontend'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      category: 'backend'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      category: 'backend'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      category: 'database'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      category: 'database'
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      category: 'cloud'
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      category: 'tools'
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      category: 'tools'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      category: 'tools'
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      category: 'cloud'
    }
  ];

  const partners = [
    {
      name: 'Google Cloud',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Vercel',
      logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png'
    }
  ];

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
      className="py-20 bg-white"
      id="tech-partners"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            기술 스택 & 파트너사
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            최신 기술과 신뢰할 수 있는 파트너사들과 함께 
            최고의 솔루션을 제공합니다.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Tech Stack
          </h3>
          
          {/* Tech categories */}
          <div className="space-y-12">
            {/* Frontend */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-6">
                Frontend
              </h4>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {techStack
                  .filter(tech => tech.category === 'frontend')
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Backend */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-6">
                Backend
              </h4>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {techStack
                  .filter(tech => tech.category === 'backend')
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-6">
                Database & Cloud
              </h4>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {techStack
                  .filter(tech => tech.category === 'database' || tech.category === 'cloud')
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Tools */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-6">
                Tools
              </h4>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {techStack
                  .filter(tech => tech.category === 'tools')
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Partners
          </h3>
          
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite scroll animation (optional) */}
        <div className="mt-16 overflow-hidden">
          <div className="flex items-center justify-center space-x-8 animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-30"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-100%) }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechPartnersSection; 