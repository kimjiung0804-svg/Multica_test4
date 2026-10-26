"use client";

import Image from "next/image";
import { useState } from "react";

const CATEGORIES = ["All", "AI Product", "SaaS", "Mobile", "Enterprise"] as const;
type Category = (typeof CATEGORIES)[number];

interface CaseStudy {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  imageAlt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Pulse AI",
    category: "AI Product",
    description:
      "A clinical triage copilot that drafts intake summaries for care teams, designed around human-in-the-loop review.",
    metric: "-41%",
    metricLabel: "intake time per patient",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Pulse AI clinical triage dashboard preview",
  },
  {
    title: "Orbit Commerce",
    category: "SaaS",
    description:
      "B2B storefront redesign with AI-powered merchandising and a self-serve checkout flow for procurement teams.",
    metric: "+38%",
    metricLabel: "trial-to-paid activation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Orbit Commerce storefront interface preview",
  },
  {
    title: "Nestbank Mobile",
    category: "Mobile",
    description:
      "A consumer banking app rebuilt around one-thumb navigation and proactive, explainable money insights.",
    metric: "4.8★",
    metricLabel: "App Store rating after relaunch",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Nestbank mobile banking app preview",
  },
  {
    title: "Helix Cloud Console",
    category: "Enterprise",
    description:
      "A unified operations console for a cloud infrastructure platform serving 2,000+ enterprise engineering teams.",
    metric: "-52%",
    metricLabel: "time-to-task for core flows",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Helix cloud operations console preview",
  },
  {
    title: "Aria Support Copilot",
    category: "AI Product",
    description:
      "An agent-assist experience that drafts, cites, and escalates — cutting handle time while keeping agents in control.",
    metric: "+27%",
    metricLabel: "CSAT within one quarter",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "Aria support copilot workspace preview",
  },
  {
    title: "FleetIQ",
    category: "SaaS",
    description:
      "Logistics visibility platform with predictive ETAs and exception-based workflows for dispatch teams.",
    metric: "3.1x",
    metricLabel: "faster exception resolution",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&h=600&q=80",
    imageAlt: "FleetIQ logistics dashboard preview",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const visible =
    active === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === active);

  return (
    <section id="work" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Case Studies
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Work that shipped — and moved the numbers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every engagement ends with a validated, production-ready design. Filter by
            the kind of product you are building.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter case studies by category"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === category
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "border border-slate-300 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case study grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((study) => (
            <article
              key={study.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm">
                  {study.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
                  <span className="text-2xl font-bold text-indigo-600">{study.metric}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500">{study.metricLabel}</p>
                <p className="mt-3 leading-relaxed text-slate-600">{study.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
