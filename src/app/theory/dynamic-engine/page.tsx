"use client";

import { DynamicEngineTimeline } from "@/components/diagrams/DynamicEngineTimeline";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DynamicEnginePage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm font-medium text-charcoal-muted">
            Process
          </span>
        </div>

        <h1>The Dynamic Engine</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          The Dynamic Engine describes how coherence unfolds and renews through
          time. It is the generative process through which tension becomes
          structured, perceptible, and sustained. Its six phases form a recursive
          sequence in which alignment is established, structure forms, coherence
          becomes perceptible, and systems stabilise through use and feedback.
        </p>

        <div className="bg-accent-bg border border-accent/20 rounded-xl px-5 py-4 my-8">
          <p className="text-sm text-charcoal-light !mb-0">
            <strong className="text-charcoal">Key insight:</strong> Each phase
            performs necessary work. When phases are bypassed, coherence becomes
            unstable or fails to form. The process is recursive — continuous
            improvement loops back to earlier phases.
          </p>
        </div>
      </motion.div>

      {/* Interactive Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="my-12 not-prose"
      >
        <DynamicEngineTimeline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>How the Dynamic Engine works</h2>

        <p>
          The Dynamic Engine is not a simple linear sequence but a recursive
          process. Structure forms, stabilises, develops, and then must be
          continuously maintained and renewed. The arrows in the diagram do not
          all represent the same kind of relationship — some drive organisation,
          some constrain it, and some describe temporal development.
        </p>

        <h3>From conditions to structure</h3>

        <p>
          Through intrinsic emergence and the stages of the Dynamic Engine,
          structure develops into centres, forms, and recurring patterns that
          become organised into systems. In the early phases, the system moves
          from conditions to structure. Energy, organised through the Triad of
          gradient, order, and constraint, produces the conditions for structure
          to appear.
        </p>

        <h3>From structure to system</h3>

        <p>
          After morphogenesis produces centres and forms, emergence brings them
          together as a functioning system. The whole becomes more than its parts.
          In becoming, the system stabilises and develops an identity. It has
          become what it is — a river, an organism, a town.
        </p>

        <h3>From system to endurance</h3>

        <p>
          Through unfolding, the system develops complexity, depth, and resilience
          through interaction with its environment. In human systems, this is
          where cultural memory, symbolic meaning, and layered history
          accumulate. Continuous improvement describes the ongoing process of
          maintenance, repair, adaptation, and renewal.
        </p>

        <h3>The recursive nature</h3>

        <p>
          The Dynamic Engine is recursive because continuous improvement loops
          back to earlier phases. A town that repairs a building is performing
          morphogenesis again at a local level. A culture that renews its
          institutions is returning to emergence and becoming. Systems that
          cannot perform this recursive renewal eventually lose coherence and
          fail.
        </p>

        <h2>Across the three domains</h2>

        <p>
          The stages of the Dynamic Engine remain the same across all three
          domains, but what develops through time is different:
        </p>

        <ul>
          <li>
            <strong>Inorganic systems:</strong> The Dynamic Engine describes the
            formation and stabilisation of physical structure — rivers,
            mountains, crystals, planetary systems. Development means structural
            formation, interaction, erosion, and physical change.
          </li>
          <li>
            <strong>Organic systems:</strong> The Dynamic Engine describes the
            development of living organisms and ecosystems. Morphogenesis refers
            to biological form, emergence to the organism functioning as a living
            system, and later stages to growth, adaptation, and evolution.
          </li>
          <li>
            <strong>Human systems:</strong> The Dynamic Engine describes the
            development of buildings, cities, institutions, and cultural
            structures. Morphogenesis refers to built form, emergence to social
            functioning, and later stages to cultural embedding and long-term
            transformation.
          </li>
        </ul>

        <h2>Within Coherence Theory</h2>

        <p>
          The Dynamic Engine is the generative structure of Coherence Theory. It
          explains how coherence is produced, how systems develop through time,
          and how alignment is established, stabilised, and renewed. While the
          Coherence Hierarchy evaluates whether coherence exists, the Dynamic
          Engine explains how it comes about.
        </p>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                label: "Coherence Hierarchy",
                href: "/theory/coherence-hierarchy",
                description: "How coherence is evaluated across six domains",
              },
              {
                label: "Centres to Endurance",
                href: "/theory/centres-to-endurance",
                description: "From local centres to system-wide endurance",
              },
              {
                label: "Governing Conditions",
                href: "/theory/governing-conditions",
                description: "Energy, entropy, and the Triad that drive the engine",
              },
            ].map((concept) => (
              <Link
                key={concept.href}
                href={concept.href}
                className="block p-4 rounded-xl border border-border hover:border-accent hover:shadow-sm transition-all bg-surface"
              >
                <span className="text-sm font-medium text-charcoal">
                  {concept.label}
                </span>
                <span className="block text-xs text-charcoal-muted mt-1">
                  {concept.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </article>
  );
}
