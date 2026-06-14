import { motion } from "framer-motion";

// Add your links here later
const steamArtworks: { title: string; link: string }[] = [
  {
    title: "Shiiya SteamArtwork",
    link: "https://steamcommunity.com/profiles/76561198323604528",
  },
   {
    title: "Pkchuz SteamArtwork",
    link: "https://steamcommunity.com/id/pkchuzrll",
  },
   {
    title: "Samu SteamArtwork",
    link: "https://steamcommunity.com/id/vSamu",
  },
   {
    title: "Aksith SteamArtwork",
    link: "https://steamcommunity.com/profiles/76561198340708093",
  },
  {
    title: "Tei SteamArtwork",
    link: "https://steamcommunity.com/id/teiiii_/",
  },
  {
    title: "D1vi SteamArtwork",
    link: "https://steamcommunity.com/id/d1vii",
  },
];
const tiktokVideos: { title: string; link: string }[] = [
  {
    title: "Team Raiko Video",
    link: "https://www.tiktok.com/@team_raiko/video/7645291823958740257?is_from_webapp=1&sender_device=pc",
  },
  {
    title: "Team Kurai Video",
    link: "https://www.tiktok.com/@team_kurai/video/7634166471358352663?is_from_webapp=1&sender_device=pc",
  },
   {
    title: "Team Exyr Video",
    link: "https://www.tiktok.com/@team_exyr/video/7615323788502191382?is_from_webapp=1&sender_device=pc",
  },
  {
  title: "Zoft Video 1",
  link: "https://www.tiktok.com/@zoftrl/video/7643815609632902421?is_from_webapp=1&sender_device=pc",
},
{
  title: "Zoft Video 2",
  link: "https://www.tiktok.com/@zoftrl/video/7584890754129022228?is_from_webapp=1&sender_device=pc",
},
{
  title: "Dip Video",
  link: "https://www.tiktok.com/@il_dip/video/7631189991858752790?is_from_webapp=1&sender_device=pc",
},
{
  title: "Freezie Video 1",
  link: "https://www.tiktok.com/@freezie.rl/video/7620067259892911382?is_from_webapp=1&sender_device=pc",
},
{
  title: "Freezie Video 2",
  link: "https://www.tiktok.com/@freezie.rl/video/7615747326262529302?is_from_webapp=1&sender_device=pc",
},
{
  title: "Kikko Video",
  link: "https://www.tiktok.com/@kikkorl34/video/7613152506335546646?is_from_webapp=1&sender_device=pc",
},
{
  title: "Team Raiko Video 2",
  link: "https://vm.tiktok.com/ZNRcsnX1x/",
},
{
  title: "Freezie Video 3",
  link: "https://vm.tiktok.com/ZNRcG1FT7/",
},
{
  title: "Dip Video 2",
  link: "https://vm.tiktok.com/ZNRcso7FU/",
},
];

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
