'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, ArrowLeft } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "Gender",
    type: "select",
    options: [
      { value: "male", text: "Male" },
      { value: "female", text: "Female" },
      { value: "non-binary", text: "Non-binary" },
      { value: "prefer-not-to-say", text: "Prefer not to say" }
    ]
  },
  {
    id: 2,
    text: "Age",
    type: "number",
    placeholder: "Enter your age",
    min: 18,
    max: 100
  },
  {
    id: 3,
    text: "City",
    type: "text",
    placeholder: "Enter your city"
  },
  {
    id: 4,
    text: "Work Hours",
    type: "number",
    placeholder: "Enter your working hours per week"
  },
  {
    id: 5,
    text: "Academic Pressure",
    type: "scale",
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Minimal" },
      { value: 2, text: "Moderate" },
      { value: 3, text: "Significant" },
      { value: 4, text: "High" },
      { value: 5, text: "Extreme" }
    ]
  },
  {
    id: 6,
    text: "Work Pressure",
    type: "scale",
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Minimal" },
      { value: 2, text: "Moderate" },
      { value: 3, text: "Significant" },
      { value: 4, text: "High" },
      { value: 5, text: "Extreme" }
    ]
  },
  {
    id: 7,
    text: "Financial Pressure",
    type: "scale",
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Minimal" },
      { value: 2, text: "Moderate" },
      { value: 3, text: "Significant" },
      { value: 4, text: "High" },
      { value: 5, text: "Extreme" }
    ]
  },
  {
    id: 8,
    text: "CGPA",
    type: "number",
    placeholder: "Enter your CGPA (e.g., 3.5)",
    min: 0,
    max: 10,
    step: 0.01
  },
  {
    id: 9,
    text: "Study Satisfaction",
    type: "scale",
    options: [
      { value: 0, text: "None" },
      { value: 1, text: "Very Low" },
      { value: 2, text: "Low" },
      { value: 3, text: "Moderate" },
      { value: 4, text: "High" },
      { value: 5, text: "Very High" }
    ]
  },
  {
    id: 10,
    text: "Sleep Duration (Hours)",
    type: "number",
    placeholder: "Average hours of sleep per night",
    min: 0,
    max: 24,
    step: 0.5
  },
  {
    id: 11,
    text: "Have you ever had suicidal thoughts?",
    type: "radio",
    options: [
      { value: "yes", text: "Yes" },
      { value: "no", text: "No" },
      { value: "prefer-not-to-say", text: "Prefer not to say" }
    ]
  },
  {
    id: 12,
    text: "Family history of mental illness",
    type: "radio",
    options: [
      { value: "yes", text: "Yes" },
      { value: "no", text: "No" },
      { value: "unknown", text: "Unknown" }
    ]
  }
];

type Question = {
  id: number;
  text: string;
  type: "select" | "number" | "text" | "scale" | "radio";
  options?: Array<{ value: string | number; text: string }>;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
};

export default function Assessment() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateRisk = () => {
    // This is a simplified risk calculation
    const pressureScores = [
      answers[4] || 0, // Academic Pressure
      answers[5] || 0, // Work Pressure
      answers[6] || 0  // Financial Pressure
    ];
    
    const averagePressure = pressureScores.reduce((a, b) => a + b, 0) / 3;
    const sleepScore = answers[9] < 6 || answers[9] > 9 ? 1 : 0;
    const suicidalThoughts = answers[10] === 'yes' ? 2 : 0;
    const familyHistory = answers[11] === 'yes' ? 1 : 0;
    
    const totalScore = averagePressure + sleepScore + suicidalThoughts + familyHistory;
    
    if (totalScore <= 2) return "Low risk";
    if (totalScore <= 4) return "Moderate risk";
    if (totalScore <= 6) return "High risk";
    return "Severe risk";
  };

  const getRecommendation = () => {
    const risk = calculateRisk();
    switch (risk) {
      case "Low risk":
        return "Your responses suggest a low risk for depression. Continue maintaining healthy lifestyle habits and monitoring your mental well-being.";
      case "Moderate risk":
        return "Your responses indicate moderate risk factors for depression. Consider talking to a mental health professional and implementing stress management strategies.";
      case "High risk":
        return "Your responses suggest significant risk factors for depression. We strongly recommend consulting with a mental health professional for proper evaluation and support.";
      case "Severe risk":
        return "Your responses indicate severe risk factors. Please seek immediate professional help. You can contact the National Crisis Hotline at 988 for 24/7 support.";
      default:
        return "Please consult with a mental health professional for a proper evaluation.";
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion] as Question;
    
    switch (question.type) {
      case "select":
        return question.options ? (
          <select
            className="w-full p-4 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        ) : null;
      
      case "number":
        return (
          <input
            type="number"
            className="w-full p-4 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder={question.placeholder}
            min={question.min}
            max={question.max}
            step={question.step}
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(Number(e.target.value))}
          />
        );
      
      case "text":
        return (
          <input
            type="text"
            className="w-full p-4 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder={question.placeholder}
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
          />
        );
      
      case "scale":
      case "radio":
        return question.options ? (
          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-4 rounded-lg border ${
                  answers[currentQuestion] === option.value
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-500 hover:bg-indigo-50"
                } transition-colors`}
              >
                {option.text}
              </button>
            ))}
          </div>
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <Brain className="text-indigo-600" size={24} />
            <span className="font-bold text-xl">MindWell</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {!showResults ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Depression Risk Assessment</h2>
                <span className="text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-6">{questions[currentQuestion].text}</h3>
              {renderQuestion()}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                className={`px-6 py-2 rounded-md ${
                  currentQuestion === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                disabled={answers[currentQuestion] === undefined}
              >
                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Your Assessment Results</h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Risk Level: {calculateRisk()}</h3>
              <p className="text-gray-600">{getRecommendation()}</p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => router.push('/')}
                className="w-full py-3 px-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Return to Home
              </button>
              <p className="text-sm text-gray-500 text-center">
                Remember: This assessment is not a diagnosis. Always consult with a qualified healthcare provider about your mental health concerns.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}