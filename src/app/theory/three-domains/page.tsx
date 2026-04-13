"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThreeDomainsPage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm font-medium text-charcoal-muted">Core</span>
        </div>

        <h1>The Three Domains of Coherence</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          The same underlying process applies in inorganic, organic, and human
          systems, but the definition of endurance differs in each case. The
          process of coherence is universal, but what coherence must sustain
          becomes progressively more complex.
        </p>

        <h2>Inorganic Systems</h2>
        <div className="not-prose my-6 p-6 rounded-2xl border border-inorganic/30 bg-inorganic-bg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-inorganic" />
            <h3 className="font-serif text-xl font-semibold text-charcoal">Structure must hold</h3>
          </div>
          <p className="text-sm text-charcoal-light leading-relaxed mb-3">
            Coherence refers to structural and dynamic stability — the alignment of
            energy, forces, material structure, and dynamic behaviour so that
            structure does not collapse, fracture, or dissipate.
          </p>
          <p className="text-sm font-medium text-inorganic">
            Inorganic coherence allows structure to endure.
          </p>
        </div>

        <p>
          In inorganic systems, coherence can be understood through two primary
          types: <strong>structural coherence</strong> — whether physical form,
          geometry, proportion, and material organisation are stable and
          structurally viable — and <strong>dynamic coherence</strong> — whether
          energy, forces, and movement are balanced and resolved through time
          without causing breakdown or instability.
        </p>

        <h2>Organic Systems</h2>
        <div className="not-prose my-6 p-6 rounded-2xl border border-organic/30 bg-organic-bg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-organic" />
            <h3 className="font-serif text-xl font-semibold text-charcoal">The organism must live</h3>
          </div>
          <p className="text-sm text-charcoal-light leading-relaxed mb-3">
            Coherence refers to biological viability — the alignment of energy
            intake, metabolism, structure, repair, and adaptation so that the
            organism can survive, regulate itself, and reproduce through time.
          </p>
          <p className="text-sm font-medium text-organic">
            Organic coherence allows life to endure.
          </p>
        </div>

        <p>
          Organic systems are not only structurally stable but actively
          maintained through metabolism, repair, and reproduction. They are
          self-maintaining systems rather than passive structures. Centres become
          cells, organs, or functional biological centres. Patterns become
          biological organisation, behaviour, and ecological relationships.
        </p>

        <h2>Human Systems</h2>
        <div className="not-prose my-6 p-6 rounded-2xl border border-human/30 bg-human-bg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-human" />
            <h3 className="font-serif text-xl font-semibold text-charcoal">The system must remain liveable</h3>
          </div>
          <p className="text-sm text-charcoal-light leading-relaxed mb-3">
            Coherence refers to the alignment of physical structure, human needs,
            social organisation, and cultural meaning through time so that
            environments, institutions, and cultures remain usable, valued, and
            capable of continuing.
          </p>
          <p className="text-sm font-medium text-human">
            Human coherence allows societies and cultures to endure.
          </p>
        </div>

        <p>
          Human systems are the most complex because they require alignment
          across physical, biological, perceptual, social, and cultural domains
          simultaneously. Unlike organic systems that persist through metabolism
          and reproduction, human systems persist through maintenance and cultural
          transmission.
        </p>

        <h2>Increasing complexity</h2>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-charcoal">Domain</th>
                <th className="text-left py-3 px-4 font-medium text-charcoal">Requires</th>
                <th className="text-left py-3 px-4 font-medium text-charcoal">Coherence means</th>
                <th className="text-left py-3 px-4 font-medium text-charcoal">How it persists</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-charcoal font-medium">Inorganic</td>
                <td className="py-3 px-4 text-charcoal-light">Energy and structure</td>
                <td className="py-3 px-4 text-charcoal-light">Structural and dynamic stability</td>
                <td className="py-3 px-4 text-charcoal-light">Stability</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-charcoal font-medium">Organic</td>
                <td className="py-3 px-4 text-charcoal-light">Energy, structure, and adaptation</td>
                <td className="py-3 px-4 text-charcoal-light">Biological viability</td>
                <td className="py-3 px-4 text-charcoal-light">Metabolism and reproduction</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-charcoal font-medium">Human</td>
                <td className="py-3 px-4 text-charcoal-light">Energy, structure, adaptation, perception, and culture</td>
                <td className="py-3 px-4 text-charcoal-light">System viability</td>
                <td className="py-3 px-4 text-charcoal-light">Maintenance and cultural transmission</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          As systems move from inorganic to organic to human domains, the number
          of conditions that must remain aligned increases. Human environments
          must function physically, biologically, psychologically, socially, and
          culturally, and must continue to do so through time.
        </p>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Governing Conditions", href: "/theory/governing-conditions", description: "Energy, entropy, and intrinsic properties" },
              { label: "The Dynamic Engine", href: "/theory/dynamic-engine", description: "How systems develop through six phases" },
              { label: "Coherence Hierarchy", href: "/theory/coherence-hierarchy", description: "Six types of coherence across domains" },
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
