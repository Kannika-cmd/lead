import { useState } from 'react';
import { Play, Monitor, BarChart3, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardVideoSectionProps {
  onPortalPreview: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function DashboardVideoSection({ onPortalPreview, trackEvent }: DashboardVideoSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    onPortalPreview();
    trackEvent('dashboard_video_play');
  };

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Progress Tracking',
      description: 'Monitor your expansion progress with live updates and milestone tracking'
    },
    {
      icon: CheckCircle,
      title: 'Task Management',
      description: 'Stay on top of compliance requirements and setup tasks'
    },
    {
      icon: Users,
      title: 'Partner Network Access',
      description: 'Connect with verified local partners and service providers'
    }
  ];

  return (
    <section id="dashboard-preview" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <Monitor className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Business
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Command Center
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of international business management with our AI-powered dashboard. 
            Track progress, manage tasks, and scale globally from one unified platform.
          </p>
        </div>

        {/* Main Video Section */}
        <div className="relative mb-16">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900">
                {/* Dashboard Screenshot Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-purple-900/20">
                  {/* Mock Dashboard Interface */}
                  <div className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg"></div>
                        <div>
                          <h3 className="text-white font-bold text-lg">CrossVentura Dashboard</h3>
                          <p className="text-gray-300 text-sm">India Expansion Portal</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 h-2 bg-white/20 rounded-full">
                          <div className="w-20 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-white text-sm">65% Complete</span>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="grid grid-cols-3 gap-6 flex-1">
                      <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white font-semibold mb-2">Active Tasks</div>
                          <div className="text-3xl font-bold text-blue-400">4</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white font-semibold mb-2">Documents</div>
                          <div className="text-3xl font-bold text-green-400">8/12</div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-white font-semibold mb-4">Recent Activity</div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Business registration completed</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Banking partner connected</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Tax consultation scheduled</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-white font-semibold mb-4">AI Assistant</div>
                        <div className="bg-white/20 rounded-lg p-3 mb-3">
                          <p className="text-gray-200 text-sm">
                            Hi! I noticed you're 65% complete. Would you like help with banking setup?
                          </p>
                        </div>
                        <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                          Get Help
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button
                      onClick={handleVideoPlay}
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-8 shadow-2xl"
                    >
                      <Play className="h-12 w-12" />
                    </Button>
                  </div>
                )}

                {/* Video Loading State */}
                {isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-lg">Loading dashboard demo...</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Video Description */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See Your Expansion Journey in Action</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how our intelligent dashboard guides you through every step of international expansion, 
              from initial setup to successful market entry.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6 inline-block">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the Platform?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Get early access to our dashboard and start your international expansion journey today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  onPortalPreview();
                  trackEvent('dashboard_preview_cta');
                }}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Monitor className="h-5 w-5 mr-2" />
                Preview Dashboard
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold"
                onClick={() => trackEvent('dashboard_waitlist_join')}
              >
                Join Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}