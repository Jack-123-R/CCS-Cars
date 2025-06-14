
import { ReactNode } from "react";

interface ServiceCTAProps {
  bg?: string;
  title: string;
  subtitle: string;
  actions: ReactNode;
}
export function ServiceCTA({ bg = "bg-gradient-to-br from-red-900 to-red-700 text-white", title, subtitle, actions }: ServiceCTAProps) {
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {actions}
        </div>
      </div>
    </section>
  );
}
