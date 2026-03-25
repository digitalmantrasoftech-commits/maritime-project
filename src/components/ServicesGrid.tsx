import { Camera, ShieldAlert, Warehouse, Globe, Headphones, Shield, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useCountUp } from '../hooks/useCountUp';
import { useEffect, useRef } from 'react';

export default function ServicesGrid() {
  const { count: countriesCount, startCounting: startCountries } = useCountUp(5, 2000);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountries();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [startCountries]);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(249,115,22,0.03),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <ShieldAlert className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Port Security & Surveillance Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Real-time monitoring and advanced systems ensure safe, efficient operations and ISPS compliance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  CCTV Surveillance Systems
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  Perimeter Intrusion Detection
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Globe className="w-4 h-4" />
                  Global Network Coverage
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white shadow-lg" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-lg" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white shadow-lg" />
                  </div>
                </div>

                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  ISPS-compliant security solutions through trusted partners & robust systems
                </p>

                <div className="text-6xl font-bold text-white mb-2">{countriesCount}+</div>
                <div className="text-white/80 font-medium">Countries Served</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology-Driven Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart systems and digital management for complete security visibility.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Customer Support</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 support for seamless system integration and maintenance.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CCTV Surveillance Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous surveillance for enhanced security and operations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Warehouse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Port Security & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete surveillance and access control solutions for full ISPS compliance.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={700}>
          <div className="mt-16 text-center">
            <p className="text-gray-700 text-lg mb-2">
              Securing ports worldwide with cutting-edge surveillance and compliance solutions.{' '}
              <a href="#contact" className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-all">
                Get Started
              </a>
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-gray-900">4.9/5</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
              <span className="text-gray-600 font-medium">Our 4200 Review</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
