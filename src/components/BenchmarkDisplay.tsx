import { Progress } from "@/components/ui/progress";
import { Industry } from "@/utils/industryWeights";
import { industryBenchmarks } from "@/utils/industryBenchmarks";

interface BenchmarkDisplayProps {
  score: number;
  industry: Industry;
}

const BenchmarkDisplay = ({ score, industry }: BenchmarkDisplayProps) => {
  const benchmark = industryBenchmarks[industry];
  
  if (!benchmark) return null;

  const getScoreLabel = (score: number) => {
    if (score >= benchmark.topQuartile) return "Leading";
    if (score >= benchmark.average) return "Above Average";
    if (score >= benchmark.bottomQuartile) return "Below Average";
    return "Lagging";
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Industry Benchmark Comparison</h3>
      
      <div className="space-y-6">
        <div className="relative pt-4">
          <Progress value={benchmark.bottomQuartile} className="h-2 bg-gray-100" />
          <Progress value={benchmark.average} className="h-2 -mt-2 bg-gray-200" />
          <Progress value={benchmark.topQuartile} className="h-2 -mt-2 bg-gray-300" />
          <Progress value={score} className="h-3 -mt-2.5 bg-lyzr-purple" />
          
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Your Score</span>
            <span className="font-semibold text-lyzr-purple">{score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Industry Average</span>
            <span className="font-semibold text-gray-600">{benchmark.average}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Top Quartile</span>
            <span className="font-semibold text-gray-600">{benchmark.topQuartile}</span>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm">
            <span className="font-medium">Performance: </span>
            Your organization is <span className="font-semibold text-lyzr-purple">{getScoreLabel(score)}</span> in {industry}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkDisplay;