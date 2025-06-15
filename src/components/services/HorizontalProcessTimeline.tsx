
import { Check } from "lucide-react";

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HorizontalProcessTimelineProps {
  title: string;
  subtitle: string;
  steps: TimelineStep[];
  bg?: string;
}

export function HorizontalProcessTimeline({ title, subtitle, steps, bg = "bg-white" }: HorizontalProcessTimelineProps) {
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block">
            <div className="absolute top-0 left-0 h-0.5 bg-red-500 transition-all duration-1000" style={{ width: '16.66%' }}></div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10 ${
                    index === 0 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-200 text-gray-600 border-2 border-gray-300'
                  }`}>
                    {index === 0 ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <span className="font-bold text-lg">{step.step.toString().padStart(2, '0')}</span>
                    )}
                  </div>
                  
                  {/* Step Number Label */}
                  <div className="text-xs font-semibold text-gray-500 mb-2">
                    STEP {step.step}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
