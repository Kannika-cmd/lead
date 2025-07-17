import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookConsultingButton } from './cta/BookConsultingButton';

interface HeaderProps {
  trackEvent: (eventName: string, data?: any) => void;
}

export function Header({ trackEvent }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Launchpad', 
      href: '#launchpad',
      dropdown: ['Opportunity Explorer', 'Fasttrackers', 'Market Research']
    },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: ['Business Idea Generator', 'AI Business Setup', 'Tax Structuring', 'Banking & Payments', 'Compliance Support']
    },
    { 
      name: 'Solutions', 
      href: '#solutions',
      dropdown: ['How It Works', 'Why CrossVentura', 'ABC of Cross-Border Business']
    },
    { 
      name: 'Experts', 
      href: '#consultants',
      dropdown: ['Meet Our Consultants', 'AI Agents', 'Book Session']
    },
    { 
      name: 'Resources', 
      href: '#resources',
      dropdown: ['Pricing', 'Blog & Insights', 'Case Studies', 'Tools & Templates']
    }
  ];

  const handleNavClick = (item: any) => {
    trackEvent('nav_click', { item: item.name });
    if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (parentItem: string, subItem: string) => {
    trackEvent('dropdown_click', { parent: parentItem, item: subItem });
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 px-4 text-center text-sm overflow-hidden">
        <span className="mr-4">🚀 Ready to expand globally?</span>
        <BookConsultingButton 
          variant="ghost" 
          size="sm"
          className="text-white hover:bg-white/20 px-4 py-1 rounded-full border border-white/30 bg-white/10"
          trackEvent={trackEvent}
        >
          Book Free Consultation
        </BookConsultingButton>
      </div>

      <nav className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <TrendingUp className="h-6 w-6 text-white" />
                  <Globe className="h-3 w-3 text-sky-400 absolute -top-1 -right-1 bg-white rounded-full p-0.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
                  CrossVentura
                </span>
                <span className="text-xs text-gray-500 -mt-1">Global Business Solutions</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleNavClick(item)}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 font-medium text-sm"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-3 w-3" />}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200/50 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                          onClick={() => handleDropdownClick(item.name, subItem)}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Book Consulting Button */}
            <div className="hidden lg:flex items-center">
              <BookConsultingButton 
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                trackEvent={trackEvent} 
              />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700 hover:text-violet-600 hover:bg-violet-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1 mt-2">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                          onClick={() => {
                            handleDropdownClick(item.name, subItem);
                          }}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <BookConsultingButton 
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold"
                  trackEvent={trackEvent}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}