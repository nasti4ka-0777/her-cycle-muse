import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "📅",
    title: "Отслеживание цикла",
    description: "Ведите точный календарь менструаций, овуляции и фертильных дней"
  },
  {
    icon: "📊",
    title: "Анализ симптомов",
    description: "Записывайте и анализируйте симптомы, настроение и самочувствие"
  },
  {
    icon: "🔔",
    title: "Умные напоминания",
    description: "Получайте уведомления о приближении менструации и важных днях"
  },
  {
    icon: "📈",
    title: "Прогнозы и статистика",
    description: "Персонализированные прогнозы на основе ваших данных"
  },
  {
    icon: "🔒",
    title: "Конфиденциальность",
    description: "Ваши данные защищены и остаются только у вас"
  },
  {
    icon: "💝",
    title: "Планирование беременности",
    description: "Инструменты для планирования беременности или контрацепции"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Возможности приложения
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Все инструменты для комплексного отслеживания женского здоровья 
            в одном удобном и безопасном приложении.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;