import { Building2, Users, Award, Briefcase } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.3);

  const { count: stat1Count, startCounting: startStat1 } = useCountUp(150, 2000);
  const { count: stat2Count, startCounting: startStat2 } = useCountUp(250, 2000);
  const { count: stat3Count, startCounting: startStat3 } = useCountUp(25, 2000);
  const { count: stat4Count, startCounting: startStat4 } = useCountUp(5, 2000);

  useEffect(() => {
    if (isVisible) {
      startStat1();
      startStat2();
      startStat3();
      startStat4();
    }
  }, [isVisible, startStat1, startStat2, startStat3, startStat4]);

  const stats = [
    {
      icon: Building2,
      number: stat1Count,
      suffix: '+',
      label: 'Site Secured',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      number: stat2Count,
      suffix: '+',
      label: 'R&D Personnel',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Award,
      number: stat3Count,
      suffix: '+',
      label: 'Industry Awards',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Briefcase,
      number: stat4Count,
      suffix: '+',
      label: 'Patent',
      color: 'from-primary-500 to-primary-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-r from-primary-800 via-primary-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative inline-block mb-4 md:mb-6">
                <div className={`w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                  <stat.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <div className={`absolute inset-0 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm md:text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
