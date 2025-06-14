
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface ReelPlayerProps {
  thumbnail: string;
  instagramUrl: string;
  alt?: string;
}

const getEmbedUrl = (instagramUrl: string) => {
  // Use the "/embed" path to generate an iframe-ready URL
  const match = instagramUrl.match(/instagram\.com\/reel\/([^/?]+)/);
  if (!match) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed`;
};

const ReelPlayer = ({
  thumbnail,
  instagramUrl,
  alt = "Instagram Reel",
}: ReelPlayerProps) => {
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [embedError, setEmbedError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Instagram's oEmbed content is loaded via an <iframe> using the /embed URL.
  const embedUrl = getEmbedUrl(instagramUrl);

  // We'll set a timeout to consider the embed failed if it takes too long (e.g. blocked by privacy/login).
  useEffect(() => {
    if (!embedUrl) return;
    const timer = setTimeout(() => {
      if (!embedLoaded) {
        setEmbedError(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [embedUrl, embedLoaded]);

  // Instagram embeds will send a load event when successful.
  const handleLoad = () => {
    setEmbedLoaded(true);
  };

  // Only show the iframe if we were able to derive a valid URL and no error
  if (embedUrl && !embedError) {
    return (
      <Card className="overflow-hidden p-0 aspect-[9/16] relative bg-black transition-all shadow-lg">
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          title="Instagram Reel"
          onLoad={handleLoad}
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            background: "#000"
          }}
        ></iframe>
        {/* Overlay loader while waiting for iframe */}
        {!embedLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 animate-pulse">
            <Play className="h-10 w-10 text-white/80" />
          </div>
        )}
      </Card>
    );
  }

  // Fallback to original thumbnail/overlay if cannot embed (e.g. private/post deleted)
  return (
    <Card
      className="overflow-hidden p-0 aspect-[9/16] group relative bg-black cursor-pointer hover:scale-[1.03] transition-all shadow-lg"
      onClick={() =>
        window.open(instagramUrl, "_blank", "noopener,noreferrer")
      }
      tabIndex={0}
      role="button"
      aria-label="Watch on Instagram"
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") &&
        window.open(instagramUrl, "_blank", "noopener,noreferrer")
      }
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
          <Play className="h-8 w-8 text-pink-600 drop-shadow" />
        </span>
        <span className="text-white text-xs font-semibold px-2 py-1 bg-black/60 rounded">
          Watch on Instagram
        </span>
      </div>
    </Card>
  );
};

export default ReelPlayer;

