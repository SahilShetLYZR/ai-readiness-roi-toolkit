
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { Industry } from "@/utils/industryWeights";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

interface ScoreSummaryProps {
  score: number;
  industry?: Industry;
}

const ScoreSummary = ({ score, industry }: ScoreSummaryProps) => {
  const [interestedInPilot, setInterestedInPilot] = useState(false);

  const getSummary = () => {
    if (score >= 70) {
      return {
        assessment: "Your AI readiness score indicates strong AI maturity! AI is well embedded in your strategy, with strong leadership, governance, and impact measurement.",
        suggestion: "Let's explore how to optimize and scale your AI initiatives further.",
        resources: [
          {
            title: "Advanced AI Architectures",
            url: "https://www.lyzr.ai/blog/lyzr-introduces-agentmesh-architecture/",
            description: "Explore AgentMesh Architecture"
          },
          {
            title: "Research Projects",
            url: "https://www.lyzr.ai/research-projects/",
            description: "Explore AI Innovation & Academic Collaboration"
          },
          {
            title: "Enterprise AI Framework",
            url: "https://www.lyzr.ai/enterprise/",
            description: "Organizational General Intelligence"
          },
          {
            title: "AWS Partnership",
            url: "https://www.lyzr.ai/partnership/aws/",
            description: "Scale with AWS Integration"
          },
          {
            title: "Expert AI Agents",
            url: "https://www.lyzr.ai/blog/mixture-of-expert-agents/",
            description: "Learn about Mixture of Expert Agents"
          }
        ]
      };
    } else if (score >= 40) {
      return {
        assessment: "Your AI adoption is growing, but requires additional maturity in governance, strategy, or talent. Focus on strengthening these areas to accelerate transformation.",
        suggestion: "Let's explore how to strengthen your AI foundation.",
        resources: [
          {
            title: "AI SaaS Solutions",
            url: "https://www.lyzr.ai/pricing/",
            description: "Explore Lyzr Pricing Options"
          },
          {
            title: "Enterprise AI Stack",
            url: "https://www.youtube.com/watch?v=SiRwqf6pPU0",
            description: "Learn about Enterprise-Grade GenAI Stack"
          },
          {
            title: "Lyzr Studio",
            url: "https://studio.lyzr.ai/",
            description: "Prototype AI Solutions"
          },
          {
            title: "Ready-to-Use AI Apps",
            url: "https://studio.lyzr.ai/app-store/",
            description: "Explore Lyzr App Store"
          }
        ]
      };
    } else {
      return {
        assessment: "Your AI readiness score indicates you're in the early stages. Focus on building AI awareness, ensuring data readiness, and securing executive buy-in.",
        suggestion: "Start with our foundational AI resources.",
        resources: [
          {
            title: "AI Fundamentals",
            url: "https://www.lyzr.ai/glossaries/",
            description: "Browse Lyzr Glossary"
          },
          {
            title: "AI Learning",
            url: "https://www.lyzr.ai/webinars/",
            description: "Watch AI Learning Webinars"
          },
          {
            title: "Getting Started",
            url: "https://www.youtube.com/watch?v=ImXlHRPWQcQ",
            description: "Learn about Lyzr Agent Framework"
          },
          {
            title: "AI Use Cases",
            url: "https://www.lyzr.ai/blog/",
            description: "Explore Lyzr Blog"
          }
        ]
      };
    }
  };

  const getIndustryAgents = () => {
    switch (industry) {
      case "Finance & Banking":
        return "https://www.lyzr.ai/banking-agents/";
      case "Technology & Software":
        return "https://www.lyzr.ai/sales-agents/";
      case "Retail & E-commerce":
        return "https://www.lyzr.ai/marketing-agents/";
      case "Education":
        return "https://www.lyzr.ai/hr-agents/";
      case "Telecommunications":
        return "https://www.lyzr.ai/customer-service-agents/";
      case "Government & Public Sector":
        return "https://www.lyzr.ai/financial-services-agents/";
      default:
        return "https://www.lyzr.ai/agents/";
    }
  };

  const summary = getSummary();

  return (
    <div className="space-y-6">
      <div className="p-4 bg-white rounded-lg border border-gray-200">
        <p className="text-gray-700 mb-4">{summary.assessment}</p>
        <p className="text-gray-700 font-medium mb-4">{summary.suggestion}</p>
        
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
            onClick={() => window.open(getIndustryAgents(), "_blank")}
          >
            Explore Industry AI Agents
          </Button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-2">3-Month AI Pilot Program</h4>
          <p className="text-sm text-gray-600 mb-4">
            Eligible organizations can participate in a limited 3-month AI pilot program with Lyzr.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox
              id="pilot"
              checked={interestedInPilot}
              onCheckedChange={(checked) => setInterestedInPilot(checked as boolean)}
            />
            <label
              htmlFor="pilot"
              className="text-sm text-gray-700"
            >
              Yes, I'd like to be contacted about a 3-month AI pilot
            </label>
          </div>
          <Button
            onClick={() => window.open("https://www.lyzr.ai/book-demo/", "_blank")}
            className="w-full"
            disabled={!interestedInPilot}
          >
            Check Pilot Eligibility
          </Button>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-medium text-gray-900 mb-2">Responsible AI Resources</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open("https://studio.lyzr.ai/responsible-ai/", "_blank")}
          >
            Explore AI Governance
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open("https://www.researchgate.net/publication/388554578_AgentDefender_by_Lyzr_A_Benchmark_Evaluation_and_Neural_Embedding_Approach_for_Agent_Prompt_Injection/", "_blank")}
          >
            AI Security Research
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-medium text-gray-900 mb-4">Recommended Resources</h4>
        <div className="space-y-4">
          {summary.resources.map((resource, index) => (
            <div key={index} className="p-3 bg-white rounded border border-gray-100 hover:border-lyzr-purple transition-colors">
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <h5 className="text-sm font-medium text-gray-900 mb-1">{resource.title}</h5>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
