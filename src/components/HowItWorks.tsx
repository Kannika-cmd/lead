import { Target, Users, FileText, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HowItWorksProps {
  trackEvent: (eventName: string, data?: any) => void;
}

export function HowItWorks({ trackEvent }: HowItWorksProps) {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: 'Choose Your Market, Choose Your Mode',
      description: 'Select India, USA, or both markets. Pick between Opportunity Explorer for careful validation or Fasttrackers for rapid entry.',
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200'
    },
    {
      number: 2,
      icon: Users,
      title: 'Pick Your Expert — AI or Human',
      description: 'Get guidance from our AI Business Agents available 24/7, or book sessions with our experienced human consultants.',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200'
    },
    {
      number: 3,
      icon: FileText,
      title: 'Get Your Tailored Market Entry Blueprint',
      description: 'Receive a comprehensive, actionable plan covering legal requirements, operational setup, and growth strategies.',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200'
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Launch. Expand. Lead.',
      description: 'Execute your plan with our ongoing support, scale your operations, and establish market leadership.',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-8 shadow-lg">
            <Rocket className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How It
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Four strategic steps to transform your business from local to global. 
            Our proven methodology has helped 500+ businesses expand successfully.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Successful Expansions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">6 Months</div>
              <div className="text-sm text-gray-600">Average Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">350%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className={`bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${step.borderColor} h-full relative overflow-hidden`}>
                
                {/* Step Number Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Centered Icon */}
                <div className="flex justify-center mb-8">
                  <div className={`p-6 bg-gradient-to-r ${step.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{step.description}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-white/30 to-white/20 rounded-full blur-lg"></div>
              </div>

              {/* Connection Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-12 max-w-5xl mx-auto border-2 border-violet-200 shadow-xl">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Global Journey?</h3>
            <p className="text-gray-600 mb-8 text-xl leading-relaxed max-w-3xl mx-auto">
              The world is open for business. Let's help you claim your market with our proven 4-step methodology.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => trackEvent('how_it_works_cta')}
            >
              Start Building Beyond Borders
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}