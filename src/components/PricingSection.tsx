import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Base Edit",
    price: "€5 – €7",
    features: ["Simple editing", "Cutting clips", "Music sync", "Basic transitions"],
    popular: false,
  },
  {
    name: "Edit + Color Correction",
    price: "€7 – €9",
    subtitle: "No Quality Enhancements",
    features: ["Simple editing", "Light color correction"],
    popular: false,
  },
  {
    name: "Edit + Quality Enhancements",
    price: "€8 – €11",
    subtitle: "No Color Correction",
    features: ["Simple editing", "Basic quality improvements"],
    popular: false,
  },
  {
    name: "Full Light",
    price: "€10 – €13",
    subtitle: "Edit + Color Correction + Quality Enhancements",
    features: ["Simple editing", "Basic color correction", "Basic quality enhancements"],
    popular: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-glow-sm mb-4"
        >
          Listino <span className="text-primary">Prezzi</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-16 text-lg"
        >
          Rocket League Edits — a partire da €5
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative flex flex-col p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                tier.popular
                  ? "border-primary/60 bg-primary/10 box-glow"
                  : "border-border/40 bg-card/60 hover:border-primary/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display uppercase tracking-wider">
                  Popolare
                </span>
              )}
              <h3 className="font-display text-base font-semibold mb-1">{tier.name}</h3>
              {tier.subtitle && (
                <p className="text-xs text-muted-foreground font-body mb-3">{tier.subtitle}</p>
              )}
              <p className="font-display text-2xl font-bold text-primary text-glow-sm mb-5">
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
                href="#socials"
                className={`text-center py-2.5 rounded-lg font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary/30 text-foreground hover:bg-primary/10"
                }`}
              >
                Ordina Ora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
