import { Question } from "@/types/assessment";
import { getQuestionScore } from "@/utils/scoringUtils";

interface ImprovementAreasProps {
  answers: Record<number, string[]>;
  questions: Question[];
}

const ImprovementAreas = ({ answers, questions }: ImprovementAreasProps) => {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h4 className="font-medium mb-2">Areas for Improvement</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {getQuestionScore(1, questions, answers) < 20 && (
          <li>• Define clearer strategic goals for AI adoption to increase impact</li>
        )}
        {getQuestionScore(2, questions, answers) < 20 && (
          <li>• Consider expanding AI capabilities into more advanced use cases</li>
        )}
        {getQuestionScore(3, questions, answers) < 20 && (
          <li>• Implement more comprehensive AI success metrics</li>
        )}
        {getQuestionScore(4, questions, answers) < 0 && (
          <li>• Address data quality and management challenges</li>
        )}
        {getQuestionScore(5, questions, answers) < 0 && (
          <li>• Focus on removing AI integration barriers</li>
        )}
        {getQuestionScore(6, questions, answers) < 10 && (
          <li>• Increase automation levels across business processes</li>
        )}
        {getQuestionScore(7, questions, answers) < 10 && (
          <li>• Strengthen AI governance and compliance frameworks</li>
        )}
        {getQuestionScore(8, questions, answers) < 0 && (
          <li>• Work on addressing key AI adoption barriers</li>
        )}
      </ul>
    </div>
  );
};

export default ImprovementAreas;