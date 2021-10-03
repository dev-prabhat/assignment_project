import React from "react";
import "./mockTestSection.css";
import Series from "./Series/Series-component";
import TestSeries from "./TestSeries/TestSeries-component";

const MockTestSection = () => (
  <div className="test-section">
    <TestSeries />
    <Series />
  </div>
);

export default MockTestSection;
