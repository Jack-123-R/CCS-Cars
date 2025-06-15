
import { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroImageSection from './HeroImageSection';
import HeroScrollIndicator from './HeroScrollIndicator';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroContent isLoaded={isLoaded} scrollToSection={scrollToSection} />
          <HeroImageSection isLoaded={isLoaded} />
        </div>
      </div>

      <HeroScrollIndicator scrollToSection={scrollToSection} />
    </section>
  );
};

export default Hero;
