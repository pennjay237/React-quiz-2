import React from "react";

const QuestionCard = ({ question, questionNumber, total }) => {
  return (
    <div className="question-card">
      <h2>
        Question {questionNumber} / {total}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default QuestionCard;
