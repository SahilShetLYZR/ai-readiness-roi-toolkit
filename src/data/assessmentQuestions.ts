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
      "Drive innovation & create new business models": 20,
      "Enable data-driven decision-making at scale": 20,
    }
  },
  {
    id: 2,
    question: "Which AI-powered capabilities would provide the highest ROI for your business?",
    type: "multi",
    options: [
      "Process automation",
      "Predictive analytics for forecasting & optimization",
      "Natural language processing (NLP) for customer & employee engagement",
      "Computer vision & image recognition",
      "AI-driven decision support systems",
      "AI-driven risk & security analytics",
    ],
    weights: {
      "Process automation": 10,
      "Predictive analytics for forecasting & optimization": 15,
      "Natural language processing (NLP) for customer & employee engagement": 10,
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
      "Productivity gains (reduced time spent on tasks, automation rates)",
      "Customer experience & engagement improvements",
      "AI adoption rate & automation impact",
      "Revenue growth driven by AI solutions",
    ],
    weights: {
      "Cost savings & operational efficiency improvements": 10,
      "Productivity gains (reduced time spent on tasks, automation rates)": 10,
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
      "Volume – AI needed to process large datasets efficiently",
      "Variety – AI needed for multi-source data processing",
      "Velocity – AI required for real-time analytics",
      "Veracity – Data accuracy concerns hinder AI adoption",
      "Value – Struggling to extract insights from data",
    ],
    weights: {
      "Volume – AI needed to process large datasets efficiently": -5,
      "Variety – AI needed for multi-source data processing": -3,
      "Velocity – AI required for real-time analytics": -3,
      "Veracity – Data accuracy concerns hinder AI adoption": -5,
      "Value – Struggling to extract insights from data": -5,
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
      "Fully automated with AI integration",
      "Partially automated with some AI",
      "Basic automation without AI",
      "Manual processes with automation plans",
      "Completely manual processes",
    ],
  },
  {
    id: 7,
    question: "Does your organization have an AI governance framework for security and compliance?",
    type: "single",
    options: [
      "Yes, comprehensive framework in place",
      "Partial framework implemented",
      "Framework in development",
      "Planning to develop",
      "No framework exists",
    ],
  },
  {
    id: 8,
    question: "How do you handle Responsible AI concerns like bias detection and security risks?",
    type: "single",
    options: [
      "Comprehensive monitoring and mitigation",
      "Basic monitoring in place",
      "Ad-hoc approach",
      "Planning to implement",
      "No measures in place",
    ],
  },
  {
    id: 9,
    question: "What is your organization's biggest barrier to AI adoption?",
    type: "single",
    options: [
      "Budget constraints",
      "Lack of skilled personnel",
      "Data quality issues",
      "Integration complexity",
      "Regulatory compliance",
    ],
  },
  {
    id: 10,
    question: "How does your company incorporate AI into end-to-end business processes?",
    type: "single",
    options: [
      "Fully integrated across all processes",
      "Integrated in key processes",
      "Pilot projects in progress",
      "Planning integration",
      "No integration yet",
    ],
  },
];
