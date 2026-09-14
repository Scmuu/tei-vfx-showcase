import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import PricingSection from "@/components/PricingSection";

const Shop = () => (
  <div className="min-h-screen bg-background">
    <CursorTrail />
    <InternalHeader />
    <main className="pt-12">
      <PricingSection />
    </main>
  </div>
);

export default Shop;