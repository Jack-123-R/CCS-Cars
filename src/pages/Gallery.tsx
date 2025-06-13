
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Filter } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'interior', label: 'Interior Transformations' },
    { id: 'exterior', label: 'Exterior Detailing' },
    { id: 'paint-correction', label: 'Paint Correction' },
    { id: 'luxury', label: 'Luxury Vehicles' },
    { id: 'classic', label: 'Classic Cars' },
    { id: 'before-after', label: 'Before & After' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'paint-correction',
      title: 'BMW Paint Correction & Ceramic Coating',
      service: 'Paint Correction & Ceramic Coating',
      description: 'Complete paint correction removing years of swirl marks, followed by premium ceramic coating application.',
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "The owner wanted to restore the original luster to their 2018 BMW after years of automated car washes had left the paint covered in swirl marks."
    },
    {
      id: 2,
      category: 'interior',
      title: 'Luxury SUV Interior Restoration',
      service: 'Interior Deep Clean',
      description: 'Complete interior restoration including leather conditioning and fabric protection.',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Family vehicle with kids and pets needed a complete refresh. We removed all stains and restored the interior to like-new condition."
    },
    {
      id: 3,
      category: 'exterior',
      title: 'Mercedes Premium Wash & Wax',
      service: 'Premium Wash & Wax',
      description: 'Hand wash, clay bar treatment, and premium carnauba wax application.',
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Monthly maintenance detail for a Mercedes C-Class to maintain its showroom appearance."
    },
    {
      id: 4,
      category: 'luxury',
      title: 'Porsche Complete Detail',
      service: 'Ultimate Protection Package',
      description: 'Full paint correction, ceramic coating, and interior protection for this stunning Porsche.',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "New Porsche owner wanted the ultimate protection package to keep their investment in pristine condition."
    },
    {
      id: 5,
      category: 'before-after',
      title: 'Headlight Restoration Before',
      service: 'Headlight Restoration',
      description: 'Severely clouded headlights affecting both appearance and safety.',
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80",
      isBefore: true,
      customerStory: "Customer was concerned about reduced visibility at night due to severely clouded headlights."
    },
    {
      id: 6,
      category: 'before-after',
      title: 'Headlight Restoration After',
      service: 'Headlight Restoration',
      description: 'Crystal clear headlights restored to like-new condition with UV protection.',
      image: "https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Dramatic improvement in both appearance and light output after our restoration process."
    },
    {
      id: 7,
      category: 'classic',
      title: 'Classic Mustang Restoration Detail',
      service: 'Paint Correction & Protection',
      description: 'Careful restoration of original paint on this classic Mustang.',
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Owner wanted to preserve the original paint while bringing back its former glory for car shows."
    },
    {
      id: 8,
      category: 'exterior',
      title: 'Truck Complete Exterior Detail',
      service: 'Premium Wash & Wax',
      description: 'Heavy-duty cleaning and protection for this work truck.',
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Work truck needed deep cleaning to remove construction debris and road grime."
    },
    {
      id: 9,
      category: 'luxury',
      title: 'Audi Engine Bay Detail',
      service: 'Engine Bay Detailing',
      description: 'Thorough engine bay cleaning and dressing for this Audi S4.',
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Performance car enthusiast wanted the engine bay to match the exterior's level of cleanliness."
    },
    {
      id: 10,
      category: 'interior',
      title: 'Van Interior Deep Clean',
      service: 'Interior Deep Clean',
      description: 'Complete interior transformation of family van with pet odor elimination.',
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Family van with persistent pet odors and stains required our most comprehensive interior treatment."
    },
    {
      id: 11,
      category: 'paint-correction',
      title: 'Tesla Paint Enhancement',
      service: 'Paint Correction & Ceramic Coating',
      description: 'Single-stage paint correction and ceramic coating on Tesla Model S.',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Tesla owner wanted to enhance the already excellent paint with ceramic coating for long-term protection."
    },
    {
      id: 12,
      category: 'classic',
      title: 'Vintage Corvette Show Prep',
      service: 'Complete Show Detail',
      description: 'Concours-level detailing for vintage Corvette heading to car shows.',
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      isBefore: false,
      customerStory: "Classic car owner needed show-quality detailing for upcoming vintage car competitions."
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of automotive transformations. From everyday vehicles to exotic cars, 
              see the exceptional results we deliver for every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id 
                    ? 'bg-blue-900 text-white' 
                    : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  {item.isBefore && (
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                      Before
                    </Badge>
                  )}
                  {!item.isBefore && item.category === 'before-after' && (
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                      After
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {item.service}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  {/* Customer Story Preview */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 italic">"{item.customerStory}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No items found for the selected filter.</p>
              <Button 
                onClick={() => setActiveFilter('all')}
                className="mt-4 bg-blue-900 hover:bg-blue-800"
              >
                Show All Work
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">50,000+</p>
              <p className="text-gray-600">Vehicles Detailed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">20+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">500+</p>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See Your Car in Our Gallery?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've experienced the CCS Car Shine Hub difference. 
            Your vehicle's transformation starts with a simple booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <a href="/contact">Book Your Service</a>
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

export default Gallery;
