import { Radio, Shield, Camera, Scan, FileCheck, Eye, ArrowRight, CheckCircle, ChevronDown, HelpCircle, Zap, Lock, Server, Activity } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { images } from "../assets/images";

interface GateAutomationPageProps {
  onNavigate?: (page: string) => void;
}

export default function GateAutomationPage({ }: GateAutomationPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const dataSources = [
    {
      icon: Radio,
      title: 'RFID Systems',
      description: 'Provide RFID vehicle identification and vehicle access control data used for automated gate decisions',
    },
    {
      icon: Camera,
      title: 'ANPR Systems',
      description: 'Supply automatic number plate recognition data to validate vehicle identity and access rights',
    },
    {
      icon: FileCheck,
      title: 'Access Control and Permit Systems',
      description: 'Validate authorised vehicles, personnel, and port entry permits before the gate barrier is activated',
    },
    {
      icon: Shield,
      title: 'UVSS and Security Systems',
      description: 'Provide vehicle inspection and security clearance status before allowing gate movement',
    },
  ];

  const outcomes = [
    {
      icon: Lock,
      title: 'Enforced Vehicle Access',
      description: 'Enforced vehicle access without manual gate handling',
    },
    {
      icon: Zap,
      title: 'Faster Processing',
      description: 'Faster vehicle processing and reduced gate congestion',
    },
    {
      icon: Shield,
      title: 'Improved Safety',
      description: 'Improved safety at port entry and exit points',
    },
    {
      icon: FileCheck,
      title: 'Traceable Events',
      description: 'Traceable gate events supporting ISPS security audits',
    },
    {
      icon: Activity,
      title: 'Better Coordination',
      description: 'Better coordination between port security and operations teams',
    },
  ];

  const faqs = [
    {
      question: 'How is gate automation different from RFID or ANPR?',
      answer: 'RFID and ANPR systems identify or validate vehicles, while gate automation physically controls gate movement. In simple terms: RFID / ANPR → Identify the vehicle, Gate Automation → Opens or keeps the gate closed'
    },
    {
      question: 'What happens if a connected system like ANPR or RFID is temporarily unavailable?',
      answer: 'Gate automation systems support fallback and exception workflows, including manual overrides and predefined security rules, ensuring operations continue without compromising safety or access control.'
    },
    {
      question: 'How does gate automation handle denied vehicles or security alerts?',
      answer: 'If a vehicle fails identification or validation checks, the automatic boom barrier remains closed and the event is logged. Security teams are notified through monitoring systems or command centres for further action.'
    },
    {
      question: 'Can gate automation integrate with existing port systems?',
      answer: 'Yes. Gate automation integrates with RFID vehicle access control systems, ANPR systems, port entry permit systems, CCTV surveillance systems, and Integrated Command Control Centres (ICCC) without replacing existing infrastructure.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="gate-automation-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-primary-500/20 to-orange-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-400 font-semibold text-sm uppercase tracking-wider shadow-lg">
                  Automated Entry/Exit
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Gate Automation</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-orange-500 to-blue-400 animate-gradient">
                  Solutions
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Rule-based and secure vehicle entry and exit through automated gate infrastructure integrated with RFID, ANPR, and access control systems
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Radio className="w-10 h-10 mx-auto text-primary-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Automated</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Shield className="w-10 h-10 mx-auto text-orange-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Secure</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <CheckCircle className="w-10 h-10 mx-auto text-blue-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">ISPS Compliant</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-orange-500/30 rounded-3xl blur-3xl"></div>

              <div className="relative space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Radio className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Automatic Boom Barriers</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Automated barrier control based on vehicle validation and access permissions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-rotate-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Server className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">System Integration</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Seamless integration with RFID, ANPR, permits, and security systems
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Activity className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Event Logging</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Complete audit trail of all gate operations and access decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Why Gate Automation Matters</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.WhyGateAutomationImg} alt="Port Gate Operations"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Critical Control Points
                </h2>
                <div className="w-24 h-1 bg-primary-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Port gates are critical control points where vehicle movement, safety, and security enforcement must operate together. Manual gate handling often results in congestion, delays, and inconsistent enforcement of vehicle access policies.
                </p>

                <div className="space-y-4">
                  {[
                    'Rule-based and secure vehicle entry and exit',
                    'Integration with RFID, ANPR, and access control',
                    'Automatic boom barriers and bollards',
                    'ISPS-compliant security framework execution layer'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 group-hover:bg-primary-500 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Data Sources</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
              Integrated Security Systems
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gate automation relies on multiple port security and identification systems to determine whether a vehicle should be allowed to enter or exit the port
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataSources.map((source, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <source.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-primary-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-primary-600 transition-colors">
                    {source.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{source.description}</p>
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
              How Gate Automation Operates Within Live Port Gate Workflows
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gate automation functions within existing port gate operations to enforce access decisions automatically without manual gate handling
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Vehicle Arrival and Access Trigger</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vehicles approach entry or exit gates where access requests are triggered through integrated RFID readers, ANPR cameras, or permit validation systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Access Validation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vehicle authorisation is validated against port entry permits, RFID vehicle access rules, and security policies defined within port access systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Automated Gate Execution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Based on the validation result, automatic boom barriers, bollards, or gate control mechanisms are activated to allow or deny vehicle passage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Event Logging and Monitoring</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Gate actions, exceptions, and vehicle movements are recorded and shared with access control systems, CCTV/VMS platforms, and command control centres for monitoring and audits.
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
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Operational Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Benefits for Port Authorities</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When implemented as part of an integrated port access management framework, gate automation delivers clear operational and governance benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {outcomes.map((outcome, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-orange-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg mx-auto">
                    <outcome.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{outcome.description}</p>
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
                  Smart Port Architecture
                </h2>
                <div className="w-24 h-1 bg-primary-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  As part of a smart port architecture, gate automation acts as the execution layer, converting vehicle identification and access validation into secure and auditable gate operations.
                </p>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">The Execution Layer</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Gate automation integrates automatic boom barriers, bollards, RFID vehicle entry systems, and ANPR vehicle identification, ensuring that access decisions are executed consistently within ISPS-compliant port security frameworks.
                  </p>
                  <div className="flex items-center gap-3 text-primary-600 font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span>Consistent Access Enforcement</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-primary-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.SmartPortArchitectureImg} alt="Automated Port Gates"
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
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Expert FAQs</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
                Frequently asked questions
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index ? 'bg-primary-500' : 'bg-primary-100'
                      }`}>
                        <HelpCircle className={`w-5 h-5 ${
                          openIndex === index ? 'text-white' : 'text-primary-500'
                        }`} />
                      </div>
                      <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6 pt-2 pl-20 bg-gradient-to-b from-primary-50/50 to-transparent">
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
