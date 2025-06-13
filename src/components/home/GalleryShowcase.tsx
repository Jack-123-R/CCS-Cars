
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const GalleryShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const featuredWork = [
    {
      id: 1,
      title: 'BMW Paint Correction',
      service: 'Paint Correction',
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: 'Luxury SUV Interior',
      service: 'Interior Detail',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: 'Mercedes Premium Wash',
      service: 'Premium Wash',
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: 'Porsche Complete Detail',
      service: 'Ultimate Package',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: 'Classic Mustang',
      service: 'Classic Detail',
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: 'Tesla Enhancement',
      service: 'Ceramic Coating',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-red-600" />
            <span className="text-red-600 font-medium">Our Gallery</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Work 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the exceptional results we deliver for our customers through our professional detailing services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredWork.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  </div>
                </div>

                {/* Service Badge */}
                <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 shadow-lg text-white">
                  {item.service}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
