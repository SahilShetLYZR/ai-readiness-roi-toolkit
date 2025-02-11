
import { Progress } from "@/components/ui/progress";
import { Industry } from "@/utils/industryWeights";
import { industryBenchmarks, getReadinessLevel } from "@/utils/industryBenchmarks";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface BenchmarkDisplayProps {
  score: number;
  industry: Industry;
}

const getRecommendationUrl = (recommendation: string): string => {
  // Map recommendations to URLs
  const urlMap: Record<string, string> = {
    "Expand into Agentic AI-driven automation": "https://www.lyzr.ai/blog/lyzr-introduces-agentmesh-architecture/",
    "Implement real-time AI decision systems": "https://www.lyzr.ai/enterprise/",
    "Explore predictive analytics & AI-driven customer insights": "https://studio.lyzr.ai/responsible-ai/",
    "Strengthen AI governance & security frameworks": "https://studio.lyzr.ai/responsible-ai/",
    "Optimize data pipelines for better AI accuracy": "https://www.lyzr.ai/pricing/",
    "Expand AI adoption into new business functions": "https://www.youtube.com/watch?v=SiRwqf6pPU0",
    "See how SurePeople automated talent assessment with AI in weeks": "https://www.lyzr.ai/blog/surepeoples-success-story/",
    "Learn from NTT Data's success in building a Risk Assessment AI Agent": "https://www.lyzr.ai/blog/ntt-data-success-story/",
    "Start with proven AI use cases from our customer success stories": "https://www.lyzr.ai/blog/"
  };
  
  return urlMap[recommendation] || "https://www.lyzr.ai/resources/";
};

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
          <h4 className="font-semibold mb-2">{readinessLevel.level}</h4>
          <p className="text-sm mb-4">{readinessLevel.message}</p>
          
          <div className="mt-3">
            <p className="text-sm font-medium mb-2">Recommended Next Steps:</p>
            <ul className="list-none pl-0 text-sm space-y-2">
              {readinessLevel.recommendations.map((rec, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-gray-400">•</span>
                  <a 
                    href={getRecommendationUrl(rec)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lyzr-purple hover:underline"
                  >
                    {rec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              onClick={() => window.open("https://www.lyzr.ai/book-demo/", "_blank")}
              className="w-full bg-gradient-to-r from-violet-500 to-rose-500 hover:opacity-90 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {readinessLevel.cta.primary}
            </Button>
            
            {readinessLevel.cta.secondary && (
              <Button
                onClick={() => window.open("https://www.lyzr.ai/resources/", "_blank")}
                variant="outline"
                className="w-full"
              >
                {readinessLevel.cta.secondary}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkDisplay;
