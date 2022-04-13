import React from "react";
import { Chrono } from "react-chrono";

const timeline = [
  {
    title: "Scratch Programming Instructor",
    cardTitle: "Thate Pan Institute",
    url: "https://thatepanhub.org/",
    cardDetailedText:
      "Teaching the basics of programming to children from age 9 to 13. I taught them how to program in Scratch and how to use the Scratch blocks to create games.",
  },
  {
    title: "Full Stack Web Developer",
    cardTitle: "MS Managing and Consulting Company",
    url: "",
    cardDetailedText:
      "I worked as a Full Stack Web Developer to develop a website for their business. I used Django for backend, NextJs and ReactJs for frontend.",
  },
];

export default function Timeline() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Chrono
        scrollable={{ scrollbar: false }}
        theme={{}}
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        items={timeline}
      >
        <div className="chrono-icons">
          <img src={require("../../../logos/tpiLogo.png")} alt="tpi" />
          <img
            style={{ borderRadius: "50%" }}
            src={require("../../../logos/ms.jpg")}
            alt="msJob"
          />
        </div>
      </Chrono>
    </div>
  );
}
