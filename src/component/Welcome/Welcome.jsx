import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LandingPage = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9"); // Default: General Knowledge
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz?difficulty=${difficulty}&category=${category}`);
  };

  return (
    <WelcomCart navig={startQuiz} isLoading={true} />
  );
};

export default LandingPage;

// Separated Component
function WelcomCart({ navig, isLoading }) {
  return (
    <div className="box">
      <div className="card-box">
        <div className="landing-container">
          <h1>Quiz Game 🎯</h1>

          <div className="select-container">
            <h2>Select Difficulty</h2>
            <select onChange={(e) => {}}>
              <option value="easy">Easy 🟢</option>
              <option value="medium">Medium 🟡</option>
              <option value="hard">Hard 🔴</option>
            </select>
          </div>

          <div className="select-container">
            <h2>Select Category</h2>
            <select onChange={(e) => {}}>
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="27">Animals</option>
              <option value="31">Entertainment</option>
            </select>
          </div>

          <div className="row">
            <button
              onClick={() => navig()}
              className={`btn btn-outline-success bouton ${!isLoading && "disabled"}`}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

WelcomCart.propTypes = {
  navig: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
