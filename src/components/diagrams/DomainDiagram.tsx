"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Domain = "inorganic" | "organic" | "human";

interface DomainLayer {
  id: string;
  label: string;
  inorganic: string;
  organic: string;
  human: string;
  y: number;
}

const LAYERS: DomainLayer[] = [
  {
    id: "governing",
    label: "Governing Conditions",
    inorganic: "Energy, entropy, gradient, order, constraint acting on matter and force",
    organic: "Same physical laws, plus metabolic energy gradients across membranes",
    human: "Same laws, plus economic energy, social gradients, cultural constraints",
    y: 0,
  },
  {
    id: "properties",
    label: "Intrinsic Properties",
    inorganic: "Material strength, geometry, gravity, thermodynamics",
    organic: "Biological structure, genetic encoding, cellular organisation",
    human: "Built form, institutional structure, social organisation, symbolic systems",
    y: 1,
  },
  {
    id: "emergence",
    label: "What Emerges",
    inorganic: "Crystals, rivers, mountains, weather systems, planetary structure",
    organic: "Cells, organisms, ecosystems, species, biological networks",
    human: "Buildings, cities, institutions, cultural practices, economies",
    y: 2,
  },
  {
    id: "engine",
    label: "Dynamic Engine",
    inorganic: "Formation, erosion, equilibrium, geological change over time",
    organic: "Growth, maturation, adaptation, evolution, ecological succession",
    human: "Construction, social formation, cultural deepening, renovation, renewal",
    y: 3,
  },
  {
    id: "coherence-types",
    label: "Types of Coherence",
    inorganic: "Structural coherence + Dynamic coherence",
    organic: "Structural + Dynamic coherence (metabolism, homeostasis)",
    human: "Structural + Dynamic + Livingness + Societal + Symbolic + Connection to Nature",
    y: 4,
  },
  {
    id: "persistence",
    label: "How It Persists",
    inorganic: "Stability — resolved forces maintain structure passively",
    organic: "Metabolism and reproduction — active self-maintenance",
    human: "Maintenance and cultural transmission — continuous human effort",
    y: 5,
  },
  {
    id: "failure",
    label: "If Coherence Fails",
    inorganic: "Structure collapses, erodes, or dissipates",
    organic: "Organism becomes ill, dies, or species goes extinct",
    human: "System becomes dysfunctional, abandoned, or requires unsustainable effort",
    y: 6,
  },
];

const DOMAIN_CONFIG: Record<Domain, { color: string; bg: string; border: string; label: string; icon: string }> = {
  inorganic: {
    color: "#6B7B8D",
    bg: "#EDF1F5",
    border: "#A8B5C2",
    label: "Inorganic",
    icon: "Structure must hold",
  },
  organic: {
    color: "#4A6741",
    bg: "#EDF5EC",
    border: "#8BAF84",
    label: "Organic",
    icon: "The organism must live",
  },
  human: {
    color: "#C4785B",
    bg: "#FDF3EF",
    border: "#DCAA96",
    label: "Human",
    icon: "The system must remain liveable",
  },
};

export function DomainDiagram() {
  const [activeDomain, setActiveDomain] = useState<Domain>("human");
  const [compareMode, setCompareMode] = useState(false);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const config = DOMAIN_CONFIG[activeDomain];

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {(Object.keys(DOMAIN_CONFIG) as Domain[]).map((domain) => {
          const dc = DOMAIN_CONFIG[domain];
          return (
            <button
              key={domain}
              onClick={() => {
                setActiveDomain(domain);
                setCompareMode(false);
              }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeDomain === domain && !compareMode ? dc.color : dc.bg,
                color: activeDomain === domain && !compareMode ? "#fff" : dc.color,
                border: `1.5px solid ${dc.border}`,
              }}
            >
              {dc.label}
            </button>
          );
        })}
        <div className="w-px h-6 bg-border mx-1" />
        <button
          onClick={() => setCompareMode(!compareMode)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
            compareMode
              ? "bg-charcoal text-cream border-charcoal"
              : "bg-surface-raised text-charcoal-muted border-border hover:text-charcoal"
          }`}
        >
          Compare All
        </button>
      </div>

      {/* Single domain view */}
      {!compareMode && (
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Domain header */}
              <div
                className="rounded-2xl p-5 mb-6 text-center"
                style={{ backgroundColor: config.bg, border: `1.5px solid ${config.border}` }}
              >
                <div
                  className="w-4 h-4 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: config.color }}
                />
                <h3 className="font-serif text-xl font-semibold" style={{ color: config.color }}>
                  {config.label} Systems
                </h3>
                <p className="text-sm mt-1" style={{ color: config.color }}>
                  {config.icon}
                </p>
              </div>

              {/* Layers */}
              {LAYERS.map((layer, i) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border p-4 transition-all cursor-default"
                  style={{
                    borderColor: hoveredLayer === layer.id ? config.border : "#E5E0DB",
                    backgroundColor: hoveredLayer === layer.id ? config.bg : "#FFFFFF",
                  }}
                  onMouseEnter={() => setHoveredLayer(layer.id)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: config.color, opacity: 0.6 }}
                    />
                    <div>
                      <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-1">
                        {layer.label}
                      </p>
                      <p className="text-sm text-charcoal-light leading-relaxed">
                        {layer[activeDomain]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Connecting arrows */}
              <div className="flex justify-center mt-4">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                  <path d="M12 0v32M6 26l6 8 6-8" stroke={config.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div
                className="rounded-xl border-2 p-4 text-center"
                style={{ borderColor: config.color, backgroundColor: config.bg }}
              >
                <p className="text-sm font-semibold" style={{ color: config.color }}>
                  {activeDomain === "inorganic"
                    ? "Coherence allows structure to persist"
                    : activeDomain === "organic"
                      ? "Coherence allows life to persist"
                      : "Coherence allows societies and cultures to persist"}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Compare mode */}
      {compareMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-charcoal-muted text-xs uppercase tracking-wider w-[140px]">
                    Aspect
                  </th>
                  {(Object.keys(DOMAIN_CONFIG) as Domain[]).map((d) => {
                    const dc = DOMAIN_CONFIG[d];
                    return (
                      <th key={d} className="text-left py-3 px-4" style={{ backgroundColor: dc.bg }}>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dc.color }} />
                          <span className="font-semibold text-sm" style={{ color: dc.color }}>
                            {dc.label}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {LAYERS.map((layer) => (
                  <tr key={layer.id} className="border-t border-border">
                    <td className="py-3 px-4 font-medium text-charcoal text-xs uppercase tracking-wider align-top">
                      {layer.label}
                    </td>
                    {(Object.keys(DOMAIN_CONFIG) as Domain[]).map((d) => (
                      <td key={d} className="py-3 px-4 text-charcoal-light leading-relaxed align-top">
                        {layer[d]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
