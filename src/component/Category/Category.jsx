import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySelect = () => {
  const [category, setCategory] = useState("9"); // Default: General Knowledge
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz?category=${category}`);
  };

  return (
    <div className="category-container">
      <h2>Select Quiz Category</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="9">General Knowledge</option>
        <option value="21">Sports</option>
        <option value="23">History</option>
        <option value="27">Animals</option>
        <option value="31">Entertainment</option>
      </select>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default CategorySelect;