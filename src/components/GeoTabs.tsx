import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface GeoTabsProps {
  selectedGeo: 'india' | 'usa' | null;
  onGeoSelect: (geo: 'india' | 'usa') => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function GeoTabs({ selectedGeo, onGeoSelect, trackEvent }: GeoTabsProps) {
  const handleGeoSelect = (geo: 'india' | 'usa') => {
    onGeoSelect(geo);
    trackEvent('geo_tab_select', { geo });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your target market to get personalized expansion strategies and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* India Card */}
          <Card 
            className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 cursor-pointer ${
              selectedGeo === 'india' 
                ? 'ring-4 ring-orange-500 shadow-2xl' 
                : 'shadow-xl hover:shadow-2xl'
            }`}
            onClick={() => handleGeoSelect('india')}
          >
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-12 text-center relative">
                <div className="text-8xl mb-6 animate-float">🇮🇳</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Make India Your Playground</h3>
                <p className="text-lg text-orange-700 mb-6">
                  Tap into the world's fastest-growing major economy with 1.4B consumers
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">$3.7T</div>
                    <div className="text-sm text-gray-600">GDP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">6.1%</div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">350M</div>
                    <div className="text-sm text-gray-600">Middle Class</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Company Registration in 7 days</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>GST & PAN Setup</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Local Partnership Network</span>
                  </div>
                </div>

                <Button 
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackEvent('india_launchpad_start');
                  }}
                >
                  Start India Launchpad
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* USA Card */}
          <Card 
            className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 cursor-pointer ${
              selectedGeo === 'usa' 
                ? 'ring-4 ring-blue-500 shadow-2xl' 
                : 'shadow-xl hover:shadow-2xl'
            }`}
            onClick={() => handleGeoSelect('usa')}
          >
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-12 text-center relative">
                <div className="text-8xl mb-6 animate-float" style={{ animationDelay: '1s' }}>🇺🇸</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Take a Big Bite of the US Market</h3>
                <p className="text-lg text-blue-700 mb-6">
                  Enter the world's largest economy with unmatched purchasing power
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$23T</div>
                    <div className="text-sm text-gray-600">GDP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2.1%</div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">330M</div>
                    <div className="text-sm text-gray-600">Consumers</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>LLC Formation in 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>EIN & Banking Setup</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>State Tax Compliance</span>
                  </div>
                </div>

                <Button 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackEvent('usa_launchpad_start');
                  }}
                >
                  Start US Launchpad
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Comparison */}
        {selectedGeo && (
          <div className="mt-12 animate-fade-in">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Why {selectedGeo === 'india' ? 'India' : 'USA'} is Perfect for Your Expansion
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 inline-block">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Market Growth</h4>
                  <p className="text-gray-600 text-sm">
                    {selectedGeo === 'india' 
                      ? 'Fastest-growing major economy with expanding digital adoption'
                      : 'Stable, mature market with high consumer spending power'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full mb-4 inline-block">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Market Size</h4>
                  <p className="text-gray-600 text-sm">
                    {selectedGeo === 'india' 
                      ? '1.4B population with rapidly growing middle class'
                      : '330M affluent consumers with high purchasing power'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full mb-4 inline-block">
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Environment</h4>
                  <p className="text-gray-600 text-sm">
                    {selectedGeo === 'india' 
                      ? 'Improving ease of doing business with digital infrastructure'
                      : 'World-class business infrastructure and legal framework'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}