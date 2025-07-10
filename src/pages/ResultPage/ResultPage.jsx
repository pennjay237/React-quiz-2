import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

const ResultPage = () => {
  const { answers, score, resetQuiz } = useQuiz();
  const navigate = useNavigate();

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className="result-page">
      <h1>Quiz Completed!</h1>
      <h2>Your Score: {score} / 10</h2>
      <ScoreBoard answers={answers} />
      <button onClick={handleRestart}>Play Again</button>
    </div>
  );
};

export default ResultPage;
