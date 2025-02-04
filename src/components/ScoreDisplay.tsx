import React from "react";
import CircularProgress from "./CircularProgress";
import BenchmarkDisplay from "./BenchmarkDisplay";
import { Industry } from "@/utils/industryWeights";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { generatePDF } from "react-to-pdf";
import { useToast } from "./ui/use-toast";

interface ScoreDisplayProps {
  score: number;
  industry?: Industry;
}

const ScoreDisplay = ({ score, industry }: ScoreDisplayProps) => {
  const { toast } = useToast();
  const resultRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    try {
      await generatePDF(resultRef, {
        filename: `ai-readiness-assessment-${industry?.toLowerCase()}.pdf`,
      });
      toast({
        title: "Success",
        description: "Your assessment results have been downloaded",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download assessment results",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div ref={resultRef}>
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Your Readiness Score</h3>
          <CircularProgress score={score} />
        </div>
        
        {industry && <BenchmarkDisplay score={score} industry={industry} />}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={handleDownload}
          className="bg-lyzr-purple hover:bg-lyzr-purple/90 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Results PDF
        </Button>
      </div>
    </div>
  );
};

export default ScoreDisplay;