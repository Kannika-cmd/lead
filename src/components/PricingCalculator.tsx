import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function PricingCalculator() {
  const [businessType, setBusinessType] = useState('');
  const [marketSize, setMarketSize] = useState('');
  const [timeline, setTimeline] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const serviceOptions = [
    { id: 'launchpad', name: 'CrossVentura Launchpad', price: 2999 },
    { id: 'ai-setup', name: 'AI Business Setup', price: 199 },
    { id: 'tax-structure', name: 'Tax Structuring', price: 3499 },
    { id: 'compliance', name: 'Ongoing Compliance', price: 499 },
    { id: 'banking', name: 'Banking Setup', price: 899 },
    { id: 'warehousing', name: 'Warehousing & Fulfillment', price: 2499 }
  ];

  const calculatePrice = () => {
    let basePrice = 0;
    services.forEach(serviceId => {
      const service = serviceOptions.find(s => s.id === serviceId);
      if (service) basePrice += service.price;
    });

    // Apply discounts based on selections
    let multiplier = 1;
    if (marketSize === 'large') multiplier += 0.3;
    if (timeline === 'urgent') multiplier += 0.2;
    if (services.length >= 3) multiplier -= 0.1; // Bundle discount

    const finalPrice = Math.round(basePrice * multiplier);
    setCalculatedPrice(finalPrice);
  };

  const toggleService = (serviceId: string) => {
    setServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <Calculator className="h-8 w-8 text-green-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pricing
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get an instant estimate for your business expansion needs. Our transparent pricing helps you plan your international growth budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                Calculate Your Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="business-type">Business Type</Label>
                <Select value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS/Technology</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="services">Professional Services</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="market-size">Target Market Size</Label>
                <Select value={marketSize} onValueChange={setMarketSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select market size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (City/State)</SelectItem>
                    <SelectItem value="medium">Medium (Multiple States)</SelectItem>
                    <SelectItem value="large">Large (National)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">Flexible (6+ months)</SelectItem>
                    <SelectItem value="standard">Standard (3-6 months)</SelectItem>
                    <SelectItem value="urgent">Urgent (1-3 months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Services Needed</Label>
                <div className="grid grid-cols-1 gap-3">
                  {serviceOptions.map(service => (
                    <div key={service.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={service.id}
                        checked={services.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                        className="rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                      />
                      <label htmlFor={service.id} className="flex-1 text-sm text-gray-700">
                        {service.name}
                      </label>
                      <span className="text-sm font-semibold text-gray-900">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={calculatePrice}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!businessType || !marketSize || !timeline || services.length === 0}
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Investment
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                Investment Estimate
              </CardTitle>
            </CardHeader>
            <CardContent>
              {calculatedPrice ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      ${calculatedPrice.toLocaleString()}
                    </div>
                    <p className="text-gray-600">Total Investment Estimate</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {services.map(serviceId => {
                        const service = serviceOptions.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{service.name}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">💡 Cost Savings Tips:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Bundle 3+ services for 10% discount</li>
                      <li>• Flexible timeline saves 20%</li>
                      <li>• Free consultation included</li>
                      <li>• No hidden fees guarantee</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Get Detailed Quote
                    </Button>
                    <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 py-3 rounded-xl">
                      Schedule Free Consultation
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Fill out the form to get your personalized investment estimate</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ROI Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Expected ROI</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
                <div className="text-gray-600">Average ROI</div>
                <div className="text-sm text-gray-500">Within 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">6 months</div>
                <div className="text-gray-600">Payback Period</div>
                <div className="text-sm text-gray-500">Typical timeline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
                <div className="text-sm text-gray-500">Client satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}