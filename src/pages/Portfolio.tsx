import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import MyWorkSection from "@/components/MyWorkSection";
import PetalFall from "@/components/PetalFall";

const Portfolio = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <PetalFall />
    <CursorTrail />
    <InternalHeader />
    <main className="relative z-10 pt-12">
      <MyWorkSection />
    </main>
  </div>
);

export default Portfolio;