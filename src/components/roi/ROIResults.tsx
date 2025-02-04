import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Currency } from "./CurrencySelector";
import { ExternalLink } from "lucide-react";

interface ROIResultsProps {
  chartData: Array<{
    name: string;
    savings: number;
  }>;
  selectedCurrency: Currency;
}

const ROIResults = ({ chartData, selectedCurrency }: ROIResultsProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">Projected ROI</h3>
      <div className="w-full overflow-x-auto">
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) =>
              `${selectedCurrency.symbol}${(value / 1000).toFixed(0)}k`
            }
          />
          <Tooltip
            formatter={(value: number) =>
              `${selectedCurrency.symbol}${value.toLocaleString()}`
            }
          />
          <Bar dataKey="savings" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="flex justify-center mt-6">
        <Button
          onClick={() => window.open("https://www.lyzr.ai/book-demo/", "_blank")}
          className="bg-lyzr-purple hover:bg-lyzr-purple/90 text-white"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Book a Demo
        </Button>
      </div>
    </Card>
  );
};

export default ROIResults;