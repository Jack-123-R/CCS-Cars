
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, Shield, ArrowRight, Star, Award } from 'lucide-react';

const PaintCorrectionCeramic = () => {
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

  const process = [
    {
      step: 1,
      title: "Paint Assessment & Measurement",
      description: "Thorough inspection using paint depth gauges to determine correction needs and establish safe polishing limits."
    },
    {
      step: 2,
      title: "Washing & Decontamination",
      description: "Complete wash followed by clay bar treatment and chemical decontamination to remove embedded contaminants."
    },
    {
      step: 3,
      title: "Multi-Stage Paint Correction",
      description: "Systematic removal of defects using professional polishing compounds and machines, progressing from cutting to finishing."
    },
    {
      step: 4,
      title: "Surface Preparation",
      description: "Final cleaning and preparation of paint surface to ensure optimal ceramic coating adhesion."
    },
    {
      step: 5,
      title: "Ceramic Coating Application",
      description: "Professional application of premium ceramic coating in controlled environment with proper curing procedures."
    },
    {
      step: 6,
      title: "Final Inspection & Documentation",
      description: "Quality assurance check with before/after photos and delivery of warranty documentation and care instructions."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Ultimate Protection",
      description: "Ceramic coating provides superior protection against UV rays, chemicals, and environmental damage."
    },
    {
      icon: Award,
      title: "Enhanced Appearance", 
      description: "Dramatically improved gloss, depth, and clarity that makes paint look better than new."
    },
    {
      icon: Clock,
      title: "Long-Lasting Results",
      description: "2+ years of protection with proper maintenance, far exceeding traditional wax or sealants."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Service Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">Paint Correction & Ceramic Coating</h1>
              <p className="text-xl text-blue-100">
                The ultimate paint enhancement and protection service. Multi-stage correction removes 
                years of damage, followed by premium ceramic coating for long-lasting protection and incredible gloss.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Starting at $499</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">6-8 hours (2-day process)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">2-Year Warranty</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Link to="/contact">Book This Service</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" 
                alt="Paint correction and ceramic coating"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">2-Year</p>
                <p className="text-sm">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Paint Correction & Ceramic Coating?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This premium service combination provides the ultimate in paint enhancement and protection.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Service Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures every aspect of paint correction and protection is covered.
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
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every step is performed by certified professionals using the latest equipment and techniques.
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

      {/* Products & Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Products & Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only the finest professional-grade products and equipment for superior results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Gyeon Ceramic Coatings</h3>
                <p className="text-sm text-gray-600">Premium Korean ceramic coating technology with proven durability</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Rupes Polishing Systems</h3>
                <p className="text-sm text-gray-600">Professional Italian polishing machines for precise correction</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Paint Depth Gauges</h3>
                <p className="text-sm text-gray-600">Precise measurement tools to ensure safe correction limits</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Climate-Controlled Bay</h3>
                <p className="text-sm text-gray-600">Optimal environment for ceramic coating application and curing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Ultimate Paint Enhancement?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your vehicle's paint with our professional correction and ceramic coating service. 
            Book your consultation today and see the difference quality makes.
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

export default PaintCorrectionCeramic;
