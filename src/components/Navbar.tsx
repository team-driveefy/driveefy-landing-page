import { Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-md shadow-sm z-50 rounded-full mt-5">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">DRIVEEFY</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-primary">
              About
            </Link>
            <Link to="/service" className="text-gray-800 hover:text-primary">
              Service
            </Link>
            <Link to="/blogs" className="text-gray-800 hover:text-primary">
              Blogs
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-primary">Log In</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800">
              Get Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
