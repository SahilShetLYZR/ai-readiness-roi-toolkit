import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Currency } from "./CurrencySelector";
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface ROIResultsProps {
  chartData: Array<{
    name: string;
    savings: number;
  }>;
  selectedCurrency: Currency;
}

const ROIResults = ({ chartData, selectedCurrency }: ROIResultsProps) => {
  // Calculate AI operational costs based on estimated token usage and CPU costs
  const calculateAICosts = (baseAmount: number, year: number) => {
    const monthlyTokenCost = 0.002 * 1000000; // Estimated cost per million tokens
    const monthlyCPUCost = 50; // Estimated CPU costs
    const monthlyAICost = monthlyTokenCost + monthlyCPUCost;
    return monthlyAICost * 12 * year;
  };

  // Create table data with human costs and AI costs
  const tableData = [
    {
      category: "Human Labor & Time Cost",
      year1: chartData[0].savings * 0.9,
      year3: chartData[1].savings * 0.9,
      year5: chartData[2].savings * 0.9,
      year7: chartData[2].savings * 0.95,
    },
    {
      category: "AI Operational Costs*",
      year1: calculateAICosts(chartData[0].savings, 1),
      year3: calculateAICosts(chartData[1].savings, 3),
      year5: calculateAICosts(chartData[2].savings, 5),
      year7: calculateAICosts(chartData[2].savings, 7),
    },
    {
      category: "Your Net Savings",
      year1: chartData[0].savings,
      year3: chartData[1].savings,
      year5: chartData[2].savings,
      year7: chartData[2].savings * 1.3,
    },
  ];

  const formatCurrency = (value: number) => {
    return `${selectedCurrency.symbol}${Math.abs(value).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">Projected ROI</h3>
      
      <div className="space-y-8">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead>Year 1</TableHead>
                <TableHead>Year 3</TableHead>
                <TableHead>Year 5</TableHead>
                <TableHead>Year 7</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.category}>
                  <TableCell className="font-medium">{row.category}</TableCell>
                  <TableCell>{formatCurrency(row.year1)}</TableCell>
                  <TableCell>{formatCurrency(row.year3)}</TableCell>
                  <TableCell>{formatCurrency(row.year5)}</TableCell>
                  <TableCell>{formatCurrency(row.year7)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

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

        <div className="text-sm text-gray-500 mt-4">
          *AI Operational Costs include estimated token usage and CPU costs for automated processes.
        </div>

        <div className="flex justify-center mt-6">
          <Button
            onClick={() => window.open("https://www.lyzr.ai/book-demo/", "_blank")}
            className="bg-gradient-to-r from-violet-500 to-rose-500 hover:opacity-90 text-white"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Book a Demo
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ROIResults;