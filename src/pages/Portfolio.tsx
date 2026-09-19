import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import MyWorkSection from "@/components/MyWorkSection";

const Portfolio = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="petals-background fixed inset-0" aria-hidden="true" />
    <CursorTrail />
    <InternalHeader />
    <main className="relative z-10 pt-12">
      <MyWorkSection />
    </main>
  </div>
);

export default Portfolio;