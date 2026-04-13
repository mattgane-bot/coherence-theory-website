"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  category: "governing" | "human" | "process" | "structure" | "evaluation" | "application" | "core";
  summary: string;
}

interface DiagramEdge {
  from: string;
  to: string;
  label: string;
}

const NODES: DiagramNode[] = [
  // Governing conditions (top)
  { id: "energy", label: "Energy & Entropy", x: 400, y: 40, category: "governing", summary: "All systems require energy; entropy degrades structure" },
  { id: "triad", label: "The Triad", x: 400, y: 120, category: "governing", summary: "Gradient, order, and constraint organise energy into structure" },
  { id: "fip", label: "Fundamental\nIntrinsic Properties", x: 200, y: 180, category: "governing", summary: "Define what can physically exist" },
  { id: "cip", label: "Complex\nIntrinsic Properties", x: 600, y: 180, category: "governing", summary: "Govern how systems behave through time" },
  { id: "emergence", label: "Intrinsic\nEmergence", x: 400, y: 260, category: "governing", summary: "Threshold where structure first becomes possible" },

  // Human mediation (left)
  { id: "neuro", label: "Neurophysical\nSystem", x: 80, y: 320, category: "human", summary: "How organisms perceive and respond to environment" },
  { id: "human-cond", label: "Human\nConditions", x: 80, y: 410, category: "human", summary: "Universal needs: light, shelter, prospect, refuge" },
  { id: "sublimation", label: "Sublimation", x: 80, y: 500, category: "human", summary: "Instinct transformed into culture and spatial form" },

  // Process (centre)
  { id: "dynamic-engine", label: "The Dynamic\nEngine", x: 400, y: 380, category: "process", summary: "Six phases: how systems develop through time" },

  // Structure (right)
  { id: "centres", label: "Centres", x: 700, y: 340, category: "structure", summary: "Local concentrations of organised relationship" },
  { id: "congruence", label: "Congruence", x: 700, y: 420, category: "evaluation", summary: "Local integration of compatible centres" },

  // Evaluation
  { id: "hierarchy", label: "Coherence\nHierarchy", x: 250, y: 500, category: "evaluation", summary: "Six types of coherence across domains" },
  { id: "alignment", label: "Alignment", x: 400, y: 500, category: "evaluation", summary: "Compatibility of all conditions" },

  // Core
  { id: "coherence", label: "Coherence", x: 400, y: 600, category: "core", summary: "Sustained alignment under constraint" },
  { id: "wholeness", label: "Wholeness", x: 550, y: 600, category: "evaluation", summary: "Integration across scales and domains" },
  { id: "endurance", label: "Endurance", x: 400, y: 690, category: "evaluation", summary: "Persistence through time" },

  // Application (bottom)
  { id: "patterns", label: "Pattern\nLanguages", x: 250, y: 690, category: "application", summary: "How coherence is reproduced" },
  { id: "forms", label: "Form\nLanguages", x: 250, y: 770, category: "application", summary: "Physical expression of coherent relationships" },
];

const EDGES: DiagramEdge[] = [
  { from: "energy", to: "triad", label: "drives" },
  { from: "triad", to: "fip", label: "operates within" },
  { from: "triad", to: "cip", label: "produces" },
  { from: "triad", to: "emergence", label: "enables" },
  { from: "fip", to: "emergence", label: "constrains" },
  { from: "cip", to: "emergence", label: "constrains" },
  { from: "cip", to: "dynamic-engine", label: "governs" },
  { from: "emergence", to: "dynamic-engine", label: "feeds" },
  { from: "neuro", to: "human-cond", label: "underlies" },
  { from: "human-cond", to: "sublimation", label: "drives" },
  { from: "sublimation", to: "dynamic-engine", label: "guides" },
  { from: "dynamic-engine", to: "centres", label: "produces" },
  { from: "centres", to: "congruence", label: "integrates" },
  { from: "congruence", to: "coherence", label: "builds" },
  { from: "hierarchy", to: "alignment", label: "evaluates" },
  { from: "alignment", to: "coherence", label: "produces" },
  { from: "human-cond", to: "hierarchy", label: "informs" },
  { from: "coherence", to: "wholeness", label: "produces" },
  { from: "wholeness", to: "endurance", label: "sustains" },
  { from: "coherence", to: "patterns", label: "reproduced" },
  { from: "patterns", to: "forms", label: "expressed" },
];

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  governing: { bg: "#EDF1F5", border: "#6B7B8D", text: "#4A5568", glow: "rgba(107,123,141,0.3)" },
  human: { bg: "#FDF3EF", border: "#C4785B", text: "#8B4C3B", glow: "rgba(196,120,91,0.3)" },
  process: { bg: "#FDF8EC", border: "#D4A853", text: "#8B7A3B", glow: "rgba(212,168,83,0.4)" },
  structure: { bg: "#EDF5EC", border: "#4A6741", text: "#3A5231", glow: "rgba(74,103,65,0.3)" },
  evaluation: { bg: "#F5F2EF", border: "#8A8480", text: "#4A4540", glow: "rgba(138,132,128,0.3)" },
  application: { bg: "#F0EDF5", border: "#7B6B8D", text: "#5A4A6B", glow: "rgba(123,107,141,0.3)" },
  core: { bg: "#FDF8EC", border: "#D4A853", text: "#6B5A2B", glow: "rgba(212,168,83,0.5)" },
};

function getNodePos(id: string): { x: number; y: number } {
  const node = NODES.find((n) => n.id === id);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

export function MasterTheoryDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const connectedNodes = useCallback(
    (nodeId: string) => {
      const connected = new Set<string>();
      connected.add(nodeId);
      EDGES.forEach((e) => {
        if (e.from === nodeId) connected.add(e.to);
        if (e.to === nodeId) connected.add(e.from);
      });
      return connected;
    },
    []
  );

  const activeNode = selectedNode || hoveredNode;
  const activeConnections = activeNode ? connectedNodes(activeNode) : null;

  const selectedData = selectedNode
    ? NODES.find((n) => n.id === selectedNode)
    : null;

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 800 820"
        className="w-full h-auto max-h-[70vh]"
        style={{ filter: "drop-shadow(0 2px 8px rgba(44,40,37,0.08))" }}
      >
        {/* Edges */}
        {EDGES.map((edge, i) => {
          const from = getNodePos(edge.from);
          const to = getNodePos(edge.to);
          const isActive =
            activeConnections &&
            activeConnections.has(edge.from) &&
            activeConnections.has(edge.to);
          const isDimmed = activeNode && !isActive;

          return (
            <g key={i}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isDimmed ? "#E5E0DB" : "#CCC5BD"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isDimmed ? "4 4" : "none"}
                opacity={isDimmed ? 0.3 : 0.6}
                style={{ transition: "all 0.3s ease" }}
              />
              {/* Animated particle on active edges */}
              {isActive && (
                <circle r="3" fill="#D4A853" opacity="0.8">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={`M${from.x},${from.y} L${to.x},${to.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => {
          const colors = CATEGORY_COLORS[node.category];
          const isActive = !activeConnections || activeConnections.has(node.id);
          const isSelected = selectedNode === node.id;
          const isDimmed = activeNode && !isActive;
          const lines = node.label.split("\n");

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isDimmed ? 0.25 : 1,
                scale: isSelected ? 1.08 : 1,
              }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() =>
                setSelectedNode(selectedNode === node.id ? null : node.id)
              }
              className="cursor-pointer"
            >
              {/* Glow */}
              {(isSelected || hoveredNode === node.id) && (
                <ellipse
                  cx={node.x}
                  cy={node.y}
                  rx={node.category === "core" ? 70 : 60}
                  ry={lines.length > 1 ? 30 : 22}
                  fill={colors.glow}
                  style={{ transition: "all 0.3s ease" }}
                />
              )}
              {/* Background */}
              <rect
                x={node.x - (node.category === "core" ? 65 : 55)}
                y={node.y - (lines.length > 1 ? 22 : 16)}
                width={node.category === "core" ? 130 : 110}
                height={lines.length > 1 ? 44 : 32}
                rx={16}
                fill={colors.bg}
                stroke={colors.border}
                strokeWidth={isSelected ? 2.5 : 1.5}
                style={{ transition: "all 0.3s ease" }}
              />
              {/* Label */}
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={node.x}
                  y={node.y + (li - (lines.length - 1) / 2) * 14 + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={colors.text}
                  fontSize={node.category === "core" ? 13 : 11}
                  fontWeight={node.category === "core" ? 700 : 500}
                  fontFamily="var(--font-sans, Inter, system-ui, sans-serif)"
                  style={{ transition: "all 0.3s ease" }}
                >
                  {line}
                </text>
              ))}
            </motion.g>
          );
        })}
      </svg>

      {/* Info panel */}
      <AnimatePresence>
        {selectedData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface border border-border rounded-2xl shadow-lg px-6 py-4 max-w-md"
          >
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
              {selectedData.label.replace("\n", " ")}
            </h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              {selectedData.summary}
            </p>
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-2 right-3 text-charcoal-muted hover:text-charcoal text-lg"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
