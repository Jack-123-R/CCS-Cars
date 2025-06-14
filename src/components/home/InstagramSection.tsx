
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import ReelPlayer from './ReelPlayer';

const INSTAGRAM_REELS = [
  // Replace these with your REAL thumbnail and video URLs
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video, replace with real
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];

const InstagramSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Watch Our Instagram Reels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get an inside look at our detailing process, amazing transformations, and behind-the-scenes content. 
            Follow us @ccshyderabad for daily automotive inspiration and tips.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <a
              href="https://www.instagram.com/ccshyderabad?igsh=MXV3Ym90cXRkOXVzbQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow @ccshyderabad</span>
            </a>
          </Button>
        </div>
        
        {/* Reels grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {INSTAGRAM_REELS.map((reel) => (
            <ReelPlayer
              key={reel.id}
              thumbnail={reel.thumbnail}
              videoUrl={reel.videoUrl}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Want to see more transformations and behind-the-scenes content?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
              <a href="https://www.instagram.com/ccshyderabad?igsh=MXV3Ym90cXRkOXVzbQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span>Follow for More</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <a href="https://www.instagram.com/ccshyderabad?igsh=MXV3Ym90cXRkOXVzbQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <span className="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>
                <span>View All Reels</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
