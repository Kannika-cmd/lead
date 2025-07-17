import { useState } from 'react';
import { Key, Cog, MessageCircle, ChevronDown, ChevronUp, ArrowRight, Shield, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ABCSectionProps {
  trackEvent: (eventName: string, data?: any) => void;
}

export function ABCSection({ trackEvent }: ABCSectionProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('access');

  const abcItems = [
    {
      id: 'access',
      letter: 'A',
      title: 'Access',
      subtitle: 'Regulatory, Compliance & Market Access',
      icon: Key,
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      description: 'Navigate complex regulatory landscapes with confidence. We handle all legal requirements, compliance frameworks, and market access protocols to ensure smooth entry.',
      features: [
        'Business registration and licensing',
        'Regulatory compliance mapping',
        'Government liaison and approvals',
        'Industry-specific certifications',
        'Ongoing regulatory monitoring',
        'Legal structure optimization'
      ],
      benefits: [
        'Faster market entry',
        'Zero compliance violations',
        'Reduced legal risks',
        'Government relationship building'
      ],
      stats: '100% Compliant'
    },
    {
      id: 'backend',
      letter: 'B',
      title: 'Backend Support',
      subtitle: 'Infrastructure, Partners & Operations',
      icon: Cog,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      description: 'Build robust operational infrastructure with our extensive partner network. From banking to warehousing, we provide comprehensive backend support.',
      features: [
        'Banking and financial setup',
        'Office space and facilities',
        'IT infrastructure deployment',
        'Supply chain establishment',
        'Local hiring and HR setup',
        'Operational process design'
      ],
      benefits: [
        'Seamless operations',
        'Cost-effective setup',
        'Scalable infrastructure',
        'Local market integration'
      ],
      stats: '500+ Partners'
    },
    {
      id: 'consulting',
      letter: 'C',
      title: 'Consulting that Actually Matters',
      subtitle: 'Expert Guidance, AI + Human Support',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
      description: 'Get strategic guidance that drives results. Our unique combination of AI-powered insights and human expertise ensures you make the right decisions.',
      features: [
        '24/7 AI business agent support',
        'Expert consultant access',
        'Strategic planning sessions',
        'Market intelligence reports',
        'Performance monitoring',
        'Continuous optimization'
      ],
      benefits: [
        'Data-driven decisions',
        'Expert validation',
        'Continuous support',
        'Strategic advantage'
      ],
      stats: 'AI + Human'
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
    trackEvent('abc_accordion_toggle', { section: id });
  };

  return (
    <section id="abc" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-emerald-100 to-purple-100 rounded-full mb-8 shadow-lg">
            <Shield className="h-8 w-8 text-emerald-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ABC of
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cross-Border Business™
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Our proven methodology breaks down international expansion into three essential pillars. 
            Master these fundamentals, and you master global business success.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Partner Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">AI + Human Support</div>
            </div>
          </div>
        </div>

        {/* Desktop 3-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {abcItems.map((item) => (
            <Card key={item.id} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <div className={`bg-gradient-to-br ${item.bgGradient} p-8 h-full relative border-2 ${item.borderColor} rounded-lg`}>
                  
                  {/* Letter Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      {item.letter}
                    </div>
                  </div>

                  {/* Centered Icon */}
                  <div className="flex justify-center mb-8">
                    <div className={`p-6 bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">{item.subtitle}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">{item.description}</p>
                    
                    {/* Stats Badge */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} text-white rounded-full text-sm font-bold mb-6 shadow-md`}>
                      {item.stats}
                    </div>
                    
                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      {item.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 text-center">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Benefits:</h4>
                      {item.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                          <span className="text-sm text-gray-700 font-medium text-center">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-r from-white/30 to-white/20 rounded-full blur-lg"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4 mb-16">
          {abcItems.map((item) => (
            <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full bg-gradient-to-br ${item.bgGradient} p-6 text-left transition-all duration-300 border-2 ${item.borderColor}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {item.letter}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                    {activeAccordion === item.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </button>
                
                {activeAccordion === item.id && (
                  <div className="p-6 bg-white border-t border-gray-200/50 animate-fade-in">
                    <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {item.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <div className="space-y-2">
                          {item.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                              <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-purple-50 rounded-3xl p-12 max-w-5xl mx-auto border-2 border-emerald-200 shadow-xl">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Master the ABC?</h3>
            <p className="text-gray-600 mb-8 text-xl leading-relaxed max-w-3xl mx-auto">
              See what's included in our comprehensive expansion packages and start your international journey today.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => trackEvent('abc_see_included')}
              >
                See What's Included
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-12 py-4 rounded-full font-semibold text-lg"
                onClick={() => trackEvent('abc_start_launchpad')}
              >
                Start Launchpad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}