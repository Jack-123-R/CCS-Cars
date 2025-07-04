
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceHero, ServiceIncludedList, ServiceProcessCarousel, ServiceCTA } from "@/components/services/exports";
import { useState } from 'react';

// Data
const included = [
  "Thorough headlight condition assessment",
  "Progressive wet sanding to remove oxidation",
  "Multi-stage polishing for clarity restoration",
  "UV protective coating application",
  "Both headlights restored to match",
  "Safety and brightness improvement verification",
  "Detailed before and after documentation",
  "Care instructions for maintaining clarity",
  "Satisfaction guarantee on clarity improvement",
  "Professional grade restoration products used"
];

const process = [
  {
    step: 1,
    title: "Assessment and Preparation",
    description: "Thorough inspection of headlight condition including checking for deep scratches, yellowing severity, and structural integrity. We remove the headlights if necessary and prepare the work area.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 2,
    title: "Initial Cleaning and Masking",
    description: "Complete cleaning of the headlight surface and careful masking of surrounding areas to protect your vehicle's paint and trim.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 3,
    title: "Progressive Wet Sanding",
    description: "Multi-stage wet sanding process starting with coarser grits to remove heavy oxidation, progressing to finer grits for smooth finish.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 4,
    title: "Polishing and Clarity Restoration",
    description: "Professional polishing using specialized compounds to restore crystal-clear transparency and remove all sanding marks.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 5,
    title: "UV Protection Application",
    description: "Application of professional-grade UV protective coating to prevent future yellowing and maintain long-lasting clarity.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HeadlightRestoration() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Headlight Restoration"
        subtitle="Restore cloudy, yellowed headlights to crystal clear condition. Improve both appearance and safety with our professional restoration process."
        price="Starting at ₹7,500"
        time="1 hour"
        guarantee="Improved Visibility"
        image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80"
        imgAlt="Headlight restoration service"
        cta={
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book This Service</Link>
          </Button>
        }
        iconType="rupee"
      />

      <ServiceIncludedList
        title="Professional Restoration Process"
        subtitle="Comprehensive restoration that addresses both appearance and functionality."
        included={included}
        bg="bg-white"
      />

      <ServiceProcessCarousel
        title="Our Detailed Process"
        subtitle="Experience our comprehensive 5-step process designed to restore crystal-clear headlights"
        steps={process}
        bg="bg-gradient-to-br from-gray-50 to-gray-100"
      />

      <ServiceCTA
        title="See Clearly Again"
        subtitle="Don't let cloudy headlights compromise your safety. Book your restoration today."
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Book This Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
              <a href="tel:555-123-7446">Call (555) 123-SHINE</a>
            </Button>
          </div>
        }
      />
    </div>
  );
}
