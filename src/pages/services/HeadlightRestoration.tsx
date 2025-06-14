import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const HeadlightRestoration = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
      details: "Our technicians use specialized lighting to identify all problem areas and determine the best restoration approach for your specific headlights."
    },
    {
      step: 2,
      title: "Initial Cleaning and Masking",
      description: "Complete cleaning of the headlight surface and careful masking of surrounding areas to protect your vehicle's paint and trim.",
      details: "We use automotive-grade masking tape and protective film to ensure no damage occurs to adjacent surfaces during the restoration process."
    },
    {
      step: 3,
      title: "Progressive Wet Sanding",
      description: "Multi-stage wet sanding process starting with coarser grits to remove heavy oxidation, progressing to finer grits for smooth finish.",
      details: "We typically start with 400-grit sandpaper for heavy oxidation and progress through 800, 1000, and 1500-grit for optimal results."
    },
    {
      step: 4,
      title: "Polishing and Clarity Restoration",
      description: "Professional polishing using specialized compounds to restore crystal-clear transparency and remove all sanding marks.",
      details: "Multiple polishing stages with different compound grits ensure complete clarity restoration and preparation for protective coating."
    },
    {
      step: 5,
      title: "UV Protection Application",
      description: "Application of professional-grade UV protective coating to prevent future yellowing and maintain long-lasting clarity.",
      details: "Our UV coating provides up to 2 years of protection against oxidation and yellowing, significantly extending the life of your restoration."
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
              <h1 className="text-5xl font-bold leading-tight">Headlight Restoration</h1>
              <p className="text-xl text-red-100">
                Restore cloudy, yellowed headlights to crystal clear condition. Improve both 
                appearance and safety with our professional restoration process.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at ₹7,500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">1 hour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span className="font-semibold">Improved Visibility</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              {!heroImageLoaded && (
                <div className="absolute inset-0 bg-red-800 animate-pulse rounded-lg" />
              )}
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80" 
                alt="Headlight restoration service"
                className={`rounded-lg shadow-2xl transition-opacity duration-300 ${
                  heroImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                onLoad={() => setHeroImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Restoration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration that addresses both appearance and functionality.
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
              Click on each step to learn more about our professional restoration process.
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
          <h2 className="text-4xl font-bold mb-6">See Clearly Again</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don't let cloudy headlights compromise your safety. Book your restoration today.
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

export default HeadlightRestoration;
