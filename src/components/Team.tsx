import { Star, Calendar, Video, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Team() {
  const consultants = [
    {
      name: 'Ritu Panchal',
      role: 'Senior Partner & Chief Advisor',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Senior-most advisor with extensive experience in international business expansion. Led strategic initiatives for Fortune 500 companies.',
      expertise: ['Global Market Entry', 'Strategic Planning', 'Fortune 500 Consulting'],
      rating: 4.9,
      reviews: 247,
      price: 200,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Gujarati']
    },
    {
      name: 'Shashank Pashine',
      role: 'Senior Consultant & Operations Head',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Senior-most operations expert specializing in streamlining business processes and ensuring regulatory compliance.',
      expertise: ['Operations Management', 'Compliance', 'Process Optimization'],
      rating: 4.8,
      reviews: 189,
      price: 180,
      availability: 'Next Available: Tomorrow',
      languages: ['English', 'Hindi', 'Marathi']
    },
    {
      name: 'Shushmitaa Patil',
      role: 'Expert Advisor',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert advisor with deep knowledge in legal frameworks and tax structures for international business operations.',
      expertise: ['Legal Structuring', 'Tax Planning', 'International Law'],
      rating: 4.9,
      reviews: 156,
      price: 160,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Marathi']
    },
    {
      name: 'Radhika Sharma',
      role: 'Associate Consultant',
      experience: '7+ years',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dynamic associate consultant specializing in market research and business development strategies for emerging markets.',
      expertise: ['Market Analysis', 'Business Development', 'Emerging Markets'],
      rating: 4.7,
      reviews: 92,
      price: 120,
      availability: 'Available Now',
      languages: ['English', 'Hindi']
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-violet-50/50 via-rose-50/50 to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-6">
            <Star className="h-8 w-8 text-violet-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Expert Consultants
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get personalized guidance from our world-class experts, backed by AI-powered insights.
            <span className="block mt-2 text-violet-600 font-semibold">Average rating: 4.8/5 ⭐ from 1,000+ clients</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultants.map((consultant, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Profile Header */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-violet-500 to-purple-600"></div>
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
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({consultant.reviews} reviews)</span>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      ${consultant.price}
                      <span className="text-sm font-normal text-gray-600">/hour</span>
                    </div>
                    <p className="text-xs text-gray-500">Free 15-min consultation</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Consultation
                    </Button>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 rounded-lg">
                        <Video className="h-4 w-4 mr-1" />
                        Video
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 rounded-lg">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Expert Matching?</h3>
            <p className="text-gray-600 mb-6">
              Let our AI match you with the perfect consultant based on your specific needs and requirements.
            </p>
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Find My Perfect Match
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}