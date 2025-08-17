import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Download, Smartphone, Users } from "lucide-react";

const GetStartedSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Скачайте приложение",
      description: "Быстрая установка на любое устройство"
    },
    {
      icon: Shield,
      title: "Безопасная регистрация",
      description: "Ваши данные защищены шифрованием"
    },
    {
      icon: Smartphone,
      title: "Начните отслеживание",
      description: "Простой интерфейс для ежедневного использования"
    },
    {
      icon: Users,
      title: "Присоединяйтесь к сообществу",
      description: "Тысячи женщин доверяют нашему приложению"
    }
  ];

  return (
    <section id="get-started" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Начните заботиться о себе уже сегодня
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Присоединяйтесь к тысячам женщин, которые уже используют наше приложение 
            для отслеживания своего здоровья
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="text-center shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 shadow-elegant hover:shadow-soft transition-all duration-300"
            >
              Начать использование бесплатно
            </Button>
            
            <p className="text-muted-foreground">
              Бесплатно навсегда • Никаких скрытых платежей • Полная конфиденциальность
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-soft border-primary/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Точность прогнозов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Рейтинг в App Store</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;