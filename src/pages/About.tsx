import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const team = [
    {
      name: "Дмитрий Воронин",
      role: "Ведущий орнитолог",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Кандидат биологических наук, 15 лет опыта полевых исследований",
    },
    {
      name: "Мария Петрова",
      role: "Научный координатор",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c668078f?w=150&h=150&fit=crop&crop=face",
      bio: "Специалист по миграционным путям и GPS-трекингу птиц",
    },
    {
      name: "Алексей Смирнов",
      role: "IT-разработчик",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Создатель платформы для сбора и анализа орнитологических данных",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            О проекте Bird Explorer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Мы — команда орнитологов и технологов, объединённых общей целью:
            создать самую полную и точную базу данных о птицах нашей планеты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Icon name="Target" size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-semibold">Наша миссия</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Сделать орнитологические исследования доступными каждому,
                объединить любителей и профессионалов в единое сообщество для
                сохранения биоразнообразия планеты.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Icon name="Eye" size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-semibold">Наше видение</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Мир, где каждое наблюдение за птицами вносит вклад в науку, где
                данные помогают принимать решения по охране природы и сохранению
                экосистем.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-montserrat font-bold text-center mb-8">
            Команда проекта
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к нам!</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Каждое ваше наблюдение важно для науки. Вместе мы создаём будущее
              орнитологических исследований и защищаем птиц нашей планеты.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Mail" size={16} className="mr-2" />
                info@birdexplorer.ru
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
