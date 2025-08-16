const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Femme Calendar
            </h3>
            <p className="text-background/80 leading-relaxed">
              Создаем эксклюзивные женские календари с профессиональными фотографиями 
              и элегантным дизайном.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-background/80">
              <p>📧 info@femme-calendar.ru</p>
              <p>📱 +7 (999) 123-45-67</p>
              <p>📍 Москва, Россия</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <div className="space-y-2 text-background/80">
              <p>• Доставка и оплата</p>
              <p>• Возврат и обмен</p>
              <p>• Публичная оферта</p>
              <p>• Политика конфиденциальности</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Femme Calendar. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;