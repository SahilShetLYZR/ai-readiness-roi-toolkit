import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface IndustrySelectorProps {
  selectedIndustry: string;
  onIndustryChange: (value: string) => void;
  industries: string[];
}

const IndustrySelector = ({ selectedIndustry, onIndustryChange, industries }: IndustrySelectorProps) => {
  return (
    <div className="max-w-xs mx-auto">
      <Select value={selectedIndustry} onValueChange={onIndustryChange}>
        <SelectTrigger className="w-full">
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