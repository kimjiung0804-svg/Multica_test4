import Link from "next/link";

export function Intro() {
  return (
    <section id="intro" className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Enable Design System, Inc.</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          We provide AI‑enhanced EDA tools and consulting services that help customers bring innovative chips to market faster and more efficiently.
        </p>
      </div>
    </section>
  );
}
