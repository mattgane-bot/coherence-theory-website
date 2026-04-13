"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CoherenceScore {
  type: string;
  score: number;
  color: string;
  note: string;
}

interface CaseStudy {
  id: string;
  name: string;
  location: string;
  domain: "inorganic" | "organic" | "human";
  domainColor: string;
  summary: string;
  analysis: string;
  coherenceScores: CoherenceScore[];
  keyInsight: string;
  theoryLinks: { label: string; href: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fez-medina",
    name: "Fez Medina",
    location: "Fez, Morocco",
    domain: "human",
    domainColor: "#C4785B",
    summary:
      "One of the world's largest car-free urban areas, the Fez Medina has maintained continuous habitation for over a millennium. Its labyrinthine streets, hierarchical organisation from public to private, and integration of craft, commerce, and dwelling demonstrate coherence across all six types.",
    analysis:
      "The Medina exemplifies processional sublimation — movement through its streets is a staged sequence of compression and expansion, concealment and revelation. Each turn reveals a new spatial condition. Centres form at intersections of activity: the mosque, the fountain, the souk entrance, the neighbourhood oven. These centres are not designed as focal points but emerge from the convergence of daily life. The scalar distribution is remarkable: ornamental detail, room, courtyard, house, derb (neighbourhood), quarter, and city all operate as nested systems supporting one another. Cultural patterns — the muezzin's call, the hammam, the communal bread oven — create temporal rhythms that reinforce spatial structure.",
    coherenceScores: [
      { type: "Aesthetic/Structural", score: 5, color: "#6B7B8D", note: "Extraordinary spatial resolution at every scale" },
      { type: "Dynamic", score: 5, color: "#5A7365", note: "Energy flows through a perfectly calibrated network" },
      { type: "Nature", score: 4, color: "#4A6741", note: "Courtyards, fountains, gardens integrate nature within density" },
      { type: "Livingness", score: 4, color: "#C4785B", note: "Human-scaled, sensory-rich, thermally comfortable" },
      { type: "Societal", score: 5, color: "#B06848", note: "Dense social networks supported by spatial structure" },
      { type: "Symbolic", score: 5, color: "#9B5A45", note: "Deeply layered cultural meaning accumulated over centuries" },
    ],
    keyInsight:
      "Coherence here was not designed but cultivated — emerging from centuries of incremental adjustment guided by shared cultural patterns. The Medina demonstrates that endurance comes from the repeated interaction of simple elements over time, not from master planning.",
    theoryLinks: [
      { label: "Sublimation", href: "/theory/sublimation" },
      { label: "Pattern Languages", href: "/theory/pattern-languages" },
      { label: "Centres to Endurance", href: "/theory/centres-to-endurance" },
    ],
  },
  {
    id: "brutalist-housing",
    name: "Robin Hood Gardens",
    location: "London, UK (demolished 2017)",
    domain: "human",
    domainColor: "#C4785B",
    summary:
      "Alison and Peter Smithson's 1972 council housing estate aimed to create 'streets in the sky' — elevated walkways that would replicate the social life of traditional streets. Despite sophisticated architectural intentions, the estate was widely considered a failure and was demolished after decades of social problems.",
    analysis:
      "Robin Hood Gardens is a case study in Eschermatics — local coherence that fails globally. Individual design decisions were defensible: the elevated walkways addressed circulation, the concrete construction was economical, the green space was generous. But the system as a whole could not support the life it was intended to contain. The 'streets in the sky' lacked the edges, thresholds, gradients, and centres that make real streets work. They were corridors, not streets — movement without event. The raw concrete, while structurally honest, offered no symbolic charge, no warmth, no sensory richness. Connection to nature was limited to views from elevation rather than embodied contact. Social coherence was undermined by the spatial structure that was meant to support it.",
    coherenceScores: [
      { type: "Aesthetic/Structural", score: 3, color: "#6B7B8D", note: "Bold formal composition but harsh material expression" },
      { type: "Dynamic", score: 2, color: "#5A7365", note: "Corridors channelled movement without resolution" },
      { type: "Nature", score: 2, color: "#4A6741", note: "Green space present but disconnected from dwelling" },
      { type: "Livingness", score: 1, color: "#C4785B", note: "Cold, exposed, hostile to the body at close range" },
      { type: "Societal", score: 1, color: "#B06848", note: "Social isolation despite proximity — space prevented gathering" },
      { type: "Symbolic", score: 2, color: "#9B5A45", note: "Ideological meaning but no cultural memory or belonging" },
    ],
    keyInsight:
      "Structural coherence alone cannot sustain a system. When livingness, societal, and symbolic coherence are absent, even architecturally ambitious environments fail. The Coherence Hierarchy's dependency principle is demonstrated here: human coherence cannot be achieved without the organic and inorganic foundations.",
    theoryLinks: [
      { label: "Coherence Hierarchy", href: "/theory/coherence-hierarchy" },
      { label: "Governing Conditions", href: "/theory/governing-conditions" },
      { label: "Emergent Centres", href: "/theory/emergent-centres" },
    ],
  },
  {
    id: "japanese-garden",
    name: "Katsura Imperial Villa",
    location: "Kyoto, Japan",
    domain: "organic",
    domainColor: "#4A6741",
    summary:
      "Built in the early 17th century, Katsura is widely regarded as one of the finest examples of Japanese architecture and garden design. Its integration of building, garden, and landscape demonstrates coherence achieved through processional sublimation and deep connection to nature.",
    analysis:
      "Katsura's genius is in its sequencing. The garden is designed to be experienced through movement — meandering paths frame successive views, each step altering perspective. This is processional sublimation operating at the highest level: the instinct for exploration is transformed into contemplative awareness. The buildings do not dominate the landscape but participate in it — materials weather, sliding screens dissolve boundaries, platforms extend living space into the garden. Seasonal change is not accommodated but celebrated: the garden is designed to be different in every season, each revealing aspects invisible at other times. Centres form where paths converge at viewing points, tea houses, and water's edge — not imposed focal points but emergent pauses in a carefully staged journey.",
    coherenceScores: [
      { type: "Aesthetic/Structural", score: 5, color: "#6B7B8D", note: "Exquisite proportion and spatial resolution" },
      { type: "Dynamic", score: 5, color: "#5A7365", note: "Movement through space is perfectly choreographed" },
      { type: "Nature", score: 5, color: "#4A6741", note: "Building, garden, and landscape are indistinguishable" },
      { type: "Livingness", score: 5, color: "#C4785B", note: "Every space supports the body and the senses" },
      { type: "Societal", score: 4, color: "#B06848", note: "Designed for ceremony and contemplation, less for community" },
      { type: "Symbolic", score: 5, color: "#9B5A45", note: "Layers of literary, seasonal, and cultural reference" },
    ],
    keyInsight:
      "Katsura demonstrates that the highest coherence emerges when deep sublimation and processional sublimation operate together — when the structural field and the unfolding experience reinforce one another. Nature is not added to architecture; they are the same system.",
    theoryLinks: [
      { label: "Sublimation", href: "/theory/sublimation" },
      { label: "Dynamic Engine", href: "/theory/dynamic-engine" },
      { label: "Three Domains", href: "/theory/three-domains" },
    ],
  },
  {
    id: "coral-reef",
    name: "Coral Reef Ecosystem",
    location: "Global (tropical oceans)",
    domain: "organic",
    domainColor: "#4A6741",
    summary:
      "Coral reefs demonstrate coherence in a purely non-human system. Despite occupying less than 1% of the ocean floor, they support 25% of marine species — an extraordinary concentration of organised relationship sustained by efficient energy cycling.",
    analysis:
      "A reef is a system of centres at every scale: individual polyps, coral heads, reef zones (lagoon, reef flat, reef crest, fore-reef), and the reef as a whole. Each scale exhibits the same pattern: energy concentrated, relationships stabilised, diversity supported. The system's endurance depends on dynamic coherence — nutrient cycling, tidal flow, temperature regulation — operating within narrow parameters. When these parameters are exceeded (bleaching events), the system's coherence rapidly degrades, demonstrating the theory's principle that maintenance costs must remain within what can be sustained. The reef's complexity arises not from design but from the repeated interaction of simple elements over time: polyp builds on polyp, species adapts to niche, relationship stabilises through use.",
    coherenceScores: [
      { type: "Aesthetic/Structural", score: 5, color: "#6B7B8D", note: "Fractal geometry resolved at every scale" },
      { type: "Dynamic", score: 5, color: "#5A7365", note: "Energy cycles with extraordinary efficiency" },
      { type: "Nature", score: 5, color: "#4A6741", note: "Nature coherent with itself — the reference condition" },
      { type: "Livingness", score: 5, color: "#C4785B", note: "Supports enormous biodiversity in minimal space" },
      { type: "Societal", score: 4, color: "#B06848", note: "Symbiotic relationships function as social structure" },
      { type: "Symbolic", score: 3, color: "#9B5A45", note: "No symbolic dimension (non-human system)" },
    ],
    keyInsight:
      "Coral reefs demonstrate the energetic principle at its purest: what survives is what can continue without exhausting its means. The reef is the survival of the most energy-efficient made visible — and its vulnerability to climate change shows what happens when governing conditions shift beyond the system's capacity to adapt.",
    theoryLinks: [
      { label: "Governing Conditions", href: "/theory/governing-conditions" },
      { label: "Dynamic Engine", href: "/theory/dynamic-engine" },
      { label: "Centres to Endurance", href: "/theory/centres-to-endurance" },
    ],
  },
];

export default function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState<string | null>(null);

  const activeData = activeStudy
    ? CASE_STUDIES.find((s) => s.id === activeStudy)
    : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl font-semibold text-charcoal mb-2">
          Case Studies
        </h1>
        <p className="text-charcoal-light leading-relaxed mb-8">
          Real-world examples of coherence and incoherence analysed through the
          Coherence Theory framework. Each study evaluates a system across all
          six coherence types and identifies the theoretical principles at work.
        </p>

        {/* Case study cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {CASE_STUDIES.map((study, i) => {
            const isActive = activeStudy === study.id;
            const avgScore =
              study.coherenceScores.reduce((a, b) => a + b.score, 0) /
              study.coherenceScores.length;

            return (
              <motion.button
                key={study.id}
                onClick={() =>
                  setActiveStudy(isActive ? null : study.id)
                }
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isActive
                    ? "ring-1 shadow-md"
                    : "hover:shadow-sm"
                }`}
                style={{
                  borderColor: isActive
                    ? study.domainColor
                    : study.domainColor + "30",
                  backgroundColor: isActive
                    ? study.domainColor + "08"
                    : "white",
                  ...(isActive ? { ringColor: study.domainColor } : {}),
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: study.domainColor }}
                  />
                  <span className="text-xs text-charcoal-muted">
                    {study.domain} domain
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">
                  {study.name}
                </h3>
                <p className="text-xs text-charcoal-muted mb-3">
                  {study.location}
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Mini score bar */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(avgScore / 5) * 100}%`,
                        backgroundColor:
                          avgScore >= 4
                            ? "#4A6741"
                            : avgScore >= 3
                              ? "#D4A853"
                              : "#C4785B",
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium text-charcoal-muted">
                    {avgScore.toFixed(1)}/5
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded case study */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border pt-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: activeData.domainColor }}
                />
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  {activeData.name}
                </h2>
                <span className="text-sm text-charcoal-muted">
                  {activeData.location}
                </span>
              </div>

              {/* Analysis */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-2">
                  Analysis
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {activeData.analysis}
                </p>
              </div>

              {/* Coherence scores */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-3">
                  Coherence Profile
                </h3>
                <div className="space-y-2">
                  {activeData.coherenceScores.map((cs) => (
                    <div key={cs.type}>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: cs.color }}
                        />
                        <span className="text-sm text-charcoal w-36">
                          {cs.type}
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: cs.color }}
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(cs.score / 5) * 100}%`,
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-charcoal w-6 text-right">
                          {cs.score}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-muted ml-[22px] mt-0.5">
                        {cs.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key insight */}
              <div
                className="p-5 rounded-2xl border mb-6"
                style={{
                  borderColor: activeData.domainColor + "30",
                  backgroundColor: activeData.domainColor + "06",
                }}
              >
                <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-2">
                  Key Insight
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {activeData.keyInsight}
                </p>
              </div>

              {/* Theory links */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-charcoal-muted self-center">
                  Related theory:
                </span>
                {activeData.theoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs px-3 py-1 rounded-full border border-border bg-surface hover:border-accent transition-colors text-charcoal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
