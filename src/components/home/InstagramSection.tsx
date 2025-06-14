
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import ReelPlayer from './ReelPlayer';

const INSTAGRAM_REELS = [
  {
    id: 1,
    // https://www.instagram.com/reel/C7dmUp4P7Gt/
    thumbnail: "https://instagram.fhyd12-1.fna.fbcdn.net/v/t51.29350-15/441431019_440290465256288_4964176356862759070_n.jpg?stp=dst-jpg_s640x640&_nc_ht=instagram.fhyd12-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=lwli3dJPLOkQ7kNvgGSvpk7&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYC4jPny6m-xwI17RWlp5JeRkzmrr3fVwdiFlS1Kj7oFfA&oe=666A8105&_nc_sid=10d13b",
    instagramUrl: "https://www.instagram.com/reel/C7dmUp4P7Gt/"
  },
  {
    id: 2,
    // https://www.instagram.com/reel/C4fZLSBPlYD/
    thumbnail: "https://instagram.fhyd12-2.fna.fbcdn.net/v/t51.2885-15/429439836_1104372903958506_1893946657108716050_n.jpg?stp=dst-jpg_s640x640&_nc_ht=instagram.fhyd12-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=rB5qOtrwGNQQ7kNvgGSdAij&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYD4JXOK6OPzxytRLVMX_0BQtg2MO0bOKgAT1V5NE6iJrw&oe=666A7CCB&_nc_sid=10d13b",
    instagramUrl: "https://www.instagram.com/reel/C4fZLSBPlYD/"
  },
  {
    id: 3,
    // https://www.instagram.com/reel/C4Pu_Z1vDL6/
    thumbnail: "https://instagram.fhyd12-1.fna.fbcdn.net/v/t51.2885-15/428936589_717818130191177_7357585736972857677_n.jpg?stp=dst-jpg_s640x640&_nc_ht=instagram.fhyd12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=bGHXgk5TBo8Q7kNvgFGluwe&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYDKaaW8e8hO20rPi7obwMxKXSvJj_mJKZ8tjDO0l58G_w&oe=666A888C&_nc_sid=10d13b",
    instagramUrl: "https://www.instagram.com/reel/C4Pu_Z1vDL6/"
  },
  {
    id: 4,
    // https://www.instagram.com/reel/DE7EicjzgeE/
    thumbnail: "https://instagram.fhyd12-1.fna.fbcdn.net/v/t51.2885-15/435393732_367458929622533_3197236015176065529_n.jpg?stp=dst-jpg_s640x640&_nc_ht=instagram.fhyd12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fkv1DsYB9z4Q7kNvgF7v9l4&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYCo7dQiD5TVr9IHlQ896-k1IzWl35TCn7htPaAQ5syZdg&oe=666A98C1&_nc_sid=10d13b",
    instagramUrl: "https://www.instagram.com/reel/DE7EicjzgeE/"
  }
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
        
        {/* Responsive Reels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {INSTAGRAM_REELS.map((reel) => (
            <div
              key={reel.id}
              className="aspect-[9/16] w-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center"
            >
              {/* style for child: make sure ReelPlayer fills container */}
              <div className="w-full h-full">
                <ReelPlayer
                  thumbnail={reel.thumbnail}
                  instagramUrl={reel.instagramUrl}
                />
              </div>
            </div>
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
