import React from "react";
import SingleSeries from "../SingleSeries/SingleSeries-component";
import "./series.css";
import { useState } from "react";

const Series = () => {
  const [data] = useState({
    id1: {
      title1: "Mock Test(Class 6th)",
      color1: "grey"
    },
    id2: {
      title2: "Jawahar Navodaya Mock Test-1",
      detail2: "80 Questions | 100 Marks | 120 Min",
      color2: "skyblue"
    },
    id3: {
      title3: "Jawahar Navodaya Mock Test-2",
      color3: "pink"
    },
    id4: "Jawahar Navodaya Mock Test-3",
    id5: "Jawahar Navodaya Mock Test-4"
  });

  const {
    id1: { title1, color1 },
    id2: { title2, detail2, color2 },
    id3: { title3, color3 },
    id4,
    id5
  } = data;

  return (
    <div className="series">
      <div>
        <SingleSeries title={title1} color={color1} />
        <SingleSeries title={title2} detail={detail2} color={color2} />
        <SingleSeries title={title3} detail={detail2} color={color3} />
        <SingleSeries title={id4} detail={detail2} color={color3} />
        <SingleSeries title={id5} detail={detail2} color={color3} />
      </div>
    </div>
  );
};

export default Series;
