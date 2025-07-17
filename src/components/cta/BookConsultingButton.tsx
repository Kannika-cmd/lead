import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BookConsultingButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  children?: React.ReactNode;
  trackEvent: (eventName: string, data?: any) => void;
  onClick?: () => void;
}

export function BookConsultingButton({ 
  variant = 'default', 
  size = 'default', 
  className,
  children,
  trackEvent,
  onClick
}: BookConsultingButtonProps) {
  const handleClick = () => {
    trackEvent('book_consulting_click', { 
      variant, 
      size, 
      location: 'button' 
    });
    onClick?.();
    // In production, this would open a calendar booking widget
    console.log('Opening calendar booking...');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn(
        // Base styles for all variants
        "font-semibold transition-all duration-300 transform hover:scale-105",
        // Default variant styles
        variant === 'default' && "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl border-0",
        // Ghost variant styles (for top bar)
        variant === 'ghost' && "text-white hover:bg-white/30 border border-white/50 bg-white/20 backdrop-blur-sm",
        // Outline variant styles
        variant === 'outline' && "border-2 border-violet-500 text-violet-600 hover:bg-violet-50",
        className
      )}
    >
      <Calendar className="h-4 w-4 mr-2" />
      {children || 'Book Consulting'}
    </Button>
  );
}