function Description({props}: { props: { title: string, text: string }; }) {
  return (
    <div className="description-container page-item ">
      <figure className="description-container__photo">
      </figure>
      <section className="description-container-info">
        <h1 className="description-container-info__title">
          {props.title}
        </h1>
        <article className="description-container-info__text">
          {props.text}
          {/* Меня зовут Никита, Я занимаюсь версткой лендингов, промо,
          корпоративных веб-сайтов, с использованием HTML5 и SCSS. Логику
          описываю при помощи Javascript(Typescript) на фреймворке React. Моя цель - это
          создание качественного, понятного и доступного продукта на рынке
          веб-разработки. Всегда открыт к изучению чего то нового и интересного. */}
        </article>
      </section>
    </div>
  );
}

export default Description;
