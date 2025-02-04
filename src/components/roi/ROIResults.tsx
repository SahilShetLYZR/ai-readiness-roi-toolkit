import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Download, LineChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Currency } from "./CurrencySelector";

interface ROIResultsProps {
  chartData: Array<{ name: string; savings: number }>;
  selectedCurrency: Currency;
  onDownload: () => void;
}

const ROIResults = ({
  chartData,
  selectedCurrency,
  onDownload,
}: ROIResultsProps) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">ROI Analysis</h3>
        <Button onClick={onDownload} variant="outline">
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
            <Bar dataKey="savings" fill="#8B5CF6" name="Projected Savings" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {chartData.map((data) => (
          <Card key={data.name} className="p-4">
            <h4 className="font-semibold mb-2">{data.name}</h4>
            <p className="text-2xl font-bold text-lyzr-purple">
              {selectedCurrency.symbol}
              {Math.round(data.savings).toLocaleString()}
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
  );
};

export default ROIResults;