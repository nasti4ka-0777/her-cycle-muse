import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "📅",
      title: t('features.cycle_tracking'),
      description: t('features.cycle_desc')
    },
    {
      icon: "📊",
      title: t('features.symptom_analysis'),
      description: t('features.symptom_desc')
    },
    {
      icon: "🔔",
      title: t('features.smart_reminders'),
      description: t('features.reminders_desc')
    },
    {
      icon: "📈",
      title: t('features.predictions'),
      description: t('features.predictions_desc')
    },
    {
      icon: "🔒",
      title: t('features.privacy'),
      description: t('features.privacy_desc')
    },
    {
      icon: "💝",
      title: t('features.pregnancy_planning'),
      description: t('features.pregnancy_desc')
    }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
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