"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PatternLanguageNetwork } from "@/components/diagrams/PatternLanguageNetwork";

export default function PatternLanguagesPage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-inorganic" />
          <span className="text-sm font-medium text-charcoal-muted">Application</span>
        </div>

        <h1>Pattern Languages</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          Patterns are stable resolutions to recurring energetic problems — not
          arbitrary forms but configurations that have repeatedly proven capable
          of continuing without exhausting the energy required to maintain them.
          They carry the memory of successful alignment.
        </p>

        <h2>What Is a Pattern?</h2>

        <p>
          A pattern is a <strong>recurring relationship between form and life
          that has proven able to endure</strong>. It is not a rule, a template,
          or a style. It is a configuration that resolves a specific energetic
          problem in a way that can be reproduced across contexts while adapting
          to local conditions.
        </p>

        <p>
          Patterns emerge from the concentration of coherence into identifiable
          centres that then interlock. They describe how coherence has
          previously emerged — and how it might emerge again. The key principle
          is that coherence does not arise from complexity or control, but from
          the repeated interaction of simple elements over time.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-accent/30 bg-accent-bg">
          <p className="text-sm font-medium text-accent">
            &ldquo;Coherence does not arise from complexity or control, but from
            the repeated interaction of simple elements over time. When these
            interactions reinforce one another, new qualities emerge that cannot
            be traced to any single part.&rdquo;
          </p>
        </div>

        <h2>Process Languages and Form Languages</h2>

        <p>
          The theory distinguishes two complementary types of pattern language:
        </p>

        <div className="not-prose my-6 space-y-3">
          <div className="p-5 rounded-2xl border border-organic/30 bg-organic-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-organic" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Process Languages
              </h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Recognisable patterns of transformation that guide how a system
              changes over time. Ritual progressions, urban renewal sequences,
              ecological succession, seasonal cycles, social negotiation — these
              are all process languages. They describe <em>how</em> coherence
              unfolds.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-inorganic/30 bg-inorganic-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-inorganic" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Form Languages
              </h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Recurring structural patterns that support life, use, and meaning.
              Courtyards, arcades, thresholds, axes, enclosures, gradients —
              these are form languages. They encode function and memory
              together, describing <em>what</em> coherent structure looks like.
            </p>
          </div>
        </div>

        <p>
          Critically, form and process are inseparable. Forms arise from
          processes and guide their continuation. A courtyard is both a spatial
          form and the product of a process — and it shapes the processes
          (social gathering, climate regulation, domestic life) that take place
          within it.
        </p>

        <h2>Forms as Energy Modulators</h2>

        <p>
          Forms do not generate energy — they modulate it. Boundaries, openings,
          curves, and thresholds shape how movement, light, sound, heat, and
          attention unfold in space. Like a riverbed directing water flow, form
          channels forces that originate elsewhere.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-border bg-surface-raised">
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-charcoal mb-1">Too little modulation</p>
              <p className="text-charcoal-muted">
                Energy disperses. Space feels formless, exposed, and
                disorienting.
              </p>
            </div>
            <div>
              <p className="font-medium text-charcoal mb-1">Coherent modulation</p>
              <p className="text-charcoal-muted">
                Energy is shaped just enough for life to take hold. Space
                supports activity without constraining it.
              </p>
            </div>
            <div>
              <p className="font-medium text-charcoal mb-1">Too much modulation</p>
              <p className="text-charcoal-muted">
                Energy is blocked. Space feels rigid, controlled, and
                suppressive.
              </p>
            </div>
          </div>
        </div>

        <h2>A Connected Language</h2>

        <p>
          Patterns do not operate in isolation. They form connected languages
          where each pattern supports and is supported by others. A threshold
          connects to an enclosure; an enclosure requires a centre; a centre
          organises an axis; an axis structures a procession. The richness of a
          pattern language lies not in any single pattern but in the density and
          coherence of their connections.
        </p>

        <div className="not-prose my-8">
          <PatternLanguageNetwork />
        </div>

        <h2>Why Pattern Languages Endure</h2>

        <p>
          Pattern languages endure because they encode accumulated knowledge
          refined through repetition, adaptation, and use. They reduce repeated
          effort — each new instance does not need to solve from scratch.
          They distribute load across proven configurations. They enable
          environments to change without losing their identity.
        </p>

        <p>
          The most durable pattern languages — the courtyard house, the
          covered market, the processional route, the bounded garden — appear
          across cultures not because they were copied but because they resolve
          the same fundamental Human Conditions. They are convergent solutions
          to shared energetic problems, stabilised through sublimation and
          refined through generations of use.
        </p>

        <blockquote>
          Coherence arises when form and process support one another over time.
        </blockquote>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Centres to Endurance", href: "/theory/centres-to-endurance", description: "How patterns concentrate into centres that persist" },
              { label: "Sublimation", href: "/theory/sublimation", description: "How instinct becomes the forms that patterns encode" },
              { label: "The Dynamic Engine", href: "/theory/dynamic-engine", description: "How patterns develop through six phases over time" },
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
