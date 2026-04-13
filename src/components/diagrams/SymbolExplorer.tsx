"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SymbolPair {
  id: string;
  theme: string;
  ancient: string;
  modern: string;
  origin: string;
}

const SYMBOL_PAIRS: SymbolPair[] = [
  {
    id: "peace",
    theme: "Peace",
    ancient: "Olive branch",
    modern: "Peace sign",
    origin:
      "Both condense the resolution of conflict into a single portable image. The olive branch carries agricultural patience — growth over time. The peace sign abstracts opposition into geometric resolution.",
  },
  {
    id: "authority",
    theme: "Authority",
    ancient: "Sceptre",
    modern: "Judicial gavel",
    origin:
      "Both derive from the hand that holds — the grip that concentrates power into a single directed instrument. The sceptre extends the body into ceremonial space; the gavel compresses authority into a single decisive act.",
  },
  {
    id: "renewal",
    theme: "Renewal",
    ancient: "Phoenix",
    modern: "Recycling symbol",
    origin:
      "Both encode the cycle of destruction and regeneration. The phoenix dramatises it as narrative; the recycling symbol abstracts it as continuous loop. Both resolve the anxiety of ending by embedding return within the form itself.",
  },
  {
    id: "protection",
    theme: "Protection",
    ancient: "Eye of Horus",
    modern: "Red cross",
    origin:
      "Both mark the boundary between threat and safety. The Eye of Horus concentrates vigilance into a single watching form. The red cross marks a zone of care — a spatial declaration that harm is suspended within its boundary.",
  },
  {
    id: "eternity",
    theme: "Eternity",
    ancient: "Ouroboros",
    modern: "Infinity symbol",
    origin:
      "Both resolve the tension of ending by removing it. The ouroboros consumes itself to continue; the infinity symbol traces a path with no terminus. Both make endlessness legible through form.",
  },
  {
    id: "love",
    theme: "Love",
    ancient: "Heart (medieval)",
    modern: "Heart emoji",
    origin:
      "The heart shape condenses the internal sensation of emotional warmth into an external, recognisable form. Its persistence across centuries — from medieval manuscripts to digital communication — demonstrates how effective symbols survive medium changes.",
  },
  {
    id: "protection2",
    theme: "Warding",
    ancient: "Hamsa hand",
    modern: "Digital shield icon",
    origin:
      "Both create a symbolic boundary against threat. The hamsa extends the body's defensive gesture into permanent form. The digital shield abstracts protection into geometric enclosure — the same instinct, compressed into a new medium.",
  },
];

export function SymbolExplorer() {
  const [activeSymbol, setActiveSymbol] = useState<string | null>(null);

  const activeData = activeSymbol
    ? SYMBOL_PAIRS.find((s) => s.id === activeSymbol)
    : null;

  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-2 gap-2">
        {SYMBOL_PAIRS.map((pair, i) => {
          const isActive = activeSymbol === pair.id;
          return (
            <motion.button
              key={pair.id}
              onClick={() =>
                setActiveSymbol(isActive ? null : pair.id)
              }
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "border-human ring-1 ring-human bg-human-bg/50"
                  : "border-border hover:border-human/40 hover:shadow-sm bg-surface"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-1">
                {pair.theme}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-charcoal-light">
                  {pair.ancient}
                </span>
                <svg
                  className="w-3.5 h-3.5 text-human/50 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-charcoal">
                  {pair.modern}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Expanded detail */}
      <AnimatePresence mode="wait">
        {activeData && (
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <div className="rounded-2xl border border-human/30 p-5 bg-human/5">
              <p className="text-xs font-medium text-human uppercase tracking-wider mb-2">
                Structural Origin: {activeData.theme}
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeData.origin}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
