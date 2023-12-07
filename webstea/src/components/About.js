import "../styles/About.scss";
import { useLang } from "../scripts/LangContext.js";

function About() {
  const { getLangText } = useLang();
  return (
    <section id="about" className="about section__mb">
      <div className="about__top">
        <div className="container">
          <h2 className="lng-about-title">{getLangText("about-title")}</h2>
          <p className="lng-about-first-sentence">
          {getLangText("about-first-sentence")}
          </p>
          <p className="lng-about-second-sentence">
          {getLangText("about-second-sentence")}
          </p>
          <p className="lng-about-third-sentence">
          {getLangText("about-third-sentence")}
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <div className="container">
          <div className="about__bottom-inner">
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">4</h3>
              <p className="about__bottom-text lng-about-first-bottom-text">{getLangText("about-first-bottom-text")}</p>
            </div>
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">50</h3>
              <p className="about__bottom-text lng-about-second-bottom-text">{getLangText("about-second-bottom-text")}</p>
            </div>
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">100</h3>
              <p className="about__bottom-text lng-about-third-bottom-text">{getLangText("about-third-bottom-text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
