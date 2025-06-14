
import { Button } from '@/components/ui/button';
import { Instagram, Play } from 'lucide-react';
import { useCallback, memo } from 'react';

// Card for a single Instagram Reel link
const InstagramReel = memo((
  { reel, onClick }: { 
    reel: { 
      id: number; 
      url: string;
    }, 
    onClick: (url: string) => void 
  }
) => (
  <div
    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[9/16] bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center"
    onClick={() => onClick(reel.url)}
    tabIndex={0}
    role="button"
    aria-label="Open Instagram Reel"
  >
    {/* Center: Play Button & Instagram icon */}
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-white/70 backdrop-blur-sm p-4 mb-3 group-hover:scale-110 transition-transform">
        <Play className="h-10 w-10 text-pink-600 drop-shadow-md" />
      </div>
      <Instagram className="h-8 w-8 text-white mb-2" />
      <span className="text-white text-xs font-semibold px-2 py-1 bg-black/40 rounded">
        Watch Reel
      </span>
    </div>
    {/* Hover effect */}
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
));
InstagramReel.displayName = 'InstagramReel';

const INSTAGRAM_REELS = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/C7dmUp4P7Gt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/C4fZLSBPlYD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/C4Pu_Z1vDL6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DE7EicjzgeE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DEAMSdPss6T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DCoXp7sz_xc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
];

const InstagramSection = () => {
  const handleReelClick = useCallback((reelUrl: string) => {
    window.open(reelUrl, '_blank', 'noopener,noreferrer');
  }, []);

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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {INSTAGRAM_REELS.map((reel) => (
            <InstagramReel
              key={reel.id}
              reel={reel}
              onClick={handleReelClick}
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
                <Play className="h-4 w-4" />
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
