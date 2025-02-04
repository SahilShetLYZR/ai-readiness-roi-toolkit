import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type Currency = {
  code: string;
  symbol: string;
  defaultSalary: number;
};

interface CurrencySelectorProps {
  currencies: Currency[];
  selectedCurrency: Currency;
  onCurrencyChange: (value: string) => void;
}

const CurrencySelector = ({
  currencies,
  selectedCurrency,
  onCurrencyChange,
}: CurrencySelectorProps) => {
  return (
    <div className="mb-6">
      <Label>Select Currency</Label>
      <Select value={selectedCurrency.code} onValueChange={onCurrencyChange}>
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
  );
};

export default CurrencySelector;