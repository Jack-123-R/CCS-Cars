
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 font-medium">4.9/5 Rating • 500+ Reviews</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Car Into A
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Showroom Masterpiece
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              Professional auto detailing services that bring out the best in every vehicle. 
              From interior deep cleans to paint correction, we make cars shine like new.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold">
                <Link to="/contact">Book Your Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="font-medium">20+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80" 
                alt="Professional car detailing"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-lg">
                <p className="font-bold text-lg">50,000+</p>
                <p className="text-sm">Cars Detailed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
