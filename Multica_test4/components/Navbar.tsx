import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-800 py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Enable Design</h1>
        <ul className="flex space-x-6">
          <li><Link href="#hero" className="hover:underline">Product</Link></li>
          <li><Link href="#services" className="hover:underline">Solution</Link></li>
          <li><Link href="#about" className="hover:underline">Company</Link></li>
          <li><Link href="#contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
