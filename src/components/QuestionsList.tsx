import QuestionCard from "./QuestionCard";
import { Question } from "@/types/assessment";

interface QuestionsListProps {
  questions: Question[];
  answers: Record<number, string[]>;
  onAnswer: (questionId: number, selected: string[]) => void;
}

const QuestionsList = ({ questions, answers, onAnswer }: QuestionsListProps) => {
  return (
    <div className="space-y-6 mb-8">
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q.question}
          options={q.options}
          type={q.type as "single" | "multi"}
          selected={answers[q.id] || []}
          onSelect={(selected) => onAnswer(q.id, selected)}
          questionNumber={q.id}
        />
      ))}
    </div>
  );
};

export default QuestionsList;