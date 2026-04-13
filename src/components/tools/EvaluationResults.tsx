"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";
import {
  EVALUATION_STEPS,
  EVALUATION_GROUPS,
} from "@/data/evaluation-steps";
import type { StepResponse } from "@/lib/evaluation-store";

interface Props {
  systemName: string;
  responses: Record<number, StepResponse>;
  onReset: () => void;
  onBack: () => void;
}

function getGroupScore(
  groupSteps: number[],
  responses: Record<number, StepResponse>
): number {
  const scores = groupSteps
    .map((id) => responses[id]?.score)
    .filter((s): s is number => s !== undefined && s > 0);
  if (scores.length === 0) return 0;
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function getOverallScore(responses: Record<number, StepResponse>): number {
  const scores = Object.values(responses)
    .map((r) => r.score)
    .filter((s) => s > 0);
  if (scores.length === 0) return 0;
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function RadarChart({
  responses,
}: {
  responses: Record<number, StepResponse>;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 300;
    const height = 300;
    const margin = 40;
    const radius = Math.min(width, height) / 2 - margin;
    const groups = EVALUATION_GROUPS;
    const numAxes = groups.length;
    const angleSlice = (Math.PI * 2) / numAxes;

    const g = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Grid circles
    const levels = 5;
    for (let i = 1; i <= levels; i++) {
      const r = (radius / levels) * i;
      g.append("circle")
        .attr("r", r)
        .attr("fill", "none")
        .attr("stroke", "#E5E0DB")
        .attr("stroke-width", 0.5)
        .attr("stroke-dasharray", i < levels ? "2,3" : "none");
    }

    // Axes
    groups.forEach((group, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      g.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "#E5E0DB")
        .attr("stroke-width", 0.5);

      // Labels
      const labelRadius = radius + 20;
      const lx = Math.cos(angle) * labelRadius;
      const ly = Math.sin(angle) * labelRadius;

      g.append("text")
        .attr("x", lx)
        .attr("y", ly)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "9px")
        .attr("fill", group.color)
        .attr("font-weight", "600")
        .text(group.name);
    });

    // Data polygon
    const dataPoints = groups.map((group, i) => {
      const score = getGroupScore(group.steps, responses);
      const angle = angleSlice * i - Math.PI / 2;
      const r = (score / 5) * radius;
      return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
    });

    const lineGenerator = d3
      .line<{ x: number; y: number }>()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveLinearClosed);

    g.append("path")
      .datum(dataPoints)
      .attr("d", lineGenerator)
      .attr("fill", "#C4785B20")
      .attr("stroke", "#C4785B")
      .attr("stroke-width", 2);

    // Data points
    dataPoints.forEach((point) => {
      g.append("circle")
        .attr("cx", point.x)
        .attr("cy", point.y)
        .attr("r", 4)
        .attr("fill", "#C4785B")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5);
    });
  }, [responses]);

  return <svg ref={svgRef} className="w-full max-w-[300px] mx-auto" />;
}

export function EvaluationResults({
  systemName,
  responses,
  onReset,
  onBack,
}: Props) {
  const overall = getOverallScore(responses);
  const weakest = EVALUATION_STEPS.filter(
    (s) => (responses[s.id]?.score || 0) <= 2
  ).sort((a, b) => (responses[a.id]?.score || 0) - (responses[b.id]?.score || 0));
  const strongest = EVALUATION_STEPS.filter(
    (s) => (responses[s.id]?.score || 0) >= 4
  ).sort((a, b) => (responses[b.id]?.score || 0) - (responses[a.id]?.score || 0));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-serif text-3xl font-semibold text-charcoal mb-2">
        Evaluation Results
      </h2>
      {systemName && (
        <p className="text-charcoal-muted mb-6">
          System: <strong className="text-charcoal">{systemName}</strong>
        </p>
      )}

      {/* Overall score */}
      <div className="p-6 rounded-2xl border border-border bg-surface-raised mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-charcoal-muted uppercase tracking-wider">
            Overall Coherence
          </span>
          <span className="text-3xl font-serif font-bold text-charcoal">
            {overall.toFixed(1)}<span className="text-lg text-charcoal-muted">/5</span>
          </span>
        </div>
        <div className="w-full h-3 rounded-full bg-border overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${(overall / 5) * 100}%`,
              backgroundColor:
                overall >= 4
                  ? "#4A6741"
                  : overall >= 3
                    ? "#D4A853"
                    : "#C4785B",
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        <p className="text-sm text-charcoal-muted mt-2">
          {overall >= 4.5
            ? "Exceptional coherence — this system is deeply aligned across all domains."
            : overall >= 3.5
              ? "Strong coherence — the system is well-aligned with areas for deepening."
              : overall >= 2.5
                ? "Moderate coherence — functional but with significant gaps that need attention."
                : overall >= 1.5
                  ? "Weak coherence — the system is struggling to maintain alignment."
                  : "Critical — the system lacks fundamental coherence and may not be sustainable."}
        </p>
      </div>

      {/* Radar chart */}
      <div className="mb-6">
        <RadarChart responses={responses} />
      </div>

      {/* Group scores */}
      <div className="space-y-2 mb-6">
        {EVALUATION_GROUPS.map((group) => {
          const score = getGroupScore(group.steps, responses);
          return (
            <div key={group.name} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: group.color }}
              />
              <span className="text-sm font-medium text-charcoal w-44">
                {group.name}
              </span>
              <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: group.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / 5) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-sm font-medium text-charcoal w-8 text-right">
                {score.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Weakest areas */}
      {weakest.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-3">
            Areas Needing Attention
          </h3>
          <div className="space-y-2">
            {weakest.slice(0, 5).map((step) => (
              <div
                key={step.id}
                className="p-3 rounded-xl border border-human/20 bg-human-bg/30"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-charcoal">
                    {step.id}. {step.title}
                  </span>
                  <span className="text-sm font-bold text-human">
                    {responses[step.id]?.score}/5
                  </span>
                </div>
                {responses[step.id]?.notes && (
                  <p className="text-xs text-charcoal-muted">
                    {responses[step.id].notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strongest areas */}
      {strongest.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-charcoal-muted uppercase tracking-wider mb-3">
            Strongest Areas
          </h3>
          <div className="space-y-2">
            {strongest.slice(0, 5).map((step) => (
              <div
                key={step.id}
                className="p-3 rounded-xl border border-organic/20 bg-organic-bg/30"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-charcoal">
                    {step.id}. {step.title}
                  </span>
                  <span className="text-sm font-bold text-organic">
                    {responses[step.id]?.score}/5
                  </span>
                </div>
                {responses[step.id]?.notes && (
                  <p className="text-xs text-charcoal-muted">
                    {responses[step.id].notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors"
        >
          Review Answers
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2 rounded-lg text-sm font-medium bg-charcoal text-white hover:bg-charcoal-light transition-colors"
        >
          Start New Evaluation
        </button>
      </div>
    </motion.div>
  );
}
