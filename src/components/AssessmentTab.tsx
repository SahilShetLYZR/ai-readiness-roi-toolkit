import { useState } from "react";
import QuestionCard from "./QuestionCard";
import CircularProgress from "./CircularProgress";

const questions = [
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
    question:
      "Which AI-powered capabilities would provide the highest ROI for your business?",
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
    question:
      "How well does your company understand the 5 V's of Data (Volume, Variety, Velocity, Veracity, and Value)?",
    type: "single",
    options: [
      "Very well - We actively manage all aspects",
      "Moderately - We understand but don't fully implement",
      "Basic understanding - We're learning",
      "Limited - We need significant improvement",
      "Not at all - We're just starting",
    ],
  },
  {
    id: 5,
    question:
      "What challenges do you face in integrating AI with your existing workflows?",
    type: "multi",
    options: [
      "Technical complexity",
      "Data quality issues",
      "Lack of expertise",
      "Budget constraints",
      "Change management",
    ],
  },
];

const AssessmentTab = () => {
  const [answers, setAnswers] = useState<Record<number, string[]>>({});

  const handleAnswer = (questionId: number, selected: string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selected,
    }));
  };

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    const baseScore = (answeredQuestions / totalQuestions) * 100;

    const multiSelectBonus = Object.entries(answers).reduce((acc, [id, selected]) => {
      const question = questions.find((q) => q.id === Number(id));
      if (question?.type === "multi" && selected.length > 1) {
        return acc + 5;
      }
      return acc;
    }, 0);

    return Math.min(Math.round(baseScore + multiSelectBonus), 100);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-lyzr-blue mb-2">
          AI Readiness Assessment
        </h2>
        <p className="text-gray-600">
          Answer these questions to evaluate your organization's AI readiness
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {questions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q.question}
            options={q.options}
            type={q.type as "single" | "multi"}
            selected={answers[q.id] || []}
            onSelect={(selected) => handleAnswer(q.id, selected)}
            questionNumber={q.id}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Your Readiness Score</h3>
        <CircularProgress score={calculateScore()} />
      </div>
    </div>
  );
};

export default AssessmentTab;