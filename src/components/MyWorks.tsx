import Slider from "./Slider";
import "../style/myWorksStyle.scss";

function MyWorks() {
  //   let i = 1;
  //   for (let li of document.querySelectorAll(".works-gallery__item")) {
  //     console.log(li)
  //     let kal = li.style
  //     li.style.position = "relative";
  //     li.insertAdjacentHTML(
  //       "beforeend",
  //       `<span style="position:absolute;left:0;top:0">${i}</span>`
  //     );
  //     i++;
  //   }

  return (
    <div className="page-item">
      <Slider></Slider>
    </div>
  );
}

export default MyWorks;
