import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Events = () => {
  let baslik = "MERHABA";
  let count = 2;
  const clicked = () => {
    alert("asdad");
  };
  const clear = (p) => {
    document.querySelector(".btn-primary").textContent = p;
  };

  const increase = () => {
    console.log(count += 1)

  };
  return (
    <div className="container text-center mt-4">
      <h1>INFO: {baslik}</h1>
      <button className="btn btn-info" onClick={clicked}>
        Click
      </button>
      <button
        className="btn btn-primary"
        onClick={() => clear("button cleared")}
      >
        Clear
      </button>

      <h2 className="mt-4">COUNT:{count}</h2>
      <button className="btn btn-warning" onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default Events;
