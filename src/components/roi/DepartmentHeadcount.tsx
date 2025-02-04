import React from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

interface DepartmentHeadcountProps {
  departments: string[];
  departmentCounts: { [key: string]: number };
  onCountChange: (dept: string, value: number) => void;
}

const DepartmentHeadcount = ({
  departments,
  departmentCounts,
  onCountChange,
}: DepartmentHeadcountProps) => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-lg font-semibold">Employee Headcount (FTEs)</h3>
      {departments.map((dept) => (
        <div key={dept} className="space-y-2">
          <Label>{dept}</Label>
          <div className="flex items-center gap-4">
            <Slider
              min={0}
              max={200}
              step={1}
              value={[departmentCounts[dept]]}
              onValueChange={(value) => onCountChange(dept, value[0])}
              className="flex-1"
            />
            <span className="w-20 text-right">{departmentCounts[dept]} FTEs</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentHeadcount;