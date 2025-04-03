
const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/8ad599e2-bdf7-4e55-84c8-3f3671296167.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
