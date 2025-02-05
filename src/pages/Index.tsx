
import AssessmentTab from "@/components/AssessmentTab";

const Index = () => {
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
            <h1 className="text-4xl font-bold text-lyzr-blue">
              AI Readiness Assessment
            </h1>
            <div className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              <p className="mb-6 text-base leading-relaxed">
                The AI Readiness Assessment is designed to help businesses evaluate their current AI maturity, 
                data infrastructure, and ability to adopt AI-driven solutions.
              </p>
              <p className="text-sm italic">
                Please select your Industry from the drop-down below for benchmarking
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <AssessmentTab />
        </div>
      </div>
    </div>
  );
};

export default Index;
