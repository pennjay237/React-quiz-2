import React from "react";

const AnswerButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="answer-button">
      {label}
    </button>
  );
};

export default AnswerButton;
