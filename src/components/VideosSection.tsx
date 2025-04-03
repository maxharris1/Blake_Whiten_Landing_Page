
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState } from "react";

// Mock data - would be replaced with real data in a production app
const videos = [
  { id: 1, title: "VIDEO NAME", thumbnail: "https://via.placeholder.com/800x450/000000/FFFFFF" },
  { id: 2, title: "LIVE IN NASHVILLE", thumbnail: "https://via.placeholder.com/800x450/000000/FFFFFF" },
  { id: 3, title: "ON THE ROAD", thumbnail: "https://via.placeholder.com/800x450/000000/FFFFFF" },
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#e1c9a1]"
          >
            <ArrowLeft size={32} />
          </button>
          
          <div className="relative">
            <img 
              src={currentVideo.thumbnail} 
              alt={currentVideo.title} 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#e1c9a1] rounded-full p-4 opacity-80 hover:opacity-100 transition">
                <Play size={32} className="text-black ml-1" />
              </button>
            </div>
          </div>
          
          <button 
            onClick={nextVideo} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#e1c9a1]"
          >
            <ArrowRight size={32} />
          </button>
          
          <h3 className="text-xl text-[#e1c9a1] font-medium text-center mt-6">
            {currentVideo.title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
