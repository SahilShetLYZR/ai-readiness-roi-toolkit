import { Industry, getIndustryWeights } from "./industryWeights";

const calculateBaseScore = (answers: Record<number, string[]>): number => {
  let score = 0;
  const maxScore = 99;

  // Calculate base score based on number of questions answered
  const answeredQuestions = Object.keys(answers).length;
  score = (answeredQuestions / 10) * maxScore;

  // Add bonus points for multi-select questions
  Object.values(answers).forEach((selected) => {
    if (selected.length > 1) {
      score += 5;
    }
  });

  return Math.min(score, maxScore);
};

const calculateWeightedScore = (
  baseScore: number,
  answers: Record<number, string[]>,
  industry?: Industry
): number => {
  if (!industry) return baseScore;

  const weights = getIndustryWeights(industry);
  let weightedScore = baseScore;

  // Apply weights based on question categories
  if (answers[4]?.length > 0) {
    // Data challenges question
    weightedScore *= weights.dataWeight;
  }

  if (answers[7] || answers[8]) {
    // Governance and Responsible AI questions
    weightedScore *= weights.governanceWeight;
  }

  if (answers[2]?.length > 0) {
    // AI capabilities question
    weightedScore *= weights.aiCapabilitiesWeight;
  }

  if (answers[6]) {
    // Automation question
    weightedScore *= weights.automationWeight;
  }

  if (answers[8]) {
    // Responsible AI question
    weightedScore *= weights.responsibleAIWeight;
  }

  return Math.min(Math.round(weightedScore), 99);
};

export const calculateScore = (
  answers: Record<number, string[]>,
  industry?: Industry
): number => {
  const baseScore = calculateBaseScore(answers);
  return industry ? calculateWeightedScore(baseScore, answers, industry) : baseScore;
};