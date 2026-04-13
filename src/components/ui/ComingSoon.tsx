"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  domain?: string;
  domainColor?: string;
}

export function ComingSoon({ title, description, domain, domainColor = "bg-accent" }: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {domain && (
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-3 h-3 rounded-full ${domainColor}`} />
          <span className="text-sm font-medium text-charcoal-muted">{domain}</span>
        </div>
      )}
      <h1 className="font-serif text-4xl font-semibold text-charcoal mb-3">{title}</h1>
      <p className="text-charcoal-light mb-8 max-w-2xl">{description}</p>
      <div className="p-8 rounded-2xl border border-border bg-surface-raised text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-accent/40" />
        </div>
        <p className="text-charcoal-muted font-medium mb-2">Content developing</p>
        <p className="text-sm text-charcoal-muted">
          This section is being authored. Explore{" "}
          <Link href="/theory/dynamic-engine" className="text-accent hover:underline">
            The Dynamic Engine
          </Link>{" "}
          or{" "}
          <Link href="/theory/three-domains" className="text-accent hover:underline">
            Three Domains
          </Link>{" "}
          in the meantime.
        </p>
      </div>
    </motion.div>
  );
}
