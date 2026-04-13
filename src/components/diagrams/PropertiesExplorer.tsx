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

interface FipLayer {
  name: string;
  description: string;
  properties: Property[];
}

const FIP_LAYERS: FipLayer[] = [
  {
    name: "Form-defining conditions",
    description: "These properties establish the basic conditions under which form can exist. They define spatial relation, magnitude, and physical presence.",
    properties: [
      {
        id: "geometry",
        name: "Geometry",
        definition: "The spatial relationships that define position, adjacency, orientation, and dimensionality. Geometry establishes where elements are in relation to one another and is a prerequisite for any form to exist. Without geometric relation, no stable configuration can form, because position and adjacency are prerequisites for interaction.",
        example: "A misaligned bridge support concentrates stress and cracks; aligned supports distribute load evenly.",
      },
      {
        id: "scale",
        name: "Scale",
        definition: "The absolute and relative size of a framework in relation to forces acting upon it and to other frameworks. Scale determines which physical behaviours dominate, such as whether gravity, stiffness, or material limits become critical. Different scales activate different structural behaviours and limits.",
        example: "A small wooden shelf can span freely; a large hall requires beams, trusses, or columns.",
      },
      {
        id: "mass",
        name: "Mass",
        definition: "The amount of matter present, determining inertia, load, and gravitational behaviour. Mass directly affects how a structure resists movement and how forces are transmitted through it.",
        example: "A concrete building resists wind movement; a lightweight shed shifts or lifts in strong wind.",
      },
      {
        id: "density",
        name: "Density",
        definition: "The concentration of mass within a given volume, governing weight, stability, and material response. Density influences how a framework behaves under load, vibration, and impact. Variations in density alter how energy is absorbed, transmitted, or concentrated within a structure.",
        example: "A dense stone wall dampens vibration; a hollow partition wall allows sound to pass through.",
      },
    ],
  },
  {
    name: "Material and boundary behaviour",
    description: "These properties describe how physical substances and edges interact with forces, energy, and environment.",
    properties: [
      {
        id: "material-properties",
        name: "Material Properties",
        definition: "The intrinsic physical properties of substances — such as strength, elasticity, brittleness, thermal behaviour, and conductivity — that determine how form can be realised and how it responds to force and energy. Different materials impose different structural logics, limiting what configurations can persist over time.",
        example: "Steel beams flex under load without breaking; unreinforced brick cracks under tension.",
      },
      {
        id: "material-performance",
        name: "Material Performance (Time + Environment)",
        definition: "How materials interact with load, climate, and duration through properties such as mass, porosity, elasticity, thermal inertia, reflectivity, and decay. These properties determine how spatial structure absorbs stress and moderates environmental forces. It governs durability and long-term stability rather than appearance or style.",
        example: "Untreated timber decays in moisture; treated or sheltered timber endures.",
      },
      {
        id: "boundary-conditions",
        name: "Boundary Conditions",
        definition: "The physical conditions at edges and interfaces that define separation, contact, and constraint between one space and another, such as a surface that reflects sound but absorbs heat. Boundary conditions govern how forces, energy, and matter are transferred, reflected, absorbed, or blocked.",
        example: "Double glazing reduces heat loss compared to single glass by limiting energy transfer.",
      },
      {
        id: "thermal-acoustic",
        name: "Thermal and Acoustic Behaviour",
        definition: "How space absorbs, reflects, diffuses, or retains heat and sound. These behaviours affect environmental stability and comfort without altering spatial layout or meaning.",
        example: "Carpeted rooms absorb sound; concrete interiors echo and amplify noise.",
      },
    ],
  },
  {
    name: "System stability and energy resolution",
    description: "These properties determine whether a framework can stabilise under force, maintain continuity, and resolve energy through time.",
    properties: [
      {
        id: "structural-continuity",
        name: "Structural Continuity",
        definition: "The existence of uninterrupted physical connections that allow forces to travel through a framework. Structural continuity enables loads to redistribute across the whole system rather than concentrating at isolated points. When continuity is broken, stress accumulates at the discontinuity, increasing the risk of deformation or failure.",
        example: "A continuous arch carries weight around an opening; a cracked beam fails at the break.",
      },
      {
        id: "spatial-continuity",
        name: "Spatial Continuity",
        definition: "The connectedness of space that allows movement and adjacency without abrupt breaks. It enables spaces to relate and connect smoothly as a continuous sequence. When continuity is interrupted, transitions become difficult, introducing friction and requiring greater effort to maintain connection.",
        example: "A series of connected rooms allows easy movement; narrow corridors create congestion.",
      },
      {
        id: "spatial-enclosure",
        name: "Spatial Enclosure",
        definition: "The degree to which space is physically bounded, establishing an inside–outside distinction. Spatial enclosure is not the boundary itself, but the resulting condition produced by boundaries arranged in relation to one another.",
        example: "A strong enclosure formed by four walls and a roof compared with a weak enclosure formed by a hedge or low wall.",
      },
      {
        id: "physical-resistance",
        name: "Physical Resistance",
        definition: "Establishes the thresholds beyond which deformation becomes failure, setting the limits of endurance. It defines how much external force a framework can absorb before structural change becomes irreversible.",
        example: "A thin metal rod bends under load; a thicker one resists the same force.",
      },
      {
        id: "energy-capacity",
        name: "Energy Capacity",
        definition: "The inherent ability of a system to absorb, store, conduct, or release physical energy such as heat, sound, or vibration. Energy capacity constrains how much energetic stress a system can carry before change or breakdown occurs.",
        example: "Thick masonry walls store heat during the day and release it at night.",
      },
      {
        id: "gravity-vertical-load",
        name: "Gravity and Vertical Load",
        definition: "The constant downward force acting on mass, governing how material accumulates and how stability is achieved. It establishes a fundamental distinction between supported and unsupported conditions, organising structures into vertical hierarchies that must be resolved. All structures must channel this force safely to the ground to remain stable.",
        example: "Upper floors require columns or walls beneath; unsupported spans collapse under gravity.",
      },
    ],
  },
];

const ALL_FIPS = FIP_LAYERS.flatMap((layer) => layer.properties);

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
        anchors: ["geometry", "boundary-conditions", "spatial-enclosure"],
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
        anchors: ["structural-continuity", "material-properties"],
      },
      {
        id: "persistence-repair",
        name: "Persistence, Repair & Temporal Durability",
        definition: "How coherence survives through time despite entropy and disturbance. Systems endure by repairing, maintaining, and gradually adapting their structure.",
        example: "Historic towns persist through continuous repair. Forests regenerate after fire. Bones heal. Persistence requires ongoing energy investment.",
        anchors: ["material-performance", "energy-capacity"],
      },
      {
        id: "diffusion-propagation",
        name: "Diffusion, Propagation & Field Effects",
        definition: "How structure spreads, transmits influence, and affects surrounding space. Every form creates a field of influence beyond its physical boundary.",
        example: "A church spire affects the perception of an entire district. Sound propagates. Heat diffuses. A strong centre influences surrounding organisation.",
        anchors: ["spatial-continuity", "boundary-conditions"],
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
        anchors: ["energy-capacity", "material-performance"],
      },
      {
        id: "feedback-regulation",
        name: "Feedback Regulation & Responsiveness",
        definition: "Systems adjust through internal and external feedback. Positive feedback amplifies change; negative feedback stabilises. Both are necessary for coherence.",
        example: "Foot traffic creates paths (positive feedback). Erosion triggers revegetation (negative feedback). Markets correct through price signals.",
        anchors: ["structural-continuity", "boundary-conditions"],
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

      {/* FIP list — organised in 3 layers */}
      {activeTab === "fip" && (
        <div className="space-y-6">
          {FIP_LAYERS.map((layer, li) => {
            const layerColors = ["#6B7B8D", "#4A6741", "#C4785B"];
            const color = layerColors[li] || "#6B7B8D";
            return (
              <div key={layer.name}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-charcoal-muted">{li + 1}.</span>
                  <span className="text-sm font-semibold" style={{ color }}>{layer.name}</span>
                </div>
                <p className="text-xs text-charcoal-muted mb-3 ml-[18px]">{layer.description}</p>
                <div className="space-y-2">
                  {layer.properties.map((prop, i) => {
                    const globalIndex = FIP_LAYERS.slice(0, li).reduce((sum, l) => sum + l.properties.length, 0) + i;
                    return (
                      <motion.div
                        key={prop.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: globalIndex * 0.03 }}
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
                                {(globalIndex + 1).toString().padStart(2, "0")}
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
                    );
                  })}
                </div>
              </div>
            );
          })}
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
                                        ALL_FIPS.find((f) => f.id === a)?.name || a
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
