
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

export function ServiceBenefits({ title, subtitle, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(benefit => (
            <Card key={benefit.title} className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <benefit.icon className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
