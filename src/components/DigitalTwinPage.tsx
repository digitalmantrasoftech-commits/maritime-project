import { useState } from 'react';
import {
  Cuboid,
  Radar,
  Network,
  Ship,
  Building2,
  Shield,
  BarChart3,
  Activity,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  CheckCircle,
  Cpu,
  Map,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function DigitalTwinPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const implementationSteps = [
    {
      icon: Map,
      title: 'Infrastructure Mapping',
      description:
        'Port infrastructure, operational assets, and workflows are digitally mapped to create the foundational model of the port environment.',
    },
    {
      icon: Network,
      title: 'System Integration',
      description:
        'Operational data from vessel tracking platforms, terminal operating systems, surveillance networks, and IoT infrastructure is integrated into the Digital Twin environment.',
    },
    {
      icon: Cuboid,
      title: 'Digital Twin Development',
      description:
        'A real-time digital replica of the port ecosystem is created using integrated operational data and infrastructure models.',
    },
    {
      icon: BarChart3,
      title: 'Operational Deployment and Optimization',
      description:
        'Monitoring dashboards, analytics tools, and simulation capabilities are deployed to support operational analysis and continuous performance improvement.',
    },
  ];

  const ecosystemItems = [
    {
      icon: Building2,
      title: 'Port Community Systems (PCS)',
      description:
        'Integrate logistics and operational data across port stakeholders to improve collaboration and information flow.',
    },
    {
      icon: Activity,
      title: 'Terminal Operating Systems (TOS)',
      description:
        'Connect container movement, terminal workflows, and yard operations to enhance operational visibility within the digital twin environment.',
    },
    {
      icon: Ship,
      title: 'Vessel Traffic Management Systems (VTMS)',
      description:
        'Synchronize vessel tracking and navigation data to support real-time monitoring and optimized maritime traffic flow.',
    },
    {
      icon: Shield,
      title: 'Security and Access Infrastructure',
      description:
        'Integrate surveillance systems, access control platforms, and identity management technologies to strengthen security monitoring across port facilities.',
    },
  ];

  const capabilities = [
    {
      icon: Radar,
      title: 'Real-Time Port Visibility',
      description:
        'Monitor vessels, cargo flow, and operational activities across the port through a unified operational dashboard.',
    },
    {
      icon: Ship,
      title: 'Vessel Traffic Optimization',
      description:
        'Analyse vessel movement patterns and berth availability to improve scheduling and reduce maritime congestion.',
    },
    {
      icon: Cpu,
      title: 'Infrastructure Performance Monitoring',
      description:
        'Track the performance and health of critical port assets such as cranes, terminals, and operational infrastructure.',
    },
    {
      icon: BarChart3,
      title: 'Operational Scenario Simulation',
      description:
        'Simulate congestion, weather disruptions, or equipment failures to support more informed decision-making.',
    },
  ];

  const outcomes = [
    'Unified operational visibility across complex port infrastructure',
    'Improved coordination between systems, teams, and stakeholders',
    'Support for predictive planning and future scenario analysis',
    'Stronger monitoring of infrastructure performance and operational trends',
    'Better decision-making for day-to-day control and long-term planning',
  ];

  const faqs = [
    {
      question: 'How does a Digital Twin differ from traditional port monitoring systems?',
      answer:
        'Traditional monitoring systems provide isolated operational data from specific infrastructure or systems. A Digital Twin integrates data from multiple sources into a unified operational model, allowing port operators to understand how different activities and assets interact across the port environment.',
    },
    {
      question: 'What level of data integration is required to deploy a port Digital Twin?',
      answer:
        'A Digital Twin typically integrates data from vessel tracking systems, terminal operating platforms, infrastructure sensors, surveillance systems, and environmental monitoring tools. The objective is to consolidate operational datasets into a single analytical environment without disrupting existing systems.',
    },
    {
      question: 'Can Digital Twins support predictive operational planning in ports?',
      answer:
        'Yes. By analyzing historical and real-time operational data, Digital Twins can simulate future operational scenarios such as vessel congestion, infrastructure stress, or logistics disruptions. This enables ports to anticipate operational challenges and plan accordingly.',
    },
    {
      question: 'How can a Digital Twin support operational optimization and long-term planning?',
      answer:
        'A Digital Twin helps ports improve both daily operations and long-term infrastructure planning through vessel traffic optimization, berth allocation planning, infrastructure monitoring, and long-term operational data analysis for capacity planning and expansion decisions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-primary-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm uppercase tracking-wider shadow-lg">
                  Smart Port Digital Intelligence
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Digital Twin</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-primary-400">
                  Solutions for Ports
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full" />

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Real-time digital port representation that connects infrastructure, operations,
                surveillance, and sensor intelligence into one unified operational environment.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <Radar className="w-10 h-10 mx-auto text-orange-500 mb-2" />
                  <div className="text-sm text-gray-400 font-medium">Live Visibility</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <Network className="w-10 h-10 mx-auto text-primary-500 mb-2" />
                  <div className="text-sm text-gray-400 font-medium">System Integration</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <BarChart3 className="w-10 h-10 mx-auto text-blue-500 mb-2" />
                  <div className="text-sm text-gray-400 font-medium">Simulation Tools</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#implementation"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore the Framework
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="space-y-6">
                {[
                  {
                    icon: Cuboid,
                    title: 'Real-Time Port Replica',
                    text: 'Create a digital model of infrastructure, workflows, and operations for coordinated visibility.',
                  },
                  {
                    icon: Ship,
                    title: 'Operational Decision Support',
                    text: 'Monitor vessel movement, berth utilization, and cargo operations within one digital environment.',
                  },
                  {
                    icon: Shield,
                    title: 'Security + Operations Layer',
                    text: 'Combine surveillance, access systems, and operational platforms for a fuller port view.',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Why Digital Twin
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
              From Fragmented Port Monitoring to Unified Operational Intelligence
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 leading-relaxed">
              Modern ports operate vessel movement, cargo handling, terminal operations, and security
              activities simultaneously across large infrastructure areas. Digital Twin solutions bring
              those disconnected systems into one real-time operational view. :contentReference[oaicite:1]{index=1}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Unified operational visibility for Smart Port environments
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  By integrating data from port systems, operational platforms, surveillance
                  infrastructure, and IoT-enabled sensors, the Digital Twin creates a real-time
                  digital representation of the port environment that supports informed decision-making
                  and improved coordination. :contentReference[oaicite:2]{index=2}
                </p>

                <div className="space-y-4">
                  {outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="grid grid-cols-2 gap-6">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{capability.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{capability.description}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="implementation" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Implementation Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
              Structured Deployment for Live Port Environments
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Deployment typically follows a structured implementation process to ensure smooth
              integration with existing infrastructure systems. :contentReference[oaicite:3]{index=3}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {implementationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
                    <div className="flex gap-5 items-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold tracking-widest text-orange-500">
                          STEP {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-800 mt-2 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Smart Port Ecosystem Integration
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
              Connected Intelligence Across Operations, Maritime Systems, and Security
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Digital Twin becomes more powerful when connected with the broader Smart Port ecosystem,
              creating a unified digital environment for coordinated decision-making. :contentReference[oaicite:4]{index=4}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Key capabilities of Digital Twin solutions
                </h2>
                <div className="w-24 h-1 bg-orange-500 mb-8" />
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A Digital Twin platform enables ports to monitor infrastructure, vessel activity,
                  and operational processes through a unified digital environment using real-time data,
                  analytics, and simulation tools. :contentReference[oaicite:5]{index=5}
                </p>

                <div className="space-y-5">
                  {[
                    'Real-time port visibility across vessels, cargo flow, and operational activities',
                    'Vessel traffic optimization through movement and berth availability analysis',
                    'Infrastructure performance monitoring for cranes, terminals, and port assets',
                    'Scenario simulation for congestion, weather disruptions, and equipment failures',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Operational planning outcomes</h3>
                <div className="space-y-5">
                  {[
                    'Vessel Traffic Optimization',
                    'Berth Allocation Planning',
                    'Infrastructure Monitoring',
                    'Operational Data Analysis',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <span className="text-lg text-gray-200">{item}</span>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
                Digital Twin for Ports, Explained
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
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
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          openIndex === index ? 'bg-orange-500' : 'bg-orange-100'
                        }`}
                      >
                        <HelpCircle
                          className={`w-5 h-5 ${
                            openIndex === index ? 'text-white' : 'text-orange-500'
                          }`}
                        />
                      </div>
                      <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
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