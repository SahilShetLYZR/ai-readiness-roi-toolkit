import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: string;
  options: string[];
  type: "single" | "multi";
  selected: string[];
  onSelect: (value: string[]) => void;
  questionNumber: number;
}

const QuestionCard = ({
  question,
  options,
  type,
  selected,
  onSelect,
  questionNumber,
}: QuestionCardProps) => {
  const handleSelect = (option: string) => {
    if (type === "single") {
      onSelect([option]);
    } else {
      const newSelected = selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option];
      onSelect(newSelected);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-lyzr-blue">
        <span className="inline-block w-8 h-8 text-center leading-8 bg-lyzr-purple bg-opacity-10 rounded-full mr-3">
          {questionNumber}
        </span>
        {question}
      </h3>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={cn(
              "w-full text-left p-4 rounded-lg border transition-all",
              selected.includes(option)
                ? "border-lyzr-purple bg-lyzr-purple bg-opacity-5"
                : "border-gray-200 hover:border-lyzr-purple hover:bg-gray-50"
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-5 h-5 rounded-md border flex items-center justify-center transition-all",
                  selected.includes(option)
                    ? "border-lyzr-purple bg-lyzr-purple text-white"
                    : "border-gray-300"
                )}
              >
                {selected.includes(option) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-gray-700">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;