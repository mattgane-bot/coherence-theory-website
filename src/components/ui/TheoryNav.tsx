"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const THEORY_PAGES = [
  { href: "/theory/three-domains", label: "Three Domains" },
  { href: "/theory/governing-conditions", label: "Governing Conditions" },
  { href: "/theory/dynamic-engine", label: "The Dynamic Engine" },
  { href: "/theory/coherence-hierarchy", label: "Coherence Hierarchy" },
  { href: "/theory/centres-to-endurance", label: "Centres to Endurance" },
  { href: "/theory/emergent-centres", label: "Emergent Centres" },
  { href: "/theory/sublimation", label: "Sublimation" },
  { href: "/theory/pattern-languages", label: "Pattern Languages" },
];

export function TheoryNav() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  const currentIndex = THEORY_PAGES.findIndex((p) => p.href === pathname);
  const isTheoryPage = currentIndex !== -1;

  const prev = currentIndex > 0 ? THEORY_PAGES[currentIndex - 1] : null;
  const next =
    currentIndex < THEORY_PAGES.length - 1
      ? THEORY_PAGES[currentIndex + 1]
      : null;

  useEffect(() => {
    if (!isTheoryPage) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTheoryPage, pathname]);

  if (!isTheoryPage) return null;

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-0.5 z-40 origin-left"
        style={{
          background: "linear-gradient(90deg, #D4A853, #C4785B)",
          scaleX: progress,
        }}
      />

      {/* Prev/Next navigation */}
      <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
        {prev ? (
          <Link
            href={prev.href}
            className="flex items-center gap-2 group text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <span className="text-[10px] uppercase tracking-wider">
                Previous
              </span>
              <span className="block text-sm font-medium">{prev.label}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {/* Page indicator */}
        <div className="flex gap-1">
          {THEORY_PAGES.map((page, i) => (
            <Link
              key={page.href}
              href={page.href}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-accent scale-125"
                  : i < currentIndex
                    ? "bg-accent/40"
                    : "bg-border"
              }`}
              title={page.label}
            />
          ))}
        </div>

        {next ? (
          <Link
            href={next.href}
            className="flex items-center gap-2 group text-charcoal-muted hover:text-charcoal transition-colors text-right"
          >
            <div>
              <span className="text-[10px] uppercase tracking-wider">
                Next
              </span>
              <span className="block text-sm font-medium">{next.label}</span>
            </div>
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
