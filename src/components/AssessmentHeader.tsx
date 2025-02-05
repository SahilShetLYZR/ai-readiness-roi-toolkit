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
      <IndustrySelector
        selectedIndustry={selectedIndustry}
        onIndustryChange={onIndustryChange}
        industries={industries}
      />
    </div>
  );
};

export default AssessmentHeader;