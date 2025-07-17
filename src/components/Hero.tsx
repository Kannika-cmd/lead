import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookConsultingButton } from './cta/BookConsultingButton';

interface HeroProps {
  selectedGeo: 'india' | 'usa' | null;
  onGeoSelect: (geo: 'india' | 'usa') => void;
  onChatOpen: () => void;
  onPortalPreview: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function Hero({ selectedGeo, onGeoSelect, onChatOpen, onPortalPreview, trackEvent }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGeoClick = (geo: 'india' | 'usa') => {
    onGeoSelect(geo);
    trackEvent('geo_cta_click', { geo });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-sky-50 pt-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="h-8 w-8 text-violet-400 opacity-60" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Globe className="h-6 w-6 text-rose-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
          <TrendingUp className="h-10 w-10 text-sky-400 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Centered Content Layout */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block p-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6 shadow-lg">
            <span className="text-violet-600 font-semibold text-sm px-4 py-1">🚀 #1 Global Business Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Expand Your Business
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Across Borders
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto px-4">
            AI-powered platform for seamless international expansion between India and the USA. 
            <span className="block mt-2 text-violet-600 font-semibold">Join 10,000+ businesses scaling globally</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
            <Button 
              onClick={() => handleGeoClick('india')}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🇮🇳 Make India Your Playground
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => handleGeoClick('usa')}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 sm:px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🇺🇸 Take a Big Bite of the US Market
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          <div className="mb-12">
            <BookConsultingButton 
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full font-semibold"
              trackEvent={trackEvent}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-violet-600">500+</div>
              <div className="text-sm text-gray-600">Businesses Expanded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-sky-600">$2.5B</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}