import React from "react";
import styles from "./QuestionCard.module.css";

const QuestionCard = ({ question, questionNumber, total }) => {
  return (
    <div className={styles.card}>
      <h2>
        Question {questionNumber} / {total}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default QuestionCard;
