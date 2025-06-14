
import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

const LazySection = ({ children, className = '', threshold = 0.1 }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {(isVisible || hasBeenVisible) ? children : (
        <div className="h-96 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
};

export default LazySection;
