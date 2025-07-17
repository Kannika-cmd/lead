import { useState } from 'react';
import { X, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'demo@crossventura.com' && password === 'CrossVentura2024') {
      toast.success('Login successful! Welcome to CrossVentura Dashboard.');
      onClose();
    } else {
      toast.error('Invalid credentials. Please use the demo credentials provided.');
    }
    
    setIsLoading(false);
  };

  const fillDemoCredentials = () => {
    setEmail('demo@crossventura.com');
    setPassword('CrossVentura2024');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md mx-4 shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl mx-auto mb-4 w-fit">
            <User className="h-8 w-8 text-white" />
          </div>
          
          <CardTitle className="text-3xl font-bold text-gray-900">Welcome Back</CardTitle>
          <p className="text-gray-600">Sign in to access your business expansion dashboard</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Demo Credentials */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 text-sm">🚀 Demo Credentials</h4>
            <div className="space-y-1 text-sm">
              <p className="text-blue-700">
                <span className="font-medium">Email:</span> demo@crossventura.com
              </p>
              <p className="text-blue-700">
                <span className="font-medium">Password:</span> CrossVentura2024
              </p>
            </div>
            <Button
              onClick={fillDemoCredentials}
              size="sm"
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1 text-xs"
            >
              Use Demo Credentials
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="pl-10 py-3 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 pr-10 py-3 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-violet-600 hover:text-violet-700 font-semibold">
                Sign up for free
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}