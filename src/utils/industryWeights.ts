export type Industry =
  | "Healthcare"
  | "Finance & Banking"
  | "Retail & E-commerce"
  | "Manufacturing & Supply Chain"
  | "Education"
  | "Telecommunications"
  | "Government & Public Sector"
  | "Technology & Software"
  | "Energy & Utilities";

export interface IndustryWeight {
  dataWeight: number;
  governanceWeight: number;
  aiCapabilitiesWeight: number;
  automationWeight: number;
  responsibleAIWeight: number;
}

const industryWeights: Record<Industry, IndustryWeight> = {
  Healthcare: {
    dataWeight: 1.2, // +20% for data handling
    governanceWeight: 1.1,
    aiCapabilitiesWeight: 1.0,
    automationWeight: 1.0,
    responsibleAIWeight: 1.1,
  },
  "Finance & Banking": {
    dataWeight: 1.1,
    governanceWeight: 1.2, // +20% for compliance
    aiCapabilitiesWeight: 1.1,
    automationWeight: 1.0,
    responsibleAIWeight: 1.1,
  },
  "Retail & E-commerce": {
    dataWeight: 1.0,
    governanceWeight: 1.0,
    aiCapabilitiesWeight: 1.2, // +20% for AI capabilities
    automationWeight: 1.1,
    responsibleAIWeight: 1.0,
  },
  "Manufacturing & Supply Chain": {
    dataWeight: 1.1,
    governanceWeight: 1.0,
    aiCapabilitiesWeight: 1.1,
    automationWeight: 1.2, // +20% for automation
    responsibleAIWeight: 1.0,
  },
  Education: {
    dataWeight: 1.0,
    governanceWeight: 1.1,
    aiCapabilitiesWeight: 1.0,
    automationWeight: 1.0,
    responsibleAIWeight: 1.2, // +20% for responsible AI
  },
  Telecommunications: {
    dataWeight: 1.1,
    governanceWeight: 1.1,
    aiCapabilitiesWeight: 1.1,
    automationWeight: 1.1,
    responsibleAIWeight: 1.0,
  },
  "Government & Public Sector": {
    dataWeight: 1.0,
    governanceWeight: 1.2,
    aiCapabilitiesWeight: 1.0,
    automationWeight: 1.0,
    responsibleAIWeight: 1.2,
  },
  "Technology & Software": {
    dataWeight: 1.1,
    governanceWeight: 1.1,
    aiCapabilitiesWeight: 1.2,
    automationWeight: 1.1,
    responsibleAIWeight: 1.0,
  },
  "Energy & Utilities": {
    dataWeight: 1.1,
    governanceWeight: 1.1,
    aiCapabilitiesWeight: 1.0,
    automationWeight: 1.2,
    responsibleAIWeight: 1.0,
  },
};

export const getIndustryWeights = (industry: Industry): IndustryWeight => {
  return industryWeights[industry];
};