import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onuchukwu Joseph Chimezie | AI & Data Science",
  description:
    "Portfolio of Onuchukwu Joseph Chimezie — AI, machine learning, and data science research. Case studies in deep learning, statistical analysis, and applied intelligent systems.",
  keywords: [
    "AI",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Portfolio",
    "PhD",
    "Research",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <ParticleBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
