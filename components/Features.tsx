import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Stakeholder interviews, analytics review, and AI-assisted market scans surface the opportunities worth designing for.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Senior designers explore directions in high fidelity from day one — no wireframe purgatory, no throwaway work.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Real users test clickable prototypes every week. Concepts are scored against success criteria before you commit budget.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Token-based design systems and production-ready front-ends mean engineering starts from working code, not redlines.",
  },
];

const CHECKLIST = [
  "Weekly validation loops with real users",
  "Model-aware UX patterns for AI features",
  "Accessibility baked into every component",
  "Measurable success criteria per release",
];

export function Features() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy + checklist */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Why Enable Design
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A validation-first way to build AI products
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Most teams validate after they build. We flip the order — so the design
              you approve already has user evidence behind it, and engineering starts
              with confidence instead of questions.
            </p>
            <ul className="mt-8 space-y-4">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 flex-none text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-100 to-indigo-50"
            />
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=880&h=660&q=80"
              alt="Enable Design team reviewing prototype validation results"
              width={880}
              height={660}
              className="relative rounded-2xl border border-slate-200 object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <span className="text-5xl font-extrabold text-indigo-200">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
