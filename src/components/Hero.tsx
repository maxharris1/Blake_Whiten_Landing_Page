
import { useEffect, useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image to check if it loads correctly
    const img = new Image();
    img.src = "/lovable-uploads/56c7823b-d6a7-4464-927a-8a0cab9bdaa2.png";
    img.onload = () => {
      setImageLoaded(true);
      console.log("Hero image loaded successfully");
    };
    img.onerror = (e) => {
      console.error("Error loading hero image:", e);
    };
  }, []);

  return (
    <section className="relative h-screen w-full">
      {imageLoaded ? (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/56c7823b-d6a7-4464-927a-8a0cab9bdaa2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <p className="text-white">Loading image...</p>
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
