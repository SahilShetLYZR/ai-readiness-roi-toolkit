
import { Switch } from "./ui/switch";

interface Pillar {
  name: string;
  enabled: boolean;
}

interface PillarSelectionProps {
  pillars: Pillar[];
  onTogglePillar: (name: string) => void;
  onToggleAll: (enabled: boolean) => void;
}

const PillarSelection = ({ pillars, onTogglePillar, onToggleAll }: PillarSelectionProps) => {
  const allEnabled = pillars.every(p => p.enabled);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Choose pillars for assessment</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between py-2 border-b">
          <span className="text-gray-700 font-medium">Select all</span>
          <Switch 
            checked={allEnabled}
            onCheckedChange={(checked) => onToggleAll(checked)}
          />
        </div>
        
        {pillars.map((pillar) => (
          <div 
            key={pillar.name} 
            className="flex items-center justify-between py-2 border-b last:border-0"
          >
            <span className="text-gray-700">{pillar.name}</span>
            <Switch 
              checked={pillar.enabled}
              onCheckedChange={() => onTogglePillar(pillar.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarSelection;
