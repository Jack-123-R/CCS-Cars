
interface HeroScrollIndicatorProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroScrollIndicator = ({ scrollToSection }: HeroScrollIndicatorProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <button 
        onClick={() => scrollToSection('services')}
        className="group flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-red-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse group-hover:bg-red-400"></div>
        </div>
        <span className="text-xs text-white/60 font-medium">Scroll</span>
      </button>
    </div>
  );
};

export default HeroScrollIndicator;
