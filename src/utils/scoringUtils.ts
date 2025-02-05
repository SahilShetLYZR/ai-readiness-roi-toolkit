import { Industry, getIndustryWeights } from "./industryWeights";
import { questions } from "@/data/assessmentQuestions";

const calculateWeightedScore = (answers: string[], weights: Record<string, number>): number => {
  return answers.reduce((score, answer) => score + (weights[answer] || 0), 0);
};

const calculateStrategyScore = (answers: Record<number, string[]>): number => {
  const strategyQuestions = questions.filter(q => q.id <= 3);
  let totalScore = 0;
  const maxScore = 40; // Maximum points for strategy section

  strategyQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      totalScore += calculateWeightedScore(answers[question.id], question.weights);
    }
  });

  return Math.min(totalScore, maxScore);
};

const calculateReadinessScore = (answers: Record<number, string[]>): number => {
  const readinessQuestions = questions.filter(q => q.id >= 4 && q.id <= 6);
  let totalScore = 30; // Start with max score and subtract based on challenges
  
  readinessQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      totalScore += calculateWeightedScore(answers[question.id], question.weights);
    }
  });

  return Math.max(totalScore, 0);
};

const calculateGovernanceScore = (answers: Record<number, string[]>): number => {
  const governanceQuestions = questions.filter(q => q.id === 7);
  let totalScore = 0;
  const maxScore = 15;

  governanceQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      const answer = answers[question.id][0];
      totalScore += question.weights[answer] || 0;
    }
  });

  return Math.min(totalScore, maxScore);
};

const calculateBarriersImpact = (answers: Record<number, string[]>): number => {
  const barrierQuestions = questions.filter(q => q.id === 8);
  let totalDeduction = 0;
  const maxDeduction = -20;

  barrierQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      totalDeduction += calculateWeightedScore(answers[question.id], question.weights);
    }
  });

  return Math.max(totalDeduction, maxDeduction);
};

export const calculateScore = (
  answers: Record<number, string[]>,
  industry?: Industry
): number => {
  const strategyScore = calculateStrategyScore(answers);
  const readinessScore = calculateReadinessScore(answers);
  const governanceScore = calculateGovernanceScore(answers);
  const barriersImpact = calculateBarriersImpact(answers);

  let finalScore = strategyScore + readinessScore + governanceScore + barriersImpact;
  
  // Normalize to 0-99 scale
  const maxPossibleScore = 100; // Total possible points across all sections
  finalScore = Math.round((finalScore / maxPossibleScore) * 99);
  finalScore = Math.max(0, Math.min(99, finalScore));

  if (!industry) return finalScore;

  // Apply industry-specific weights
  const weights = getIndustryWeights(industry);
  
  // Adjust score based on industry weights
  if (answers[4]?.length > 0) { // Data challenges
    finalScore *= weights.dataWeight;
  }
  if (answers[7]) { // Governance
    finalScore *= weights.governanceWeight;
  }
  if (answers[2]?.length > 0) { // AI capabilities
    finalScore *= weights.aiCapabilitiesWeight;
  }
  if (answers[6]) { // Automation
    finalScore *= weights.automationWeight;
  }
  if (answers[8]?.length > 0) { // Barriers
    finalScore *= weights.responsibleAIWeight;
  }

  return Math.min(Math.round(finalScore), 99);
};