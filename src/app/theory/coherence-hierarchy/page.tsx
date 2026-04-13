"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CoherenceHierarchyDiagram } from "@/components/diagrams/CoherenceHierarchyDiagram";

export default function CoherenceHierarchyPage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-charcoal-muted" />
          <span className="text-sm font-medium text-charcoal-muted">Evaluation</span>
        </div>

        <h1>The Coherence Hierarchy</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          The Coherence Hierarchy provides an evaluative framework for
          identifying where alignment holds and where it breaks across six
          domains of coherence. These domains correspond to the inorganic,
          organic, and human conditions under which all enduring systems must
          operate.
        </p>

        <h2>Six Types of Coherence</h2>

        <p>
          Not all coherence is the same. A system may be structurally sound but
          socially dysfunctional, or culturally rich but physically
          unsustainable. The Coherence Hierarchy identifies six distinct types,
          each evaluating alignment in a different domain. They are
          interdependent rather than separate — failure in one domain can
          undermine coherence in others.
        </p>

        <div className="not-prose my-8">
          <CoherenceHierarchyDiagram />
        </div>

        <h2>Three Dependent Domains</h2>

        <p>
          The six types are not independent options to choose from. They form
          three <strong>dependent domains</strong> that build upon each other:
        </p>

        <div className="not-prose my-6 space-y-3">
          <div className="p-5 rounded-2xl border border-inorganic/30 bg-inorganic-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-inorganic" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">Inorganic Domain</h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Governs form and energy through <strong>aesthetic/structural</strong> and{" "}
              <strong>dynamic</strong> coherence. If physical structure is unsound or
              energy flows are unresolved, nothing built upon them can endure.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-organic/30 bg-organic-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-organic" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">Organic Domain</h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Depends on inorganic and dynamic coherence and adds{" "}
              <strong>connection to nature</strong>, governing ecological and environmental
              integration. Living systems must be grounded in physical reality and
              integrated with natural cycles.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-human/30 bg-human-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-human" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">Human Domain</h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Depends on both inorganic and organic coherence and adds{" "}
              <strong>livingness</strong>, <strong>societal</strong>, and{" "}
              <strong>symbolic</strong> coherence — governing biological wellbeing,
              social organisation, and cultural meaning.
            </p>
          </div>
        </div>

        <div className="not-prose my-6 p-6 rounded-2xl border border-accent/30 bg-accent-bg">
          <p className="text-sm font-medium text-accent">
            Human coherence depends on organic coherence, and organic coherence
            depends on inorganic coherence. Failure at a lower level eventually
            undermines the levels above.
          </p>
        </div>

        <h2>Why Multiple Types Matter</h2>

        <p>
          Many failures arise from treating one form of coherence as if it were
          sufficient. A building may be structurally sound yet perceptually
          hostile. An institution may be socially functional yet culturally
          anonymous. A settlement may be beautiful yet economically unviable.
        </p>

        <p>
          These are not aesthetic accidents or matters of opinion. They are
          structural consequences of ignoring or constraining one domain while
          optimising another. Coherence becomes stronger as multiple types align
          within a single system. Environments that support only one form may
          function in a limited way, but deeper coherence emerges when
          structural, dynamic, social, symbolic, and ecological conditions
          reinforce one another.
        </p>

        <h2>Coherence as Energy Regulation</h2>

        <p>
          Culture itself functions as an energy regulation system. Cultural
          norms regulate the distribution and direction of energy within a
          society, in much the same way that physical structures stabilise forces
          within material systems. Energy is sorted into three channels:
        </p>

        <ul>
          <li>
            <strong>Sublimation</strong> — energy redirected into stabilising
            forms such as art, ritual, architecture, and narrative
          </li>
          <li>
            <strong>Suppression</strong> — energy denied expression, treated as
            dangerous or taboo
          </li>
          <li>
            <strong>Expression</strong> — energy released openly in play,
            celebration, or transgression
          </li>
        </ul>

        <p>
          When sublimation operates well, environments acquire depth, symbolism,
          and resonance. When it is weakened or replaced by suppression, spatial
          relationships lose legibility, symbolic meaning fades, and
          environments begin to feel lifeless even when they remain technically
          functional. The balance between these channels shapes whether coherence
          at the human level can be achieved and maintained.
        </p>

        <h2>Using the Hierarchy</h2>

        <p>
          The Coherence Hierarchy can be used in three ways:
          as an <strong>explanatory</strong> framework to understand why systems
          succeed or fail; as a <strong>diagnostic</strong> tool to identify
          where misalignment occurs; and as a <strong>generative</strong> guide
          for creating systems that can support life, meaning, and endurance
          through time.
        </p>

        <p>
          The role of design is not to impose form, but to guide conditions so
          that coherence can emerge across all six domains simultaneously.
        </p>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Governing Conditions", href: "/theory/governing-conditions", description: "Energy, entropy, and the intrinsic properties" },
              { label: "Centres to Endurance", href: "/theory/centres-to-endurance", description: "How coherence accumulates from local to whole" },
              { label: "Sublimation", href: "/theory/sublimation", description: "How instinct becomes cultural and spatial form" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="block p-4 rounded-xl border border-border hover:border-accent hover:shadow-sm transition-all bg-surface">
                <span className="text-sm font-medium text-charcoal">{c.label}</span>
                <span className="block text-xs text-charcoal-muted mt-1">{c.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </article>
  );
}
