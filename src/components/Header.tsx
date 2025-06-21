import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🦅</span>
            </div>
            <span className="text-xl font-montserrat font-bold text-gray-900">
              Bird Explorer
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/library"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Библиотека
            </Link>
            <Link
              to="/videos"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Видео
            </Link>
            <Link
              to="/map"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Карта
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О нас
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} />
                Профиль
              </Button>
            </Link>
            <Button size="sm">
              <Icon name="Plus" size={16} />
              Добавить наблюдение
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/library" className="block py-2 text-gray-700">
              Библиотека
            </Link>
            <Link to="/videos" className="block py-2 text-gray-700">
              Видео
            </Link>
            <Link to="/map" className="block py-2 text-gray-700">
              Карта
            </Link>
            <Link to="/about" className="block py-2 text-gray-700">
              О нас
            </Link>
            <Link to="/profile" className="block py-2 text-gray-700">
              Профиль
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
