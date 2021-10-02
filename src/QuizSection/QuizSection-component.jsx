import React from "react";
import Questions from "./Questions/Questions.component";
import "./quizsection.css";

const QuizSection = () => (
  <div className="quizzes">
    <h1 className="color">Quizess </h1>
    <Questions />
  </div>
);

export default QuizSection;
