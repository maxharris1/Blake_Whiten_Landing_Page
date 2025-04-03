
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Mock data - would be replaced with real data in a production app
const songs = [
  { id: 1, title: "SONG NAME", coverArt: "https://via.placeholder.com/300/000000/FFFFFF" },
  { id: 2, title: "COUNTRY ROADS", coverArt: "https://via.placeholder.com/300/000000/FFFFFF" },
  { id: 3, title: "MIDNIGHT TRAIN", coverArt: "https://via.placeholder.com/300/000000/FFFFFF" },
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
            <img 
              src={currentSong.coverArt} 
              alt={currentSong.title} 
              className="w-48 h-48 mx-auto mb-4"
            />
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
