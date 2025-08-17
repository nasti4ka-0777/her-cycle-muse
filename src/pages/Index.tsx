import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CycleTracker from "@/components/CycleTracker";
import SymptomTracker from "@/components/SymptomTracker";
import FeaturesSection from "@/components/FeaturesSection";
import GetStartedSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CycleTracker />
      <SymptomTracker />
      <FeaturesSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Index;
