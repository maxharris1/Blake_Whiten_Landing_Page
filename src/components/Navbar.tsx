
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
      <div className="flex items-center">
        <img src="/lovable-uploads/6703af04-7193-4c7b-9be2-15205aa596a9.png" alt="Blake Whiten Logo" className="h-16" />
      </div>
      <div className="hidden md:flex space-x-6 text-white text-xs uppercase tracking-widest">
        <Link to="/#music" className="hover:opacity-80 transition">MUSIC</Link>
        <Link to="/#videos" className="hover:opacity-80 transition">VIDEOS</Link>
        <Link to="/#tour" className="hover:opacity-80 transition">TOUR</Link>
      </div>
    </nav>
  );
};

export default Navbar;
