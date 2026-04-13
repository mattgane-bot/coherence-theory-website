"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TriadVertex {
  id: "energy" | "symmetry" | "opposingForces";
  label: string;
  role: string;
  description: string;
  inorganic: string;
  organic: string;
  human: string;
  color: string;
  x: number;
  y: number;
}

const VERTICES: TriadVertex[] = [
  {
    id: "energy",
    label: "Energy",
    role: "Drives change",
    description:
      "The capacity that allows systems to form, act, repair, regulate, and respond to disturbance. Energy enables structure to arise, relations to stabilise, and coherence to become possible.",
    inorganic: "Kinetic energy of flowing water, thermal energy from the sun, gravitational potential energy driving geological processes.",
    organic: "Metabolic energy from food, solar energy captured by photosynthesis, chemical energy stored in ATP molecules.",
    human: "Physical labour, creative effort, social interaction, economic activity, and cultural production.",
    color: "#D4A853",
    x: 50,
    y: 8,
  },
  {
    id: "symmetry",
    label: "Symmetry",
    role: "Distributes and stabilises",
    description:
      "Distributes and stabilises forces within organised systems. Symmetry allows energy to be shared across structure rather than concentrating at points of weakness. It creates balance, proportion, and structural resilience.",
    inorganic: "Crystal lattice symmetry, bilateral symmetry in geological formations, radial symmetry of vortices.",
    organic: "Bilateral symmetry of bodies, radial symmetry of flowers, helical symmetry of DNA.",
    human: "Balanced facades, proportioned rooms, rhythmic street patterns, symmetric civic layouts.",
    color: "#6B7B8D",
    x: 15,
    y: 82,
  },
  {
    id: "opposingForces",
    label: "Opposing Forces",
    role: "Creates tension and direction",
    description:
      "Introduce tension, contrast, and directional movement. Without opposing forces, systems reach static equilibrium and cease to develop. Tension is what drives transformation and keeps systems alive.",
    inorganic: "Compression vs tension in rock, gravity vs buoyancy in fluids, heating vs cooling in weather systems.",
    organic: "Growth vs decay, predator vs prey, competition vs cooperation, catabolism vs anabolism.",
    human: "Public vs private, old vs new, individual vs collective, shelter vs openness, tradition vs innovation.",
    color: "#C4785B",
    x: 85,
    y: 82,
  },
];

const EDGES = [
  { from: "energy", to: "symmetry" },
  { from: "symmetry", to: "opposingForces" },
  { from: "opposingForces", to: "energy" },
];

export function TriadDiagram() {
  const [activeVertex, setActiveVertex] = useState<string | null>(null);
  const [activeDomain, setActiveDomain] = useState<"inorganic" | "organic" | "human">("human");

  const activeData = activeVertex
    ? VERTICES.find((v) => v.id === activeVertex)
    : null;

  return (
    <div className="w-full">
      {/* Domain selector */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {(["inorganic", "organic", "human"] as const).map((domain) => (
          <button
            key={domain}
            onClick={() => setActiveDomain(domain)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeDomain === domain
                ? domain === "inorganic"
                  ? "bg-inorganic text-white"
                  : domain === "organic"
                    ? "bg-organic text-white"
                    : "bg-human text-white"
                : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
            }`}
          >
            {domain.charAt(0).toUpperCase() + domain.slice(1)}
          </button>
        ))}
      </div>

      {/* Triangle diagram */}
      <div className="relative mx-auto" style={{ maxWidth: 460, aspectRatio: "1 / 0.85" }}>
        <svg
          viewBox="0 0 100 90"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Edge lines */}
          {EDGES.map((edge) => {
            const from = VERTICES.find((v) => v.id === edge.from)!;
            const to = VERTICES.find((v) => v.id === edge.to)!;
            const isHighlighted =
              activeVertex === edge.from || activeVertex === edge.to;
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isHighlighted ? "#D4A853" : "#E5E0DB"}
                strokeWidth={isHighlighted ? 0.8 : 0.5}
                strokeDasharray={isHighlighted ? "none" : "2 2"}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Centre label */}
          <text
            x="50"
            y="52"
            textAnchor="middle"
            fontSize="3.5"
            fontWeight="600"
            fill="#8A8480"
            fontFamily="var(--font-serif, 'Crimson Pro', Georgia, serif)"
          >
            Structure
          </text>
          <text
            x="50"
            y="57"
            textAnchor="middle"
            fontSize="2.5"
            fill="#8A8480"
          >
            emerges when all three align
          </text>
        </svg>

        {/* Vertex buttons (HTML overlays for better interaction) */}
        {VERTICES.map((vertex) => (
          <button
            key={vertex.id}
            onClick={() =>
              setActiveVertex(activeVertex === vertex.id ? null : vertex.id)
            }
            className="absolute flex flex-col items-center group"
            style={{
              left: `${vertex.x}%`,
              top: `${vertex.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{
                scale: activeVertex === vertex.id ? 1.15 : 1,
                boxShadow:
                  activeVertex === vertex.id
                    ? `0 0 24px ${vertex.color}40`
                    : "0 0 0px transparent",
              }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center transition-colors z-10 bg-white"
              style={{
                borderColor:
                  activeVertex === vertex.id ? vertex.color : "#E5E0DB",
              }}
            >
              <div className="text-center">
                <span
                  className="block text-[10px] sm:text-xs font-semibold leading-tight"
                  style={{
                    color:
                      activeVertex === vertex.id ? vertex.color : "#4A4540",
                  }}
                >
                  {vertex.label}
                </span>
              </div>
            </motion.div>
            <span className="mt-1 text-[10px] sm:text-xs text-charcoal-muted text-center leading-tight max-w-[100px]">
              {vertex.role}
            </span>
          </button>
        ))}
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
            className="mt-6 overflow-hidden"
          >
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: activeData.color + "40",
                backgroundColor: activeData.color + "08",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                  style={{ backgroundColor: activeData.color }}
                />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {activeData.label}
                  </h3>
                  <p className="text-charcoal-light mt-1 text-sm leading-relaxed">
                    {activeData.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-surface">
                <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-2">
                  {activeDomain} example
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {activeData[activeDomain]}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
