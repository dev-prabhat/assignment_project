import React from "react";
import { useState } from "react";
import "./middle.css";

const Middle = () => {
  const [data] = useState(
    "Home > School Level - All India > Jawahar Navodaya Entrance > Jawahar Navodaya Entrance Exam"
  );
  return (
    <div className="middle">
      <p className="section">{data}</p>
    </div>
  );
};

export default Middle;
