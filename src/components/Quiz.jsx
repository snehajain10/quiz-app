import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Program Unit", "Central Processing Unit", "Computer Personal Unit", "Central Performance Unit"],
    answer: "Central Processing Unit",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is 15 * 3?",
    options: ["30", "45", "35", "50"],
    answer: "45",
  },
  {
    question: "Which team won the ICC Men's T20 World Cup 2024?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "India",
  },
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) setScore(score + 1);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {finished ? (
        <>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </>
      ) : (
        <>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
          <p>
            Question {currentIndex + 1} of {questions.length}
          </p>
        </>
      )}
    </div>
  );
}
