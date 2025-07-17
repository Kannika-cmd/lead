import { useState } from 'react';
import { 
  Rocket, Lightbulb, Bot, Users, CreditCard, Warehouse, 
  Building2, Shield, Globe, Calendar, ArrowRight, Zap 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookConsultingButton } from './cta/BookConsultingButton';

interface ServicesGridProps {
  selectedGeo: 'india' | 'usa' | null;
  onIdeaGenerator: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function ServicesGrid({ selectedGeo, onIdeaGenerator, trackEvent }: ServicesGridProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'launchpad',
      icon: Rocket,
      title: 'CrossVentura Launchpad',
      shortTitle: 'Launchpad',
      description: 'Choose your path: Opportunity Explorer for steady growth or Fasttrackers for rapid market entry with proven strategies.',
      features: ['Opportunity Explorer', 'Fasttrackers', 'Market Analysis', 'Risk Assessment'],
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50',
      price: 'Starting $15K',
      category: 'Market Entry'
    },
    {
      id: 'idea-generator',
      icon: Lightbulb,
      title: 'Business Idea Generator',
      shortTitle: 'Idea Generator',
      description: 'AI-powered business opportunity discovery with comprehensive market analysis and trend prediction capabilities.',
      features: ['Market Research', 'Trend Analysis', 'Profit Forecasting', 'Competition Analysis'],
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      price: 'Starting $499',
      category: 'AI Innovation'
    },
    {
      id: 'ai-advisor',
      icon: Bot,
      title: 'AI Business Setup Advisor',
      shortTitle: 'AI Advisor',
      description: 'Intelligent, automated guidance for business setup processes with round-the-clock expert support.',
      features: ['24/7 Support', 'Process Automation', 'Legal Guidance', 'Compliance Tracking'],
      gradient: 'from-sky-500 to-blue-600',
      bgGradient: 'from-sky-50 to-blue-50',
      price: 'Starting $199/month',
      category: 'AI Guidance'
    },
    {
      id: 'operations',
      icon: Users,
      title: 'Operational Setup & Partners',
      shortTitle: 'Operations',
      description: 'Establish comprehensive local operations with our verified partner network across 50+ global cities.',
      features: ['Local Partners', 'Office Setup', 'Team Building', 'Infrastructure'],
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      price: 'Starting $25K',
      category: 'Operations'
    },
    {
      id: 'banking',
      icon: CreditCard,
      title: 'Banking & Payment Gateway',
      shortTitle: 'Banking',
      description: 'Comprehensive banking relationships and payment processing setup for seamless global transactions.',
      features: ['Multi-Currency', 'Payment Processing', 'Banking Setup', 'Merchant Accounts'],
      gradient: 'from-indigo-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      price: 'Starting $5K',
      category: 'Financial'
    },
    {
      id: 'warehousing',
      icon: Warehouse,
      title: 'Warehousing & Fulfillment',
      shortTitle: 'Warehousing',
      description: 'Complete warehousing and fulfillment infrastructure support with global reach and scalability.',
      features: ['Global Warehousing', 'Order Fulfillment', 'Inventory Management', 'Logistics'],
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      price: 'Starting $15K',
      category: 'Logistics'
    },
    {
      id: 'ecommerce',
      icon: Building2,
      title: 'Cross-Border eCommerce',
      shortTitle: 'eCommerce',
      description: 'Complete eCommerce setup with international payment processing and regulatory compliance.',
      features: ['Store Setup', 'Payment Integration', 'Global Shipping', 'Marketplace Integration'],
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      price: 'Starting $10K',
      category: 'Digital Commerce'
    },
    {
      id: 'tax-structure',
      icon: Shield,
      title: 'Tax Structuring & Mitigation',
      shortTitle: 'Tax Structure',
      description: 'Optimize your tax structure for international operations and maximize savings with expert guidance.',
      features: ['Tax Planning', 'Compliance', 'Savings Optimization', 'International Tax'],
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      price: 'Starting $20K',
      category: 'Tax & Legal'
    },
    {
      id: 'compliance',
      icon: Globe,
      title: 'Ongoing Compliance Support',
      shortTitle: 'Compliance',
      description: 'Maintain compliance across all jurisdictions with our comprehensive ongoing support services.',
      features: ['Regular Updates', 'Compliance Monitoring', 'Legal Support', 'Risk Management'],
      gradient: 'from-amber-500 to-yellow-600',
      bgGradient: 'from-amber-50 to-yellow-50',
      price: 'Starting $2K/month',
      category: 'Compliance'
    }
  ];

  const handleServiceClick = (service: any) => {
    trackEvent('service_click', { service: service.id, selectedGeo });
    
    if (service.id === 'idea-generator') {
      onIdeaGenerator();
    } else if (service.id === 'consulting') {
      console.log('Opening consultation booking...');
    } else {
      console.log(`Opening ${service.title}...`);
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-8 shadow-lg">
            <Zap className="h-8 w-8 text-violet-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive AI-powered solutions for international business expansion, 
            designed to simplify complexity and accelerate your global growth journey.
          </p>

          {selectedGeo && (
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto border border-violet-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🎯 Services for {selectedGeo === 'india' ? 'India' : 'USA'} Expansion
              </h3>
              <p className="text-gray-600 text-lg">
                Tailored solutions specifically designed for your {selectedGeo === 'india' ? 'Indian' : 'US'} market entry strategy
              </p>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`group relative overflow-hidden transition-all duration-500 cursor-pointer border-0 ${
                hoveredService === service.id 
                  ? 'transform scale-110 z-20 shadow-2xl' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service)}
            >
              <CardContent className="p-0 h-full">
                <div className={`bg-gradient-to-br ${service.bgGradient} p-8 h-full relative overflow-hidden`}>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon - Centered */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {hoveredService === service.id ? service.title : service.shortTitle}
                    </h3>
                    
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full text-sm font-semibold shadow-md`}>
                        {service.price}
                      </span>
                    </div>

                    {/* Description - Only show on hover */}
                    {hoveredService === service.id && (
                      <div className="animate-fade-in">
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center justify-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <Button 
                            size="sm"
                            className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 text-white rounded-xl text-sm font-semibold`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Default state - Simple view */}
                    {hoveredService !== service.id && (
                      <div className="flex items-center justify-center mt-4">
                        <span className="text-gray-500 text-sm">Hover to explore</span>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 transition-all duration-500 pointer-events-none ${
                    hoveredService === service.id ? 'from-white/5 to-white/10' : ''
                  }`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-12 max-w-5xl mx-auto border border-violet-200 shadow-xl">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Need Help Choosing the Right Services?</h3>
            <p className="text-gray-600 mb-8 text-xl leading-relaxed max-w-3xl mx-auto">
              Our experts can help you create a customized expansion plan tailored to your specific business needs and goals.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <BookConsultingButton 
                size="lg"
                className="px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl"
                trackEvent={trackEvent}
              />
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-violet-300 text-violet-600 hover:bg-violet-50 px-10 py-4 rounded-full font-semibold text-lg"
                onClick={() => trackEvent('services_explore_all')}
              >
                Explore All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}