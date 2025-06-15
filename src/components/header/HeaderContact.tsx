
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderContactProps {
  onBookNowClick: () => void;
}

const HeaderContact = ({ onBookNowClick }: HeaderContactProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <a 
        href="tel:7893821502" 
        className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2 py-1"
        aria-label="Call us at 7893821502"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="font-semibold">7893821502</span>
      </a>
      <Button 
        onClick={onBookNowClick}
        className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        aria-label="Book appointment now"
      >
        Book Now
      </Button>
    </div>
  );
};

export default HeaderContact;
