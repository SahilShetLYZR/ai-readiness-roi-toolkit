
const preparednessLevels = [
  {
    title: "Fully Prepared – Pacesetters",
    description: "Companies that have a score higher than 86 (out of a maximum of 100)",
    color: "bg-green-500"
  },
  {
    title: "Moderately Prepared – Chasers",
    description: "Those with a score between 61 and 85",
    color: "bg-blue-500"
  },
  {
    title: "Limited Preparedness – Followers",
    description: "Those with a score between 31 and 60",
    color: "bg-yellow-500"
  },
  {
    title: "Unprepared – Laggards",
    description: "Those with a score between 0 and 30",
    color: "bg-red-500"
  }
];

const PreparednessLevels = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Level of Preparedness</h3>
      <div className="space-y-4">
        {preparednessLevels.map((level) => (
          <div key={level.title} className="flex items-start space-x-3">
            <div className={`w-3 h-3 rounded-full mt-1.5 ${level.color}`} />
            <div>
              <h4 className="font-medium text-gray-900">{level.title}</h4>
              <p className="text-sm text-gray-600">{level.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreparednessLevels;
