"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EVALUATION_STEPS, EVALUATION_GROUPS } from "@/data/evaluation-steps";
import { useEvaluationStore } from "@/lib/evaluation-store";
import { EvaluationStepView } from "./EvaluationStep";
import { EvaluationResults } from "./EvaluationResults";

export function EvaluationWizard() {
  const {
    systemName,
    responses,
    currentStep,
    isComplete,
    setSystemName,
    setResponse,
    setCurrentStep,
    markComplete,
    reset,
  } = useEvaluationStore();

  const [nameInput, setNameInput] = useState(systemName);

  const totalSteps = EVALUATION_STEPS.length;
  const answeredCount = Object.keys(responses).length;

  // Intro screen
  if (currentStep === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-serif text-3xl font-semibold text-charcoal mb-4">
          19-Step Coherence Evaluation
        </h2>
        <p className="text-charcoal-light leading-relaxed mb-6">
          Evaluate any system — a building, city, institution, landscape, or
          organisation — using the complete Coherence Theory framework. Step
          through each condition required for endurance, from governing
          conditions through human experience to practical application.
        </p>

        {/* Group overview */}
        <div className="space-y-2 mb-8">
          {EVALUATION_GROUPS.map((group) => (
            <div key={group.name} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: group.color }}
              />
              <span className="text-sm font-medium text-charcoal">
                {group.name}
              </span>
              <span className="text-xs text-charcoal-muted">
                ({group.steps.length} step{group.steps.length !== 1 ? "s" : ""})
              </span>
            </div>
          ))}
        </div>

        {/* System name */}
        <div className="mb-6">
          <label className="text-sm font-medium text-charcoal mb-2 block">
            What are you evaluating?
          </label>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="e.g. 'Our office building', 'The town centre', 'The new housing development'"
            className="w-full p-3 rounded-xl border border-border bg-surface text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none focus:border-charcoal-muted transition-colors"
          />
        </div>

        {/* Resume or start */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setSystemName(nameInput);
              setCurrentStep(1);
            }}
            className="px-6 py-2.5 rounded-lg text-sm font-medium bg-charcoal text-white hover:bg-charcoal-light transition-colors"
          >
            {answeredCount > 0 ? "Continue Evaluation" : "Begin Evaluation"}
          </button>
          {answeredCount > 0 && (
            <>
              <span className="text-xs text-charcoal-muted">
                {answeredCount}/{totalSteps} steps completed
              </span>
              <button
                onClick={() => {
                  reset();
                  setNameInput("");
                }}
                className="text-xs text-charcoal-muted hover:text-human transition-colors"
              >
                Reset
              </button>
            </>
          )}
        </div>
      </motion.div>
    );
  }

  // Results screen
  if (isComplete) {
    return (
      <EvaluationResults
        systemName={systemName}
        responses={responses}
        onReset={() => {
          reset();
          setNameInput("");
        }}
        onBack={() => {
          setCurrentStep(totalSteps);
          markComplete(); // keep isComplete false via the setCurrentStep
          useEvaluationStore.setState({ isComplete: false });
        }}
      />
    );
  }

  // Step view
  const step = EVALUATION_STEPS.find((s) => s.id === currentStep);
  if (!step) return null;

  // Find current group for progress
  const currentGroup = EVALUATION_GROUPS.find((g) =>
    g.steps.includes(currentStep)
  );

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-charcoal-muted">
            Step {currentStep} of {totalSteps}
          </span>
          {systemName && (
            <span className="text-xs text-charcoal-muted truncate max-w-[200px]">
              {systemName}
            </span>
          )}
        </div>

        {/* Group segments */}
        <div className="flex gap-0.5 h-1.5 rounded-full overflow-hidden">
          {EVALUATION_GROUPS.map((group) => (
            <div key={group.name} className="flex gap-px" style={{ flex: group.steps.length }}>
              {group.steps.map((stepId) => (
                <button
                  key={stepId}
                  onClick={() => setCurrentStep(stepId)}
                  className="flex-1 rounded-sm transition-all hover:opacity-80"
                  style={{
                    backgroundColor:
                      responses[stepId]?.score
                        ? group.color
                        : stepId === currentStep
                          ? group.color + "60"
                          : "#E5E0DB",
                  }}
                  title={`Step ${stepId}: ${EVALUATION_STEPS[stepId - 1]?.title}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Group label */}
        {currentGroup && (
          <div className="flex items-center gap-2 mt-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentGroup.color }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: currentGroup.color }}
            >
              {currentGroup.name}
            </span>
          </div>
        )}
      </div>

      <EvaluationStepView
        step={step}
        response={responses[currentStep]}
        onSubmit={(response) => setResponse(currentStep, response)}
        onBack={() => {
          if (currentStep === 1) {
            setCurrentStep(0);
          } else {
            setCurrentStep(currentStep - 1);
          }
        }}
        onNext={() => {
          if (currentStep === totalSteps) {
            markComplete();
          } else {
            setCurrentStep(currentStep + 1);
          }
        }}
        isFirst={currentStep === 1}
        isLast={currentStep === totalSteps}
      />
    </div>
  );
}
