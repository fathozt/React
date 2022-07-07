import React from "react";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
