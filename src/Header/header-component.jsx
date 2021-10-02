import React from "react";
import Foot from "./Foot/foot-component";
import Head from "./Head/head.component";
import "./header.css";
import Middle from "./Middle/middle-component";

const Header = () => (
  <div className="flex-container">
    <Head />
    <Middle />
    <Foot />
    <div className="start">
      <button className="button">
        <h5>START FREE TEST</h5>
      </button>
    </div>
  </div>
);

export default Header;
