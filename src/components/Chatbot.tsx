import { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, MessageCircle, Zap, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm CrossAssist, your AI business expansion assistant. I can help you with market entry strategies, business setup, compliance, and much more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { text: 'Help with US expansion', icon: '🇺🇸' },
    { text: 'India market entry', icon: '🇮🇳' },
    { text: 'Business ideas', icon: '💡' },
    { text: 'Tax structuring', icon: '📊' },
    { text: 'Compliance help', icon: '⚖️' },
    { text: 'Pricing info', icon: '💰' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('us expansion') || lowerMessage.includes('usa') || lowerMessage.includes('🇺🇸')) {
      return "Great choice! 🇺🇸 I'd be happy to help with US expansion! We offer comprehensive services including:\n\n• LLC formation in 24 hours\n• EIN & banking setup\n• State tax compliance\n• Marketing strategies\n\nOur FastTracker program can get you operational in just 7 days. Would you like to know more about our US expansion packages or schedule a consultation?";
    } else if (lowerMessage.includes('india') || lowerMessage.includes('indian') || lowerMessage.includes('🇮🇳')) {
      return "Excellent! 🇮🇳 India is a rapidly growing market with incredible opportunities. We can help with:\n\n• Company registration\n• GST & PAN setup\n• Local partnership facilitation\n• Market research\n• Banking relationships\n\nOur India expansion success rate is 95%! What type of business are you looking to establish in India?";
    } else if (lowerMessage.includes('business ideas') || lowerMessage.includes('💡')) {
      return "💡 Our AI-powered Business Idea Generator is amazing! It can help you discover profitable opportunities by analyzing:\n\n• Market trends\n• Competition analysis\n• Profit forecasting\n• Investment requirements\n\nWe've generated 10,000+ ideas with an 85% success rate. Would you like me to redirect you to our idea generator or can I help you brainstorm specific sectors?";
    } else if (lowerMessage.includes('tax') || lowerMessage.includes('📊')) {
      return "📊 Tax structuring is crucial for international success! We specialize in:\n\n• Cross-border tax optimization\n• Double taxation treaties\n• Transfer pricing\n• Compliance across jurisdictions\n\nOur tax experts have saved clients an average of 35% on their tax burden. Would you like to schedule a consultation with our tax specialist?";
    } else if (lowerMessage.includes('compliance') || lowerMessage.includes('⚖️')) {
      return "⚖️ Compliance is our specialty! We ensure you stay compliant with:\n\n• Local regulations\n• International standards\n• Ongoing reporting\n• Legal requirements\n\nOur ongoing compliance support starts at $499/month. Would you like to learn more about our compliance services?";
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('💰')) {
      return "💰 Our pricing is transparent and competitive:\n\n• CrossVentura Launchpad: Starting $2,999\n• Business Idea Generator: Starting $499\n• AI Business Setup: $199/month\n• Tax Structuring: Starting $3,499\n• Compliance Support: $499/month\n\nWe also offer free 15-minute consultations! Would you like to schedule one or learn more about a specific service?";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Welcome to CrossVentura! I'm here to help you expand your business internationally. Whether you're looking to enter the US market, explore opportunities in India, or need help with compliance and tax structuring, I've got you covered. What would you like to know?";
    } else {
      return "I understand you're asking about that. Let me help you with the right information! 🚀\n\nI can assist you with:\n• Market entry strategies\n• Business setup and compliance\n• Tax optimization\n• Partnership opportunities\n• Investment guidance\n\nCould you please be more specific about what you'd like to know? Or would you like to speak with one of our human experts for personalized assistance?";
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

  const handleQuickReply = (text: string) => {
    setInput(text);
    setTimeout(() => handleSendMessage(), 100);
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
      {/* Chatbot Window */}
      <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] shadow-2xl border-0 flex flex-col overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">CrossAssist</CardTitle>
                <p className="text-sm text-violet-100">AI Business Assistant</p>
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

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
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

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-white border-t">
            <p className="text-xs text-gray-500 mb-2">Quick options:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply(reply.text)}
                  className="text-xs bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100 rounded-full px-3 py-1"
                >
                  {reply.icon} {reply.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
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
        </CardContent>
      </Card>

      {/* Chat Toggle Button */}
      <Button
        onClick={onClose}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}