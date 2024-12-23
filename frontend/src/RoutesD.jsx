import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import LandPage from "./pages/LandPage";
import { usePlayerContext } from "./context/PlayerContext.js";
import GamePage from "./pages/GamePage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import GameFull from "./pages/GameFull.jsx";

function RoutesD() {
  const { playerName } = usePlayerContext();
  return (
    <Router>
      <Routes>
        <Route element={<LandPage />} exact path="/"></Route>
        <Route element={playerName!=='' ? <GamePage />:<LandPage/>} exact path="/game"></Route>
        <Route element={playerName!=='' ? <ResultPage />:<LandPage/>} exact path="/result"></Route>
        <Route element={<GameFull />} exact path="/game_full"></Route>
      </Routes>
    </Router>
  );
}

export default RoutesD;