import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../Api/api.js";
import { useQuiz } from "../../context/QuizContext.jsx";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const { setQuestions, resetQuiz } = useQuiz();

  useEffect(() => {
    resetQuiz();
  }, []);

  const startQuiz = async () => {
    const questions = await fetchQuestions();
    setQuestions(questions);
    navigate("/quiz/0");
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the True/False Trivia Game 🎉</h1>
      <p>Answer all 10 questions correctly to win!</p>
      <button onClick={startQuiz} className={styles.button}>
        Start Quiz
      </button>
    </div>
  );
};

export default LandingPage;
