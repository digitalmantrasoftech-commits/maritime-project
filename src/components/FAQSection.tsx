import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the difference between Access Control and Gate Automation?',
      answer: 'Both systems are part of the port security framework but they control different types of movement. Access Control manages and controls people movement inside the port, used at buildings, restricted zones, control rooms, and operational facilities. Gate Automation controls the physical opening and closing of vehicle gates, used at port entry and exit lanes.'
    },
    {
      question: 'Does the ANPR system slow down vehicle movement at port gates?',
      answer: 'No. Automatic number plate recognition systems capture vehicle plates while vehicles remain in motion, ensuring that gate throughput depends on gate capacity rather than identification speed.'
    },
    {
      question: 'Can RFID operate effectively in harsh port conditions?',
      answer: 'Yes. RFID deployments in ports are engineered for metal-dense environments and harsh outdoor conditions. Reader placement, tag positioning, and calibration are designed to maintain consistent reads despite weather exposure, equipment movement, and high vehicle density.'
    },
    {
      question: 'What is the role of Perimeter Intrusion Detection System (PIDS)?',
      answer: 'A PIDS continuously monitors port boundaries and detects unauthorised access attempts such as fence climbing, cutting, or disturbance. It acts as an early-warning security layer for port perimeter protection.'
    },
    {
      question: 'How does UVSS operate at high traffic volumes?',
      answer: 'UVSS systems used in ports are designed for continuous operation, supporting heavy commercial vehicles and high traffic density while maintaining normal gate throughput. Inspection occurs automatically as vehicles pass through designated lanes.'
    },
    {
      question: 'Can the Video Management System handle large-scale deployments?',
      answer: 'Yes. Modern VMS are designed to support large surveillance networks with hundreds or thousands of cameras. The system can manage multiple camera streams simultaneously, organize them by location or operational zone, and allow security teams to monitor activities from a central interface.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Common questions about our port security systems
            </p>
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
  );
}
