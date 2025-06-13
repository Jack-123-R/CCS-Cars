
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, ArrowRight, Star } from 'lucide-react';

const GalleryShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const featuredWork = [
    {
      id: 1,
      title: 'BMW Paint Correction & Ceramic Coating',
      service: 'Paint Correction',
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      rating: 5,
      description: 'Complete paint correction removing years of swirl marks'
    },
    {
      id: 2,
      title: 'Luxury SUV Interior Restoration',
      service: 'Interior Detail',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      rating: 5,
      description: 'Complete interior restoration with leather conditioning'
    },
    {
      id: 3,
      title: 'Mercedes Premium Wash & Wax',
      service: 'Premium Wash',
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=600&q=80",
      rating: 5,
      description: 'Hand wash, clay bar treatment, and premium wax'
    },
    {
      id: 4,
      title: 'Porsche Complete Detail',
      service: 'Ultimate Package',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      rating: 5,
      description: 'Full paint correction and ceramic coating'
    },
    {
      id: 5,
      title: 'Classic Mustang Restoration',
      service: 'Classic Detail',
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      rating: 5,
      description: 'Careful restoration of original paint'
    },
    {
      id: 6,
      title: 'Tesla Paint Enhancement',
      service: 'Ceramic Coating',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      rating: 5,
      description: 'Single-stage correction and ceramic coating'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Our Featured Work</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Transformations That 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every vehicle tells a story. See how we've helped thousands of customers 
            fall in love with their cars again through our exceptional detailing services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredWork.map((item, index) => (
            <Card 
              key={item.id} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      className="w-full bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Service Badge */}
                <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
                  {item.service}
                </Badge>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '50,000+', label: 'Vehicles Detailed' },
            { number: '20+', label: 'Years Experience' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '500+', label: '5-Star Reviews' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Gallery?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your vehicle's transformation story starts here. Experience the CCS difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="#contact" className="flex items-center space-x-2">
                <span>Book Your Service</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:555-123-7446">Call (555) 123-SHINE</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
