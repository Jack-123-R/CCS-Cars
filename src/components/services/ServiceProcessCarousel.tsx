
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
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
                className={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
