import { Camera, Scan, Zap, Shield, Eye, FileCheck, MapPin, Building2, Lock, Route, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { images } from "../assets/images";

interface ANPRPageProps {
  onNavigate?: (page: string) => void;
}

export default function ANPRPage({ }: ANPRPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const offerings = [
    {
      icon: Zap,
      title: 'Faster Processing',
      description: 'Faster vehicle processing and reduced gate congestion',
    },
    {
      icon: Eye,
      title: 'Improved Accuracy',
      description: 'Improved accuracy in vehicle identification and access enforcement',
    },
    {
      icon: FileCheck,
      title: 'Traceable Records',
      description: 'Traceable vehicle movement records supporting ISPS audits and investigations',
    },
    {
      icon: Shield,
      title: 'Audit Trails',
      description: 'Clear audit trails supporting compliance and regulatory reporting',
    },
    {
      icon: Eye,
      title: 'Team Coordination',
      description: 'Better coordination between security, operations, and command teams',
    },
  ];

  const usageLocations = [
    {
      icon: MapPin,
      title: 'Main Port Entry & Exit Gates',
      description: 'Automated identification of authorised vehicles through number plate recognition',
    },
    {
      icon: Building2,
      title: 'Terminal and Cargo Access Gates',
      description: 'Validation of operational and service vehicles entering terminal areas',
    },
    {
      icon: Lock,
      title: 'Restricted Zone Entry Points',
      description: 'Enforcement of vehicle access control for sensitive port security zones',
    },
    {
      icon: Route,
      title: 'Internal Traffic Lanes',
      description: 'Monitoring inter-terminal vehicle movement and operational logistics traffic',
    },
  ];

  const faqs = [
    {
      question: 'Does the ANPR system slow down vehicle movement at port gates?',
      answer: 'No. Automatic number plate recognition systems capture vehicle plates while vehicles remain in motion, ensuring that gate throughput depends on gate capacity rather than identification speed.'
    },
    {
      question: 'How accurate is ANPR in real port operating conditions?',
      answer: 'Modern number plate recognition cameras and ANPR systems are designed to perform reliably under varying lighting, weather conditions, and traffic density through calibrated cameras and recognition algorithms.'
    },
    {
      question: 'Can ANPR integrate with existing port security systems?',
      answer: 'Yes. ANPR integrates with access control systems, gate automation systems, CCTV surveillance systems, video management systems (VMS), and integrated command control centres without replacing existing infrastructure.'
    },
    {
      question: 'Does ANPR replace RFID or harbour entry permit systems?',
      answer: 'No. ANPR complements RFID systems, harbour entry permit systems, and access control platforms, providing an additional vehicle identification layer within the overall port security architecture.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="anpr-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-primary-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm uppercase tracking-wider shadow-lg">
                  Fast Vehicle Identification
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">ANPR Solutions</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-primary-500 to-green-400 animate-gradient">
                  for Ports
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Fast, non-intrusive vehicle identification at entry and exit gates through Automatic Number Plate Recognition
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Camera className="w-10 h-10 mx-auto text-orange-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Auto-Capture</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Zap className="w-10 h-10 mx-auto text-primary-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Real-Time</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <CheckCircle className="w-10 h-10 mx-auto text-green-500" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-primary-500/30 rounded-3xl blur-3xl"></div>

              <div className="relative space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Camera className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Automatic Capture</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Number plate recognition cameras capture plates while vehicles remain in motion
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-rotate-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Scan className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Fast Validation</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Instant matching against authorized vehicle records and access policies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">System Integration</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Seamless integration with gate automation and command control platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Enhanced Port Operations</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When implemented as part of an integrated port access control framework, ANPR delivers measurable operational and governance improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.slice(0, 3).map((offering, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <offering.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-primary-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-primary-600 transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{offering.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            {offerings.slice(3).map((offering, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={(index + 3) * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <offering.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-primary-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-primary-600 transition-colors">
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
              How the ANPR System Operates Within Live Port Gate Workflows
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ANPR functions as a vehicle identification system embedded within port gate operations, capturing and validating vehicle number plates without interrupting normal traffic flow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-primary-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.ANPRSystemOperatesImg} alt="ANPR Gate Operations"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Vehicle Approach at Port Gates</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vehicles approach entry or exit gates where ANPR cameras and number plate recognition cameras are positioned within existing gate lanes and access infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Automatic Number Plate Capture</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vehicle number plates are captured automatically in real time using automatic number plate detection technology, allowing identification without manual checks or vehicle stoppage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Plate Recognition and Access Validation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Captured plate data is processed through automatic number plate recognition software and matched against authorised vehicle records, permits, or access policies defined by port security systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Event Logging and System Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Validated vehicle events are logged and shared with gate automation systems, port access control systems, CCTV/VMS platforms, and command control centres for monitoring, audits, and operational response.
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
              Where ANPR Operates Inside a Port
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ANPR systems are deployed across ISPS-regulated port security zones where accurate vehicle identification and access enforcement are required
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usageLocations.map((location, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
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
                  Non-Intrusive Vehicle Identification
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Port gates are high-risk control points where vehicle volumes, security checks, and operational efficiency must coexist. ANPR enables fast, non-intrusive vehicle identification while reducing manual checks and improving traceability.
                </p>

                <div className="space-y-4">
                  {[
                    'Automated vehicle identification through number plate recognition',
                    'ISPS-compliant port security frameworks',
                    'Seamless integration with gate automation systems',
                    'Improved audit readiness and access control'
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
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.NonIntrusiveVehicleIdentificationImg} alt="Port Gate ANPR System"
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
