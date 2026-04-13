"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProgressionDiagram } from "@/components/diagrams/ProgressionDiagram";

export default function CentresToEndurancePage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-organic" />
          <span className="text-sm font-medium text-charcoal-muted">Structure</span>
        </div>

        <h1>From Centres to Endurance</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          Coherence does not appear all at once. It accumulates from local
          concentrations of organised relationship — centres — through
          progressive stages of alignment until systems achieve the capacity to
          persist through time.
        </p>

        <h2>What Is a Centre?</h2>

        <p>
          A centre is a <strong>relational condition</strong> in which structural
          forces converge so that coherence becomes locally intensified. It is a
          region where boundaries, directional forces, gradients of scale, and
          structural constraints align so that interactions become organised
          rather than dispersed.
        </p>

        <p>
          A centre is <em>not</em> a geometric middle, a visual object, or a
          decorative feature. It is an event of structure — a moment in which
          coherence becomes locally concentrated and perceptible. Remove the
          supporting relationships and the centre weakens or dissolves.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-accent/30 bg-accent-bg">
          <p className="text-sm font-medium text-accent">
            &ldquo;A centre is not a thing but an event of structure — a moment
            in which coherence becomes locally concentrated and
            perceptible.&rdquo;
          </p>
        </div>

        <h2>The Relational Nature of Centres</h2>

        <p>
          Centres are inherently relational. They exist because of the network
          of supporting structures around them. A doorway becomes a centre not
          through its own geometry alone, but through its relationship to the
          walls that frame it, the threshold it marks, the rooms it connects,
          and the path of movement it organises.
        </p>

        <p>
          Centres function as <strong>energetic minima</strong> — locations
          within a system where energetic conflict decreases and energy becomes
          organised and stabilised. The system naturally favours configurations
          requiring less corrective adjustment. Where forces resolve into
          balanced states, centres emerge.
        </p>

        <h2>Scalar Distribution</h2>

        <p>
          Centres operate across scale — from the detail level of a carved
          capital or a door handle, through rooms, buildings, and streets, to
          the landscape level of a valley or coastline. Vital systems exhibit{" "}
          <strong>patterned concentration rather than uniform distribution</strong>.
          When centres align hierarchically across scale, they reinforce one
          another and deepen systemic stability.
        </p>

        <p>
          This scalar property is critical: coherence requires balance —
          concentration without domination. A single overwhelming centre
          suppresses neighbouring structure. Too many competing centres fragment
          attention and dissolve the whole. The most coherent systems distribute
          centres across scales in ways that support without competing.
        </p>

        <h2>Symbolic Charge</h2>

        <p>
          When symbolic meaning aligns with structural coherence, centres
          acquire <strong>symbolic charge</strong> — the capacity of a form,
          place, or object to concentrate meaning, attention, and emotional
          energy. Symbolic charge develops only when form, proportion, material,
          and spatial relationships reinforce the symbolic idea.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-border bg-surface-raised">
          <p className="text-sm text-charcoal-light leading-relaxed">
            Symbols alone cannot generate coherence, and structure alone cannot
            sustain meaning. When the two reinforce each other, centres acquire
            vitality — they become carriers of both structural stability and
            cultural significance.
          </p>
        </div>

        <h2>The Progression</h2>

        <p>
          From centres, coherence accumulates through a sequence of dependent
          stages. Each stage builds on the one before it — you cannot achieve
          endurance without viability, viability without wholeness, wholeness
          without congruence, or congruence without centres.
        </p>

        <div className="not-prose my-8">
          <ProgressionDiagram />
        </div>

        <h2>Centres as Carriers of Vitality</h2>

        <p>
          Strong centres become carriers of vitality — locations where activity
          can gather, pause, and transform without instability. A market square,
          a well-placed window, a clearing in a forest: each functions as a
          centre because it organises energy, attention, and use around a stable
          point of convergence.
        </p>

        <p>
          The human nervous system detects the alignment that produces centres.
          Where centres are strong, predictive perception stabilises and
          attention can rest without vigilance. Where centres are weak or
          absent, the body compensates with increased scanning, orientation
          effort, and low-level stress. This is not aesthetic preference — it is
          neurophysical regulation responding to spatial structure.
        </p>

        <h2>From Structure to Persistence</h2>

        <p>
          The progression from centres to endurance is not a design method or a
          checklist. It describes how coherence actually accumulates in real
          systems — physical, biological, and cultural. Systems that achieve
          endurance do so because their centres are well-formed, mutually
          reinforcing across scale, integrated into wholes, and energetically
          sustainable.
        </p>

        <p>
          Systems that conserve energy while increasing structural and
          perceptual legibility are those that persist. Enduring environments
          combine strong symbolic language with clear spatial organisation — the
          two reinforce each other, making the system increasingly difficult to
          replace and increasingly rich in meaning.
        </p>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Emergent Centres", href: "/theory/emergent-centres", description: "How coherence is perceived through beauty, harmony, and place" },
              { label: "The Dynamic Engine", href: "/theory/dynamic-engine", description: "How systems develop through six phases over time" },
              { label: "Pattern Languages", href: "/theory/pattern-languages", description: "Stable resolutions to recurring energetic problems" },
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
