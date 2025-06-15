
import { useState, useEffect } from 'react';
import { Star, Zap } from 'lucide-react';

interface HeroImageSectionProps {
  isLoaded: boolean;
}

const HeroImageSection = ({ isLoaded }: HeroImageSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative glass-effect rounded-3xl p-6 transform hover:scale-105 transition-all duration-500">
          <div className="relative overflow-hidden rounded-2xl">
            {heroImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt="Premium car detailing"
                className={`w-full h-96 object-cover transition-all duration-1000 ${
                  index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 absolute inset-0'
                }`}
              />
            ))}
            
            {/* Modern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
        
        {/* Floating Stats Cards */}
        <div className="absolute -bottom-6 -right-6 glass-effect text-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 group border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-2xl text-white group-hover:text-3xl transition-all duration-300">50K+</p>
              <p className="text-sm text-gray-300">Cars Detailed</p>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-6 -left-6 glass-effect text-white p-4 rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300 group border border-white/20">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 fill-red-400 text-red-400" />
            <div>
              <p className="font-bold text-lg text-white group-hover:text-xl transition-all duration-300">4.9</p>
              <p className="text-xs text-gray-300">Premium Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Image Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-red-500 scale-125 shadow-lg' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageSection;
