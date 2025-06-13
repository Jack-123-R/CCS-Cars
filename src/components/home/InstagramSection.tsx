
import { Button } from '@/components/ui/button';
import { Instagram, Play } from 'lucide-react';

const InstagramSection = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      isVideo: true,
      caption: "Paint correction transformation on this beautiful BMW"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
      isVideo: false,
      caption: "Ceramic coating application process"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80",
      isVideo: true,
      caption: "Interior detailing before and after"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80",
      isVideo: false,
      caption: "Engine bay cleaning transformation"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1555353540-38b469e74d6b?auto=format&fit=crop&w=400&q=80",
      isVideo: true,
      caption: "Mobile detailing service in action"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
      isVideo: false,
      caption: "Luxury vehicle complete detail"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Follow Our Work on Instagram
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See the latest transformations, behind-the-scenes content, and customer features. 
            Follow us @ccscarshine for daily detailing inspiration.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>Follow @ccscarshine</span>
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-gray-900" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs leading-tight">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
