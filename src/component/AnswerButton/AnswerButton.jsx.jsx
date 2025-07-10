import React from "react";
import styles from "./AnswerButton.module.css";

const AnswerButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default AnswerButton;
