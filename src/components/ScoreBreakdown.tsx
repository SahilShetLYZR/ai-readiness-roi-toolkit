import { Industry } from "@/utils/industryWeights";
import { questions } from "@/data/assessmentQuestions";

interface ScoreBreakdownProps {
  answers: Record<number, string[]>;
  score: number;
  industry: Industry;
}

const ScoreBreakdown = ({ answers, score, industry }: ScoreBreakdownProps) => {
  const getQuestionScore = (questionId: number): number => {
    const question = questions.find(q => q.id === questionId);
    if (!question?.weights || !answers[questionId]) return 0;
    
    return answers[questionId].reduce((total, answer) => 
      total + (question.weights?.[answer] || 0), 0
    );
  };

  const getQuestionImpact = (questionId: number): "positive" | "negative" | "neutral" => {
    const score = getQuestionScore(questionId);
    if (score > 0) return "positive";
    if (score < 0) return "negative";
    return "neutral";
  };

  const getSectionScore = (startId: number, endId: number): number => {
    return Array.from({ length: endId - startId + 1 }, (_, i) => startId + i)
      .reduce((total, id) => total + getQuestionScore(id), 0);
  };

  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-lg font-semibold">Score Breakdown</h3>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h4 className="font-medium">AI Strategy & Adoption (Questions 1-3)</h4>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Score contribution: {getSectionScore(1, 3)} points
            </p>
            {[1, 2, 3].map(id => (
              <div key={id} className="mt-3">
                <p className="text-sm font-medium">Question {id}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    getQuestionImpact(id) === "positive" ? "bg-green-500" :
                    getQuestionImpact(id) === "negative" ? "bg-red-500" :
                    "bg-gray-500"
                  }`} />
                  <p className="text-sm text-gray-600">
                    Impact: {getQuestionScore(id)} points
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">AI Readiness & Data Maturity (Questions 4-5)</h4>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Score contribution: {getSectionScore(4, 5)} points
            </p>
            {[4, 5].map(id => (
              <div key={id} className="mt-3">
                <p className="text-sm font-medium">Question {id}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    getQuestionImpact(id) === "positive" ? "bg-green-500" :
                    getQuestionImpact(id) === "negative" ? "bg-red-500" :
                    "bg-gray-500"
                  }`} />
                  <p className="text-sm text-gray-600">
                    Impact: {getQuestionScore(id)} points
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">AI Governance & Risk Readiness (Questions 6-7)</h4>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Score contribution: {getSectionScore(6, 7)} points
            </p>
            {[6, 7].map(id => (
              <div key={id} className="mt-3">
                <p className="text-sm font-medium">Question {id}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    getQuestionImpact(id) === "positive" ? "bg-green-500" :
                    getQuestionImpact(id) === "negative" ? "bg-red-500" :
                    "bg-gray-500"
                  }`} />
                  <p className="text-sm text-gray-600">
                    Impact: {getQuestionScore(id)} points
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">AI Adoption Barriers (Question 8)</h4>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Score impact: {getSectionScore(8, 8)} points
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium">Question 8</p>
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-2 h-2 rounded-full ${
                  getQuestionImpact(8) === "positive" ? "bg-green-500" :
                  getQuestionImpact(8) === "negative" ? "bg-red-500" :
                  "bg-gray-500"
                }`} />
                <p className="text-sm text-gray-600">
                  Impact: {getQuestionScore(8)} points
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2">Areas for Improvement</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {getQuestionScore(1) < 20 && (
            <li>• Define clearer strategic goals for AI adoption to increase impact</li>
          )}
          {getQuestionScore(2) < 20 && (
            <li>• Consider expanding AI capabilities into more advanced use cases</li>
          )}
          {getQuestionScore(3) < 20 && (
            <li>• Implement more comprehensive AI success metrics</li>
          )}
          {getQuestionScore(4) < 0 && (
            <li>• Address data quality and management challenges</li>
          )}
          {getQuestionScore(5) < 0 && (
            <li>• Focus on removing AI integration barriers</li>
          )}
          {getQuestionScore(6) < 10 && (
            <li>• Increase automation levels across business processes</li>
          )}
          {getQuestionScore(7) < 10 && (
            <li>• Strengthen AI governance and compliance frameworks</li>
          )}
          {getQuestionScore(8) < 0 && (
            <li>• Work on addressing key AI adoption barriers</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ScoreBreakdown;