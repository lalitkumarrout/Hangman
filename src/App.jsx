import "./App.css";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { WordContext } from "./context/WordContext";
import { useState } from "react";

function App() {
  const [wordlist, setWordlist] = useState([]);
   const [word, setword] = useState("");
  return (
    <WordContext.Provider value={{ wordlist, setWordlist,word,setword }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </WordContext.Provider>
  );
}

export default App;
