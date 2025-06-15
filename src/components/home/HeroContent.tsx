
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Shield, Award, ArrowRight, Play, Sparkles } from 'lucide-react';

interface HeroContentProps {
  isLoaded: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroContent = ({ isLoaded, scrollToSection }: HeroContentProps) => {
  return (
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
  );
};

export default HeroContent;
