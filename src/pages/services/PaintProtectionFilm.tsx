
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Car, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const PaintProtectionFilm = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
              <h1 className="text-5xl font-bold leading-tight">Paint Protection Film</h1>
              <p className="text-xl text-red-100">
                Invisible protection for high-impact areas. Advanced film technology that prevents 
                chips, scratches, and stains while maintaining your vehicle's original appearance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at $299</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">3-4 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Ultimate Protection</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=600&q=80" 
                alt="Paint protection film installation"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Invisible Paint Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced protection film that's virtually invisible while providing maximum defense.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on each step to learn more about our professional paint protection film installation.
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
          <h2 className="text-4xl font-bold mb-6">Protect Your Investment</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Preserve your vehicle's value with invisible paint protection film. 
            Book your installation today.
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

export default PaintProtectionFilm;
