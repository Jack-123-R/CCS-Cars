
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Clock, Shield, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceHero, ServiceIncludedList, ServiceProcessAccordion, ServiceCTA } from "@/components/services/exports";
import { useState } from 'react';

// Data
const included = [
  "Professional paint assessment and preparation",
  "Precision-cut paint protection film installation",
  "Front bumper full coverage protection",
  "Hood leading edge protection",
  "Side mirror cap coverage",
  "Door edge guard installation",
  "Invisible, self-healing film technology",
  "Professional installation in climate-controlled environment",
  "Warranty on materials and installation",
  "Care and maintenance instructions provided"
];

const process = [
  {
    step: 1,
    title: "Vehicle Assessment and Preparation",
    description: "Thorough inspection of paint condition and precise measurements for custom film cutting.",
    details: "We analyze your vehicle's specific contours and identify the optimal areas for protection. Paint correction may be recommended if needed before film application."
  },
  {
    step: 2,
    title: "Precision Film Cutting",
    description: "Computer-controlled cutting of protection film pieces to exact vehicle specifications.",
    details: "Using advanced plotter technology, we cut each piece of film to perfectly match your vehicle's curves and edges, ensuring seamless coverage."
  },
  {
    step: 3,
    title: "Surface Preparation",
    description: "Meticulous cleaning and preparation of all surfaces to receive the protection film.",
    details: "Complete decontamination and cleaning ensure perfect adhesion. We use specialized cleaning solutions to remove any residues that could affect film bonding."
  },
  {
    step: 4,
    title: "Professional Installation",
    description: "Expert application of protection film using professional techniques and tools.",
    details: "Our certified installers use precise positioning and application techniques to ensure bubble-free installation with perfect edge sealing."
  },
  {
    step: 5,
    title: "Final Inspection and Curing",
    description: "Quality control inspection and proper curing process for optimal film performance.",
    details: "Final inspection ensures perfect installation. The film requires 24-48 hours to fully cure and achieve its self-healing properties."
  }
];

export default function PaintProtectionFilm() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Paint Protection Film"
        subtitle="Invisible protection for high-impact areas. Advanced film technology that prevents chips, scratches, and stains while maintaining your vehicle's original appearance."
        price="Starting at ₹25,000"
        time="3-4 hours"
        guarantee="Ultimate Protection"
        image="https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=600&q=80"
        imgAlt="Paint protection film installation"
        cta={
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book This Service</Link>
          </Button>
        }
        iconType="rupee"
      />

      <ServiceIncludedList
        title="Invisible Paint Protection"
        subtitle="Advanced protection film that's virtually invisible while providing maximum defense."
        included={included}
        bg="bg-white"
      />

      <ServiceProcessAccordion
        title="Our Installation Process"
        subtitle="Click on each step to learn more about our professional paint protection film installation."
        process={process}
        bg="bg-gray-50"
      />

      <ServiceCTA
        title="Protect Your Investment"
        subtitle="Preserve your vehicle's value with invisible paint protection film. Book your installation today."
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
