
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Updated song data with real album art
const songs = [
  { id: 1, title: "SIX MILE", coverArt: "/lovable-uploads/aeb65232-8cfa-4d07-8b7a-f8ff111d49cc.png" },
  { id: 2, title: "COUNTRY ROADS", coverArt: "/lovable-uploads/cfaf7f5f-e73c-47e3-be9e-d58998b9018b.png" },
  { id: 3, title: "MIDNIGHT TRAIN", coverArt: "/lovable-uploads/11ab65cb-0321-4946-b92e-bbde56a5a39b.png" },
];

const MusicSection = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };
  
  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };
  
  const currentSong = songs[currentSongIndex];
  
  return (
    <section id="music" className="py-16 bg-tan">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-maroon font-bold text-center mb-10">MUSIC</h2>
        
        <div className="flex justify-center items-center gap-8">
          <button onClick={prevSong} className="text-maroon">
            <ArrowLeft size={24} />
          </button>
          
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden">
              <img 
                src={currentSong.coverArt} 
                alt={currentSong.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl text-maroon font-medium mb-4">{currentSong.title}</h3>
            <button className="bg-maroon text-white uppercase px-8 py-2 rounded tracking-wider">
              Listen Now
            </button>
          </div>
          
          <button onClick={nextSong} className="text-maroon">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
