import { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, MessageCircle, Phone, Video, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChatSystemProps {
  isOpen: boolean;
  onClose: () => void;
  selectedGeo: 'india' | 'usa' | null;
  trackEvent: (eventName: string, data?: any) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatSystem({ isOpen, onClose, selectedGeo, trackEvent }: ChatSystemProps) {
  const [activeTab, setActiveTab] = useState<'ai' | 'live' | 'whatsapp' | 'call' | 'booking'>('ai');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'ai', name: 'AI Agent', icon: Bot, color: 'text-violet-600' },
    { id: 'live', name: 'Live Chat', icon: MessageSquare, color: 'text-green-600' },
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500' },
    { id: 'call', name: 'Call Request', icon: Phone, color: 'text-blue-600' },
    { id: 'booking', name: 'Book Consultation', icon: Calendar, color: 'text-purple-600' }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: getWelcomeMessage(),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, selectedGeo]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getWelcomeMessage = () => {
    if (selectedGeo === 'india') {
      return "Hello! I'm your AI Business Agent for India expansion. I can help you with market entry strategies, regulatory requirements, and connecting you with local partners. What would you like to know about expanding to India?";
    } else if (selectedGeo === 'usa') {
      return "Hi there! I'm your AI Business Agent for US market entry. I can assist with LLC formation, banking setup, tax structuring, and market strategies. How can I help you enter the US market?";
    } else {
      return "Welcome! I'm CrossAssist, your AI Business Agent. I can help you with international expansion strategies, market selection, regulatory guidance, and much more. Which market are you interested in exploring - India, USA, or both?";
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('india') || lowerMessage.includes('indian')) {
      return "Great choice! 🇮🇳 India offers incredible opportunities:\n\n• 1.4B population with growing middle class\n• $3.7T economy growing at 6.1%\n• Digital adoption accelerating rapidly\n• Improving ease of doing business\n\nOur India expansion services include:\n✓ Company registration (7 days)\n✓ GST & PAN setup\n✓ Local partnership network\n✓ Market research & validation\n\nWould you like to start with our Opportunity Explorer or Fasttracker program?";
    } else if (lowerMessage.includes('usa') || lowerMessage.includes('us market') || lowerMessage.includes('america')) {
      return "Excellent! 🇺🇸 The US market is the world's largest economy:\n\n• $23T GDP with high purchasing power\n• 330M affluent consumers\n• World-class business infrastructure\n• Strong legal framework\n\nOur US expansion services include:\n✓ LLC formation (24 hours)\n✓ EIN & banking setup\n✓ State tax compliance\n✓ Market entry strategies\n\nWould you prefer our Opportunity Explorer approach or the Fasttracker program for rapid entry?";
    } else if (lowerMessage.includes('explorer') || lowerMessage.includes('opportunity explorer')) {
      return "Perfect! 🎯 The Opportunity Explorer is ideal for:\n\n• Market validation & testing\n• Phased market entry\n• Learning regulatory terrain\n• Risk mitigation\n\nWhat's included:\n✓ Market research & validation\n✓ Regulatory compliance roadmap\n✓ Local partner identification\n✓ Pilot program setup\n✓ 3-6 month timeline\n✓ Investment: $15K-$50K\n\nShall I connect you with a consultant to discuss your specific needs?";
    } else if (lowerMessage.includes('fasttrack') || lowerMessage.includes('fast') || lowerMessage.includes('rapid')) {
      return "Excellent choice! ⚡ Fasttrackers is perfect for:\n\n• Rapid market entry (30-90 days)\n• Aggressive launch strategies\n• Pre-built partner networks\n• Speed to market\n\nWhat's included:\n✓ Accelerated legal setup\n✓ Pre-vetted partners\n✓ Ready infrastructure\n✓ Fast-track compliance\n✓ 1-3 month timeline\n✓ Investment: $50K-$150K\n\nWould you like to schedule a consultation to get started immediately?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Here's our transparent pricing structure:\n\n💡 **Opportunity Explorer**: $15K-$50K\n⚡ **Fasttrackers**: $50K-$150K\n👑 **Enterprise**: Custom pricing\n\n**Add-on Services:**\n• Business Idea Generator: $499\n• AI Business Setup: $199/month\n• Tax Structuring: $20K\n• Ongoing Compliance: $2K/month\n\n**ROI Expectations:**\n• Average ROI: 250%\n• Payback period: 6 months\n• Success rate: 95%\n\nWould you like a detailed quote for your specific needs?";
    } else if (lowerMessage.includes('consultant') || lowerMessage.includes('human') || lowerMessage.includes('expert')) {
      return "I'd be happy to connect you with our expert consultants! 👥\n\n**Our Senior Team:**\n• Ritu Panchal - Senior Partner (15+ years)\n• Shashank Pashine - Operations Head (12+ years)\n• Shushmitaa Patil - Legal Expert (10+ years)\n• Radhika Sharma - Market Specialist (7+ years)\n\n**Options:**\n1. Free 15-minute consultation\n2. Detailed strategy session\n3. Ongoing advisory support\n\nEach consultant also has an AI version for 24/7 support. Would you like to book a session or continue chatting with me?";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Great to meet you! I'm here to help you expand your business internationally. \n\nI can assist with:\n🌍 Market selection (India vs USA)\n📋 Regulatory guidance\n🤝 Partner connections\n💰 Investment planning\n📈 Growth strategies\n\nWhat's your biggest question about international expansion?";
    } else {
      return "I understand you're interested in that! Let me help you with the right information. 🚀\n\nI can provide guidance on:\n• Market entry strategies\n• Legal & compliance requirements\n• Partner network access\n• Investment planning\n• Tax optimization\n\nCould you be more specific about what you'd like to know? Or would you prefer to speak with one of our human experts for personalized assistance?";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    trackEvent('chat_message_sent', { 
      tab: activeTab, 
      message: input,
      selectedGeo 
    });

    // Simulate bot thinking time
    await new Promise(resolve => setTimeout(resolve, 1000));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateBotResponse(input),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as any);
    trackEvent('chat_tab_change', { tab: tabId });
    
    if (tabId === 'whatsapp') {
      // Open WhatsApp deep link
      window.open('https://wa.me/1234567890?text=Hi, I\'m interested in CrossVentura services', '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Chat Window */}
      <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] shadow-2xl border-0 flex flex-col overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">CrossVentura Support</CardTitle>
                <p className="text-sm text-violet-100">Multi-channel assistance</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 p-2 flex-shrink-0">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className={`h-3 w-3 ${activeTab === tab.id ? tab.color : ''}`} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages Area */}
          {activeTab === 'ai' && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {selectedGeo && (
                  <div className="text-center">
                    <Badge className="bg-violet-100 text-violet-700">
                      {selectedGeo === 'india' ? '🇮🇳 India' : '🇺🇸 USA'} Expansion Mode
                    </Badge>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-blue-100' : 'bg-violet-100'}`}>
                        {message.sender === 'user' ? (
                          <User className="h-4 w-4 text-blue-600" />
                        ) : (
                          <Bot className="h-4 w-4 text-violet-600" />
                        )}
                      </div>
                      <div className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'} shadow-sm`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="p-2 bg-violet-100 rounded-full">
                        <Bot className="h-4 w-4 text-violet-600" />
                      </div>
                      <div className="bg-white p-3 rounded-2xl shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 rounded-full border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}

          {/* Other Tab Content */}
          {activeTab === 'live' && (
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <div>
                <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat Support</h3>
                <p className="text-gray-600 mb-4">Connect with our human support team</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Start Live Chat
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'call' && (
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <div>
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Request a Call</h3>
                <p className="text-gray-600 mb-4">We'll call you back within 30 minutes</p>
                <div className="space-y-3">
                  <Input placeholder="Your phone number" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Request Call Back
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'booking' && (
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <div>
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Consultation</h3>
                <p className="text-gray-600 mb-4">Schedule a free 15-minute consultation</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Open Calendar
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Floating Chat Button */}
      <Button
        onClick={onClose}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}