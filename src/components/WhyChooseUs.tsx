import { CheckCircle, Users, Globe, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useCountUp } from '../hooks/useCountUp';
import { useEffect, useRef } from 'react';
import { images } from "../assets/images";


export default function WhyChooseUs() {
  const { count: deliveries, startCounting: startDeliveries } = useCountUp(500, 2000);
  const { count: countries, startCounting: startCountries } = useCountUp(150, 2000);
  const { count: logistics, startCounting: startLogistics } = useCountUp(1000, 2000);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startDeliveries();
            startCountries();
            startLogistics();
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
  }, [startDeliveries, startCountries, startLogistics]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                
                <img src={images.ISPSImg} alt="Logistics Team Loading Truck"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-8 left-8 bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white" />
                    </div>
                  </div>
                  <div className="text-white/80 text-sm font-medium mb-1">Years</div>
                  <div className="text-white/80 text-sm font-medium mb-3">Experience</div>
                  <div className="text-5xl font-bold text-white">25k+</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                WHY CHOOSE US
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your trusted partner for ISPS-compliant smart port solutions
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We specialize in delivering integrated port automation and security solutions port authorities can rely on. With a global deployment network, advanced command and control systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 font-medium">Reliable Port Operations You Can Trust Always</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={350}>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 font-medium">Delivering Excellence Across Every Port Environment</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 font-medium">Smart Technology for Smarter Port Operations</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={450}>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 font-medium">Experienced Port Infrastructure Management Team</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={500}>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 font-medium">Customized Systems Tailored to Your Port Needs</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={550}>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 font-medium">Compliant, Integrated Smart Port Solutions</p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <AnimatedSection animation="scale-in" delay={600}>
                  <div className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 mb-3 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Users className="w-7 h-7" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{deliveries}+</div>
                    <div className="text-sm text-gray-600">Security Personnel</div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={650}>
                  <div className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 mb-3 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Globe className="w-7 h-7" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{countries}+</div>
                    <div className="text-sm text-gray-600">Ports Secured</div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={700}>
                  <div className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-500 mb-3 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Shield className="w-7 h-7" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{logistics}+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-up" delay={750}>
                <a
                  href="#about"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 inline-flex"
                >
                  Read More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
