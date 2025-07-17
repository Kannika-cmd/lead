import { Video, Phone, MessageCircle, Mail, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface GetHelpProps {
  onChatClick: () => void;
}

export function GetHelp({ onChatClick }: GetHelpProps) {
  const supportOptions = [
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Face-to-face consultation with our experts',
      availability: 'Available 24/7',
      responseTime: 'Instant',
      gradient: 'from-blue-500 to-blue-600',
      features: ['Screen sharing', 'Recording available', 'Multi-language support']
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our specialists',
      availability: 'Mon-Fri, 9 AM - 6 PM',
      responseTime: '< 30 seconds',
      gradient: 'from-green-500 to-green-600',
      features: ['Callback option', 'Priority routing', 'Expert matching']
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our AI + human team',
      availability: '24/7 AI + Human',
      responseTime: '< 5 seconds',
      gradient: 'from-purple-500 to-purple-600',
      features: ['AI + Human hybrid', 'File sharing', 'Chat history']
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed written assistance with documentation',
      availability: 'Always accepting',
      responseTime: '< 2 hours',
      gradient: 'from-orange-500 to-orange-600',
      features: ['Detailed responses', 'Attachments', 'Follow-up tracking']
    }
  ];

  const stats = [
    { value: '< 30 sec', label: 'Average Response Time' },
    { value: '4.9/5', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Availability' },
    { value: '15+', label: 'Languages Supported' }
  ];

  return (
    <section id="help" className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Expert Help
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our team of experts is here to help you navigate international business expansion. 
            Choose your preferred way to get assistance - we're available 24/7.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className={`p-4 bg-gradient-to-r ${option.gradient} rounded-2xl mb-6 inline-block shadow-lg`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{option.availability}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Response: {option.responseTime}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Features:</h4>
                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={index === 2 ? onChatClick : undefined}
                  className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white py-3 rounded-xl font-semibold`}
                >
                  {option.title === 'Video Consultation' && 'Start Video Call'}
                  {option.title === 'Phone Support' && 'Call Now'}
                  {option.title === 'Live Chat' && 'Start Chat'}
                  {option.title === 'Email Support' && 'Send Email'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Support */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200/50 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 Emergency Support</h3>
          <p className="text-gray-600 mb-6">
            Need urgent help with compliance, legal issues, or time-sensitive matters? 
            Our emergency support team is available 24/7.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Emergency Hotline: +1-800-CROSS-24
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-red-300 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full font-semibold"
            >
              Priority Support Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}