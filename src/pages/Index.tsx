import AssessmentTab from "@/components/AssessmentTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <img 
            src="https://i0.wp.com/www.lyzr.ai/wp-content/uploads/2024/11/cropped_lyzr_logo_1.webp?fit=452%2C180&ssl=1" 
            alt="Lyzr Logo" 
            className="h-16 w-auto"
          />
          <div className="text-center flex-grow">
            <h1 className="text-4xl font-bold text-lyzr-blue">
              Lyzr AI Readiness Assessment
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Evaluate your organization's AI readiness
            </p>
          </div>
          <div className="w-[100px]"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <AssessmentTab />
        </div>
      </div>
    </div>
  );
};

export default Index;