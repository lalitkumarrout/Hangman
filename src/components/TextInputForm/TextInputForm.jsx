import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const TextInputForm = ({
  inputType,
  handleFormSubmit,
  handleTextInputchange,
  handleShowHideClick,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label="Enter a word or a pharse"
          placeholder="Enter a word or pharse here ..."
          onChangeHandler={handleTextInputchange}
        />
      </div>
      <div>
        <Button
          styleType="warning"
          text={inputType === "password" ? "Show" : "Hide"}
          onClickHandler={handleShowHideClick}
        />
      </div>
      <div>
        <Button type="submit" styleType="primary" text="Submit" />
      </div>
    </form>
  );
};

export default TextInputForm;
