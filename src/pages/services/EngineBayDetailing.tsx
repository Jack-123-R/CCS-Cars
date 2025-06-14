import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Wrench, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const EngineBayDetailing = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
      details: "We identify all sensitive components and properly protect them before beginning the cleaning process. This includes covering air intakes, electrical connections, and sensitive sensors."
    },
    {
      step: 2,
      title: "Professional Degreasing",
      description: "Application of industrial-grade degreasers to break down accumulated oil, grease, and grime.",
      details: "We use biodegradable degreasers that are safe for your engine while being tough on built-up contaminants. Different products are used for different materials and contamination levels."
    },
    {
      step: 3,
      title: "Steam Cleaning Process",
      description: "High-temperature steam cleaning to safely remove all loosened contaminants without water damage.",
      details: "Our steam cleaning method provides thorough cleaning while minimizing water exposure to electrical components. The high temperature kills bacteria and removes stubborn residues."
    },
    {
      step: 4,
      title: "Component Restoration",
      description: "Detailed cleaning and conditioning of belts, hoses, and plastic components to restore their appearance.",
      details: "We use specialized products to restore the original color and flexibility of rubber components while protecting them from future deterioration."
    },
    {
      step: 5,
      title: "Professional Finishing",
      description: "Application of appropriate dressings and protectants to give your engine bay a showroom appearance.",
      details: "Final dressing application provides UV protection and enhances the appearance of all surfaces while maintaining the appropriate finish for each component type."
    }
  ];

  const toggleStep = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="min-h-screen">
      {/* Service Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">Engine Bay Detailing</h1>
              <p className="text-xl text-red-100">
                Professional engine bay cleaning and detailing that makes your engine compartment 
                look showroom fresh while maintaining all safety standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at ₹6,500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">1-2 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Safe Methods</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                alt="Engine bay detailing service"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Engine Bay Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning and detailing of your engine compartment using safe, proven methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Detailed Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on each step to learn more about our professional engine bay detailing process.
            </p>
          </div>
          
          <div className="space-y-4">
            {process.map((item) => (
              <Card key={item.step} className="bg-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleStep(item.step)}
                    className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {item.step}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {activeStep === item.step ? (
                          <ChevronUp className="h-6 w-6 text-red-600" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  {activeStep === item.step && (
                    <div className="px-8 pb-8 pt-0">
                      <div className="bg-red-50 rounded-lg p-6 ml-18">
                        <p className="text-gray-700 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Complete Your Vehicle's Transformation</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Add engine bay detailing to your service for a truly comprehensive vehicle detail.
          </p>
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
        </div>
      </section>
    </div>
  );
};

export default EngineBayDetailing;
