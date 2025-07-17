import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Globe, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MarketInsights() {
  const gdpData = [
    { country: 'USA', gdp: 23.32, growth: 2.1, color: '#3B82F6' },
    { country: 'China', gdp: 17.73, growth: 8.1, color: '#EF4444' },
    { country: 'India', gdp: 3.73, growth: 6.1, color: '#10B981' },
    { country: 'Germany', gdp: 4.26, growth: 1.1, color: '#F59E0B' },
    { country: 'Japan', gdp: 4.94, growth: 0.6, color: '#8B5CF6' }
  ];

  const expansionTrends = [
    { year: '2020', usToIndia: 1250, indiaToUs: 890 },
    { year: '2021', usToIndia: 1580, indiaToUs: 1200 },
    { year: '2022', usToIndia: 2100, indiaToUs: 1650 },
    { year: '2023', usToIndia: 2750, indiaToUs: 2280 },
    { year: '2024', usToIndia: 3500, indiaToUs: 3100 }
  ];

  const sectorData = [
    { sector: 'Technology', value: 35, color: '#3B82F6' },
    { sector: 'E-commerce', value: 25, color: '#10B981' },
    { sector: 'FinTech', value: 20, color: '#F59E0B' },
    { sector: 'Healthcare', value: 12, color: '#EF4444' },
    { sector: 'Manufacturing', value: 8, color: '#8B5CF6' }
  ];

  const keyInsights = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      value: '+125%',
      description: 'Cross-border business growth in 2024',
      color: 'text-green-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: '195+',
      description: 'Countries with active expansions',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Investment Flow',
      value: '$47.2B',
      description: 'US-India bilateral trade volume',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Success Rate',
      value: '94%',
      description: 'Businesses achieving profitability',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="insights" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <BarChart className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Market
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real-time market data and insights to guide your international expansion strategy. 
            Make informed decisions with our comprehensive market intelligence.
          </p>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {keyInsights.map((insight, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-4 inline-block">
                  <insight.icon className={`h-8 w-8 ${insight.color}`} />
                </div>
                <div className={`text-4xl font-bold ${insight.color} mb-2`}>
                  {insight.value}
                </div>
                <div className="text-gray-900 font-semibold mb-2">{insight.title}</div>
                <div className="text-gray-600 text-sm">{insight.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* GDP Comparison */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                GDP Comparison (Trillions USD)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gdpData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}T`, 'GDP']} />
                  <Bar dataKey="gdp" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expansion Trends */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Business Expansion Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={expansionTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="usToIndia" stroke="#3B82F6" strokeWidth={3} name="US → India" />
                  <Line type="monotone" dataKey="indiaToUs" stroke="#10B981" strokeWidth={3} name="India → US" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Sector Analysis */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              Top Expansion Sectors (2024)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                {sectorData.map((sector, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: sector.color }}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{sector.sector}</span>
                        <span className="text-gray-600">{sector.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${sector.value * 2}%`,
                            backgroundColor: sector.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Opportunities */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">🚀 Market Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">$2.5T</div>
              <div className="text-gray-700">US-India Trade Potential</div>
              <div className="text-sm text-gray-500">By 2030</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">1.4B</div>
              <div className="text-gray-700">Indian Consumer Market</div>
              <div className="text-sm text-gray-500">Growing middle class</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">$23T</div>
              <div className="text-gray-700">US Economy Size</div>
              <div className="text-sm text-gray-500">World's largest market</div>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            The US-India corridor represents one of the most promising expansion opportunities in global business today.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Get Market Report
          </button>
        </div>
      </div>
    </section>
  );
}