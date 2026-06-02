import { motion } from "framer-motion";
import pfp from '../assets/pfp.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] border border-primary/10 rounded-full animate-orbit" />
        <div className="absolute w-[800px] h-[500px] border border-primary/5 rounded-full animate-orbit" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
      </div>

      {/* Glow blob */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* Profile picture placeholder */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-6"
      >
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary/50 bg-secondary flex items-center justify-center box-glow overflow-hidden">
          <img
            src={pfp}
            alt="TEI Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 font-display text-7xl md:text-9xl font-black tracking-wider text-glow"
      >
        <span className="text-white">T</span>
        <span className="text-white">E</span>
        <span className="text-white">I</span>
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 w-48 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent my-6"
      />

      {/* Description */}
    <motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.0 }}
  className="relative z-10 font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
>
  VFX / SMM & Video Editor specializing in{" "}
  <span className="text-primary font-semibold">Rocket League</span>.
  <br />
  Lead SMM for <span className="font-semibold text-foreground">Kurai & StarCore</span>.
</motion.p>
      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10 flex gap-4 mt-8"
      >
        <a
          href="#pricing"
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base uppercase tracking-wider hover:brightness-110 transition-all duration-300 box-glow"
        >
          Shop
        </a>
        <a
          href="#mywork"
          className="px-8 py-3 rounded-lg border border-primary/40 text-foreground font-body font-semibold text-base uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
        >
          My Work
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
