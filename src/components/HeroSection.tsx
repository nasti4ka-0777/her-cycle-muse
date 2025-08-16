import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-calendar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero image */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={heroImage} 
          alt="Элегантный женский календарь" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
          Женский календарь
          <span className="block text-primary">2025</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Элегантные портреты красивых женщин на каждый месяц года. 
          Премиум качество печати и изысканный дизайн.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Заказать календарь
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
            Посмотреть превью
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            ✨ Ограниченная серия • 🎁 Идеальный подарок • 📦 Быстрая доставка
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;