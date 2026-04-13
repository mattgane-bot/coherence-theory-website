"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmergentCentre {
  id: string;
  name: string;
  summary: string;
  detail: string;
  spatialQuestion?: string;
}

const POSITIVE_CENTRES: EmergentCentre[] = [
  {
    id: "objective-beauty",
    name: "Objective Beauty",
    summary: "Structural symmetry, proportion, and geometric resolution.",
    detail:
      "Perceived when physical form resolves forces, balances proportions, and creates legible spatial relationships. Not a matter of taste but of structural alignment — the nervous system registers resolved geometry as coherent.",
    spatialQuestion: "Do I like it here?",
  },
  {
    id: "dynamic-beauty",
    name: "Dynamic Beauty",
    summary: "Movement, flow, and energetic transformation in space.",
    detail:
      "Perceived when energy flows, circulates, and resolves through a system — in the rhythm of a colonnade, the sweep of a staircase, the unfolding of a garden path. Dynamic beauty registers as vitality and directed movement.",
    spatialQuestion: "Do I like it here?",
  },
  {
    id: "livingness",
    name: "Livingness",
    summary: "Sustained comfort, care, and bodily support.",
    detail:
      "Perceived when an environment supports the body — light, warmth, air, shelter, appropriate scale. The nervous system settles when physical needs are met without strain. Spaces with livingness feel restful and sustaining.",
    spatialQuestion: "Where am I?",
  },
  {
    id: "connection-nature",
    name: "Connection to Nature",
    summary: "Sensory and ecological integration with the living world.",
    detail:
      "Perceived when environments participate in natural cycles — daylight, vegetation, water, natural materials, seasonal change. The body registers alignment with biological rhythms it evolved within.",
    spatialQuestion: "Where am I?",
  },
  {
    id: "place-attachment",
    name: "Place Attachment",
    summary: "Belonging and social coherence within a place.",
    detail:
      "Perceived when a place supports stable social relationships, gathering, and collective memory. The experience of belonging — feeling that a place is 'yours', that you are part of its ongoing life.",
    spatialQuestion: "Am I part of this?",
  },
  {
    id: "identity",
    name: "Identity",
    summary: "Recognition, continuity, and personal meaning.",
    detail:
      "Perceived when a place reflects and reinforces who you are. The reciprocal of place attachment — not just belonging to a place, but the place belonging to you. Identity deepens when environments carry personal and collective history.",
    spatialQuestion: "Is this part of me?",
  },
  {
    id: "harmony",
    name: "Harmony",
    summary: "Proportion, rhythm, and coherent relationship between parts.",
    detail:
      "Perceived when elements relate to one another in ways that resolve rather than conflict. Harmony is not uniformity but the integration of difference into a coherent pattern — variety that strengthens rather than fragments.",
    spatialQuestion: "Do I like it here?",
  },
  {
    id: "positive-energy",
    name: "Positive Energy",
    summary: "Transformation and organised vitality.",
    detail:
      "Perceived when a system is alive with directed activity — energy that flows, transforms, and sustains rather than stagnating or overwhelming. Markets, workshops, and active public spaces often carry this quality.",
    spatialQuestion: "Where am I?",
  },
  {
    id: "intellectual-life",
    name: "Intellectual Life",
    summary: "Recognition of human endeavour, craft, and cultural depth.",
    detail:
      "Perceived when environments show evidence of sustained human thought, skill, and care. Libraries, workshops, well-crafted buildings, and places of learning carry intellectual life — they register as environments where thinking matters.",
    spatialQuestion: "Is this part of me?",
  },
  {
    id: "utility",
    name: "Utility",
    summary: "Functional clarity and practical value.",
    detail:
      "Perceived when a system works well for its purpose. Utility is not merely pragmatic — well-functioning environments reduce strain, support activity, and free attention for higher-order engagement. Function itself can be a form of coherence.",
    spatialQuestion: "Where am I?",
  },
  {
    id: "tranquillity",
    name: "Tranquillity",
    summary: "Calm, stillness, and resolution of tension.",
    detail:
      "Perceived when energetic demands on attention and the body are low and resolved. Tranquil environments allow the nervous system to settle fully — attention broadens, vigilance drops, and the body enters a state of ease.",
    spatialQuestion: "Do I like it here?",
  },
  {
    id: "awesomeness",
    name: "Awesomeness",
    summary: "Scale, power, and the sublime in spatial experience.",
    detail:
      "Perceived when the scale, complexity, or depth of a system exceeds ordinary comprehension — cathedrals, mountain landscapes, vast engineered structures. Awesomeness registers as something larger than the self, evoking humility and expanded awareness.",
    spatialQuestion: "Is this part of me?",
  },
];

const SPATIAL_QUESTIONS = [
  { question: "Where am I?", label: "Orientation", color: "#6B7B8D" },
  { question: "Do I like it here?", label: "Resonance", color: "#4A6741" },
  { question: "Am I part of this?", label: "Belonging", color: "#C4785B" },
  { question: "Is this part of me?", label: "Identity", color: "#D4A853" },
];

type ViewMode = "wheel" | "questions";

export function EmergentCentresWheel() {
  const [activeCentre, setActiveCentre] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("wheel");

  const activeData = activeCentre
    ? POSITIVE_CENTRES.find((c) => c.id === activeCentre)
    : null;

  return (
    <div className="w-full">
      {/* View mode toggle */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setViewMode("wheel")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            viewMode === "wheel"
              ? "bg-human text-white"
              : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
          }`}
        >
          Radial View
        </button>
        <button
          onClick={() => setViewMode("questions")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            viewMode === "questions"
              ? "bg-human text-white"
              : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
          }`}
        >
          By Spatial Question
        </button>
      </div>

      {viewMode === "wheel" ? (
        /* Radial layout */
        <div className="flex justify-center mb-4">
          <div className="relative w-[340px] h-[340px]">
            {/* Centre label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-human/10 border border-human/30 flex items-center justify-center">
                <span className="text-xs font-serif font-semibold text-human text-center leading-tight">
                  Coherence
                </span>
              </div>
            </div>

            {/* Radial items */}
            {POSITIVE_CENTRES.map((centre, i) => {
              const angle = (i / POSITIVE_CENTRES.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 140;
              const x = 170 + Math.cos(angle) * radius - 40;
              const y = 170 + Math.sin(angle) * radius - 16;
              const isActive = activeCentre === centre.id;
              const questionColor =
                SPATIAL_QUESTIONS.find(
                  (q) => q.question === centre.spatialQuestion
                )?.color || "#C4785B";

              return (
                <motion.button
                  key={centre.id}
                  onClick={() =>
                    setActiveCentre(isActive ? null : centre.id)
                  }
                  className={`absolute w-[80px] text-center transition-all ${
                    isActive ? "z-10" : "z-0"
                  }`}
                  style={{ left: x, top: y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center border-2 transition-all ${
                      isActive ? "shadow-md" : ""
                    }`}
                    style={{
                      borderColor: isActive
                        ? questionColor
                        : questionColor + "50",
                      backgroundColor: isActive
                        ? questionColor + "20"
                        : questionColor + "08",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: questionColor }}
                    />
                  </div>
                  <span
                    className="text-[10px] font-medium leading-tight"
                    style={{
                      color: isActive ? questionColor : "#8A8480",
                    }}
                  >
                    {centre.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Grouped by spatial question */
        <div className="space-y-4 mb-4">
          {SPATIAL_QUESTIONS.map((sq) => {
            const centres = POSITIVE_CENTRES.filter(
              (c) => c.spatialQuestion === sq.question
            );
            return (
              <div key={sq.question}>
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: sq.color }}
                  />
                  <span className="text-sm font-medium" style={{ color: sq.color }}>
                    {sq.question}
                  </span>
                  <span className="text-xs text-charcoal-muted">
                    ({sq.label})
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 ml-[18px]">
                  {centres.map((centre) => {
                    const isActive = activeCentre === centre.id;
                    return (
                      <button
                        key={centre.id}
                        onClick={() =>
                          setActiveCentre(isActive ? null : centre.id)
                        }
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isActive ? "text-white shadow-sm" : ""
                        }`}
                        style={{
                          backgroundColor: isActive
                            ? sq.color
                            : sq.color + "15",
                          color: isActive ? "white" : sq.color,
                        }}
                      >
                        {centre.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

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
            <div className="rounded-2xl border border-human/30 p-6 bg-human-bg/50">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-human shrink-0 mt-1.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    {activeData.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Spatial question: {activeData.spatialQuestion}
                  </p>
                </div>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeData.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
