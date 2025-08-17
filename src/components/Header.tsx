import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">♀</span>
          </div>
          <span className="text-xl font-heading font-bold text-foreground">
            HerCycle
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#tracker" className="text-foreground/80 hover:text-primary transition-colors">
            Трекер цикла
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Возможности
          </a>
          <a href="#get-started" className="text-foreground/80 hover:text-primary transition-colors">
            Начать
          </a>
        </nav>

        <Button size="lg">
          Начать отслеживание
        </Button>
      </div>
    </header>
  );
};

export default Header;