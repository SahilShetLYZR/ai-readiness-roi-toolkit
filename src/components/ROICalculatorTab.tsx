import React, { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Download, LineChart } from "lucide-react";
import { usePDF } from "react-to-pdf";
import { useToast } from "./ui/use-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Currency = {
  code: string;
  symbol: string;
  defaultSalary: number;
};

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
      threeYears: netSavings * 3 * 1.1, // 10% compound efficiency gain
      fiveYears: netSavings * 5 * 1.2, // 20% compound efficiency gain
    };
  };

  const roi = calculateROI();
  const chartData = [
    {
      name: "1 Year",
      savings: roi.oneYear,
    },
    {
      name: "3 Years",
      savings: roi.threeYears,
    },
    {
      name: "5 Years",
      savings: roi.fiveYears,
    },
  ];

  const handleDownload = async () => {
    try {
      if (resultRef.current) {
        await toPDF({ element: resultRef.current });
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

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">AI ROI Calculator</h2>

        {/* Currency Selection */}
        <div className="mb-6">
          <Label>Select Currency</Label>
          <Select
            value={selectedCurrency.code}
            onValueChange={(value) => {
              const currency = currencies.find((c) => c.code === value)!;
              setSelectedCurrency(currency);
              setAverageSalary(currency.defaultSalary);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.symbol} {currency.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Department Headcounts */}
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
                  onValueChange={(value) =>
                    setDepartmentCounts((prev) => ({
                      ...prev,
                      [dept]: value[0],
                    }))
                  }
                  className="flex-1"
                />
                <span className="w-20 text-right">{departmentCounts[dept]} FTEs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Average Salary */}
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

        {/* Efficiency Gain */}
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

        {/* Current Costs */}
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

      {/* Results Display */}
      <Card className="p-6" ref={resultRef}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">ROI Analysis</h3>
          <Button onClick={handleDownload} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>

        <div className="h-[300px] mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value) =>
                  `${selectedCurrency.symbol}${Number(value).toLocaleString()}`
                }
              />
              <Bar
                dataKey="savings"
                fill="#8B5CF6"
                name="Projected Savings"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(roi).map(([period, value]) => (
            <Card key={period} className="p-4">
              <h4 className="font-semibold mb-2">
                {period.replace(/([A-Z])/g, " $1").trim()}
              </h4>
              <p className="text-2xl font-bold text-lyzr-purple">
                {selectedCurrency.symbol}
                {Math.round(value).toLocaleString()}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            className="bg-lyzr-purple hover:bg-lyzr-purple/90"
            onClick={() => window.open("https://www.lyzr.ai", "_blank")}
          >
            <LineChart className="mr-2 h-4 w-4" />
            Book a Consultation
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ROICalculatorTab;