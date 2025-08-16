import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PreviewSection from "@/components/PreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PreviewSection />
      <FeaturesSection />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
