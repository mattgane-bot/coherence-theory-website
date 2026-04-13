"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Pattern {
  id: string;
  name: string;
  category: "process" | "form";
  domain: "inorganic" | "organic" | "human";
  summary: string;
  detail: string;
  connects: string[];
}

const PATTERNS: Pattern[] = [
  {
    id: "threshold",
    name: "Threshold",
    category: "form",
    domain: "human",
    summary: "Marking the boundary between inside and outside, known and unknown.",
    detail:
      "A threshold is not merely a doorway but a spatial event that marks transition. It modulates the energy of movement — compressing passage, heightening awareness, and signalling change of domain. Effective thresholds create a moment of pause that prepares the body for what follows.",
    connects: ["enclosure", "procession", "centre"],
  },
  {
    id: "enclosure",
    name: "Enclosure",
    category: "form",
    domain: "inorganic",
    summary: "Bounded space that creates shelter, focus, and containment.",
    detail:
      "Enclosure transforms open space into defined place. It modulates energy by containing it — reducing dispersal, increasing concentration, and creating conditions where activity can gather and stabilise. The degree of enclosure shapes the character of the space within.",
    connects: ["threshold", "centre", "courtyard"],
  },
  {
    id: "centre",
    name: "Centre",
    category: "form",
    domain: "inorganic",
    summary: "A point of convergence where forces, attention, and activity gather.",
    detail:
      "Centres emerge where multiple spatial relationships converge. They organise surrounding space by providing a point of reference — a place where energy settles rather than passes through. Strong centres anchor the identity of a place.",
    connects: ["enclosure", "axis", "courtyard"],
  },
  {
    id: "axis",
    name: "Axis",
    category: "form",
    domain: "inorganic",
    summary: "A line of force that organises movement and orientation.",
    detail:
      "An axis gives direction to space. It creates legibility by establishing a primary line along which elements are organised. Axes can be strong (a formal avenue) or subtle (a sight-line through rooms), but they always guide the body's understanding of spatial structure.",
    connects: ["centre", "procession", "gradient"],
  },
  {
    id: "courtyard",
    name: "Courtyard",
    category: "form",
    domain: "human",
    summary: "An enclosed outdoor space that mediates between building and sky.",
    detail:
      "The courtyard combines enclosure with openness — bounded on sides but open above. It creates a protected microclimate, brings light and air into the heart of buildings, and provides a shared social space. It is one of the most persistent patterns across cultures.",
    connects: ["enclosure", "centre", "gradient"],
  },
  {
    id: "gradient",
    name: "Gradient",
    category: "form",
    domain: "organic",
    summary: "Gradual transition between contrasting conditions.",
    detail:
      "Gradients modulate energy by distributing change across space rather than concentrating it at a single boundary. Public to private, light to dark, open to enclosed — gradients prevent abrupt transitions that jar the body and fragment spatial experience.",
    connects: ["threshold", "axis", "courtyard"],
  },
  {
    id: "procession",
    name: "Procession",
    category: "process",
    domain: "human",
    summary: "Staged movement through space that accumulates meaning.",
    detail:
      "Processional sublimation transforms instinctive movement into symbolic journey. Compression followed by expansion, concealment followed by revelation — the sequence of spatial events creates a narrative that the body reads through movement. Borobudur, the Camino, and the cathedral nave all employ this pattern.",
    connects: ["threshold", "axis", "sequence"],
  },
  {
    id: "sequence",
    name: "Sequence",
    category: "process",
    domain: "organic",
    summary: "Ordered succession of events or spaces that builds experience.",
    detail:
      "Sequence is the temporal dimension of form. A well-sequenced environment reveals itself progressively — each step alters perspective and prepares the next. Serial vision, the unfolding of a garden path, and the structure of ritual all depend on sequence to create depth.",
    connects: ["procession", "gradient", "rhythm"],
  },
  {
    id: "rhythm",
    name: "Rhythm",
    category: "process",
    domain: "inorganic",
    summary: "Regular recurrence that creates temporal and spatial order.",
    detail:
      "Rhythm organises energy through repetition — columns, arches, seasons, tides, heartbeats. It provides the predictability that allows the nervous system to settle and the mind to project forward. Without rhythm, experience becomes fragmented and exhausting.",
    connects: ["sequence", "scaling", "adaptation"],
  },
  {
    id: "scaling",
    name: "Scaling",
    category: "process",
    domain: "organic",
    summary: "How patterns repeat and transform across different scales.",
    detail:
      "Coherent systems exhibit similar patterns at multiple scales — the detail echoes the room, the room echoes the building, the building echoes the settlement. This scalar coherence creates legibility and depth. It is not exact repetition but thematic consistency.",
    connects: ["rhythm", "centre", "adaptation"],
  },
  {
    id: "adaptation",
    name: "Adaptation",
    category: "process",
    domain: "organic",
    summary: "How patterns adjust to local conditions while maintaining identity.",
    detail:
      "Patterns are not rigid templates but flexible responses. The same pattern — courtyard, threshold, axis — takes different form in different climates, cultures, and materials. Adaptation is what allows patterns to endure: they change enough to remain viable without losing their essential structure.",
    connects: ["scaling", "rhythm", "repair"],
  },
  {
    id: "repair",
    name: "Repair",
    category: "process",
    domain: "human",
    summary: "Restoring and maintaining coherence through ongoing adjustment.",
    detail:
      "No system maintains coherence without repair. Repair is not restoration to an original state but ongoing adjustment that keeps the system viable under changing conditions. Environments that are easy to repair endure; those that resist repair accumulate damage until they fail.",
    connects: ["adaptation", "rhythm"],
  },
];

type ViewFilter = "all" | "form" | "process";

export function PatternLanguageNetwork() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const [filter, setFilter] = useState<ViewFilter>("all");

  const filteredPatterns =
    filter === "all"
      ? PATTERNS
      : PATTERNS.filter((p) => p.category === filter);

  const activeData = activePattern
    ? PATTERNS.find((p) => p.id === activePattern)
    : null;

  const connectedIds = activeData ? activeData.connects : [];

  return (
    <div className="w-full">
      {/* Filter */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {(["all", "form", "process"] as const).map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setActivePattern(null);
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-inorganic text-white"
                : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
            }`}
          >
            {f === "all" ? "All Patterns" : f === "form" ? "Form" : "Process"}
          </button>
        ))}
      </div>

      {/* Pattern grid */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {filteredPatterns.map((pattern, i) => {
          const isActive = activePattern === pattern.id;
          const isConnected = connectedIds.includes(pattern.id);
          const domainColor =
            pattern.domain === "inorganic"
              ? "#6B7B8D"
              : pattern.domain === "organic"
                ? "#4A6741"
                : "#C4785B";

          return (
            <motion.button
              key={pattern.id}
              onClick={() =>
                setActivePattern(isActive ? null : pattern.id)
              }
              className={`px-3 py-2 rounded-xl border text-left transition-all ${
                isActive
                  ? "ring-1 shadow-sm"
                  : isConnected
                    ? "shadow-sm"
                    : activePattern && !isConnected
                      ? "opacity-40"
                      : "hover:shadow-sm"
              }`}
              style={{
                borderColor: isActive
                  ? domainColor
                  : isConnected
                    ? domainColor + "60"
                    : domainColor + "25",
                backgroundColor: isActive
                  ? domainColor + "15"
                  : isConnected
                    ? domainColor + "08"
                    : "transparent",
                ...(isActive ? { ringColor: domainColor } : {}),
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 shrink-0 ${
                    pattern.category === "form" ? "rounded-full" : "rounded-sm"
                  }`}
                  style={{ backgroundColor: domainColor }}
                />
                <span className="text-sm font-medium text-charcoal">
                  {pattern.name}
                </span>
              </div>
              <p className="text-[10px] text-charcoal-muted mt-0.5 ml-4">
                {pattern.category} &middot; {pattern.domain}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mb-4 text-xs text-charcoal-muted">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-charcoal-muted" />
          <span>Form pattern</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-sm bg-charcoal-muted" />
          <span>Process pattern</span>
        </div>
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
            className="overflow-hidden"
          >
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor:
                  (activeData.domain === "inorganic"
                    ? "#6B7B8D"
                    : activeData.domain === "organic"
                      ? "#4A6741"
                      : "#C4785B") + "40",
                backgroundColor:
                  (activeData.domain === "inorganic"
                    ? "#6B7B8D"
                    : activeData.domain === "organic"
                      ? "#4A6741"
                      : "#C4785B") + "08",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-3 h-3 shrink-0 mt-1.5 ${
                    activeData.category === "form"
                      ? "rounded-full"
                      : "rounded-sm"
                  }`}
                  style={{
                    backgroundColor:
                      activeData.domain === "inorganic"
                        ? "#6B7B8D"
                        : activeData.domain === "organic"
                          ? "#4A6741"
                          : "#C4785B",
                  }}
                />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    {activeData.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    {activeData.category} pattern &middot; {activeData.domain}{" "}
                    domain
                  </p>
                </div>
              </div>

              <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                {activeData.detail}
              </p>

              {activeData.connects.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-charcoal-muted">
                    Connects to:
                  </span>
                  {activeData.connects.map((cId) => {
                    const connected = PATTERNS.find((p) => p.id === cId);
                    if (!connected) return null;
                    return (
                      <button
                        key={cId}
                        onClick={() => setActivePattern(cId)}
                        className="text-xs px-2 py-0.5 rounded-full border border-border bg-surface hover:border-accent transition-colors text-charcoal"
                      >
                        {connected.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
