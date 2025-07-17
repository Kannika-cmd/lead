import { useState } from 'react';
import { X, Home, CheckSquare, FileText, Users, CreditCard, BarChart3, MessageCircle, Settings, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface PortalPreviewProps {
  onClose: () => void;
  trackEvent: (eventName: string, data?: any) => void;
}

export function PortalPreview({ onClose, trackEvent }: PortalPreviewProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'tasks', name: 'Tasks', icon: CheckSquare },
    { id: 'documents', name: 'Documents', icon: FileText },
    { id: 'compliance', name: 'Compliance Checklist', icon: CheckSquare },
    { id: 'partners', name: 'Partner Network', icon: Users },
    { id: 'financial', name: 'Financial Setup', icon: CreditCard },
    { id: 'sessions', name: 'Consult Sessions', icon: MessageCircle },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const tasks = [
    { id: 1, title: 'Complete business registration', status: 'completed', priority: 'high' },
    { id: 2, title: 'Set up business bank account', status: 'in-progress', priority: 'high' },
    { id: 3, title: 'Obtain necessary licenses', status: 'pending', priority: 'medium' },
    { id: 4, title: 'Tax registration setup', status: 'pending', priority: 'high' },
    { id: 5, title: 'Find local office space', status: 'pending', priority: 'low' }
  ];

  const documents = [
    { name: 'Business Registration Certificate', status: 'completed', date: '2024-01-15' },
    { name: 'Tax ID Documentation', status: 'in-progress', date: '2024-01-18' },
    { name: 'Banking Application Forms', status: 'pending', date: null },
    { name: 'Compliance Checklist', status: 'completed', date: '2024-01-10' }
  ];

  const partners = [
    { name: 'Legal Partners LLC', type: 'Legal Services', status: 'connected', rating: 4.9 },
    { name: 'TaxPro India', type: 'Tax Advisory', status: 'connected', rating: 4.8 },
    { name: 'BankBridge Solutions', type: 'Banking', status: 'pending', rating: 4.7 },
    { name: 'OfficeSpace Mumbai', type: 'Real Estate', status: 'available', rating: 4.6 }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">CrossVentura Dashboard</h1>
              <p className="text-violet-100 text-sm">India Expansion Portal</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/70 w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Progress Banner */}
        <div className="mt-4 bg-white/10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Market Readiness Progress</h3>
            <span className="text-sm">65% Complete</span>
          </div>
          <Progress value={65} className="h-2 bg-white/20" />
          <p className="text-sm text-violet-100 mt-2">
            Great progress! Complete your banking setup to reach 80% readiness.
          </p>
        </div>
      </div>

      <div className="flex h-[calc(100vh-140px)]">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  trackEvent('portal_tab_click', { tab: item.id });
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h2>
                <p className="text-gray-600">Here's your India expansion progress overview</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Active Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-violet-600 mb-2">4</div>
                    <p className="text-sm text-gray-600">2 high priority</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">8/12</div>
                    <p className="text-sm text-gray-600">Completed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                    <p className="text-sm text-gray-600">Connected</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Business registration completed</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Banking partner connected</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Tax consultation scheduled</p>
                          <p className="text-xs text-gray-500">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-violet-600">1</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Complete banking setup</p>
                          <p className="text-xs text-gray-500">Due in 3 days</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-blue-600">2</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Office space selection</p>
                          <p className="text-xs text-gray-500">Due in 1 week</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-green-600">3</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Launch readiness review</p>
                          <p className="text-xs text-gray-500">Due in 2 weeks</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tasks</h2>
                <p className="text-gray-600">Track your expansion milestones and action items</p>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <Card key={task.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            task.status === 'completed' ? 'bg-green-500' :
                            task.status === 'in-progress' ? 'bg-blue-500' :
                            'bg-gray-300'
                          }`}></div>
                          <div>
                            <h3 className="font-medium text-gray-900">{task.title}</h3>
                            <p className="text-sm text-gray-500 capitalize">{task.status.replace('-', ' ')}</p>
                          </div>
                        </div>
                        <Badge className={`${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.priority} priority
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Documents</h2>
                <p className="text-gray-600">Manage your expansion documentation</p>
              </div>

              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <h3 className="font-medium text-gray-900">{doc.name}</h3>
                            {doc.date && (
                              <p className="text-sm text-gray-500">Updated {doc.date}</p>
                            )}
                          </div>
                        </div>
                        <Badge className={`${
                          doc.status === 'completed' ? 'bg-green-100 text-green-800' :
                          doc.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {doc.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Partner Network</h2>
                <p className="text-gray-600">Your trusted local partners for expansion success</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {partners.map((partner, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                          <p className="text-sm text-gray-600">{partner.type}</p>
                        </div>
                        <Badge className={`${
                          partner.status === 'connected' ? 'bg-green-100 text-green-800' :
                          partner.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {partner.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium">{partner.rating}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          {partner.status === 'connected' ? 'Contact' : 'Connect'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* AI Agent Panel */}
        <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-violet-100 rounded-full">
                <MessageCircle className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  Hi Sarah! I noticed you're 65% complete with your India expansion. 
                  Would you like help with your banking setup?
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                Get Banking Help
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                Schedule Human Consult
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}