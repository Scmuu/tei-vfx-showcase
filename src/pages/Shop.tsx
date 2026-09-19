import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import PricingSection from "@/components/PricingSection";

const Shop = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="petals-background fixed inset-0" aria-hidden="true" />
    <CursorTrail />
    <InternalHeader />
    <main className="relative z-10 pt-12">
      <PricingSection />
    </main>
  </div>
);

export default Shop;