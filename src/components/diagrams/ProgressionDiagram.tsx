"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Level {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  summary: string;
  detail: string;
  quote?: string;
}

const LEVELS: Level[] = [
  {
    id: "centres",
    name: "Centres",
    color: "#6B7B8D",
    bgColor: "#EDF1F5",
    summary:
      "Local concentrations where multiple relationships converge in a mutually reinforcing way.",
    detail:
      "A centre is not a geometric middle or visual object but an event of structure — a region where boundaries, directional forces, gradients of scale, and structural constraints align so that interactions become organised rather than dispersed. Centres function as energetic minima where opposing forces resolve into balanced states.",
    quote:
      "A centre is not a thing but an event of structure — a moment in which coherence becomes locally concentrated and perceptible.",
  },
  {
    id: "congruence",
    name: "Congruence",
    color: "#5A7365",
    bgColor: "#EDF5F0",
    summary:
      "Multiple centres align across scale so that their relationships reinforce rather than compete.",
    detail:
      "When centres at different scales — detail, room, building, neighbourhood — begin to support one another, congruence emerges. This is not mere consistency but active mutual reinforcement: each centre strengthens the conditions that sustain its neighbours. Congruence requires balance — concentration without domination.",
  },
  {
    id: "wholeness",
    name: "Wholeness",
    color: "#4A6741",
    bgColor: "#EDF5EC",
    summary:
      "The system functions as a unified whole that is more than the sum of its parts.",
    detail:
      "Wholeness arises when congruent centres operate together as an integrated system. New properties appear that did not exist in individual parts. The system acquires an identity — it becomes recognisable as something, not merely a collection of aligned components. Wholeness is not imposed from above but emerges from the accumulated alignment of centres across scale.",
  },
  {
    id: "viability",
    name: "Viability",
    color: "#C4785B",
    bgColor: "#FDF3EF",
    summary:
      "The system can sustain itself over time without exhausting its means of maintenance.",
    detail:
      "A whole system becomes viable when it can maintain its organisation against entropy using sustainable levels of energy. Viability is not just structural soundness but energetic sustainability — the system can repair damage, adapt to changing conditions, and continue its core functions without requiring ever-increasing resources. Systems that conserve energy while maintaining coherence are those that persist.",
  },
  {
    id: "endurance",
    name: "Endurance",
    color: "#D4A853",
    bgColor: "#FDF8EC",
    summary:
      "The system persists through time, adapting while maintaining its essential coherence.",
    detail:
      "Endurance is the condition achieved when a viable system demonstrates persistence through changing circumstances. It is not permanence — all systems eventually change — but the capacity to continue without losing essential coherence. Enduring systems accumulate symbolic charge, cultural memory, and structural depth that make them increasingly difficult to replace and increasingly rich in meaning.",
    quote:
      "What survives is what can continue without exhausting its means.",
  },
];

export function ProgressionDiagram() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const activeData = activeLevel
    ? LEVELS.find((l) => l.id === activeLevel)
    : null;

  return (
    <div className="w-full">
      {/* Nested rings visualization */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[320px] h-[320px]">
          {[...LEVELS].reverse().map((level, i) => {
            const totalLevels = LEVELS.length;
            const reverseIndex = totalLevels - 1 - i;
            const size = 320 - reverseIndex * 56;
            const offset = reverseIndex * 28;
            const isActive = activeLevel === level.id;

            return (
              <motion.button
                key={level.id}
                onClick={() =>
                  setActiveLevel(isActive ? null : level.id)
                }
                className="absolute rounded-full border-2 flex items-center justify-center transition-all"
                style={{
                  width: size,
                  height: size,
                  top: offset,
                  left: offset,
                  borderColor: isActive ? level.color : level.color + "40",
                  backgroundColor: isActive
                    ? level.bgColor
                    : level.color + "08",
                  zIndex: reverseIndex + 1,
                }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: reverseIndex * 0.1 }}
              >
                {reverseIndex === 0 && (
                  <span
                    className="text-xs font-medium text-center px-2"
                    style={{ color: level.color }}
                  >
                    {level.name}
                  </span>
                )}
              </motion.button>
            );
          })}

          {/* Labels positioned outside rings */}
          {LEVELS.map((level, i) => {
            if (i === 0) return null; // innermost label is inside
            const positions = [
              null, // centres - handled above
              { top: "2px", right: "-80px" },
              { top: "32px", right: "-100px" },
              { top: "62px", right: "-80px" },
              { top: "0px", left: "50%", transform: "translateX(-50%)" },
            ];
            const pos = positions[i];
            if (!pos) return null;
            const isActive = activeLevel === level.id;

            return (
              <button
                key={level.id + "-label"}
                onClick={() =>
                  setActiveLevel(isActive ? null : level.id)
                }
                className="absolute text-xs font-medium transition-colors whitespace-nowrap"
                style={{
                  ...pos,
                  color: isActive ? level.color : level.color + "99",
                }}
              >
                {level.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Linear progression */}
      <div className="flex items-center gap-1 justify-center mb-4">
        {LEVELS.map((level, i) => {
          const isActive = activeLevel === level.id;
          return (
            <div key={level.id} className="flex items-center gap-1">
              <button
                onClick={() =>
                  setActiveLevel(isActive ? null : level.id)
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive ? "text-white shadow-sm" : "hover:opacity-80"
                }`}
                style={{
                  backgroundColor: isActive ? level.color : level.color + "18",
                  color: isActive ? "white" : level.color,
                }}
              >
                {level.name}
              </button>
              {i < LEVELS.length - 1 && (
                <svg
                  className="w-4 h-4 text-charcoal-muted/40 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
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
            className="overflow-hidden"
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
                    {activeData.name}
                  </h3>
                  <p className="text-charcoal-light mt-1 text-sm leading-relaxed">
                    {activeData.summary}
                  </p>
                </div>
              </div>

              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeData.detail}
              </p>

              {activeData.quote && (
                <div className="mt-4 pl-4 border-l-2 border-accent">
                  <p className="text-sm italic text-charcoal-muted">
                    {activeData.quote}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
