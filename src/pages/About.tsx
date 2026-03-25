import { Shield, Users, Award, Target } from 'lucide-react';
import SEO from '../components/SEO';
import AboutUs from '../components/AboutUs';
import OurJourney from '../components/OurJourney';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the highest security standards in all our solutions, ensuring complete protection for your port operations.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Our dedicated team works closely with clients to deliver customized security solutions that meet their specific needs.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest quality standards in our products and services, backed by industry certifications.'
    },
    {
      icon: Target,
      title: 'Innovation Driven',
      description: 'We continuously innovate and integrate cutting-edge technology to stay ahead of emerging security challenges.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Mantra Softech | Leading Port Security Solutions Provider"
        description="Learn about Mantra Softech, a leading provider of comprehensive port security and access control solutions. Discover our mission, values, and commitment to maritime security excellence."
        canonical="https://mantrasoftech.com/about"
        ogTitle="About Mantra Softech - Port Security Experts"
        ogDescription="Mantra Softech delivers world-class port security solutions including ANPR, CCTV, access control, and gate automation systems for ISPS-compliant operations."
      />

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">About Mantra Softech</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Leading the future of port security with innovative access control and surveillance solutions designed for the modern maritime industry.
            </p>
          </div>
        </div>
      </section>

      <AboutUs />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wider">Our Core Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
              What Drives Us Forward
            </h2>
            <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-800 via-primary-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Secure Your Port Operations?
            </h2>
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              Join hundreds of satisfied clients who trust Mantra Softech for their security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+988258263"
                className="bg-white text-slate-800 px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                +988-258-263
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
