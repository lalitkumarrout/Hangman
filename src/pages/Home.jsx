import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Home = () => {
  const [word, setword] = useState("");

  async function fetchwords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();
    console.log(data);
    const randomIndex=Math.floor(Math.random()*data.length);
    console.log(data[randomIndex]);
    setword(data[randomIndex].wordvalue);
  }

  useEffect(() => {
    fetchwords();
  }, []);
  return (
    <>
      <Link to="/play" state={{ wordSelected: word }}>
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
