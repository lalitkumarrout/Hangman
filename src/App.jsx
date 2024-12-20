import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import TextInputForm from "./components/TextInputForm/TextInputForm";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App() {
  return (
    <div>
      
      {/* <TextInput
        label={"Enter some text"}
        placeholder={"Enter some text here"}
        value={""}
        onChangeHandler={(e) => console.log(e.target.value)}
      /> */}
      <TextInputFormContainer/>
      
    </div>
  );
}

export default App;
