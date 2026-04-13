"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SublimationFlow } from "@/components/diagrams/SublimationFlow";
import { SymbolExplorer } from "@/components/diagrams/SymbolExplorer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SublimationPage() {
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

        <h1>Sublimation</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          Sublimation is the process through which primal human instincts,
          evolutionary pressures, and regulatory drives are transformed into
          coherent spatial, social, and cultural form. It does not repress or
          eliminate instinct — it reorganises it. Fear becomes boundary;
          curiosity becomes gradient; territoriality becomes centre; rhythmic
          impulse becomes temporal order.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-accent/30 bg-accent-bg">
          <p className="text-sm font-medium text-accent">
            &ldquo;Sublimation is the counter-entropic act within becoming. What
            appears refined is not detached from what is primitive; it is the
            primitive structured and stabilised.&rdquo;
          </p>
        </div>

        <h2>Two Types of Sublimation</h2>

        <div className="not-prose my-6 space-y-3">
          <div className="p-5 rounded-2xl border border-inorganic/30 bg-inorganic-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-inorganic" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Deep Sublimation
              </h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Operates across generations and evolutionary time. It is the
              long-arc transformation of primal Human Conditions into stabilised
              cultural, spatial, and symbolic structures. Deep sublimation shapes
              the foundational conditions of possibility — fear becomes
              enclosure, vigilance becomes prospect, territoriality becomes
              centre, gathering becomes the civic plaza.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-human/30 bg-human-bg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-human" />
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Processional Sublimation
              </h3>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Operates within lived time. It transforms instinctive movement
              into symbolic journey through staged, meaningful sequence —
              compression followed by expansion, concealment followed by
              revelation. Movement becomes meaning; raw locomotion becomes
              ritual procession; arrival becomes culmination.
            </p>
          </div>
        </div>

        <p>
          Deep sublimation builds the structural field within which life
          unfolds; processional sublimation stages the unfolding itself. Both
          are necessary for full coherence at the human level.
        </p>

        <h2>From Instinct to Symbol</h2>

        <p>
          Sublimation follows a traceable progression from raw biological drive
          to portable cultural symbol. Each stage builds on the one before,
          transforming energy rather than eliminating it.
        </p>

        <div className="not-prose my-8">
          <SublimationFlow />
        </div>

        <h2>Human Conditions Being Sublimated</h2>

        <p>
          The instincts that sublimation transforms are not arbitrary — they are
          the evolved survival responses that all humans share. These{" "}
          <strong>Human Conditions</strong> include:
        </p>

        <ul>
          <li>
            <strong>Shelter and enclosure</strong> — the need for physical
            protection and bounded space
          </li>
          <li>
            <strong>Prospect and refuge</strong> — the need for vantage and
            retreat simultaneously
          </li>
          <li>
            <strong>Warmth and comfort</strong> — thermal and bodily regulation
          </li>
          <li>
            <strong>Rhythm and temporal order</strong> — alignment with
            biological and seasonal cycles
          </li>
          <li>
            <strong>Orientation</strong> — the need to know where one is and
            what comes next
          </li>
          <li>
            <strong>Connection and belonging</strong> — social bonds and
            collective identity
          </li>
          <li>
            <strong>Movement and exploration</strong> — the drive to traverse
            and discover
          </li>
          <li>
            <strong>Threshold and boundary</strong> — marking transitions
            between domains
          </li>
          <li>
            <strong>Protection and safety</strong> — defence against threat
          </li>
          <li>
            <strong>Continuity and meaning</strong> — the need for persistence
            across time
          </li>
        </ul>

        <h2>Architectural Examples</h2>

        <p>
          Processional sublimation is visible wherever architecture stages
          movement as meaningful journey:
        </p>

        <div className="not-prose my-6 space-y-4">
          {[
            {
              name: "Borobudur",
              desc: "Ascent through layered terraces; movement spirals upward revealing new symbolic fields at each stage. Journey becomes enactment; meaning accumulates through rhythm and repetition.",
              image: "/images/examples/borobudur.jpg",
              credit: "Photo: Andrew Otto, CC BY-SA 2.0",
            },
            {
              name: "Katsura Imperial Villa",
              desc: "Meandering paths frame successive views; each step alters perspective. The instinct for exploration becomes contemplative awareness. Nature and architecture are inseparable.",
              image: "/images/examples/katsura.jpg",
              credit: "Photo: John Chang, CC BY-SA 3.0",
            },
            {
              name: "Guggenheim Museum",
              desc: "A continuous ramp stages ascent; art is encountered progressively. The spiralling form creates a controlled gradient of exposure and pause.",
              image: "/images/examples/guggenheim.jpg",
              credit: "Photo: Ad Meskens, CC BY-SA 3.0",
            },
            {
              name: "Fez Medina",
              desc: "Winding streets, layered openings, sudden courtyards. Coherence is disclosed through progression, not presented all at once — what Gordon Cullen called 'serial vision'.",
              image: "/images/examples/fez-medina.jpg",
              credit: "Photo: Petar Milosevic, CC BY-SA 4.0",
            },
            {
              name: "Camino de Santiago",
              desc: "Long-distance movement transformed into structured ritual journey. Basic territorial migration becomes pilgrimage embedded in cultural memory spanning centuries.",
              image: "/images/examples/camino.jpg",
              credit: "Photo: Shirley Roots, CC BY 2.0",
            },
          ].map((ex) => (
            <div
              key={ex.name}
              className="rounded-xl border border-border bg-surface overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${basePath}${ex.image}`}
                  alt={ex.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-charcoal mb-1">
                  {ex.name}
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {ex.desc}
                </p>
                <p className="text-[10px] text-charcoal-muted/60 mt-2">
                  {ex.credit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2>Sublimation vs Suppression</h2>

        <p>
          The distinction between sublimation and suppression is critical to
          understanding why some environments feel alive and others feel dead:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-3">
          <div className="p-5 rounded-2xl border border-organic/30 bg-organic-bg">
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
              Sublimation
            </h3>
            <ul className="text-sm text-charcoal-light leading-relaxed space-y-1.5">
              <li>Reorganises energy into higher coherence</li>
              <li>Tension is staged and resolved</li>
              <li>Opposing forces stabilised through symmetry</li>
              <li>Raw impulse becomes structured expression</li>
              <li>Environments acquire depth and vitality</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl border border-human/30 bg-human-bg">
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
              Suppression
            </h3>
            <ul className="text-sm text-charcoal-light leading-relaxed space-y-1.5">
              <li>Denies instinct rather than transforming it</li>
              <li>Energy accumulates beneath uniformity</li>
              <li>Tension becomes anxiety</li>
              <li>Coherence becomes partial or superficial</li>
              <li>Environments exhibit rigidity and monotony</li>
            </ul>
          </div>
        </div>

        <h2>Symbolism: Crystallised Sublimation</h2>

        <p>
          Symbolism is not an optional decorative layer applied to space. It is
          one crystallised outcome of sublimation — the compressed residue of
          stabilised tensions rendered portable and transmissible across
          generations. Through repeated stabilisation of the same regulatory
          patterns, comparable symbolic forms emerge across cultures — not from
          diffusion alone but from shared Human Conditions.
        </p>

        <p>
          Effective symbols share structural features: a <strong>clear
          centre</strong> anchoring meaning, <strong>defined
          boundaries</strong> separating figure from ground, <strong>internal
          coherence</strong> organising parts into a whole, <strong>simplicity</strong> distilling
          complexity into concise form, and <strong>multi-scalar
          organisation</strong> nesting detail within larger structure.
        </p>

        <div className="not-prose my-8">
          <SymbolExplorer />
        </div>

        <div className="not-prose my-6 p-6 rounded-2xl border border-border bg-surface-raised">
          <p className="text-sm text-charcoal-light leading-relaxed">
            <strong className="text-charcoal">
              Symbols do not create coherence from nothing.
            </strong>{" "}
            They condense and reactivate patterns that have already stabilised
            through sublimation. A cross, a circle, a threshold: each carries
            within it the accumulated resolution of tensions that began as raw
            survival need.
          </p>
        </div>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Coherence Hierarchy", href: "/theory/coherence-hierarchy", description: "How sublimation relates to the six types of coherence" },
              { label: "Emergent Centres", href: "/theory/emergent-centres", description: "The experiential qualities sublimation produces" },
              { label: "Pattern Languages", href: "/theory/pattern-languages", description: "How sublimated forms become reusable patterns" },
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
