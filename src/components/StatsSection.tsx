const StatsSection = () => {
  const stats = [
    { value: "15,432", label: "Наблюдений", icon: "🔭" },
    { value: "847", label: "Видов птиц", icon: "🦅" },
    { value: "2,156", label: "Участников", icon: "👥" },
    { value: "127", label: "Стран", icon: "🌍" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Наше сообщество в цифрах
          </h2>
          <p className="text-gray-600">
            Совместными усилиями мы создаём крупнейшую базу орнитологических
            данных
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
