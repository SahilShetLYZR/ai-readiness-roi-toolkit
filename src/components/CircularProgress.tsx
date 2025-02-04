interface CircularProgressProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress = ({
  score,
  size = 200,
  strokeWidth = 15,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 80) return "#22C55E"; // Green
    if (score >= 50) return "#EAB308"; // Yellow
    return "#EF4444"; // Red
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
        style={{ color: getColor(score) }}
      >
        {score}
      </div>
    </div>
  );
};

export default CircularProgress;