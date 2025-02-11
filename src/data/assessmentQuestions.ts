
import { Question } from "@/types/assessment";

export const questions: Question[] = [
  // AI Strategy & Business Alignment
  {
    id: 1,
    question: "Does your organization have a defined AI strategy?",
    type: "single",
    options: [
      "AI is a core part of our business strategy with executive buy-in",
      "AI initiatives exist but are not aligned across the company",
      "AI is used in some areas, but no formal strategy",
      "No clear AI strategy"
    ],
    weights: {
      "AI is a core part of our business strategy with executive buy-in": 20,
      "AI initiatives exist but are not aligned across the company": 15,
      "AI is used in some areas, but no formal strategy": 10,
      "No clear AI strategy": 0
    }
  },
  {
    id: 2,
    question: "How does your organization measure AI's impact on business outcomes?",
    type: "single",
    options: [
      "AI ROI and KPIs are clearly tracked",
      "Some measurement exists, but it's inconsistent",
      "AI projects are happening, but impact is unclear",
      "No measurement of AI impact"
    ],
    weights: {
      "AI ROI and KPIs are clearly tracked": 20,
      "Some measurement exists, but it's inconsistent": 15,
      "AI projects are happening, but impact is unclear": 10,
      "No measurement of AI impact": 0
    }
  },
  {
    id: 3,
    question: "What is the primary driver for AI adoption in your organization?",
    type: "single",
    options: [
      "AI is a strategic differentiator for competitive advantage",
      "AI is used to automate tasks and reduce costs",
      "AI is being experimented with but not fully deployed",
      "No clear driver for AI adoption"
    ],
    weights: {
      "AI is a strategic differentiator for competitive advantage": 20,
      "AI is used to automate tasks and reduce costs": 15,
      "AI is being experimented with but not fully deployed": 10,
      "No clear driver for AI adoption": 0
    }
  },
  // People & AI Talent
  {
    id: 4,
    question: "Who is responsible for AI adoption in your organization?",
    type: "single",
    options: [
      "Dedicated AI team with collaboration across business & IT",
      "IT team leads AI initiatives",
      "Business teams are exploring AI but lack structure",
      "No clear ownership of AI initiatives"
    ],
    weights: {
      "Dedicated AI team with collaboration across business & IT": 20,
      "IT team leads AI initiatives": 15,
      "Business teams are exploring AI but lack structure": 10,
      "No clear ownership of AI initiatives": 0
    }
  },
  {
    id: 5,
    question: "How well do employees across departments understand AI?",
    type: "single",
    options: [
      "AI training is widespread across departments",
      "AI awareness exists, but no formal training",
      "AI knowledge is limited to technical teams",
      "No AI training or awareness"
    ],
    weights: {
      "AI training is widespread across departments": 20,
      "AI awareness exists, but no formal training": 15,
      "AI knowledge is limited to technical teams": 10,
      "No AI training or awareness": 0
    }
  },
  // AI Use Cases & Applications
  {
    id: 6,
    question: "What AI-powered solutions does your organization currently use?",
    type: "multi",
    options: [
      "Conversational AI for customer support",
      "AI-powered document processing",
      "AI-driven image or video recognition",
      "AI-generated content (text, images, video)",
      "AI-powered search and knowledge retrieval",
      "AI for deep research and summarization",
      "No AI use cases currently"
    ],
    weights: {
      "Conversational AI for customer support": 10,
      "AI-powered document processing": 10,
      "AI-driven image or video recognition": 10,
      "AI-generated content (text, images, video)": 10,
      "AI-powered search and knowledge retrieval": 10,
      "AI for deep research and summarization": 10,
      "No AI use cases currently": 0
    }
  },
  {
    id: 7,
    question: "How AI-driven is decision-making in your organization?",
    type: "single",
    options: [
      "AI insights drive key business decisions",
      "AI informs decisions but is not central",
      "AI is experimental, with limited impact on decisions",
      "AI is not used for decision-making"
    ],
    weights: {
      "AI insights drive key business decisions": 20,
      "AI informs decisions but is not central": 15,
      "AI is experimental, with limited impact on decisions": 10,
      "AI is not used for decision-making": 0
    }
  }
];
