import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Result from "./pages/Result";
import Recommendations from "./pages/Recommendations";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/result" element={<Result />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;