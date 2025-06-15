
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const GalleryShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  
  const featuredWork = [
    {
      id: 1,
      title: 'BMW Paint Correction',
      service: 'Paint Correction',
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: 'Luxury SUV Interior',
      service: 'Interior Detail',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: 'Mercedes Premium Wash',
      service: 'Premium Wash',
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: 'Porsche Complete Detail',
      service: 'Ultimate Package',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: 'Classic Mustang',
      service: 'Classic Detail',
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      title: 'Tesla Enhancement',
      service: 'Ceramic Coating',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    }
  ];

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-50 px-3 py-1 rounded-full mb-4">
            <Star className="h-4 w-4 text-red-600" />
            <span className="text-red-600 font-medium text-sm">Our Gallery</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the exceptional results we deliver through our professional detailing services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredWork.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    loadedImages.has(item.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  } group-hover:scale-105`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(item.id)}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base font-bold">{item.title}</h3>
                  </div>
                </div>

                {/* Service Badge */}
                <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-700 text-white text-xs">
                  {item.service}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '50,000+', label: 'Vehicles Detailed' },
            { number: '20+', label: 'Years Experience' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '500+', label: '5-Star Reviews' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 mb-1">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
