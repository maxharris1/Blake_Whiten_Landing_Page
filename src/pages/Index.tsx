
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MusicSection from "../components/MusicSection";
import VideosSection from "../components/VideosSection";
import TourSection from "../components/TourSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <MusicSection />
      <VideosSection />
      <TourSection />
      <Footer />
    </div>
  );
};

export default Index;
