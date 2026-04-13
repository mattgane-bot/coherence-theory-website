"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ConceptDef {
  term: string;
  definition: string;
  href: string;
}

const CONCEPTS: Record<string, ConceptDef> = {
  coherence: {
    term: "Coherence",
    definition:
      "The condition under which a system can sustain alignment under constraint without exhausting its means.",
    href: "/theory/three-domains",
  },
  entropy: {
    term: "Entropy",
    definition:
      "The tendency of energy to disperse, structure to degrade, and organised relations to weaken unless actively maintained.",
    href: "/theory/governing-conditions",
  },
  energy: {
    term: "Energy",
    definition:
      "Capacity under constraint — the capacity of a system to act, regulate itself, repair damage, and continue over time.",
    href: "/theory/governing-conditions",
  },
  triad: {
    term: "The Generative Triad",
    definition:
      "Energy, symmetry, and opposing forces — the three primary forces that generate, stabilise, and transform organised systems.",
    href: "/theory/governing-conditions",
  },
  centre: {
    term: "Centre",
    definition:
      "A relational condition where structural forces converge so that coherence becomes locally intensified. Not a geometric middle but an event of structure.",
    href: "/theory/centres-to-endurance",
  },
  sublimation: {
    term: "Sublimation",
    definition:
      "The process through which primal instincts are transformed into coherent spatial, social, and cultural form without eliminating the underlying energy.",
    href: "/theory/sublimation",
  },
  endurance: {
    term: "Endurance",
    definition:
      "The capacity of a system to persist through time, adapting while maintaining its essential coherence.",
    href: "/theory/centres-to-endurance",
  },
  wholeness: {
    term: "Wholeness",
    definition:
      "The system functioning as a unified whole that is more than the sum of its parts, with emergent properties from integration.",
    href: "/theory/centres-to-endurance",
  },
  eschermatics: {
    term: "Eschermatics",
    definition:
      "Systems coherent in parts but unable to continue as wholes — every step appears locally correct yet the system cannot sustain itself.",
    href: "/theory/governing-conditions",
  },
  "dynamic-engine": {
    term: "The Dynamic Engine",
    definition:
      "How systems develop through six phases: Translational, Morphogenesis, Emergence, Becoming, Unfolding, Continuous Improvement.",
    href: "/theory/dynamic-engine",
  },
  "pattern-language": {
    term: "Pattern Language",
    definition:
      "A connected set of stable resolutions to recurring energetic problems — configurations proven capable of continuing without exhausting their means.",
    href: "/theory/pattern-languages",
  },
  "symbolic-charge": {
    term: "Symbolic Charge",
    definition:
      "The capacity of a form, place, or object to concentrate meaning, attention, and emotional energy when symbolic structure aligns with perceptual coherence.",
    href: "/theory/centres-to-endurance",
  },
  livingness: {
    term: "Livingness",
    definition:
      "Whether environments support biological life without cumulative strain — light, air, warmth, comfort, orientation, and sensory richness.",
    href: "/theory/coherence-hierarchy",
  },
  congruence: {
    term: "Congruence",
    definition:
      "Multiple centres aligning across scale so their relationships reinforce rather than compete — concentration without domination.",
    href: "/theory/centres-to-endurance",
  },
};

interface Props {
  concept: keyof typeof CONCEPTS;
  children?: React.ReactNode;
}

export function ConceptLink({ concept, children }: Props) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const data = CONCEPTS[concept];

  if (!data) return <>{children || concept}</>;

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShow(true), 300);
  };

  const handleLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShow(false), 200);
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={data.href}
        className="text-accent font-medium border-b border-accent/30 hover:border-accent transition-colors"
      >
        {children || data.term}
      </Link>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-72 p-3 rounded-xl bg-surface border border-border shadow-lg"
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={handleLeave}
          >
            <p className="text-xs font-semibold text-charcoal mb-1">
              {data.term}
            </p>
            <p className="text-xs text-charcoal-light leading-relaxed">
              {data.definition}
            </p>
            <p className="text-[10px] text-accent mt-1.5">
              Click to read more
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
