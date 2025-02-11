
import { useState } from "react";
import AssessmentTab from "@/components/AssessmentTab";
import PillarSelection from "@/components/PillarSelection";
import PreparednessLevels from "@/components/PreparednessLevels";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [pillars, setPillars] = useState([
    { name: "Strategy", enabled: false },
    { name: "Infrastructure", enabled: false },
    { name: "Data", enabled: false },
    { name: "Governance", enabled: false },
    { name: "Talent", enabled: false },
    { name: "Culture", enabled: false },
  ]);
  
  const [showAssessment, setShowAssessment] = useState(false);

  const handleTogglePillar = (name: string) => {
    setPillars(prev => prev.map(p => 
      p.name === name ? { ...p, enabled: !p.enabled } : p
    ));
  };

  const handleToggleAll = (enabled: boolean) => {
    setPillars(prev => prev.map(p => ({ ...p, enabled })));
  };

  const handleStartAssessment = () => {
    if (pillars.some(p => p.enabled)) {
      setShowAssessment(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Lyzr Logo */}
        <div className="absolute top-0 right-0">
          <img 
            src="https://i0.wp.com/www.lyzr.ai/wp-content/uploads/2024/11/cropped_lyzr_logo_1.webp?fit=452%2C180&ssl=1" 
            alt="Lyzr Logo" 
            className="h-12 w-auto"
          />
        </div>

        <div className="mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Readiness Assessment
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Artificial intelligence has permeated across industries for years. And today, it is revolutionizing organizations and the anatomy of work. Nevertheless, it's important to recognize that not every company, despite their optimism, is fully equipped to adopt this technology. Being AI-ready requires combining six critical pillars – Strategy, Infrastructure, Data, Governance, Talent, and Culture. This assessment tool helps companies understand their level of readiness across each of these pillars.
            </p>
          </div>
        </div>

        {!showAssessment ? (
          <div className="grid md:grid-cols-2 gap-6">
            <PillarSelection 
              pillars={pillars}
              onTogglePillar={handleTogglePillar}
              onToggleAll={handleToggleAll}
            />
            <PreparednessLevels />
            <div className="md:col-span-2">
              <Button 
                onClick={handleStartAssessment}
                className="w-full py-6 text-lg"
                disabled={!pillars.some(p => p.enabled)}
              >
                Take assessment
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <AssessmentTab />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
