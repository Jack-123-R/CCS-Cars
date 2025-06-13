
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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
      name: 'Our Services',
      href: '/services',
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
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CCS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CCS Car Shine Hub</h1>
                <p className="text-sm text-blue-600">Professional Auto Detailing</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border shadow-lg">
                    {item.dropdown.map((subItem) => (
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
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:555-123-7446" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(555) 123-SHINE</span>
            </a>
            <Button asChild className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${
                        isActive(item.href)
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-700'
                      } block py-2 text-lg`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-gray-600 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <a href="tel:555-123-7446" className="flex items-center space-x-2 text-blue-600 py-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">(555) 123-SHINE</span>
                  </a>
                  <Button asChild className="w-full mt-4 bg-gradient-to-r from-blue-900 to-blue-700">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Book Now</Link>
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
