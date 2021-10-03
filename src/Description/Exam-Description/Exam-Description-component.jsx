import React from "react";
import "./examDescription.css";
import { useState } from "react";
import TestSection from "../../MockTestSection/TestSection/TestSection-component";

const ExamDescription = () => {
  const [data] = useState({
    id1: "Jawahar Navodaya Vidyalaya Mock Test 2021",
    id2: "In Jawahar Navodaya Vidyalaya Mock Test",
    style: "grey",
    color: "#800000"
  });

  const { id1, id2, style, color } = data;
  return (
    <div className="exam-description">
      <div style={{ padding: "5px" }}>
        <TestSection test={id1} style={style} color={color} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis accusamus et suscipit consectetur reiciendis totam modi
          necessitatibus laudantium magnam officia aut, repellat alias deserunt
          ullam ad! Suscipit, nemo laboriosam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis perspiciatis accusamus et suscipit
          consectetur reiciendis totam modi necessitatibus laudantium magnam
          officia aut, repellat alias deserunt ullam ad! Suscipit, nemo
          laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis perspiciatis accusamus et suscipit consectetur reiciendis totam
          modi necessitatibus laudantium magnam officia aut, repellat alias
          deserunt ullam ad! Suscipit, nemo laboriosam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis accusamus et suscipit consectetur reiciendis totam modi
          necessitatibus laudantium magnam officia aut, repellat alias deserunt
          ullam ad! Suscipit, nemo laboriosam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis perspiciatis accusamus et suscipit
          consectetur reiciendis totam modi necessitatibus laudantium magnam
          officia aut, repellat alias deserunt ullam ad! Suscipit, nemo
          laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis perspiciatis accusamus et suscipit consectetur reiciendis totam
          modi necessitatibus laudantium magnam officia aut, repellat alias
          deserunt ullam ad! Suscipit, nemo laboriosam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis accusamus et suscipit consectetur reiciendis totam modi
          necessitatibus laudantium magnam officia aut, repellat alias deserunt
          ullam ad! Suscipit, nemo laboriosam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis perspiciatis accusamus et suscipit
          consectetur reiciendis totam modi necessitatibus laudantium magnam
          officia aut, repellat alias deserunt ullam ad! Suscipit, nemo
          laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis perspiciatis accusamus et suscipit consectetur reiciendis totam
          modi necessitatibus laudantium magnam officia aut, repellat alias
          deserunt ullam ad! Suscipit, nemo laboriosam!
        </p>
        <TestSection test={id2} style={style} color={color} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis accusamus et suscipit consectetur reiciendis totam modi
          necessitatibus laudantium magnam officia aut, repellat alias deserunt
          ullam ad! Suscipit, nemo laboriosam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis perspiciatis accusamus et suscipit
          consectetur reiciendis totam modi necessitatibus laudantium magnam
          officia aut, repellat alias deserunt ullam ad! Suscipit, nemo
          laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis perspiciatis accusamus et suscipit consectetur reiciendis totam
          modi necessitatibus laudantium magnam officia aut, repellat alias
          deserunt ullam ad! Suscipit, nemo laboriosam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis accusamus et suscipit consectetur reiciendis totam modi
          necessitatibus laudantium magnam officia aut, repellat alias deserunt
          ullam ad! Suscipit, nemo laboriosam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis perspiciatis accusamus et suscipit
          consectetur reiciendis totam modi necessitatibus laudantium magnam
          officia aut, repellat alias deserunt ullam ad! Suscipit, nemo
          laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis perspiciatis accusamus et suscipit consectetur reiciendis totam
          modi necessitatibus laudantium magnam officia aut, repellat alias
          deserunt ullam ad! Suscipit, nemo laboriosam!
        </p>
      </div>
    </div>
  );
};

export default ExamDescription;
