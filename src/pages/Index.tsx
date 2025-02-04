import { useState } from "react";
import TabNavigation from "@/components/TabNavigation";
import AssessmentTab from "@/components/AssessmentTab";
import ROICalculatorTab from "@/components/ROICalculatorTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"assessment" | "roi">("assessment");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-lyzr-blue mb-4">
            AI Readiness & ROI Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Evaluate your organization's AI readiness and calculate potential ROI
          </p>
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {activeTab === "assessment" ? <AssessmentTab /> : <ROICalculatorTab />}
        </div>
      </div>
    </div>
  );
};

export default Index;