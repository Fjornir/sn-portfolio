import "../style/aboutMe.scss";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-container__photo">
      </div>
      <div className="about-container-info">
        <h1 className="about-container-info__title">
          Привет! Я Junior Frontend Developer
        </h1>
        <div className="about-container-info__text">
          Меня зовут Никита, Я занимаюсь версткой лендингов, промо,
          корпоративных веб-сайтов, с использованием HTML5 и SCSS. Логику
          описываю при помощи Javascript на фреймворке React. Моя цель - это
          создание качественного, понятного и доступного продукта на рынке
          веб-разработки. Всегда открыт к изучению чего то нового и интересного.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
