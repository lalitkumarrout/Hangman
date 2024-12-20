import React, { useState } from "react";
import TextInputForm from "./TextInputForm";

const TextInputFormContainer = () => {

  const[inputtype,setinputtype]=useState('password')
  //let inputtype='password';
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  function handleTextInputchange(event) {
    console.log("Text input change");
    console.log(event.target.value);
  }
  function handleShowHideClick() {
    console.log("Show/hide button clicked");
    if(inputtype==='password'){
      setinputtype('text');
    }
    else{
      setinputtype('password');
    }
    console.log(inputtype);
  }
  return (
    <TextInputForm
      inputType={inputtype}
      handleFormSubmit={handleFormSubmit}
      handleTextInputchange={handleTextInputchange}
      handleShowHideClick={handleShowHideClick}
    />
  );
};

export default TextInputFormContainer;
