type Props = {
  imgSrc: string;
  link: string;
};

export default function SliderItem( props : Props) {
  return (
    <a href={props.link}>
      <li className="slider-gallery-item">
        <img className="slider-gallery-item__image" src={props.imgSrc} alt=""></img>
      </li>
    </a>
  );
}
