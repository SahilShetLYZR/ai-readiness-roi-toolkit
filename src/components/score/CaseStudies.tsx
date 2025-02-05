import { Industry } from "@/utils/industryWeights";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

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

interface CaseStudiesProps {
  industry: Industry;
}

const CaseStudies = ({ industry }: CaseStudiesProps) => {
  const relevantCaseStudies = caseStudies.filter(study => 
    study.relevantIndustries.includes(industry)
  );

  if (relevantCaseStudies.length === 0) return null;

  return (
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
  );
};

export default CaseStudies;