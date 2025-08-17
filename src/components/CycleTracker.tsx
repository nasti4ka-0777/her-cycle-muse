import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, differenceInDays, addDays } from "date-fns";
import { ru, uk, enUS, de, es } from "date-fns/locale";
import { useLanguage } from "@/hooks/useLanguage";

const CycleTracker = () => {
  const { t, language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [lastPeriodStart, setLastPeriodStart] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState(28);
  
  const getLocale = () => {
    switch (language) {
      case 'uk': return uk;
      case 'en': return enUS;
      case 'de': return de;
      case 'es': return es;
      case 'ru': return ru;
      default: return uk;
    }
  };
  
  const handleMarkPeriod = () => {
    if (selectedDate) {
      setLastPeriodStart(selectedDate);
    }
  };

  const getPredictedDates = () => {
    if (!lastPeriodStart) return null;
    
    const nextPeriod = addDays(lastPeriodStart, cycleLength);
    const ovulation = addDays(lastPeriodStart, Math.floor(cycleLength / 2));
    const fertileStart = addDays(ovulation, -5);
    const fertileEnd = addDays(ovulation, 1);
    
    return {
      nextPeriod,
      ovulation,
      fertileStart,
      fertileEnd
    };
  };

  const predictions = getPredictedDates();

  return (
    <section id="tracker" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('tracker.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('tracker.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendar */}
            <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-center">{t('tracker.calendar_title')}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                locale={getLocale()}
              />
            </CardContent>
          </Card>

          {/* Controls and Predictions */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>{t('tracker.mark_day')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDate && (
                  <p className="text-muted-foreground">
                    {t('tracker.selected_date')} {format(selectedDate, "d MMMM yyyy", { locale: getLocale() })}
                  </p>
                )}
                <Button 
                  onClick={handleMarkPeriod}
                  disabled={!selectedDate}
                  className="w-full"
                >
                  {t('tracker.mark_period')}
                </Button>
              </CardContent>
            </Card>

            {lastPeriodStart && predictions && (
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>{t('tracker.predictions')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>{t('tracker.next_period')}</span>
                      <Badge variant="secondary">
                        {format(predictions.nextPeriod, "d MMM", { locale: getLocale() })}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>{t('tracker.ovulation')}</span>
                      <Badge className="bg-primary/20 text-primary">
                        {format(predictions.ovulation, "d MMM", { locale: getLocale() })}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>{t('tracker.fertile_window')}</span>
                      <Badge variant="outline">
                        {format(predictions.fertileStart, "d", { locale: getLocale() })} - {format(predictions.fertileEnd, "d MMM", { locale: getLocale() })}
                      </Badge>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        {t('tracker.cycle_length')} {cycleLength} {language === 'en' ? 'days' : language === 'de' ? 'Tage' : language === 'es' ? 'días' : 'днів'}
                      </p>
                      {lastPeriodStart && (
                        <p className="text-sm text-muted-foreground">
                          {t('tracker.cycle_day')} {differenceInDays(new Date(), lastPeriodStart) + 1}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {!lastPeriodStart && (
              <Card className="shadow-soft border-0 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-primary font-medium">{t('tracker.welcome')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('tracker.welcome_desc')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CycleTracker;