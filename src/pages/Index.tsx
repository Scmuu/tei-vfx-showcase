import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import SocialsSection from "@/components/SocialsSection";
import CursorTrail from "@/components/CursorTrail";
import centipedeImg from "@/assets/centipede.png";
import kuraiImg from "@/assets/kurai.jpg";

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
        <ServicesSection />
        <PricingSection />
        <SocialsSection />
        
        {/* KURAI FONDO CENTRATA */}
        <section className="w-full py-24 bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <img 
              src={kuraiImg} 
              alt="Kurai TEI VFX" 
              className="w-full h-auto rounded-3xl shadow-2xl mx-auto block max-h-[600px] object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;