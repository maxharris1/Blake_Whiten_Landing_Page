
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
      <div className="flex items-center">
        <img src="/lovable-uploads/8ad599e2-bdf7-4e55-84c8-3f3671296167.png" alt="Blake Whiten Logo" className="h-20" />
      </div>
      <div className="hidden md:flex space-x-6 text-white text-sm uppercase tracking-widest">
        <Link to="/#music" className="hover:opacity-80 transition">MUSIC</Link>
        <Link to="/#videos" className="hover:opacity-80 transition">VIDEOS</Link>
        <Link to="/#tour" className="hover:opacity-80 transition">TOUR</Link>
      </div>
    </nav>
  );
};

export default Navbar;
