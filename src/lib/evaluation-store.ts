import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StepResponse {
  score: number; // 1-5
  notes: string;
}

interface EvaluationState {
  systemName: string;
  responses: Record<number, StepResponse>;
  currentStep: number;
  isComplete: boolean;
  setSystemName: (name: string) => void;
  setResponse: (stepId: number, response: StepResponse) => void;
  setCurrentStep: (step: number) => void;
  markComplete: () => void;
  reset: () => void;
}

export const useEvaluationStore = create<EvaluationState>()(
  persist(
    (set) => ({
      systemName: "",
      responses: {},
      currentStep: 0, // 0 = intro screen
      isComplete: false,
      setSystemName: (name) => set({ systemName: name }),
      setResponse: (stepId, response) =>
        set((state) => ({
          responses: { ...state.responses, [stepId]: response },
        })),
      setCurrentStep: (step) => set({ currentStep: step }),
      markComplete: () => set({ isComplete: true }),
      reset: () =>
        set({
          systemName: "",
          responses: {},
          currentStep: 0,
          isComplete: false,
        }),
    }),
    {
      name: "coherence-evaluation",
    }
  )
);
