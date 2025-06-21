import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6">
              Откройте мир птиц вместе с нами
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Присоединяйтесь к орнитологическому сообществу, делитесь
              наблюдениями с GPS-координатами и помогайте науке изучать птиц
              нашей планеты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/map">
                <Button size="lg" className="w-full sm:w-auto">
                  <Icon name="MapPin" size={20} />
                  Начать наблюдение
                </Button>
              </Link>
              <Link to="/library">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Icon name="Book" size={20} />
                  Библиотека видов
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&h=400&fit=crop"
              alt="Птица в естественной среде"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  1,247+ активных наблюдений
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
