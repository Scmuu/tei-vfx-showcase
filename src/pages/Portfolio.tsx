import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import MyWorkSection from "@/components/MyWorkSection";

const Portfolio = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <img src="/red-spider-lilies.jpg" alt="" aria-hidden="true" className="fixed inset-0 h-full w-full scale-105 object-cover blur-[3px]" />
    <div className="fixed inset-0 bg-background/65" aria-hidden="true" />
    <CursorTrail />
    <InternalHeader />
    <main className="relative z-10 pt-12">
      <MyWorkSection />
    </main>
  </div>
);

export default Portfolio;