import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx";
import QuestionCard from "../components/QuestionCard.jsx";
import AnswerButton from "../components/AnswerButton.jsx";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions, answers, setAnswers, score, setScore } = useQuiz();
  const currentIndex = parseInt(id);
  const question = questions[currentIndex];

  if (!question) return <div>Loading...</div>;

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
    <div className="quiz-page">
      <QuestionCard
        question={question.question}
        questionNumber={currentIndex + 1}
        total={questions.length}
      />
      <AnswerButton label="True" onClick={() => handleAnswer("True")} />
      <AnswerButton label="False" onClick={() => handleAnswer("False")} />
    </div>
  );
};

export default Quiz;
