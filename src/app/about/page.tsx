"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-4xl font-semibold text-charcoal mb-6">
          About Coherence Theory
        </h1>
        <div className="prose">
          <p>
            Coherence Theory explains how organised systems form, develop, and
            endure under conditions of energy, entropy, and change. It describes
            how energy, operating under entropic constraint, becomes organised
            through gradient, order, and constraint into structures capable of
            enduring through time.
          </p>
          <p>
            The theory was developed to address a persistent question across many
            fields: why do some systems — spaces, practices, organisations, and
            cultural forms — feel coherent and sustaining, while others, often
            equally sophisticated, feel brittle, alienating, or inert?
          </p>
          <p>
            This interactive website was created to make the theory explorable
            and accessible. It allows you to navigate the relationships between
            concepts, examine real-world examples, and apply the theory using
            practical tools.
          </p>
          <h2>The book</h2>
          <p>
            The full theory is presented across three interdependent books:
          </p>
          <ul>
            <li><strong>Book 1</strong> establishes the conditions under which coherence can arise — energy, entropy, biological perception, and cultural processes.</li>
            <li><strong>Book 2</strong> introduces the structural principles — the Dynamic Engine, the Coherence Hierarchy, and the concept of centres.</li>
            <li><strong>Book 3</strong> translates these into Pattern Languages and Form Languages for practical application.</li>
          </ul>
          <p>
            The progression is: constraint, then generative organisation, then
            patterned articulation.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
