import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext.jsx";
import ScoreBoard from "../../component/ScoreBoard/ScoreBoard.jsx";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
  const { answers, score, resetQuiz } = useQuiz();
  const navigate = useNavigate();

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>Quiz Completed!</h1>
      <h2>Your Score: {score} / 10</h2>
      <ScoreBoard answers={answers} />
      <button onClick={handleRestart} className={styles.button}>
        Play Again
      </button>
    </div>
  );
};

export default ResultPage;
