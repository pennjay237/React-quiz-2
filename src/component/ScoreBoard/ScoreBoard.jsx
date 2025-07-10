import React from "react";

const ScoreBoard = ({ answers }) => {
  return (
    <ul className="scoreboard">
      {answers.map((ans, idx) => (
        <li key={idx}>
          <div dangerouslySetInnerHTML={{ __html: ans.question }} />
          <p>
            Your Answer: {ans.userAnswer} | Correct Answer: {ans.correctAnswer}{" "}
            {ans.correct ? "✅" : "❌"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ScoreBoard;
