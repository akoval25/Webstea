import "../styles/Hero.css";
import "../styles/Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1>Розробка сайтів для бізнесу</h1>
          <p>
            Webstea - це команда пристрасних професіоналів, які прагнуть
            революціонізувати сферу веб-розробки.
          </p>
          <a href="#" className="btn">
            Замовити сайт
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
