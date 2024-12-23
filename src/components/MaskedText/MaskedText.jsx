import React from "react";
import { getMaskedString } from "./MaskingUtility";

const MaskedText = ({ text, guessedLetters }) => {
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((Letters, index) => {
        return (
          <span key={index} className="mx-1">
            {Letters}
          </span>
        );
      })}
    </>
  );
};

export default MaskedText;
