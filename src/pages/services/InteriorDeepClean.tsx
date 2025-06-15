import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, IndianRupee, Shield, ArrowRight, Star } from 'lucide-react';
import { ServiceProcessCarousel, ProcessStep } from '@/components/services/ServiceProcessCarousel';

const InteriorDeepClean = () => {
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

  const processSteps: ProcessStep[] = [
    {
      step: 1,
      title: "Assessment and Preparation",
      description: "Thorough inspection of interior condition and removal of all personal items for complete access to every surface and component.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 2,
      title: "Deep Vacuum Process",
      description: "Complete vacuuming using professional equipment including specialized crevice tools for hard-to-reach areas and upholstery attachments.",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 3,
      title: "Steam Cleaning",
      description: "High-temperature steam cleaning of fabric surfaces to eliminate bacteria, allergens, and deep-set stains for a fresh interior.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 4,
      title: "Leather Treatment",
      description: "Application of premium conditioners and protectants to restore, nourish, and protect leather surfaces from cracking and fading.",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Comprehensive quality check and detailed customer walkthrough to ensure complete satisfaction with every aspect of the service.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
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
                  <IndianRupee className="h-5 w-5" />
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

      {/* Process Section using ServiceProcessCarousel */}
      <ServiceProcessCarousel
        title="Our Deep Cleaning Process"
        subtitle="Experience our comprehensive 5-step process designed to transform your vehicle's interior"
        steps={processSteps}
        bg="bg-gradient-to-br from-gray-50 to-gray-100"
      />

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
