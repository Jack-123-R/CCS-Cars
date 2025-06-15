
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
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
        
        setCurrentStep(clampedIndex);
      }
    };

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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [steps.length, isInView]);

  return (
    <section ref={sectionRef} className={`py-20 ${bg} relative`} style={{ minHeight: '250vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Increased top spacing */}
        <div className="text-center mb-20 sticky top-24 z-10 bg-gradient-to-b from-gray-50 to-transparent py-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Main Content Area */}
        <div className="relative">
          {/* Fixed Content Display - Increased top spacing */}
          <div className="sticky top-48 z-20">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-80 bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
                    {steps[currentStep].image ? (
                      <img 
                        src={steps[currentStep].image} 
                        alt={steps[currentStep].title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center transition-all duration-700 ease-out">
                        <div className="text-white text-8xl font-bold opacity-30">
                          {steps[currentStep].step}
                        </div>
                      </div>
                    )}
                    {/* Step Number Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-out">
                        <span className="text-red-600 font-bold text-xl">{steps[currentStep].step}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 text-center">
                    <div className="mb-4 transition-all duration-500 ease-out">
                      <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                        Step {steps[currentStep].step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-500 ease-out">
                      {steps[currentStep].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed transition-all duration-500 ease-out">
                      {steps[currentStep].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Progress Indicators - Now positioned absolute within the section */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30">
            <div className="flex flex-col space-y-3 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'bg-red-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Invisible spacer to create scroll distance - Reduced height */}
          <div style={{ height: '150vh' }} />
        </div>
      </div>
    </section>
  );
}
