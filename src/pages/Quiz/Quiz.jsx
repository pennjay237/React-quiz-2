import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext.jsx";
import QuestionCard from "../../component/QuestionCard/QuestionCard.jsx";
import AnswerButton from "../../component/AnswerButton/AnswerButton.jsx.jsx";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions, answers, setAnswers, score, setScore } = useQuiz();
  const currentIndex = parseInt(id);
  const question = questions[currentIndex];

  if (!question) return <div className={styles.loading}>Loading...</div>;

  const handleAnswer = (userAnswer) => {
    const correct = userAnswer === (question.correct_answer === "True");
    if (correct) setScore(score + 1);

    const newAnswer = {
      question: question.question,
      userAnswer,
      correctAnswer: question.correct_answer,
      correct,
    };

    setAnswers([...answers, newAnswer]);

    if (currentIndex + 1 < questions.length) {
      navigate(`/quiz/${currentIndex + 1}`);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className={styles.container}>
      <QuestionCard
        question={question.question}
        questionNumber={currentIndex + 1}
        total={questions.length}
      />
      <div className={styles.buttonGroup}>
        <AnswerButton label="True" onClick={() => handleAnswer("True")} />
        <AnswerButton label="False" onClick={() => handleAnswer("False")} />
      </div>
    </div>
  );
};

export default Quiz;
