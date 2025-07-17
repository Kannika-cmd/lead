import { TrendingUp, Globe, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookConsultingButton } from './cta/BookConsultingButton';

interface FooterProps {
  onChatOpen: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function Footer({ onChatOpen, trackEvent }: FooterProps) {
  const footerSections = {
    'About': [
      'Our Story',
      'Leadership Team',
      'Careers',
      'Press & Media',
      'Contact Us'
    ],
    'Launchpad': [
      'Opportunity Explorer',
      'Fasttrackers',
      'Market Research',
      'Partner Network',
      'Success Stories'
    ],
    'Services': [
      'Business Idea Generator',
      'AI Business Setup',
      'Tax Structuring',
      'Banking & Payments',
      'Compliance Support'
    ],
    'Resources': [
      'Blog & Insights',
      'Case Studies',
      'Webinars',
      'Templates & Tools',
      'Market Reports'
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Data Protection',
      'Compliance'
    ]
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('newsletter_signup', { source: 'footer' });
    // Handle newsletter signup
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-gray-800 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-white" />
                  <Globe className="h-4 w-4 text-sky-400 absolute -top-1 -right-1 bg-white rounded-full p-0.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
                  CrossVentura
                </span>
                <span className="text-sm text-gray-300">Global Business Solutions</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              ABC of Cross-Border Business™ - Your trusted partner for international business expansion 
              between India and the USA. Empowering 10,000+ businesses to scale globally with AI-powered insights and expert guidance.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <span className="text-gray-300">hello@crossventura.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-violet-400" />
                <span className="text-gray-300">+1-800-CROSS-24</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-violet-400" />
                <span className="text-gray-300">New York • Mumbai • Bangalore</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-slate-700/50 to-gray-700/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-600/30">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">Get weekly insights and expansion strategies</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-gray-500 text-white placeholder-gray-400 focus:border-violet-400 focus:ring-violet-400"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm"
                      onClick={() => trackEvent('footer_link_click', { section: title, link })}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-600 mt-16 pt-12">
          <div className="bg-gradient-to-r from-violet-900/50 to-purple-900/50 rounded-3xl p-8 text-center backdrop-blur-sm border border-violet-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Expand Globally?</h3>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Join thousands of businesses that have successfully expanded internationally with CrossVentura's proven methodology.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
              <BookConsultingButton 
                className="flex-1 px-8 py-3 rounded-full font-semibold"
                trackEvent={trackEvent}
              />
              <Button 
                onClick={() => {
                  onChatOpen();
                  trackEvent('footer_chat_click');
                }}
                variant="outline"
                className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat with AI
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-gray-300 hover:text-violet-400 transition-colors text-sm"
                onClick={() => trackEvent('footer_legal_click', { link: 'privacy' })}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-violet-400 transition-colors text-sm"
                onClick={() => trackEvent('footer_legal_click', { link: 'terms' })}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-violet-400 transition-colors text-sm"
                onClick={() => trackEvent('footer_legal_click', { link: 'cookies' })}
              >
                Cookie Policy
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-violet-400 transition-colors text-sm"
                onClick={() => trackEvent('footer_legal_click', { link: 'accessibility' })}
              >
                Accessibility
              </a>
            </div>
            <div className="text-gray-300 text-sm">
              © 2024 CrossVentura. All rights reserved. Made with ❤️ for global entrepreneurs.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}