
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationItem {
  name: string;
  sectionId?: string;
  dropdown?: Array<{
    name: string;
    href: string;
  }>;
}

interface DesktopNavigationProps {
  navigation: NavigationItem[];
  scrollToSection: (sectionId: string) => void;
  isActive: (sectionId: string) => boolean;
}

const DesktopNavigation = ({ navigation, scrollToSection, isActive }: DesktopNavigationProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
      {navigation.map((item) => (
        item.dropdown ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-haspopup="true" aria-expanded="false">
              <span>{item.name}</span>
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border shadow-lg" role="menu">
              <DropdownMenuItem asChild>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600"
                  role="menuitem"
                >
                  View All Services
                </button>
              </DropdownMenuItem>
              {item.dropdown.slice(1).map((subItem) => (
                <DropdownMenuItem key={subItem.name} asChild>
                  <Link
                    to={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600"
                    role="menuitem"
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
                ? 'text-red-600 font-semibold'
                : 'text-gray-700 hover:text-red-600'
            } transition-all duration-300 hover:scale-105 relative group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2 py-1`}
            aria-current={isActive(item.sectionId!) ? 'page' : undefined}
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
          </button>
        )
      ))}
    </nav>
  );
};

export default DesktopNavigation;
