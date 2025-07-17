import { Rocket, Lightbulb, Bot, Users, CreditCard, Warehouse, Building2, Shield, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Services() {
  const services = [
    {
      icon: Rocket,
      title: 'CrossVentura Launchpad',
      category: 'Market Entry Strategies',
      description: 'Choose your path: Opportunity Explorer for steady growth or FastTrackers for rapid market entry.',
      features: ['Opportunity Explorer', 'FastTrackers', 'Market Analysis'],
      gradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
      iconColor: 'text-violet-600',
      price: 'Starting $2,999'
    },
    {
      icon: Lightbulb,
      title: 'Business Idea Generator',
      category: 'AI-Powered Innovation',
      description: 'Discover profitable business opportunities with AI-driven market analysis and trend prediction.',
      features: ['Market Research', 'Trend Analysis', 'Profit Forecasting'],
      gradient: 'from-rose-50 to-pink-50',
      borderColor: 'border-rose-200',
      iconColor: 'text-rose-600',
      price: 'Starting $499'
    },
    {
      icon: Bot,
      title: 'AI Business Setup Advisor',
      category: 'AI-Driven Guidance',
      description: 'Get intelligent, automated guidance for business setup processes with 24/7 support.',
      features: ['24/7 Support', 'Process Automation', 'Legal Guidance'],
      gradient: 'from-sky-50 to-blue-50',
      borderColor: 'border-sky-200',
      iconColor: 'text-sky-600',
      price: 'Starting $199/month'
    },
    {
      icon: Users,
      title: 'Operational Setup & Local Partners',
      category: 'Ground Support',
      description: 'Establish local operations with our verified partner network across 50+ cities.',
      features: ['Local Partners', 'Office Setup', 'Team Building'],
      gradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      iconColor: 'text-emerald-600',
      price: 'Starting $1,499'
    },
    {
      icon: CreditCard,
      title: 'Banking & Payment Gateway',
      category: 'Financial Infrastructure',
      description: 'Facilitate banking relationships and payment processing setup for global transactions.',
      features: ['Multi-Currency', 'Payment Processing', 'Banking Setup'],
      gradient: 'from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-200',
      iconColor: 'text-indigo-600',
      price: 'Starting $899'
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Fulfillment',
      category: 'Logistics Solutions',
      description: 'Complete warehousing and fulfillment infrastructure support with global reach.',
      features: ['Global Warehousing', 'Order Fulfillment', 'Inventory Management'],
      gradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600',
      price: 'Starting $2,499'
    },
    {
      icon: Building2,
      title: 'Cross-Border eCommerce',
      category: 'Digital Commerce',
      description: 'Complete eCommerce setup with international payment processing and compliance.',
      features: ['Store Setup', 'Payment Integration', 'Global Shipping'],
      gradient: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-200',
      iconColor: 'text-teal-600',
      price: 'Starting $1,999'
    },
    {
      icon: Shield,
      title: 'Tax Structuring & Mitigation',
      category: 'Financial Optimization',
      description: 'Optimize your tax structure for international operations and maximize savings.',
      features: ['Tax Planning', 'Compliance', 'Savings Optimization'],
      gradient: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600',
      price: 'Starting $3,499'
    },
    {
      icon: Globe,
      title: 'Ongoing Compliance Support',
      category: 'Continuous Support',
      description: 'Maintain compliance across all jurisdictions with our ongoing support services.',
      features: ['Regular Updates', 'Compliance Monitoring', 'Legal Support'],
      gradient: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      iconColor: 'text-amber-600',
      price: 'Starting $499/month'
    }
  ];

  const topServices = [
    'CrossVentura Launchpad',
    'Business Idea Generator', 
    'AI Business Setup Advisor',
    'Operational Setup & Partners',
    'Banking & Payment Gateway'
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-violet-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Comprehensive AI-powered solutions for international business expansion, 
            designed to simplify complexity and accelerate growth.
          </p>
          
          {/* Top Services Highlight */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-200/50 mb-16 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">🏆 Most Popular Services</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {topServices.map((service, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-900">{service}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {index === 0 && 'Market Entry • FastTrack'}
                    {index === 1 && 'AI-Powered • Instant'}
                    {index === 2 && '24/7 Support • Automated'}
                    {index === 3 && 'Local Partners • Verified'}
                    {index === 4 && 'Banking • Multi-Currency'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group relative bg-gradient-to-br ${service.gradient} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${service.borderColor} overflow-hidden`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <Badge variant="secondary" className="bg-white/60 text-gray-700">
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {service.category}
                </p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-white/40 hover:bg-white/90 transition-all duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}