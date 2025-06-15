
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Wrench } from 'lucide-react';
import { ServiceHero, ServiceIncludedList, ServiceProcessCarousel, ServiceCTA } from "@/components/services/exports";
import { useState } from 'react';

// Data
const included = [
  "Complete engine bay assessment and preparation",
  "Professional degreasing of all components",
  "Steam cleaning of engine surfaces",
  "Safe cleaning around electrical components",
  "Belt and hose cleaning and conditioning",
  "Battery terminal cleaning and protection",
  "Engine cover detailing and dressing",
  "Plastic and rubber component restoration",
  "Professional finishing with appropriate dressings",
  "Post-service inspection and recommendations"
];

const process = [
  {
    step: 1,
    title: "Assessment and Preparation",
    description: "Thorough inspection of engine bay condition and careful preparation of all electrical components.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 2,
    title: "Professional Degreasing",
    description: "Application of industrial-grade degreasers to break down accumulated oil, grease, and grime.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 3,
    title: "Steam Cleaning Process",
    description: "High-temperature steam cleaning to safely remove all loosened contaminants without water damage.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 4,
    title: "Component Restoration",
    description: "Detailed cleaning and conditioning of belts, hoses, and plastic components to restore their appearance.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 5,
    title: "Professional Finishing",
    description: "Application of appropriate dressings and protectants to give your engine bay a showroom appearance.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  }
];

export default function EngineBayDetailing() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Engine Bay Detailing"
        subtitle="Professional engine bay cleaning and detailing that makes your engine compartment look showroom fresh while maintaining all safety standards."
        price="Starting at ₹6,500"
        time="1-2 hours"
        guarantee="Safe Methods"
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
        imgAlt="Engine bay detailing service"
        cta={
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book This Service</Link>
          </Button>
        }
        iconType="rupee"
      />

      <ServiceIncludedList
        title="Complete Engine Bay Service"
        subtitle="Professional cleaning and detailing of your engine compartment using safe, proven methods."
        included={included}
        bg="bg-white"
      />

      <ServiceProcessCarousel
        title="Our Detailed Process"
        subtitle="Experience our comprehensive 5-step process designed to safely restore your engine bay"
        steps={process}
        bg="bg-gradient-to-br from-gray-50 to-gray-100"
      />

      <ServiceCTA
        title="Complete Your Vehicle's Transformation"
        subtitle="Add engine bay detailing to your service for a truly comprehensive vehicle detail."
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
