interface TestResultProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  answers: { [key: string]: string };
  questions: Array<{
    _id: string;
    questionText: string;
    options: string[];
    correctAnswer: string;
  }>;
}

function TestResult({
  score,
  totalQuestions,
  correctAnswers,
  answers,
  questions,
}: TestResultProps) {
  const getGradeLabel = (score: number) => {
    if (score >= 90) return { label: "Excellent", color: "text-green-600" };
    if (score >= 80) return { label: "Very Good", color: "text-blue-600" };
    if (score >= 70) return { label: "Good", color: "text-blue-500" };
    if (score >= 60) return { label: "Fair", color: "text-yellow-600" };
    return { label: "Need Improvement", color: "text-red-600" };
  };

  const grade = getGradeLabel(score);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Examination Results</h2>

      <div className="mb-6 text-center">
        <p className="text-4xl font-bold mb-2">{score}%</p>
        <p className={`text-xl font-semibold ${grade.color}`}>{grade.label}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-600">Total Questions</p>
          <p className="text-xl font-bold">{totalQuestions}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-600">Correct Answers</p>
          <p className="text-xl font-bold">{correctAnswers}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Detailed Review</h3>
        {questions.map((question, index) => (
          <div key={question._id} className="mb-6 p-4 border rounded">
            <p className="font-medium mb-2">
              {index + 1}. {question.questionText}
            </p>
            <div className="ml-4">
              <p className="text-sm">
                Your Answer:
                <span
                  className={
                    answers[question._id] === question.correctAnswer
                      ? "text-green-600 font-medium ml-2"
                      : "text-red-600 font-medium ml-2"
                  }
                >
                  {answers[question._id]}
                </span>
              </p>
              {answers[question._id] !== question.correctAnswer && (
                <p className="text-sm">
                  Correct Answer:
                  <span className="text-green-600 font-medium ml-2">
                    {question.correctAnswer}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestResult;
