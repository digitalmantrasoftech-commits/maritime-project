import { Radio, Scan, Truck, Database, Eye, Shield, MapPin, Building2, Lock, Package, CheckCircle, ArrowRight, Zap, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { images } from "../assets/images";

interface RFIDPageProps {
  onNavigate?: (page: string) => void;
}

export default function RFIDPage({ }: RFIDPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const offerings = [
    {
      icon: Zap,
      title: 'Faster Processing',
      description: 'Reduced gate congestion and faster vehicle turnaround',
    },
    {
      icon: Shield,
      title: 'ISPS Compliance',
      description: 'Verifiable movement records supporting ISPS audits and investigations',
    },
    {
      icon: Eye,
      title: 'Team Coordination',
      description: 'Stronger coordination between security, operations, and command teams',
    },
    {
      icon: Database,
      title: 'Real-Time Data',
      description: 'Trusted real-time movement data for command centres and incident response',
    },
  ];

  const usageLocations = [
    {
      icon: MapPin,
      title: 'Port Entry & Exit Gates',
      description: 'Automated identification of authorised vehicles and personnel through RFID access control',
    },
    {
      icon: Building2,
      title: 'Yards & Terminals',
      description: 'Continuous visibility of authorised vehicle, container, and asset movement',
    },
    {
      icon: Lock,
      title: 'Restricted Zones',
      description: 'Controlled access to sensitive operational and security areas',
    },
    {
      icon: Package,
      title: 'Operational Corridors',
      description: 'Movement traceability across large multi-terminal port environments',
    },
  ];

  const faqs = [
    {
      question: 'Will RFID slow down gate or yard operations?',
      answer: 'RFID capture occurs automatically as vehicles move through gates or operational corridors. Vehicles and assets are identified without stopping, manual scanning, or operator intervention. Operational throughput remains governed by gate and yard capacity rather than the RFID system.'
    },
    {
      question: 'How reliable is RFID in real port conditions such as metal environments, dust, and weather?',
      answer: 'RFID deployments in ports are engineered for metal-dense environments and harsh outdoor conditions. Reader placement, tag positioning, and calibration are designed to maintain consistent reads despite weather exposure, equipment movement, and high vehicle density.'
    },
    {
      question: 'How does RFID integrate with existing port systems?',
      answer: 'RFID acts as a data capture layer that feeds movement information into systems such as gate automation, weighbridge automation, terminal operating systems (TOS), surveillance platforms, and command control centres. It enhances operational visibility without replacing existing systems.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="rfid-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm uppercase tracking-wider shadow-lg">
                  Access Control & Vehicle ID
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">RFID Solutions</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-500 to-primary-400 animate-gradient">
                  for Ports
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Automated identification, vehicle access control, and real-time movement visibility across port infrastructure
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Radio className="w-10 h-10 mx-auto text-orange-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Auto-ID</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Clock className="w-10 h-10 mx-auto text-blue-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">24/7 Tracking</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <CheckCircle className="w-10 h-10 mx-auto text-primary-500" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-blue-500/30 rounded-3xl blur-3xl"></div>

              <div className="relative space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Radio className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Automated Identification</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Non-intrusive vehicle and personnel identification without stopping
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-rotate-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Real-Time Tracking</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Continuous visibility of vehicle and container movement across port areas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">System Integration</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Seamless integration with gate automation, TOS, and surveillance systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
              Beyond improving gate speed, RFID strengthens how ports govern movement, coordinate teams, and take operational decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <offering.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-blue-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-blue-600 transition-colors">
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
              How RFID Operates Within Live Port Workflows
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              RFID enables automated identification and real-time tracking without disrupting port operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.RFIDOperatesImg} alt="RFID Port Operations"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Identification at Entry Points</h3>
                    <p className="text-gray-600 leading-relaxed">
                      RFID tags are read automatically as authorised vehicles and personnel pass through port entry and exit gates, enabling RFID vehicle access control without stopping or manual checks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Movement Tracking Across Port Areas</h3>
                    <p className="text-gray-600 leading-relaxed">
                      As vehicles move through yards, terminals, and operational corridors, RFID captures movement events in the background, supporting RFID container tracking and RFID logistics tracking across port operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Data Consolidation into Port Systems</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Captured RFID events are fed into existing access control systems, gate automation platforms, terminal operating systems (TOS), and surveillance systems, creating a unified operational view.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Visibility at the Command Layer</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Validated RFID movement data becomes available to command and control centres for monitoring, operational analysis, security audits, and incident response.
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
              Where RFID Operates Inside a Port
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              RFID is deployed at locations where speed, security, and operational traceability must work together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usageLocations.map((location, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
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
                  Seamless Integration with Port Infrastructure
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  RFID access control systems strengthen security and operational control without disrupting live port operations. By building on existing infrastructure rather than replacing it, RFID enables reliable, continuous visibility across port activities.
                </p>

                <div className="space-y-4">
                  {[
                    'Non-intrusive identification without stopping vehicles',
                    'Supports ISPS Code objectives with auditable access control',
                    'RFID-based tracking of vehicles, containers, and logistics movements',
                    'Seamless integration with existing port systems'
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
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.rfidSeamlessIntegrationImg} alt="RFID Port Integration"
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
