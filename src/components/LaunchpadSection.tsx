import { useState } from 'react';
import { Rocket, Zap, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LaunchpadSectionProps {
  selectedGeo: 'india' | 'usa' | null;
  trackEvent: (eventName: string, data?: any) => void;
}

export function LaunchpadSection({ selectedGeo, trackEvent }: LaunchpadSectionProps) {
  const [selectedTrack, setSelectedTrack] = useState<'explorer' | 'fasttracker' | null>(null);
  const [showWizard, setShowWizard] = useState(false);

  const tracks = {
    explorer: {
      icon: Target,
      title: 'Opportunity Explorer',
      subtitle: 'For validation, phased entry, learning regulatory terrain',
      description: 'Perfect for businesses looking to test the waters, validate their market fit, and gradually build their presence in a new market.',
      timeline: '3-6 months',
      investment: '$15K - $50K',
      features: [
        'Market validation & research',
        'Regulatory compliance roadmap',
        'Phased market entry strategy',
        'Local partner identification',
        'Risk assessment & mitigation',
        'Pilot program setup'
      ],
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50'
    },
    fasttracker: {
      icon: Zap,
      title: 'Fasttrackers',
      subtitle: 'For speed, aggressive launch, pre-built partner stack',
      description: 'Ideal for businesses ready to move fast with proven strategies, established partnerships, and accelerated market entry.',
      timeline: '1-3 months',
      investment: '$50K - $150K',
      features: [
        'Rapid market entry (30-90 days)',
        'Pre-vetted partner network',
        'Accelerated legal setup',
        'Ready-to-use infrastructure',
        'Fast-track compliance',
        'Immediate operational support'
      ],
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50'
    }
  };

  const handleTrackSelect = (track: 'explorer' | 'fasttracker') => {
    setSelectedTrack(track);
    trackEvent('launchpad_track_select', { track, selectedGeo });
  };

  const handleStartTrack = (track: 'explorer' | 'fasttracker') => {
    setShowWizard(true);
    trackEvent('launchpad_start', { track, selectedGeo });
  };

  return (
    <section id="launchpad" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
            <Rocket className="h-8 w-8 text-violet-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            CrossVentura
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Launchpad
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose your market entry strategy. Whether you want to explore carefully or move fast, 
            we have the perfect path for your international expansion.
          </p>

          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Market, Choose Your Mode</h3>
            <p className="text-gray-600">
              {selectedGeo 
                ? `Expanding to ${selectedGeo === 'india' ? 'India' : 'USA'}? Select your approach below.`
                : 'First select your target market above, then choose your expansion strategy.'
              }
            </p>
          </div>
        </div>

        {/* Track Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(tracks).map(([key, track]) => (
            <Card 
              key={key}
              className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                selectedTrack === key 
                  ? 'ring-4 ring-violet-500 shadow-2xl' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
              onClick={() => handleTrackSelect(key as 'explorer' | 'fasttracker')}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${track.bgGradient} p-8 relative`}>
                  <div className={`p-4 bg-gradient-to-r ${track.gradient} rounded-2xl mb-6 inline-block shadow-lg`}>
                    <track.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{track.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{track.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{track.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Timeline</div>
                      <div className="font-semibold text-gray-900">{track.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Investment</div>
                      <div className="font-semibold text-gray-900">{track.investment}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    {track.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${track.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white py-3 rounded-xl font-semibold`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartTrack(key as 'explorer' | 'fasttracker');
                    }}
                  >
                    Start as {track.title}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Micro Wizard */}
        {showWizard && (
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50 max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Let's Get Started with Your {selectedTrack === 'explorer' ? 'Exploration' : 'Fast Track'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Which market(s) are you interested in?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedGeo === 'india' 
                        ? 'border-orange-500 bg-orange-50 text-orange-700' 
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                    onClick={() => trackEvent('wizard_geo_select', { geo: 'india' })}
                  >
                    🇮🇳 India
                  </button>
                  <button 
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedGeo === 'usa' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => trackEvent('wizard_geo_select', { geo: 'usa' })}
                  >
                    🇺🇸 USA
                  </button>
                  <button 
                    className="p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                    onClick={() => trackEvent('wizard_geo_select', { geo: 'both' })}
                  >
                    🌍 Both
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowWizard(false)}
                >
                  Back
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white"
                  onClick={() => {
                    trackEvent('wizard_continue', { track: selectedTrack, geo: selectedGeo });
                    // In production, this would continue to the next step
                  }}
                >
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Global Expansion?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join hundreds of businesses that have successfully expanded internationally with our proven methodology.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => trackEvent('launchpad_cta_click')}
            >
              Start Building Beyond Borders
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}