import Link from "next/link";

const SERVICE_LINKS = [
  "Product Discovery",
  "UX Research & Validation",
  "AI Product Design",
  "Rapid Prototyping",
  "Design Systems",
];

const COMPANY_LINKS = [
  { href: "#work", label: "Case Studies" },
  { href: "#process", label: "Our Process" },
  { href: "#logos", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-sm font-bold text-white">
                E
              </span>
              <span className="text-lg font-bold tracking-tight text-white">Enable Design</span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
              From idea to validated AI product design — faster, and with confidence.
              Senior designers, AI-accelerated process, evidence before engineering.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enable Design on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-indigo-600 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enable Design on X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-indigo-600 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enable Design on Dribbble"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-indigo-600 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m-8.91 6h17.82M3.09 15h17.82" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link href="#services" className="text-slate-400 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-slate-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:hello@enabledesign.io" className="text-slate-400 transition hover:text-white">
                  hello@enabledesign.io
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Enable Design System, Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Designed with evidence, shipped with confidence.</p>
        </div>
      </div>
    </footer>
  );
}
