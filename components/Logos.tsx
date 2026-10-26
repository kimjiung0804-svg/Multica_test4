const LOGOS = [
  { name: "VOLTIC", className: "font-black italic tracking-tight" },
  { name: "NeuraCore", className: "font-bold tracking-tight" },
  { name: "OrbitLabs", className: "font-semibold lowercase tracking-wide" },
  { name: "HELIOS", className: "font-extrabold tracking-[0.2em]" },
  { name: "Stratum", className: "font-bold tracking-tight" },
  { name: "Quantia", className: "font-semibold italic tracking-tight" },
];

export function Logos() {
  return (
    <section id="logos" className="border-y border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by product teams at
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((logo) => (
            <span
              key={logo.name}
              className={`text-xl text-slate-400 transition hover:text-slate-600 sm:text-2xl ${logo.className}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
