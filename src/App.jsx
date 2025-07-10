import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext.jsx";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import Quiz from "./pages/QuizPage/QuizPage.jsx";
import ResultPage from "./pages/ResultPage/ResultPage.jsx";

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
