import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
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
