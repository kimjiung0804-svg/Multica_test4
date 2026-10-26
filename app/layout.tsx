import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enabledesign.io"),
  title: {
    default: "Enable Design — AI Product Design Consultancy",
    template: "%s | Enable Design",
  },
  description:
    "From idea to validated AI product design — faster, and with confidence. Enable Design pairs senior product designers with AI-accelerated research, prototyping, and validation so you ship the right thing the first time.",
  keywords: [
    "AI product design",
    "product design consultancy",
    "UX research",
    "design validation",
    "rapid prototyping",
    "design systems",
    "copilot UX",
    "Enable Design",
  ],
  authors: [{ name: "Enable Design" }],
  creator: "Enable Design",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.enabledesign.io",
    siteName: "Enable Design",
    title: "Enable Design — AI Product Design Consultancy",
    description:
      "From idea to validated AI product design — faster, and with confidence. Senior designers, AI-accelerated process, evidence before engineering.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Enable Design team running a product design validation workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enable Design — AI Product Design Consultancy",
    description:
      "From idea to validated AI product design — faster, and with confidence.",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
