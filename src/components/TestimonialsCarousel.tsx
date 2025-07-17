import { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Solutions',
      company: 'Expanded from US to India',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "CrossVentura made our India expansion seamless. Their team handled everything from company registration to finding local partners. We're now generating $2M+ annually in the Indian market. The AI agent was incredibly helpful for quick questions, and the human consultants provided strategic depth.",
      results: {
        revenue: '+250% Revenue Growth',
        time: '6 months to profitability',
        market: 'Successfully entered 5 Indian cities',
        roi: '400% ROI in first year'
      },
      videoTestimonial: true
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Founder, GreenTech Innovations',
      company: 'Expanded from India to US',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The CrossVentura team's expertise in US market entry was exceptional. They helped us navigate complex regulations and set up our LLC in just 24 hours. Our US operations are now our largest revenue stream. The Fasttracker program was worth every penny.",
      results: {
        revenue: '+400% Revenue Growth',
        time: '3 months to first sale',
        market: 'Captured 15% market share',
        roi: '600% ROI in 18 months'
      },
      videoTestimonial: false
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'VP Operations, GlobalCommerce',
      company: 'Multi-market expansion',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Working with CrossVentura was a game-changer. Their AI-powered business setup advisor streamlined our expansion process. We've successfully launched in 3 countries with their guidance. The ongoing compliance support gives us peace of mind.",
      results: {
        revenue: '+300% Revenue Growth',
        time: '4 months full setup',
        market: 'Expanded to 3 countries',
        roi: '500% ROI across markets'
      },
      videoTestimonial: true
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'CEO, FinanceForward',
      company: 'Fintech expansion',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "CrossVentura's tax structuring expertise saved us over $500K in our first year. Their ongoing compliance support gives us peace of mind to focus on growing our business. The combination of AI insights and human expertise is unmatched.",
      results: {
        revenue: '$500K+ Tax Savings',
        time: '100% Compliance Rate',
        market: 'Zero regulatory issues',
        roi: '350% ROI on investment'
      },
      videoTestimonial: false
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
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
            Client
            <span className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Success Stories
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
        <div className="relative max-w-6xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Video Play Button */}
                  {currentTestimonial.videoTestimonial && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-4"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  )}
                  
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
                <div className="p-8 lg:p-12">
                  <Quote className="h-8 w-8 text-violet-500 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{currentTestimonial.text}"
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(currentTestimonial.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-900">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Company Badge */}
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full">
                    <span className="text-violet-700 font-semibold text-sm">{currentTestimonial.company}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevTestimonial}
              className="p-3 rounded-full border-gray-300 hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-violet-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
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

          {/* Auto-play Toggle */}
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </Button>
          </div>
        </div>

        {/* Testimonial Ticker for Mobile */}
        <div className="lg:hidden mt-12 overflow-hidden w-full">
          <div className="flex animate-scroll space-x-8 w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-lg max-w-80">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}