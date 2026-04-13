"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  {
    href: "/theory",
    label: "Theory",
    children: [
      { href: "/theory/three-domains", label: "Three Domains" },
      { href: "/theory/governing-conditions", label: "Governing Conditions" },
      { href: "/theory/dynamic-engine", label: "The Dynamic Engine" },
      { href: "/theory/coherence-hierarchy", label: "Coherence Hierarchy" },
      { href: "/theory/centres-to-endurance", label: "Centres to Endurance" },
      { href: "/theory/sublimation", label: "Sublimation" },
      { href: "/theory/pattern-languages", label: "Pattern Languages" },
      { href: "/theory/emergent-centres", label: "Emergent Centres" },
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
  {
    href: "/tools",
    label: "Tools",
    children: [
      { href: "/tools/evaluation", label: "19-Step Evaluation" },
      { href: "/tools/pattern-generator", label: "Pattern Generator" },
      { href: "/tools/coherence-assessment", label: "Coherence Assessment" },
    ],
  },
  { href: "/glossary", label: "Glossary" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <span className="font-serif text-lg font-semibold text-charcoal hidden sm:block">
            Coherence Theory
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.children[0].href}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "text-charcoal bg-surface-raised"
                        : "text-charcoal-muted hover:text-charcoal hover:bg-surface-raised"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-surface rounded-xl border border-border shadow-lg py-2 min-w-[220px]"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? "text-charcoal bg-surface-raised"
                                : "text-charcoal-muted hover:text-charcoal hover:bg-surface-raised"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-charcoal bg-surface-raised"
                    : "text-charcoal-muted hover:text-charcoal hover:bg-surface-raised"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-charcoal-muted hover:text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden bg-cream"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.children ? item.children[0].href : item.href}
                    className="block px-3 py-2 rounded-lg text-sm text-charcoal-muted hover:text-charcoal hover:bg-surface-raised"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-1.5 rounded-lg text-xs text-charcoal-muted hover:text-charcoal hover:bg-surface-raised"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
