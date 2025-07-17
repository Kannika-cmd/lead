import { Zap, Shield, Globe, Users, TrendingUp, Award, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function WhyCrossVentura() {
  const pillars = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Get your business operational in new markets faster than traditional methods. Our FastTracker program can have you launched in 30-90 days.',
      stats: '3x Faster',
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Shield,
      title: 'Integrated Operations',
      description: 'End-to-end support from legal setup to operational launch. No need to coordinate multiple vendors - we handle everything.',
      stats: '100% Integrated',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Globe,
      title: 'Dual-Market Expertise',
      description: 'Deep specialization in India-USA corridor with local teams in both markets. We understand the nuances of both business environments.',
      stats: '2 Markets',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Users,
      title: 'Tech-Enabled Guidance',
      description: 'AI-powered insights combined with human expertise. Get 24/7 support from our AI agents plus access to seasoned consultants.',
      stats: 'AI + Human',
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: TrendingUp,
      title: 'Proven Partner Network',
      description: 'Access to our vetted network of 500+ local partners including legal firms, accountants, banks, and operational service providers.',
      stats: '500+ Partners',
      gradient: 'from-rose-500 to-pink-600',
      bgGradient: 'from-rose-50 to-pink-50',
      borderColor: 'border-rose-200'
    },
    {
      icon: Award,
      title: 'Track Record of Success',
      description: 'Proven methodology with 95% success rate and $2.5B+ in revenue generated for our clients across 25+ countries.',
      stats: '95% Success',
      gradient: 'from-cyan-500 to-teal-600',
      bgGradient: 'from-cyan-50 to-teal-50',
      borderColor: 'border-cyan-200'
    }
  ];

  return (
    <section id="why-crossventura" className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-8 shadow-lg">
            <Shield className="h-8 w-8 text-emerald-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              CrossVentura
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            We're not just another consulting firm. We're your complete international expansion partner, 
            combining cutting-edge technology with deep market expertise and proven results.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Businesses Expanded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.5B+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <div className={`bg-gradient-to-br ${pillar.bgGradient} p-8 h-full relative border-2 ${pillar.borderColor} rounded-lg`}>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`px-4 py-2 bg-gradient-to-r ${pillar.gradient} text-white rounded-full text-sm font-bold shadow-lg`}>
                      {pillar.stats}
                    </div>
                  </div>

                  {/* Centered Icon */}
                  <div className="flex justify-center mb-8">
                    <div className={`p-6 bg-gradient-to-r ${pillar.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <pillar.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{pillar.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{pillar.description}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-r from-white/30 to-white/20 rounded-full blur-lg"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proof Points Section */}
        <div className="bg-gradient-to-r from-slate-900 via-gray-800 to-blue-900 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Join the companies that have chosen CrossVentura for their international expansion journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-300 text-lg">Businesses Expanded</div>
              <div className="text-emerald-300 text-sm mt-1">Across 25+ Countries</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-300 text-lg">Success Rate</div>
              <div className="text-blue-300 text-sm mt-1">Industry Leading</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">$2.5B</div>
              <div className="text-gray-300 text-lg">Revenue Generated</div>
              <div className="text-purple-300 text-sm mt-1">For Our Clients</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-rose-400 mb-3 group-hover:scale-110 transition-transform duration-300">6 Months</div>
              <div className="text-gray-300 text-lg">Average Timeline</div>
              <div className="text-rose-300 text-sm mt-1">To Market Entry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}