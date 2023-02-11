type Props = {
    imgSrc: string,
}

export default function SliderItem({ imgSrc }: Props) {
  return (
    <li className="slider-gallery-item">
      <img className="slider-gallery-item__image" src={imgSrc} alt=""></img>
    </li>
  );
}
