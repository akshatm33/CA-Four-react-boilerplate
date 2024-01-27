// Result.js
import React from 'react';
import '../App.css'; // Import your CSS file

const Result = ({ score, totalQuestions, handleRestart }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result-container">
      <p>Your Score: {score} out of {totalQuestions}</p>
      <p>Percentage: {percentage}%</p>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
