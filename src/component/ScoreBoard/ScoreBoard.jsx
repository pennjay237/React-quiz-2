import React from "react";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ answers }) => {
  return (
    <ul className={styles.list}>
      {answers.map((ans, idx) => (
        <li key={idx} className={styles.item}>
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
