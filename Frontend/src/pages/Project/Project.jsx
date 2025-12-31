import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const images = [
    "https://picsum.photos/id/1011/400/300",
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1016/400/300",
    "https://picsum.photos/id/1020/400/300",
    "https://picsum.photos/id/1024/400/300",
  ];

  const visibleCount = 3;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < images.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="project">
      <div className="heading_Procject">What We Do</div>
      <div className="heading_Procject1">Our Projects</div>
      <p className="Project_para">
        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
      </p>


      <div className="slider-container">
        <button className="arrow left" onClick={prev}>❮</button>

        <div className="slider-window">
          <div
            className="slides"
            style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
          >
            {images.map((img, i) => (
              <div className="slide" key={i}>
                <img src={img} alt="project" />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>❯</button>
      </div>
    </div>
  );
};

export default Project;
