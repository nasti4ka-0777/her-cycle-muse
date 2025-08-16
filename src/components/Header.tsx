import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-heading font-bold text-primary">
            Femme Calendar
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#preview" className="text-foreground/80 hover:text-primary transition-colors">
            Превью
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Особенности
          </a>
          <a href="#order" className="text-foreground/80 hover:text-primary transition-colors">
            Заказать
          </a>
        </nav>

        <Button variant="hero" size="lg">
          Заказать сейчас
        </Button>
      </div>
    </header>
  );
};

export default Header;