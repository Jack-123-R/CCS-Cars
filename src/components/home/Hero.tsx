
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Shield, Award, ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden flex items-center">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
        
        {/* Modern Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-3xl blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-br from-red-400/30 to-orange-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-white/10 to-gray-400/10 rounded-2xl blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            {/* Modern Rating Badge */}
            <div className="flex items-center space-x-2 group">
              <div className="glass-effect rounded-full px-6 py-3 border border-white/20 hover:border-red-400/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-red-400 text-red-400 group-hover:scale-110 transition-transform duration-300" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.9/5</span>
                  <div className="w-px h-4 bg-white/30"></div>
                  <span className="text-white/80 text-sm">500+ Reviews</span>
                </div>
              </div>
            </div>
            
            {/* Modern Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  <span className="text-white">Premium</span>
                </span>
                <span className="block opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <span className="gradient-text-red">Auto Detailing</span>
                </span>
                <span className="block text-white/80 text-2xl lg:text-3xl font-normal mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                  Redefined for Excellence
                </span>
              </h1>
            </div>
            
            {/* Modern Description */}
            <p className={`text-xl text-gray-300 leading-relaxed max-w-xl transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Experience the future of automotive care with our precision detailing services. 
              Where cutting-edge techniques meet uncompromising quality.
            </p>
            
            {/* Modern CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-6 text-lg font-bold transform hover:scale-105 transition-all duration-300 group rounded-xl shadow-2xl hover:shadow-red-500/25"
              >
                <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Premium Service</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm rounded-xl"
              >
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>Explore Services</span>
              </Button>
            </div>
            
            {/* Modern Trust Indicators */}
            <div className={`grid grid-cols-2 gap-6 pt-8 transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="glass-effect rounded-2xl p-4 group hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Fully Insured</p>
                    <p className="text-sm text-gray-400">Protected Service</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect rounded-2xl p-4 group hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">20+ Years</p>
                    <p className="text-sm text-gray-400">Expert Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern Hero Image Section */}
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
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('services')}
          className="group flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-red-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse group-hover:bg-red-400"></div>
          </div>
          <span className="text-xs text-white/60 font-medium">Scroll</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
