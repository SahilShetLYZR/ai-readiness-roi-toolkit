import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "assessment" | "roi";
  onTabChange: (tab: "assessment" | "roi") => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex space-x-2 mb-8">
      <button
        onClick={() => onTabChange("assessment")}
        className={cn(
          "px-6 py-3 rounded-lg font-semibold transition-all",
          activeTab === "assessment"
            ? "bg-gradient-to-r from-violet-500 to-rose-500 text-white shadow-lg hover:opacity-90"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
      >
        Readiness Assessment
      </button>
      <button
        onClick={() => onTabChange("roi")}
        className={cn(
          "px-6 py-3 rounded-lg font-semibold transition-all",
          activeTab === "roi"
            ? "bg-gradient-to-r from-violet-500 to-rose-500 text-white shadow-lg hover:opacity-90"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
      >
        ROI Calculator
      </button>
    </div>
  );
};

export default TabNavigation;