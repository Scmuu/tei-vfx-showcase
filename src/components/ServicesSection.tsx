import { motion } from "framer-motion";

const services = [
  {
    title: "Video Editing",
    desc: "Montaggi professionali con tagli precisi, sincronizzazione musicale e transizioni fluide per le tue clip migliori.",
    icon: "🎬",
  },
  {
    title: "VFX & Motion Graphics",
    desc: "Effetti visivi avanzati, particle effects e motion graphics che rendono ogni clip unica e cinematografica.",
    icon: "✨",
  },
  {
    title: "Color Correction",
    desc: "Color grading professionale per dare alle tue clip l'atmosfera e il look perfetto.",
    icon: "🎨",
  },
  {
    title: "Quality Enhancements",
    desc: "Miglioramenti di qualità, upscaling e ottimizzazione per un risultato visivamente impeccabile.",
    icon: "💎",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-glow-sm mb-16"
        >
          Cosa <span className="text-primary">Offro</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-6 rounded-xl bg-card/60 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
