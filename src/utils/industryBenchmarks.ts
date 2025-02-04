export const industryBenchmarks: Record<string, {
  bestInClass: { min: number; max: number };
  average: { min: number; max: number };
  lagging: { min: number; max: number };
}> = {
  "Healthcare": {
    bestInClass: { min: 85, max: 99 },
    average: { min: 60, max: 79 },
    lagging: { min: 0, max: 50 }
  },
  "Finance & Banking": {
    bestInClass: { min: 88, max: 99 },
    average: { min: 65, max: 80 },
    lagging: { min: 0, max: 55 }
  },
  "Retail & E-commerce": {
    bestInClass: { min: 80, max: 95 },
    average: { min: 55, max: 75 },
    lagging: { min: 0, max: 50 }
  },
  "Manufacturing & Supply Chain": {
    bestInClass: { min: 82, max: 98 },
    average: { min: 58, max: 78 },
    lagging: { min: 0, max: 52 }
  },
  "Education": {
    bestInClass: { min: 75, max: 92 },
    average: { min: 50, max: 72 },
    lagging: { min: 0, max: 45 }
  },
  "Government & Public Sector": {
    bestInClass: { min: 70, max: 90 },
    average: { min: 50, max: 70 },
    lagging: { min: 0, max: 40 }
  },
  "Technology & Software": {
    bestInClass: { min: 90, max: 99 },
    average: { min: 70, max: 85 },
    lagging: { min: 0, max: 60 }
  },
  "Energy & Utilities": {
    bestInClass: { min: 80, max: 95 },
    average: { min: 55, max: 75 },
    lagging: { min: 0, max: 50 }
  },
  "Telecommunications": {
    bestInClass: { min: 85, max: 98 },
    average: { min: 60, max: 80 },
    lagging: { min: 0, max: 55 }
  }
};

export const getReadinessLevel = (score: number, industry: string) => {
  const benchmark = industryBenchmarks[industry];
  if (!benchmark) return null;

  if (score >= benchmark.bestInClass.min) {
    return {
      level: "Best-in-Class",
      color: "green",
      message: "You are ahead of your industry in AI readiness!",
      recommendations: [
        "Expand into Agentic AI",
        "Implement AI-driven business process automation",
        "Lead industry innovation with advanced AI solutions"
      ]
    };
  } else if (score >= benchmark.average.min) {
    return {
      level: "Industry Average",
      color: "yellow",
      message: "You are aligned with industry trends, but there's room to improve.",
      recommendations: [
        "Enhance AI governance",
        "Improve data automation",
        "Strengthen analytics capabilities"
      ]
    };
  } else {
    return {
      level: "Lagging AI Adoption",
      color: "red",
      message: "Your AI readiness is below industry standards.",
      recommendations: [
        "Start with low-risk AI pilots",
        "Invest in AI training",
        "Improve data quality"
      ]
    };
  }
};