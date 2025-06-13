
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Shield, Award, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            {/* Rating Badge */}
            <div className="flex items-center space-x-2 group">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
                <span className="text-yellow-400 font-medium ml-2">4.9/5 • 500+ Reviews</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  Transform Your Car
                </span>
                <span className="block opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  Into A
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                  Showroom Masterpiece
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className={`text-xl text-blue-100 leading-relaxed max-w-2xl transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Professional auto detailing services that bring out the best in every vehicle. 
              From interior deep cleans to paint correction, we make cars shine like new.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Book Your Service</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
              >
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>View Services</span>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className={`flex items-center space-x-8 pt-4 transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center space-x-2 group">
                <Shield className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Award className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">20+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl">
                {heroImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt="Professional car detailing"
                    className={`w-full h-80 object-cover transition-all duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 absolute inset-0'
                    }`}
                  />
                ))}
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 group">
                <p className="font-bold text-2xl group-hover:text-3xl transition-all duration-300">50,000+</p>
                <p className="text-sm opacity-90">Cars Detailed</p>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300 group">
                <p className="font-bold text-lg group-hover:text-xl transition-all duration-300">4.9★</p>
                <p className="text-xs opacity-90">Rating</p>
              </div>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('services')}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white transition-colors duration-300"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
