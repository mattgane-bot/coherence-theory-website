import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coherence Theory — How Structure, Energy, and Meaning Align",
  description:
    "Explore the dynamic interplay of tension, form, and meaning in space, culture, and perception. An interactive guide to understanding how organised systems endure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${crimsonPro.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-charcoal-muted">
            <p>Coherence Theory &copy; {new Date().getFullYear()}</p>
            <p className="font-serif italic">
              What survives is what can continue without exhausting its means.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
