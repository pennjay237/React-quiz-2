import WelcomCart from "../../component/Welcome/Welcome";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { getQuestion } from "../../services/api";
import { DataContext } from "../../context/context";

export default function Home() {
  const navigate = useNavigate();
  const { setQuestions } = useContext(DataContext);

  const handleNavigate = async (category, difficulty) => {
    const data = await getQuestion(category, difficulty);
    if (data) {
      setQuestions(data);
      navigate("/Questionnaire/1");
    }
  };

  return <WelcomCart onStart={handleNavigate} />;
}
