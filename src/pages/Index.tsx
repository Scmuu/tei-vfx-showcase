import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import SocialsSection from "@/components/SocialsSection";
import CursorTrail from "@/components/CursorTrail";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <StarField />
      <CursorTrail />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <SocialsSection />
      </div>
    </div>
  );
};

export default Index;
