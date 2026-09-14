import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import MyWorkSection from "@/components/MyWorkSection";

const Portfolio = () => (
  <div className="min-h-screen bg-background">
    <CursorTrail />
    <InternalHeader />
    <main className="pt-12">
      <MyWorkSection />
    </main>
  </div>
);

export default Portfolio;