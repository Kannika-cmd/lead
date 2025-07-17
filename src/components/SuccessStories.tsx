import { Trophy, TrendingUp, Globe, Users, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function SuccessStories() {
  const stories = [
    {
      company: 'TechFlow Solutions',
      industry: 'Technology',
      expansion: 'US → India',
      timeline: '8 months',
      investment: '$150K',
      results: {
        revenue: '+250% revenue growth',
        market: '5 Indian cities',
        employees: '50+ local hires',
        roi: '400% ROI'
      },
      challenge: 'Complex regulatory compliance and finding reliable local partners',
      solution: 'CrossVentura Launchpad + Local Partnership Program',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      company: 'GreenTech Innovations',
      industry: 'Clean Energy',
      expansion: 'India → US',
      timeline: '6 months',
      investment: '$200K',
      results: {
        revenue: '+400% revenue growth',
        market: '15% market share',
        employees: '30+ US team',
        roi: '600% ROI'
      },
      challenge: 'Complex US regulations and banking setup',
      solution: 'FastTracker Program + Banking & Compliance Support',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      company: 'GlobalCommerce',
      industry: 'E-commerce',
      expansion: 'Multi-market',
      timeline: '12 months',
      investment: '$300K',
      results: {
        revenue: '+300% revenue growth',
        market: '3 countries',
        employees: '100+ team',
        roi: '500% ROI'
      },
      challenge: 'Multi-jurisdiction compliance and tax optimization',
      solution: 'Complete Business Expansion Suite',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: '$50M+', label: 'Revenue Generated', color: 'text-green-600' },
    { icon: Globe, value: '25+', label: 'Countries Served', color: 'text-blue-600' },
    { icon: Users, value: '500+', label: 'Businesses Expanded', color: 'text-purple-600' },
    { icon: DollarSign, value: '350%', label: 'Average ROI', color: 'text-orange-600' }
  ];

  return (
    <section id="success" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
            <Trophy className="h-8 w-8 text-emerald-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Success
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real businesses, real results. See how our clients have achieved remarkable growth with our international expansion expertise.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-4 inline-block">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className={`bg-gradient-to-br ${story.gradient} p-8 text-white`}>
                    <div className="flex items-center space-x-2 mb-4">
                      <Trophy className="h-6 w-6" />
                      <span className="text-sm font-semibold uppercase tracking-wide">Success Story</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{story.company}</h3>
                    <p className="text-lg opacity-90 mb-4">{story.industry}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span className="text-sm">Expansion: {story.expansion}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">Timeline: {story.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">Investment: {story.investment}</span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Challenge:</h4>
                      <p className="text-gray-700 leading-relaxed">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Solution:</h4>
                      <p className="text-gray-700 leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 p-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Results:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{story.results.revenue}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{story.results.market}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{story.results.employees}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-semibold">{story.results.roi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses that have successfully expanded globally with CrossVentura's proven methodology.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}