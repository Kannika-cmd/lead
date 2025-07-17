import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Solutions',
      company: 'Expanded from US to India',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "CrossVentura made our India expansion seamless. Their team handled everything from company registration to finding local partners. We're now generating $2M+ annually in the Indian market. Absolutely recommended!",
      results: {
        revenue: '+250% Revenue Growth',
        time: '6 months to profitability',
        market: 'Successfully entered 5 Indian cities'
      }
    },
    {
      name: 'Raj Patel',
      role: 'Founder, GreenTech Innovations',
      company: 'Expanded from India to US',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The CrossVentura team's expertise in US market entry was exceptional. They helped us navigate complex regulations and set up our LLC in just 24 hours. Our US operations are now our largest revenue stream.",
      results: {
        revenue: '+400% Revenue Growth',
        time: '3 months to first sale',
        market: 'Captured 15% market share'
      }
    },
    {
      name: 'Emily Chen',
      role: 'VP Operations, GlobalCommerce',
      company: 'Multi-market expansion',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Working with CrossVentura was a game-changer. Their AI-powered business setup advisor streamlined our expansion process. We've successfully launched in 3 countries with their guidance.",
      results: {
        revenue: '+300% Revenue Growth',
        time: '4 months full setup',
        market: 'Expanded to 3 countries'
      }
    },
    {
      name: 'David Rodriguez',
      role: 'CEO, FinanceForward',
      company: 'Fintech expansion',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "CrossVentura's tax structuring expertise saved us over $500K in our first year. Their ongoing compliance support gives us peace of mind to focus on growing our business.",
      results: {
        revenue: '$500K+ Tax Savings',
        time: '100% Compliance Rate',
        market: 'Zero regulatory issues'
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Success
            <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hear from our clients who've successfully expanded their businesses globally with CrossVentura's expertise.
          </p>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">4.9/5</div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <Card className="bg-white shadow-2xl border-0 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                    <p className="text-sm text-gray-200">{currentTestimonial.role}</p>
                    <p className="text-xs text-gray-300">{currentTestimonial.company}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8">
                  <Quote className="h-8 w-8 text-violet-500 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{currentTestimonial.text}"
                  </p>
                  
                  {/* Results */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{currentTestimonial.results.revenue}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{currentTestimonial.results.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{currentTestimonial.results.market}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevTestimonial}
              className="p-3 rounded-full border-gray-300 hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-violet-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextTestimonial}
              className="p-3 rounded-full border-gray-300 hover:bg-gray-50"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Start your global expansion journey today and become our next success story.
            </p>
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}