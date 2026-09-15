import CursorTrail from "@/components/CursorTrail";
import InternalHeader from "@/components/InternalHeader";
import PricingSection from "@/components/PricingSection";

const Shop = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <img src="/red-spider-lilies.jpg" alt="" aria-hidden="true" className="fixed inset-0 h-full w-full scale-105 object-cover blur-[3px]" />
    <div className="fixed inset-0 bg-background/65" aria-hidden="true" />
    <CursorTrail />
    <InternalHeader />
    <main className="relative z-10 pt-12">
      <PricingSection />
    </main>
  </div>
);

export default Shop;