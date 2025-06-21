import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Map = () => {
  const [newObservation, setNewObservation] = useState({
    species: "",
    location: "",
    coordinates: { lat: "", lng: "" },
    notes: "",
  });

  const handleLocationCapture = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setNewObservation((prev) => ({
            ...prev,
            coordinates: {
              lat: position.coords.latitude.toFixed(6),
              lng: position.coords.longitude.toFixed(6),
            },
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    }
  };

  const observations = [
    {
      id: 1,
      species: "Большая синица",
      location: "Парк Сокольники",
      coordinates: { lat: 55.7887, lng: 37.6687 },
      time: "2 часа назад",
      observer: "Анна К.",
    },
    {
      id: 2,
      species: "Снегирь",
      location: "Лосиный остров",
      coordinates: { lat: 55.8708, lng: 37.75 },
      time: "5 часов назад",
      observer: "Михаил П.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-8">
          Карта наблюдений
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-96 mb-6">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-primary-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="Map"
                      size={48}
                      className="text-primary mx-auto mb-2"
                    />
                    <p className="text-gray-600">
                      Интерактивная карта загружается...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Последние наблюдения
              </h3>
              {observations.map((obs) => (
                <Card key={obs.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{obs.species}</h4>
                        <p className="text-sm text-gray-600">{obs.location}</p>
                        <p className="text-xs text-gray-500">
                          {obs.coordinates.lat}, {obs.coordinates.lng}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{obs.time}</p>
                        <p className="text-xs text-gray-400">{obs.observer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Plus" size={20} />
                  Новое наблюдение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="species">Вид птицы</Label>
                  <Input
                    id="species"
                    placeholder="Название вида..."
                    value={newObservation.species}
                    onChange={(e) =>
                      setNewObservation((prev) => ({
                        ...prev,
                        species: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="location">Местоположение</Label>
                  <Input
                    id="location"
                    placeholder="Описание места..."
                    value={newObservation.location}
                    onChange={(e) =>
                      setNewObservation((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <Label>GPS-координаты</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Широта"
                      value={newObservation.coordinates.lat}
                      onChange={(e) =>
                        setNewObservation((prev) => ({
                          ...prev,
                          coordinates: {
                            ...prev.coordinates,
                            lat: e.target.value,
                          },
                        }))
                      }
                    />
                    <Input
                      placeholder="Долгота"
                      value={newObservation.coordinates.lng}
                      onChange={(e) =>
                        setNewObservation((prev) => ({
                          ...prev,
                          coordinates: {
                            ...prev.coordinates,
                            lng: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2"
                    onClick={handleLocationCapture}
                  >
                    <Icon name="MapPin" size={16} />
                    Определить автоматически
                  </Button>
                </div>

                <div>
                  <Label htmlFor="notes">Заметки</Label>
                  <Input
                    id="notes"
                    placeholder="Дополнительная информация..."
                    value={newObservation.notes}
                    onChange={(e) =>
                      setNewObservation((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                  />
                </div>

                <Button className="w-full">
                  <Icon name="Send" size={16} />
                  Отправить наблюдение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
