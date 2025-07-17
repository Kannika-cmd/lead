import { useState } from 'react';
import { Calculator, DollarSign, Check, Zap, Crown, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingSectionProps {
  trackEvent: (eventName: string, data?: any) => void;
}

export function PricingSection({ trackEvent }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual' | 'custom'>('monthly');

  const pricingTiers = [
    {
      id: 'explorer',
      name: 'Opportunity Explorer',
      icon: Calculator,
      description: 'Perfect for businesses looking to test the waters and validate market fit',
      price: {
        monthly: 15000,
        annual: 150000,
        custom: 'Custom'
      },
      features: [
        'Market validation & research',
        'Regulatory compliance roadmap',
        'Phased market entry strategy',
        'Local partner identification',
        'Risk assessment & mitigation',
        'Pilot program setup',
        'AI business agent support',
        'Monthly consultant check-ins'
      ],
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      popular: false
    },
    {
      id: 'fasttracker',
      name: 'Fasttrackers',
      icon: Zap,
      description: 'For businesses ready to move fast with proven strategies and partnerships',
      price: {
        monthly: 50000,
        annual: 500000,
        custom: 'Custom'
      },
      features: [
        'Rapid market entry (30-90 days)',
        'Pre-vetted partner network',
        'Accelerated legal setup',
        'Ready-to-use infrastructure',
        'Fast-track compliance',
        'Immediate operational support',
        '24/7 AI + human support',
        'Weekly consultant sessions',
        'Priority partner access',
        'Dedicated account manager'
      ],
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      description: 'Comprehensive solution for large organizations with complex requirements',
      price: {
        monthly: 'Custom',
        annual: 'Custom',
        custom: 'Custom'
      },
      features: [
        'Everything in Fasttrackers',
        'Multi-market expansion',
        'Custom compliance frameworks',
        'Dedicated legal team',
        'White-glove service',
        'Custom integrations',
        'Executive advisory board',
        'Unlimited consultant access',
        'Custom reporting & analytics',
        'SLA guarantees'
      ],
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      popular: false
    }
  ];

  const addOnServices = [
    { name: 'Business Idea Generator', price: 499 },
    { name: 'AI Business Setup Advisor', price: 199, recurring: 'monthly' },
    { name: 'Banking & Payment Setup', price: 5000 },
    { name: 'Tax Structuring', price: 20000 },
    { name: 'Ongoing Compliance', price: 2000, recurring: 'monthly' }
  ];

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handlePlanSelect = (planId: string) => {
    trackEvent('pricing_plan_select', { plan: planId, billing: billingCycle });
    // In production, this would open checkout or contact form
    console.log(`Selected plan: ${planId} with ${billingCycle} billing`);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transparent
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your expansion goals. All plans include our core ABC methodology 
            and access to our global partner network.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <div className="flex space-x-1">
                {['monthly', 'annual', 'custom'].map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => {
                      setBillingCycle(cycle as any);
                      trackEvent('billing_cycle_change', { cycle });
                    }}
                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                      billingCycle === cycle
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                    {cycle === 'annual' && (
                      <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 20%</Badge>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-200">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">🎯 Early Access Pricing</h3>
            <p className="text-yellow-700 text-sm">
              Lock in these rates now - pricing will increase as we scale. All plans include free consultation.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.id}
              className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 border-0 ${
                tier.popular 
                  ? 'ring-4 ring-violet-500 shadow-2xl' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  🔥 Most Popular
                </div>
              )}
              
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${tier.bgGradient} p-8 ${tier.popular ? 'pt-12' : ''}`}>
                  <div className={`p-4 bg-gradient-to-r ${tier.gradient} rounded-2xl mb-6 inline-block shadow-lg`}>
                    <tier.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {formatPrice(tier.price[billingCycle])}
                    </div>
                    {typeof tier.price[billingCycle] === 'number' && (
                      <div className="text-sm text-gray-600">
                        {billingCycle === 'monthly' ? 'One-time setup fee' : 'Annual package'}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handlePlanSelect(tier.id)}
                    className={`w-full bg-gradient-to-r ${tier.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white py-4 rounded-xl font-semibold text-lg`}
                  >
                    {tier.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                    <Rocket className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add-on Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-semibold text-gray-900">{service.name}</h4>
                  {service.recurring && (
                    <span className="text-sm text-gray-600">per {service.recurring}</span>
                  )}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {formatPrice(service.price)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Information */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Expected ROI</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
              <div className="text-gray-600">Average ROI</div>
              <div className="text-sm text-gray-500">Within 12 months</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">6 months</div>
              <div className="text-gray-600">Payback Period</div>
              <div className="text-sm text-gray-500">Typical timeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
              <div className="text-sm text-gray-500">Client satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}