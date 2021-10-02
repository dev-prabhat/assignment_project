import React from "react";
import { useState } from "react";
import Question from "../Question/Question-component";
import "./questions.css";

const Questions = () => {
  const [test] = useState({
    title: "Jawahar Navodaya Entrance Exam - Quiz",
    question: 20,
    marks: 20,
    minutes: 10
  });

  const { title, question, marks, minutes } = test;

  return (
    <div className="background">
      <div className="component">
        <Question
          title={title}
          question={question}
          marks={marks}
          minutes={minutes}
        />
        <Question
          title={title}
          question={question}
          marks={marks}
          minutes={minutes}
        />
        <Question
          title={title}
          question={question}
          marks={marks}
          minutes={minutes}
        />
        <Question
          title={title}
          question={question}
          marks={marks}
          minutes={minutes}
        />
      </div>
    </div>
  );
};

export default Questions;
