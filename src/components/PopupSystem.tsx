import { useState, useEffect } from 'react';
import { X, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface PopupSystemProps {
  selectedGeo: 'india' | 'usa' | null;
  onChatOpen: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

interface LeadForm {
  name: string;
  email: string;
  company: string;
  website: string;
  targetMarket: string;
  approach: string;
  consultType: string;
}

export function PopupSystem({ selectedGeo, onChatOpen, trackEvent }: PopupSystemProps) {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showMicroPrompt, setShowMicroPrompt] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
  const [hasShownScrollPopup, setHasShownScrollPopup] = useState(false);
  const [microPromptCount, setMicroPromptCount] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);

  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: '',
    email: '',
    company: '',
    website: '',
    targetMarket: selectedGeo || '',
    approach: '',
    consultType: 'ai'
  });

  // Exit Intent Detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
        trackEvent('exit_intent_popup_shown');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitIntent, trackEvent]);

  // Scroll Depth Tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollDepth(scrollPercent);

      // Show scroll popup at 40% depth
      if (scrollPercent >= 40 && !hasShownScrollPopup) {
        setTimeout(() => {
          setShowScrollPopup(true);
          setHasShownScrollPopup(true);
          trackEvent('scroll_popup_shown', { scrollDepth: scrollPercent });
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownScrollPopup, trackEvent]);

  // Micro Prompts
  useEffect(() => {
    const showMicroPrompts = () => {
      if (microPromptCount < 3 && scrollDepth > 20) {
        setShowMicroPrompt(true);
        setMicroPromptCount(prev => prev + 1);
        trackEvent('micro_prompt_shown', { count: microPromptCount + 1 });
        
        setTimeout(() => {
          setShowMicroPrompt(false);
        }, 5000);
      }
    };

    const interval = setInterval(showMicroPrompts, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, [microPromptCount, scrollDepth, trackEvent]);

  const handleLeadSubmit = (popupType: string) => {
    if (!leadForm.name || !leadForm.email) {
      toast.error('Please fill in required fields');
      return;
    }

    trackEvent('lead_form_submitted', { 
      popupType, 
      ...leadForm 
    });

    toast.success('Thank you! We\'ll be in touch within 24 hours.');
    
    // Close all popups
    setShowExitIntent(false);
    setShowScrollPopup(false);
    
    // Reset form
    setLeadForm({
      name: '',
      email: '',
      company: '',
      website: '',
      targetMarket: selectedGeo || '',
      approach: '',
      consultType: 'ai'
    });
  };

  const handleInputChange = (field: keyof LeadForm, value: string) => {
    setLeadForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-2xl mx-4 shadow-2xl border-0 animate-fade-in">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-red-50 to-orange-50">
              <div className="flex justify-end items-start mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowExitIntent(false);
                    trackEvent('exit_intent_popup_closed');
                  }}
                  className="rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 shadow-md border border-gray-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="text-6xl mb-4">🚨</div>
              <CardTitle className="text-3xl font-bold text-gray-900">Wait! Don't Leave Yet</CardTitle>
              <p className="text-gray-600 text-lg">
                Get a free strategy call to discuss your international expansion plans
              </p>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Free Strategy Call Includes:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Market opportunity assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Regulatory roadmap overview</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Investment & timeline estimates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Personalized expansion strategy</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="exit-name">Name *</Label>
                    <Input
                      id="exit-name"
                      value={leadForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="exit-email">Email *</Label>
                    <Input
                      id="exit-email"
                      type="email"
                      value={leadForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="exit-company">Company</Label>
                    <Input
                      id="exit-company"
                      value={leadForm.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exit-market">Target Market</Label>
                    <Select value={leadForm.targetMarket} onValueChange={(value) => handleInputChange('targetMarket', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select target market" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">🇮🇳 India</SelectItem>
                        <SelectItem value="usa">🇺🇸 USA</SelectItem>
                        <SelectItem value="both">🌍 Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exit-approach">Preferred Approach</Label>
                    <Select value={leadForm.approach} onValueChange={(value) => handleInputChange('approach', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select approach" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="explorer">🎯 Opportunity Explorer</SelectItem>
                        <SelectItem value="fasttracker">⚡ Fasttracker</SelectItem>
                        <SelectItem value="not-sure">🤔 Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button
                  onClick={() => handleLeadSubmit('exit_intent')}
                  className="flex-1 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Free Strategy Call
                </Button>
                <Button
                  onClick={() => {
                    onChatOpen();
                    setShowExitIntent(false);
                    trackEvent('exit_intent_chat_clicked');
                  }}
                  variant="outline"
                  className="flex-1 border-2 border-orange-300 text-orange-600 hover:bg-orange-50 py-3 rounded-xl font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start AI Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Scroll Depth Popup */}
      {showScrollPopup && (
        <div className="fixed bottom-20 right-6 z-40 animate-fade-in">
          <Card className="w-80 shadow-2xl border-0 bg-gradient-to-r from-violet-50 to-purple-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-2xl">💡</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowScrollPopup(false);
                    trackEvent('scroll_popup_closed');
                  }}
                  className="rounded-full h-6 w-6 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 shadow-sm border border-gray-200"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Book a free consultation or chat with our AI agent to discuss your expansion plans.
              </p>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Name"
                    value={leadForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-sm"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={leadForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="text-sm"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleLeadSubmit('scroll_popup')}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-lg font-semibold"
                  >
                    Book Call
                  </Button>
                  <Button
                    onClick={() => {
                      onChatOpen();
                      setShowScrollPopup(false);
                      trackEvent('scroll_popup_chat_clicked');
                    }}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-violet-300 text-violet-600 hover:bg-violet-50 rounded-lg"
                  >
                    Chat Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Micro Prompt Toast */}
      {showMicroPrompt && (
        <div className="fixed bottom-6 left-6 z-40 animate-fade-in">
          <Card className="w-72 shadow-lg border-0 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-xl">🤖</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Not sure where to start?</p>
                    <p className="text-xs text-gray-600">Talk to our AI Business Agent free</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button
                    onClick={() => {
                      onChatOpen();
                      setShowMicroPrompt(false);
                      trackEvent('micro_prompt_chat_clicked');
                    }}
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    Chat
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setShowMicroPrompt(false);
                      trackEvent('micro_prompt_dismissed');
                    }}
                    className="h-6 w-6 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 shadow-sm border border-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}