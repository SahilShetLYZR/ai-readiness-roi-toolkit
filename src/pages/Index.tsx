
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
            <h1 className="text-4xl font-bold text-lyzr-blue mb-6">
              AI Readiness Assessment
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Unlock Your AI Readiness Score & Get Actionable Insights
            </h2>

            <div className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              <p className="mb-4">
                AI is transforming industries, but is your business truly ready to harness its full potential?
              </p>
              <p className="mb-6">
                This AI Readiness Assessment evaluates your organization's AI capabilities across key dimensions 
                and provides a personalized, prescriptive roadmap to accelerate AI adoption.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold mb-4">Why Take This Assessment?</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Benchmark Your AI Maturity</strong> – Understand where you stand compared to industry best practices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Get Tailored Recommendations</strong> – Receive a custom AI readiness score (0-99) with actionable steps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Identify Quick Wins & Gaps</strong> – Discover key areas that need attention for successful AI implementation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Explore a 3-Month AI Pilot</strong> – If eligible, you'll have the opportunity to discuss a limited 3-month AI pilot program with Lyzr
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium text-gray-800">
              👉 Take this short assessment (5 minutes) and get your AI readiness score instantly!
            </p>
            
            <p className="text-sm italic mt-4 text-gray-600">
              Please select your Industry from the drop-down below for benchmarking
            </p>
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
