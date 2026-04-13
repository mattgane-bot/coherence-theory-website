"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Stage {
  id: string;
  name: string;
  color: string;
  summary: string;
  detail: string;
}

const STAGES: Stage[] = [
  {
    id: "instinct",
    name: "Primal Instinct",
    color: "#8A8480",
    summary: "Direct survival needs and biological drives.",
    detail:
      "Refuge from threat, orientation in terrain, securing food, forming alliances, territorial defence, rhythmic regulation. These are the raw drives that evolution has calibrated over millennia — not arbitrary preferences but survival intelligence.",
  },
  {
    id: "spatial",
    name: "Spatial Organisation",
    color: "#6B7B8D",
    summary: "Instinct becomes structured spatial response.",
    detail:
      "The need for refuge becomes enclosure. Vantage becomes elevation. Orientation becomes axial alignment. Gathering becomes the clearing or circle. Instinct is not suppressed but given spatial form — fear becomes boundary, curiosity becomes gradient, territoriality becomes centre.",
  },
  {
    id: "cultural",
    name: "Cultural Stabilisation",
    color: "#4A6741",
    summary: "Patterns persist through repetition across generations.",
    detail:
      "Spatial responses that prove viable are repeated, refined, and transmitted. The hearth becomes a recurring element. The threshold becomes ritualised. The courtyard becomes a type. Through constraint and repetition, what began as individual response becomes shared cultural pattern.",
  },
  {
    id: "symbolic",
    name: "Symbolic Condensation",
    color: "#C4785B",
    summary: "Spatial structures crystallise into portable symbolic forms.",
    detail:
      "The hearth becomes altar. The boundary becomes sacred enclosure. The path becomes pilgrimage. Spatial structures that have stabilised through generations crystallise into symbols — compressed forms that carry the accumulated meaning of their origins. Sublimation leaves residue; symbolism is that residue rendered portable.",
  },
  {
    id: "reactivation",
    name: "Abstract Reactivation",
    color: "#D4A853",
    summary: "Symbols preserve and reactivate stabilised resolutions.",
    detail:
      "Symbols do not create coherence from nothing — they condense and reactivate patterns that have already stabilised through sublimation. A cross, a circle, a threshold: each carries within it the accumulated resolution of tensions that began as raw survival need. What appears refined is not detached from what is primitive; it is the primitive structured and stabilised.",
  },
];

interface Channel {
  id: string;
  instinct: string;
  symbol: string;
  color: string;
}

const CHANNELS: Channel[] = [
  { id: "enclosure", instinct: "Fear / refuge", symbol: "Circle / sacred enclosure", color: "#6B7B8D" },
  { id: "vertical", instinct: "Vigilance / prospect", symbol: "Vertical axis / tower / spire", color: "#5A7365" },
  { id: "orientation", instinct: "Orientation / wayfinding", symbol: "Cross-axes / cardinal alignment", color: "#4A6741" },
  { id: "centre", instinct: "Gathering / belonging", symbol: "Centre / hearth / altar", color: "#C4785B" },
  { id: "threshold", instinct: "Boundary / territory", symbol: "Threshold / gate / passage", color: "#D4A853" },
];

type ViewMode = "stages" | "channels";

export function SublimationFlow() {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("stages");

  const activeData = activeStage
    ? STAGES.find((s) => s.id === activeStage)
    : null;

  return (
    <div className="w-full">
      {/* View toggle */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setViewMode("stages")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            viewMode === "stages"
              ? "bg-human text-white"
              : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
          }`}
        >
          Five Stages
        </button>
        <button
          onClick={() => setViewMode("channels")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            viewMode === "channels"
              ? "bg-human text-white"
              : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
          }`}
        >
          Transformation Channels
        </button>
      </div>

      {viewMode === "stages" ? (
        <>
          {/* Vertical flow */}
          <div className="space-y-1">
            {STAGES.map((stage, i) => {
              const isActive = activeStage === stage.id;
              return (
                <div key={stage.id}>
                  <motion.button
                    onClick={() =>
                      setActiveStage(isActive ? null : stage.id)
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-left transition-all ${
                      isActive ? "ring-1" : "hover:shadow-sm"
                    }`}
                    style={{
                      borderColor: isActive
                        ? stage.color
                        : stage.color + "30",
                      backgroundColor: isActive
                        ? stage.color + "12"
                        : stage.color + "06",
                      ...(isActive ? { ringColor: stage.color } : {}),
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: stage.color }}
                        >
                          {i + 1}
                        </span>
                        <span className="font-medium text-sm text-charcoal">
                          {stage.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-charcoal-muted mt-1 ml-7">
                      {stage.summary}
                    </p>
                  </motion.button>

                  {/* Arrow between stages */}
                  {i < STAGES.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <svg
                        className="w-4 h-4 text-charcoal-muted/30"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
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
                className="mt-4 overflow-hidden"
              >
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: activeData.color + "40",
                    backgroundColor: activeData.color + "08",
                  }}
                >
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                    {activeData.name}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {activeData.detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        /* Channels view: instinct → symbol pairs */
        <div className="space-y-2">
          {CHANNELS.map((channel, i) => (
            <motion.div
              key={channel.id}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="flex-1 px-3 py-2.5 rounded-lg border text-sm text-charcoal-light text-right"
                style={{
                  borderColor: channel.color + "30",
                  backgroundColor: channel.color + "06",
                }}
              >
                {channel.instinct}
              </div>
              <svg
                className="w-5 h-5 shrink-0"
                style={{ color: channel.color }}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className="flex-1 px-3 py-2.5 rounded-lg border text-sm font-medium"
                style={{
                  borderColor: channel.color + "40",
                  backgroundColor: channel.color + "12",
                  color: channel.color,
                }}
              >
                {channel.symbol}
              </div>
            </motion.div>
          ))}
          <p className="text-xs text-charcoal-muted text-center mt-3">
            Each channel shows how a primal instinct is transformed into stable
            symbolic form through sublimation.
          </p>
        </div>
      )}
    </div>
  );
}
