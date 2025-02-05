import { Industry } from "@/utils/industryWeights";
import { questions } from "@/data/assessmentQuestions";
import { getSectionScore } from "@/utils/scoringUtils";
import ScoreSummary from "./score/ScoreSummary";
import SectionScore from "./score/SectionScore";
import CaseStudies from "./score/CaseStudies";
import ImprovementAreas from "./score/ImprovementAreas";

interface ScoreBreakdownProps {
  answers: Record<number, string[]>;
  score: number;
  industry: Industry;
}

const ScoreBreakdown = ({ answers, score, industry }: ScoreBreakdownProps) => {
  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-lg font-semibold">Score Breakdown</h3>
      
      <ScoreSummary score={score} />

      <div className="space-y-6">
        <SectionScore
          title="AI Strategy & Adoption (Questions 1-3)"
          questionIds={[1, 2, 3]}
          questions={questions}
          answers={answers}
          sectionScore={getSectionScore(1, 3, questions, answers)}
        />

        <SectionScore
          title="AI Readiness & Data Maturity (Questions 4-5)"
          questionIds={[4, 5]}
          questions={questions}
          answers={answers}
          sectionScore={getSectionScore(4, 5, questions, answers)}
        />

        <SectionScore
          title="AI Governance & Risk Readiness (Questions 6-7)"
          questionIds={[6, 7]}
          questions={questions}
          answers={answers}
          sectionScore={getSectionScore(6, 7, questions, answers)}
        />

        <SectionScore
          title="AI Adoption Barriers (Question 8)"
          questionIds={[8]}
          questions={questions}
          answers={answers}
          sectionScore={getSectionScore(8, 8, questions, answers)}
        />
      </div>

      <ImprovementAreas answers={answers} questions={questions} />
      
      <CaseStudies industry={industry} />
    </div>
  );
};

export default ScoreBreakdown;