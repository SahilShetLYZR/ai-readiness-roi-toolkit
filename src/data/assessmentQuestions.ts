import { Question } from "@/types/assessment";

export const questions: Question[] = [
  {
    id: 1,
    question: "What primary goal are you looking to achieve with AI?",
    type: "multi",
    options: [
      "Increase operational efficiency",
      "Reduce costs",
      "Improve customer experience",
      "Drive innovation & create new business models",
      "Enable data-driven decision-making at scale",
    ],
    weights: {
      "Increase operational efficiency": 5,
      "Reduce costs": 5,
      "Improve customer experience": 10,
      "Drive innovation & create new business models": 15,
      "Enable data-driven decision-making at scale": 15,
    }
  },
  {
    id: 2,
    question: "Which AI-powered capabilities would provide the highest ROI for your business?",
    type: "multi",
    options: [
      "Process automation",
      "Predictive analytics for forecasting & optimization",
      "Natural language processing (NLP) for engagement",
      "Computer vision & image recognition",
      "AI-driven decision support systems",
      "AI-driven risk & security analytics",
    ],
    weights: {
      "Process automation": 10,
      "Predictive analytics for forecasting & optimization": 15,
      "Natural language processing (NLP) for engagement": 10,
      "Computer vision & image recognition": 10,
      "AI-driven decision support systems": 15,
      "AI-driven risk & security analytics": 15,
    }
  },
  {
    id: 3,
    question: "How do you measure the success of AI in your organization?",
    type: "multi",
    options: [
      "Cost savings & operational efficiency improvements",
      "Productivity gains (automation rate, time savings)",
      "Customer experience & engagement improvements",
      "AI adoption rate & automation impact",
      "Revenue growth driven by AI solutions",
    ],
    weights: {
      "Cost savings & operational efficiency improvements": 10,
      "Productivity gains (automation rate, time savings)": 10,
      "Customer experience & engagement improvements": 10,
      "AI adoption rate & automation impact": 15,
      "Revenue growth driven by AI solutions": 15,
    }
  },
  {
    id: 4,
    question: "What challenges do you face with your data?",
    type: "multi",
    options: [
      "Volume – Too much data to process",
      "Variety – Data from multiple sources (PDFs, Word, images, etc.)",
      "Velocity – Real-time analytics issues",
      "Veracity – Data accuracy & reliability concerns",
      "Value – Struggle to extract business insights",
    ],
    weights: {
      "Volume – Too much data to process": -5,
      "Variety – Data from multiple sources (PDFs, Word, images, etc.)": -3,
      "Velocity – Real-time analytics issues": -3,
      "Veracity – Data accuracy & reliability concerns": -5,
      "Value – Struggle to extract business insights": -5,
    }
  },
  {
    id: 5,
    question: "What challenges do you face in integrating AI with your existing workflows?",
    type: "multi",
    options: [
      "Technical complexity",
      "Data quality issues",
      "Lack of AI expertise & skills",
      "Budget constraints",
      "Cultural resistance to AI adoption",
    ],
    weights: {
      "Technical complexity": -5,
      "Data quality issues": -5,
      "Lack of AI expertise & skills": -5,
      "Budget constraints": -3,
      "Cultural resistance to AI adoption": -3,
    }
  },
  {
    id: 6,
    question: "What level of automation exists in your business processes today?",
    type: "single",
    options: [
      "Fully automated – AI-driven workflows in multiple areas",
      "Partially automated – AI is used, but manual processes remain",
      "Limited automation – Only basic AI tools (e.g., chatbots, analytics)",
      "No automation – All processes are manual",
    ],
    weights: {
      "Fully automated – AI-driven workflows in multiple areas": 15,
      "Partially automated – AI is used, but manual processes remain": 10,
      "Limited automation – Only basic AI tools (e.g., chatbots, analytics)": 5,
      "No automation – All processes are manual": 0,
    }
  },
  {
    id: 7,
    question: "Does your organization have an AI governance framework for security and compliance?",
    type: "single",
    options: [
      "Yes – Well-defined AI governance & policies in place",
      "Somewhat – Initial policies exist, but enforcement is weak",
      "Not yet – We are exploring governance frameworks",
      "No – No AI governance policies in place",
    ],
    weights: {
      "Yes – Well-defined AI governance & policies in place": 15,
      "Somewhat – Initial policies exist, but enforcement is weak": 10,
      "Not yet – We are exploring governance frameworks": 5,
      "No – No AI governance policies in place": 0,
    }
  },
  {
    id: 8,
    question: "What is your organization's biggest barrier to AI adoption?",
    type: "multi",
    options: [
      "Lack of technical expertise",
      "Resistance to change",
      "Budget limitations",
      "Uncertainty about ROI",
      "Data privacy & security concerns",
    ],
    weights: {
      "Lack of technical expertise": -5,
      "Resistance to change": -3,
      "Budget limitations": -3,
      "Uncertainty about ROI": -5,
      "Data privacy & security concerns": -4,
    }
  }
];