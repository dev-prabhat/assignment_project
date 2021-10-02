import React from "react";
import "./question.css";

const Question = ({ title, question, marks, minutes }) => (
  <div className="single">
    <h5 className="examName">{title}</h5>
    <h5 className="question">Question {question}</h5>
    <h5 className="marks">Marks {marks}</h5>
    <h5 className="minutes">Minute {minutes} min</h5>
    <button className="block">
      <bold>START TEST</bold>
    </button>
  </div>
);

export default Question;
