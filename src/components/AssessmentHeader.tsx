import { Industry } from "@/utils/industryWeights";
import IndustrySelector from "./IndustrySelector";

interface AssessmentHeaderProps {
  selectedIndustry: Industry | "";
  onIndustryChange: (industry: Industry | "") => void;
  industries: readonly Industry[];
}

const AssessmentHeader = ({
  selectedIndustry,
  onIndustryChange,
  industries,
}: AssessmentHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-lyzr-blue mb-2">
        AI Readiness Assessment
      </h2>
      <p className="text-gray-600 mb-6">
        Answer these questions to evaluate your organization's AI readiness
      </p>
      
      <IndustrySelector
        selectedIndustry={selectedIndustry}
        onIndustryChange={onIndustryChange}
        industries={industries}
      />
    </div>
  );
};

export default AssessmentHeader;