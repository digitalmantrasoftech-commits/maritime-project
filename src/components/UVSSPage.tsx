import { Camera, Scan, Shield, Eye, FileCheck, MapPin, Building2, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { images } from "../assets/images";

interface UVSSPageProps {
  onNavigate?: (page: string) => void;
}

export default function UVSSPage({ }: UVSSPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const offerings = [
    {
      icon: AlertTriangle,
      title: 'Improved Threat Detection',
      description: 'Improved detection of unauthorised objects and potential under-vehicle threats',
    },
    {
      icon: Eye,
      title: 'Reduced Manual Inspection',
      description: 'Reduced dependence on manual inspection under high vehicle traffic volumes',
    },
    {
      icon: CheckCircle,
      title: 'Standardised Procedures',
      description: 'Standardised inspection procedures across multiple gates and shifts',
    },
    {
      icon: FileCheck,
      title: 'ISPS Audit Readiness',
      description: 'Stronger ISPS audit readiness through recorded inspection events and visual evidence',
    },
  ];

  const usageLocations = [
    {
      icon: MapPin,
      title: 'Primary Port Entry and Exit Gates',
      description: 'Inspection of authorised vehicles entering or leaving the port',
    },
    {
      icon: Building2,
      title: 'Terminal and Cargo Access Gates',
      description: 'Inspection of logistics, operational, and service vehicles',
    },
    {
      icon: Lock,
      title: 'Restricted and High-Security Zones',
      description: 'Enhanced inspection before vehicles enter sensitive port areas',
    },
    {
      icon: Shield,
      title: 'Designated Security Inspection Lanes',
      description: 'Targeted inspection based on vehicle category or security risk level',
    },
  ];

  const faqs = [
    {
      question: 'Can UVSS operate effectively with high traffic volumes and heavy vehicles?',
      answer: 'Yes. UVSS systems used in ports are designed for continuous operation, supporting heavy commercial vehicles and high traffic density while maintaining normal gate throughput.'
    },
    {
      question: 'How is UVSS data used during security reviews or investigations?',
      answer: 'Captured under-vehicle images and inspection events are logged and stored according to port security policies. These records support incident investigation, audit reviews, and post-event analysis.'
    },
    {
      question: 'Does UVSS require replacing existing CCTV, access control, or gate systems?',
      answer: 'No. UVSS integrates with existing CCTV surveillance systems, access control platforms, gate automation systems, and Integrated Command Control Centres (ICCC). It enhances inspection capability without replacing existing port security infrastructure.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="uvss-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm uppercase tracking-wider shadow-lg">
                  Gate Security
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Under Vehicle</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-400 animate-gradient">
                  Surveillance System
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Automated, non-intrusive inspection of vehicles entering port facilities without slowing down gate operations
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Camera className="w-10 h-10 mx-auto text-orange-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Auto-Scan</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Eye className="w-10 h-10 mx-auto text-red-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Real-Time</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <CheckCircle className="w-10 h-10 mx-auto text-amber-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">ISPS Compliant</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-3xl blur-3xl"></div>

              <div className="relative space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Camera className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Automated Capture</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        High-resolution under-vehicle images captured automatically during movement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-rotate-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Scan className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Security Review</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Images available for operator review and validation against security protocols
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">System Integration</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Seamless integration with CCTV, access control, and command platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-red-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Operational Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Enhanced Port Security</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When implemented as part of an integrated port security framework, UVSS systems deliver measurable operational and security benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <offering.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-orange-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-orange-600 transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{offering.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              How the UVSS System Operates Within Live Port Workflows
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              UVSS functions as a vehicle inspection layer embedded within port gate operations, allowing security checks to occur during normal vehicle movement without requiring manual inspection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.UVSSSystemOperatesImg} alt="UVSS Gate Operations"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Vehicle Entry into Inspection Lane</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vehicles enter designated port gate lanes where UVSS inspection systems are positioned within existing entry and exit workflows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Automated Under-Vehicle Image Capture</h3>
                    <p className="text-gray-600 leading-relaxed">
                      As vehicles move across the inspection lane, high-resolution images of the vehicle underbody are captured automatically by the under vehicle surveillance system without requiring vehicles to stop.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Image Review and Event Validation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Captured images are made available to security operators for review and validation against inspection protocols or potential security alerts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Visibility at Security and Command Systems</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Inspection events and image records are logged and shared with port security teams, CCTV/VMS platforms, and command control centres for monitoring, audits, and incident response.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Where UVSS Operates Inside a Port
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              UVSS systems are deployed across ISPS-regulated port security zones where reliable vehicle inspection is required without slowing traffic throughput
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usageLocations.map((location, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {location.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Non-Intrusive Vehicle Inspection
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Ports manage continuous vehicle movement under strict ISPS port security obligations, making manual under-vehicle inspection impractical at scale. UVSS enables automated, non-intrusive inspection without slowing down operations.
                </p>

                <div className="space-y-4">
                  {[
                    'Automated inspection of vehicle underbodies at gates',
                    'ISPS-compliant port security solutions',
                    'Integration with access control and gate automation',
                    'Enhanced threat detection and controlled access enforcement'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.NonIntrusiveVehicleImg} alt="Port Gate UVSS System"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Expert FAQs</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
                Frequently asked questions
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index ? 'bg-orange-500' : 'bg-orange-100'
                      }`}>
                        <HelpCircle className={`w-5 h-5 ${
                          openIndex === index ? 'text-white' : 'text-orange-500'
                        }`} />
                      </div>
                      <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6 pt-2 pl-20 bg-gradient-to-b from-orange-50/50 to-transparent">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
