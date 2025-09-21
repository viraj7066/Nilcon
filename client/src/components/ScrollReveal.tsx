import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleUp';
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  triggerOnce = true 
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce });

  const getDurationClass = () => {
    if (duration <= 300) return 'duration-300';
    if (duration <= 500) return 'duration-500';
    if (duration <= 700) return 'duration-700';
    if (duration <= 1000) return 'duration-1000';
    return 'duration-700'; // default
  };

  const getDelayClass = () => {
    if (delay <= 0) return '';
    if (delay <= 100) return 'delay-100';
    if (delay <= 200) return 'delay-200';
    if (delay <= 300) return 'delay-300';
    if (delay <= 500) return 'delay-500';
    if (delay <= 700) return 'delay-700';
    if (delay <= 1000) return 'delay-1000';
    return 'delay-500'; // default
  };

  const getAnimationClass = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = getDurationClass();
    const delayClass = getDelayClass();
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
        case 'fadeInLeft':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-x-8`;
        case 'fadeInRight':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-x-8`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0`;
        case 'scaleUp':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 scale-95`;
        default:
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
      }
    } else {
      return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}