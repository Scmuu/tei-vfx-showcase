import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Video (TikTok)",
    price: "€5 – €10",
    subtitle: "Edited TikTok videos",
    features: ["Cutting & sync", "Transitions", "Music sync", "Ready to post"],
    popular: true,
  },
  {
    name: "Steam Artwork",
    price: "€15",
    subtitle: "Custom Steam Artwork",
    features: ["Custom design", "High quality render", "Personalized style"],
    popular: false,
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
              className={`relative flex flex-col p-8 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                tier.popular
                  ? "border-primary/60 bg-primary/10 box-glow"
                  : "border-border/40 bg-card/60 hover:border-primary/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display uppercase tracking-wider">
                  Popular
                </span>
              )}
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
                className={`text-center py-2.5 rounded-lg font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary/30 text-foreground hover:bg-primary/10"
                }`}
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
