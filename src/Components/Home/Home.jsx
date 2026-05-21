import React, { useState } from "react";

function Home() {
  const [counter, setCounter] = useState(0);
  const buttonClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <div>
      <h1>Home</h1>
      <p>{counter}</p>
      <button onClick={buttonClick}>Increment COUNTER</button>
    </div>
  );
}

export default Home;
