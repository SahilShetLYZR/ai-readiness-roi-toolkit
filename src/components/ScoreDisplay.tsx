import CircularProgress from "./CircularProgress";

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Your Readiness Score</h3>
      <CircularProgress score={score} />
    </div>
  );
};

export default ScoreDisplay;