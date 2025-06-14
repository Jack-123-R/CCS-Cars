
import { Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReelPlayerProps {
  thumbnail: string;
  instagramUrl: string;
  alt?: string;
}
const ReelPlayer = ({ thumbnail, instagramUrl, alt = "Instagram Reel" }: ReelPlayerProps) => {
  return (
    <Card className="overflow-hidden p-0 aspect-[9/16] group relative bg-black cursor-pointer hover:scale-[1.03] transition-all shadow-lg"
      onClick={() => window.open(instagramUrl, "_blank", "noopener,noreferrer")}
      tabIndex={0}
      role="button"
      aria-label="Watch on Instagram"
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && window.open(instagramUrl, "_blank", "noopener,noreferrer")}
    >
      <img
        src={thumbnail}
        alt={alt}
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
        loading="lazy"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-opacity" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="rounded-full bg-white/90 p-3 mb-2 backdrop-blur-sm shadow-lg">
          <Instagram className="h-8 w-8 text-pink-600 drop-shadow" />
        </span>
        <span className="text-white text-xs font-semibold px-2 py-1 bg-black/60 rounded">Watch on Instagram</span>
      </div>
    </Card>
  );
};

export default ReelPlayer;
