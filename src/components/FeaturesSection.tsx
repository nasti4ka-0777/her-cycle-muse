import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🎨",
    title: "Эксклюзивный дизайн",
    description: "Каждая страница создана профессиональными дизайнерами с особым вниманием к эстетике"
  },
  {
    icon: "📸",
    title: "Профессиональная съемка",
    description: "Все фотографии сделаны в студии с профессиональным освещением и оборудованием"
  },
  {
    icon: "📅",
    title: "Удобный календарь",
    description: "Четкая сетка дат, праздники и выходные дни отмечены. Места для заметок"
  },
  {
    icon: "🎁",
    title: "Подарочная упаковка",
    description: "Календарь поставляется в красивой подарочной коробке с атласной лентой"
  },
  {
    icon: "📦",
    title: "Быстрая доставка",
    description: "Доставим ваш заказ в течение 3-5 рабочих дней в любой город"
  },
  {
    icon: "💎",
    title: "Премиум качество",
    description: "Высококачественная печать на плотной мелованной бумаге 300г/м²"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создаем не просто календари, а произведения искусства, 
            которые будут радовать вас каждый день в течение всего года.
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