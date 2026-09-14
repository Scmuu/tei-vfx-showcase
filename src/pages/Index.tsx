import CursorTrail from "@/components/CursorTrail";
import SocialLinks from "@/components/SocialLinks";
import backgroundVideo from "@/assets/background.mp4.asset.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden bg-background">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={backgroundVideo.url}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-background/65" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-1/2 bg-gradient-to-t from-background via-background/35 to-transparent" />
      <CursorTrail />
      <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-28 pt-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex max-w-3xl flex-col items-center"
        >
          <h1 className="font-display text-7xl text-foreground text-glow sm:text-8xl md:text-9xl">TEI</h1>
          <p className="mt-5 max-w-2xl font-body text-lg font-medium leading-relaxed text-foreground/85 md:text-xl">
            VFX / SMM &amp; Video Editor specializing in <span className="text-primary">Rocket League</span>.
            <br />SMM Lead for Kurai &amp; SMM for Freez.
          </p>
          <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <Link to="/portfolio" className="border border-primary bg-primary px-8 py-4 font-display text-lg text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-1">
              Portfolio
            </Link>
            <Link to="/shop" className="border border-foreground/50 bg-background/40 px-8 py-4 font-display text-lg text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary">
              Shop
            </Link>
          </div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-7">
          <SocialLinks />
        </div>
      </section>
    </main>
  );
};
export default Index;
