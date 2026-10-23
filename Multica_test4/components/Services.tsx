import { Card } from "./Card";

const services = [
  {
    title: "AI‑based EDA Tool Development",
    description: "High‑performance, low‑power chips built with AI‑driven design flows.",
  },
  {
    title: "Consulting & Training",
    description: "Expert guidance and hands‑on training for your engineering teams.",
  },
  {
    title: "Custom EDA Environments",
    description: "Tailored platforms that integrate seamlessly with your workflow.",
  },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto py-16 px-4">
      <h3 className="text-3xl font-semibold text-center mb-12">Our Solutions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <Card key={s.title} title={s.title} description={s.description} />
        ))}
      </div>
    </section>
  );
}
