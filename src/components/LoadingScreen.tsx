import { Ship } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-900 via-slate-900 to-slate-800 flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto animate-bounce shadow-2xl">
            <Ship className="w-12 h-12 text-white" />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-50 animate-pulse mx-auto"></div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-2">Mantra Softech</h2>
        <p className="text-gray-300 mb-8">Port Security Solutions</p>

        <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-white mt-4 font-semibold">{progress}%</div>
      </div>
    </div>
  );
}
