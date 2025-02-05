import { getQuestionScore, getQuestionImpact } from "@/utils/scoringUtils";
import { Question } from "@/types/assessment";

interface SectionScoreProps {
  title: string;
  questionIds: number[];
  questions: Question[];
  answers: Record<number, string[]>;
  sectionScore: number;
}

const SectionScore = ({ title, questionIds, questions, answers, sectionScore }: SectionScoreProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-medium">{title}</h4>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 mb-2">
          Score contribution: {sectionScore} points
        </p>
        {questionIds.map(id => (
          <div key={id} className="mt-3">
            <p className="text-sm font-medium">Question {id}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${
                getQuestionImpact(id, questions, answers) === "positive" ? "bg-green-500" :
                getQuestionImpact(id, questions, answers) === "negative" ? "bg-red-500" :
                "bg-gray-500"
              }`} />
              <p className="text-sm text-gray-600">
                Impact: {getQuestionScore(id, questions, answers)} points
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionScore;