import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Star, Droplet, Sparkles } from 'lucide-react';

const PremiumWashWax = () => {
  const included = [
    "Thorough pre-rinse to remove loose dirt and debris",
    "Two-bucket hand wash method with premium shampoo",
    "Clay bar treatment to remove embedded contaminants",
    "Professional drying with microfiber towels",
    "Premium carnauba wax application by hand",
    "Tire and wheel cleaning with specialized products",
    "Tire shine application for enhanced appearance",
    "Window cleaning inside and out for crystal clarity",
    "Door jamb cleaning and detailing",
    "Final quality inspection and touch-ups"
  ];

  const process = [
    {
      step: 1,
      title: "Pre-Rinse & Assessment",
      description: "Thorough rinse to remove loose dirt and initial assessment of paint condition and specific needs."
    },
    {
      step: 2,
      title: "Two-Bucket Hand Wash",
      description: "Safe washing technique using premium shampoo to prevent scratches while thoroughly cleaning the paint."
    },
    {
      step: 3,
      title: "Clay Bar Treatment",
      description: "Removal of embedded contaminants that washing alone cannot remove, preparing surface for wax."
    },
    {
      step: 4,
      title: "Drying & Inspection",
      description: "Professional drying with microfiber towels and inspection for any areas requiring additional attention."
    },
    {
      step: 5,
      title: "Wax Application",
      description: "Hand application of premium carnauba wax for deep gloss and protection against the elements."
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Enhanced Shine",
      description: "Premium carnauba wax creates a deep, warm gloss that enhances your vehicle's appearance."
    },
    {
      icon: Shield,
      title: "Paint Protection", 
      description: "Wax barrier protects against UV rays, bird droppings, and environmental contaminants."
    },
    {
      icon: Droplet,
      title: "Water Beading",
      description: "Excellent water repelling properties make future washing easier and more effective."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Service Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">Premium Wash & Wax</h1>
              <p className="text-xl text-blue-100">
                Our signature hand wash and wax service that brings out the best in your vehicle's paint. 
                Safe washing techniques combined with premium carnauba wax for lasting protection and brilliant shine.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at ₹4,000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">1-2 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Paint Safe Methods</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=600&q=80" 
                alt="Premium wash and wax service"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Premium Wash & Wax?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional hand washing and premium wax makes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Service Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every step performed with care using professional techniques and premium products.
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
          
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Regular Maintenance</h4>
                <p className="text-gray-600 text-sm">Monthly or bi-monthly maintenance to keep your car looking its best</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Daily Drivers</h4>
                <p className="text-gray-600 text-sm">Perfect balance of thorough cleaning and protection for everyday vehicles</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Special Occasions</h4>
                <p className="text-gray-600 text-sm">Make your car shine for important events, dates, or presentations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Time-tested methods that deliver consistent, excellent results every time.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((item) => (
              <Card key={item.step} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How often should I get my car washed and waxed?</h3>
                <p className="text-gray-600">We recommend every 4-6 weeks for optimal protection and appearance, or monthly during harsh weather conditions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What type of wax do you use?</h3>
                <p className="text-gray-600">We use premium carnauba wax blends that provide excellent gloss, depth, and protection lasting 6-8 weeks under normal conditions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is clay bar treatment included in every service?</h3>
                <p className="text-gray-600">Yes, clay bar treatment is included to ensure the smoothest possible surface before wax application for maximum bonding and longevity.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for That Perfect Shine?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book your Premium Wash & Wax service today and see why thousands of customers 
            trust us with their vehicles every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Book This Service</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <a href="tel:555-123-7446">Call (555) 123-SHINE</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumWashWax;
