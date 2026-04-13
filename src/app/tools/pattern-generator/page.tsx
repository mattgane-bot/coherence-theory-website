"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Pattern {
  name: string;
  type: "form" | "process";
  description: string;
  relevance: string;
}

interface DomainOption {
  id: string;
  label: string;
  color: string;
}

interface ContextOption {
  id: string;
  label: string;
}

interface ConstraintOption {
  id: string;
  label: string;
}

const DOMAINS: DomainOption[] = [
  { id: "inorganic", label: "Inorganic", color: "#6B7B8D" },
  { id: "organic", label: "Organic", color: "#4A6741" },
  { id: "human", label: "Human", color: "#C4785B" },
];

const CONTEXTS: ContextOption[] = [
  { id: "building", label: "Building / Interior" },
  { id: "settlement", label: "Settlement / Neighbourhood" },
  { id: "landscape", label: "Landscape / Ecology" },
  { id: "institution", label: "Institution / Organisation" },
  { id: "public-space", label: "Public Space" },
];

const CONSTRAINTS: ConstraintOption[] = [
  { id: "low-energy", label: "Low energy available" },
  { id: "high-density", label: "High density" },
  { id: "heritage", label: "Heritage / existing fabric" },
  { id: "climate", label: "Climate adaptation" },
  { id: "social-fragmentation", label: "Social fragmentation" },
  { id: "loss-of-meaning", label: "Loss of meaning / identity" },
];

function generatePatterns(
  domain: string,
  context: string,
  constraints: string[]
): Pattern[] {
  const patterns: Pattern[] = [];

  // Core patterns always relevant
  patterns.push({
    name: "Centre",
    type: "form",
    description:
      "Create a clear point of convergence where forces, attention, and activity gather. Every coherent system needs at least one strong centre.",
    relevance: "Universal — required for any coherent system.",
  });

  // Domain-specific patterns
  if (domain === "inorganic") {
    patterns.push({
      name: "Structural Resolution",
      type: "form",
      description:
        "Ensure physical forces are balanced and resolved through geometry, proportion, and material. Structure should express rather than conceal how it works.",
      relevance: "Foundation of all physical coherence.",
    });
    patterns.push({
      name: "Rhythm",
      type: "process",
      description:
        "Establish regular recurrence — in columns, openings, materials, or spatial intervals — that creates predictability and allows the nervous system to settle.",
      relevance: "Essential for spatial legibility in the inorganic domain.",
    });
  }

  if (domain === "organic") {
    patterns.push({
      name: "Gradient",
      type: "form",
      description:
        "Create gradual transitions between contrasting conditions — public to private, light to dark, enclosed to open — rather than abrupt boundaries.",
      relevance: "Supports ecological and biological integration.",
    });
    patterns.push({
      name: "Natural Integration",
      type: "form",
      description:
        "Incorporate natural materials, vegetation, water, daylight, and seasonal change as fundamental structural elements, not decoration.",
      relevance: "Bridges inorganic structure to living systems.",
    });
    patterns.push({
      name: "Adaptation",
      type: "process",
      description:
        "Design for ongoing adjustment to changing conditions — seasonal, climatic, ecological. The system must be able to change without losing identity.",
      relevance: "Core process for organic domain endurance.",
    });
  }

  if (domain === "human") {
    patterns.push({
      name: "Threshold",
      type: "form",
      description:
        "Create meaningful transitions between domains — not just doors but spatial events that compress, heighten awareness, and signal change.",
      relevance: "Sublimation of boundary instinct into spatial form.",
    });
    patterns.push({
      name: "Enclosure",
      type: "form",
      description:
        "Provide bounded spaces that create shelter, focus, and containment. Vary the degree of enclosure to shape the character of different spaces.",
      relevance: "Addresses the primal Human Condition of refuge.",
    });
    patterns.push({
      name: "Procession",
      type: "process",
      description:
        "Stage movement as meaningful journey — compression then expansion, concealment then revelation — so that spatial experience accumulates meaning.",
      relevance: "Processional sublimation — transforms movement into meaning.",
    });
  }

  // Context-specific patterns
  if (context === "building") {
    patterns.push({
      name: "Courtyard",
      type: "form",
      description:
        "An enclosed outdoor space that mediates between building and sky. Brings light, air, and nature into the heart of the building while creating shared social space.",
      relevance: "One of the most persistent cross-cultural building patterns.",
    });
    patterns.push({
      name: "Axis",
      type: "form",
      description:
        "Establish primary lines of spatial organisation that guide movement and create legibility. Axes can be formal or subtle, but they must be felt.",
      relevance: "Organises building-scale spatial experience.",
    });
  }

  if (context === "settlement") {
    patterns.push({
      name: "Scaling",
      type: "process",
      description:
        "Ensure patterns repeat coherently at multiple scales — detail to room, room to building, building to street, street to district. Each scale echoes the others.",
      relevance: "Creates settlement-level legibility and depth.",
    });
    patterns.push({
      name: "Sequence",
      type: "process",
      description:
        "Design the experience of moving through the settlement as a sequence of spatial events — views revealed, spaces compressed and expanded, landmarks discovered.",
      relevance: "Gordon Cullen's serial vision — coherence through progression.",
    });
  }

  if (context === "landscape") {
    patterns.push({
      name: "Ecological Layering",
      type: "form",
      description:
        "Organise landscape in distinct but interconnected layers — canopy, understorey, ground cover, root zone, water — each supporting the others.",
      relevance: "Mirrors natural ecosystem structure.",
    });
  }

  if (context === "institution") {
    patterns.push({
      name: "Governance Clarity",
      type: "process",
      description:
        "Make decision-making processes legible and accessible. Institutional coherence requires that roles, responsibilities, and channels of communication are clear.",
      relevance: "Societal coherence at institutional scale.",
    });
  }

  if (context === "public-space") {
    patterns.push({
      name: "Edge Activation",
      type: "form",
      description:
        "Animate the edges of public spaces with activity — seating, entrances, stalls, planting — so that the space is defined by life rather than void.",
      relevance: "Centres form at edges where activity concentrates.",
    });
  }

  // Constraint-specific patterns
  if (constraints.includes("low-energy")) {
    patterns.push({
      name: "Energy Conservation",
      type: "process",
      description:
        "Minimise ongoing energy requirements through passive design, natural ventilation, thermal mass, and durable materials that age well rather than deteriorate.",
      relevance: "The survival of the most energy-efficient.",
    });
  }

  if (constraints.includes("heritage")) {
    patterns.push({
      name: "Repair",
      type: "process",
      description:
        "Work with existing fabric through ongoing adjustment rather than replacement. Add layers that respect existing structure while addressing current needs.",
      relevance: "Continuous improvement — maintaining coherence through change.",
    });
  }

  if (constraints.includes("social-fragmentation")) {
    patterns.push({
      name: "Gathering Space",
      type: "form",
      description:
        "Create spaces specifically designed for unplanned encounter and social interaction — not programmed events but conditions where community can emerge.",
      relevance: "Addresses societal coherence through spatial provision.",
    });
  }

  if (constraints.includes("loss-of-meaning")) {
    patterns.push({
      name: "Symbolic Anchoring",
      type: "process",
      description:
        "Introduce or restore elements that carry cultural memory, mark shared identity, and connect present use to deeper meaning — materials, forms, names, rituals.",
      relevance: "Rebuilds symbolic coherence through deliberate sublimation.",
    });
  }

  if (constraints.includes("climate")) {
    patterns.push({
      name: "Climate Responsiveness",
      type: "form",
      description:
        "Orient, shape, and material the system to work with local climate rather than against it — sun paths, prevailing winds, rainfall, temperature ranges.",
      relevance: "Dynamic coherence — energy resolved through environmental fit.",
    });
  }

  if (constraints.includes("high-density")) {
    patterns.push({
      name: "Vertical Layering",
      type: "form",
      description:
        "Distribute functions and experiences vertically, creating distinct spatial characters at different levels while maintaining connection between them.",
      relevance: "Addresses density while preserving spatial coherence.",
    });
  }

  return patterns;
}

export default function PatternGeneratorPage() {
  const [domain, setDomain] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [constraints, setConstraints] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const toggleConstraint = (id: string) => {
    const next = new Set(constraints);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setConstraints(next);
  };

  const canGenerate = domain && context;
  const patterns = showResults
    ? generatePatterns(domain, context, Array.from(constraints))
    : [];

  const domainData = DOMAINS.find((d) => d.id === domain);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl font-semibold text-charcoal mb-2">
          Pattern Generator
        </h1>
        <p className="text-charcoal-light leading-relaxed mb-8">
          Select a domain, context, and constraints to generate relevant
          patterns from Coherence Theory. These are starting points — patterns
          must always be adapted to local conditions.
        </p>

        {/* Domain */}
        <div className="mb-6">
          <label className="text-sm font-medium text-charcoal mb-3 block">
            1. Primary Domain
          </label>
          <div className="flex gap-2">
            {DOMAINS.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setDomain(d.id);
                  setShowResults(false);
                }}
                className={`flex-1 px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                  domain === d.id ? "text-white" : "border-border bg-surface hover:border-charcoal-muted text-charcoal"
                }`}
                style={
                  domain === d.id
                    ? { backgroundColor: d.color, borderColor: d.color }
                    : undefined
                }
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Context */}
        <div className="mb-6">
          <label className="text-sm font-medium text-charcoal mb-3 block">
            2. Context
          </label>
          <div className="flex flex-wrap gap-2">
            {CONTEXTS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setContext(c.id);
                  setShowResults(false);
                }}
                className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                  context === c.id
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-border bg-surface hover:border-charcoal-muted text-charcoal"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div className="mb-8">
          <label className="text-sm font-medium text-charcoal mb-3 block">
            3. Active Constraints (optional)
          </label>
          <div className="flex flex-wrap gap-2">
            {CONSTRAINTS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  toggleConstraint(c.id);
                  setShowResults(false);
                }}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  constraints.has(c.id)
                    ? "border-accent bg-accent-bg text-accent"
                    : "border-border bg-surface hover:border-charcoal-muted text-charcoal-muted"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Generate */}
        <button
          onClick={() => setShowResults(true)}
          disabled={!canGenerate}
          className={`w-full py-3 rounded-xl text-sm font-medium transition-all ${
            canGenerate
              ? "bg-charcoal text-white hover:bg-charcoal-light"
              : "bg-border text-charcoal-muted cursor-not-allowed"
          }`}
        >
          Generate Patterns
        </button>

        {/* Results */}
        <AnimatePresence>
          {showResults && patterns.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 border-t border-border pt-8"
            >
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                Recommended Patterns
              </h2>
              <p className="text-sm text-charcoal-muted mb-6">
                {patterns.length} patterns for{" "}
                <strong style={{ color: domainData?.color }}>
                  {domainData?.label}
                </strong>{" "}
                domain in{" "}
                <strong>{CONTEXTS.find((c) => c.id === context)?.label}</strong>{" "}
                context
                {constraints.size > 0 &&
                  ` with ${constraints.size} constraint${constraints.size > 1 ? "s" : ""}`}
                .
              </p>

              <div className="space-y-3">
                {patterns.map((pattern, i) => (
                  <motion.div
                    key={pattern.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="p-4 rounded-xl border border-border bg-surface"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-2 h-2 shrink-0 ${
                          pattern.type === "form"
                            ? "rounded-full"
                            : "rounded-sm"
                        }`}
                        style={{
                          backgroundColor: domainData?.color || "#8A8480",
                        }}
                      />
                      <span className="text-sm font-medium text-charcoal">
                        {pattern.name}
                      </span>
                      <span className="text-[10px] text-charcoal-muted px-1.5 py-0.5 rounded bg-surface-raised">
                        {pattern.type}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-1.5">
                      {pattern.description}
                    </p>
                    <p className="text-xs text-charcoal-muted italic">
                      {pattern.relevance}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Link to theory */}
              <div className="mt-6 p-4 rounded-xl border border-accent/30 bg-accent-bg">
                <p className="text-sm text-charcoal-light">
                  These patterns are derived from Coherence Theory.{" "}
                  <Link
                    href="/theory/pattern-languages"
                    className="text-accent font-medium hover:text-accent/80"
                  >
                    Read about Pattern Languages
                  </Link>{" "}
                  to understand how patterns connect, adapt, and compose into
                  coherent wholes.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
