import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import MyWorkSection from "@/components/MyWorkSection";
import SocialsSection from "@/components/SocialsSection";
import CursorTrail from "@/components/CursorTrail";
import centipedeImg from "@/assets/centipede.png";


const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorTrail />
      <Navbar />

      {/* Centipede image on the right side */}
      <img
        src={centipedeImg}
        alt=""
        className="fixed right-0 top-0 h-full w-auto object-cover pointer-events-none z-[5] opacity-100"
        style={{ maxWidth: "350px" }}
      />

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
