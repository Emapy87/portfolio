import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedElementProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'fade' | 'slide' | 'zoom' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  direction = 'up',
  type = 'fade',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const [ref, animationClass] = useScrollAnimation({
    direction,
    type,
    delay,
    duration,
    threshold,
    once,
  });

  return (
    <div ref={ref} className={`${className} ${animationClass}`}>
      {children}
    </div>
  );
};

export default AnimatedElement;