
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogo from './header/HeaderLogo';
import DesktopNavigation from './header/DesktopNavigation';
import HeaderContact from './header/HeaderContact';
import MobileNavigation from './header/MobileNavigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navigation = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About Us', sectionId: 'about' },
    {
      name: 'Our Services',
      sectionId: 'services',
      dropdown: [
        { name: 'View All Services', href: '/services' },
        { name: 'Interior Deep Clean', href: '/services/interior-deep-clean' },
        { name: 'Premium Interior Protection', href: '/services/premium-interior-protection' },
        { name: 'Paint Correction & Ceramic Coating', href: '/services/paint-correction-ceramic' },
        { name: 'Engine Bay Detailing', href: '/services/engine-bay-detailing' },
        { name: 'Headlight Restoration', href: '/services/headlight-restoration' },
        { name: 'Paint Protection Film', href: '/services/paint-protection-film' },
        { name: 'Car Lights Service', href: '/services/mobile-detailing' },
      ]
    },
    { name: 'Gallery', sectionId: 'gallery' },
    { name: 'Contact Us', sectionId: 'contact' },
  ];

  const isActive = (sectionId: string) => {
    if (location.pathname !== '/') return false;
    return false;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <HeaderLogo onLogoClick={() => scrollToSection('home')} />
          
          <DesktopNavigation 
            navigation={navigation}
            scrollToSection={scrollToSection}
            isActive={isActive}
          />

          <HeaderContact onBookNowClick={() => scrollToSection('contact')} />

          <MobileNavigation
            navigation={navigation}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
