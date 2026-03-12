const partners = [
  { name: "UltraTech Cement", logo: "https://www.bhuvi.space/ultratechlogo.png" },
  { name: "JSW Steel", logo: "https://www.bhuvi.space/jsw.png" },
  { name: "ACC Cement", logo: "https://www.bhuvi.space/acc.png" },
  { name: "Jaquar", logo: "https://www.bhuvi.space/jaq.png" },
  { name: "Kajaria", logo: "https://www.bhuvi.space/kajaria.png" },
  { name: "Schneider Electric", logo: "https://www.bhuvi.space/Schneider.jpg" },
  { name: "Astral", logo: "https://www.bhuvi.space/astral.png" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container text-center mb-10">
        <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase font-semibold">
          Our Trusted Partners
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-16 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
