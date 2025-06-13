
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Star, Droplet, Sun } from 'lucide-react';

const PremiumInteriorProtection = () => {
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
    "Detailed care instructions and warranty information"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Stain Resistance",
      description: "Advanced protection against spills, food, drinks, and everyday stains that can permanently damage interior surfaces."
    },
    {
      icon: Sun,
      title: "UV Protection", 
      description: "Prevents fading, cracking, and deterioration caused by harmful UV rays, keeping interiors looking new longer."
    },
    {
      icon: Droplet,
      title: "Easy Maintenance",
      description: "Protected surfaces clean easier and require less frequent deep cleaning, saving time and money long-term."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Service Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">Premium Interior Protection</h1>
              <p className="text-xl text-blue-100">
                Advanced protection for all interior surfaces. Professional-grade coatings and treatments 
                that guard against stains, UV damage, and everyday wear for years of pristine interiors.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at $149</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">2-3 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Long-term Protection</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" 
                alt="Premium interior protection service"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Long-Term Interior Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invest in your vehicle's interior with professional protection that pays for itself over time.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Protection Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every surface in your vehicle's interior receives professional protection treatment.
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

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Investment Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait for damage to occur. Book your Premium Interior Protection service now 
            and enjoy years of worry-free driving.
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

export default PremiumInteriorProtection;
