import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TestResult from "../components/CompTestRes";

interface Question {
  _id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

function Examination() {
  const { courseId } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    // In a real application, fetch from your API
    // For demo purposes, using dummy data
    const dummyQuestions = [
      {
        _id: "1",
        questionText: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris",
      },
      {
        _id: "2",
        questionText: "Which programming language is React built with?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: "JavaScript",
      },
      {
        _id: "3",
        questionText: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
    ];
    setQuestions(dummyQuestions);
  }, [courseId]);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((question) => {
      if (answers[question._id] === question.correctAnswer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    setScore((correct / questions.length) * 100);
    setIsSubmitted(true);

    // In a real application, you would save the result to the database here
    saveTestResult({
      studentId: "current-student-id", // You would get this from auth context
      courseId,
      score: (correct / questions.length) * 100,
      answers,
      completedAt: new Date(),
    });
  };

  const saveTestResult = async (resultData: any) => {
    try {
      // In a real application, this would be an API call to your backend
      await axios.post("/api/test-results", resultData);
    } catch (error) {
      console.error("Error saving test result:", error);
    }
  };

  if (isSubmitted) {
    return (
      <TestResult
        score={score || 0}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        answers={answers}
        questions={questions}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Course Examination</h1>

        {questions.map((question, index) => (
          <div key={question._id} className="mb-8 p-4 border rounded-lg">
            <p className="font-semibold mb-4">
              {index + 1}. {question.questionText}
            </p>
            <div className="space-y-2">
              {question.options.map((option) => (
                <label key={option} className="block">
                  <input
                    type="radio"
                    name={question._id}
                    value={option}
                    onChange={(e) =>
                      handleAnswerChange(question._id, e.target.value)
                    }
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Examination
        </button>

        {score !== null && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-xl">Your Score: {score}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Examination;
