import React, { useEffect, useState } from "react";
import "./App.css";
import questions from './questions';
import Result from "./components/Result.jsx";
import QuestionBox from "./components/QuestionBox";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  const handleAnswer = (selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion - 1] = selectedOption;
      return newAnswers;
    });

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(questions.length + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(1);
    setUserAnswers(Array(questions.length).fill(null));
  };

  const calculateScore = () => {
    return userAnswers.filter((answer, index) => answer === questions[index].options.findIndex((opt) => opt.isCorrect)).length;
  };

  const showResultScreen = currentQuestion > questions.length;

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</button>
      {showResultScreen ? (
        <Result score={calculateScore()} totalQuestions={questions.length} handleRestart={handleRestart} />
      ) : (
        <QuestionBox
          question={questions[currentQuestion - 1]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;