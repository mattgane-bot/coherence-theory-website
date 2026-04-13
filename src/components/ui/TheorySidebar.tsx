"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const theoryPages = [
  { href: "/theory/three-domains", label: "Three Domains", domain: "all" },
  { href: "/theory/governing-conditions", label: "Governing Conditions", domain: "governing" },
  { href: "/theory/dynamic-engine", label: "The Dynamic Engine", domain: "process" },
  { href: "/theory/coherence-hierarchy", label: "Coherence Hierarchy", domain: "evaluation" },
  { href: "/theory/centres-to-endurance", label: "Centres to Endurance", domain: "structure" },
  { href: "/theory/sublimation", label: "Sublimation", domain: "human" },
  { href: "/theory/pattern-languages", label: "Pattern Languages", domain: "application" },
  { href: "/theory/emergent-centres", label: "Emergent Centres", domain: "human" },
];

const domainColors: Record<string, string> = {
  all: "bg-accent",
  governing: "bg-inorganic",
  process: "bg-accent",
  evaluation: "bg-charcoal-muted",
  structure: "bg-organic",
  human: "bg-human",
  application: "bg-inorganic",
};

export function TheorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <nav className="sticky top-20 space-y-1">
        <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-3 px-3">
          Theory
        </p>
        {theoryPages.map((page) => {
          const isActive = pathname === page.href;
          return (
            <Link
              key={page.href}
              href={page.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-surface-raised text-charcoal font-medium"
                  : "text-charcoal-muted hover:text-charcoal hover:bg-surface-raised"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${domainColors[page.domain]} ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              />
              {page.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
