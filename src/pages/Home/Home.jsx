
import WelcomCart from "../../component/Welcome/WelcomCart";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { getQuestion } from "../../services/api";
import { DataContext } from "../../context/context";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const { setQuestions } = useContext(DataContext);

  const handleNavigate = async (category, difficulty) => {
    const data = await getQuestion(category, difficulty);
    if (data && data.length > 0) {
      setQuestions(data);
      navigate("/Questionnaire/1");
    } else {
      alert("No questions found for this category and difficulty. Try a different one.");
    }
  };

  return (
    <div className={styles.homeContainer}>
      <WelcomCart onStart={handleNavigate} />
    </div>
  );
}
