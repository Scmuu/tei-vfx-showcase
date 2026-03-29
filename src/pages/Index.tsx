import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import SocialsSection from "@/components/SocialsSection";
import CursorTrail from "@/components/CursorTrail";
import centipedeImg from "@/assets/centipede.png";
import kuraiImg from "@/assets/Kurai2d.png";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorTrail />
      <Navbar />

      {/* Centipede DESTRA */}
      <img
        src={centipedeImg}
        alt="Centipede"
        className="fixed right-0 top-0 h-full w-auto object-cover pointer-events-none z-[5] opacity-100"
        style={{ maxWidth: "350px" }}
      />

      <div className="relative z-10">
        <HeroSection />
        
        {/* KURAI CENTRATA SOTTO */}
        <section className="w-full py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <img 
              src={kuraiImg} 
              alt="Kurai TEI VFX Rocket League" 
              className="w-full h-auto rounded-3xl shadow-2xl mx-auto block object-contain max-h-[500px]"
            />
          </div>
        </section>
        
        <ServicesSection />
        <PricingSection />
        <SocialsSection />
      </div>
    </div>
  );
};

export default Index;