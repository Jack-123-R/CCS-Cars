import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const InteriorDeepClean = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const included = [
    "Complete vacuum of all surfaces including seats, carpets, and crevices",
    "Steam cleaning of fabric seats and upholstery",
    "Professional leather conditioning and protection",
    "Dashboard and trim restoration with UV protection",
    "Deep carpet shampooing and stain removal",
    "Door jamb cleaning and detailing",
    "Air vent cleaning and sanitization",
    "Cup holder and console deep cleaning",
    "Floor mat washing and treatment",
    "Interior glass cleaning for crystal clarity"
  ];

  const process = [
    {
      step: 1,
      title: "Assessment and Preparation",
      description: "Thorough inspection of interior condition and removal of all personal items for complete access.",
      details: "We evaluate the condition of all interior surfaces, identify problem areas, and remove all personal belongings to ensure complete access to every surface that needs attention."
    },
    {
      step: 2,
      title: "Deep Vacuum Process",
      description: "Complete vacuuming using professional equipment including crevice tools for hard-to-reach areas.",
      details: "Using commercial-grade vacuum equipment with specialized attachments, we remove all loose debris from seats, carpets, floor mats, and hard-to-reach crevices between and under seats."
    },
    {
      step: 3,
      title: "Steam Cleaning",
      description: "High-temperature steam cleaning of fabric surfaces to eliminate bacteria and deep-set stains.",
      details: "Professional steam cleaning equipment penetrates deep into fabric fibers, killing bacteria and allergens while lifting embedded dirt and stains that regular cleaning cannot reach."
    },
    {
      step: 4,
      title: "Leather Treatment",
      description: "Application of premium conditioners to restore and protect leather surfaces.",
      details: "Specialized leather cleaning products remove dirt and oils, followed by conditioning treatments that restore moisture and flexibility while providing UV protection against cracking and fading."
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Comprehensive quality check and customer walkthrough to ensure complete satisfaction.",
      details: "Final inspection includes checking all cleaned surfaces, ensuring no areas were missed, and conducting a customer walkthrough to guarantee your complete satisfaction with our work."
    }
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
      description: "Fabric seat restoration"
    },
    {
      before: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80",
      after: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80",
      description: "Dashboard and trim refresh"
    }
  ];

  const relatedServices = [
    {
      title: "Premium Interior Protection",
      price: "Starting at ₹12,500",
      href: "/services/premium-interior-protection"
    },
    {
      title: "Premium Wash & Wax",
      price: "Starting at ₹4,000", 
      href: "/services/premium-wash-wax"
    },
    {
      title: "Mobile Detailing",
      price: "Starting at ₹6,500",
      href: "/services/mobile-detailing"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Incredible transformation! My car's interior looks and smells brand new. The team removed stains I thought were permanent.",
      service: "Interior Deep Clean"
    },
    {
      name: "Michael Chen", 
      rating: 5,
      text: "Professional service from start to finish. They took great care with my leather seats and the results exceeded my expectations.",
      service: "Interior Deep Clean"
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
              <h1 className="text-5xl font-bold leading-tight">Interior Deep Clean</h1>
              <p className="text-xl text-red-100">
                Complete interior transformation with professional steam cleaning, leather conditioning, 
                and fabric protection. Perfect for family vehicles, pet owners, and high-mileage cars.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at ₹7,500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">2-3 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Satisfaction Guaranteed</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" 
                alt="Interior deep cleaning in progress"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Interior Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every surface cleaned, conditioned, and protected for a fresh-car feeling.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Deep Cleaning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on each step to learn more about our comprehensive interior cleaning process.
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

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic improvements our interior deep cleaning service delivers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfter.map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{item.description}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Before</p>
                      <img src={item.before} alt="Before cleaning" className="w-full h-40 object-cover rounded-lg" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2 text-center">After</p>
                      <img src={item.after} alt="After cleaning" className="w-full h-40 object-cover rounded-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from customers who've experienced our interior deep cleaning service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Car Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine interior deep cleaning with these popular services for comprehensive care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service) => (
              <Card key={service.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-xl font-bold text-red-600 mb-4">{service.price}</p>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link to={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Interior Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don't let dirt and stains diminish your driving experience. Book your interior deep cleaning 
            service and enjoy a fresh, clean cabin.
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

export default InteriorDeepClean;
