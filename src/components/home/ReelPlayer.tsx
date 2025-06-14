
import { useState } from "react";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReelPlayerProps {
  thumbnail: string;
  videoUrl: string;
  alt?: string;
}

const ReelPlayer = ({ thumbnail, videoUrl, alt = "Instagram Reel" }: ReelPlayerProps) => {
  const [playing, setPlaying] = useState(false);

  return (
    <Card className="overflow-hidden p-0 aspect-[9/16] group relative bg-black hover-scale transition-all shadow-lg">
      {!playing ? (
        <button
          className="relative w-full h-full flex flex-col items-center justify-center group"
          onClick={() => setPlaying(true)}
        >
          <img
            src={thumbnail}
            alt={alt}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-opacity" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="rounded-full bg-white/80 p-4 mb-3 backdrop-blur-md shadow-lg">
              <Play className="h-10 w-10 text-pink-600 drop-shadow" />
            </span>
            <span className="text-white text-xs font-semibold px-2 py-1 bg-black/50 rounded">Play Reel</span>
          </div>
        </button>
      ) : (
        <video
          src={videoUrl}
          controls
          autoPlay
          className="object-cover w-full h-full"
        />
      )}
    </Card>
  );
};

export default ReelPlayer;
