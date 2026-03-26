import { images } from "../assets/images";

export default function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-orange-50/30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="relative mb-8 md:mb-0">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                <img src={images.portImg} alt="Port Security"
                  className="rounded-xl md:rounded-2xl shadow-2xl w-full h-48 md:h-64 object-cover" />
                <img src={images.teamImg} alt="Security Team"
                  className="rounded-xl md:rounded-2xl shadow-2xl w-full h-48 md:h-64 object-cover mt-6 md:mt-8" />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-orange-500 text-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-2xl">
                <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">15+</div>
                <div className="text-xs md:text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right mt-12 md:mt-0">
            <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wider">About Mantra Softech</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4 md:mb-6 leading-tight">
              Leading Provider of <span className="text-orange-500">Port Security Solutions</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-orange-500 mb-4 md:mb-6"></div>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              Mantra Softech provides comprehensive security access control systems designed specifically for port environments. Our intelligent solutions enable port authorities to control and monitor personnel and vehicle access across operational and restricted zones.
            </p>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              With integration capabilities for access cards, biometric authentication, and facial recognition technologies, we ensure access decisions are enforced consistently while maintaining reliable and auditable records for ISPS compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                  <i className="bi bi-shield-check w-6 h-6 md:w-7 md:h-7 text-orange-500 group-hover:text-white transition-colors inline-flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 mb-1">ISPS Compliant</h4>
                  <p className="text-xs md:text-sm text-gray-600">Full compliance standards</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                  <i className="bi bi-people w-6 h-6 md:w-7 md:h-7 text-orange-500 group-hover:text-white transition-colors inline-flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 mb-1">Expert Team</h4>
                  <p className="text-xs md:text-sm text-gray-600">Certified professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                  <i className="bi bi-award w-6 h-6 md:w-7 md:h-7 text-orange-500 group-hover:text-white transition-colors inline-flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 mb-1">Award Winning</h4>
                  <p className="text-xs md:text-sm text-gray-600">Industry recognition</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                  <i className="bi bi-clock w-6 h-6 md:w-7 md:h-7 text-orange-500 group-hover:text-white transition-colors inline-flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 mb-1">24/7 Support</h4>
                  <p className="text-xs md:text-sm text-gray-600">Round-the-clock service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
