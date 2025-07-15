import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import ScorePage from "./pages/ScorePage/ScorePage";
import { UseData } from "./context/context";

function App() {
  return (
    <UseData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Questionnaire/:number" element={<Questionnaire />} />
          <Route path="/ScorePage" element={<ScorePage />} />
        </Routes>
      </BrowserRouter>
    </UseData>
  );
}

export default App;
