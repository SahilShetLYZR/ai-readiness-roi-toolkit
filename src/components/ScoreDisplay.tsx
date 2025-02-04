import CircularProgress from "./CircularProgress";
import BenchmarkDisplay from "./BenchmarkDisplay";
import { Industry } from "@/utils/industryWeights";

interface ScoreDisplayProps {
  score: number;
  industry?: Industry;
}

const ScoreDisplay = ({ score, industry }: ScoreDisplayProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Your Readiness Score</h3>
        <CircularProgress score={score} />
      </div>
      
      {industry && <BenchmarkDisplay score={score} industry={industry} />}
    </div>
  );
};

export default ScoreDisplay;