import React from "react";
import CircularProgress from "./CircularProgress";
import BenchmarkDisplay from "./BenchmarkDisplay";
import { Industry } from "@/utils/industryWeights";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  industry?: Industry;
}

const ScoreDisplay = ({ score, industry }: ScoreDisplayProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Your Readiness Score</h3>
          <CircularProgress score={score} />
        </div>
        
        {industry && <BenchmarkDisplay score={score} industry={industry} />}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={() => window.open("https://www.lyzr.ai/book-demo/", "_blank")}
          className="bg-lyzr-purple hover:bg-lyzr-purple/90 text-white"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Book a Demo
        </Button>
      </div>
    </div>
  );
};

export default ScoreDisplay;