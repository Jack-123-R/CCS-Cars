
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Car, Lightbulb } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Interior Deep Clean",
      description: "Complete interior transformation with steam cleaning, leather conditioning, and fabric protection.",
      price: "Starting at ₹7,500",
      href: "/services/interior-deep-clean",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Shield,
      title: "Paint Correction & Ceramic Coating",
      description: "Multi-stage paint correction followed by premium ceramic coating for long-lasting protection.",
      price: "Starting at ₹42,000",
      href: "/services/paint-correction-ceramic",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Car,
      title: "Premium Interior Protection",
      description: "Advanced protection for leather, fabric, and trim with long-lasting coating applications.",
      price: "Starting at ₹12,500",
      href: "/services/premium-interior-protection",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Lightbulb,
      title: "Car Lights Service",
      description: "Professional headlight restoration, LED upgrades, and complete lighting system maintenance.",
      price: "Starting at ₹7,500",
      href: "/services/mobile-detailing",
      image: "https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From interior deep cleaning to paint protection, we offer comprehensive detailing services 
            that keep your vehicle looking its absolute best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-full">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-red-600">{service.price}</span>
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
                  <Link to={service.href}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
