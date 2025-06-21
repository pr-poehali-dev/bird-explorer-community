import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const userStats = {
    totalObservations: 247,
    speciesCount: 89,
    contributionRank: 15,
    joinDate: "Март 2023",
  };

  const recentObservations = [
    {
      id: 1,
      species: "Большая синица",
      location: "Парк Сокольники",
      date: "2024-06-20",
      coordinates: "55.7887, 37.6687",
    },
    {
      id: 2,
      species: "Снегирь",
      location: "Лосиный остров",
      date: "2024-06-19",
      coordinates: "55.8708, 37.7500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <Icon name="User" size={32} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-gray-900">
                Анна Козлова
              </h1>
              <p className="text-gray-600">Орнитолог-любитель</p>
              <p className="text-sm text-gray-500">
                Участник с {userStats.joinDate}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {userStats.totalObservations}
              </div>
              <div className="text-sm text-gray-600">Наблюдений</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {userStats.speciesCount}
              </div>
              <div className="text-sm text-gray-600">Видов птиц</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                #{userStats.contributionRank}
              </div>
              <div className="text-sm text-gray-600">Рейтинг</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-gray-600">Точность</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>История наблюдений</span>
              <Button size="sm">
                <Icon name="Download" size={16} />
                Экспорт
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentObservations.map((obs) => (
                <div
                  key={obs.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">{obs.species}</h4>
                    <p className="text-sm text-gray-600">{obs.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{obs.date}</p>
                    <p className="text-xs text-gray-500">{obs.coordinates}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
