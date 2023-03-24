import SliderItem from "./SliderItem";
import "../style/slider.scss";
import React, { useRef, useState, useEffect } from "react";

export default function Slider() {
  const slider = useRef() as React.MutableRefObject<HTMLUListElement>;
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);
  const [isDisabledRight, setIsDisabledRight] = useState(true);
  const [marginLeft, setMarginLeft] = useState("0");
  const [viewSlidesCount, setViewSlidesCount] = useState(1);
  const [isScreenWidthCalc, setIsScreenWidthCalc] = useState(false);
  let sliderCurrent: HTMLUListElement;

  // жмяк на кнопку -> изменение стейта -> все зависимые от состояния элементы изменяются в соответствии

  useEffect(() => {
    console.log("componentDidMount");
    sliderCurrent = slider?.current;

    if (isScreenWidthCalc) {
      sliderCurrent.style.marginLeft = marginLeft;
      disableButton();
    }

    const sliderWidth = document.querySelector(".slider-wrapper");
    if (sliderWidth) {
      resizeObserver.observe(sliderWidth);
    }
  });

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [marginLeft]);

  const resizeObserver = new ResizeObserver(
    (entries: ResizeObserverEntry[]) => {
      entries[0].contentBoxSize[0].inlineSize >= 540
        ? setViewSlidesCount(2)
        : setViewSlidesCount(1);
      setIsScreenWidthCalc(true);
    }
  );

  function disableButton() {
    const slidesCount = sliderCurrent.children.length;
    const ml = getMarginLeft(sliderCurrent);
    console.log({ slidesCount, viewSlidesCount });
    
    if (slidesCount <= viewSlidesCount) {
      setIsDisabledLeft(true);
      setIsDisabledRight(true);
    }
    if (ml <= -270) {
      setIsDisabledLeft(false);
    }
    if (ml <= -((slidesCount - viewSlidesCount) * 270)) {
      setIsDisabledRight(true);
    }
    if (ml > -((slidesCount - viewSlidesCount) * 270)) {
      setIsDisabledRight(false);
    }

    if (ml >= 0) {
      setIsDisabledLeft(true);
    }
  }

  function rightScroll() {
    const ml = getMarginLeft(sliderCurrent);
    setMarginLeft(ml - 270 + "px");
  }

  function leftScroll() {
    const ml = getMarginLeft(sliderCurrent);
    setMarginLeft(ml + 270 + "px");
    sliderCurrent.style.marginLeft = marginLeft;
  }

  function getMarginLeft(elem: HTMLUListElement): number {
    const value = elem.style.marginLeft;
    const item = value.match(/-?\d+/)?.[0];
    return item ? Number.parseInt(item) : 0;
  }

  return (
    <div className="slider">
      <button
        disabled={isDisabledLeft}
        onClick={leftScroll}
        className="slider__btn slider__btn--next"
      >
        {"<"}
      </button>
      <div className="slider-wrapper">
        {isScreenWidthCalc && (
          <ul ref={slider} className="slider-gallery">
            <SliderItem
              imgSrc={require("../images/Ex1.png")}
              link={"https://fjornir.github.io/buhone/"}
            ></SliderItem>
            <SliderItem
              imgSrc={require("../images/Ex2.png")}
              link={"https://fjornir.github.io/todolist/"}
            ></SliderItem>
            {/* <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
          <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
          <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem> */}
          </ul>
        )}
      </div>
      <button
        disabled={isDisabledRight}
        onClick={rightScroll}
        className="slider__btn slider__btn--prev"
      >
        {">"}
      </button>
    </div>
  );
}
