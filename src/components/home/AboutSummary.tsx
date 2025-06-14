
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const AboutSummary = () => {
  const [imagesLoaded, setImagesLoaded] = useState({ img1: false, img2: false });

  const handleImageLoad = (imageKey: 'img1' | 'img2') => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Two Decades of Making Cars Shine
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2003 by Carlos Rodriguez, CCS Car Shine Hub started as a one-man operation 
              in a small garage with a big dream: to provide the highest quality automotive detailing 
              services in Metro City. What began with passion and dedication has grown into the region's 
              premier auto detailing facility.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, our state-of-the-art facility and expert team of certified professionals have 
              transformed over 50,000 vehicles. We combine traditional craftsmanship with cutting-edge 
              technology to deliver results that exceed expectations every time.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
              <Link to="/about-us" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                {!imagesLoaded.img1 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
                )}
                <img 
                  src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80" 
                  alt="Car detailing in progress"
                  className={`rounded-lg shadow-lg transition-opacity duration-300 ${
                    imagesLoaded.img1 ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad('img1')}
                />
              </div>
              <div className="relative mt-8">
                {!imagesLoaded.img2 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
                )}
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80" 
                  alt="Professional car detailing"
                  className={`rounded-lg shadow-lg transition-opacity duration-300 ${
                    imagesLoaded.img2 ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad('img2')}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
              <p className="text-2xl font-bold text-red-600">20+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
