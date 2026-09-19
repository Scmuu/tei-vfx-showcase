import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import PetalFall from "@/components/PetalFall";
import PricingSection from "@/components/PricingSection";

const Shop = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <PetalFall />
    <CursorTrail />
    <InternalHeader />
    <main className="relative z-10 pt-12">
      <PricingSection />
    </main>
  </div>
);

export default Shop;