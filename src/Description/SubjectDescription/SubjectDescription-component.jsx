import React from "react";
import TestSection from "../../MockTestSection/TestSection/TestSection-component";
import "./subjectDescription.css";
import { useState } from "react";

const SubjectDescription = () => {
  const [data] = useState({
    id1: {
      title: "Mock Test",
      style: "#add8e6"
    },
    id2: "Exam Preparation",
    id3: "Online Test Series",
    id4: "Mock Test Key Features",
    id5: "Subjects Cover in Test Series",
    id6: "Details",
    id7: "Exam Date",
    id8: "Eligibilty",
    id9: "Syllabus",
    id10: "Exam Pattern",
    id11: "Important Dates",
    id12: "Results",
    id13: "Other Information"
  });

  const {
    id1: { title, style },
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    id9,
    id10,
    id11,
    id12,
    id13
  } = data;

  return (
    <div className="test-series">
      <TestSection test={title} style={style} />
      <TestSection test={id2} />
      <TestSection test={id3} />
      <TestSection test={id4} />
      <TestSection test={id5} />
      <TestSection test={id6} />
      <TestSection test={id7} />
      <TestSection test={id8} />
      <TestSection test={id9} />
      <TestSection test={id10} />
      <TestSection test={id11} />
      <TestSection test={id12} />
      <TestSection test={id13} />
    </div>
  );
};

export default SubjectDescription;
