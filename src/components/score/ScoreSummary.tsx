import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { Industry } from "@/utils/industryWeights";

interface ScoreSummaryProps {
  score: number;
}

const ScoreSummary = ({ score }: ScoreSummaryProps) => {
  const getSummary = () => {
    if (score >= 80) {
      return {
        assessment: "Your organization shows strong AI readiness across strategy, data maturity, and governance.",
        suggestion: "Book a demo to explore how Lyzr can accelerate your AI initiatives and maintain your competitive edge."
      };
    } else if (score >= 50) {
      return {
        assessment: "Your organization has a foundation for AI adoption but shows room for improvement in key areas.",
        suggestion: "Explore the Lyzr App Store for ready-to-use AI solutions that align with your goals."
      };
    } else {
      return {
        assessment: "Your organization is in the early stages of AI adoption with significant opportunities for growth.",
        suggestion: "Schedule a consultation to identify quick wins and develop a roadmap for AI implementation."
      };
    }
  };

  const summary = getSummary();

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <p className="text-gray-700 mb-2">{summary.assessment}</p>
      <p className="text-gray-700 mb-4">{summary.suggestion}</p>
      <div className="flex gap-3">
        <Button
          onClick={() => window.open("https://www.lyzr.ai/book-demo/", "_blank")}
          className="bg-gradient-to-r from-violet-500 to-rose-500 hover:opacity-90 text-white"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Book a Demo
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open("https://www.lyzr.ai/app-store/", "_blank")}
        >
          Explore App Store
        </Button>
      </div>
    </div>
  );
};

export default ScoreSummary;