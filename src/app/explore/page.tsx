"use client";

import { motion } from "framer-motion";
import { MasterTheoryDiagram } from "@/components/diagrams/MasterTheoryDiagram";

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="font-serif text-4xl font-semibold text-charcoal mb-3">
          Explore Coherence Theory
        </h1>
        <p className="text-charcoal-light max-w-2xl mx-auto">
          An interactive map of how all concepts in Coherence Theory relate to
          one another. Click any node to learn more, hover to see connections.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <MasterTheoryDiagram />
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { color: "bg-inorganic", label: "Governing Conditions", description: "Energy, entropy, the Triad, intrinsic properties" },
          { color: "bg-human", label: "Human Mediation", description: "Perception, human conditions, sublimation" },
          { color: "bg-accent", label: "Process & Evaluation", description: "Dynamic Engine, coherence, alignment" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
            <div className={`w-3 h-3 rounded-full ${item.color} shrink-0 mt-0.5`} />
            <div>
              <p className="text-sm font-medium text-charcoal">{item.label}</p>
              <p className="text-xs text-charcoal-muted mt-0.5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
