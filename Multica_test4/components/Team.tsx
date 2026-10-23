import { Card } from "./Card";

const team = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    img: "https://picsum.photos/seed/t1/200/200",
  },
  {
    name: "John Smith",
    role: "Lead Engineer",
    img: "https://picsum.photos/seed/t2/200/200",
  },
  {
    name: "Alice Lee",
    role: "Product Designer",
    img: "https://picsum.photos/seed/t3/200/200",
  },
];

export function Team() {
  return (
    <section id="team" className="container mx-auto py-16 px-4">
      <h3 className="text-3xl font-semibold text-center mb-12">Our Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
            <h4 className="text-xl font-bold">{member.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
