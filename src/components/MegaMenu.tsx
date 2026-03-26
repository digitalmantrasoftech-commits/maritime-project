import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Camera, Video, AlertTriangle, Monitor, Cpu, Radio, Scan, Shield, FileCheck, Lock, Scale, Box } from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  onClick?: () => void;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

interface MegaMenuProps {
  onNavigate?: (page: string) => void;
}

export default function MegaMenu({ onNavigate }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const serviceCategories: ServiceCategory[] = [
    {
      title: 'ISPS Compliant Security',
      items: [
        {
          icon: Camera,
          title: 'CCTV Surveillance',
          description: 'Continuous monitoring',
          onClick: () => onNavigate?.('cctv')
        },
        {
          icon: Video,
          title: 'VMS',
          description: 'Centralised video management',
          onClick: () => onNavigate?.('vms')
        },
        {
          icon: AlertTriangle,
          title: 'Perimeter Detection',
          description: 'Automated boundary security',
          onClick: () => onNavigate?.('pids')
        },
        {
          icon: Monitor,
          title: 'Command Systems',
          description: 'Integrated control platforms'
        },
        {
  icon: Cpu,
  title: 'Digital Twin',
  description: 'Virtual port models',
  onClick: () => onNavigate?.('digital-twin')
}
      ]
    },
    {
      title: 'Harbour Access Management',
      items: [
        {
          icon: Radio,
          title: 'RFID',
          description: 'Access control & vehicle ID',
          onClick: () => onNavigate?.('rfid')
        },
        {
          icon: Scan,
          title: 'ANPR',
          description: 'Fast vehicle identification',
          onClick: () => onNavigate?.('anpr')
        },
        {
          icon: Lock,
          title: 'Access Control',
          description: 'Personnel & vehicle management',
          onClick: () => onNavigate?.('access-control')
        },
        {
          icon: Shield,
          title: 'UVSS',
          description: 'Gate security',
          onClick: () => onNavigate?.('uvss')
        },
        {
          icon: FileCheck,
          title: 'Permit System',
          description: 'Entry validation'
        },
        {
          icon: Radio,
          title: 'Gate Automation',
          description: 'Automated entry/exit',
          onClick: () => onNavigate?.('gate-automation')
        }
      ]
    },
    {
      title: 'Yard & Terminal Operations',
      items: [
        {
          icon: Box,
          title: 'TOS Integration',
          description: 'Coordinated operations'
        },
        {
          icon: Scale,
          title: 'Weighbridge',
          description: 'Vehicle weighing'
        }
      ]
    }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <button className="text-slate-700 hover:text-orange-500 transition-all duration-300 font-medium relative group flex items-center gap-1">
        Services
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 animate-slide-down">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[90vw] max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h3 className="text-sm font-bold text-primary-800 uppercase tracking-wider border-b-2 border-orange-500 pb-2">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      const handleClick = (e: React.MouseEvent) => {
                        if (item.onClick) {
                          e.preventDefault();
                          item.onClick();
                        }
                        setIsOpen(false);
                      };

                      return (
                        <a
                          key={itemIndex}
                          href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-primary-50 transition-all duration-300 border border-transparent hover:border-orange-200"
                          onClick={handleClick}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-800 to-slate-800 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h4 className="font-bold text-lg mb-1">Need a Custom Solution?</h4>
                  <p className="text-sm text-gray-300">Our experts are ready to help you design the perfect security system</p>
                </div>
                <a
                  href="#contact"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
