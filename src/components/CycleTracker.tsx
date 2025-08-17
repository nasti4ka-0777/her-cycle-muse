import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, differenceInDays, addDays } from "date-fns";
import { ru } from "date-fns/locale";

const CycleTracker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [lastPeriodStart, setLastPeriodStart] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState(28);
  
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
            Трекер цикла
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Отмечайте дни менструации и получайте точные прогнозы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendar */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-center">Календарь цикла</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                locale={ru}
              />
            </CardContent>
          </Card>

          {/* Controls and Predictions */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Отметить день</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDate && (
                  <p className="text-muted-foreground">
                    Выбранная дата: {format(selectedDate, "d MMMM yyyy", { locale: ru })}
                  </p>
                )}
                <Button 
                  onClick={handleMarkPeriod}
                  disabled={!selectedDate}
                  className="w-full"
                >
                  Отметить начало менструации
                </Button>
              </CardContent>
            </Card>

            {lastPeriodStart && predictions && (
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Прогнозы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Следующая менструация:</span>
                      <Badge variant="secondary">
                        {format(predictions.nextPeriod, "d MMM", { locale: ru })}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Овуляция:</span>
                      <Badge className="bg-primary/20 text-primary">
                        {format(predictions.ovulation, "d MMM", { locale: ru })}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Фертильное окно:</span>
                      <Badge variant="outline">
                        {format(predictions.fertileStart, "d", { locale: ru })} - {format(predictions.fertileEnd, "d MMM", { locale: ru })}
                      </Badge>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Длительность цикла: {cycleLength} дней
                      </p>
                      {lastPeriodStart && (
                        <p className="text-sm text-muted-foreground">
                          День цикла: {differenceInDays(new Date(), lastPeriodStart) + 1}
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
                    <p className="text-primary font-medium">Добро пожаловать!</p>
                    <p className="text-sm text-muted-foreground">
                      Отметьте первый день последней менструации для начала отслеживания
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