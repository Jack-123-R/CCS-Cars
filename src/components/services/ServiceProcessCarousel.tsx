
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef, useCallback } from "react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image?: string;
}

interface ServiceProcessCarouselProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  bg?: string;
}

export function ServiceProcessCarousel({ title, subtitle, steps, bg = "bg-white" }: ServiceProcessCarouselProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const requestRef = useRef<number>();

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || !isInView) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Check if section is in viewport
    if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
      // Calculate scroll progress within the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - sectionTop) / (sectionHeight - windowHeight * 0.5)));
      
      // Calculate which step should be active based on scroll progress
      const stepIndex = Math.floor(scrollProgress * steps.length);
      const clampedIndex = Math.max(0, Math.min(steps.length - 1, stepIndex));
      
      if (clampedIndex !== currentStep) {
        setCurrentStep(clampedIndex);
      }
    }
  }, [steps.length, isInView, currentStep]);

  const throttledScroll = useCallback(() => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      observer.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [throttledScroll]);

  return (
    <section ref={sectionRef} className={`py-20 ${bg}`} style={{ minHeight: '200vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sticky top-20 z-10 bg-gradient-to-b from-gray-50 to-transparent py-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Main Content Area */}
        <div className="relative">
          {/* Fixed Content Display */}
          <div className="sticky top-40 z-20">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-64 bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
                    {steps[currentStep].image ? (
                      <img 
                        src={steps[currentStep].image} 
                        alt={steps[currentStep].title}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <div className="text-white text-6xl font-bold opacity-30">
                          {steps[currentStep].step}
                        </div>
                      </div>
                    )}
                    {/* Step Number Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                        <span className="text-red-600 font-bold text-lg">{steps[currentStep].step}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                        Step {steps[currentStep].step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {steps[currentStep].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {steps[currentStep].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30">
            <div className="flex flex-col space-y-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentStep ? 'bg-red-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Invisible spacer to create scroll distance */}
          <div style={{ height: '120vh' }} />
        </div>
      </div>
    </section>
  );
}
