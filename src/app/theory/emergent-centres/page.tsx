"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EmergentCentresWheel } from "@/components/diagrams/EmergentCentresWheel";
import { PerceptualFilters } from "@/components/diagrams/PerceptualFilters";

export default function EmergentCentresPage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-human" />
          <span className="text-sm font-medium text-charcoal-muted">Human</span>
        </div>

        <h1>Positive Perceptive Emergent Centres</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          Humans do not perceive coherence directly — they perceive its effects.
          When structural alignment is present, it produces experiential
          qualities that the nervous system registers as beauty, harmony,
          livingness, tranquillity, and belonging. These are the Positive
          Perceptive Emergent Centres.
        </p>

        <h2>Two Regulatory Systems</h2>

        <p>
          Human spatial perception operates through two complementary
          neurophysical systems that function prior to conscious thought:
        </p>

        <div className="not-prose my-6 space-y-3">
          <div className="p-5 rounded-2xl border border-organic/30 bg-organic-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-organic" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                The Inner Aesthetic Self
              </h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              A biologically grounded perceptual system that recognises
              coherence, harmony, and spatial rightness. It registers genuine
              alignment without requiring conscious explanation — through bodily
              settlement, stabilisation of attention, and a sense of ease. It
              enables recognition of balance, legibility, and spatial vitality.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-human/30 bg-human-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-human" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                The Inner Anxiety Self
              </h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              The complementary system that detects suppression, distortion,
              instability, or threat in spatial conditions. Not neurosis but an
              evolved regulatory diagnostic. It manifests through heightened
              vigilance, muscular bracing, fragmented attention, and impulses to
              escape or control.
            </p>
          </div>
        </div>

        <div className="not-prose my-6 p-6 rounded-2xl border border-accent/30 bg-accent-bg">
          <p className="text-sm font-medium text-accent">
            &ldquo;The body registers safety or threat long before the mind
            constructs an explanation.&rdquo;
          </p>
        </div>

        <h2>Four Primal Spatial Questions</h2>

        <p>
          Before any conscious evaluation, the body asks four fundamental
          questions of every environment it enters. These are pre-reflective —
          they structure perception before thought begins:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-3">
          {[
            { q: "Where am I?", label: "Orientation", color: "#6B7B8D", desc: "Spatial legibility — can the body locate itself and predict what comes next?" },
            { q: "Do I like it here?", label: "Resonance", color: "#4A6741", desc: "Aesthetic and emotional fit — does the nervous system settle or activate?" },
            { q: "Am I part of this?", label: "Belonging", color: "#C4785B", desc: "Social and symbolic inclusion — does the environment welcome participation?" },
            { q: "Is this part of me?", label: "Identity", color: "#D4A853", desc: "Reciprocal belonging — does the place reflect and reinforce who I am?" },
          ].map((item) => (
            <div
              key={item.q}
              className="p-4 rounded-xl border"
              style={{ borderColor: item.color + "30", backgroundColor: item.color + "08" }}
            >
              <p className="font-serif text-lg font-semibold" style={{ color: item.color }}>
                {item.q}
              </p>
              <p className="text-xs font-medium text-charcoal-muted mt-0.5 mb-2">
                {item.label}
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h2>Twelve Emergent Qualities</h2>

        <p>
          When coherence is present in a system, it produces perceptible
          experiential qualities. The theory identifies twelve Positive
          Perceptive Emergent Centres — each answering one of the four primal
          spatial questions. They are not abstract categories but qualities the
          nervous system actually registers in response to spatial structure.
        </p>

        <div className="not-prose my-8">
          <EmergentCentresWheel />
        </div>

        <p>
          These qualities do not operate independently. In coherent
          environments, multiple emergent centres are present simultaneously —
          beauty reinforces tranquillity, livingness supports place attachment,
          identity deepens through intellectual life. The richest environments
          activate many centres at once.
        </p>

        <h2>Perceptual Filters</h2>

        <p>
          Perception is never raw. Every experience of space passes through
          layers of filtering that shape what is noticed, what is valued, and
          what is overlooked. The theory identifies five types of perceptual
          filter, each operating at a different level:
        </p>

        <div className="not-prose my-8">
          <PerceptualFilters />
        </div>

        <h2>Looking, Seeing, and Objective Perception</h2>

        <p>
          The theory distinguishes between three modes of spatial engagement:
        </p>

        <p>
          <strong>Looking</strong> is the habitual mode — passive reception of
          visual information alone. Most spatial experience operates at this
          level, registering surfaces without engaging deeper structure.
        </p>

        <p>
          <strong>Seeing</strong> is full sensory participation. When multiple
          sensory channels align — sight, sound, touch, proprioception,
          temperature — perception becomes more stable, legible, and meaningful.
          The perceiver participates through the body rather than merely
          observing.
        </p>

        <p>
          <strong>Objective perception</strong> is a disciplined mode where
          dominant filters are recognised and moderated, allowing intrinsic
          qualities to register more clearly. It is not neutral or filter-free —
          that is impossible — but perception grounded in common human biology
          rather than individual preference or cultural habit.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-border bg-surface-raised">
          <p className="text-sm text-charcoal-light leading-relaxed">
            <strong className="text-charcoal">Coherence is not what people say they like.</strong>{" "}
            It is what allows the nervous system to stabilise attention, sensory
            load, and bodily orientation in response to spatial structure alone.
            Objective perception is not the absence of interpretation, but the
            alignment of perception with intrinsic spatial reality.
          </p>
        </div>

        <h2>From Perception to Evaluation</h2>

        <p>
          The Emergent Centres provide the bridge between the structural
          properties of coherence — centres, patterns, energy resolution — and
          the human experience of space. They explain why some environments feel
          alive and others feel dead, why some places endure in memory and
          others are immediately forgotten.
        </p>

        <p>
          Understanding these perceptual qualities is essential for evaluation:
          a system cannot be assessed for coherence without understanding how
          coherence manifests in human experience. The emergent centres are not
          additions to structural analysis but the means by which structure
          becomes legible.
        </p>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Centres to Endurance", href: "/theory/centres-to-endurance", description: "How local concentrations build to system-level persistence" },
              { label: "Coherence Hierarchy", href: "/theory/coherence-hierarchy", description: "Six types of coherence across three domains" },
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
