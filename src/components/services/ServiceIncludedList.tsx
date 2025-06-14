
import { CheckCircle } from "lucide-react";

interface ServiceIncludedListProps {
  title: string;
  subtitle: string;
  included: string[];
  bg?: string; // e.g. bg-white or bg-gray-50
}
export function ServiceIncludedList({ title, subtitle, included, bg = "bg-white" }: ServiceIncludedListProps) {
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {included.map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
