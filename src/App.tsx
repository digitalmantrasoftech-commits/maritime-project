import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MegaMenu from './components/MegaMenu';
import AnimatedSection from './components/AnimatedSection';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CCTVPage from './components/CCTVPage';
import VMSPage from './components/VMSPage';
import PIDSPage from './components/PIDSPage';
import RFIDPage from './components/RFIDPage';
import ANPRPage from './components/ANPRPage';
import AccessControlPage from './components/AccessControlPage';
import UVSSPage from './components/UVSSPage';
import GateAutomationPage from './components/GateAutomationPage';
import TimedRedirect from './components/TimedRedirect';
import { images } from './assets/images';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceNavigation = (page: string) => {
    navigate(`/services/${page}`);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-primary-800 text-white py-2 animate-slide-down">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm gap-2">
            <div className="flex items-center gap-3 md:gap-6">
              <a href="tel:+988258263" className="flex items-center gap-1 md:gap-2 hover:text-orange-400 transition-colors duration-300">
                <i className="bi bi-telephone w-3 h-3 md:w-4 md:h-4 inline-flex items-center justify-center"></i>
                <span className="hidden sm:inline">+988-258-263</span>
              </a>
              <a href="mailto:info@mantrasoftech.com" className="flex items-center gap-1 md:gap-2 hover:text-orange-400 transition-colors duration-300">
                <i className="bi bi-envelope w-3 h-3 md:w-4 md:h-4 inline-flex items-center justify-center"></i>
                <span className="hidden sm:inline">info@mantrasoftech.com</span>
              </a>
            </div>
            <div className="text-gray-300 text-xs hidden lg:block">
              Mon - Sat 8:00 - 17:30, Sunday - CLOSED
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-lg bg-white/95 animate-slide-down">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <img src={images.logoImg} alt="Mantra Softech" className="h-10 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link to="/about" className="text-slate-700 hover:text-orange-500 transition-all duration-300 font-medium relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <MegaMenu onNavigate={handleServiceNavigation} />
              <Link to="/blog" className="text-slate-700 hover:text-orange-500 transition-all duration-300 font-medium relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-slate-700 hover:text-orange-500 transition-all duration-300 font-medium relative group">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-orange-500 transition-colors"
            >
              {mobileMenuOpen ? <i className="bi bi-x-lg w-6 h-6 inline-flex items-center justify-center"></i> : <i className="bi bi-list w-6 h-6 inline-flex items-center justify-center"></i>}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 space-y-3 animate-slide-down">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 font-medium">
                About Us
              </Link>
              <div className="px-4 py-2">
                <div className="font-medium text-slate-700 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <button onClick={() => handleServiceNavigation('cctv')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">CCTV Surveillance</button>
                  <button onClick={() => handleServiceNavigation('vms')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">VMS Solutions</button>
                  <button onClick={() => handleServiceNavigation('pids')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">PIDS Systems</button>
                  <button onClick={() => handleServiceNavigation('rfid')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">RFID Solutions</button>
                  <button onClick={() => handleServiceNavigation('anpr')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">ANPR Solutions</button>
                  <button onClick={() => handleServiceNavigation('access-control')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">Access Control</button>
                  <button onClick={() => handleServiceNavigation('uvss')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">UVSS Systems</button>
                  <button onClick={() => handleServiceNavigation('gate-automation')} className="block w-full text-left py-1 text-sm text-slate-600 hover:text-orange-500 transition-colors">Gate Automation</button>
                </div>
              </div>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 font-medium">
                Blog
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 font-medium">
                Contact Us
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mx-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg w-auto inline-block">
                Get a Quote
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <AnimatedSection animation="fade-in" delay={0}>
            <div>
              <Link to="/" className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className="bi bi-ship w-6 h-6 md:w-7 md:h-7 text-white inline-flex items-center justify-center"></i>
                </div>
                <span className="text-xl md:text-2xl font-bold">Mantra Softech</span>
              </Link>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                Leading provider of security access control systems for port environments
              </p>
              <div className="flex gap-2 md:gap-3">
                {['f', 't', 'in'].map((social, idx) => (
                  <a key={idx} href="#" className="w-9 h-9 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                    <span className="text-xs md:text-sm">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={100}>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Services</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
                {['Access Control', 'ANPR Solutions', 'CCTV Surveillance', 'Gate Automation', 'RFID Systems'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
                <li><Link to="/about" className="hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300}>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6">Contact Info</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
                <li className="flex items-start gap-2 hover:text-orange-500 transition-colors duration-300">
                  <i className="bi bi-envelope w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0 mt-0.5 inline-flex items-center justify-center"></i>
                  <span className="break-all">maritime@mantratec.com</span>
                </li>
                <li className="flex items-start gap-2 hover:text-orange-500 transition-colors duration-300">
                  <i className="bi bi-telephone w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0 mt-0.5 inline-flex items-center justify-center"></i>
                  <span>+919512320752</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">&copy; 2026 Mantra Softech. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ServicePageWrapper({ component: Component }: { component: React.ComponentType<any> }) {
  const navigate = useNavigate();

  return (
    <>
      <Component onNavigate={(page: string) => navigate(`/services/${page}`)} />
      <AnimatedSection animation="scale-in">
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary-800 via-primary-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                  Ready to Secure Your Port Operations?
                </h2>
                <p className="text-base md:text-xl text-gray-200">
                  Contact us today to learn more about our security solutions.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl whitespace-nowrap hover:scale-110 transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}

function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home onNavigate={(page) => navigate(`/services/${page}`)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services/cctv" element={<ServicePageWrapper component={CCTVPage} />} />
        <Route path="/services/vms" element={<ServicePageWrapper component={VMSPage} />} />
        <Route path="/services/pids" element={<ServicePageWrapper component={PIDSPage} />} />
        <Route path="/services/rfid" element={<ServicePageWrapper component={RFIDPage} />} />
        <Route path="/services/anpr" element={<ServicePageWrapper component={ANPRPage} />} />
        <Route path="/services/access-control" element={<ServicePageWrapper component={AccessControlPage} />} />
        <Route path="/services/uvss" element={<ServicePageWrapper component={UVSSPage} />} />
        <Route path="/services/gate-automation" element={<ServicePageWrapper component={GateAutomationPage} />} />
        <Route path="/redirect-msft" element={<TimedRedirect />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
