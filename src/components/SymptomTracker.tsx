import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Smile, Meh, Frown, Heart, Zap, Brain } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const symptoms = [
  { id: "cramps", label: "Спазмы", icon: "🤕" },
  { id: "bloating", label: "Вздутие", icon: "🎈" },
  { id: "headache", label: "Головная боль", icon: "🤯" },
  { id: "fatigue", label: "Усталость", icon: "😴" },
  { id: "tender_breasts", label: "Болезненность груди", icon: "💆‍♀️" },
  { id: "mood_swings", label: "Перепады настроения", icon: "🎭" },
  { id: "acne", label: "Акне", icon: "🔴" },
  { id: "nausea", label: "Тошнота", icon: "🤢" }
];

const SymptomTracker = () => {
  const { t } = useLanguage();
  
  const moods = [
    { id: "happy", label: t('symptoms.excellent'), icon: Smile, color: "text-green-500" },
    { id: "neutral", label: t('symptoms.normal'), icon: Meh, color: "text-yellow-500" },
    { id: "sad", label: t('symptoms.bad'), icon: Frown, color: "text-red-500" }
  ];
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [notes, setNotes] = useState("");

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSave = () => {
    // В реальном приложении здесь будет сохранение в базу данных
    console.log({
      symptoms: selectedSymptoms,
      mood: selectedMood,
      notes,
      date: new Date()
    });
    
    // Сброс формы
    setSelectedSymptoms([]);
    setSelectedMood("");
    setNotes("");
    
    alert("Данные сохранены!");
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('symptoms.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('symptoms.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {/* Mood Tracker */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-primary" />
                <span>{t('symptoms.how_feeling')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {moods.map((mood) => {
                  const Icon = mood.icon;
                  return (
                    <Button
                      key={mood.id}
                      variant={selectedMood === mood.id ? "default" : "outline"}
                      onClick={() => setSelectedMood(mood.id)}
                      className="h-20 flex flex-col space-y-2"
                    >
                      <Icon className={`w-6 h-6 ${mood.color}`} />
                      <span>{mood.label}</span>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Symptoms */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span>{t('symptoms.symptoms')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {symptoms.map((symptom) => (
                  <Button
                    key={symptom.id}
                    variant={selectedSymptoms.includes(symptom.id) ? "default" : "outline"}
                    onClick={() => toggleSymptom(symptom.id)}
                    className="h-16 flex flex-col space-y-1 text-sm"
                  >
                    <span className="text-lg">{symptom.icon}</span>
                    <span>{symptom.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-primary" />
                <span>{t('symptoms.notes')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="notes">{t('symptoms.notes')}</Label>
                <Textarea
                  id="notes"
                  placeholder={t('symptoms.notes_placeholder')}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Summary and Save */}
          {(selectedSymptoms.length > 0 || selectedMood || notes) && (
            <Card className="shadow-soft border-0 border-primary/20">
              <CardHeader>
                <CardTitle>{t('symptoms.day_summary')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedMood && (
                  <div>
                    <span className="font-medium">{t('symptoms.mood')} </span>
                    <Badge variant="secondary">
                      {moods.find(m => m.id === selectedMood)?.label}
                    </Badge>
                  </div>
                )}
                
                {selectedSymptoms.length > 0 && (
                  <div>
                    <span className="font-medium">{t('symptoms.symptoms')}: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedSymptoms.map(symptomId => {
                        const symptom = symptoms.find(s => s.id === symptomId);
                        return (
                          <Badge key={symptomId} variant="outline">
                            {symptom?.icon} {symptom?.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {notes && (
                  <div>
                    <span className="font-medium">{t('symptoms.notes')}: </span>
                    <p className="text-muted-foreground mt-1">{notes}</p>
                  </div>
                )}
                
                <Button onClick={handleSave} className="w-full mt-6">
                  {t('symptoms.save_data')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SymptomTracker;