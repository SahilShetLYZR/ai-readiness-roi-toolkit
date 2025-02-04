export interface Question {
  id: number;
  question: string;
  type: "single" | "multi";
  options: string[];
}