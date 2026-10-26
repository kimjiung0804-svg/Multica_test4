import Link from "next/link";

const STATS = [
  { value: "120+", label: "AI products designed" },
  { value: "94%", label: "Concepts validated pre-build" },
  { value: "40M+", label: "End users reached" },
  { value: "6 wks", label: "Idea to validated design" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white"
    >
      {/* Decorative background pattern — kept behind content (z-0), headline sits above (z-10) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
            AI Product Design Consultancy
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            From idea to validated AI product design — faster, and with confidence.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Enable Design pairs senior product designers with AI-accelerated research,
            prototyping, and validation — so you ship the right thing the first time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="w-full rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700 sm:w-auto"
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="w-full rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 sm:w-auto"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm"
            >
              <dt className="order-2 mt-1 block text-sm text-slate-500">{stat.label}</dt>
              <dd className="order-1 text-3xl font-bold text-indigo-600">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
