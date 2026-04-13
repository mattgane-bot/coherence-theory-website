"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TriadDiagram } from "@/components/diagrams/TriadDiagram";
import { PropertiesExplorer } from "@/components/diagrams/PropertiesExplorer";

export default function GoverningConditionsPage() {
  return (
    <article className="prose">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-inorganic" />
          <span className="text-sm font-medium text-charcoal-muted">Governing</span>
        </div>

        <h1>Governing Conditions</h1>

        <p className="text-lg text-charcoal-light !leading-relaxed">
          All organised systems exist under energetic constraint and entropic
          pressure. The governing conditions describe the most fundamental forces
          that determine whether structure can form, stabilise, and endure
          through time.
        </p>

        <h2>Energy and Entropy</h2>

        <p>
          <strong>Energy</strong> is the capacity that allows systems to form,
          act, repair, regulate, and respond to disturbance. It enables structure
          to arise, relations to stabilise, and coherence to become possible.
          More precisely, energy is <em>capacity under constraint</em>: the
          capacity of a system to act, to regulate itself, to repair what is
          damaged, and to continue over time in the presence of entropy.
        </p>

        <p>
          <strong>Entropy</strong> is the tendency of energy to disperse,
          structure to degrade, and organised relations to weaken unless actively
          maintained. It is not a moral failing or a design flaw but a constant
          background pressure — the second law of thermodynamics applied to every
          scale. All things trend toward disorder.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-accent/30 bg-accent-bg">
          <p className="text-sm text-charcoal-light leading-relaxed mb-3">
            Together, energy and entropy create the fundamental condition of
            existence for all organised systems: <strong>organisation must be
            maintained against decay</strong>. Structure forms only where energy
            can be organised, and endures only where the energetic cost of
            maintenance, repair, and adaptation remains within what can be
            sustained over time.
          </p>
          <p className="text-sm font-medium text-accent">
            Coherence is the temporary alignment of energy that slows entropic
            decay without exhausting the system that sustains it.
          </p>
        </div>

        <p>
          Energy operates in three registers within Coherence Theory:
          <strong> Life</strong> — the biological condition of metabolism,
          growth, and self-regulation; <strong>Aliveness</strong> — the
          perceptual experience of energetic vitality in encountered systems;
          and <strong>Livingness</strong> — whether environments support
          biological life without cumulative strain.
        </p>

        <h2>The Generative Triad</h2>

        <p>
          Energy alone does not produce structure. It must be organised. The
          theory identifies three primary forces that generate, stabilise, and
          transform organised systems — the <strong>Generative Triad</strong> of
          energy, symmetry, and opposing forces.
        </p>

        <div className="not-prose my-8">
          <TriadDiagram />
        </div>

        <p>
          Where all three operate together, organised structure can arise.
          Energy provides the capacity for change. Symmetry distributes and
          stabilises forces. Opposing forces introduce the tension and contrast
          that prevent stasis and drive transformation. Remove any one, and
          structure either cannot form or cannot endure.
        </p>

        <h2>Fundamental Intrinsic Properties</h2>

        <p>
          Fundamental Intrinsic Properties (FIPs) determine whether structure
          can exist at all. They are the physical preconditions for form — present
          from the moment any physical framework exists, prior to use, perception,
          or coherence. They cannot be removed or bypassed without eliminating
          the framework itself.
        </p>

        <p>
          Coherence Theory identifies <strong>fourteen</strong> Fundamental
          Intrinsic Properties, each satisfying strict criteria: they must be
          present from the moment the framework exists, pre-perceptual, pre-coherence,
          and unavoidable. These fourteen properties are organised into three
          layers of increasing complexity:
        </p>

        <ol>
          <li><strong>Form-defining conditions</strong> — properties that establish the basic conditions under which form can exist: geometry, scale, mass, and density.</li>
          <li><strong>Material and boundary behaviour</strong> — how physical substances and edges interact with forces, energy, and environment: material properties, material performance, boundary conditions, and thermal/acoustic behaviour.</li>
          <li><strong>System stability and energy resolution</strong> — whether a framework can stabilise under force, maintain continuity, and resolve energy through time: structural continuity, spatial continuity, spatial enclosure, physical resistance, energy capacity, and gravity.</li>
        </ol>

        <h2>Complex Intrinsic Properties</h2>

        <p>
          Where Fundamental Intrinsic Properties make <em>form</em> possible,
          Complex Intrinsic Properties (CIPs) make <em>coherence</em> possible.
          They describe the behavioural laws of organised systems once structure
          exists and operates through time — processes such as emergence, scaling,
          feedback, thresholds, adaptation, and regulation.
        </p>

        <p>
          CIPs are organised into two primary categories:
          <strong> Structural</strong> properties describe how structure appears,
          organises, and persists. <strong>Operational</strong> properties
          describe how those structural capacities unfold through time under
          real energetic and entropic conditions. Every Complex Intrinsic
          Property is anchored in multiple Fundamental Intrinsic Properties —
          this prevents emergence from being treated as mystical, coherence as
          stylistic, or process as intention.
        </p>

        <div className="not-prose my-8">
          <PropertiesExplorer />
        </div>

        <h2>Intrinsic Emergence</h2>

        <p>
          When energy and entropy, acting through the Triad, operate within the
          limits of Fundamental Intrinsic Properties and the behaviours described
          by Complex Intrinsic Properties, <strong>intrinsic emergence</strong> becomes
          possible. This is the threshold at which actual structure can begin to
          appear — the point where conditions and potentials become stable
          relationships.
        </p>

        <p>
          Intrinsic emergence is where the pre-structural domain ends and the
          Dynamic Engine begins. Before this point there are only conditions and
          potentials; after this point, centres can form, patterns can stabilise,
          and structure can develop through time.
        </p>

        <h2>Eschermatics: When Local Coherence Fails Globally</h2>

        <p>
          A critical concept in understanding failure is what the theory
          calls <strong>Eschermatics</strong> — systems that are coherent in
          parts but cannot continue as wholes. Every step appears correct
          locally, yet the system cannot sustain the path it creates.
        </p>

        <blockquote>
          Coherence cannot be judged from local correctness alone. Eschermatics
          define a class of systemic failure in which misdistribution of
          coherence — some aspects succeeding locally while others fail
          globally — produces systems that appear ordered yet cannot endure.
        </blockquote>

        <p>
          Examples appear across domains: a building where every corridor is
          correct in isolation yet the whole confuses movement; a culture with
          dense norms that is internally consistent but exhausting to
          participate in; an abstract system where every local condition is
          correct but feedback loops amplify error at scale.
        </p>

        <h2>The Energetic Principle</h2>

        <p>
          From these governing conditions, a central principle emerges: enduring
          systems are not simply the strongest or most complex, but those that
          can maintain organisation over time using sustainable levels of energy.
          The theory calls this <strong>the survival of the most
          energy-efficient</strong>. Systems that require excessive continuous
          energy to maintain eventually fail when resources cannot be sustained.
        </p>

        <div className="not-prose my-6 p-6 rounded-2xl border border-border bg-surface-raised">
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-charcoal mb-1">Where input exceeds demand</p>
              <p className="text-charcoal-muted">Systems grow, elaborate, and diversify</p>
            </div>
            <div>
              <p className="font-medium text-charcoal mb-1">Where demand exceeds supply</p>
              <p className="text-charcoal-muted">Systems weaken, simplify, fragment, and collapse</p>
            </div>
          </div>
        </div>

        <p>
          This principle applies across all domains: in physical systems, stable
          structures resolve forces efficiently; in biological systems, organisms
          that use energy efficiently survive and reproduce; in buildings and
          settlements, places that are easy to maintain and adapt endure longest;
          in institutions, systems requiring excessive control tend to collapse.
        </p>

        {/* Related concepts */}
        <div className="mt-12 pt-8 border-t border-border not-prose">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-4">
            Related Concepts
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Three Domains", href: "/theory/three-domains", description: "How coherence differs across inorganic, organic, and human systems" },
              { label: "The Dynamic Engine", href: "/theory/dynamic-engine", description: "How systems develop through six phases over time" },
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
