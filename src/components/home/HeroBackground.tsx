
const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
      
      {/* Modern Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-3xl blur-xl animate-float"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-br from-red-400/30 to-orange-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-white/10 to-gray-400/10 rounded-2xl blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default HeroBackground;
