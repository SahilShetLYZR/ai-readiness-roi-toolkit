import { Industry } from "@/utils/industryWeights";
import { questions } from "@/data/assessmentQuestions";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ScoreBreakdownProps {
  answers: Record<number, string[]>;
  score: number;
  industry: Industry;
}

interface CaseStudy {
  title: string;
  insight: string;
  url: string;
  relevantIndustries: Industry[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Leading Energy Provider",
    insight: "Implementation of AI agents significantly reduced manual work-order processing time",
    url: "https://www.lyzr.ai/case-studies/leading-energy-provider/",
    relevantIndustries: ["Energy & Utilities", "Manufacturing & Supply Chain"]
  },
  {
    title: "Global IT Giant",
    insight: "AI-driven change request analysis led to 80% reduction in high-priority incidents",
    url: "https://www.lyzr.ai/case-studies/global-it-giant/",
    relevantIndustries: ["Technology & Software", "Telecommunications"]
  },
  {
    title: "HR & Workforce Leader",
    insight: "AI-powered coaching provided personalized psychometric insights",
    url: "https://www.lyzr.ai/case-studies/hr-workforce-leader/",
    relevantIndustries: ["Education", "Healthcare"]
  },
  {
    title: "Customer Service Leader",
    insight: "AI multi-agent systems automated invoice validation and data entry",
    url: "https://www.lyzr.ai/case-studies/customer-service-leader/",
    relevantIndustries: ["Finance & Banking", "Retail & E-commerce"]
  },
  {
    title: "Industrial Manufacturing Firm",
    insight: "AI facilitated real-time translation and note-taking for global collaboration",
    url: "https://www.lyzr.ai/case-studies/industrial-manufacturing-firm/",
    relevantIndustries: ["Manufacturing & Supply Chain", "Government & Public Sector"]
  }
];

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

  const relevantCaseStudies = caseStudies.filter(study => 
    study.relevantIndustries.includes(industry)
  );

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
    <div className="mt-8 space-y-6">
      <h3 className="text-lg font-semibold">Score Breakdown</h3>
      
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

      {relevantCaseStudies.length > 0 && (
        <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <h4 className="font-medium mb-4">Relevant Case Studies for Your Industry</h4>
          <div className="space-y-4">
            {relevantCaseStudies.map((study, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-sm mb-2">{study.title}</h5>
                <p className="text-sm text-gray-600 mb-3">{study.insight}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(study.url, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreBreakdown;
