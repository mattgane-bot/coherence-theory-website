"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import glossaryData from "@/data/glossary.json";

const domainLabels: Record<string, { label: string; color: string }> = {
  core: { label: "Core", color: "bg-accent" },
  governing: { label: "Governing Conditions", color: "bg-inorganic" },
  process: { label: "Process", color: "bg-accent" },
  structure: { label: "Structure", color: "bg-organic" },
  evaluation: { label: "Evaluation", color: "bg-charcoal-muted" },
  human: { label: "Human", color: "bg-human" },
  application: { label: "Application", color: "bg-inorganic" },
  quality: { label: "Quality", color: "bg-organic" },
};

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return glossaryData.terms.filter((term) => {
      const matchesSearch =
        !search ||
        term.term.toLowerCase().includes(search.toLowerCase()) ||
        term.definition.toLowerCase().includes(search.toLowerCase());
      const matchesDomain = !activeDomain || term.domain === activeDomain;
      return matchesSearch && matchesDomain;
    });
  }, [search, activeDomain]);

  const domains = useMemo(() => {
    const unique = new Set(glossaryData.terms.map((t) => t.domain));
    return Array.from(unique).sort();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-4xl font-semibold text-charcoal mb-3">
          Glossary
        </h1>
        <p className="text-charcoal-light mb-8 max-w-2xl">
          Key terms and concepts from Coherence Theory. Each term describes a
          specific condition, process, or relationship within the framework.
        </p>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-muted"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDomain(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !activeDomain
                  ? "bg-charcoal text-cream"
                  : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
              }`}
            >
              All
            </button>
            {domains.map((domain) => {
              const info = domainLabels[domain] || {
                label: domain,
                color: "bg-charcoal-muted",
              };
              return (
                <button
                  key={domain}
                  onClick={() =>
                    setActiveDomain(activeDomain === domain ? null : domain)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeDomain === domain
                      ? "bg-charcoal text-cream"
                      : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {info.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms */}
        <div className="space-y-4">
          {filteredTerms.map((term, i) => {
            const info = domainLabels[term.domain] || {
              label: term.domain,
              color: "bg-charcoal-muted",
            };
            return (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="p-5 rounded-xl border border-border bg-surface hover:border-border-dark transition-colors"
                id={term.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal">
                      {term.term}
                    </h3>
                    <p className="text-sm text-charcoal-light mt-1 leading-relaxed">
                      {term.definition}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${info.color}`}
                  >
                    {info.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredTerms.length === 0 && (
          <p className="text-center text-charcoal-muted py-12">
            No terms found matching your search.
          </p>
        )}
      </motion.div>
    </div>
  );
}
