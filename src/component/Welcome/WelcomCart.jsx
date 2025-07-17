
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./WelcomCart.module.css";

const WelcomCart = ({ onStart }) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9");

  return (
    <div className={styles.box}>
      <div className={styles.cardBox}>
        <div className={styles.landingContainer}>
          <h1>Quiz Game 🎯</h1>

          <div className={styles.selectContainer}>
            <h2>Select Difficulty</h2>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy 🟢</option>
              <option value="medium">Medium 🟡</option>
            </select>
          </div>

          <div className={styles.selectContainer}>
            <h2>Select Category</h2>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="27">Animals</option>
              <option value="31">Entertainment</option>
            </select>
          </div>

          <div className={styles.row}>
            <button
              onClick={() => onStart(category, difficulty)}
              className={styles.button}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

WelcomCart.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default WelcomCart;
