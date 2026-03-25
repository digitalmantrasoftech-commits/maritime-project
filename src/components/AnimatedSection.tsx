import { useRef, useEffect, useState, ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-up' | 'fade-left' | 'fade-right';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-in',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, 0.1);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const animationClasses = {
    'fade-in': shouldAnimate ? 'opacity-100' : 'opacity-0',
    'slide-up': shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    'slide-left': shouldAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
    'slide-right': shouldAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
    'scale-in': shouldAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'fade-up': shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    'fade-left': shouldAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
    'fade-right': shouldAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
