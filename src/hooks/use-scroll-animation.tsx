import { useEffect, useRef, RefObject } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right';
type AnimationType = 'fade' | 'slide' | 'zoom' | 'rotate';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  direction?: AnimationDirection;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Hook para añadir animaciones de scroll a elementos cuando entran en el viewport
 */
export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T>, string] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    direction = 'up',
    type = 'fade',
    delay = 0,
    duration = 800,
    once = true
  } = options;
  
  const ref = useRef<T>(null);
  
  // Generar clases CSS basadas en las opciones
  const animationClass = `scroll-animate-${type}-${direction}`;
  const styleClass = `transition-all duration-${duration} delay-${delay}`;
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    // Añadir clase inicial para el estado 'no visible'
    currentRef.classList.add(animationClass);
    currentRef.style.transitionDuration = `${duration}ms`;
    currentRef.style.transitionDelay = `${delay}ms`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentRef.classList.add('is-visible');
            
            // Si la opción 'once' está activada, dejar de observar después de la animación
            if (once) {
              observer.unobserve(currentRef);
            }
          } else if (!once) {
            // Si 'once' es false, quitar la clase cuando sale del viewport
            currentRef.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, delay, duration, once, rootMargin, threshold]);
  
  return [ref, animationClass];
}