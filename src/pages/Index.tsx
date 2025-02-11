
import { useState } from "react";
import AssessmentTab from "@/components/AssessmentTab";
import PillarSelection from "@/components/PillarSelection";
import PreparednessLevels from "@/components/PreparednessLevels";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] via-white to-[#F1F1F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Header with Title and Logo */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-[#403E43] max-w-2xl leading-tight">
            Fast-Track Your AI Adoption with a Personalized Readiness Plan
          </h1>
          <img 
            src="https://i0.wp.com/www.lyzr.ai/wp-content/uploads/2024/11/cropped_lyzr_logo_1.webp?fit=452%2C180&ssl=1" 
            alt="Lyzr Logo" 
            className="h-8 w-auto ml-4"
          />
        </div>

        <div className="mb-16">
          <div>
            <div className="max-w-3xl space-y-8">
              <p className="text-lg text-[#8E9196]">
                Every business wants to accelerate <span className="font-semibold text-[#403E43]">Gen AI adoption</span>, but many struggle with <span className="font-semibold text-[#403E43]">where to start</span> and <span className="font-semibold text-[#403E43]">how to scale AI effectively</span>.
              </p>
              
              <p className="text-lg text-[#8E9196]">
                At Lyzr, we've worked with <span className="font-semibold text-[#403E43]">100+ companies</span> and spoken to <span className="font-semibold text-[#403E43]">1,000s of business leaders</span>—one key insight stood out: <span className="font-semibold text-[#403E43]">AI success depends on strategy, governance, culture, and execution.</span>
              </p>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100/50">
                <h2 className="text-2xl font-semibold mb-6 text-[#403E43]">What You Get from This 5-Minute Assessment:</h2>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Personalized AI Readiness Score",
                      description: "Benchmark your AI maturity against industry best practices."
                    },
                    {
                      title: "Customized Action Plan",
                      description: "Get prescriptive recommendations based on your strengths and gaps."
                    },
                    {
                      title: "Strategic Insights",
                      description: "Understand the key factors driving AI success in businesses like yours."
                    },
                    {
                      title: "Fast-Track AI Implementation",
                      description: "Eligible participants can explore a 3-month AI pilot to kickstart real-world AI applications."
                    }
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-lyzr-purple flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium text-[#403E43] text-lg">{benefit.title}</span>
                        <p className="text-[#8E9196] mt-1">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {!showAssessment ? (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              <PillarSelection 
                pillars={pillars}
                onTogglePillar={handleTogglePillar}
                onToggleAll={handleToggleAll}
              />
              <PreparednessLevels />
            </div>
            
            <div className="mt-12 space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#403E43]">What's Next?</h3>
                <p className="text-[#8E9196]">Take the 5-minute AI Readiness Assessment and unlock your AI roadmap.</p>
                <p className="text-[#8E9196]">If you qualify, discuss a <span className="font-semibold text-[#403E43]">3-month AI pilot</span> with our experts at Lyzr.</p>
              </div>
              
              <div>
                <Button 
                  onClick={handleStartAssessment}
                  className="w-full md:w-auto px-8 py-6 text-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 transition-all duration-200"
                  disabled={!pillars.some(p => p.enabled)}
                >
                  Start Assessment →
                </Button>
                
                <p className="text-sm text-[#8A898C] italic mt-3">Your AI transformation starts here!</p>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 p-8">
            <AssessmentTab />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
