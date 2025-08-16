import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: "1",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заказ отправлен!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения заказа.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="order" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Оформить заказ
          </h2>
          <p className="text-xl text-muted-foreground">
            Заполните форму ниже, и мы свяжемся с вами для подтверждения заказа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order form */}
          <Card className="shadow-elegant border-0 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-foreground">
                Данные для заказа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Адрес доставки *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Количество</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий к заказу</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50"
                    rows={3}
                    placeholder="Особые пожелания или вопросы..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Оформить заказ
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Price and details */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-heading font-bold mb-2">
                  2,990 ₽
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  за календарь
                </p>
                <div className="space-y-2 text-sm opacity-80">
                  <p>✓ Бесплатная доставка по РФ</p>
                  <p>✓ Подарочная упаковка включена</p>
                  <p>✓ Гарантия качества</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft border-0">
              <CardContent className="p-8">
                <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Условия заказа
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Оплата при получении или онлайн</p>
                  <p>• Доставка 3-5 рабочих дней</p>
                  <p>• Возможен самовывоз из Москвы</p>
                  <p>• Скидка 10% при заказе от 3 штук</p>
                  <p>• Возврат в течение 14 дней</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/20 border-accent/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  🎁 Специальное предложение
                </h4>
                <p className="text-muted-foreground">
                  При заказе до конца месяца — дополнительный мини-календарь в подарок!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;