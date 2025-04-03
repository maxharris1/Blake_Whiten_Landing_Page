
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState } from "react";

// Updated videos data with real thumbnails
const videos = [
  { id: 1, title: "SIX MILE", thumbnail: "/lovable-uploads/aeb65232-8cfa-4d07-8b7a-f8ff111d49cc.png" },
  { id: 2, title: "CAMPFIRE SESSIONS", thumbnail: "/lovable-uploads/8ad599e2-bdf7-4e55-84c8-3f3671296167.png" },
  { id: 3, title: "LIVE IN NASHVILLE", thumbnail: "/lovable-uploads/cfaf7f5f-e73c-47e3-be9e-d58998b9018b.png" },
];

const VideosSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };
  
  const currentVideo = videos[currentVideoIndex];
  
  return (
    <section id="videos" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-[#e1c9a1] font-bold text-center mb-12">VIDEOS</h2>
        
        <div className="relative max-w-2xl mx-auto">
          <button 
            onClick={prevVideo} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#e1c9a1] hidden md:block"
          >
            <ArrowLeft size={32} />
          </button>
          
          <div className="relative">
            <img 
              src={currentVideo.thumbnail} 
              alt={currentVideo.title} 
              className="w-full h-auto rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#e1c9a1] rounded-full p-4 opacity-80 hover:opacity-100 transition">
                <Play size={32} className="text-black ml-1" />
              </button>
            </div>
          </div>
          
          <button 
            onClick={nextVideo} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#e1c9a1] hidden md:block"
          >
            <ArrowRight size={32} />
          </button>
          
          <div className="flex justify-between mt-4 md:hidden">
            <button onClick={prevVideo} className="text-[#e1c9a1]">
              <ArrowLeft size={24} />
            </button>
            <button onClick={nextVideo} className="text-[#e1c9a1]">
              <ArrowRight size={24} />
            </button>
          </div>
          
          <h3 className="text-xl text-[#e1c9a1] font-medium text-center mt-6">
            {currentVideo.title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
