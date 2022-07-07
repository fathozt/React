import React from "react";
import Clock from "../clock/Clock";
import Img from "../img/voltran.jpg";
import Img2 from "../img/voltran2.jpg";
import "./Msg.css";

const stylesA = {
  color: "green",
  fontFamily: "Tahoma",
  border: "1px solid red",
};

const Msg = () => {
  let btnClick = (a) => {
    alert(a);
  };
  return (
    <div>
      <button onClick={() => btnClick("paramtre")}>Click</button>

      <h2>Hobbb Yaqlaadimm</h2>
      <p style={stylesA}>biurasi jsx alaani biladerimmmmmmm</p>

      <img className="msg-img" src={Img2} alt="" />
      <img className="msg-img" src={Img} alt="" />

      <Clock />
    </div>
  );
};

export default Msg;
