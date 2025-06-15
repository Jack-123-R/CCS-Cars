
import { Link } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavigationItem {
  name: string;
  sectionId?: string;
  dropdown?: Array<{
    name: string;
    href: string;
  }>;
}

interface MobileNavigationProps {
  navigation: NavigationItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileNavigation = ({ navigation, isOpen, setIsOpen, scrollToSection }: MobileNavigationProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]" id="mobile-menu" role="dialog" aria-label="Mobile navigation menu">
        <nav className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-left py-2 text-lg text-gray-700 hover:text-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2"
                  >
                    {item.name}
                  </button>
                  <div className="ml-4 mt-2 space-y-2" role="group" aria-label="Service submenu">
                    {item.dropdown.slice(1).map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-gray-600 hover:text-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => scrollToSection(item.sectionId!)}
                  className="text-left py-2 text-lg text-gray-700 hover:text-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
          <div className="pt-4 border-t">
            <a 
              href="tel:7893821502" 
              className="flex items-center space-x-2 text-red-600 py-2 hover:text-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2"
              aria-label="Call us at 7893821502"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="font-semibold">7893821502</span>
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Book appointment now"
            >
              Book Now
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
