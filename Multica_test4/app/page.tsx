import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* About */}
      <section id="about" className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-semibold mb-6 text-center">About Enable Design</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Enable Design System, Inc. delivers AI‑enhanced EDA tools and consulting services that help customers bring innovative chips to market faster and more efficiently.
          </p>
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
      <Footer />
    </div>
  );
}
