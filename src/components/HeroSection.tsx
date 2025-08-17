import { Button } from "@/components/ui/button";
import { Heart, Calendar, Smile } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4 md:px-8 bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 text-primary/60">
            <Heart className="w-8 h-8" />
            <Calendar className="w-8 h-8" />
            <Smile className="w-8 h-8" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Женский календарь
            </span>{" "}
            здоровья
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Персональный трекер женского цикла для отслеживания менструации, 
            овуляции и общего самочувствия. Заботьтесь о своем здоровье с умом.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-elegant hover:shadow-soft transition-all duration-300"
            >
              Начать отслеживание
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Точное отслеживание</h3>
              <p className="text-sm text-muted-foreground">Прогнозирование цикла с точностью</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Здоровье превыше всего</h3>
              <p className="text-sm text-muted-foreground">Мониторинг симптомов и самочувствия</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
              <Smile className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Простота использования</h3>
              <p className="text-sm text-muted-foreground">Удобный интерфейс каждый день</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;