"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Phase {
  id: string;
  name: string;
  number: number;
  color: string;
  summary: string;
  inorganic: string;
  organic: string;
  human: string;
  detail: string;
}

const PHASES: Phase[] = [
  {
    id: "translational",
    name: "Translational",
    number: 1,
    color: "#6B7B8D",
    summary: "Energy begins to be organised through gradient, order, and constraint. Conditions for structure start to form.",
    inorganic: "Water flows downhill, constrained by terrain. Flow paths begin to stabilise.",
    organic: "Chemical gradients form across membranes. Pre-cellular organisation begins.",
    human: "People begin to gather at a crossroads. Paths of movement emerge from use.",
    detail: "The translational phase describes the initial conditions in which energy, operating under the Triad of gradient, order, and constraint, begins to produce organised movement and directional flow. Structure has not yet formed, but the conditions for its appearance are being established."
  },
  {
    id: "morphogenesis",
    name: "Morphogenesis",
    number: 2,
    color: "#4A6741",
    summary: "Centres and forms appear. The first stable structures emerge from organised energy.",
    inorganic: "River channels form. Banks stabilise. A recognisable river structure appears.",
    organic: "Cells differentiate. Tissues and body plans take shape. Organs begin to form.",
    human: "Buildings appear. Streets take shape. A settlement begins to have recognisable form.",
    detail: "Morphogenesis is the phase in which centres — local concentrations of energy, force, or organisation — first appear and stabilise. Forms emerge around these centres, creating the first recognisable structures. This is where organised energy becomes visible structure."
  },
  {
    id: "emergence",
    name: "Emergence",
    number: 3,
    color: "#C4785B",
    summary: "Centres and forms begin to operate together as a system. The whole becomes more than the sum of parts.",
    inorganic: "The river interacts with its floodplain. Erosion and deposition create a functioning system.",
    organic: "The organism functions as a whole. Organs coordinate. Metabolism, movement, and response emerge.",
    human: "The settlement functions socially. Trade, governance, and cultural life begin.",
    detail: "In the emergence phase, individual centres and forms begin to interact and operate as an integrated system. New properties appear that did not exist in the individual parts — this is emergence in its classical sense. The system begins to function as a coherent whole."
  },
  {
    id: "becoming",
    name: "Becoming",
    number: 4,
    color: "#D4A853",
    summary: "The system stabilises and functions coherently. It develops an identity and begins to sustain itself.",
    inorganic: "The river system reaches dynamic equilibrium. Seasonal cycles stabilise.",
    organic: "The organism reaches maturity. It can sustain itself, respond to environment, and reproduce.",
    human: "The town has an identity. Institutions stabilise. Cultural meaning deepens.",
    detail: "Becoming describes the phase in which the system achieves functional coherence. It has stabilised sufficiently to maintain itself, has developed recognisable identity, and operates as a viable whole. The system has become what it is."
  },
  {
    id: "unfolding",
    name: "Unfolding",
    number: 5,
    color: "#7B6B8D",
    summary: "The system develops through interaction with its environment. Complexity and depth increase through use and adaptation.",
    inorganic: "The river system shapes and is shaped by the landscape over centuries. Ecosystems develop around it.",
    organic: "The organism adapts to its niche. Populations evolve. Ecosystems develop complexity.",
    human: "The town grows, adapts, and deepens. Layers of history, meaning, and cultural practice accumulate.",
    detail: "Unfolding is the phase of deepening and enrichment. The system interacts with its environment and develops greater complexity, depth, and resilience. In human systems, this is where cultural memory, symbolic meaning, and layered history develop."
  },
  {
    id: "continuous-improvement",
    name: "Continuous Improvement",
    number: 6,
    color: "#8A8480",
    summary: "The system adapts, repairs, and renews over time. It either maintains coherence or gradually degrades.",
    inorganic: "The river adjusts to climate change, geological shifts. It persists by adapting form.",
    organic: "Species evolve. Ecosystems recover from disturbance. Life adapts across generations.",
    human: "The town repairs, renovates, adapts to new needs. Buildings are maintained and renewed. Traditions evolve.",
    detail: "Continuous improvement describes the ongoing process of maintenance, repair, adaptation, and renewal. Systems that can maintain coherence through this process endure; those that cannot gradually lose alignment and eventually fail. This phase loops back to earlier phases — renewal is recursive."
  },
];

export function DynamicEngineTimeline() {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [activeDomain, setActiveDomain] = useState<"inorganic" | "organic" | "human">("human");
  const [isPlaying, setIsPlaying] = useState(false);

  const activeData = activePhase ? PHASES.find((p) => p.id === activePhase) : null;

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i >= PHASES.length) {
        clearInterval(interval);
        setIsPlaying(false);
        return;
      }
      setActivePhase(PHASES[i].id);
      i++;
    }, 2500);
  };

  return (
    <div className="w-full">
      {/* Domain selector */}
      <div className="flex items-center justify-center gap-2 mb-8">
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
        <div className="w-px h-6 bg-border mx-2" />
        <button
          onClick={handlePlay}
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
        {/* Recursive arrow */}
        <div className="absolute -top-2 right-4 text-charcoal-muted text-xs flex items-center gap-1 opacity-60">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M38 15C38 8 30 2 20 2S2 8 2 15" />
            <path d="M5 12l-3 3 3 3" />
          </svg>
          <span>recursive</span>
        </div>

        <div className="grid grid-cols-6 gap-2 relative">
          {PHASES.map((phase, i) => {
            const isActive = activePhase === phase.id;
            return (
              <motion.button
                key={phase.id}
                onClick={() => setActivePhase(isActive ? null : phase.id)}
                className="flex flex-col items-center group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Node */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    boxShadow: isActive
                      ? `0 0 20px ${phase.color}40`
                      : "0 0 0px transparent",
                  }}
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-colors z-10 ${
                    isActive
                      ? "border-current bg-white"
                      : "border-border bg-surface group-hover:border-charcoal-muted"
                  }`}
                  style={{ color: isActive ? phase.color : undefined }}
                >
                  <span
                    className={`text-lg font-serif font-bold ${
                      isActive ? "" : "text-charcoal-muted group-hover:text-charcoal"
                    }`}
                    style={{ color: isActive ? phase.color : undefined }}
                  >
                    {phase.number}
                  </span>
                </motion.div>

                {/* Label */}
                <span
                  className={`mt-3 text-xs font-medium text-center leading-tight transition-colors ${
                    isActive ? "text-charcoal" : "text-charcoal-muted"
                  }`}
                >
                  {phase.name}
                </span>
              </motion.button>
            );
          })}
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
            className="mt-8 overflow-hidden"
          >
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: activeData.color + "40", backgroundColor: activeData.color + "08" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg shrink-0"
                  style={{ backgroundColor: activeData.color }}
                >
                  {activeData.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {activeData.name}
                  </h3>
                  <p className="text-charcoal-light mt-1">{activeData.summary}</p>
                </div>
              </div>

              {/* Domain example */}
              <div className="mt-4 p-4 rounded-xl bg-surface">
                <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-2">
                  {activeDomain} example
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {activeData[activeDomain]}
                </p>
              </div>

              {/* Detail */}
              <p className="mt-4 text-sm text-charcoal-muted leading-relaxed">
                {activeData.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
