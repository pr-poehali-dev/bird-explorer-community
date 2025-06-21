import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white text-sm font-medium ml-4 tracking-widest">
              VISIT FJORD
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/about"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/tours"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Tours
            </Link>
            <Link
              to="/sale"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Sale
            </Link>
            <Link
              to="/contacts"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Contacts
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/about" className="block py-2 text-white/80">
              About
            </Link>
            <Link to="/tours" className="block py-2 text-white/80">
              Tours
            </Link>
            <Link to="/sale" className="block py-2 text-white/80">
              Sale
            </Link>
            <Link to="/contacts" className="block py-2 text-white/80">
              Contacts
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
