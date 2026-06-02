import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import MyWorkSection from "@/components/MyWorkSection";
import SocialsSection from "@/components/SocialsSection";
import CursorTrail from "@/components/CursorTrail";



const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorTrail />
      <Navbar />


      <div className="relative z-10">
        <HeroSection />
        <PricingSection />
        <MyWorkSection />
        <SocialsSection />
      </div>
    </div>
  );
};


export default Index;
