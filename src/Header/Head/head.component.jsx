import React from "react";
import "./head.css";

const Head = () => (
  <div className="flex">
    <p className="title">EDUGORILLA</p>
    <input
      className="input"
      style={{ width: "370px", height: "30px" }}
      type="text"
      placeholder="  NIMCET"
    />
    <p className="exam">Exam</p>
    <p className="key">Activation Key</p>
    <p className="name">Prabhat Singh</p>
  </div>
);

export default Head;
