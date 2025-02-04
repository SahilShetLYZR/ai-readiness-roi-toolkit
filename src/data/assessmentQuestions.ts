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
      "Drive innovation",
      "Enhance decision making",
    ],
  },
  {
    id: 2,
    question: "Which AI-powered capabilities would provide the highest ROI for your business?",
    type: "multi",
    options: [
      "Process automation",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Recommendation systems",
    ],
  },
  {
    id: 3,
    question: "How do you measure the success of AI in your organization?",
    type: "multi",
    options: [
      "Cost savings",
      "Productivity metrics",
      "Customer satisfaction",
      "Revenue growth",
      "Employee satisfaction",
    ],
  },
  {
    id: 4,
    question: "What challenges do you face with your data?",
    type: "multi",
    options: [
      "Volume – We have too much data and need an AI solution to process it efficiently",
      "Variety – We need to process data from multiple sources (PDFs, Word docs, images, etc.)",
      "Velocity – Our data is generated too fast for us to analyze in real-time",
      "Veracity – Our data isn't always accurate or trustworthy, making AI insights unreliable",
      "Value – We struggle to extract useful business insights from our data",
    ],
  },
  {
    id: 5,
    question: "What challenges do you face in integrating AI with your existing workflows?",
    type: "multi",
    options: [
      "Technical complexity",
      "Data quality issues",
      "Lack of expertise",
      "Budget constraints",
      "Change management",
    ],
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