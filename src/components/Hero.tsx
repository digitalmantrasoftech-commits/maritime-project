import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-slate-900/95 to-slate-800/95 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>

      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 animate-fade-in">
            <div className="h-px w-8 md:w-12 bg-orange-500"></div>
            <span className="text-orange-400 font-semibold text-xs md:text-sm uppercase tracking-wider">
              Security Access Control Systems
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white">
            ISPS-Compliant <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Port Security Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-200 leading-relaxed max-w-3xl">
            Intelligent access control systems designed for port environments, enabling authorities to control and monitor personnel and vehicle access across operational and restricted zones
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
            <a
              href="#services"
              className="group bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 text-sm md:text-base"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all shadow-2xl hover:-translate-y-1 text-center text-sm md:text-base"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">ISPS</div>
                <div className="text-xs md:text-sm text-gray-300">Compliant</div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs md:text-sm text-gray-300">Monitoring</div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">100%</div>
                <div className="text-xs md:text-sm text-gray-300">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
}
