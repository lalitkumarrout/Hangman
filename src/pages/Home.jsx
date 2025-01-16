import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
//import { WordContext } from "../context/WordContext";
import wordStore from "../stores/WordStore";

const Home = () => {
 
  //const{setword}=useContext(WordContext);

  const {setWordlist,setword}=wordStore();

  async function fetchwords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();
    console.log(data);
    setWordlist([...data]);
    const randomIndex=Math.floor(Math.random()*data.length);
    console.log(data[randomIndex]);
    setword(data[randomIndex].wordvalue);
  }

  useEffect(() => {
    fetchwords();
  }, []);
  return (
    <>
      <Link to="/play">
        <Button text="Single player Game" />
      </Link>
      <br />
      <Link to='/start'>
        <div className="mt-4 ">
          <Button text="Multi player Game" styleType="secondary" />
        </div>
      </Link>
    </>
  );
};

export default Home;
