import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehiret Abdissa — Junior AI Developer & Prompt Engineer",
  description:
    "Entry-level AI developer focused on prompt engineering, LLM integration, and human-centered AI applications.",
  metadataBase: new URL("https://milli-portfolio.vercel.app"),
  openGraph: {
    title: "Mehiret Abdissa — Junior AI Developer & Prompt Engineer",
    description:
      "Entry-level AI developer focused on prompt engineering, LLM integration, and human-centered AI applications.",
    url: "https://milli-portfolio.vercel.app",
    siteName: "Mehiret Abdissa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehiret Abdissa — Junior AI Developer & Prompt Engineer",
    description:
      "Entry-level AI developer focused on prompt engineering, LLM integration, and human-centered AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
