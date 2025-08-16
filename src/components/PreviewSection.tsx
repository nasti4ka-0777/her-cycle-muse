import { Card, CardContent } from "@/components/ui/card";
import calendarPreview from "@/assets/calendar-preview.jpg";
import model1 from "@/assets/model-1.jpg";

const PreviewSection = () => {
  return (
    <section id="preview" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Превью календаря
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждая страница календаря создана с особой тщательностью и вниманием к деталям. 
            Профессиональная фотография и элегантный дизайн.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calendar preview */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-elegant border-0 bg-card">
              <CardContent className="p-0">
                <img 
                  src={calendarPreview} 
                  alt="Предварительный просмотр календаря"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                Качественная печать
              </h3>
              <p className="text-muted-foreground">
                Плотная бумага 300г/м² • Глянцевое покрытие • Формат A3
              </p>
            </div>
          </div>

          {/* Model showcase */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-soft border-0 bg-gradient-secondary">
              <CardContent className="p-8">
                <img 
                  src={model1} 
                  alt="Красивая модель"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                12 эксклюзивных фотографий
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Профессиональные модели
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Студийная съемка
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Элегантные позы
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Высокое разрешение
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;