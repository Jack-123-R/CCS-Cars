
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Zap, Wrench, Eye, Car, Droplet, Smartphone, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Interior Services",
      description: "Complete interior transformation and protection services",
      services: [
        {
          icon: Sparkles,
          title: "Interior Deep Clean",
          description: "Comprehensive interior cleaning including steam cleaning, leather conditioning, and fabric protection.",
          price: "Starting at ₹7,500",
          duration: "2-3 hours",
          href: "/services/interior-deep-clean",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
          included: ["Deep vacuum all surfaces", "Steam clean fabric seats", "Leather conditioning", "Dashboard restoration"]
        },
        {
          icon: Shield,
          title: "Premium Interior Protection",
          description: "Advanced protection for leather, fabric, and trim with long-lasting coating applications.",
          price: "Starting at ₹12,500",
          duration: "2-3 hours", 
          href: "/services/premium-interior-protection",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
          included: ["Fabric protection coating", "Leather protection", "UV protection", "Stain resistance"]
        }
      ]
    },
    {
      title: "Exterior Services",
      description: "Paint correction, protection, and enhancement services",
      services: [
        {
          icon: Zap,
          title: "Premium Wash & Wax",
          description: "Hand wash, clay bar treatment, and premium wax application for brilliant shine and protection.",
          price: "Starting at ₹4,000",
          duration: "1-2 hours",
          href: "/services/premium-wash-wax", 
          image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80",
          included: ["Hand wash", "Clay bar treatment", "Premium wax", "Tire shine"]
        },
        {
          icon: Car,
          title: "Paint Correction & Ceramic Coating",
          description: "Multi-stage paint correction followed by premium ceramic coating for ultimate protection.",
          price: "Starting at ₹42,000",
          duration: "6-8 hours",
          href: "/services/paint-correction-ceramic",
          image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
          included: ["Multi-stage correction", "Swirl removal", "Ceramic coating", "2-year warranty"]
        }
      ]
    },
    {
      title: "Specialty Services", 
      description: "Specialized treatments for specific vehicle needs",
      services: [
        {
          icon: Wrench,
          title: "Engine Bay Detailing",
          description: "Complete engine bay cleaning and dressing for a showroom-fresh appearance.",
          price: "Starting at ₹6,500",
          duration: "1-2 hours",
          href: "/services/engine-bay-detailing",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
          included: ["Degreasing", "Steam cleaning", "Component protection", "Professional dressing"]
        },
        {
          icon: Eye,
          title: "Headlight Restoration",
          description: "Restore cloudy, yellowed headlights to like-new clarity and brightness.",
          price: "Starting at ₹7,500",
          duration: "1 hour",
          href: "/services/headlight-restoration",
          image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80",
          included: ["Wet sanding", "Polishing", "UV protection", "Clarity restoration"]
        },
        {
          icon: Droplet,
          title: "Paint Protection Film",
          description: "Invisible protection film for high-impact areas to prevent chips and scratches.",
          price: "Starting at ₹25,000",
          duration: "3-4 hours",
          href: "/services/paint-protection-film",
          image: "https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=400&q=80",
          included: ["Front bumper coverage", "Hood edge protection", "Mirror caps", "Door edge guards"]
        },
        {
          icon: Smartphone,
          title: "Mobile Detailing",
          description: "Professional car detailing services at your location - home, office, or anywhere convenient.",
          price: "Starting at ₹6,500",
          duration: "2-4 hours",
          href: "/services/mobile-detailing",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
          included: ["At your location", "Full equipment setup", "Professional service", "Complete convenience"]
        }
      ]
    }
  ];

  const packages = [
    {
      name: "Essential Care",
      price: "₹11,000",
      services: ["Premium Wash & Wax", "Interior Vacuum", "Tire Shine", "Window Cleaning"],
      popular: false
    },
    {
      name: "Complete Detail",
      price: "₹21,000", 
      services: ["Interior Deep Clean", "Premium Wash & Wax", "Clay Bar", "Leather Conditioning"],
      popular: true
    },
    {
      name: "Ultimate Protection",
      price: "₹58,000",
      services: ["Paint Correction", "Ceramic Coating", "Interior Protection", "Engine Bay Detail"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Complete Car Care Solutions</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              From basic washes to advanced paint correction, we offer comprehensive detailing services 
              tailored to your vehicle's specific needs and your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service) => (
                <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-full">
                        <service.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {service.included.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-lg font-bold text-red-600">{service.price}</span>
                            <p className="text-sm text-gray-500">{service.duration}</p>
                          </div>
                        </div>
                        <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
                          <Link to={service.href}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Package Deals */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Package Deals & Bundles</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Save money with our carefully crafted service packages designed to provide 
              comprehensive care at great value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`relative ${pkg.popular ? 'ring-4 ring-orange-500' : ''} bg-white text-gray-900`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-red-600 mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.services.map((service, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-red-600 hover:bg-red-700'}`}>
                    <Link to="/contact">Book This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our experts are here to help! Contact us for a free consultation and personalized 
            recommendations based on your vehicle's condition and your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-600">
              <a href="tel:555-123-7446">Call (555) 123-SHINE</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
