
import { ReactNode } from "react";
import { IndianRupee, Clock, Shield } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  price?: string;
  time?: string;
  guarantee?: string;
  image: string;
  imgAlt: string;
  cta?: ReactNode;
  iconType?: "rupee" | "dollar";
}

export function ServiceHero({
  title,
  subtitle,
  price,
  time,
  guarantee,
  image,
  imgAlt,
  cta,
  iconType = "rupee"
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">{title}</h1>
            <p className="text-xl text-red-100">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {price && (
                <div className="flex items-center space-x-2">
                  {iconType === "rupee" ? (
                    <IndianRupee className="h-5 w-5" />
                  ) : (
                    <span>₹</span>
                  )}
                  <span className="font-semibold">{price}</span>
                </div>
              )}
              {time && (
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">{time}</span>
                </div>
              )}
              {guarantee && (
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">{guarantee}</span>
                </div>
              )}
            </div>
            {cta}
          </div>
          <div className="relative">
            <img
              src={image}
              alt={imgAlt}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
