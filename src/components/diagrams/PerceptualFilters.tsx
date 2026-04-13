"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Filter {
  id: string;
  name: string;
  color: string;
  description: string;
  examples: string;
  effect: string;
}

const FILTERS: Filter[] = [
  {
    id: "biological",
    name: "Biological / Instinctive",
    color: "#6B7B8D",
    description:
      "Hardwired responses shared across all humans. The body registers safety, threat, enclosure, scale, and rhythm before conscious thought engages.",
    examples:
      "Response to darkness, heights, enclosure. Preference for prospect-refuge. Sensitivity to symmetry and scale relative to the body.",
    effect:
      "Determines whether the nervous system settles or activates. Operates identically across cultures and individuals.",
  },
  {
    id: "environmental",
    name: "Environmental / Situational",
    color: "#5A7365",
    description:
      "Shaped by the immediate physical context — weather, time, function, social presence. These filters shift constantly and alter what registers as coherent.",
    examples:
      "A space feels different at night than during the day. A room full of people vs. empty. Rain changes the experience of a street.",
    effect:
      "Modulates perception by adding or removing sensory information. The same form can feel coherent or threatening depending on context.",
  },
  {
    id: "cultural",
    name: "Cultural / Symbolic",
    color: "#4A6741",
    description:
      "Meaning systems, norms, traditions, and power structures that shape what is valued, sacred, forbidden, or invisible. Cultures determine which forms carry significance.",
    examples:
      "A minaret carries different meaning in Istanbul and Iowa. Gothic arches evoke Christianity in Europe but may register as purely structural elsewhere.",
    effect:
      "Assigns or withholds symbolic charge. Can amplify coherence through shared meaning or obscure it through unfamiliarity.",
  },
  {
    id: "emotional",
    name: "Emotional / Personal",
    color: "#C4785B",
    description:
      "Memory, familiarity, mood, trauma, and personal history. These are the most variable filters and the most difficult to recognise in oneself.",
    examples:
      "A childhood home feels coherent regardless of architectural merit. A hospital corridor triggers anxiety from past experience.",
    effect:
      "Can override all other filters. A structurally coherent environment may register as hostile if associated with personal trauma.",
  },
  {
    id: "cognitive",
    name: "Cognitive / Interpretive",
    color: "#D4A853",
    description:
      "Learned frameworks, education, expertise, and expectation. These filters shape what is noticed and how it is categorised.",
    examples:
      "An architect perceives structural logic invisible to others. An ecologist reads landscape differently. A child sees differently from an adult.",
    effect:
      "Determines what is noticed and what is overlooked. Can either reveal coherence through trained perception or obscure it through rigid categories.",
  },
];

export function PerceptualFilters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [enabledFilters, setEnabledFilters] = useState<Set<string>>(
    new Set(FILTERS.map((f) => f.id))
  );

  const toggleFilter = (id: string) => {
    const next = new Set(enabledFilters);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setEnabledFilters(next);
  };

  const activeData = activeFilter
    ? FILTERS.find((f) => f.id === activeFilter)
    : null;

  const allEnabled = enabledFilters.size === FILTERS.length;
  const noneEnabled = enabledFilters.size === 0;

  return (
    <div className="w-full">
      {/* Stacked filter layers */}
      <div className="space-y-1 mb-4">
        {FILTERS.map((filter, i) => {
          const isEnabled = enabledFilters.has(filter.id);
          const isActive = activeFilter === filter.id;

          return (
            <motion.div
              key={filter.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              {/* Toggle */}
              <button
                onClick={() => toggleFilter(filter.id)}
                className={`w-7 h-7 shrink-0 rounded-lg border flex items-center justify-center transition-all ${
                  isEnabled
                    ? ""
                    : "border-border bg-surface-raised opacity-50"
                }`}
                style={
                  isEnabled
                    ? {
                        backgroundColor: filter.color + "20",
                        borderColor: filter.color + "40",
                      }
                    : undefined
                }
              >
                {isEnabled ? (
                  <svg
                    className="w-3.5 h-3.5"
                    style={{ color: filter.color }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 text-charcoal-muted"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-14.5-14.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {/* Layer bar */}
              <button
                onClick={() =>
                  setActiveFilter(isActive ? null : filter.id)
                }
                className={`flex-1 px-4 py-2.5 rounded-xl border text-left transition-all ${
                  !isEnabled ? "opacity-30" : ""
                } ${isActive ? "ring-1" : "hover:shadow-sm"}`}
                style={{
                  borderColor: isActive
                    ? filter.color
                    : filter.color + "30",
                  backgroundColor: isActive
                    ? filter.color + "12"
                    : filter.color + "06",
                  ...(isActive ? { ringColor: filter.color } : {}),
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: filter.color,
                      opacity: isEnabled ? 1 : 0.3,
                    }}
                  />
                  <span className="font-medium text-sm text-charcoal">
                    {filter.name}
                  </span>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Perception state */}
      <div className="p-4 rounded-xl border border-border bg-surface-raised mb-4">
        <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-2">
          Perception State
        </p>
        <p className="text-sm text-charcoal-light">
          {noneEnabled
            ? "No active filters — this is theoretical. All perception is filtered. Even 'objective perception' recognises filters rather than removing them."
            : allEnabled
              ? "All filters active — this is the default human condition. Perception is shaped by biology, context, culture, personal history, and learned frameworks simultaneously."
              : `${enabledFilters.size} of ${FILTERS.length} filters active — perception is being shaped by ${
                  FILTERS.filter((f) => enabledFilters.has(f.id))
                    .map((f) => f.name.split(" /")[0].toLowerCase())
                    .join(", ")
                } factors. Disabled filters represent aspects of experience being overlooked or suppressed.`}
        </p>
      </div>

      {/* Expanded detail */}
      {activeData && (
        <motion.div
          key={activeData.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border p-5"
          style={{
            borderColor: activeData.color + "40",
            backgroundColor: activeData.color + "08",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-3 h-3 rounded-full shrink-0 mt-1"
              style={{ backgroundColor: activeData.color }}
            />
            <h3 className="font-serif text-lg font-semibold text-charcoal">
              {activeData.name}
            </h3>
          </div>

          <p className="text-sm text-charcoal-light leading-relaxed mb-3">
            {activeData.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-surface">
              <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-1">
                Examples
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeData.examples}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface">
              <p className="text-xs font-medium text-charcoal-muted uppercase tracking-wider mb-1">
                Effect on Perception
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {activeData.effect}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
