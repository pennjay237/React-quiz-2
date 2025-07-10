import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]); // {question, userAnswer, correct}
  const [score, setScore] = useState(0);

  const resetQuiz = () => {
    setQuestions([]);
    setAnswers([]);
    setScore(0);
  };

  const value = {
    questions,
    setQuestions,
    answers,
    setAnswers,
    score,
    setScore,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
