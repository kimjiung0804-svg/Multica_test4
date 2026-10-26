"use client";

import { useState } from "react";

const BUDGET_OPTIONS = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Not sure yet",
];

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 bg-indigo-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tell us what you are building
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Share a few details and a senior designer — not a sales rep — will reply
              within one business day with an honest read on fit and next steps.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <dt className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd>
                  <span className="block text-sm font-medium text-slate-500">Email</span>
                  <a href="mailto:hello@enabledesign.io" className="font-semibold text-slate-900 hover:text-indigo-600">
                    hello@enabledesign.io
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-4">
                <dt className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </dt>
                <dd>
                  <span className="block text-sm font-medium text-slate-500">Studio</span>
                  <span className="font-semibold text-slate-900">Seoul · Remote worldwide</span>
                </dd>
              </div>
              <div className="flex items-start gap-4">
                <dt className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </dt>
                <dd>
                  <span className="block text-sm font-medium text-slate-500">Typical kickoff</span>
                  <span className="font-semibold text-slate-900">Within 2 weeks of first call</span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-10">
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">Message received</h3>
                  <p className="mt-3 max-w-md text-slate-600">
                    Thanks for reaching out — a senior designer will get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-6 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input id="contact-name" name="name" type="text" required placeholder="Jane Park" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
                      Work email
                    </label>
                    <input id="contact-email" name="email" type="email" required placeholder="jane@company.com" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-slate-700">
                      Company
                    </label>
                    <input id="contact-company" name="company" type="text" placeholder="Company, Inc." className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="contact-budget" className="mb-2 block text-sm font-medium text-slate-700">
                      Budget range
                    </label>
                    <select id="contact-budget" name="budget" className={inputClasses} defaultValue={BUDGET_OPTIONS[1]}>
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
                      What are you building?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your product, timeline, and what success looks like…"
                      className={inputClasses}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700"
                    >
                      Send message
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500">
                      We reply within one business day. No newsletters, no spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
