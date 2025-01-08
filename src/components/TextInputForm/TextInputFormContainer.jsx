import React, { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

const TextInputFormContainer = () => {

  const[inputtype,setinputtype]=useState('password')
  const[value,setValue]=useState("");
  const navigate=useNavigate();
  //let inputtype='password';
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    if(value){
      //if we have something valid in value then we want  to go to the play page
    
        navigate('/play',{ state: { wordSelected:value }})
      
  
    }
  }

  function handleTextInputchange(event) {
    console.log("Text input change");
    console.log(event.target.value);
    setValue(event.target.value);
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
  useEffect(()=>{
    console.log('component did mount');

  },[]);
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
