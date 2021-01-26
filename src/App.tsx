import React, { useState } from "react";
import "./App.css";

import Ingredient from "./Ingredient";

function App() {
  const [num, setNum] = useState(1);

  const incrNum = () => {
    setNum(num + 1);
  };

  return (
    <>
      {[...Array(num)].map((_, i) => (
        <Ingredient key={i}></Ingredient>
      ))}
      <button onClick={incrNum}>More</button>
    </>
  );
}

export default App;
