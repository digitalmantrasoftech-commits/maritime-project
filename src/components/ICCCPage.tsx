import {
  ArrowRight,
  CheckCircle,
  Shield,
  Monitor,
  Siren,
  Network,
  Camera,
  Lock,
  Radio,
  Activity,
  BarChart3,
  ScanSearch,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SEO from './SEO';
import { images } from '../assets/images';

interface ICCCPageProps {
  onNavigate?: (page: string) => void;
}

const integrationLayers = [
  {
    icon: Camera,
    title: 'Surveillance and Video Monitoring',
    description:
      'Integrates CCTV surveillance systems and Video Management Systems (VMS) to centralize live feeds and recorded video across terminals, gates, and perimeter zones.',
  },
  {
    icon: Lock,
    title: 'Security and Access Control',
    description:
      'Connects access control, harbour entry permits, ANPR, UVSS, and perimeter intrusion detection systems (PIDS) to monitor personnel access, vehicle movement, and boundary security.',
  },
  {
    icon: Network,
    title: 'Operational and Infrastructure Monitoring',
    description:
      'Consolidates RFID systems, gate automation, weighbridge automation, terminal operating systems (TOS), and digital twin platforms into one operational view.',
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Integration of Port Security Systems',
    description:
      'The ICCC connects CCTV, VMS, access control, and perimeter intrusion systems into a unified monitoring layer.',
    icon: Network,
  },
  {
    step: '02',
    title: 'Centralized Monitoring Through Command Dashboards',
    description:
      'Operators monitor surveillance feeds, system alerts, and field events through centralized dashboards and video walls.',
    icon: Monitor,
  },
  {
    step: '03',
    title: 'Alert Correlation and Incident Identification',
    description:
      'The platform correlates multiple alerts and data points so teams can identify the location and nature of incidents faster.',
    icon: ScanSearch,
  },
  {
    step: '04',
    title: 'Coordinated Response and Operational Control',
    description:
      'Security teams verify incidents through surveillance feeds and coordinate actions based on port security protocols.',
    icon: Siren,
  },
];

const outcomes = [
  'Centralized monitoring of multiple security systems across the port',
  'Faster detection and verification of security incidents',
  'Improved coordination between security teams and port operations',
  'Enhanced situational awareness across distributed port infrastructure',
  'Reliable monitoring and reporting supporting ISPS-compliant security management',
];

const faqs = [
  {
    question: 'What is the difference between a Command Control Centre and a VMS?',
    answer:
      'A VMS manages CCTV infrastructure, recordings, and video retrieval. An ICCC operates at a higher level by integrating CCTV, VMS, access control, ANPR, UVSS, PIDS, and other operational systems into one centralized monitoring environment.',
  },
  {
    question: 'How does the ICCC support large-scale port monitoring?',
    answer:
      'Large ports span terminals, cargo yards, gates, perimeters, and operational zones. ICCC consolidates these monitoring streams into dashboards and video walls so operators can manage hundreds or thousands of monitoring points together.',
  },
  {
    question: 'How does ICCC improve cross-system incident verification?',
    answer:
      'Instead of relying on a single alert, ICCC correlates inputs such as PIDS alarms, ANPR reads, and CCTV footage in real time. This reduces false alarms and supports faster, more informed response decisions.',
  },
];

export default function ICCCPage({ onNavigate }: ICCCPageProps) {
  return (
    <>
      <SEO
        title="Integrated Command Control Centre (ICCC) for Ports | Mantra Softech"
        description="Integrated command systems for ports that centralize surveillance, access control, perimeter security, ANPR, UVSS, RFID, TOS, and operational monitoring into one coordinated control environment."
        keywords="ICCC for ports, integrated command control centre, port command systems, maritime command center, smart port monitoring, port surveillance integration, ISPS port security"
        canonical="https://maritime.mantratec.com/port-solutions/iccc"
      />

      <section className="relative overflow-hidden bg-slate-950 min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={images.vms || images.heroBg}
            alt="Integrated command systems for maritime ports"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-primary-900/70" />
        </div>

        <div className="relative container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Integrated Command Systems
              </span>

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                  Port Solutions / ICCC
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">Command Systems</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary-400">
                    for Unified Port Control
                  </span>
                </h1>
                <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full" />
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                  Centralized command platforms that bring surveillance, security, and operational systems
                  into one live control environment for faster incident verification and coordinated port response.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Monitor className="w-9 h-9 mx-auto text-orange-500 mb-3" />
                  <div className="text-sm text-gray-300">Central Dashboards</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Activity className="w-9 h-9 mx-auto text-primary-500 mb-3" />
                  <div className="text-sm text-gray-300">Alert Correlation</div>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Shield className="w-9 h-9 mx-auto text-blue-500 mb-3" />
                  <div className="text-sm text-gray-300">ISPS-Aligned Ops</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => onNavigate?.('vms')}
                  className="px-8 py-4 rounded-xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Explore VMS Integration
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid gap-5">
                {[
                  {
                    icon: Camera,
                    title: 'Multi-System Visibility',
                    text: 'View surveillance, access events, alarms, and operational feeds in one command environment.',
                  },
                  {
                    icon: Radio,
                    title: 'Live Incident Context',
                    text: 'Correlate alerts from multiple systems instead of relying on isolated notifications.',
                  },
                  {
                    icon: BarChart3,
                    title: 'Operational Coordination',
                    text: 'Connect security workflows with infrastructure and terminal operations for faster control.',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/15"
                    >
                      <div className="flex gap-4 items-start">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Why ICCC Matters
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-5">
                From Fragmented Alerts to Unified Command Visibility
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
              <p className="text-xl text-gray-600 leading-relaxed">
                Port environments generate continuous alerts, surveillance feeds, and monitoring data.
                When these systems operate in isolation, security teams lose context. ICCC transforms those
                fragmented inputs into a centralized operational view for coordinated monitoring and response.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="group h-full bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-600 flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{layer.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{layer.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-5">
              How the Command Control Centre Operates in Live Port Environments
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 leading-relaxed">
              The command control centre connects multiple security and monitoring systems into a single
              operational interface for centralized visibility across the port.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-bold tracking-widest text-orange-500">
                          STEP {step.step}
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

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,116,144,0.25),transparent_35%)]" />
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Smart Port Coordination Layer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
                One Command Layer Across Surveillance, Security, and Operations
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Within smart port infrastructure, ICCC acts as the central coordination layer that connects
                security technologies and operational monitoring systems into one live decision environment.
              </p>

              <div className="space-y-4">
                {outcomes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-0.5 shrink-0" />
                    <p className="text-gray-200 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-6">Integrated Systems Under ICCC</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCTV Surveillance',
                  'VMS',
                  'Access Control',
                  'ANPR',
                  'UVSS',
                  'PIDS',
                  'RFID',
                  'Gate Automation',
                  'Weighbridge Automation',
                  'TOS Integration',
                  'Digital Twin',
                  'Permit Management',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-xl bg-white/8 border border-white/10 text-sm text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-5">
              Command Systems for Ports, Explained
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-800 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Build a More Coordinated Port Control Environment
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Connect surveillance, security, and operational monitoring systems into a single command layer
            designed for port-wide visibility and faster incident response.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            Talk to Our Team
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}