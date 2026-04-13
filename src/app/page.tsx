"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MasterTheoryDiagram } from "@/components/diagrams/MasterTheoryDiagram";

const domains = [
  {
    title: "Inorganic",
    subtitle: "Structure must hold",
    description:
      "Structural and dynamic stability — forces balanced, energy flows regulated so structure does not collapse or dissipate.",
    colorClass: "bg-inorganic",
    bgClass: "bg-inorganic-bg hover:border-inorganic",
    textClass: "text-inorganic",
    href: "/theory/three-domains",
  },
  {
    title: "Organic",
    subtitle: "The organism must live",
    description:
      "Biological viability — metabolism, repair, adaptation, and reproduction sustain life through time.",
    colorClass: "bg-organic",
    bgClass: "bg-organic-bg hover:border-organic",
    textClass: "text-organic",
    href: "/theory/three-domains",
  },
  {
    title: "Human",
    subtitle: "The system must remain liveable",
    description:
      "Physical structure, human needs, social organisation, and cultural meaning aligned through time.",
    colorClass: "bg-human",
    bgClass: "bg-human-bg hover:border-human",
    textClass: "text-human",
    href: "/theory/three-domains",
  },
];

const features = [
  {
    title: "Explore the Theory",
    description:
      "Navigate an interactive map of how energy, structure, perception, and meaning connect across domains.",
    href: "/explore",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "19-Step Evaluation",
    description:
      "Apply the theory to any system — building, city, institution — using a guided diagnostic process.",
    href: "/tools/evaluation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Case Studies",
    description:
      "See coherence and incoherence in real buildings, cities, ecosystems, and institutions across cultures.",
    href: "/case-studies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },
  {
    title: "Glossary",
    description:
      "A searchable reference for all concepts, from Energy and Entropy to Wholeness and Endurance.",
    href: "/glossary",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
              How Structure, Energy, and Meaning{" "}
              <span className="text-accent">Align</span>
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Coherence Theory explains why some systems — spaces, cultures,
              institutions — endure and feel alive, while others fragment and
              fail. Explore the conditions under which organised systems hold
              together through time.
            </p>
          </motion.div>

          {/* Master Theory Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <MasterTheoryDiagram />
            <p className="text-center text-sm text-charcoal-muted mt-4">
              Click any concept to learn more. Hover to see connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Domains */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-charcoal mb-3">
              Three Domains of Coherence
            </h2>
            <p className="text-charcoal-muted max-w-xl mx-auto">
              The same underlying process applies across all organised systems,
              but what must endure is different in each domain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Link href={domain.href} className="block group">
                  <div
                    className={`rounded-2xl border border-border p-8 h-full transition-all duration-300 hover:shadow-lg ${domain.bgClass}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full mb-4 ${domain.colorClass}`}
                    />
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">
                      {domain.title}
                    </h3>
                    <p
                      className={`text-sm font-medium mb-3 ${domain.textClass}`}
                    >
                      {domain.subtitle}
                    </p>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Proposition */}
      <section className="py-16 px-6 bg-surface-raised">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl sm:text-3xl text-charcoal leading-relaxed"
          >
            &ldquo;Systems endure when energy, structure, and system behaviour
            remain aligned through time under conditions of constraint and
            change.&rdquo;
          </motion.blockquote>
          <p className="mt-6 text-charcoal-muted text-sm">
            The central proposition of Coherence Theory
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={feature.href} className="block group">
                  <div className="rounded-2xl border border-border p-6 h-full transition-all duration-300 hover:shadow-md hover:border-accent bg-surface">
                    <div className="text-charcoal-muted group-hover:text-accent transition-colors mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
            Begin exploring
          </h2>
          <p className="text-charcoal-light mb-8">
            Start with the interactive concept map, or dive into the theory
            section by section.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-charcoal text-cream font-medium text-sm hover:bg-charcoal-light transition-colors"
            >
              Interactive Concept Map
            </Link>
            <Link
              href="/theory/dynamic-engine"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-charcoal font-medium text-sm hover:bg-surface-raised transition-colors"
            >
              Start Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
