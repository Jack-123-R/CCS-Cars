
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Shield, Star, Sun } from 'lucide-react';
import {
  ServiceHero,
  ServiceIncludedList,
  ServiceProcessAccordion,
  ServiceBenefits,
  ServiceCTA,
} from '@/components/services/exports';

const included = [
  "Complete interior assessment and preparation",
  "Fabric protection coating application",
  "Leather protection and conditioning treatment",
  "UV protection for all interior surfaces",
  "Stain resistance treatment for carpets and seats",
  "Dashboard and trim protection coating",
  "Antimicrobial treatment for enhanced cleanliness",
  "Scotchgard or equivalent fabric protection",
  "Professional application with proper curing time",
  "Detailed care instructions and warranty information",
];

const process = [
  {
    step: 1,
    title: "Complete Interior Assessment",
    description: "Thorough evaluation of all interior surfaces and materials to determine the best protection approach.",
    details:
      "We identify different material types including leather, fabric, plastics, and trim pieces to select the appropriate protection products for each surface type.",
  },
  {
    step: 2,
    title: "Deep Cleaning and Preparation",
    description: "Professional cleaning of all surfaces to ensure optimal adhesion of protection products.",
    details:
      "Complete interior cleaning removes all contaminants that could interfere with protection product bonding. This includes vacuuming, steam cleaning, and specialized surface preparation.",
  },
  {
    step: 3,
    title: "Fabric Protection Application",
    description: "Application of advanced fabric protection coatings to all cloth surfaces including seats and carpets.",
    details:
      "Scotchgard or equivalent protection creates an invisible barrier that repels liquids and prevents stains from setting into fabric fibers.",
  },
  {
    step: 4,
    title: "Leather Conditioning and Protection",
    description: "Specialized treatment for leather surfaces including conditioning and protective coating application.",
    details:
      "Premium leather conditioners restore moisture and flexibility while protective coatings provide UV resistance and prevent cracking and fading.",
  },
  {
    step: 5,
    title: "Final Protection and Quality Check",
    description: "Application of UV protection to dashboard and trim, followed by comprehensive quality inspection.",
    details:
      "Final UV protection prevents sun damage and fading. Complete quality check ensures all surfaces are properly protected and ready for years of protection.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Stain Resistance",
    description:
      "Advanced protection against spills, food, drinks, and everyday stains that can permanently damage interior surfaces.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description:
      "Prevents fading, cracking, and deterioration caused by harmful UV rays, keeping interiors looking new longer.",
  },
  {
    icon: Droplet,
    title: "Easy Maintenance",
    description:
      "Protected surfaces clean easier and require less frequent deep cleaning, saving time and money long-term.",
  },
];

export default function PremiumInteriorProtection() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Premium Interior Protection"
        subtitle="Advanced protection for all interior surfaces. Professional-grade coatings and treatments 
                that guard against stains, UV damage, and everyday wear for years of pristine interiors."
        price="Starting at ₹12,500"
        time="2-3 hours"
        guarantee="Long-term Protection"
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
        imgAlt="Premium interior protection service"
        cta={
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book This Service</Link>
          </Button>
        }
      />

      <ServiceBenefits
        title="Long-Term Interior Protection"
        subtitle="Invest in your vehicle's interior with professional protection that pays for itself over time."
        benefits={benefits}
      />

      <ServiceIncludedList
        title="Comprehensive Protection Package"
        subtitle="Every surface in your vehicle's interior receives professional protection treatment."
        included={included}
        bg="bg-gray-50"
      />

      <ServiceProcessAccordion
        title="Our Protection Process"
        subtitle="Click on each step to learn more about our comprehensive interior protection process."
        process={process}
      />

      <ServiceCTA
        title="Protect Your Investment Today"
        subtitle="Don't wait for damage to occur. Book your Premium Interior Protection service now 
            and enjoy years of worry-free driving."
        actions={
          <>
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Book This Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
              <a href="tel:555-123-7446">Call (555) 123-SHINE</a>
            </Button>
          </>
        }
      />
    </div>
  );
}
