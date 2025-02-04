import { Industry } from "@/utils/industryWeights";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IndustrySelectorProps {
  selectedIndustry: Industry | "";
  onIndustryChange: (industry: Industry | "") => void;
  industries: readonly Industry[];
}

const IndustrySelector = ({
  selectedIndustry,
  onIndustryChange,
  industries,
}: IndustrySelectorProps) => {
  return (
    <div className="w-full max-w-xs mx-auto mb-8">
      <Select
        value={selectedIndustry}
        onValueChange={(value) => onIndustryChange(value as Industry)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select your industry" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => (
            <SelectItem key={industry} value={industry}>
              {industry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default IndustrySelector;