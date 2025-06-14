
import { Button } from '@/components/ui/button';
import { Instagram, Play, Heart, MessageCircle, Share } from 'lucide-react';

const InstagramSection = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.instagram.com/reel/example1",
      caption: "Paint correction transformation on this beautiful BMW 🚗✨ #PaintCorrection #BMW #CarDetailing",
      likes: 2453,
      comments: 89,
      isVideo: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.instagram.com/reel/example2",
      caption: "Ceramic coating application process - watch the magic happen! 💎 #CeramicCoating #CarCare",
      likes: 1892,
      comments: 67,
      isVideo: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.instagram.com/reel/example3",
      caption: "Interior detailing before and after - incredible transformation! 🔥 #InteriorDetailing #BeforeAfter",
      likes: 3201,
      comments: 124,
      isVideo: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.instagram.com/reel/example4",
      caption: "Engine bay cleaning transformation - from dirty to spotless! 🧽 #EngineBay #Detailing",
      likes: 1567,
      comments: 43,
      isVideo: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.instagram.com/reel/example5",
      caption: "Mobile detailing service in action - we come to you! 🚐 #MobileDetailing #Convenience",
      likes: 2789,
      comments: 91,
      isVideo: true
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.instagram.com/reel/example6",
      caption: "Luxury vehicle complete detail - perfection in every detail! 💯 #LuxuryCars #Premium",
      likes: 4123,
      comments: 156,
      isVideo: true
    }
  ];

  const handleReelClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Watch Our Instagram Reels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get an inside look at our detailing process, amazing transformations, and behind-the-scenes content. 
            Follow us @ccscarshine for daily automotive inspiration and tips.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <a href="https://instagram.com/ccscarshine" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>Follow @ccscarshine</span>
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[9/16] bg-black"
              onClick={() => handleReelClick(reel.videoUrl)}
            >
              <img 
                src={reel.image} 
                alt={reel.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white fill-white" />
                </div>
              </div>

              {/* Instagram reel indicators */}
              <div className="absolute top-3 right-3">
                <div className="bg-black/50 rounded-full p-1">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Engagement stats */}
              <div className="absolute bottom-3 right-3 flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                  <Heart className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-medium">{reel.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                  <MessageCircle className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-medium">{reel.comments}</span>
                </div>
              </div>

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-16">
                  <p className="text-white text-xs leading-tight line-clamp-3">{reel.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Want to see more transformations and behind-the-scenes content?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
              <a href="https://instagram.com/ccscarshine" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span>Follow for More</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <a href="https://instagram.com/ccscarshine/reels" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
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
