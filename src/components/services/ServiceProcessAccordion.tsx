
import { Card, CardContent } from "@/components/ui/card";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string;
  image?: string;
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {process.map((item, index) => (
            <Card key={item.step} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-30">
                        {item.step}
                      </div>
                    </div>
                  )}
                  {/* Step Number Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-red-600 font-bold text-lg">{item.step}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
