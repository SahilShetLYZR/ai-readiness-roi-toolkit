import React, { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { usePDF } from "react-to-pdf";
import { useToast } from "./ui/use-toast";
import DepartmentHeadcount from "./roi/DepartmentHeadcount";
import CurrencySelector, { Currency } from "./roi/CurrencySelector";
import ROIResults from "./roi/ROIResults";

const currencies: Currency[] = [
  { code: "USD", symbol: "$", defaultSalary: 60000 },
  { code: "EUR", symbol: "€", defaultSalary: 55000 },
  { code: "INR", symbol: "₹", defaultSalary: 1000000 },
  { code: "CNY", symbol: "¥", defaultSalary: 400000 },
  { code: "JPY", symbol: "¥", defaultSalary: 5000000 },
  { code: "GBP", symbol: "£", defaultSalary: 45000 },
  { code: "SGD", symbol: "$", defaultSalary: 72000 },
  { code: "AUD", symbol: "$", defaultSalary: 75000 },
  { code: "CAD", symbol: "$", defaultSalary: 65000 },
];

const departments = [
  "Customer Support",
  "Sales Development",
  "Marketing & Advertising",
  "IT & Compliance",
  "HR & Employee Experience",
  "Operations & Back Office",
];

const ROICalculatorTab = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies[0]
  );
  const [departmentCounts, setDepartmentCounts] = useState<{
    [key: string]: number;
  }>(Object.fromEntries(departments.map((dept) => [dept, 5])));
  const [averageSalary, setAverageSalary] = useState<number>(
    selectedCurrency.defaultSalary
  );
  const [efficiencyGain, setEfficiencyGain] = useState<number>(30);
  const [currentCosts, setCurrentCosts] = useState<number>(50000);
  const [aiCost] = useState<number>(2100);

  const { toPDF } = usePDF();
  const { toast } = useToast();
  const resultRef = React.useRef<HTMLDivElement>(null);

  const calculateROI = () => {
    const totalEmployees = Object.values(departmentCounts).reduce(
      (sum, count) => sum + count,
      0
    );
    const annualSavingsPerEmployee = (averageSalary * efficiencyGain) / 100;
    const totalAnnualSavings =
      annualSavingsPerEmployee * totalEmployees - aiCost * 12;
    const netSavings = totalAnnualSavings - currentCosts;

    return {
      oneYear: netSavings,
      threeYears: netSavings * 3 * 1.1,
      fiveYears: netSavings * 5 * 1.2,
    };
  };

  const roi = calculateROI();
  const chartData = [
    { name: "1 Year", savings: roi.oneYear },
    { name: "3 Years", savings: roi.threeYears },
    { name: "5 Years", savings: roi.fiveYears },
  ];

  const handleDownload = async () => {
    try {
      if (resultRef.current) {
        await toPDF({ targetRef: resultRef });
        toast({
          title: "Success",
          description: "ROI report downloaded successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download ROI report",
        variant: "destructive",
      });
    }
  };

  const handleCurrencyChange = (value: string) => {
    const currency = currencies.find((c) => c.code === value)!;
    setSelectedCurrency(currency);
    setAverageSalary(currency.defaultSalary);
  };

  const handleDepartmentCountChange = (dept: string, value: number) => {
    setDepartmentCounts((prev) => ({
      ...prev,
      [dept]: value,
    }));
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">AI ROI Calculator</h2>

        <CurrencySelector
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={handleCurrencyChange}
        />

        <DepartmentHeadcount
          departments={departments}
          departmentCounts={departmentCounts}
          onCountChange={handleDepartmentCountChange}
        />

        <div className="mb-6">
          <Label>Average Annual Salary Per Employee</Label>
          <div className="relative mt-2">
            <span className="absolute left-3 top-2.5 text-gray-500">
              {selectedCurrency.symbol}
            </span>
            <Input
              type="number"
              value={averageSalary}
              onChange={(e) => setAverageSalary(Number(e.target.value))}
              className="pl-6"
            />
          </div>
        </div>

        <div className="mb-6">
          <Label>Estimated Efficiency Gain with AI (%)</Label>
          <div className="flex items-center gap-4">
            <Slider
              min={10}
              max={80}
              value={[efficiencyGain]}
              onValueChange={(value) => setEfficiencyGain(value[0])}
              className="flex-1"
            />
            <span className="w-20 text-right">{efficiencyGain}%</span>
          </div>
        </div>

        <div className="mb-6">
          <Label>Current Annual Software & Maintenance Costs</Label>
          <div className="relative mt-2">
            <span className="absolute left-3 top-2.5 text-gray-500">
              {selectedCurrency.symbol}
            </span>
            <Input
              type="number"
              value={currentCosts}
              onChange={(e) => setCurrentCosts(Number(e.target.value))}
              className="pl-6"
            />
          </div>
        </div>
      </Card>

      <div ref={resultRef}>
        <ROIResults
          chartData={chartData}
          selectedCurrency={selectedCurrency}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
};

export default ROICalculatorTab;