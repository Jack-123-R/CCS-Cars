
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, Clock, ArrowRight } from "lucide-react";
import { ServiceHero, ServiceBenefits, ServiceIncludedList, ServiceProcessCarousel, ServiceCTA } from "@/components/services/exports";
import { PaintCorrectionCeramicProducts } from "./PaintCorrectionCeramicProducts";

const included = [
  "Comprehensive paint thickness measurement and assessment",
  "Multi-stage paint correction process (1-3 stages as needed)",
  "Complete swirl and scratch removal",
  "Professional polishing and refinement",
  "Premium ceramic coating application (Gyeon certified)",
  "UV protection and enhanced gloss",
  "2-year ceramic coating warranty",
  "Paint depth gauge measurements before/after",
  "Detailed documentation and care instructions",
  "Complimentary maintenance wash within 30 days"
];

const benefits = [
  {
    icon: Shield,
    title: "Ultimate Protection",
    description:
      "Ceramic coating provides superior protection against UV rays, chemicals, and environmental damage.",
  },
  {
    icon: Award,
    title: "Enhanced Appearance",
    description:
      "Dramatically improved gloss, depth, and clarity that makes paint look better than new.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Results",
    description:
      "2+ years of protection with proper maintenance, far exceeding traditional wax or sealants.",
  },
];

const process = [
  {
    step: 1,
    title: "Paint Assessment & Measurement",
    description: "Thorough inspection using paint depth gauges to determine correction needs and establish safe polishing limits.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 2,
    title: "Washing & Decontamination",
    description: "Complete wash followed by clay bar treatment and chemical decontamination to remove embedded contaminants.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 3,
    title: "Multi-Stage Paint Correction",
    description: "Systematic removal of defects using professional polishing compounds and machines, progressing from cutting to finishing.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 4,
    title: "Surface Preparation",
    description: "Final cleaning and preparation of paint surface to ensure optimal ceramic coating adhesion.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 5,
    title: "Ceramic Coating Application",
    description: "Professional application of premium ceramic coating in controlled environment with proper curing procedures.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: 6,
    title: "Final Inspection & Documentation",
    description: "Quality assurance check with before/after photos and delivery of warranty documentation and care instructions.",
    image: "https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=800&q=80"
  }
];

export default function PaintCorrectionCeramic() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Paint Correction & Ceramic Coating"
        subtitle="The ultimate paint enhancement and protection service. Multi-stage correction removes years of damage, followed by premium ceramic coating for long-lasting protection and incredible gloss."
        price="Starting at ₹42,000"
        time="6-8 hours (2-day process)"
        guarantee="2-Year Warranty"
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
        imgAlt="Paint correction and ceramic coating"
        cta={
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Book This Service</Link>
          </Button>
        }
        iconType="rupee"
      />

      <ServiceBenefits
        title="Why Choose Paint Correction & Ceramic Coating?"
        subtitle="This premium service combination provides the ultimate in paint enhancement and protection."
        benefits={benefits}
      />

      <ServiceIncludedList
        title="Complete Service Package"
        subtitle="Our comprehensive approach ensures every aspect of paint correction and protection is covered."
        included={included}
        bg="bg-gray-50"
      />

      {/* "Best For" section (unique to this service) */}
      <section className="bg-red-50 rounded-lg p-8 max-w-7xl mx-auto my-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Best For</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">New Cars</h4>
            <p className="text-gray-600 text-sm">Protect your investment from day one with ceramic coating</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Show Cars</h4>
            <p className="text-gray-600 text-sm">Achieve concours-level finish for competitions and shows</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Long-term Protection</h4>
            <p className="text-gray-600 text-sm">Maximum protection for vehicles you plan to keep long-term</p>
          </div>
        </div>
      </section>

      <ServiceProcessCarousel
        title="Our Professional Process"
        subtitle="Every step is performed by certified professionals using the latest equipment and techniques."
        steps={process}
        bg="bg-gradient-to-br from-gray-50 to-gray-100"
      />

      <PaintCorrectionCeramicProducts />

      <ServiceCTA
        title="Ready for the Ultimate Paint Enhancement?"
        subtitle="Transform your vehicle's paint with our professional correction and ceramic coating service. Book your consultation today and see the difference quality makes."
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
