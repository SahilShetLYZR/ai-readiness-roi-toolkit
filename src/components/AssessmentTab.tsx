import { useState } from "react";
import { Industry } from "@/utils/industryWeights";
import { calculateScore } from "@/utils/scoringUtils";
import { useToast } from "./ui/use-toast";
import { questions } from "@/data/assessmentQuestions";
import AssessmentHeader from "./AssessmentHeader";
import QuestionsList from "./QuestionsList";
import ScoreDisplay from "./ScoreDisplay";
import AssessmentSubmit from "./AssessmentSubmit";

const industries = [
  "Healthcare",
  "Finance & Banking",
  "Retail & E-commerce",
  "Manufacturing & Supply Chain",
  "Education",
  "Telecommunications",
  "Government & Public Sector",
  "Technology & Software",
  "Energy & Utilities",
] as const;

const AssessmentTab = () => {
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | "">("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (questionId: number, selected: string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selected,
    }));
  };

  const handleSubmit = () => {
    const answeredQuestions = Object.keys(answers).length;
    if (answeredQuestions < questions.length) {
      toast({
        title: "Please answer all questions",
        description: `You have answered ${answeredQuestions} out of ${questions.length} questions.`,
        variant: "destructive",
      });
      return;
    }

    if (!selectedIndustry) {
      toast({
        title: "Please select your industry",
        description: "Industry selection is required for accurate assessment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AssessmentHeader
        selectedIndustry={selectedIndustry}
        onIndustryChange={setSelectedIndustry}
        industries={industries}
      />

      <QuestionsList
        questions={questions}
        answers={answers}
        onAnswer={handleAnswer}
      />

      <AssessmentSubmit 
        onSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />

      {isSubmitted && (
        <ScoreDisplay 
          score={calculateScore(answers, selectedIndustry as Industry)} 
          industry={selectedIndustry as Industry}
          answers={answers}
        />
      )}
    </div>
  );
};

export default AssessmentTab;