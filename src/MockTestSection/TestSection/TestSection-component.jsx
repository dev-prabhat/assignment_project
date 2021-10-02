import React from "react";
import "./testSection.css";

const TestSection = ({ test, style }) => (
  <div className="testSection">
    <div style={{ backgroundColor: style }} className="backGround">
      {test}
    </div>
  </div>
);

export default TestSection;
