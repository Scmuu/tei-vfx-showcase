import { motion } from "framer-motion";

// Add your links here later
const steamArtworks: { title: string; link: string }[] = [];
const tiktokVideos: { title: string; link: string }[] = [];

const Placeholder = ({ label }: { label: string }) => (
  <div className="rounded-lg border border-dashed border-border/50 bg-card/40 p-6 text-center font-body text-sm text-muted-foreground">
    {label} — links coming soon
  </div>
);

const LinkCard = ({ title, link }: { title: string; link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-lg border border-border/40 bg-card/60 p-4 font-body text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
  >
    {title}
  </a>
);

const MyWorkSection = () => {
  return (
    <section id="mywork" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-glow-sm mb-16"
        >
          My <span className="text-primary">Work</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold mb-4 text-primary">Steam Artworks</h3>
            <div className="space-y-3">
              {steamArtworks.length === 0 ? (
                <Placeholder label="Steam Artworks" />
              ) : (
                steamArtworks.map((a) => <LinkCard key={a.link} {...a} />)
              )}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold mb-4 text-primary">TikTok Videos</h3>
            <div className="space-y-3">
              {tiktokVideos.length === 0 ? (
                <Placeholder label="TikTok Videos" />
              ) : (
                tiktokVideos.map((v) => <LinkCard key={v.link} {...v} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
