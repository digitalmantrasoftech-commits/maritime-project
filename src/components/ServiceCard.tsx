import { Video as LucideIcon, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  onClick?: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, link, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 rounded-2xl transition-all duration-500 transform overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="relative">
        <div className="relative mb-6 inline-block">
          <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform transition-all duration-500 shadow-lg ${
            isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
          }`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl blur-lg transition-opacity duration-500 ${
            isHovered ? 'opacity-60' : 'opacity-0'
          }`}></div>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-700">
          {description}
        </p>

        <div className={`flex items-center text-orange-500 font-semibold text-sm transition-all duration-300 ${
          isHovered ? 'gap-3' : 'gap-2'
        }`}>
          <span>Learn More</span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
            isHovered ? 'translate-x-2' : 'translate-x-0'
          }`} />
        </div>
      </div>

    </a>
  );
}
