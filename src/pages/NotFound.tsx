
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Car, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-2xl mx-auto">
        {/* Animated Car Icon */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-red-600 rounded-full shadow-2xl animate-bounce">
            <Car className="w-16 h-16 text-white animate-pulse" />
          </div>
          {/* Road Animation */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent w-8 animate-pulse"></div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-wider">
            4<span className="text-red-500 animate-pulse">0</span>4
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Oops! Looks like this page took a wrong turn
          </h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
            Don't worry, even the best cars need directions sometimes. 
            Let's get you back on the right road!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link to="/services" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              View Services
            </Link>
          </Button>
        </div>

        {/* Additional Help Text */}
        <div className="mt-12 text-gray-400 text-sm">
          <p>Need help? Contact us at <a href="tel:7893821502" className="text-red-400 hover:text-red-300 underline">7893821502</a></p>
        </div>
      </div>

      {/* Floating Car Animation */}
      <div className="absolute bottom-10 left-10 opacity-20 animate-float hidden md:block">
        <Car className="w-12 h-12 text-white" />
      </div>
      <div className="absolute top-20 right-10 opacity-20 animate-float delay-1000 hidden md:block">
        <Car className="w-8 h-8 text-white transform rotate-45" />
      </div>
    </div>
  );
};

export default NotFound;
