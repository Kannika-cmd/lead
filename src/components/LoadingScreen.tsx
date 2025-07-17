import { useEffect, useState } from 'react';
import { TrendingUp, Globe } from 'lucide-react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Initializing AI systems...',
    'Loading market data...',
    'Connecting to global networks...',
    'Preparing your experience...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 500);

    return () => clearInterval(stepInterval);
  }, [steps.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-50 via-rose-50 to-sky-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl shadow-lg animate-pulse">
              <TrendingUp className="h-12 w-12 text-white" />
              <Globe className="h-6 w-6 text-sky-400 absolute -top-2 -right-2 bg-white rounded-full p-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              CrossVentura
            </span>
            <span className="text-sm text-gray-500">Global Business Solutions</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-violet-500 to-purple-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-gray-700 font-medium animate-pulse">
            {steps[currentStep]}
          </p>
          <p className="text-sm text-gray-500">{progress}% Complete</p>
        </div>

        {/* Floating Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-sky-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
}