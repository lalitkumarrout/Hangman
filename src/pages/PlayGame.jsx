import React, { useContext, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/Hangman/HangMan";
import { WordContext } from "../context/WordContext";
import { list } from "postcss";
import wordStore from "../stores/WordStore";

const PlayGame = () => {
  // const[searchparams] =useSearchParams();
  // console.log(searchparams.get('text'));
  //const { state } = useLocation();
  //const {  word } = useContext(WordContext);
  const { wordList,word}=wordStore();


  const [guesedLetters, setGuessedLetters] = useState([]);
  const [step, setstep] = useState(0);

  function handleLetterclick(letter) {
    if (word?.toUpperCase().includes(letter)) {
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

      {wordList.map((word)=>{
        return <li key={word.id}>{word.wordvalue}</li>

      })}

      {word && (
        <>
          <MaskedText text={word} guessedLetters={guesedLetters} />
          <div>
            <LetterButtons
              text={word}
              guessedletters={guesedLetters}
              onLetterClick={handleLetterclick}
            />
          </div>
          <div>
            <HangMan step={step} />
          </div>
        </>
      )}
      <Link to="/" className="text-blue-400">
        {" "}
        Home
      </Link>
      {/* <Link to="/Start" className="text-blue-400">
        Start Game Link
      </Link> */}
    </>
  );
};

export default PlayGame;
