import { Industry, getIndustryWeights } from "./industryWeights";

const calculatePrimaryGoalAndCapabilitiesScore = (answers: Record<number, string[]>): number => {
  const goalAnswers = answers[1] || [];
  const capabilityAnswers = answers[2] || [];
  const totalPossible = 20; // Max 20 points for this category
  const totalSelected = goalAnswers.length + capabilityAnswers.length;
  const maxSelections = 10; // 5 options each for goals and capabilities
  return Math.min(Math.round((totalSelected / maxSelections) * totalPossible), totalPossible);
};

const calculateSuccessMetricsScore = (answers: Record<number, string[]>): number => {
  const metricsAnswers = answers[3] || [];
  const totalPossible = 10;
  return Math.min(Math.round((metricsAnswers.length / 5) * totalPossible), totalPossible);
};

const calculateDataChallengesScore = (answers: Record<number, string[]>): number => {
  const dataChallenges = answers[4] || [];
  const totalPossible = 10;
  return Math.min(Math.round((dataChallenges.length / 5) * totalPossible), totalPossible);
};

const calculateIntegrationChallengesScore = (answers: Record<number, string[]>): number => {
  const challenges = answers[5] || [];
  const totalPossible = 10;
  // More challenges = lower score
  return Math.max(totalPossible - Math.round((challenges.length / 5) * totalPossible), 0);
};

const calculateAutomationScore = (answers: Record<number, string[]>): number => {
  const automationLevel = answers[6]?.[0] || "";
  const scores: Record<string, number> = {
    "Fully automated with AI integration": 10,
    "Partially automated with some AI": 7,
    "Basic automation without AI": 4,
    "Manual processes with automation plans": 2,
    "Completely manual processes": 0,
  };
  return scores[automationLevel] || 0;
};

const calculateGovernanceAndResponsibleAIScore = (answers: Record<number, string[]>): number => {
  const governanceAnswer = answers[7]?.[0] || "";
  const responsibleAIAnswer = answers[8]?.[0] || "";
  
  const governanceScores: Record<string, number> = {
    "Yes, comprehensive framework in place": 8,
    "Partial framework implemented": 6,
    "Framework in development": 4,
    "Planning to develop": 2,
    "No framework exists": 0,
  };

  const responsibleAIScores: Record<string, number> = {
    "Comprehensive monitoring and mitigation": 7,
    "Basic monitoring in place": 5,
    "Ad-hoc approach": 3,
    "Planning to implement": 2,
    "No measures in place": 0,
  };

  return (governanceScores[governanceAnswer] || 0) + (responsibleAIScores[responsibleAIAnswer] || 0);
};

const calculateAdoptionBarriersScore = (answers: Record<number, string[]>): number => {
  const barriers = answers[9]?.[0] || "";
  const scores: Record<string, number> = {
    "Budget constraints": 6,
    "Lack of skilled personnel": 4,
    "Data quality issues": 8,
    "Integration complexity": 5,
    "Regulatory compliance": 7,
  };
  return scores[barriers] || 0;
};

const calculateEndToEndIntegrationScore = (answers: Record<number, string[]>): number => {
  const integration = answers[10]?.[0] || "";
  const scores: Record<string, number> = {
    "Fully integrated across all processes": 14,
    "Integrated in key processes": 10,
    "Pilot projects in progress": 7,
    "Planning integration": 4,
    "No integration yet": 0,
  };
  return scores[integration] || 0;
};

const calculateBaseScore = (answers: Record<number, string[]>): number => {
  const scores = [
    calculatePrimaryGoalAndCapabilitiesScore(answers), // Max 20
    calculateSuccessMetricsScore(answers), // Max 10
    calculateDataChallengesScore(answers), // Max 10
    calculateIntegrationChallengesScore(answers), // Max 10
    calculateAutomationScore(answers), // Max 10
    calculateGovernanceAndResponsibleAIScore(answers), // Max 15
    calculateAdoptionBarriersScore(answers), // Max 10
    calculateEndToEndIntegrationScore(answers), // Max 14
  ];

  return Math.min(scores.reduce((a, b) => a + b, 0), 99);
};

export const calculateScore = (
  answers: Record<number, string[]>,
  industry?: Industry
): number => {
  const baseScore = calculateBaseScore(answers);
  
  if (!industry) return baseScore;

  // Apply industry-specific weights
  const weights = getIndustryWeights(industry);
  const dataChallenges = answers[4] || [];
  
  // Adjust score based on industry weights
  let finalScore = baseScore;
  
  // Data challenges affect weight more in data-intensive industries
  if (dataChallenges.length > 0) {
    finalScore *= weights.dataWeight;
  }
  
  // Apply governance weight based on regulatory requirements
  if (answers[7] || answers[8]) {
    finalScore *= weights.governanceWeight;
  }
  
  // AI capabilities weight affects industries with high automation potential
  if (answers[2]?.length > 0) {
    finalScore *= weights.aiCapabilitiesWeight;
  }
  
  // Automation weight varies by industry maturity
  if (answers[6]) {
    finalScore *= weights.automationWeight;
  }
  
  // Responsible AI weight is higher in sensitive industries
  if (answers[8]) {
    finalScore *= weights.responsibleAIWeight;
  }

  return Math.min(Math.round(finalScore), 99);
};