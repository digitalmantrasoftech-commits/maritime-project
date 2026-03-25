import { Video, Monitor, Database, Search, Eye, Shield, MapPin, Building2, FileVideo, Lock, CheckCircle, ArrowRight, Cctv, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { images } from "../assets/images";

interface VMSPageProps {
  onNavigate?: (page: string) => void;
}

export default function VMSPage({ }: VMSPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const offerings = [
    {
      icon: Monitor,
      title: 'Centralized Monitoring',
      description: 'Control room CCTV video wall with unified surveillance network management',
    },
    {
      icon: Search,
      title: 'Fast Video Retrieval',
      description: 'Quick search and playback based on time, location, or specific events',
    },
    {
      icon: Shield,
      title: 'ISPS Compliance',
      description: 'Reliable video storage supporting audits and security compliance',
    },
  ];

  const usageLocations = [
    {
      icon: MapPin,
      title: 'Port Entry & Exit Gates',
      description: 'Monitoring vehicle and personnel movement using CCTV surveillance systems',
    },
    {
      icon: Building2,
      title: 'Terminals & Cargo Handling Areas',
      description: 'Central monitoring of cargo operations, equipment movement, and internal traffic flow',
    },
    {
      icon: FileVideo,
      title: 'Port Perimeter & Restricted Zones',
      description: 'Integrated video surveillance of sensitive and security-controlled areas',
    },
    {
      icon: Lock,
      title: 'Command & Control Rooms',
      description: 'Centralized video monitoring and recording management through VMS dashboards',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between CCTV Surveillance System and Video Management System (VMS)?',
      answer: 'These two systems work together but perform different roles in port security infrastructure. CCTV Surveillance System captures live video through cameras deployed across the port and provides real-time monitoring of people, vehicles, and activities. Video Management System (VMS) manages, stores, and organises video captured by CCTV cameras and enables video search, playback, and investigation. In simple terms, CCTV captures the video, while the VMS manages and analyses it.'
    },
    {
      question: 'Can the Video Management System handle large-scale camera deployments across an entire port?',
      answer: 'Yes. Modern Video Management Systems are designed to support large surveillance networks with hundreds or even thousands of cameras. The system can manage multiple camera streams simultaneously, organise them by location or operational zone, and allow security teams to monitor activities across terminals, gates, yards, and perimeter areas from a central interface.'
    },
    {
      question: 'How does the VMS ensure secure storage and access to surveillance footage?',
      answer: 'The system stores video recordings in secure storage environments with controlled user access. Authorised personnel can retrieve footage based on defined permissions, while audit logs track who accessed or exported recordings. This ensures surveillance data remains protected while still being available for investigations, compliance reviews, and operational analysis.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section id="vms-hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-primary-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm uppercase tracking-wider shadow-lg">
                  Centralized Video Management
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Video Management</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-primary-400 animate-gradient">
                  System for Ports
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Central Monitoring and CCTV Video Management for ISPS-Compliant Port Security
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Clock className="w-10 h-10 mx-auto text-orange-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">24/7 Recording</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
                  <div className="mb-2">
                    <Cctv className="w-10 h-10 mx-auto text-primary-500" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Multi-Camera</div>
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
                      <Monitor className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Centralized Control</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Unified platform managing all port CCTV cameras from a single interface
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:-rotate-1 ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Secure Storage</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Reliable video storage with controlled access and audit trails
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Quick Investigation</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Fast search and retrieval of video footage for incident analysis
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
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">What we offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Comprehensive Video Management</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A well-implemented Video Management System for ports improves surveillance coordination and security visibility across port infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <offering.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-primary-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center group-hover:text-primary-600 transition-colors">
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
              How the Video Management System Operates Within Live Port Workflows
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A CCTV video management system connects surveillance cameras deployed across the port into a single platform for monitoring, recording, and investigation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-primary-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={images.vmshowthevideoImg} alt="Video Management Operations"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Video Feed Collection</h3>
                    <p className="text-gray-600 leading-relaxed">
                      CCTV cameras installed across port gates, terminals, and perimeter areas transmit live video streams to the Video Management System (VMS), creating a unified surveillance network.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Central Monitoring and Multi-Camera Visibility</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Security operators monitor multiple camera feeds through a centralized dashboard or control room CCTV video wall, enabling real-time visibility across critical port areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Video Storage and Retrieval</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The system securely stores surveillance recordings and allows authorized personnel to quickly search and retrieve video footage based on time, location, or specific events.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Incident Investigation and Evidence Management</h3>
                    <p className="text-gray-600 leading-relaxed">
                      When security events occur, operators can review recorded footage, analyse activity timelines, and export video evidence for operational reviews, investigations, or compliance reporting.
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
              Where the Video Management System Is Used Inside a Port
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The VMS video monitoring platform supports surveillance across critical operational and security zones within the port
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
                  Why choose our Video Management System
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A well-implemented Video Management System for ports improves surveillance coordination and security visibility across port infrastructure
                </p>

                <div className="space-y-4">
                  {[
                    'Centralized monitoring of CCTV surveillance systems across the port',
                    'Faster retrieval of recorded footage during investigations',
                    'Improved coordination between security teams and control rooms',
                    'Reliable video storage supporting audits and ISPS security compliance'
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
                  <img src={images.vmswhychooseourImg} alt="Port Security Control Room"
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
