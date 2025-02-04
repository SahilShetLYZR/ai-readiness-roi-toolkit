export const calculateScore = (answers: Record<number, string[]>) => {
  const totalQuestions = 10;
  const answeredQuestions = Object.keys(answers).length;
  const baseScore = (answeredQuestions / totalQuestions) * 100;

  const multiSelectBonus = Object.entries(answers).reduce((acc, [_, selected]) => {
    if (selected.length > 1) {
      return acc + 5;
    }
    return acc;
  }, 0);

  return Math.min(Math.round(baseScore + multiSelectBonus), 100);
};