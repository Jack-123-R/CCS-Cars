
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

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
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {process.map((item, index) => (
            <div key={item.step} className="relative">
              <Card className="bg-white border-0 shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-red-900 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 text-lg leading-relaxed">{item.description}</p>
                      <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                        <p className="text-gray-700 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow connector between steps */}
              {index < process.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
