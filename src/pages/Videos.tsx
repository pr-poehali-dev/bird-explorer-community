import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Миграция журавлей: весенний путь",
      thumbnail:
        "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=400&h=250&fit=crop",
      duration: "12:34",
      views: 15420,
      author: "Научный канал",
    },
    {
      id: 2,
      title: "Брачные танцы павлинов",
      thumbnail:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop",
      duration: "8:15",
      views: 23150,
      author: "Wildlife Studio",
    },
    {
      id: 3,
      title: "Редкие виды хищных птиц России",
      thumbnail:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=400&h=250&fit=crop",
      duration: "25:42",
      views: 8750,
      author: "Документальные фильмы",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Видеотека
          </h1>
          <p className="text-gray-600">
            Документальные фильмы, образовательные видео и наблюдения сообщества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{video.author}</p>
                <p className="text-xs text-gray-500">
                  {video.views.toLocaleString()} просмотров
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
