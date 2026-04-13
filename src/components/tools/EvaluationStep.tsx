"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { EvaluationStep as StepType } from "@/data/evaluation-steps";
import type { StepResponse } from "@/lib/evaluation-store";

interface Props {
  step: StepType;
  response: StepResponse | undefined;
  onSubmit: (response: StepResponse) => void;
  onBack: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const SCORE_LABELS = [
  "",
  "Critical — absent or failing",
  "Weak — present but inadequate",
  "Partial — functional with gaps",
  "Good — mostly coherent",
  "Strong — fully aligned and resolved",
];

export function EvaluationStepView({
  step,
  response,
  onSubmit,
  onBack,
  onNext,
  isFirst,
  isLast,
}: Props) {
  const [score, setScore] = useState(response?.score || 0);
  const [notes, setNotes] = useState(response?.notes || "");

  useEffect(() => {
    setScore(response?.score || 0);
    setNotes(response?.notes || "");
  }, [response, step.id]);

  const handleScore = (value: number) => {
    setScore(value);
    onSubmit({ score: value, notes });
  };

  const handleNotes = (value: string) => {
    setNotes(value);
    if (score > 0) {
      onSubmit({ score, notes: value });
    }
  };

  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Step header */}
      <div className="flex items-center gap-3 mb-2">
        <span
          className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: step.groupColor }}
        >
          {step.id}
        </span>
        <span className="text-xs font-medium text-charcoal-muted">
          {step.group}
        </span>
      </div>

      <h2 className="font-serif text-2xl font-semibold text-charcoal mb-2">
        {step.title}
      </h2>

      <p className="text-charcoal-light leading-relaxed mb-6">
        {step.question}
      </p>

      {/* Guidance */}
      <div
        className="p-4 rounded-xl border mb-6"
        style={{
          borderColor: step.groupColor + "30",
          backgroundColor: step.groupColor + "06",
        }}
      >
        <p className="text-sm text-charcoal-light leading-relaxed">
          {step.guidance}
        </p>
        <Link
          href={step.theoryLink}
          className="inline-flex items-center gap-1 text-xs font-medium mt-2 transition-colors"
          style={{ color: step.groupColor }}
          target="_blank"
        >
          Read: {step.theoryLabel}
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      {/* Score selector */}
      <div className="mb-6">
        <p className="text-sm font-medium text-charcoal mb-3">
          Rate this aspect (1–5):
        </p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => {
            const isSelected = score === value;
            return (
              <button
                key={value}
                onClick={() => handleScore(value)}
                className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${
                  isSelected
                    ? "text-white shadow-sm"
                    : "border-border bg-surface hover:border-charcoal-muted"
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: step.groupColor,
                        borderColor: step.groupColor,
                      }
                    : undefined
                }
              >
                <span className="text-lg font-bold">{value}</span>
              </button>
            );
          })}
        </div>
        {score > 0 && (
          <p className="text-xs text-charcoal-muted mt-2 text-center">
            {SCORE_LABELS[score]}
          </p>
        )}
      </div>

      {/* Notes */}
      <div className="mb-8">
        <label className="text-sm font-medium text-charcoal mb-2 block">
          Notes (optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => handleNotes(e.target.value)}
          placeholder="Observations, evidence, or specific details..."
          className="w-full p-3 rounded-xl border border-border bg-surface text-sm text-charcoal placeholder:text-charcoal-muted/50 resize-none focus:outline-none focus:border-charcoal-muted transition-colors"
          rows={3}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors"
        >
          {isFirst ? "Back to intro" : "Previous"}
        </button>
        <button
          onClick={onNext}
          disabled={score === 0}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
            score > 0
              ? "bg-charcoal text-white hover:bg-charcoal-light"
              : "bg-border text-charcoal-muted cursor-not-allowed"
          }`}
        >
          {isLast ? "View Results" : "Next"}
        </button>
      </div>
    </motion.div>
  );
}
