import { useState } from 'react';
import { BookOpen, Filter, Search, ArrowRight, Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface ResourcesSectionProps {
  trackEvent: (eventName: string, data?: any) => void;
}

export function ResourcesSection({ trackEvent }: ResourcesSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', name: 'All Resources' },
    { id: 'india', name: 'India' },
    { id: 'usa', name: 'USA' },
    { id: 'cross-border', name: 'Cross-Border Basics' },
    { id: 'tax', name: 'Tax' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tools', name: 'Tools' },
    { id: 'business-ideas', name: 'Business Idea Generator Insights' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to US LLC Formation for Indian Businesses',
      excerpt: 'Step-by-step guide covering everything from choosing the right state to ongoing compliance requirements.',
      category: 'usa',
      tags: ['Legal', 'Setup', 'Compliance'],
      readTime: '12 min read',
      author: 'Ritu Panchal',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 2,
      title: 'India Market Entry: Regulatory Landscape 2024',
      excerpt: 'Navigate India\'s evolving regulatory environment with our comprehensive market entry guide.',
      category: 'india',
      tags: ['Regulations', 'Market Entry', 'Compliance'],
      readTime: '8 min read',
      author: 'Shashank Pashine',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 3,
      title: 'Tax Optimization Strategies for Cross-Border Business',
      excerpt: 'Maximize your savings with proven tax structuring strategies for international operations.',
      category: 'tax',
      tags: ['Tax Planning', 'Optimization', 'Cross-Border'],
      readTime: '15 min read',
      author: 'Shushmitaa Patil',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 4,
      title: 'Case Study: TechFlow\'s $2M India Expansion Success',
      excerpt: 'How a US SaaS company captured the Indian market in 6 months using our Fasttracker program.',
      category: 'case-studies',
      tags: ['Success Story', 'SaaS', 'India'],
      readTime: '10 min read',
      author: 'CrossVentura Team',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Generated Business Ideas: Top 10 Opportunities for 2024',
      excerpt: 'Discover the most promising business opportunities identified by our AI Business Idea Generator.',
      category: 'business-ideas',
      tags: ['AI Insights', 'Opportunities', 'Trends'],
      readTime: '6 min read',
      author: 'AI Business Agent',
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 6,
      title: 'Cross-Border Banking: Setting Up Multi-Currency Operations',
      excerpt: 'Essential guide to establishing banking relationships and payment processing in multiple countries.',
      category: 'cross-border',
      tags: ['Banking', 'Payments', 'Operations'],
      readTime: '9 min read',
      author: 'Radhika Sharma',
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    trackEvent('resources_filter_change', { filter: filterId });
  };

  const handleResourceClick = (resource: any) => {
    trackEvent('resource_click', { 
      resourceId: resource.id, 
      title: resource.title,
      category: resource.category 
    });
  };

  return (
    <section id="resources" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Resources &
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert insights, guides, and tools to help you navigate international business expansion. 
            Learn from real case studies and proven strategies.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {filteredResources.filter(r => r.featured).map((resource) => (
                <Card 
                  key={resource.id}
                  className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                  onClick={() => handleResourceClick(resource)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Featured</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {resource.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {resource.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{resource.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{resource.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Resources Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {activeFilter === 'all' ? 'All Resources' : `${filters.find(f => f.id === activeFilter)?.name} Resources`}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <Card 
                key={resource.id}
                className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                onClick={() => handleResourceClick(resource)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-all duration-500"
                    />
                    {resource.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {resource.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{resource.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 max-w-2xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want More Insights?</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for weekly insights, case studies, and expansion strategies.
            </p>
            <div className="flex justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-gray-200 text-gray-900 placeholder-gray-500 max-w-xs mr-4"
              />
              <Button 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold"
                onClick={() => trackEvent('newsletter_subscribe')}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}