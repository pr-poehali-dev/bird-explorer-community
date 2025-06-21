import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="animate-fade-in">
            <div className="w-16 h-0.5 bg-orange-400 mb-8"></div>

            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6">
              Amazing
            </h1>
            <h1 className="text-5xl lg:text-7xl font-bold text-orange-400 mb-8 tracking-wide">
              NORWAY
            </h1>

            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-md">
              Visit Norway, you will never regret it! This is something
              incredible - fantastic nature, fjords, fancy outlines of the
              coast...
            </p>

            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-orange-400 rounded-full"></div>
              <Button className="relative bg-orange-400 hover:bg-orange-500 text-black font-medium px-8 py-6 rounded-full">
                BOOK A TOUR
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Hexagonal photo grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md ml-auto">
              <div className="relative">
                <div
                  className="hexagon-clip bg-cover bg-center h-32 w-32 ml-8"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop')",
                  }}
                ></div>
              </div>
              <div className="relative">
                <div
                  className="hexagon-clip bg-cover bg-center h-32 w-32"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop')",
                  }}
                ></div>
              </div>
              <div className="relative">
                <div
                  className="hexagon-clip bg-cover bg-center h-32 w-32"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=300&fit=crop')",
                  }}
                ></div>
              </div>
              <div className="relative">
                <div
                  className="hexagon-clip bg-cover bg-center h-32 w-32 ml-8"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&h=300&fit=crop')",
                  }}
                ></div>
              </div>
              <div className="relative col-span-2">
                <div
                  className="hexagon-clip bg-cover bg-center h-32 w-32 mx-auto"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=300&h=300&fit=crop')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media icons */}
        <div className="absolute bottom-8 left-4 sm:left-8 flex space-x-6">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs">Facebook</span>
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs">Twitter</span>
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs">Instagram</span>
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs">Pinterest</span>
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs">Google+</span>
          </a>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-8 right-4 sm:right-8 flex space-x-4">
          <button className="text-white/60 hover:text-white transition-colors">
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
