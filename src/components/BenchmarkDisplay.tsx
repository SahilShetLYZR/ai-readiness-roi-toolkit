import { Progress } from "@/components/ui/progress";
import { Industry } from "@/utils/industryWeights";
import { industryBenchmarks, getReadinessLevel } from "@/utils/industryBenchmarks";

interface BenchmarkDisplayProps {
  score: number;
  industry: Industry;
}

const BenchmarkDisplay = ({ score, industry }: BenchmarkDisplayProps) => {
  const benchmark = industryBenchmarks[industry];
  const readinessLevel = getReadinessLevel(score, industry);
  
  if (!benchmark || !readinessLevel) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Benchmark comparison for {industry}</h3>
      
      <div className="space-y-6">
        <div className="relative pt-4">
          <Progress value={benchmark.lagging.max} className="h-2 bg-red-100" />
          <Progress value={benchmark.average.max} className="h-2 -mt-2 bg-yellow-100" />
          <Progress value={benchmark.bestInClass.max} className="h-2 -mt-2 bg-green-100" />
          <Progress value={score} className="h-3 -mt-2.5 bg-lyzr-purple" />
          
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>0</span>
            <span>{benchmark.lagging.max}</span>
            <span>{benchmark.average.max}</span>
            <span>{benchmark.bestInClass.max}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Your Score</span>
            <span className="font-semibold text-lyzr-purple">{score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Industry Average Range</span>
            <span className="font-semibold text-gray-600">
              {benchmark.average.min}-{benchmark.average.max}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Best-in-Class Range</span>
            <span className="font-semibold text-gray-600">
              {benchmark.bestInClass.min}-{benchmark.bestInClass.max}
            </span>
          </div>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${
          readinessLevel.color === "green" ? "bg-green-50" :
          readinessLevel.color === "yellow" ? "bg-yellow-50" :
          "bg-red-50"
        }`}>
          <p className="text-sm mb-2">
            <span className="font-medium">Performance: </span>
            {readinessLevel.message}
          </p>
          <div className="mt-3">
            <p className="text-sm font-medium mb-2">Recommendations:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {readinessLevel.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkDisplay;