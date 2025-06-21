import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "MapPin",
      title: "GPS-наблюдения",
      description:
        "Точная геолокация ваших находок с автоматическим определением координат",
    },
    {
      icon: "Camera",
      title: "Фото и видео",
      description:
        "Загружайте изображения и видео птиц для подтверждения наблюдений",
    },
    {
      icon: "Users",
      title: "Сообщество",
      description: "Общайтесь с орнитологами, делитесь опытом и знаниями",
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description:
        "Отслеживайте статистику наблюдений и миграционные пути птиц",
    },
    {
      icon: "Book",
      title: "База знаний",
      description: "Обширная библиотека с описаниями видов и их особенностями",
    },
    {
      icon: "Globe",
      title: "Международная карта",
      description: "Интерактивная карта наблюдений со всего мира",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Возможности платформы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные инструменты для орнитологических исследований и научного
            сотрудничества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  name={feature.icon as any}
                  size={24}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
