
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string;
}

interface ServiceProcessAccordionProps {
  title: string;
  subtitle: string;
  process: ProcessStep[];
  bg?: string; // e.g. bg-white, bg-gray-50
}

export function ServiceProcessAccordion({ title, subtitle, process, bg = "bg-white" }: ServiceProcessAccordionProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const toggleStep = (stepNumber: number) => setActiveStep(activeStep === stepNumber ? null : stepNumber);

  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="space-y-4">
          {process.map(item => (
            <Card key={item.step} className="bg-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleStep(item.step)}
                  className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {activeStep === item.step
                        ? <ChevronUp className="h-6 w-6 text-red-600" />
                        : <ChevronDown className="h-6 w-6 text-gray-400" />}
                    </div>
                  </div>
                </button>
                {activeStep === item.step && (
                  <div className="px-8 pb-8 pt-0">
                    <div className="bg-red-50 rounded-lg p-6 ml-18">
                      <p className="text-gray-700 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
