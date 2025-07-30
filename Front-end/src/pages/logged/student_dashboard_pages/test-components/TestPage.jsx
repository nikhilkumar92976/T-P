import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleQuestions = [
  {
    id: 1,
    question: `A train running at 60 km/h crosses a pole in 30 seconds.
What is the length of the train?
Use basic speed-distance-time formula.`,
    options: ["300 m", "500 m", "600 m", "1800 m"],
    correctAnswer: "500 m",
  },
  {
    id: 2,
    question: `The ratio of ages of A and B is 4:5.
After 8 years, the ratio becomes 5:6.
Find the present age of A.`,
    options: ["24", "32", "40", "36"],
    correctAnswer: "32",
  },
  {
    id: 3,
    question: `A man sells an article at 10% loss.
If he had sold it for ₹50 more, he would’ve gained 5%.
Find the cost price.`,
    options: ["₹500", "₹400", "₹450", "₹550"],
    correctAnswer: "₹500",
  },
  {
    id: 4,
    question: `If A completes a work in 12 days and B in 16 days,
How many days will they take together?
Assume they work simultaneously.`,
    options: ["7", "6.8", "6.85", "6.86"],
    correctAnswer: "6.86",
  },
  {
    id: 5,
    question: `The population of a town increases by 10% annually.
If the current population is 50,000,
What was the population 2 years ago?`,
    options: ["41,322", "42,000", "45,000", "44,500"],
    correctAnswer: "41,322",
  },
  {
    id: 6,
    question: `A boat takes 6 hours to go downstream and 8 hours upstream.
If the river speed is 2 km/h,
Find the speed of the boat in still water.`,
    options: ["8 km/h", "10 km/h", "12 km/h", "14 km/h"],
    correctAnswer: "10 km/h",
  },
  {
    id: 7,
    question: `Two pipes can fill a tank in 20 and 30 minutes.
They are opened together, but the second pipe is closed after 10 mins.
How much more time will the first pipe take?`,
    options: ["6 min", "10 min", "8 min", "12 min"],
    correctAnswer: "6 min",
  },
  {
    id: 8,
    question: `A man borrowed ₹12,000 at 10% p.a.
He repaid ₹6,000 after 1 year.
How much interest did he pay after 2 years?`,
    options: ["₹2400", "₹1800", "₹1500", "₹2100"],
    correctAnswer: "₹2100",
  },
  {
    id: 9,
    question: `The average of 5 numbers is 60.
If one number is excluded, the average becomes 65.
Find the excluded number.`,
    options: ["35", "45", "55", "40"],
    correctAnswer: "35",
  },
  {
    id: 10,
    question: `A sum becomes double in 5 years at simple interest.
In how many years will it become 5 times?
Assume same rate of interest.`,
    options: ["20", "25", "18", "16"],
    correctAnswer: "20",
  },
];

const TestPage = () => {
  const [timer, setTimer] = useState(30);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewMarked, setReviewMarked] = useState({});
  const intervalRef = useRef(null);
  const currentQuestion = sampleQuestions[currentIndex];
  const navigate = useNavigate();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  const handleOptionChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: e.target.value,
    });
  };

  const handleClear = () => {
    const newAnswers = { ...answers };
    delete newAnswers[currentQuestion.id];
    setAnswers(newAnswers);
  };

  const handleMarkForReview = () => {
    setReviewMarked({
      ...reviewMarked,
      [currentQuestion.id]: true,
    });
  };
  const handleSubmitTest = () => {
    const exitFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
    };
    exitFullscreen();
    navigate("/student_dashboard");
  };
  const handleNext = () => {
    if (currentIndex < sampleQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex w-full  h-screen">
      {/* Left panel */}
      <div className=" h-full flex-1 p-8 overflow-y-auto">
        <div>
          <div className="w-full flex justify-center items-center">
            <h2 className="text-xl font-bold text-sky-700 mb-4">
              Question {currentIndex + 1} of {sampleQuestions.length}
            </h2>
            <div></div>
          </div>

          <div className="space-y-2">
            <p className="text-lg mb-4 text-gray-800">
              {currentQuestion.question}
            </p>
            {currentQuestion.options.map((option, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${currentQuestion.id}`}
                  value={option}
                  checked={answers[currentQuestion.id] === option}
                  onChange={handleOptionChange}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className=" flex items-end justify-end enter mt-6 space-x-6">
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
          >
            Clear
          </button>
          <button
            onClick={handleMarkForReview}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200"
          >
            Mark for Review
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right panel - Question palette */}
      <div className="max-w-64 p-4  flex flex-col justify-center items-center space-y-4 border-l bg-gray-50">
        <div className="grid grid-cols-4 gap-2">
          {sampleQuestions.map((q, idx) => {
            const isAnswered = answers[q.id];
            const isMarked = reviewMarked[q.id];

            let bgColor = "bg-gray-500";
            if (isAnswered) bgColor = "bg-green-400";
            if (isMarked) bgColor = "bg-purple-400";

            return (
              <button
                key={q.id}
                className={`w-10 h-10 rounded-md text-white font-bold ${bgColor}`}
                onClick={() => setCurrentIndex(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleSubmitTest}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          end test
        </button>
      </div>
    </div>
  );
};

export default TestPage;
