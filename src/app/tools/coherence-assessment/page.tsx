"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";
import Link from "next/link";

interface CoherenceType {
  id: string;
  name: string;
  domain: "inorganic" | "organic" | "human";
  color: string;
  question: string;
  low: string;
  high: string;
}

const TYPES: CoherenceType[] = [
  {
    id: "aesthetic-structural",
    name: "Aesthetic / Structural",
    domain: "inorganic",
    color: "#6B7B8D",
    question: "How well does the physical form resolve forces, proportions, and spatial relationships?",
    low: "Structure conflicts, proportions feel wrong, forms unresolved",
    high: "Beautifully resolved geometry, stable structure, legible spatial order",
  },
  {
    id: "dynamic",
    name: "Dynamic",
    domain: "inorganic",
    color: "#5A7365",
    question: "How well does energy flow, circulate, and resolve through the system?",
    low: "Energy stagnates, overwhelms, or dissipates chaotically",
    high: "Energy flows smoothly, rhythms are balanced, movement is resolved",
  },
  {
    id: "connection-nature",
    name: "Connection to Nature",
    domain: "organic",
    color: "#4A6741",
    question: "How well is the system integrated with natural systems, cycles, and landscapes?",
    low: "Sealed from nature, no daylight, vegetation, or seasonal awareness",
    high: "Deep ecological integration, natural materials, sensory connection to living world",
  },
  {
    id: "livingness",
    name: "Livingness",
    domain: "human",
    color: "#C4785B",
    question: "Does the environment support human biological comfort, health, and the feeling of being alive?",
    low: "Drains energy, causes discomfort, feels hostile to the body",
    high: "Warm, restful, naturally lit, human-scaled, sensory-rich",
  },
  {
    id: "societal",
    name: "Societal",
    domain: "human",
    color: "#B06848",
    question: "Does the system support stable social interaction, cooperation, and collective life?",
    low: "Social isolation, fragmented communities, no gathering spaces",
    high: "Strong social bonds, clear governance, shared spaces that support collective life",
  },
  {
    id: "symbolic",
    name: "Symbolic",
    domain: "human",
    color: "#9B5A45",
    question: "Does the system carry cultural meaning, memory, identity, and symbolic charge?",
    low: "Generic, anonymous, could be anywhere, no cultural memory",
    high: "Rich in meaning, memory, identity, and cultural continuity across generations",
  },
];

function RadarChart({ scores }: { scores: Record<string, number> }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 280;
    const height = 280;
    const margin = 50;
    const radius = Math.min(width, height) / 2 - margin;
    const numAxes = TYPES.length;
    const angleSlice = (Math.PI * 2) / numAxes;

    const g = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Grid
    for (let i = 1; i <= 5; i++) {
      const r = (radius / 5) * i;
      g.append("circle")
        .attr("r", r)
        .attr("fill", "none")
        .attr("stroke", "#E5E0DB")
        .attr("stroke-width", 0.5)
        .attr("stroke-dasharray", i < 5 ? "2,3" : "none");
    }

    // Axes and labels
    TYPES.forEach((type, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      g.append("line")
        .attr("x1", 0).attr("y1", 0).attr("x2", x).attr("y2", y)
        .attr("stroke", "#E5E0DB").attr("stroke-width", 0.5);

      const lx = Math.cos(angle) * (radius + 25);
      const ly = Math.sin(angle) * (radius + 25);

      g.append("text")
        .attr("x", lx).attr("y", ly)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "8px")
        .attr("fill", type.color)
        .attr("font-weight", "600")
        .text(type.name);
    });

    // Data
    const hasScores = Object.values(scores).some((s) => s > 0);
    if (!hasScores) return;

    const points = TYPES.map((type, i) => {
      const score = scores[type.id] || 0;
      const angle = angleSlice * i - Math.PI / 2;
      const r = (score / 5) * radius;
      return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
    });

    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveLinearClosed);

    g.append("path")
      .datum(points)
      .attr("d", line)
      .attr("fill", "#C4785B20")
      .attr("stroke", "#C4785B")
      .attr("stroke-width", 2);

    points.forEach((p, i) => {
      g.append("circle")
        .attr("cx", p.x).attr("cy", p.y).attr("r", 4)
        .attr("fill", TYPES[i].color)
        .attr("stroke", "white")
        .attr("stroke-width", 1.5);
    });
  }, [scores]);

  return <svg ref={svgRef} className="w-full max-w-[280px] mx-auto" />;
}

export default function CoherenceAssessmentPage() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [systemName, setSystemName] = useState("");

  const setScore = (id: string, value: number) => {
    setScores((prev) => ({ ...prev, [id]: value }));
  };

  const answeredCount = Object.values(scores).filter((s) => s > 0).length;
  const allAnswered = answeredCount === TYPES.length;
  const average = allAnswered
    ? Object.values(scores).reduce((a, b) => a + b, 0) / TYPES.length
    : 0;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl font-semibold text-charcoal mb-2">
          Quick Coherence Assessment
        </h1>
        <p className="text-charcoal-light leading-relaxed mb-6">
          Rate a system across all six coherence types for a rapid overview of
          where alignment holds and where it breaks. For deeper analysis, use
          the{" "}
          <Link
            href="/tools/evaluation"
            className="text-accent hover:text-accent/80 font-medium"
          >
            19-Step Evaluation
          </Link>
          .
        </p>

        {/* System name */}
        <div className="mb-8">
          <input
            type="text"
            value={systemName}
            onChange={(e) => setSystemName(e.target.value)}
            placeholder="What are you assessing? (optional)"
            className="w-full p-3 rounded-xl border border-border bg-surface text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none focus:border-charcoal-muted transition-colors"
          />
        </div>

        {/* Rating cards */}
        <div className="space-y-4 mb-8">
          {TYPES.map((type, i) => {
            const score = scores[type.id] || 0;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl border"
                style={{
                  borderColor: score > 0 ? type.color + "40" : "#E5E0DB",
                  backgroundColor: score > 0 ? type.color + "06" : "transparent",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: type.color }}
                  />
                  <span className="text-sm font-medium text-charcoal">
                    {type.name}
                  </span>
                  <span className="text-xs text-charcoal-muted">
                    ({type.domain})
                  </span>
                </div>
                <p className="text-xs text-charcoal-light mb-3 ml-[18px]">
                  {type.question}
                </p>

                {/* Score buttons */}
                <div className="flex gap-1.5 ml-[18px]">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => setScore(type.id, value)}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                        score === value
                          ? "text-white shadow-sm"
                          : "border border-border bg-surface hover:border-charcoal-muted text-charcoal-muted"
                      }`}
                      style={
                        score === value
                          ? { backgroundColor: type.color }
                          : undefined
                      }
                    >
                      {value}
                    </button>
                  ))}
                </div>

                {/* Scale labels */}
                <div className="flex justify-between ml-[18px] mt-1">
                  <span className="text-[10px] text-charcoal-muted">
                    {type.low}
                  </span>
                  <span className="text-[10px] text-charcoal-muted">
                    {type.high}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Results */}
        {allAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border pt-8"
          >
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4 text-center">
              {systemName ? `${systemName} — ` : ""}Coherence Profile
            </h2>

            <RadarChart scores={scores} />

            {/* Summary */}
            <div className="mt-6 p-5 rounded-2xl border border-border bg-surface-raised">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-charcoal-muted uppercase tracking-wider">
                  Average Score
                </span>
                <span className="text-2xl font-serif font-bold text-charcoal">
                  {average.toFixed(1)}
                  <span className="text-sm text-charcoal-muted">/5</span>
                </span>
              </div>
              <p className="text-sm text-charcoal-light">
                {average >= 4
                  ? "Strong coherence across domains. The system is well-aligned and likely to endure."
                  : average >= 3
                    ? "Moderate coherence with areas for improvement. Functional but vulnerable where types score low."
                    : average >= 2
                      ? "Weak coherence. Significant misalignment across multiple domains needs addressing."
                      : "Critical gaps in coherence. The system may not be sustainable without intervention."}
              </p>
            </div>

            {/* Individual scores */}
            <div className="mt-4 space-y-1.5">
              {TYPES.map((type) => (
                <div key={type.id} className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: type.color }}
                  />
                  <span className="text-sm text-charcoal w-40">
                    {type.name}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: type.color }}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((scores[type.id] || 0) / 5) * 100}%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-charcoal w-6 text-right">
                    {scores[type.id]}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setScores({})}
                className="text-sm text-charcoal-muted hover:text-charcoal transition-colors"
              >
                Reset
              </button>
              <Link
                href="/tools/evaluation"
                className="px-5 py-2 rounded-lg text-sm font-medium bg-charcoal text-white hover:bg-charcoal-light transition-colors"
              >
                Full 19-Step Evaluation
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
