import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SuccessStoriesTicker } from './components/SuccessStoriesTicker';
import { GeoTabs } from './components/GeoTabs';
import { LaunchpadSection } from './components/LaunchpadSection';
import { ServicesGrid } from './components/ServicesGrid';
import { DashboardVideoSection } from './components/DashboardVideoSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyCrossVentura } from './components/WhyCrossVentura';
import { ABCSection } from './components/ABCSection';
import { ConsultantsSection } from './components/ConsultantsSection';
import { PricingSection } from './components/PricingSection';
import { ResourcesSection } from './components/ResourcesSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { Footer } from './components/Footer';
import { ChatSystem } from './components/ChatSystem';
import { PopupSystem } from './components/PopupSystem';
import { LoadingScreen } from './components/LoadingScreen';
import { BusinessIdeaGenerator } from './components/BusinessIdeaGenerator';
import { PortalPreview } from './components/PortalPreview';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGeo, setSelectedGeo] = useState<'india' | 'usa' | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showIdeaGenerator, setShowIdeaGenerator] = useState(false);
  const [showPortalPreview, setShowPortalPreview] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Analytics event tracking
  const trackEvent = (eventName: string, data?: any) => {
    console.log('Analytics Event:', eventName, data);
    // In production, send to analytics service
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showIdeaGenerator) {
    return (
      <BusinessIdeaGenerator 
        onClose={() => setShowIdeaGenerator(false)}
        onChatOpen={() => setIsChatOpen(true)}
        trackEvent={trackEvent}
      />
    );
  }

  if (showPortalPreview) {
    return (
      <PortalPreview 
        onClose={() => setShowPortalPreview(false)}
        trackEvent={trackEvent}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col items-center justify-center">
      <Header trackEvent={trackEvent} />
      
      <Hero 
        selectedGeo={selectedGeo}
        onGeoSelect={setSelectedGeo}
        onChatOpen={() => setIsChatOpen(true)}
        onPortalPreview={() => setShowPortalPreview(true)}
        trackEvent={trackEvent}
      />
      
      <SuccessStoriesTicker />
      
      <GeoTabs 
        selectedGeo={selectedGeo}
        onGeoSelect={setSelectedGeo}
        trackEvent={trackEvent}
      />
      
      <LaunchpadSection 
        selectedGeo={selectedGeo}
        trackEvent={trackEvent}
      />
      
      <ServicesGrid 
        selectedGeo={selectedGeo}
        onIdeaGenerator={() => setShowIdeaGenerator(true)}
        trackEvent={trackEvent}
      />
      
      <DashboardVideoSection 
        onPortalPreview={() => setShowPortalPreview(true)}
        trackEvent={trackEvent}
      />
      
      <HowItWorks trackEvent={trackEvent} />
      
      <WhyCrossVentura />
      
      <ABCSection trackEvent={trackEvent} />
      
      <ConsultantsSection 
        onChatOpen={() => setIsChatOpen(true)}
        trackEvent={trackEvent}
      />
      
      <PricingSection trackEvent={trackEvent} />
      
      <TestimonialsCarousel />
      
      <ResourcesSection trackEvent={trackEvent} />
      
      <Footer 
        onChatOpen={() => setIsChatOpen(true)}
        trackEvent={trackEvent}
      />
      
      <ChatSystem 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        selectedGeo={selectedGeo}
        trackEvent={trackEvent}
      />
      
      <PopupSystem 
        selectedGeo={selectedGeo}
        onChatOpen={() => setIsChatOpen(true)}
        trackEvent={trackEvent}
      />
      
      <Toaster />
    </div>
  );
}

export default App;