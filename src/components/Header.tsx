import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/63be8d57-a8e8-4ff8-a8c5-66edf06b9b42.png" 
            alt="Velluna Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-heading font-bold text-foreground">
            {t('header.title')}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#tracker" className="text-foreground/80 hover:text-primary transition-colors">
            {t('header.cycle_tracker')}
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            {t('header.features')}
          </a>
          <a href="#get-started" className="text-foreground/80 hover:text-primary transition-colors">
            {t('header.get_started')}
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <Button size="lg">
            {t('header.start_tracking')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;