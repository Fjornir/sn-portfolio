import Slider from "./Slider";

function Works({ props }: { props: { title: string } }) {
  return (
    <div id="works" className="page-item">
      <h3 className="page-item__title skills__title">{props.title}</h3>
      <Slider></Slider>
    </div>
  );
}

export default Works;
