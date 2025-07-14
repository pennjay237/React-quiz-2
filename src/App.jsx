
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import ScorePage from "./pages/ScorePage/ScorePage";
import { UseData } from "./context/context";
import CategorySelect from "./component/Category/Category";


function App() {
	


  return (
    <UseData>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Questionnaire/:number"
          element={<Questionnaire />}
        />
        <Route path="/" element={<CategorySelect />} />

        <Route path="/ScorePage" element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
    </UseData>
  );
}

export default App;