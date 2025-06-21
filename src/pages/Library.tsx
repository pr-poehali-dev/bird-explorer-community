import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const birds = [
    {
      id: 1,
      name: "Большая синица",
      scientific: "Parus major",
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop",
      habitat: "Лиственные леса, парки",
      observations: 1247,
    },
    {
      id: 2,
      name: "Снегирь",
      scientific: "Pyrrhula pyrrhula",
      image:
        "https://images.unsplash.com/photo-1574781330855-d0db5ac2c8b3?w=300&h=200&fit=crop",
      habitat: "Хвойные леса",
      observations: 856,
    },
    {
      id: 3,
      name: "Воробей домовый",
      scientific: "Passer domesticus",
      image:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=200&fit=crop",
      habitat: "Городские территории",
      observations: 2134,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Библиотека птиц
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск по названию или научному имени..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Icon name="Filter" size={16} />
              Фильтры
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birds.map((bird) => (
            <div
              key={bird.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <img
                src={bird.image}
                alt={bird.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {bird.name}
                </h3>
                <p className="text-gray-500 italic mb-3">{bird.scientific}</p>
                <p className="text-sm text-gray-600 mb-4">{bird.habitat}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {bird.observations} наблюдений
                  </span>
                  <Button size="sm" variant="outline">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
