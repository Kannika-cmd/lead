import { Star, MessageCircle, Calendar, Bot, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ConsultantsSectionProps {
  onChatOpen: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function ConsultantsSection({ onChatOpen, trackEvent }: ConsultantsSectionProps) {
  const consultants = [
    {
      id: 'ritu-panchal',
      name: 'Ritu Panchal',
      role: 'Senior Partner & Chief Advisor',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Senior-most advisor with extensive experience in international business expansion. Led strategic initiatives for Fortune 500 companies.',
      expertise: ['Global Market Entry', 'Strategic Planning', 'Fortune 500 Consulting'],
      rating: 4.9,
      reviews: 247,
      languages: ['English', 'Hindi', 'Gujarati'],
      availability: 'Available Today',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 'shashank-pashine',
      name: 'Shashank Pashine',
      role: 'Senior Consultant & Operations Head',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Senior-most operations expert specializing in streamlining business processes and ensuring regulatory compliance.',
      expertise: ['Operations Management', 'Compliance', 'Process Optimization'],
      rating: 4.8,
      reviews: 189,
      languages: ['English', 'Hindi', 'Marathi'],
      availability: 'Next Available: Tomorrow',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'shushmitaa-patil',
      name: 'Shushmitaa Patil',
      role: 'Expert Advisor',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert advisor with deep knowledge in legal frameworks and tax structures for international business operations.',
      expertise: ['Legal Structuring', 'Tax Planning', 'International Law'],
      rating: 4.9,
      reviews: 156,
      languages: ['English', 'Hindi', 'Marathi'],
      availability: 'Available Today',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      id: 'radhika-sharma',
      name: 'Radhika Sharma',
      role: 'Associate Consultant',
      experience: '7+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dynamic associate consultant specializing in market research and business development strategies for emerging markets.',
      expertise: ['Market Analysis', 'Business Development', 'Emerging Markets'],
      rating: 4.7,
      reviews: 92,
      languages: ['English', 'Hindi'],
      availability: 'Available Now',
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  const handleChatWithAI = (consultant: any) => {
    trackEvent('consultant_ai_chat', { consultant: consultant.id });
    onChatOpen();
  };

  const handleBookSession = (consultant: any) => {
    trackEvent('consultant_book_session', { consultant: consultant.id });
    // In production, this would open booking calendar
    console.log(`Booking session with ${consultant.name}...`);
  };

  return (
    <section id="consultants" className="py-24 bg-gradient-to-br from-violet-50/50 via-rose-50/50 to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
            <Star className="h-8 w-8 text-violet-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Expert Consultants
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get personalized guidance from our world-class experts. Each consultant has an AI twin 
            available for free consultations 24/7.
          </p>

          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🤖 AI + Human Hybrid Support</h3>
            <p className="text-gray-600">
              Chat with AI versions of our consultants for free, then book live sessions when you need human expertise.
            </p>
          </div>
        </div>

        {/* Consultants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultants.map((consultant) => (
            <Card key={consultant.id} className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Profile Header */}
                <div className="relative">
                  <div className={`h-32 bg-gradient-to-r ${consultant.gradient}`}></div>
                  <div className="absolute -bottom-8 left-6">
                    <img 
                      src={consultant.image} 
                      alt={consultant.name}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm">
                      {consultant.availability}
                    </Badge>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="pt-10 px-6 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{consultant.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">{consultant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-violet-600 font-semibold mb-1">{consultant.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{consultant.experience} experience</p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {consultant.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {consultant.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-violet-100 text-violet-800 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Languages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {consultant.languages.map((language, langIndex) => (
                        <span
                          key={langIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({consultant.reviews} reviews)</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleChatWithAI(consultant)}
                      className={`w-full bg-gradient-to-r ${consultant.gradient} hover:shadow-lg transition-all duration-300 text-white rounded-xl font-semibold py-3`}
                    >
                      <Bot className="h-4 w-4 mr-2" />
                      Chat with AI Version Free
                    </Button>
                    
                    <Button 
                      onClick={() => handleBookSession(consultant)}
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50 rounded-xl py-3"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Live Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Expert Matching?</h3>
            <p className="text-gray-600 mb-6">
              Let our AI match you with the perfect consultant based on your specific needs and requirements.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  onChatOpen();
                  trackEvent('expert_matching_ai');
                }}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Bot className="h-4 w-4 mr-2" />
                Find My Perfect Match
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-violet-300 text-violet-600 hover:bg-violet-50 px-8 py-3 rounded-full font-semibold"
                onClick={() => trackEvent('view_all_consultants')}
              >
                <Video className="h-4 w-4 mr-2" />
                View All Consultants
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}