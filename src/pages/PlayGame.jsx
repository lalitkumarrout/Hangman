import React, { useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/Hangman/HangMan";

const PlayGame = () => {
  // const[searchparams] =useSearchParams();
  // console.log(searchparams.get('text'));
  const { state } = useLocation();

  const [guesedLetters, setGuessedLetters] = useState([]);
  const [step, setstep] = useState(0);

  function handleLetterclick(letter) {
    if (state?.wordSelected?.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      console.log("Wrong");
      setstep(step + 1);
    }
    setGuessedLetters([...guesedLetters, letter]);
  }

  return (
    <>
      <h1>Play Game </h1>
      {state?.wordSelected && (
        <>
          <MaskedText
            text={state?.wordSelected}
            guessedLetters={guesedLetters}
          />
          <div>
            <LetterButtons
              text={state?.wordSelected}
              guessedletters={guesedLetters}
              onLetterClick={handleLetterclick}
            />
          </div>
          <div>
            <HangMan step={step} />
          </div>
        </>
      )}
      <Link to="/" className="text-blue-400"> Home</Link>
      {/* <Link to="/Start" className="text-blue-400">
        Start Game Link
      </Link> */}
    </>
  );
};

export default PlayGame;
