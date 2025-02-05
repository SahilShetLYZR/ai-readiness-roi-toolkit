
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { Industry } from "@/utils/industryWeights";

interface ScoreSummaryProps {
  score: number;
  industry?: Industry;
}

const getAgentRecommendation = (industry?: Industry) => {
  const agentMap = {
    "Finance & Banking": {
      title: "Dwight - AI RFP Scout",
      url: "https://www.lyzr.ai/dwight-ai-rfp-scout/",
      description: "Automate RFP discovery and processing"
    },
    "Healthcare": {
      title: "Jeff - AI Support Agent",
      url: "https://www.lyzr.ai/jeff/",
      description: "AI-powered healthcare support automation"
    },
    "Retail & E-commerce": {
      title: "Skott - AI Marketer",
      url: "https://www.lyzr.ai/skott/",
      description: "AI for retail campaign automation"
    },
    "Manufacturing & Supply Chain": {
      title: "Kathy - AI Competitor Analyst",
      url: "https://www.lyzr.ai/kathy/",
      description: "AI-driven supply chain intelligence"
    },
    "Education": {
      title: "Diane - AI HR Agent",
      url: "https://www.lyzr.ai/diane/",
      description: "AI for educational HR automation"
    },
    "Technology & Software": {
      title: "Jazon - AI SDR",
      url: "https://www.lyzr.ai/jazon/",
      description: "AI-driven tech sales development"
    },
    "Government & Public Sector": {
      title: "Dwight - AI RFP Scout",
      url: "https://www.lyzr.ai/dwight-ai-rfp-scout/",
      description: "Public sector RFP automation"
    },
    "Energy & Utilities": {
      title: "Jeff - AI Support Agent",
      url: "https://www.lyzr.ai/jeff/",
      description: "Utility customer support automation"
    },
    "Telecommunications": {
      title: "Jeff - AI Support Agent",
      url: "https://www.lyzr.ai/jeff/",
      description: "Telecom support automation"
    }
  };

  if (!industry) return null;
  return agentMap[industry];
};

const ScoreSummary = ({ score, industry }: ScoreSummaryProps) => {
  const getSummary = () => {
    if (score >= 80) {
      return {
        assessment: "Your AI readiness score places you among the top leaders in your industry! To maximize your advantage, explore advanced AI architectures, research projects, and multi-agent AI models.",
        suggestion: "Let's explore how Lyzr can take your AI transformation further!",
        resources: [
          {
            title: "Advanced AI Architectures",
            url: "https://www.lyzr.ai/blog/lyzr-introduces-agentmesh-architecture/",
            description: "Explore AgentMesh for Multi-Agent Systems"
          },
          {
            title: "Domain-Specific AI Agents",
            url: "https://www.lyzr.ai/blog/mixture-of-expert-agents/",
            description: "Learn about Mixture of Expert Agents"
          },
          {
            title: "Enterprise AI Adoption",
            url: "https://www.lyzr.ai/enterprise/",
            description: "Organizational General Intelligence"
          },
          {
            title: "AI Risk & Security",
            url: "https://www.researchgate.net/publication/388554578_AgentDefender_by_Lyzr_A_Benchmark_Evaluation_and_Neural_Embedding_Approach_for_Agent_Prompt_Injection/",
            description: "Read AgentDefender Research"
          },
          {
            title: "Research Projects",
            url: "https://www.lyzr.ai/research-projects/",
            description: "Explore Lyzr Research Projects"
          }
        ]
      };
    } else if (score >= 50) {
      return {
        assessment: "You are aligned with AI adoption trends, but there is room to improve. Strengthening your AI governance, automation capabilities, and infrastructure will help accelerate transformation.",
        suggestion: "See how companies like yours are scaling AI adoption.",
        resources: [
          {
            title: "AI SaaS Adoption",
            url: "https://www.lyzr.ai/pricing/",
            description: "Explore Lyzr Pricing Options"
          },
          {
            title: "Enterprise AI Framework",
            url: "https://www.youtube.com/watch?v=SiRwqf6pPU0",
            description: "Learn about Enterprise-Grade GenAI Stack"
          },
          {
            title: "Pre-Built AI Solutions",
            url: "https://studio.lyzr.ai/app-store/",
            description: "Explore Lyzr App Store"
          },
          {
            title: "AI Security & Governance",
            url: "https://studio.lyzr.ai/responsible-ai/",
            description: "Explore Responsible AI Demos"
          },
          {
            title: "AWS Partnership",
            url: "https://www.lyzr.ai/partnership/aws/",
            description: "Learn about AWS Integration"
          }
        ]
      };
    } else {
      return {
        assessment: "Your AI readiness is below industry standards, but the good news is you can improve quickly! Most businesses start by addressing key AI barriers such as data management, governance, and understanding AI fundamentals.",
        suggestion: "Start with a free AI readiness consultation.",
        resources: [
          {
            title: "Understanding AI Fundamentals",
            url: "https://www.lyzr.ai/glossaries/",
            description: "Browse Lyzr Glossary"
          },
          {
            title: "AI Learning Webinars",
            url: "https://www.lyzr.ai/webinars/",
            description: "Watch AI Learning Webinars"
          },
          {
            title: "Intro to AI Agents",
            url: "https://www.youtube.com/watch?v=ImXlHRPWQcQ",
            description: "Learn about Lyzr Agent Framework"
          },
          {
            title: "Common AI Challenges",
            url: "https://www.lyzr.ai/blog/",
            description: "Explore Lyzr Blog"
          }
        ]
      };
    }
  };

  const summary = getSummary();
  const recommendedAgent = getAgentRecommendation(industry);

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
            onClick={() => window.open("https://studio.lyzr.ai/responsible-ai/", "_blank")}
          >
            Explore Responsible AI
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

      {recommendedAgent && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-4">Recommended AI Agent for Your Industry</h4>
          <div className="p-3 bg-white rounded border border-gray-100 hover:border-lyzr-purple transition-colors">
            <a 
              href={recommendedAgent.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <h5 className="text-sm font-medium text-gray-900 mb-1">{recommendedAgent.title}</h5>
              <p className="text-sm text-gray-600">{recommendedAgent.description}</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreSummary;
