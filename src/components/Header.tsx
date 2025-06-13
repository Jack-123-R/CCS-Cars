
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        { name: 'Premium Wash & Wax', href: '/services/premium-wash-wax' },
        { name: 'Paint Correction & Ceramic Coating', href: '/services/paint-correction-ceramic' },
        { name: 'Engine Bay Detailing', href: '/services/engine-bay-detailing' },
        { name: 'Headlight Restoration', href: '/services/headlight-restoration' },
        { name: 'Paint Protection Film', href: '/services/paint-protection-film' },
        { name: 'Mobile Detailing', href: '/services/mobile-detailing' },
      ]
    },
    { name: 'Gallery', sectionId: 'gallery' },
    { name: 'Contact Us', sectionId: 'contact' },
  ];

  const isActive = (sectionId: string) => {
    if (location.pathname !== '/') return false;
    
    // Simple active state based on scroll position could be added here
    return false;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex-shrink-0 group cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">CCS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  CCS Car Shine Hub
                </h1>
                <p className="text-sm text-blue-600">Professional Auto Detailing</p>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border shadow-lg">
                    <DropdownMenuItem asChild>
                      <button
                        onClick={() => scrollToSection('services')}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        View All Services
                      </button>
                    </DropdownMenuItem>
                    {item.dropdown.slice(1).map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId!)}
                  className={`${
                    isActive(item.sectionId!)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-all duration-300 hover:scale-105 relative group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:555-123-7446" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(555) 123-SHINE</span>
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => scrollToSection('services')}
                          className="text-left py-2 text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                          {item.name}
                        </button>
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.slice(1).map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.sectionId!)}
                        className="text-left py-2 text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <a 
                    href="tel:555-123-7446" 
                    className="flex items-center space-x-2 text-blue-600 py-2 hover:text-blue-700 transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">(555) 123-SHINE</span>
                  </a>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-4 bg-gradient-to-r from-blue-900 to-blue-700"
                  >
                    Book Now
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
