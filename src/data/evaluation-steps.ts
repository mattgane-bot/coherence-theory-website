export interface EvaluationStep {
  id: number;
  title: string;
  question: string;
  guidance: string;
  group: string;
  groupColor: string;
  theoryLink: string;
  theoryLabel: string;
}

export const EVALUATION_GROUPS = [
  { name: "Governing Conditions", color: "#6B7B8D", steps: [1, 2, 3, 4, 5] },
  { name: "Human Experience", color: "#4A6741", steps: [6, 7, 8, 9] },
  { name: "Temporal", color: "#D4A853", steps: [10] },
  { name: "Evaluation", color: "#C4785B", steps: [11, 12, 13, 14, 15, 16] },
  { name: "Application", color: "#9B5A45", steps: [17, 18, 19] },
];

export const EVALUATION_STEPS: EvaluationStep[] = [
  {
    id: 1,
    title: "Energy Conditions",
    question:
      "What energy sources sustain this system? Is the energy supply sufficient, sustainable, and well-distributed?",
    guidance:
      "Consider all forms of energy: physical (structural loads, climate), biological (metabolism, ecology), social (labour, attention, resources), and cultural (motivation, meaning). Rate how well energy is supplied and distributed.",
    group: "Governing Conditions",
    groupColor: "#6B7B8D",
    theoryLink: "/theory/governing-conditions",
    theoryLabel: "Governing Conditions",
  },
  {
    id: 2,
    title: "Physical Constraints",
    question:
      "What physical constraints does the system operate under? Are they respected or violated?",
    guidance:
      "Assess the Fundamental Intrinsic Properties: geometry, scale, mass, material, boundaries, enclosure, structural continuity. Does the system work within its physical limits or strain against them?",
    group: "Governing Conditions",
    groupColor: "#6B7B8D",
    theoryLink: "/theory/governing-conditions",
    theoryLabel: "Fundamental Properties",
  },
  {
    id: 3,
    title: "Structure Formation",
    question:
      "Are the three generative forces — energy, symmetry, and opposing forces — all present and operating?",
    guidance:
      "The Generative Triad requires all three. Energy provides capacity for change. Symmetry distributes and stabilises forces. Opposing forces introduce tension that prevents stasis. If any is missing, structure cannot form or endure.",
    group: "Governing Conditions",
    groupColor: "#6B7B8D",
    theoryLink: "/theory/governing-conditions",
    theoryLabel: "The Generative Triad",
  },
  {
    id: 4,
    title: "System Behaviour",
    question:
      "How does the system behave over time? Does it exhibit emergence, feedback, adaptation, and scaling?",
    guidance:
      "Assess the Complex Intrinsic Properties: Does the system show emergence (wholes greater than parts)? Does feedback regulate behaviour? Can it adapt to disturbance? Do patterns scale coherently?",
    group: "Governing Conditions",
    groupColor: "#6B7B8D",
    theoryLink: "/theory/governing-conditions",
    theoryLabel: "Complex Properties",
  },
  {
    id: 5,
    title: "Centres and Patterns",
    question:
      "Are recognisable centres forming? Are patterns emerging that concentrate and stabilise coherence?",
    guidance:
      "Look for local concentrations where relationships converge — not imposed focal points but emergent convergences. Are these centres well-distributed across scales? Do patterns repeat and reinforce?",
    group: "Governing Conditions",
    groupColor: "#6B7B8D",
    theoryLink: "/theory/centres-to-endurance",
    theoryLabel: "Centres to Endurance",
  },
  {
    id: 6,
    title: "Perception and Use",
    question:
      "How is the system perceived and used by those who inhabit or encounter it?",
    guidance:
      "Consider the perceptual filters at work: biological, environmental, cultural, emotional, cognitive. Is perception filtered in ways that obscure or reveal coherence? Does use reinforce or undermine structure?",
    group: "Human Experience",
    groupColor: "#4A6741",
    theoryLink: "/theory/emergent-centres",
    theoryLabel: "Perceptual Filters",
  },
  {
    id: 7,
    title: "Human Conditions",
    question:
      "Does the system support fundamental Human Conditions — shelter, warmth, orientation, belonging, rhythm, movement?",
    guidance:
      "These are not preferences but evolved biological needs. Assess whether the system provides for the body's requirements: protection, comfort, legibility, social connection, temporal order, and the capacity for exploration.",
    group: "Human Experience",
    groupColor: "#4A6741",
    theoryLink: "/theory/sublimation",
    theoryLabel: "Human Conditions",
  },
  {
    id: 8,
    title: "Perceptual Qualities",
    question:
      "Which Positive Perceptive Emergent Centres are present? Beauty, livingness, harmony, tranquillity, place attachment?",
    guidance:
      "Rate the presence and strength of experiential qualities: objective beauty, dynamic beauty, livingness, connection to nature, place attachment, identity, harmony, positive energy, intellectual life, utility, tranquillity, awesomeness.",
    group: "Human Experience",
    groupColor: "#4A6741",
    theoryLink: "/theory/emergent-centres",
    theoryLabel: "Emergent Centres",
  },
  {
    id: 9,
    title: "Meaning and Culture",
    question:
      "Does the system carry cultural meaning, symbolic charge, and collective memory?",
    guidance:
      "Assess whether sublimation has occurred — has instinct been transformed into meaningful form? Are symbols present that condense and transmit meaning? Does the system participate in cultural continuity?",
    group: "Human Experience",
    groupColor: "#4A6741",
    theoryLink: "/theory/sublimation",
    theoryLabel: "Sublimation & Symbolism",
  },
  {
    id: 10,
    title: "Development and Adaptation",
    question:
      "What phase of the Dynamic Engine is this system in? Is it developing, stable, or declining?",
    guidance:
      "Identify the phase: Translational, Morphogenesis, Emergence, Becoming, Unfolding, or Continuous Improvement. Is the system progressing through phases or stuck? Is adaptation occurring?",
    group: "Temporal",
    groupColor: "#D4A853",
    theoryLink: "/theory/dynamic-engine",
    theoryLabel: "The Dynamic Engine",
  },
  {
    id: 11,
    title: "Alignment",
    question:
      "How well do the system's parts align with one another? Is there congruence across scales?",
    guidance:
      "Assess whether centres at different scales support one another. Do details reinforce rooms, rooms reinforce buildings, buildings reinforce neighbourhoods? Or do parts compete, contradict, or ignore each other?",
    group: "Evaluation",
    groupColor: "#C4785B",
    theoryLink: "/theory/centres-to-endurance",
    theoryLabel: "Congruence",
  },
  {
    id: 12,
    title: "Coherence Types",
    question:
      "Which of the six coherence types are present? Which are weak or missing?",
    guidance:
      "Evaluate all six: Aesthetic/Structural, Dynamic, Connection to Nature, Livingness, Societal, Symbolic. Remember that failure in one domain undermines the others. Which types are strongest? Which need attention?",
    group: "Evaluation",
    groupColor: "#C4785B",
    theoryLink: "/theory/coherence-hierarchy",
    theoryLabel: "Coherence Hierarchy",
  },
  {
    id: 13,
    title: "Life and Livingness",
    question:
      "Does the system feel alive? Does it support biological life without cumulative strain?",
    guidance:
      "Livingness is not metaphorical — it is whether the environment supports the body. Does the nervous system settle here? Is attention stabilised? Or does the space drain energy, create discomfort, or feel hostile?",
    group: "Evaluation",
    groupColor: "#C4785B",
    theoryLink: "/theory/coherence-hierarchy",
    theoryLabel: "Livingness Coherence",
  },
  {
    id: 14,
    title: "Integration of Centres",
    question:
      "Do the system's centres integrate into a functioning whole? Is there wholeness?",
    guidance:
      "Wholeness arises when congruent centres operate together as an integrated system. Does the system have an identity? Is it more than the sum of its parts? Or is it fragmented — correct in parts but incoherent as a whole (Eschermatics)?",
    group: "Evaluation",
    groupColor: "#C4785B",
    theoryLink: "/theory/centres-to-endurance",
    theoryLabel: "Wholeness",
  },
  {
    id: 15,
    title: "Wholeness",
    question:
      "Does the system function as a unified whole? Does it have a recognisable identity?",
    guidance:
      "A whole system is more than aligned parts. It has properties that emerge only from the integration. Is there a character, an atmosphere, a quality that belongs to the whole and not to any single element?",
    group: "Evaluation",
    groupColor: "#C4785B",
    theoryLink: "/theory/centres-to-endurance",
    theoryLabel: "Wholeness to Viability",
  },
  {
    id: 16,
    title: "Endurance",
    question:
      "Can this system endure? Is it energetically sustainable over time?",
    guidance:
      "The central question: can the system maintain organisation against entropy using sustainable levels of energy? Does it require excessive effort to maintain? Can it repair, adapt, and renew? Or will it exhaust its means?",
    group: "Evaluation",
    groupColor: "#C4785B",
    theoryLink: "/theory/centres-to-endurance",
    theoryLabel: "Viability & Endurance",
  },
  {
    id: 17,
    title: "Patterns Needed",
    question:
      "What patterns are needed to strengthen coherence where it is weakest?",
    guidance:
      "Based on your evaluation so far, identify which form and process patterns would address gaps. Do you need better enclosure? Stronger thresholds? Clearer axes? More gradient? Better sequencing? Repair processes?",
    group: "Application",
    groupColor: "#9B5A45",
    theoryLink: "/theory/pattern-languages",
    theoryLabel: "Pattern Languages",
  },
  {
    id: 18,
    title: "Physical Expression",
    question:
      "How should these patterns be physically expressed in this specific context?",
    guidance:
      "Patterns adapt to local conditions — climate, materials, culture, use. Consider how the needed patterns would manifest here specifically. What forms, materials, spatial relationships, and processes are appropriate?",
    group: "Application",
    groupColor: "#9B5A45",
    theoryLink: "/theory/pattern-languages",
    theoryLabel: "Form Languages",
  },
  {
    id: 19,
    title: "What Will Be Built",
    question:
      "What specific interventions, designs, or changes would move this system toward greater coherence?",
    guidance:
      "Synthesise everything into actionable proposals. What should be created, modified, repaired, or removed? Prioritise by impact on coherence — which changes would create the most reinforcement across domains?",
    group: "Application",
    groupColor: "#9B5A45",
    theoryLink: "/theory/three-domains",
    theoryLabel: "Three Domains",
  },
];
