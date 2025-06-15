
import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

const LazySection = ({ children, className = '', threshold = 0.1 }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Immediately disconnect after first intersection
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Load content slightly before it comes into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (
        <div className="h-64 bg-gray-50 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazySection;
