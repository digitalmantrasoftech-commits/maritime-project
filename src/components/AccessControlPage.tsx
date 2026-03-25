import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { images } from "../assets/images";

interface AccessControlPageProps {
  onNavigate?: (page: string) => void;
}

export default function AccessControlPage({ }: AccessControlPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const offerings = [
    {
      icon: 'bi-geo-alt',
      title: 'Clear Zone Segregation',
      description: 'Clear segregation of personnel access across different port security zones',
    },
    {
      icon: 'bi-file-earmark-check',
      title: 'Reliable Records',
      description: 'Reliable records of personnel movement supporting ISPS audits and investigations',
    },
    {
      icon: 'bi-people',
      title: 'Reduced Manual Verification',
      description: 'Reduced dependence on manual verification by security teams',
    },
    {
      icon: 'bi-eye',
      title: 'Better Coordination',
      description: 'Better coordination between port operations and security departments',
    },
  ];

  const usageLocations = [
    {
      icon: 'bi-building',
      title: 'Administrative and Operational Buildings',
      description: 'Controlled access for authorised port staff and management teams',
    },
    {
      icon: 'bi-people',
      title: 'Personnel Entry Points at Terminals and Yards',
      description: 'Verification of staff, contractors, and operational workers entering working areas',
    },
    {
      icon: 'bi-lock',
      title: 'Restricted and High-Security ISPS Zones',
      description: 'Enforcement of access policies for sensitive operational and security areas',
    },
    {
      icon: 'bi-shield-check',
      title: 'Control Rooms and Sensitive Facilities',
      description: 'Secured entry to command centres, surveillance rooms, and critical infrastructure',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between Access Control and Gate Automation?',
      answer: 'Both systems are part of the port security framework but they control different types of movement.\n\nAccess Control Systems:\n• Manage and control people movement inside the port\n• Used at buildings, restricted zones, control rooms, and operational facilities\n• Verify credentials such as access cards, biometrics, or facial recognition\n\nGate Automation Systems:\n• Control the physical opening and closing of vehicle gates\n• Used at port entry and exit lanes\n• Operate barriers or gates based on validation from systems such as ANPR, RFID, or permit systems\n\nIn simple terms:\n• Access Control → controls who can enter specific areas inside the port\n• Gate Automation → controls when vehicle gates open or remain closed'
    },
    {
      question: 'Can the system work with existing access cards or biometrics?',
      answer: 'Yes. It is designed to integrate with the access technologies already deployed at the port.'
    },
    {
      question: 'Can contractors or visitors be limited to specific areas?',
      answer: 'Yes. Access can be restricted by role, area, and time duration, ensuring temporary personnel only enter authorised zones.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="access-control-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
                  Personnel & Vehicle Management
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Security Access</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-500 to-primary-400 animate-gradient">
                  Control Systems
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Control and monitor personnel access across operational and restricted zones with intelligent access control systems
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <i className="bi bi-shield-check text-4xl mx-auto text-orange-500 inline-flex items-center justify-center"></i>
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Zone Control</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <i className="bi bi-people text-4xl mx-auto text-blue-500 inline-flex items-center justify-center"></i>
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Personnel</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <i className="bi bi-check-circle text-4xl mx-auto text-primary-500 inline-flex items-center justify-center"></i>
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
                  <i className="bi bi-arrow-right text-xl group-hover:translate-x-1 transition-transform inline-flex items-center justify-center"></i>
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
                      <i className="bi bi-people text-2xl text-white inline-flex items-center justify-center"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Identity Registration</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Register personnel using access cards, biometrics, or facial recognition
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-rotate-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="bi bi-geo-alt text-2xl text-white inline-flex items-center justify-center"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Zone-Based Access</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Configure access policies based on role, department, and shift timing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="bi bi-eye text-2xl text-white inline-flex items-center justify-center"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Access Monitoring</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Automatic logging and real-time monitoring of all access events
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
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Why Access Control Matters</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ports have multiple operational and restricted areas where uncontrolled movement of people can quickly turn into a security and compliance issue. Employees, contractors, vendors, and visitors often move across zones throughout the day, and manual checks or paper registers are not reliable enough for ISPS-compliant port security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <i className={`bi ${offering.icon} text-3xl text-white inline-flex items-center justify-center`}></i>
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
              How Access Control Operates Within Live Port Environments
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Security access control functions as a personnel access enforcement layer within the broader port security architecture, ensuring that only authorised individuals can enter designated areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.AccessControlOperatesImg} alt="Access Control System"
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
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Personnel Identity Registration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Port staff, contractors, and visitors are registered using existing credentials such as access cards, biometric systems, or facial recognition devices already deployed at the port.
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
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Zone-Based Access Configuration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Port facilities are divided into security zones, and access control policies are defined based on role, department, shift timing, and security guidelines approved by the port authority.
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
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Real-Time Access Enforcement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      When a person attempts to enter a secured area, the access control system verifies the credential instantly and allows or denies access based on predefined access rules.
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
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Event Logging and Access Monitoring</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every access attempt is logged automatically and made available for access control monitoring, allowing security teams and command centres to review access activity and support audits.
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
              Where Access Control Operates Inside a Port
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access control systems are deployed at locations where personnel movement must be controlled for safety, security, and ISPS compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usageLocations.map((location, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <i className={`bi ${location.icon} text-3xl text-white inline-flex items-center justify-center`}></i>
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
                  Intelligent Access Control Integration
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Mantra Softech provides security access control systems designed for port environments, integrating with existing access cards, biometric authentication, and facial recognition access control technologies.
                </p>

                <div className="space-y-4">
                  {[
                    'Integration with access cards and biometric systems',
                    'Facial recognition access control capabilities',
                    'Zone-based access configuration and enforcement',
                    'Real-time access monitoring and event logging',
                    'ISPS-compliant personnel access management',
                    'Auditable access records for compliance reporting'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1 group-hover:bg-orange-500 transition-colors duration-300">
                        <i className="bi bi-check-circle w-4 h-4 text-orange-600 group-hover:text-white transition-colors duration-300 inline-flex items-center justify-center"></i>
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
                  <img src={images.IntelligentAccessControlImg} alt="Biometric Access Control"
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
                Frequently Asked Questions
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
                        <i className={`bi bi-question-circle w-5 h-5 inline-flex items-center justify-center ${
                          openIndex === index ? 'text-white' : 'text-orange-500'
                        }`}></i>
                      </div>
                      <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                    </div>
                    <i className={`bi bi-chevron-down w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 inline-flex items-center justify-center ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}></i>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6 pt-2 pl-20 bg-gradient-to-b from-orange-50/50 to-transparent">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
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
