
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
        {questionIds.map(id => {
          const question = questions.find(q => q.id === id);
          if (!question) return null;

          return (
            <div key={id} className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium mb-2">Question {id}: {question.question}</p>
              
              <div className="ml-4 space-y-3">
                <p className="text-sm font-medium text-gray-700">Your answer(s):</p>
                {answers[id]?.map((answer, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lyzr-purple" />
                    <p className="text-sm">{answer}</p>
                  </div>
                ))}

                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">All possible answers and their scores:</p>
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{option}</span>
                        <span className={`font-medium ${
                          (question.weights?.[option] || 0) > 0 ? 'text-green-600' :
                          (question.weights?.[option] || 0) < 0 ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {question.weights?.[option] > 0 ? '+' : ''}{question.weights?.[option] || 0} points
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-2 h-2 rounded-full ${
                    getQuestionImpact(id, questions, answers) === "positive" ? "bg-green-500" :
                    getQuestionImpact(id, questions, answers) === "negative" ? "bg-red-500" :
                    "bg-gray-500"
                  }`} />
                  <p className="text-sm text-gray-600">
                    Total impact: {getQuestionScore(id, questions, answers)} points
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionScore;
