import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#pricing" },
  { label: "My Work", href: "#mywork" },
  { label: "My Socials", href: "#socials" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/60 backdrop-blur-xl border-b border-border/40"
    >
      <a href="#home" className="font-display text-xl font-bold text-white text-glow-sm tracking-widest">
        TEI
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="https://discord.com/users/1251662595039953036"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-full bg-primary/90 text-primary-foreground font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary transition-all duration-300 box-glow"
      >
        Contact Me
      </a>
    </motion.nav>
  );
};

export default Navbar;
