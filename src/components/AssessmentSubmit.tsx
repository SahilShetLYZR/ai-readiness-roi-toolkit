import { Button } from "./ui/button";

interface AssessmentSubmitProps {
  onSubmit: () => void;
  isSubmitted: boolean;
}

const AssessmentSubmit = ({ onSubmit, isSubmitted }: AssessmentSubmitProps) => {
  if (isSubmitted) return null;

  return (
    <div className="mt-8 flex justify-center">
      <Button 
        onClick={onSubmit}
        className="bg-lyzr-purple hover:bg-lyzr-purple/90 text-white px-8 py-2"
      >
        Submit Assessment
      </Button>
    </div>
  );
};

export default AssessmentSubmit;