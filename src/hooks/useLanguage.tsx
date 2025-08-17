import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uk' | 'en' | 'de' | 'es' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Header
    'header.title': 'Velluna',
    'header.cycle_tracker': 'Трекер циклу',
    'header.features': 'Можливості',
    'header.get_started': 'Почати',
    'header.start_tracking': 'Почати відстеження',
    
    // Hero Section
    'hero.title': 'Жіночий календар',
    'hero.title_highlight': 'здоров\'я',
    'hero.subtitle': 'Персональний трекер жіночого циклу для відстеження менструації, овуляції та загального самопочуття. Дбайте про своє здоров\'я розумно.',
    'hero.start_tracking': 'Почати відстеження',
    'hero.learn_more': 'Дізнатися більше',
    'hero.accurate_tracking': 'Точне відстеження',
    'hero.accurate_desc': 'Прогнозування циклу з точністю',
    'hero.health_first': 'Здоров\'я понад усе',
    'hero.health_desc': 'Моніторинг симптомів та самопочуття',
    'hero.ease_of_use': 'Простота використання',
    'hero.ease_desc': 'Зручний інтерфейс щодня',
    
    // Cycle Tracker
    'tracker.title': 'Трекер циклу',
    'tracker.subtitle': 'Відмічайте дні менструації та отримуйте точні прогнози',
    'tracker.calendar_title': 'Календар циклу',
    'tracker.mark_day': 'Відмітити день',
    'tracker.selected_date': 'Обрана дата:',
    'tracker.mark_period': 'Відмітити початок менструації',
    'tracker.predictions': 'Прогнози',
    'tracker.next_period': 'Наступна менструація:',
    'tracker.ovulation': 'Овуляція:',
    'tracker.fertile_window': 'Фертильне вікно:',
    'tracker.cycle_length': 'Тривалість циклу:',
    'tracker.cycle_day': 'День циклу:',
    'tracker.welcome': 'Ласкаво просимо!',
    'tracker.welcome_desc': 'Відмітьте перший день останньої менструації для початку відстеження',
    
    // Symptom Tracker
    'symptoms.title': 'Щоденник симптомів',
    'symptoms.subtitle': 'Відстежуйте симптоми та настрій для кращого розуміння свого циклу',
    'symptoms.how_feeling': 'Як ви себе почуваєте?',
    'symptoms.excellent': 'Відмінно',
    'symptoms.normal': 'Нормально',
    'symptoms.bad': 'Погано',
    'symptoms.symptoms': 'Симптоми',
    'symptoms.notes': 'Нотатки',
    'symptoms.notes_placeholder': 'Опишіть ваше самопочуття, особливості дня чи будь-які спостереження...',
    'symptoms.day_summary': 'Зведення дня',
    'symptoms.mood': 'Настрій:',
    'symptoms.save_data': 'Зберегти дані дня',
    
    // Features
    'features.title': 'Можливості додатку',
    'features.subtitle': 'Всі інструменти для комплексного відстеження жіночого здоров\'я в одному зручному та безпечному додатку.',
    'features.cycle_tracking': 'Відстеження циклу',
    'features.cycle_desc': 'Ведіть точний календар менструацій, овуляції та фертильних днів',
    'features.symptom_analysis': 'Аналіз симптомів',
    'features.symptom_desc': 'Записуйте та аналізуйте симптоми, настрій та самопочуття',
    'features.smart_reminders': 'Розумні нагадування',
    'features.reminders_desc': 'Отримуйте сповіщення про наближення менструації та важливі дні',
    'features.predictions': 'Прогнози та статистика',
    'features.predictions_desc': 'Персоналізовані прогнози на основі ваших даних',
    'features.privacy': 'Конфіденційність',
    'features.privacy_desc': 'Ваші дані захищені та залишаються тільки у вас',
    'features.pregnancy_planning': 'Планування вагітності',
    'features.pregnancy_desc': 'Інструменти для планування вагітності або контрацепції',
    
    // Order Section
    'order.title': 'Почніть відстежувати свій цикл сьогодні',
    'order.subtitle': 'Приєднуйтесь до тисяч жінок, які вже довіряють Velluna для відстеження свого здоров\'я',
    'order.start_free': 'Почати безкоштовно',
    'order.download': 'Завантажити додаток',
    
    // Footer
    'footer.description': 'Ваш персональний помічник для відстеження жіночого здоров\'я',
    'footer.features_title': 'Можливості',
    'footer.support_title': 'Підтримка',
    'footer.legal_title': 'Правова інформація',
    'footer.help': 'Допомога',
    'footer.contact': 'Контакти',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    'footer.rights': 'Всі права захищені.',
  },
  en: {
    // Header
    'header.title': 'Velluna',
    'header.cycle_tracker': 'Cycle Tracker',
    'header.features': 'Features',
    'header.get_started': 'Get Started',
    'header.start_tracking': 'Start Tracking',
    
    // Hero Section
    'hero.title': 'Women\'s Health',
    'hero.title_highlight': 'Calendar',
    'hero.subtitle': 'Personal women\'s cycle tracker for monitoring menstruation, ovulation and overall well-being. Take care of your health smartly.',
    'hero.start_tracking': 'Start Tracking',
    'hero.learn_more': 'Learn More',
    'hero.accurate_tracking': 'Accurate Tracking',
    'hero.accurate_desc': 'Cycle prediction with precision',
    'hero.health_first': 'Health First',
    'hero.health_desc': 'Monitor symptoms and well-being',
    'hero.ease_of_use': 'Ease of Use',
    'hero.ease_desc': 'User-friendly interface every day',
    
    // Cycle Tracker
    'tracker.title': 'Cycle Tracker',
    'tracker.subtitle': 'Mark menstruation days and get accurate predictions',
    'tracker.calendar_title': 'Cycle Calendar',
    'tracker.mark_day': 'Mark Day',
    'tracker.selected_date': 'Selected date:',
    'tracker.mark_period': 'Mark period start',
    'tracker.predictions': 'Predictions',
    'tracker.next_period': 'Next period:',
    'tracker.ovulation': 'Ovulation:',
    'tracker.fertile_window': 'Fertile window:',
    'tracker.cycle_length': 'Cycle length:',
    'tracker.cycle_day': 'Cycle day:',
    'tracker.welcome': 'Welcome!',
    'tracker.welcome_desc': 'Mark the first day of your last period to start tracking',
    
    // Symptom Tracker
    'symptoms.title': 'Symptom Diary',
    'symptoms.subtitle': 'Track symptoms and mood for better understanding of your cycle',
    'symptoms.how_feeling': 'How are you feeling?',
    'symptoms.excellent': 'Excellent',
    'symptoms.normal': 'Normal',
    'symptoms.bad': 'Bad',
    'symptoms.symptoms': 'Symptoms',
    'symptoms.notes': 'Notes',
    'symptoms.notes_placeholder': 'Describe your well-being, day\'s features or any observations...',
    'symptoms.day_summary': 'Day Summary',
    'symptoms.mood': 'Mood:',
    'symptoms.save_data': 'Save Day Data',
    
    // Features
    'features.title': 'App Features',
    'features.subtitle': 'All tools for comprehensive women\'s health tracking in one convenient and secure app.',
    'features.cycle_tracking': 'Cycle Tracking',
    'features.cycle_desc': 'Keep accurate calendar of menstruation, ovulation and fertile days',
    'features.symptom_analysis': 'Symptom Analysis',
    'features.symptom_desc': 'Record and analyze symptoms, mood and well-being',
    'features.smart_reminders': 'Smart Reminders',
    'features.reminders_desc': 'Get notifications about approaching menstruation and important days',
    'features.predictions': 'Predictions & Statistics',
    'features.predictions_desc': 'Personalized predictions based on your data',
    'features.privacy': 'Privacy',
    'features.privacy_desc': 'Your data is protected and stays only with you',
    'features.pregnancy_planning': 'Pregnancy Planning',
    'features.pregnancy_desc': 'Tools for pregnancy planning or contraception',
    
    // Order Section
    'order.title': 'Start tracking your cycle today',
    'order.subtitle': 'Join thousands of women who already trust Velluna for tracking their health',
    'order.start_free': 'Start Free',
    'order.download': 'Download App',
    
    // Footer
    'footer.description': 'Your personal assistant for women\'s health tracking',
    'footer.features_title': 'Features',
    'footer.support_title': 'Support',
    'footer.legal_title': 'Legal',
    'footer.help': 'Help',
    'footer.contact': 'Contact',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    // Header
    'header.title': 'Velluna',
    'header.cycle_tracker': 'Zyklustracker',
    'header.features': 'Funktionen',
    'header.get_started': 'Loslegen',
    'header.start_tracking': 'Tracking starten',
    
    // Hero Section
    'hero.title': 'Frauen-Gesundheits',
    'hero.title_highlight': 'kalender',
    'hero.subtitle': 'Persönlicher Zyklustracker zur Überwachung von Menstruation, Eisprung und allgemeinem Wohlbefinden. Kümmern Sie sich intelligent um Ihre Gesundheit.',
    'hero.start_tracking': 'Tracking starten',
    'hero.learn_more': 'Mehr erfahren',
    'hero.accurate_tracking': 'Genaues Tracking',
    'hero.accurate_desc': 'Zyklusvorhersage mit Präzision',
    'hero.health_first': 'Gesundheit zuerst',
    'hero.health_desc': 'Symptome und Wohlbefinden überwachen',
    'hero.ease_of_use': 'Benutzerfreundlich',
    'hero.ease_desc': 'Benutzerfreundliche Oberfläche täglich',
    
    // Cycle Tracker
    'tracker.title': 'Zyklustracker',
    'tracker.subtitle': 'Markieren Sie Menstruationstage und erhalten Sie genaue Vorhersagen',
    'tracker.calendar_title': 'Zykluskalender',
    'tracker.mark_day': 'Tag markieren',
    'tracker.selected_date': 'Ausgewähltes Datum:',
    'tracker.mark_period': 'Periodenbeginn markieren',
    'tracker.predictions': 'Vorhersagen',
    'tracker.next_period': 'Nächste Periode:',
    'tracker.ovulation': 'Eisprung:',
    'tracker.fertile_window': 'Fruchtbares Fenster:',
    'tracker.cycle_length': 'Zykluslänge:',
    'tracker.cycle_day': 'Zyklustag:',
    'tracker.welcome': 'Willkommen!',
    'tracker.welcome_desc': 'Markieren Sie den ersten Tag Ihrer letzten Periode um zu beginnen',
    
    // Symptom Tracker
    'symptoms.title': 'Symptomtagebuch',
    'symptoms.subtitle': 'Verfolgen Sie Symptome und Stimmung für ein besseres Verständnis Ihres Zyklus',
    'symptoms.how_feeling': 'Wie fühlen Sie sich?',
    'symptoms.excellent': 'Ausgezeichnet',
    'symptoms.normal': 'Normal',
    'symptoms.bad': 'Schlecht',
    'symptoms.symptoms': 'Symptome',
    'symptoms.notes': 'Notizen',
    'symptoms.notes_placeholder': 'Beschreiben Sie Ihr Wohlbefinden, Tagesbesonderheiten oder Beobachtungen...',
    'symptoms.day_summary': 'Tageszusammenfassung',
    'symptoms.mood': 'Stimmung:',
    'symptoms.save_data': 'Tagesdaten speichern',
    
    // Features
    'features.title': 'App-Funktionen',
    'features.subtitle': 'Alle Tools für umfassendes Frauen-Gesundheitstracking in einer bequemen und sicheren App.',
    'features.cycle_tracking': 'Zyklusverfolgung',
    'features.cycle_desc': 'Führen Sie einen genauen Kalender für Menstruation, Eisprung und fruchtbare Tage',
    'features.symptom_analysis': 'Symptomanalyse',
    'features.symptom_desc': 'Erfassen und analysieren Sie Symptome, Stimmung und Wohlbefinden',
    'features.smart_reminders': 'Intelligente Erinnerungen',
    'features.reminders_desc': 'Erhalten Sie Benachrichtigungen über bevorstehende Menstruation und wichtige Tage',
    'features.predictions': 'Vorhersagen & Statistiken',
    'features.predictions_desc': 'Personalisierte Vorhersagen basierend auf Ihren Daten',
    'features.privacy': 'Privatsphäre',
    'features.privacy_desc': 'Ihre Daten sind geschützt und bleiben nur bei Ihnen',
    'features.pregnancy_planning': 'Schwangerschaftsplanung',
    'features.pregnancy_desc': 'Tools für Schwangerschaftsplanung oder Verhütung',
    
    // Order Section
    'order.title': 'Beginnen Sie heute mit der Zyklusverfolgung',
    'order.subtitle': 'Schließen Sie sich Tausenden von Frauen an, die bereits Velluna für ihre Gesundheitsverfolgung vertrauen',
    'order.start_free': 'Kostenlos starten',
    'order.download': 'App herunterladen',
    
    // Footer
    'footer.description': 'Ihr persönlicher Assistent für die Verfolgung der Frauengesundheit',
    'footer.features_title': 'Funktionen',
    'footer.support_title': 'Support',
    'footer.legal_title': 'Rechtliches',
    'footer.help': 'Hilfe',
    'footer.contact': 'Kontakt',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  es: {
    // Header
    'header.title': 'Velluna',
    'header.cycle_tracker': 'Rastreador de Ciclo',
    'header.features': 'Características',
    'header.get_started': 'Comenzar',
    'header.start_tracking': 'Comenzar Seguimiento',
    
    // Hero Section
    'hero.title': 'Calendario de Salud',
    'hero.title_highlight': 'Femenina',
    'hero.subtitle': 'Rastreador personal del ciclo femenino para monitorear la menstruación, ovulación y bienestar general. Cuida tu salud inteligentemente.',
    'hero.start_tracking': 'Comenzar Seguimiento',
    'hero.learn_more': 'Saber Más',
    'hero.accurate_tracking': 'Seguimiento Preciso',
    'hero.accurate_desc': 'Predicción del ciclo con precisión',
    'hero.health_first': 'Salud Primero',
    'hero.health_desc': 'Monitorear síntomas y bienestar',
    'hero.ease_of_use': 'Facilidad de Uso',
    'hero.ease_desc': 'Interfaz amigable todos los días',
    
    // Cycle Tracker
    'tracker.title': 'Rastreador de Ciclo',
    'tracker.subtitle': 'Marca los días de menstruación y obtén predicciones precisas',
    'tracker.calendar_title': 'Calendario del Ciclo',
    'tracker.mark_day': 'Marcar Día',
    'tracker.selected_date': 'Fecha seleccionada:',
    'tracker.mark_period': 'Marcar inicio del período',
    'tracker.predictions': 'Predicciones',
    'tracker.next_period': 'Próximo período:',
    'tracker.ovulation': 'Ovulación:',
    'tracker.fertile_window': 'Ventana fértil:',
    'tracker.cycle_length': 'Duración del ciclo:',
    'tracker.cycle_day': 'Día del ciclo:',
    'tracker.welcome': '¡Bienvenida!',
    'tracker.welcome_desc': 'Marca el primer día de tu último período para comenzar el seguimiento',
    
    // Symptom Tracker
    'symptoms.title': 'Diario de Síntomas',
    'symptoms.subtitle': 'Rastrea síntomas y estado de ánimo para entender mejor tu ciclo',
    'symptoms.how_feeling': '¿Cómo te sientes?',
    'symptoms.excellent': 'Excelente',
    'symptoms.normal': 'Normal',
    'symptoms.bad': 'Mal',
    'symptoms.symptoms': 'Síntomas',
    'symptoms.notes': 'Notas',
    'symptoms.notes_placeholder': 'Describe tu bienestar, características del día o cualquier observación...',
    'symptoms.day_summary': 'Resumen del Día',
    'symptoms.mood': 'Estado de ánimo:',
    'symptoms.save_data': 'Guardar Datos del Día',
    
    // Features
    'features.title': 'Características de la App',
    'features.subtitle': 'Todas las herramientas para el seguimiento integral de la salud femenina en una app conveniente y segura.',
    'features.cycle_tracking': 'Seguimiento del Ciclo',
    'features.cycle_desc': 'Mantén un calendario preciso de menstruación, ovulación y días fértiles',
    'features.symptom_analysis': 'Análisis de Síntomas',
    'features.symptom_desc': 'Registra y analiza síntomas, estado de ánimo y bienestar',
    'features.smart_reminders': 'Recordatorios Inteligentes',
    'features.reminders_desc': 'Recibe notificaciones sobre la menstruación próxima y días importantes',
    'features.predictions': 'Predicciones y Estadísticas',
    'features.predictions_desc': 'Predicciones personalizadas basadas en tus datos',
    'features.privacy': 'Privacidad',
    'features.privacy_desc': 'Tus datos están protegidos y permanecen solo contigo',
    'features.pregnancy_planning': 'Planificación del Embarazo',
    'features.pregnancy_desc': 'Herramientas para planificación del embarazo o anticoncepción',
    
    // Order Section
    'order.title': 'Comienza a rastrear tu ciclo hoy',
    'order.subtitle': 'Únete a miles de mujeres que ya confían en Velluna para rastrear su salud',
    'order.start_free': 'Comenzar Gratis',
    'order.download': 'Descargar App',
    
    // Footer
    'footer.description': 'Tu asistente personal para el seguimiento de la salud femenina',
    'footer.features_title': 'Características',
    'footer.support_title': 'Soporte',
    'footer.legal_title': 'Legal',
    'footer.help': 'Ayuda',
    'footer.contact': 'Contacto',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.rights': 'Todos los derechos reservados.',
  },
  ru: {
    // Header
    'header.title': 'Velluna',
    'header.cycle_tracker': 'Трекер цикла',
    'header.features': 'Возможности',
    'header.get_started': 'Начать',
    'header.start_tracking': 'Начать отслеживание',
    
    // Hero Section
    'hero.title': 'Женский календарь',
    'hero.title_highlight': 'здоровья',
    'hero.subtitle': 'Персональный трекер женского цикла для отслеживания менструации, овуляции и общего самочувствия. Заботьтесь о своем здоровье с умом.',
    'hero.start_tracking': 'Начать отслеживание',
    'hero.learn_more': 'Узнать больше',
    'hero.accurate_tracking': 'Точное отслеживание',
    'hero.accurate_desc': 'Прогнозирование цикла с точностью',
    'hero.health_first': 'Здоровье превыше всего',
    'hero.health_desc': 'Мониторинг симптомов и самочувствия',
    'hero.ease_of_use': 'Простота использования',
    'hero.ease_desc': 'Удобный интерфейс каждый день',
    
    // Cycle Tracker
    'tracker.title': 'Трекер цикла',
    'tracker.subtitle': 'Отмечайте дни менструации и получайте точные прогнозы',
    'tracker.calendar_title': 'Календарь цикла',
    'tracker.mark_day': 'Отметить день',
    'tracker.selected_date': 'Выбранная дата:',
    'tracker.mark_period': 'Отметить начало менструации',
    'tracker.predictions': 'Прогнозы',
    'tracker.next_period': 'Следующая менструация:',
    'tracker.ovulation': 'Овуляция:',
    'tracker.fertile_window': 'Фертильное окно:',
    'tracker.cycle_length': 'Длительность цикла:',
    'tracker.cycle_day': 'День цикла:',
    'tracker.welcome': 'Добро пожаловать!',
    'tracker.welcome_desc': 'Отметьте первый день последней менструации для начала отслеживания',
    
    // Symptom Tracker
    'symptoms.title': 'Дневник симптомов',
    'symptoms.subtitle': 'Отслеживайте симптомы и настроение для лучшего понимания своего цикла',
    'symptoms.how_feeling': 'Как вы себя чувствуете?',
    'symptoms.excellent': 'Отлично',
    'symptoms.normal': 'Нормально',
    'symptoms.bad': 'Плохо',
    'symptoms.symptoms': 'Симптомы',
    'symptoms.notes': 'Заметки',
    'symptoms.notes_placeholder': 'Опишите ваше самочувствие, особенности дня или любые наблюдения...',
    'symptoms.day_summary': 'Сводка дня',
    'symptoms.mood': 'Настроение:',
    'symptoms.save_data': 'Сохранить данные дня',
    
    // Features
    'features.title': 'Возможности приложения',
    'features.subtitle': 'Все инструменты для комплексного отслеживания женского здоровья в одном удобном и безопасном приложении.',
    'features.cycle_tracking': 'Отслеживание цикла',
    'features.cycle_desc': 'Ведите точный календарь менструаций, овуляции и фертильных дней',
    'features.symptom_analysis': 'Анализ симптомов',
    'features.symptom_desc': 'Записывайте и анализируйте симптомы, настроение и самочувствие',
    'features.smart_reminders': 'Умные напоминания',
    'features.reminders_desc': 'Получайте уведомления о приближении менструации и важных днях',
    'features.predictions': 'Прогнозы и статистика',
    'features.predictions_desc': 'Персонализированные прогнозы на основе ваших данных',
    'features.privacy': 'Конфиденциальность',
    'features.privacy_desc': 'Ваши данные защищены и остаются только у вас',
    'features.pregnancy_planning': 'Планирование беременности',
    'features.pregnancy_desc': 'Инструменты для планирования беременности или контрацепции',
    
    // Order Section
    'order.title': 'Начните отслеживать свой цикл сегодня',
    'order.subtitle': 'Присоединяйтесь к тысячам женщин, которые уже доверяют Velluna для отслеживания своего здоровья',
    'order.start_free': 'Начать бесплатно',
    'order.download': 'Скачать приложение',
    
    // Footer
    'footer.description': 'Ваш персональный помощник для отслеживания женского здоровья',
    'footer.features_title': 'Возможности',
    'footer.support_title': 'Поддержка',
    'footer.legal_title': 'Правовая информация',
    'footer.help': 'Помощь',
    'footer.contact': 'Контакты',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.rights': 'Все права защищены.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('uk');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};