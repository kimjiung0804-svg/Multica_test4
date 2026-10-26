const SERVICES = [
  {
    title: "Product Discovery",
    description:
      "Turn a raw idea into a sharp product thesis. We map users, jobs-to-be-done, and market gaps so every design decision has evidence behind it.",
    tags: ["Opportunity mapping", "Product strategy", "Roadmapping"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0l3.75-3.75M12 3v3.75m0 10.5v-3.75m9-5.25h-3.75M6.75 12H3m13.03-5.03l-2.65 2.65m-4.76 4.76l-2.65 2.65"
      />
    ),
  },
  {
    title: "UX Research & Validation",
    description:
      "AI-assisted interviews, usability tests, and concept scoring that de-risk your roadmap before a single line of production code is written.",
    tags: ["User interviews", "Usability testing", "Concept scoring"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    title: "AI Product Design",
    description:
      "Copilots, agents, and intelligent workflows designed around trust. We craft model-aware UX patterns that make AI feel capable, not confusing.",
    tags: ["Copilot UX", "Agent workflows", "Trust patterns"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    ),
  },
  {
    title: "Rapid Prototyping",
    description:
      "High-fidelity, clickable prototypes in days — powered by our AI design pipeline — so stakeholders and users can react to something real.",
    tags: ["Clickable prototypes", "Design sprints", "Demo-ready builds"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
  {
    title: "Design Systems",
    description:
      "Token-based component libraries that scale with your team. Accessible, documented, and ready for engineers to ship consistently.",
    tags: ["Design tokens", "Component libraries", "Accessibility"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    ),
  },
  {
    title: "Design Engineering",
    description:
      "Production-ready front-ends in React and Next.js. We hand engineers pixel-perfect, performant UI — not static pictures of software.",
    tags: ["React / Next.js", "Design-to-code", "Performance"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to go from idea to validated design
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            One senior team across strategy, research, design, and front-end — no
            hand-offs lost in translation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
