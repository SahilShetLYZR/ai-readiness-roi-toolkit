
import { Industry, getIndustryWeights } from "./industryWeights";
import { Question } from "@/types/assessment";
import { questions } from "@/data/assessmentQuestions";

export const getQuestionScore = (
  questionId: number, 
  questions: Question[], 
  answers: Record<number, string[]>
): number => {
  const question = questions.find(q => q.id === questionId);
  if (!question?.weights || !answers[questionId]) return 0;
  
  return answers[questionId].reduce((total, answer) => 
    total + (question.weights?.[answer] || 0), 0
  );
};

export const getQuestionImpact = (
  questionId: number,
  questions: Question[],
  answers: Record<number, string[]>
): "positive" | "negative" | "neutral" => {
  const score = getQuestionScore(questionId, questions, answers);
  if (score > 0) return "positive";
  if (score < 0) return "negative";
  return "neutral";
};

export const getSectionScore = (
  startId: number, 
  endId: number,
  questions: Question[],
  answers: Record<number, string[]>
): number => {
  return Array.from({ length: endId - startId + 1 }, (_, i) => startId + i)
    .reduce((total, id) => total + getQuestionScore(id, questions, answers), 0);
};

const calculateWeightedScore = (answers: string[], weights: Record<string, number>): number => {
  return answers.reduce((score, answer) => score + (weights[answer] || 0), 0);
};

const calculateStrategyScore = (answers: Record<number, string[]>): number => {
  const strategyQuestions = questions.filter(q => q.id <= 3);
  let totalScore = 0;
  
  strategyQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      totalScore += calculateWeightedScore(answers[question.id], question.weights);
    }
  });

  return totalScore;
};

const calculateTalentScore = (answers: Record<number, string[]>): number => {
  const talentQuestions = questions.filter(q => q.id >= 4 && q.id <= 5);
  let totalScore = 0;
  
  talentQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      totalScore += calculateWeightedScore(answers[question.id], question.weights);
    }
  });

  return totalScore;
};

const calculateUseCasesScore = (answers: Record<number, string[]>): number => {
  const useCaseQuestions = questions.filter(q => q.id >= 6 && q.id <= 7);
  let totalScore = 0;
  
  useCaseQuestions.forEach(question => {
    if (answers[question.id] && question.weights) {
      totalScore += calculateWeightedScore(answers[question.id], question.weights);
    }
  });

  return totalScore;
};

export const calculateScore = (
  answers: Record<number, string[]>,
  industry?: Industry
): number => {
  const strategyScore = calculateStrategyScore(answers);
  const talentScore = calculateTalentScore(answers);
  const useCasesScore = calculateUseCasesScore(answers);

  let finalScore = strategyScore + talentScore + useCasesScore;
  
  // Normalize to 0-99 scale
  const maxPossibleScore = 160; // Total possible points across all sections
  finalScore = Math.round((finalScore / maxPossibleScore) * 99);
  finalScore = Math.max(0, Math.min(99, finalScore));

  if (!industry) return finalScore;

  // Apply industry-specific weights
  const weights = getIndustryWeights(industry);
  
  // Adjust score based on industry weights
  finalScore *= weights.dataWeight;
  finalScore *= weights.governanceWeight;
  finalScore *= weights.aiCapabilitiesWeight;
  finalScore *= weights.automationWeight;
  finalScore *= weights.responsibleAIWeight;

  return Math.min(Math.round(finalScore), 99);
};
