import { Shield, Camera, Lock, Radio, FileCheck, AlertTriangle, Scan, Video, Ship, Phone, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ServiceCard from '../components/ServiceCard';
import ProcessSection from '../components/ProcessSection';
import StatsSection from '../components/StatsSection';
import WhatWeOffer from '../components/WhatWeOffer';
import FAQSection from '../components/FAQSection';
import AnimatedSection from '../components/AnimatedSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesGrid from '../components/ServicesGrid';
import OurJourney from '../components/OurJourney';
import SEO from '../components/SEO';
import { images } from "../assets/images";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Lock,
      title: 'Access Control Systems',
      description: 'Control and monitor personnel access across operational and restricted zones with intelligent access control systems.',
      link: '#access-control',
      onClick: () => onNavigate('access-control')
    },
    {
      icon: Camera,
      title: 'ANPR Solutions',
      description: 'Automated vehicle identification through number plate recognition cameras for fast, non-intrusive security checks.',
      link: '#anpr',
      onClick: () => onNavigate('anpr')
    },
    {
      icon: Video,
      title: 'CCTV Surveillance',
      description: 'Continuous monitoring of critical port infrastructure through integrated IP-based CCTV cameras.',
      link: '#cctv',
      onClick: () => onNavigate('cctv')
    },
    {
      icon: Radio,
      title: 'Gate Automation',
      description: 'Rule-based vehicle entry and exit through automated gate infrastructure with boom barriers and bollards.',
      link: '#gate-automation',
      onClick: () => onNavigate('gate-automation')
    },
    {
      icon: FileCheck,
      title: 'Harbour Entry Permits',
      description: 'Digital workflow for issuing, managing, and validating port entry permits and passes.',
      link: '#permits'
    },
    {
      icon: AlertTriangle,
      title: 'Perimeter Intrusion Detection',
      description: 'Automated monitoring of perimeter fencing and security boundaries for intrusion attempts.',
      link: '#pids',
      onClick: () => onNavigate('pids')
    },
    {
      icon: Scan,
      title: 'RFID Solutions',
      description: 'Automated identification and real-time tracking of vehicles, containers, and assets.',
      link: '#rfid',
      onClick: () => onNavigate('rfid')
    },
    {
      icon: Shield,
      title: 'Under Vehicle Surveillance',
      description: 'Automated inspection of vehicle underbodies at entry and exit gates for enhanced security.',
      link: '#uvss',
      onClick: () => onNavigate('uvss')
    }
  ];

  return (
    <>
      <SEO
        title="Mantra Softech - Port Security & Access Control Solutions | ANPR, CCTV, Gate Automation"
        description="Leading provider of comprehensive port security solutions including ANPR, CCTV surveillance, access control, RFID, and gate automation systems for ISPS-compliant maritime operations."
        canonical="https://mantrasoftech.com"
        ogTitle="Mantra Softech - Advanced Port Security Solutions"
        ogDescription="Secure your port operations with our integrated security systems: ANPR, CCTV, access control, perimeter detection, and more."
      />

      <Hero />

      <AboutUs />

      <StatsSection />

      <WhyChooseUs />

      <ServicesGrid />

      <OurJourney />

      <section id="services" className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wider">Check Out Our Core Services</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">Port Security Services</h2>
              <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive port security and access control solutions designed for ISPS-compliant operations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                delay={index * 100}
              >
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <WhatWeOffer />

      <AnimatedSection animation="fade-in">
        <section id="solutions" className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
                Why Choose Our Security Services
              </h2>
              <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                At Mantra Softech, we provide reliable and comprehensive port security solutions tailored to your operational needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  {[
                    { title: 'Wide Network Coverage', desc: 'Extensive deployment across major ports and terminals' },
                    { title: 'Safe Handling', desc: 'Advanced systems ensure secure access and monitoring' },
                    { title: 'Timely Response', desc: 'Real-time alerts and 24/7 security operations' },
                    { title: 'Cost-Effective Solutions', desc: 'Competitive pricing without compromising security quality' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white font-bold text-lg md:text-xl">✓</span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <div className="relative group">
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-gradient-to-br from-orange-100 to-primary-100 rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>
                  <img src={images.SecurityServicesimg} alt="Port Operations"
                  className="relative rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500" />
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 md:p-6 rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
                    <div className="text-xs md:text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <FAQSection />

      <AnimatedSection animation="scale-in">
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary-800 via-primary-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                  We're Here to Support Your Security Needs
                </h2>
                <p className="text-base md:text-xl text-gray-200">
                  We're committed to making your port operations secure, efficient, and compliant.
                </p>
              </div>
              <a
                href="tel:+988258263"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl whitespace-nowrap hover:scale-110 transform"
              >
                +988-258-263
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
