
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !api || !isInView) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calculate scroll progress within the section
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight / 2 - sectionTop) / (sectionHeight / 2)));
        
        // Calculate which step should be active based on scroll progress
        const stepIndex = Math.floor(scrollProgress * steps.length);
        const clampedIndex = Math.max(0, Math.min(steps.length - 1, stepIndex));
        
        // Only update if the index has changed
        if (clampedIndex !== current) {
          api.scrollTo(clampedIndex);
        }
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
  }, [api, current, steps.length, isInView]);

  return (
    <section ref={sectionRef} className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {steps.map((step) => (
                <CarouselItem key={step.step}>
                  <Card className="bg-white border-0 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="relative h-80 bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
                        {step.image ? (
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                            <div className="text-white text-8xl font-bold opacity-30">
                              {step.step}
                            </div>
                          </div>
                        )}
                        {/* Step Number Overlay */}
                        <div className="absolute top-6 left-6">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-red-600 font-bold text-xl">{step.step}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 text-center">
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Step Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
