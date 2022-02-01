import React from "react";
import { useState } from "react";
import "./styles/SlideCard.css";

function SlideCard(props) {
  const TEXT = ["texto 1", "texto 2", "texto 3"];
  const [slide, updateSlide] = useState({
    currentIndex: 0,
    lastIndex: -1,
    direction: 0,
  });

  return (
    <>
      <div className="SlideCard">
        <h1>
          Varias funcoes em <br></br> um unico lugar.
        </h1>
      </div>
      <Carousel
        direction={slide.direction}
        currentIndex={slide.direction}
        lastIndex={slide.currentIndex}
        updateSlide={updateSlide}
        text={TEXT.props}
      />
    </>
  );
}

function Carousel(props) {
  function showNext(index) {
    let lastIndex =
      index < 0
        ? 0
        : index === props.text.length
        ? props.text.length - 1
        : index;
    let currentIndex = index + 1 === props.text.length ? 0 : index + 1;
    props.updateSlide({ currentIndex, lastIndex, direction: 1 });
  }
  function showPrevious(index) {
    let lastIndex = index < 0 ? 0 : index;
    let currentIndex = index - 1 < 0 ? props.text.length - 1 : index - 1;
    props.updateSlide({ currentIndex, lastIndex, direction: -1 });
  }
  return (
    <div className={"carousel carousel--" + props.text[props.currentIndex][0]}>
      <div
        onClick={() => showPrevious(props.currentIndex)}
        className="controls controls--back"
      >
        <span></span>
      </div>

      <div
        onClick={() => showNext(props.currentIndex)}
        className="controls controls --next"
      >
        <span></span>
      </div>
    </div>
  );
}

export default SlideCard;
