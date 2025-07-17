import { Lightbulb, Zap, TrendingUp, DollarSign, Target, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function BusinessIdeas() {
  const ideaCategories = [
    {
      icon: TrendingUp,
      title: 'E-commerce & Digital',
      ideas: ['Cross-border marketplace', 'Digital services platform', 'SaaS solutions'],
      potential: '$50K - $500K',
      timeframe: '3-6 months',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      ideas: ['Fintech solutions', 'Payment processing', 'Investment platforms'],
      potential: '$100K - $1M',
      timeframe: '6-12 months',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Healthcare & Wellness',
      ideas: ['Telemedicine platforms', 'Health tech solutions', 'Wellness apps'],
      potential: '$75K - $750K',
      timeframe: '4-8 months',
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      icon: Brain,
      title: 'AI & Technology',
      ideas: ['AI automation tools', 'Machine learning services', 'Tech consulting'],
      potential: '$200K - $2M',
      timeframe: '6-18 months',
      gradient: 'from-sky-500 to-blue-600'
    }
  ];

  const trendingIdeas = [
    {
      title: 'AI-Powered Translation Services',
      market: 'Global',
      investment: '$25K - $100K',
      roi: '300-500%',
      trend: '↗️ 45% growth'
    },
    {
      title: 'Sustainable E-commerce Platform',
      market: 'US & India',
      investment: '$50K - $250K',
      roi: '200-400%',
      trend: '↗️ 67% growth'
    },
    {
      title: 'Remote Work Solutions',
      market: 'Global',
      investment: '$15K - $75K',
      roi: '250-450%',
      trend: '↗️ 89% growth'
    },
    {
      title: 'FinTech for SMEs',
      market: 'India & SEA',
      investment: '$100K - $500K',
      roi: '400-800%',
      trend: '↗️ 123% growth'
    }
  ];

  return (
    <section id="ideas" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Business Idea
            <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Generator
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover profitable business opportunities with AI-powered market analysis and trend prediction.
            <span className="block mt-2 text-orange-600 font-semibold">10,000+ ideas generated • 85% success rate</span>
          </p>
        </div>

        {/* Trending Ideas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Trending Business Ideas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingIdeas.map((idea, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{idea.title}</h4>
                    <span className="text-sm text-green-600 font-semibold">{idea.trend}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market:</span>
                      <span className="font-semibold">{idea.market}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investment:</span>
                      <span className="font-semibold">{idea.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected ROI:</span>
                      <span className="font-semibold text-green-600">{idea.roi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Idea Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ideaCategories.map((category, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-xl mb-4 inline-block`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h4>
                  <div className="space-y-2 mb-4">
                    {category.ideas.map((idea, ideaIndex) => (
                      <div key={ideaIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{idea}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Potential:</span>
                      <span className="font-semibold text-green-600">{category.potential}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Timeframe:</span>
                      <span className="font-semibold">{category.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Generator CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl border border-orange-200/50">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Generate Your Perfect Business Idea
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our AI analyzes market trends, your preferences, budget, and target market to generate 
              personalized business ideas with detailed implementation plans.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Ideas Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">AI Availability</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="h-5 w-5 mr-2" />
                Generate Ideas Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold"
              >
                View Sample Ideas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}