import { TrendingUp } from 'lucide-react';

export function SuccessStoriesTicker() {
  const successStories = [
    { 
      company: 'TechFlow Solutions', 
      logo: '🚀', 
      achievement: 'Expanded to India in 6 months',
      revenue: '$2M+ Annual Revenue',
      flag: '🇺🇸→🇮🇳'
    },
    { 
      company: 'GreenTech Innovations', 
      logo: '🌱', 
      achievement: 'Captured 15% US market share',
      revenue: '400% ROI in 18 months',
      flag: '🇮🇳→🇺🇸'
    },
    { 
      company: 'FinanceForward', 
      logo: '💰', 
      achievement: 'Saved $500K in taxes',
      revenue: '350% ROI on investment',
      flag: '🌍'
    },
    { 
      company: 'GlobalCommerce', 
      logo: '🛒', 
      achievement: 'Launched in 3 countries',
      revenue: '300% Revenue Growth',
      flag: '🌎'
    },
    { 
      company: 'HealthTech Pro', 
      logo: '⚕️', 
      achievement: '400% ROI in first year',
      revenue: 'Zero compliance issues',
      flag: '🇺🇸→🇮🇳'
    },
    { 
      company: 'EduSmart', 
      logo: '📚', 
      achievement: 'Scaled to 5 cities',
      revenue: '250% Growth Rate',
      flag: '🇮🇳→🇺🇸'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-white via-violet-50/30 to-purple-50/30 border-y border-violet-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-4">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Global Expansion
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real businesses achieving remarkable growth with CrossVentura's proven methodology
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
          
          {/* Animated Ticker */}
          <div className="flex animate-scroll space-x-8 whitespace-nowrap py-4 w-max">
            {[...successStories, ...successStories, ...successStories].map((story, index) => (
              <div key={index} className="flex items-center space-x-6 bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-violet-100/50 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl animate-bounce" style={{ animationDuration: '2s', animationDelay: `${index * 0.2}s` }}>
                    {story.logo}
                  </div>
                  <div className="text-2xl font-semibold">{story.flag}</div>
                </div>
                <div className="border-l border-violet-200 pl-6">
                  <div className="font-bold text-gray-900 text-xl mb-1">{story.company}</div>
                  <div className="text-violet-600 font-semibold text-sm mb-1">{story.achievement}</div>
                  <div className="text-emerald-600 font-bold text-sm">{story.revenue}</div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">$50M+</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-violet-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-rose-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}