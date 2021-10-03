import React from "react";
import TestSection from "../TestSection/TestSection-component";
import "./testSeries.css";
import { useState } from "react";

const TestSeries = () => {
  const [data] = useState({
    test1: {
      id1: "Test Series",
      style1: "grey"
    },
    test2: {
      id2: "Mock Test (Class 6th)",
      style2: "#add8e6",
      color: "	#800000"
    },
    test3: "Sectional Test",
    test4: "Mental Ability",
    test5: "Verbal Ability",
    test6: "Mathematics",
    test7: "Reasoning"
  });

  const {
    test1: { id1, style1 },
    test2: { id2, style2, color },
    test3,
    test4,
    test5,
    test6,
    test7
  } = data;

  return (
    <div className="test-series">
      <TestSection test={id1} style={style1} color={color} />
      <TestSection test={id2} style={style2} />
      <TestSection test={test3} />
      <TestSection test={test4} />
      <TestSection test={test5} />
      <TestSection test={test6} />
      <TestSection test={test7} />
    </div>
  );
};

export default TestSeries;
