import QuestionCard from "../../component/Question/Question";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../context/context";
import { useNavigate, useParams } from "react-router";
import styles from "./Questionnaire.module.css";

export default function Questionnaire() {
  const { number: num } = useParams();
  const number = parseInt(num, 10);
  const [time, setTime] = useState(10);
  const { tabQuestions, setTabReponse, tabReponse } = useContext(DataContext);
  const navigate = useNavigate();

  const handleNext = (question, response) => {
    setTime(10);
    const newQuestion = { ...question, yours: response };
    setTabReponse([...tabReponse, newQuestion]);

    if (number === 10) {
      return navigate("/ScorePage");
    }

    navigate(`/Questionnaire/${number + 1}`);
  };

  useEffect(() => {
    if (time > 0) {
      const t = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(t);
    } else if (time === 0) {
      handleNext(tabQuestions[number], "");
    }
  }, [time]);

 return (
  <div className={styles.questionnaireContainer}>
    <div className={styles.questionCard}>
      <button className={styles.backBtn} onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <QuestionCard
        next={handleNext}
        question={tabQuestions[number - 1]}
        totalQuestion={tabQuestions.length}
        number={number}
        time={time}
      />
    </div>
  </div>
);

}
