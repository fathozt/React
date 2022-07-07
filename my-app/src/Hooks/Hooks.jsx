import React from "react";
import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(10);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0)
  };

  return (
    <div className="container text-center mt-4">
      <h2>*******************************************************</h2>

      <h1>USESTATE</h1>
      <h2>COUNT: {count}</h2>
      <button className="btn btn-primary" onClick={increase}>
        INCREASE
      </button>
      <button className="btn btn-danger" onClick={decrease}>
        DECREASE
      </button>
      <button className="btn btn-dark" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Hooks;
