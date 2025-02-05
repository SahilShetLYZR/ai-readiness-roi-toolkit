import { Industry, getIndustryWeights } from "./industryWeights";

const calculateWeightedScore = (answers: string[], weights: Record<string, number>): number => {
  return answers.reduce((score, answer) => score + (weights[answer] || 0), 0);
};

const calculateStrategyScore = (answers: Record<number, string[]>): number => {
  const questions = [1, 2, 3];
  let totalScore = 0;
  const maxScore = 40; // Maximum points for strategy section

  questions.forEach(questionId => {
    if (answers[questionId]) {
      const questionWeights = questions.find(q => q.id === questionId)?.weights || {};
      totalScore += calculateWeightedScore(answers[questionId], questionWeights);
    }
  });

  return Math.min(totalScore, maxScore);
};

const calculateReadinessScore = (answers: Record<number, string[]>): number => {
  const questions = [4, 5, 6];
  let totalScore = 30; // Start with max score and subtract based on challenges
  
  questions.forEach(questionId => {
    if (answers[questionId]) {
      const questionWeights = questions.find(q => q.id === questionId)?.weights || {};
      totalScore += calculateWeightedScore(answers[questionId], questionWeights);
    }
  });

  return Math.max(totalScore, 0);
};

const calculateGovernanceScore = (answers: Record<number, string[]>): number => {
  const questions = [7, 8];
  let totalScore = 0;
  const maxScore = 15;

  questions.forEach(questionId => {
    if (answers[questionId]) {
      // Governance questions are single-select
      const answer = answers[questionId][0];
      const score = answer?.includes("comprehensive") ? 15 :
                   answer?.includes("partial") ? 10 :
                   answer?.includes("development") ? 5 : 0;
      totalScore += score;
    }
  });

  return Math.min(totalScore, maxScore);
};

const calculateBarriersImpact = (answers: Record<number, string[]>): number => {
  const questions = [9, 10];
  let totalDeduction = 0;
  const maxDeduction = -20;

  questions.forEach(questionId => {
    if (answers[questionId]) {
      const answer = answers[questionId][0];
      const deduction = answer?.includes("No") ? -10 :
                       answer?.includes("Planning") ? -5 :
                       answer?.includes("Pilot") ? -2 : 0;
      totalDeduction += deduction;
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
  finalScore = Math.round((finalScore / 85) * 99);
  finalScore = Math.max(0, Math.min(99, finalScore));

  if (!industry) return finalScore;

  // Apply industry-specific weights
  const weights = getIndustryWeights(industry);
  
  // Adjust score based on industry weights
  if (answers[4]?.length > 0) { // Data challenges
    finalScore *= weights.dataWeight;
  }
  if (answers[7] || answers[8]) { // Governance
    finalScore *= weights.governanceWeight;
  }
  if (answers[2]?.length > 0) { // AI capabilities
    finalScore *= weights.aiCapabilitiesWeight;
  }
  if (answers[6]) { // Automation
    finalScore *= weights.automationWeight;
  }
  if (answers[8]) { // Responsible AI
    finalScore *= weights.responsibleAIWeight;
  }

  return Math.min(Math.round(finalScore), 99);
};