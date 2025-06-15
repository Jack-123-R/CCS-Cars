
interface HeaderLogoProps {
  onLogoClick: () => void;
}

const HeaderLogo = ({ onLogoClick }: HeaderLogoProps) => {
  return (
    <button
      onClick={onLogoClick}
      className="flex-shrink-0 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
      aria-label="Go to home page"
    >
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <img 
            src="/lovable-uploads/28b808d4-646e-4452-9e8d-14baf9056940.png" 
            alt="CCS Cars Hyderabad Logo" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
            CCS Cars Hyderabad
          </h1>
          <p className="text-sm text-red-600">Professional Auto Detailing</p>
        </div>
      </div>
    </button>
  );
};

export default HeaderLogo;
