import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Video (TikTok)",
    price: "€5 – €10",
    subtitle: "Edited TikTok videos",
    features: ["Color correction", "Transitions", "Music sync", "High quality"],
  },
  {
    name: "Steam Artwork",
    price: "€15",
    subtitle: "Custom Steam Artwork",
    features: ["Custom design", "High quality render", "Personalized style"],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-glow-sm mb-4"
        >
          <span className="text-primary">Shop</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-16 text-lg"
        >
          Choose what you need — starting from €5
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex flex-col p-8 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              <h3 className="font-display text-xl font-semibold mb-1">{tier.name}</h3>
              {tier.subtitle && (
                <p className="text-xs text-muted-foreground font-body mb-3">{tier.subtitle}</p>
              )}
              <p className="font-display text-3xl font-bold text-primary text-glow-sm mb-5">
                {tier.price}
              </p>
              <ul className="flex-1 space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <span className="text-primary mt-0.5">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://discord.gg/2ma6rC7kPt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2.5 rounded-lg font-body text-sm font-semibold uppercase tracking-wider border border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300"
              >
                Order Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
