import SliderItem from "./SliderItem";
import "../style/slider.scss";

export default function Slider() {

  function leftScroll() {
    
  }

  return (
    <div className="slider">
      <button onClick={leftScroll} className="slider__btn slider__btn--next">
        {"<"}
      </button>
      <ul className="slider-gallery">
        <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
        <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
        <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
        <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
        <SliderItem imgSrc={require("../images/Ex1.png")}></SliderItem>
      </ul>
      <button className="slider__btn slider__btn--prev">{">"}</button>
    </div>
  );
}
