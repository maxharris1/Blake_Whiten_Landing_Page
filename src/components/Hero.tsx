
const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/6703af04-7193-4c7b-9be2-15205aa596a9.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
