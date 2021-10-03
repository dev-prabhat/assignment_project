import React from "react";
import "./description.css";
import ExamDescription from "./Exam-Description/Exam-Description-component";
import SubjectDescription from "./SubjectDescription/SubjectDescription-component";

const Description = () => (
  <div className="description">
    <SubjectDescription />
    <ExamDescription />
  </div>
);

export default Description;
