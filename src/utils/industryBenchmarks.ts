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

interface ReadinessLevel {
  level: string;
  color: string;
  message: string;
  recommendations: string[];
  cta: {
    primary: string;
    secondary?: string;
  };
}

const getWeakAreas = (answers: Record<number, string[]>): string[] => {
  const weakAreas = [];
  
  // Check AI Capabilities (Question 2)
  if (!answers[2] || answers[2].length < 2) {
    weakAreas.push("ai-capabilities");
  }
  
  // Check Data Challenges (Question 4)
  if (!answers[4] || answers[4].length < 2) {
    weakAreas.push("data-quality");
  }
  
  // Check Governance (Questions 7 & 8)
  if ((!answers[7] || answers[7][0]?.includes("No")) && 
      (!answers[8] || answers[8][0]?.includes("No"))) {
    weakAreas.push("governance");
  }
  
  return weakAreas;
};

const getSpecificRecommendations = (weakAreas: string[]): string[] => {
  const recommendations: string[] = [];
  
  if (weakAreas.includes("ai-capabilities")) {
    recommendations.push("Join our free 30-minute webinar on AI adoption best practices");
  }
  
  if (weakAreas.includes("data-quality")) {
    recommendations.push("Schedule a free data audit with a Lyzr expert");
  }
  
  if (weakAreas.includes("governance")) {
    recommendations.push("Implement a basic AI governance framework using our starter template");
  }
  
  return recommendations;
};

export const getReadinessLevel = (score: number, industry: string): ReadinessLevel | null => {
  const benchmark = industryBenchmarks[industry];
  if (!benchmark) return null;

  if (score >= 80) {
    return {
      level: "Best-in-Class AI Leader",
      color: "green",
      message: "You're ahead of your industry in AI adoption! To maximize your ROI, consider scaling automation and AI-driven workflows across all business functions.",
      recommendations: [
        "Expand into Agentic AI-driven automation",
        "Implement real-time AI decision systems",
        "Explore predictive analytics & AI-driven customer insights"
      ],
      cta: {
        primary: "Book a Strategy Session",
        secondary: "Download AI Leadership Whitepaper"
      }
    };
  } else if (score >= 50) {
    return {
      level: "Developing AI Maturity",
      color: "yellow",
      message: "You're on the right track! Your AI adoption is aligned with industry trends, but further improvements in AI governance, automation, and data management will drive better ROI.",
      recommendations: [
        "Strengthen AI governance & security frameworks",
        "Optimize data pipelines for better AI accuracy",
        "Expand AI adoption into new business functions"
      ],
      cta: {
        primary: "Book a Consultation",
        secondary: "Read Success Stories"
      }
    };
  } else {
    return {
      level: "AI Beginner - High Risk",
      color: "red",
      message: "Your AI readiness is below industry standards, but the good news is you can improve quickly! Businesses like NTT Data transformed their AI strategy in weeks with the right foundation.",
      recommendations: [
        "Conduct a data audit to assess AI readiness",
        "Implement a basic AI governance framework",
        "Start with small AI automation use cases"
      ],
      cta: {
        primary: "Book a Free AI Readiness Consultation"
      }
    };
  }
};