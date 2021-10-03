import React from "react";
import "./testSection.css";

const TestSection = ({ test, style, color }) => (
  <div className="testSection">
    <div
      style={{ backgroundColor: style, color: color }}
      className="backGround"
    >
      {test}
    </div>
  </div>
);

export default TestSection;
