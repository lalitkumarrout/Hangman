import "./App.css";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
    </Routes>
  );
}

export default App;
