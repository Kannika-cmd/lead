import { useState } from 'react';
import { Lightbulb, ArrowRight, X, Zap, TrendingUp, DollarSign, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BusinessIdeaGeneratorProps {
  onClose: () => void;
  onChatOpen: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

interface IdeaForm {
  industry: string;
  budget: string;
  timeframe: string;
  targetMarket: string;
  experience: string;
}

interface GeneratedIdea {
  id: string;
  title: string;
  description: string;
  industry: string;
  investment: string;
  timeToLaunch: string;
  roi: string;
  difficulty: 'Low' | 'Medium' | 'High';
  marketSize: string;
  competition: string;
  keyFeatures: string[];
  nextSteps: string[];
  crossVenturaPackages: string[];
}

export function BusinessIdeaGenerator({ onClose, onChatOpen, trackEvent }: BusinessIdeaGeneratorProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<GeneratedIdea[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<GeneratedIdea | null>(null);

  const [form, setForm] = useState<IdeaForm>({
    industry: '',
    budget: '',
    timeframe: '',
    targetMarket: '',
    experience: ''
  });

  const handleInputChange = (field: keyof IdeaForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const generateIdeas = async () => {
    setIsGenerating(true);
    trackEvent('idea_generation_started', form);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    const mockIdeas: GeneratedIdea[] = [
      {
        id: '1',
        title: 'AI-Powered Cross-Border E-commerce Platform',
        description: 'A platform that helps small businesses sell internationally with automated compliance, currency conversion, and local payment processing.',
        industry: form.industry || 'Technology',
        investment: '$50K - $150K',
        timeToLaunch: '6-9 months',
        roi: '300-500%',
        difficulty: 'Medium',
        marketSize: '$2.3B globally',
        competition: 'Medium',
        keyFeatures: [
          'Automated tax compliance',
          'Multi-currency support',
          'Local payment gateways',
          'AI-powered market insights',
          'Inventory management'
        ],
        nextSteps: [
          'Market validation survey',
          'MVP development',
          'Regulatory compliance research',
          'Partner network establishment'
        ],
        crossVenturaPackages: ['Fasttrackers', 'Tax Structuring', 'Banking Setup']
      },
      {
        id: '2',
        title: 'Sustainable Supply Chain Management SaaS',
        description: 'Help businesses track and optimize their supply chain sustainability with real-time monitoring and compliance reporting.',
        industry: form.industry || 'Technology',
        investment: '$75K - $200K',
        timeToLaunch: '8-12 months',
        roi: '250-400%',
        difficulty: 'High',
        marketSize: '$1.8B globally',
        competition: 'Low',
        keyFeatures: [
          'Carbon footprint tracking',
          'Supplier sustainability scoring',
          'Compliance reporting',
          'Cost optimization',
          'Risk assessment'
        ],
        nextSteps: [
          'Industry expert interviews',
          'Technical feasibility study',
          'Pilot customer acquisition',
          'Regulatory framework analysis'
        ],
        crossVenturaPackages: ['Opportunity Explorer', 'Compliance Support', 'Operations Setup']
      },
      {
        id: '3',
        title: 'Remote Work Productivity Analytics',
        description: 'Analytics platform for remote teams to optimize productivity, well-being, and collaboration across different time zones.',
        industry: form.industry || 'Technology',
        investment: '$25K - $75K',
        timeToLaunch: '4-6 months',
        roi: '400-600%',
        difficulty: 'Low',
        marketSize: '$950M globally',
        competition: 'High',
        keyFeatures: [
          'Productivity metrics',
          'Well-being tracking',
          'Team collaboration insights',
          'Time zone optimization',
          'Performance recommendations'
        ],
        nextSteps: [
          'User research and surveys',
          'Prototype development',
          'Beta testing program',
          'Go-to-market strategy'
        ],
        crossVenturaPackages: ['AI Business Setup', 'Banking Setup', 'Tax Structuring']
      }
    ];

    setGeneratedIdeas(mockIdeas);
    setIsGenerating(false);
    setStep(3);
    trackEvent('ideas_generated', { count: mockIdeas.length, form });
  };

  const handleIdeaSelect = (idea: GeneratedIdea) => {
    setSelectedIdea(idea);
    setStep(4);
    trackEvent('idea_selected', { ideaId: idea.id, title: idea.title });
  };

  const handleDiscussIdea = (idea: GeneratedIdea) => {
    trackEvent('discuss_idea_clicked', { ideaId: idea.id });
    onChatOpen();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 overflow-y-auto">
      <div className="min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Business Idea Generator</h1>
                <p className="text-gray-600">AI-powered business opportunity discovery</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNum ? 'bg-gradient-to-r from-yellow-500 to-orange-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Step {step} of 4: {
                step === 1 ? 'Business Preferences' :
                step === 2 ? 'Market & Investment' :
                step === 3 ? 'Generated Ideas' :
                'Idea Details'
              }
            </div>
          </div>

          {/* Step 1: Business Preferences */}
          {step === 1 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Tell Us About Your Preferences</CardTitle>
                <p className="text-gray-600">Help us generate personalized business ideas for you</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry Interest</Label>
                  <Select value={form.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology & Software</SelectItem>
                      <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                      <SelectItem value="healthcare">Healthcare & Wellness</SelectItem>
                      <SelectItem value="fintech">FinTech & Financial Services</SelectItem>
                      <SelectItem value="education">Education & EdTech</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing & Industrial</SelectItem>
                      <SelectItem value="services">Professional Services</SelectItem>
                      <SelectItem value="sustainability">Sustainability & Green Tech</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Your Business Experience</Label>
                  <Select value={form.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-time">First-time entrepreneur</SelectItem>
                      <SelectItem value="some-experience">Some business experience</SelectItem>
                      <SelectItem value="experienced">Experienced entrepreneur</SelectItem>
                      <SelectItem value="serial">Serial entrepreneur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={() => setStep(2)}
                  disabled={!form.industry || !form.experience}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold"
                >
                  Continue
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Market & Investment */}
          {step === 2 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Market & Investment Details</CardTitle>
                <p className="text-gray-600">Help us tailor ideas to your budget and timeline</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Investment Budget</Label>
                  <Select value={form.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under $25K</SelectItem>
                      <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                      <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                      <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                      <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                      <SelectItem value="over-500k">Over $500K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeframe">Launch Timeframe</Label>
                  <Select value={form.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to launch?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (1-3 months)</SelectItem>
                      <SelectItem value="short">Short term (3-6 months)</SelectItem>
                      <SelectItem value="medium">Medium term (6-12 months)</SelectItem>
                      <SelectItem value="long">Long term (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-market">Target Market</Label>
                  <Select value={form.targetMarket} onValueChange={(value) => handleInputChange('targetMarket', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your target market" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">🇮🇳 India</SelectItem>
                      <SelectItem value="usa">🇺🇸 USA</SelectItem>
                      <SelectItem value="both">🌍 Both India & USA</SelectItem>
                      <SelectItem value="global">🌎 Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={generateIdeas}
                    disabled={!form.budget || !form.timeframe || !form.targetMarket}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold"
                  >
                    Generate Ideas
                    <Zap className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Generated Ideas */}
          {step === 3 && (
            <div>
              {isGenerating ? (
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-12 text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-6"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Generating Your Ideas...</h3>
                    <p className="text-gray-600 mb-6">Our AI is analyzing market trends, competition, and opportunities</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p>✓ Analyzing market data</p>
                      <p>✓ Evaluating competition</p>
                      <p>✓ Calculating ROI potential</p>
                      <p>⏳ Generating personalized ideas...</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Business Ideas</h2>
                    <p className="text-gray-600">Based on your preferences, here are the top opportunities we've identified</p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {generatedIdeas.map((idea, index) => (
                      <Card key={idea.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={() => handleIdeaSelect(idea)}>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={`${
                              idea.difficulty === 'Low' ? 'bg-green-100 text-green-800' :
                              idea.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {idea.difficulty} Difficulty
                            </Badge>
                            <div className="text-2xl">#{index + 1}</div>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900">{idea.title}</CardTitle>
                          <p className="text-gray-600">{idea.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                              <div className="text-sm font-semibold text-gray-900">{idea.investment}</div>
                              <div className="text-xs text-gray-600">Investment</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                              <div className="text-sm font-semibold text-gray-900">{idea.timeToLaunch}</div>
                              <div className="text-xs text-gray-600">Time to Launch</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <TrendingUp className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                              <div className="text-sm font-semibold text-gray-900">{idea.roi}</div>
                              <div className="text-xs text-gray-600">Expected ROI</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm font-semibold text-gray-900">{idea.marketSize}</div>
                              <div className="text-xs text-gray-600">Market Size</div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIdeaSelect(idea);
                              }}
                              className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-xl font-semibold"
                            >
                              View Details
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                            <Button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDiscussIdea(idea);
                              }}
                              variant="outline"
                              className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl"
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Discuss This Idea
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Idea Details */}
          {step === 4 && selectedIdea && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button 
                  onClick={() => setStep(3)}
                  variant="outline"
                  className="mb-4"
                >
                  ← Back to Ideas
                </Button>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedIdea.title}</h2>
                <p className="text-gray-600 text-lg">{selectedIdea.description}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedIdea.keyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedIdea.nextSteps.map((step, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Opportunity Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Investment Required</div>
                        <div className="text-lg font-semibold text-gray-900">{selectedIdea.investment}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Time to Launch</div>
                        <div className="text-lg font-semibold text-gray-900">{selectedIdea.timeToLaunch}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Expected ROI</div>
                        <div className="text-lg font-semibold text-green-600">{selectedIdea.roi}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Market Size</div>
                        <div className="text-lg font-semibold text-gray-900">{selectedIdea.marketSize}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Competition Level</div>
                        <div className="text-lg font-semibold text-gray-900">{selectedIdea.competition}</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended CrossVentura Packages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedIdea.crossVenturaPackages.map((pkg, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                            <span className="text-gray-700">{pkg}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleDiscussIdea(selectedIdea)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-xl font-semibold py-3"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Discuss This Idea Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl py-3"
                    >
                      Get Implementation Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}