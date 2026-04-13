"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CoherenceType {
  id: string;
  name: string;
  domain: "inorganic" | "organic" | "human";
  domainLabel: string;
  color: string;
  bgColor: string;
  summary: string;
  evaluates: string;
  examples: string;
  failureMode: string;
}

const COHERENCE_TYPES: CoherenceType[] = [
  {
    id: "aesthetic-structural",
    name: "Aesthetic / Structural",
    domain: "inorganic",
    domainLabel: "Inorganic",
    color: "#6B7B8D",
    bgColor: "#EDF1F5",
    summary:
      "Physical form, geometry, proportion, and material organisation fit together in a stable and well-resolved way.",
    evaluates:
      "Whether the physical structure resolves forces, balances proportions, and creates legible spatial relationships.",
    examples:
      "A well-proportioned room, a structurally elegant bridge, a crystal lattice, a balanced facade.",
    failureMode:
      "Structure collapses, proportions feel wrong, forms conflict rather than resolve.",
  },
  {
    id: "dynamic",
    name: "Dynamic",
    domain: "inorganic",
    domainLabel: "Inorganic \u2192 Organic bridge",
    color: "#5A7365",
    bgColor: "#EDF5F0",
    summary:
      "Energy, forces, and movement are balanced and resolved through flow, rhythm, and process over time.",
    evaluates:
      "Whether energy flows, circulates, and resolves rather than stagnating, overloading, or dissipating.",
    examples:
      "A river finding equilibrium, traffic flowing through a city, seasonal rhythms in an ecosystem.",
    failureMode:
      "Energy stagnates or overwhelms. Movement becomes chaotic, blocked, or exhausting.",
  },
  {
    id: "connection-nature",
    name: "Connection to Nature",
    domain: "organic",
    domainLabel: "Organic \u2192 Human bridge",
    color: "#4A6741",
    bgColor: "#EDF5EC",
    summary:
      "Human systems are integrated with natural systems, cycles, and landscapes.",
    evaluates:
      "Whether the system participates in natural cycles, ecological processes, and sensory connection to the living world.",
    examples:
      "Buildings that respond to sunlight and seasons, settlements that integrate with landscapes, gardens and courtyards.",
    failureMode:
      "Environments sealed from nature. Loss of daylight, vegetation, natural materials, seasonal awareness.",
  },
  {
    id: "livingness",
    name: "Livingness",
    domain: "human",
    domainLabel: "Human",
    color: "#C4785B",
    bgColor: "#FDF3EF",
    summary:
      "The environment supports human biological comfort, health, and the feeling of being alive and at ease in a place.",
    evaluates:
      "Whether the environment supports basic human needs — light, air, warmth, shelter, comfort, orientation, and sensory richness.",
    examples:
      "A home that feels warm and restful, a workplace with natural light, a street with human-scaled proportions.",
    failureMode:
      "Spaces that drain energy, cause discomfort, or feel hostile to the body. Fluorescent corridors, windowless offices.",
  },
  {
    id: "societal",
    name: "Societal",
    domain: "human",
    domainLabel: "Human",
    color: "#B06848",
    bgColor: "#FDF0EB",
    summary:
      "The environment supports stable social interaction, roles, cooperation, and collective life.",
    evaluates:
      "Whether the system enables people to gather, communicate, cooperate, and maintain social bonds over time.",
    examples:
      "A village square, a well-designed workplace, a neighbourhood with shared spaces, an institution with clear governance.",
    failureMode:
      "Social isolation, breakdown of trust, spaces that prevent gathering or fragment communities.",
  },
  {
    id: "symbolic",
    name: "Symbolic",
    domain: "human",
    domainLabel: "Human",
    color: "#9B5A45",
    bgColor: "#FCEEE8",
    summary:
      "Meaning, memory, identity, and cultural continuity are expressed and stabilised in form and practice.",
    evaluates:
      "Whether the system carries cultural meaning, collective memory, and shared identity across generations.",
    examples:
      "A cathedral, a war memorial, a traditional market, a civic building, a ritual landscape.",
    failureMode:
      "Places without memory or meaning. Generic environments that could be anywhere. Cultural amnesia.",
  },
];

export function CoherenceHierarchyDiagram() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [disabledTypes, setDisabledTypes] = useState<Set<string>>(new Set());

  const activeData = activeType
    ? COHERENCE_TYPES.find((t) => t.id === activeType)
    : null;

  const toggleDisabled = (id: string) => {
    const next = new Set(disabledTypes);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setDisabledTypes(next);
  };

  const enabledCount = COHERENCE_TYPES.length - disabledTypes.size;

  return (
    <div className="w-full">
      {/* Stacked layers */}
      <div className="space-y-2">
        {[...COHERENCE_TYPES].reverse().map((type, i) => {
          const isDisabled = disabledTypes.has(type.id);
          const isActive = activeType === type.id;

          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-stretch gap-2"
            >
              {/* Toggle button */}
              <button
                onClick={() => toggleDisabled(type.id)}
                className={`w-8 h-8 shrink-0 rounded-lg border flex items-center justify-center transition-all self-center ${
                  isDisabled
                    ? "border-border bg-surface-raised"
                    : "border-transparent"
                }`}
                style={
                  !isDisabled
                    ? { backgroundColor: type.color + "20", borderColor: type.color + "40" }
                    : undefined
                }
                title={isDisabled ? "Enable" : "Disable"}
              >
                {isDisabled ? (
                  <svg className="w-4 h-4 text-charcoal-muted" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-14.5-14.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" style={{ color: type.color }} viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {/* Layer bar */}
              <button
                onClick={() => setActiveType(isActive ? null : type.id)}
                className={`flex-1 px-4 py-3 rounded-xl border text-left transition-all ${
                  isDisabled ? "opacity-30" : ""
                } ${
                  isActive
                    ? "ring-1"
                    : "hover:shadow-sm"
                }`}
                style={{
                  borderColor: isActive ? type.color : type.color + "30",
                  backgroundColor: isActive ? type.bgColor : type.color + "06",
                  ...(isActive ? { ringColor: type.color } : {}),
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="font-medium text-sm text-charcoal">
                      {type.name}
                    </span>
                  </div>
                  <span className="text-xs text-charcoal-muted">
                    {type.domainLabel}
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted mt-1 ml-[22px] line-clamp-1">
                  {type.summary}
                </p>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Viability indicator */}
      <div className="mt-4 p-4 rounded-xl border border-border bg-surface-raised">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-charcoal-muted uppercase tracking-wider">
            System Viability
          </span>
          <span className="text-xs text-charcoal-muted">
            {enabledCount} / {COHERENCE_TYPES.length} types active
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-border overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{
              width: `${(enabledCount / COHERENCE_TYPES.length) * 100}%`,
              backgroundColor:
                enabledCount >= 5
                  ? "#4A6741"
                  : enabledCount >= 3
                    ? "#D4A853"
                    : "#C4785B",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-xs text-charcoal-muted mt-2">
          {enabledCount === 6
            ? "Full coherence — all domains aligned. The system can endure."
            : enabledCount >= 4
              ? "Partial coherence — the system functions but is vulnerable where types are missing."
              : enabledCount >= 2
                ? "Weak coherence — significant misalignment. The system will require increasing effort to maintain."
                : "Critical failure — the system cannot sustain itself."}
        </p>
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
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: activeData.color + "40",
                backgroundColor: activeData.color + "08",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                  style={{ backgroundColor: activeData.color }}
                />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {activeData.name} Coherence
                  </h3>
                  <p className="text-charcoal-light mt-1 text-sm leading-relaxed">
                    {activeData.summary}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-surface">
                  <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-1">
                    Evaluates
                  </p>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {activeData.evaluates}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-surface">
                  <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-1">
                    Examples
                  </p>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {activeData.examples}
                  </p>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-lg bg-surface border border-human/10">
                <p className="text-xs font-medium text-human uppercase tracking-wider mb-1">
                  When it fails
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {activeData.failureMode}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
