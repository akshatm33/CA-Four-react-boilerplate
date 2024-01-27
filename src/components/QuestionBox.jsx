// QuestionBox.js
import React, { useState } from 'react';
import '../App.css'; // Import your CSS file

const QuestionBox = ({ question, currentQuestion, totalQuestions, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    handleAnswer(optionId);
  };

  const handleHighlight = () => {
    setIsHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setIsHighlighted(false);
  };

  return (
    <div className={`question-box ${isHighlighted ? 'highlighted' : ''}`}>
      <p>Question: {currentQuestion} out of {totalQuestions}</p>
      <p className={`question-text ${isHighlighted ? 'highlighted-text' : ''}`}>{question.text}</p>
      <div className="options-container">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.text}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleHighlight}>Highlight</button>
        <button onClick={handleRemoveHighlight}>Remove Highlight</button>
      </div>
    </div>
  );
};

export default QuestionBox;