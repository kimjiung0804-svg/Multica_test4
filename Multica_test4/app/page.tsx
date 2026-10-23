import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gray-50 dark:bg-gray-800 py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Enable Design</h1>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center bg-gray-100 dark:bg-gray-800 py-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-6">AI‑Powered EDA Solutions</h2>
          <p className="text-lg mb-8">Accelerate your chip design workflow with intelligent automation and custom tools.</p>
          <Link href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Get in Touch</Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">Our Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
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
          ].map((s) => (
            <div key={s.title} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h4 className="text-xl font-bold mb-3">{s.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-semibold mb-6 text-center">About Enable Design</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">Enable Design System, Inc. delivers AI‑enhanced EDA tools and consulting services that help customers bring innovative chips to market faster and more efficiently.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700" />
          <input type="email" placeholder="Email" required className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700" />
          <textarea placeholder="Message" rows={4} required className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 py-6 mt-auto">
        <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Enable Design System, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}
