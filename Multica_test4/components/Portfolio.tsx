import { Card } from "./Card";

const projects = [
  {
    title: "AI‑Driven Chip Design",
    description: "A high‑performance AI‑enabled design flow for low‑power chips.",
    img: "https://picsum.photos/seed/p1/400/300",
  },
  {
    title: "Custom EDA Platform",
    description: "Tailored environment integrating proprietary tools and workflows.",
    img: "https://picsum.photos/seed/p2/400/300",
  },
  {
    title: "Training Suite",
    description: "Comprehensive training modules for engineering teams.",
    img: "https://picsum.photos/seed/p3/400/300",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto py-16 px-4">
      <h3 className="text-3xl font-semibold text-center mb-12">Our Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <Card title={p.title} description={p.description} />
          </div>
        ))}
      </div>
    </section>
  );
}
