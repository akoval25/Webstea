import "../styles/About.scss";

function About() {
  return (
    <section className="about section__mb">
      <div className="about__top">
        <div className="container">
          <h2>Про нас</h2>
          <p>
            Ласкаво просимо у світ Webstea, де креативність поєднується з
            функціональністю.
          </p>
          <p>
            Наша місія - розширювати можливості бізнесу за допомогою візуально
            приголомшливих і високофункціональних веб-сайтів.
          </p>
          <p>
            Як компанія, ми пишаємося тим, що є архітекторами успіху в Інтернеті
            для бізнесу в різних галузях.
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <div className="container">
          <div className="about__bottom-inner">
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">4</h3>
              <p className="about__bottom-text">роки на ринку</p>
            </div>
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">50</h3>
              <p className="about__bottom-text">готових проєктів</p>
            </div>
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">100</h3>
              <p className="about__bottom-text">ще чогось там</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
