
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ad86bc6e-f77f-4e28-a9cc-aa1f2d9a1d4d.png" 
                  alt="CCS Car Shine Hub Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">CCS Car Shine Hub</h3>
                <p className="text-sm text-gray-400">Professional Auto Detailing</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming vehicles with professional detailing services since 2003. 
              Quality, precision, and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/interior-deep-clean" className="text-gray-400 hover:text-white transition-colors">
                  Interior Deep Clean
                </Link>
              </li>
              <li>
                <Link to="/services/paint-correction-ceramic" className="text-gray-400 hover:text-white transition-colors">
                  Paint Correction & Ceramic
                </Link>
              </li>
              <li>
                <Link to="/services/premium-wash-wax" className="text-gray-400 hover:text-white transition-colors">
                  Premium Wash & Wax
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-detailing" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Detailing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-red-400 hover:text-red-300 transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href="tel:7893821502" className="text-gray-400 hover:text-white transition-colors">
                  7893821502
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href="tel:9866335522" className="text-gray-400 hover:text-white transition-colors">
                  9866335522
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-1" />
                <div className="text-gray-400">
                  <p>A57 Tarakarama Nagar</p>
                  <p>Film Nagar, Hyderabad</p>
                  <p>Sindh 500033</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-400" />
                <div className="text-gray-400">
                  <p className="font-medium">Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="text-gray-400 ml-8">
                <p className="font-medium">Saturday</p>
                <p>9:00 AM - 5:00 PM</p>
              </div>
              <div className="text-gray-400 ml-8">
                <p className="font-medium">Sunday</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-900 rounded-lg">
              <p className="text-sm text-red-200">Service Area: 25-mile radius from Hyderabad</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CCS Car Shine Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Warranty Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
