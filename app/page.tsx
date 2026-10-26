import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Services />
        <Portfolio />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
