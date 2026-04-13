"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string;
  name: string;
  definition: string;
  example: string;
  anchors?: string[];
}

interface PropertyCategory {
  id: string;
  label: string;
  description: string;
  color: string;
  properties: Property[];
}

const FIPS: Property[] = [
  {
    id: "geometry",
    name: "Geometry",
    definition: "Spatial relationships defining position, adjacency, orientation, and dimensionality. The prerequisite for any form to exist.",
    example: "Without geometric relation, no stable configuration can form. A crystal lattice, a room, a street — all depend on geometry.",
  },
  {
    id: "scale",
    name: "Scale",
    definition: "Absolute and relative size of a framework in relation to forces. Determines which physical behaviours dominate and is the precondition for hierarchy.",
    example: "Surface tension dominates at small scales, gravity at large ones. A courtyard functions differently from a plaza because of scale.",
  },
  {
    id: "mass",
    name: "Mass",
    definition: "Amount of matter determining inertia, load, and gravitational behaviour. Greater mass increases resistance to acceleration but amplifies consequences of imbalance.",
    example: "A stone wall has presence because of mass. Mass anchors processes in force and time — it introduces consequence and history.",
  },
  {
    id: "density",
    name: "Density",
    definition: "Concentration of mass within volume. Governs weight, stability, and material response. Determines when interaction becomes unavoidable.",
    example: "Dense urban fabric forces encounter and exchange. Dense materials resist penetration. Density shapes how energy concentrates.",
  },
  {
    id: "material-composition",
    name: "Material Composition",
    definition: "Intrinsic properties of materials — strength, elasticity, brittleness, thermal behaviour, conductivity. Determines how form can be realised and how it responds to force.",
    example: "Wood, stone, steel, and glass each impose different structural logics. A timber frame and a concrete shell solve the same problem differently.",
  },
  {
    id: "structural-continuity",
    name: "Structural Continuity",
    definition: "Continuous physical connections through which forces travel. Allows loads to redistribute rather than concentrate locally. Enables feedback loops, resilience, and self-organisation.",
    example: "A masonry arch transfers load continuously. A fractured beam cannot. Without continuity, effects remain local and systems cannot learn.",
  },
  {
    id: "boundary-condition",
    name: "Boundary Condition",
    definition: "Interfaces where change registers. Enables threshold effects, diffusion, propagation, and pattern formation. Not limits alone but sites of transformation.",
    example: "A doorway is a boundary — it creates inside/outside, transforms movement, enables threshold experience. Where boundaries are absent, coherence cannot articulate itself.",
  },
  {
    id: "spatial-enclosure",
    name: "Spatial Enclosure",
    definition: "The inside-outside distinction that stabilises identity. Allows activity to gather without dispersing and enables centres to form.",
    example: "A courtyard creates enclosure. A room creates enclosure. Enclosure allows emergence, self-organisation, and pattern languages to develop.",
  },
  {
    id: "spatial-continuity",
    name: "Spatial Continuity",
    definition: "Allows movement, influence, and perception without rupture. Enables diffusion, propagation, and nested hierarchies.",
    example: "A connected series of rooms allows flow. Disconnected space cannot cohere — where continuity breaks, energy must jump rather than flow.",
  },
  {
    id: "physical-resistance",
    name: "Physical Resistance",
    definition: "Introduces delay, accumulation, and release. Prevents immediate dissipation. Enables non-linearity, threshold effects, and resilience.",
    example: "Friction slows water, allowing sediment to deposit. Thick walls resist heat flow. Resistance allows pressure to build, transform, and reorganise.",
  },
  {
    id: "energy-capacity",
    name: "Energy Capacity",
    definition: "How much energy a system can absorb, store, and transmit. Enables energy dependence, feedback loops, temporal unfolding, and emergence.",
    example: "Thermal mass stores warmth. A battery stores charge. Without sufficient capacity, coherence cannot persist. Without regulated capacity, it destabilises.",
  },
];

const CIP_CATEGORIES: PropertyCategory[] = [
  {
    id: "structural",
    label: "Structural",
    description: "How structure appears, organises, and persists",
    color: "#6B7B8D",
    properties: [
      {
        id: "emergence-patterning",
        name: "Emergence & Patterning",
        definition: "How structure appears through interaction, constraint, and repetition. Local interactions produce global order that was not designed or directed.",
        example: "Termite mounds, city grids, crystal growth — all emerge from repeated local interactions under constraint.",
        anchors: ["geometry", "boundary-condition", "spatial-enclosure"],
      },
      {
        id: "scaling-distribution",
        name: "Scaling & Distribution",
        definition: "How structure persists and organises across multiple scales. Coherent systems show similar organisational principles at different magnifications.",
        example: "A river's branching pattern repeats from tributaries to deltas. A city's street hierarchy from alleys to avenues follows similar scaling laws.",
        anchors: ["scale", "spatial-continuity"],
      },
      {
        id: "interaction-coupling",
        name: "Interaction & Coupling",
        definition: "How centres, paths, edges, and systems influence one another. The strength and nature of connections between parts determines system behaviour.",
        example: "Neighbouring buildings affect each other's light, wind, and social activity. Tightly coupled systems respond together; loosely coupled ones can adapt independently.",
        anchors: ["density", "structural-continuity"],
      },
      {
        id: "nonlinearity-thresholds",
        name: "Non-linearity & Thresholds",
        definition: "How small changes produce large effects and trigger transformation. Systems often absorb change gradually until a critical point is crossed.",
        example: "A dam holds water until it overflows. A neighbourhood gentrifies slowly then rapidly. Adding one more car can tip a road from flowing to gridlocked.",
        anchors: ["density", "physical-resistance"],
      },
      {
        id: "stability-regulation",
        name: "Stability, Regulation & Adaptation",
        definition: "How systems maintain coherence through adjustment and self-regulation. Viable systems correct disturbance without losing their essential organisation.",
        example: "A body maintains temperature. A market adjusts prices. A village rebuilds after a storm. Each system regulates itself to maintain coherence.",
        anchors: ["structural-continuity", "material-composition"],
      },
      {
        id: "persistence-repair",
        name: "Persistence, Repair & Temporal Durability",
        definition: "How coherence survives through time despite entropy and disturbance. Systems endure by repairing, maintaining, and gradually adapting their structure.",
        example: "Historic towns persist through continuous repair. Forests regenerate after fire. Bones heal. Persistence requires ongoing energy investment.",
        anchors: ["material-composition", "energy-capacity"],
      },
      {
        id: "diffusion-propagation",
        name: "Diffusion, Propagation & Field Effects",
        definition: "How structure spreads, transmits influence, and affects surrounding space. Every form creates a field of influence beyond its physical boundary.",
        example: "A church spire affects the perception of an entire district. Sound propagates. Heat diffuses. A strong centre influences surrounding organisation.",
        anchors: ["spatial-continuity", "boundary-condition"],
      },
    ],
  },
  {
    id: "operational",
    label: "Operational",
    description: "How structural capacities unfold through time",
    color: "#4A6741",
    properties: [
      {
        id: "directionality",
        name: "Directionality & Irreversibility",
        definition: "Processes unfold in time and cannot fully reverse. Each transformation leaves a trace. History accumulates and constrains future possibility.",
        example: "You cannot un-erode a mountain. A demolished building leaves a gap in the urban fabric. Time moves in one direction.",
        anchors: ["mass", "energy-capacity"],
      },
      {
        id: "temporal-unfolding",
        name: "Temporal Unfolding & Sequence",
        definition: "Ordered progression that stabilises transformation. Things happen in sequences that matter — the order of construction, growth, or cultural development affects the outcome.",
        example: "A street must exist before buildings line it. Roots must establish before a tree can grow tall. Sequence is not arbitrary.",
        anchors: ["structural-continuity", "spatial-continuity"],
      },
      {
        id: "energy-exchange",
        name: "Energy Exchange & Viability",
        definition: "Systems must acquire and regulate energy to persist. The balance between energy input and maintenance cost determines whether a system can endure.",
        example: "A building that costs more to heat than its occupants can afford will be abandoned. An organism that burns more calories finding food than food provides will starve.",
        anchors: ["energy-capacity", "material-composition"],
      },
      {
        id: "feedback-regulation",
        name: "Feedback Regulation & Responsiveness",
        definition: "Systems adjust through internal and external feedback. Positive feedback amplifies change; negative feedback stabilises. Both are necessary for coherence.",
        example: "Foot traffic creates paths (positive feedback). Erosion triggers revegetation (negative feedback). Markets correct through price signals.",
        anchors: ["structural-continuity", "boundary-condition"],
      },
      {
        id: "intrinsic-emergence",
        name: "Intrinsic Emergence",
        definition: "New coherence appears when structural conditions align. This is the transitional threshold where organised structure first becomes possible.",
        example: "At a certain density of settlement, a market spontaneously appears. At a certain complexity of chemistry, self-replicating molecules emerge.",
        anchors: ["geometry", "density", "spatial-enclosure"],
      },
      {
        id: "structural-through-time",
        name: "Structural Properties Through Time",
        definition: "How structural CIPs operate under temporal conditions. The same structural properties that create spatial order also govern how that order evolves.",
        example: "Scaling laws that organise a city's form also govern its growth rate. Coupling that connects buildings also determines how change propagates between them.",
        anchors: ["scale", "structural-continuity"],
      },
      {
        id: "cross-cutting-constraints",
        name: "Cross-cutting Constraints",
        definition: "Universal constraints that link physics, life, and organised systems. Certain principles — conservation, proportionality, threshold behaviour — apply across all domains.",
        example: "Energy conservation constrains biology, physics, and economics alike. The relationship between surface area and volume affects cells, buildings, and cities.",
        anchors: ["geometry", "scale", "mass"],
      },
    ],
  },
];

type TabType = "fip" | "cip";

export function PropertiesExplorer() {
  const [activeTab, setActiveTab] = useState<TabType>("fip");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCipCategory, setActiveCipCategory] = useState<string>("structural");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const currentCipCategory = CIP_CATEGORIES.find((c) => c.id === activeCipCategory);

  return (
    <div className="w-full">
      {/* Tab selector */}
      <div className="flex gap-1 p-1 bg-surface-raised rounded-xl mb-6">
        <button
          onClick={() => { setActiveTab("fip"); setExpandedId(null); }}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === "fip"
              ? "bg-white text-charcoal shadow-sm"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <span className="block">Fundamental Properties</span>
          <span className="block text-xs opacity-60 mt-0.5">What makes form possible</span>
        </button>
        <button
          onClick={() => { setActiveTab("cip"); setExpandedId(null); }}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === "cip"
              ? "bg-white text-charcoal shadow-sm"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <span className="block">Complex Properties</span>
          <span className="block text-xs opacity-60 mt-0.5">What makes coherence possible</span>
        </button>
      </div>

      {/* FIP list */}
      {activeTab === "fip" && (
        <div className="space-y-2">
          {FIPS.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <button
                onClick={() => toggleExpand(prop.id)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                  expandedId === prop.id
                    ? "border-accent/40 bg-accent-bg"
                    : "border-border bg-surface hover:border-charcoal-muted/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-charcoal-muted w-5">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-medium text-sm text-charcoal">
                      {prop.name}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-charcoal-muted transition-transform ${
                      expandedId === prop.id ? "rotate-180" : ""
                    }`}
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
              </button>

              <AnimatePresence>
                {expandedId === prop.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-3 mx-4 mt-1 mb-2 rounded-lg bg-surface-raised">
                      <p className="text-sm text-charcoal-light leading-relaxed">
                        {prop.definition}
                      </p>
                      <p className="text-xs text-charcoal-muted mt-2 italic">
                        {prop.example}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}

      {/* CIP categories */}
      {activeTab === "cip" && (
        <div>
          <div className="flex gap-2 mb-4">
            {CIP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCipCategory(cat.id); setExpandedId(null); }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCipCategory === cat.id
                    ? "text-white"
                    : "bg-surface-raised text-charcoal-muted hover:text-charcoal"
                }`}
                style={
                  activeCipCategory === cat.id
                    ? { backgroundColor: cat.color }
                    : undefined
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {currentCipCategory && (
            <div>
              <p className="text-xs text-charcoal-muted mb-4">
                {currentCipCategory.description}
              </p>
              <div className="space-y-2">
                {currentCipCategory.properties.map((prop, i) => (
                  <motion.div
                    key={prop.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <button
                      onClick={() => toggleExpand(prop.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                        expandedId === prop.id
                          ? "border-opacity-40 bg-opacity-8"
                          : "border-border bg-surface hover:border-charcoal-muted/40"
                      }`}
                      style={
                        expandedId === prop.id
                          ? {
                              borderColor: currentCipCategory.color + "40",
                              backgroundColor: currentCipCategory.color + "08",
                            }
                          : undefined
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: currentCipCategory.color }}
                          />
                          <span className="font-medium text-sm text-charcoal">
                            {prop.name}
                          </span>
                        </div>
                        <svg
                          className={`w-4 h-4 text-charcoal-muted transition-transform ${
                            expandedId === prop.id ? "rotate-180" : ""
                          }`}
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
                    </button>

                    <AnimatePresence>
                      {expandedId === prop.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 py-3 mx-4 mt-1 mb-2 rounded-lg bg-surface-raised">
                            <p className="text-sm text-charcoal-light leading-relaxed">
                              {prop.definition}
                            </p>
                            <p className="text-xs text-charcoal-muted mt-2 italic">
                              {prop.example}
                            </p>
                            {prop.anchors && prop.anchors.length > 0 && (
                              <div className="mt-3 pt-2 border-t border-border">
                                <p className="text-xs text-charcoal-muted">
                                  <span className="font-medium">Anchored in: </span>
                                  {prop.anchors
                                    .map(
                                      (a) =>
                                        FIPS.find((f) => f.id === a)?.name || a
                                    )
                                    .join(", ")}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
