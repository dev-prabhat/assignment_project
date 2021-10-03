import React from "react";
import "./singleSeries.css";

const SingleSeries = ({ title, detail, color }) => (
  <div className="singleSeries">
    <div style={{ backgroundColor: color, fontSize: "18px", padding: "25px" }}>
      {title}
      <br />
      {detail}
    </div>
  </div>
);

export default SingleSeries;
